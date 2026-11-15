# Antigravity `ask_question` 多问题选项丢失修复说明（`patches/0026-antigravity-multi-question.patch`）

> 本文为 AI 升级检查与维护必读文档。每次检测、拉取并迁移到新的 T3 Code 上游正式版时，必须按「[升级检查清单](#每次更新上游版本时的-ai-必查清单)」核实上游是否已彻底修复本缺陷；若上游尚未修复或修复不完整，必须将 `patches/0026-antigravity-multi-question.patch` 迁移并在新基线源码上重新应用。

---

## 1. Bug 现象

在 T3 Code 中使用 **Antigravity（`agy`）** 作为 provider 时，如果 agent 调用 `ask_question` 一次向用户提出 **2 个及以上问题**，前端交互卡片中**只有第 1 个问题能够正常显示选项**；从第 2 步开始选项区域为空（不显示任何选项），并且「下一步 / 提交」按钮无法点击，导致用户既无法选择也无法推进后续问题。

---

## 2. 根因分析

### 2.1 `agy` 侧（ACP 协议输出结构）

通过对本机 `agy.EXE`（`v1.5.9`）ACP 服务端实现（`(*ACPServer).askQuestion` / `buildQuestionElicitation` / `questionAnswersFromElicitation`）的反汇编分析，确认其行为如下：

1. 因为 T3 Code 在 ACP `initialize` 能力声明中通告了 `elicitation: { form: {} }`（见上游 `packages/provider-acp/src/server/adapter.ts`），`agy` 总是将 `ask_question` 路由到 `elicitation/create`（`mode: "form"`），而不是早期的 `interaction_*` `session/request_permission` 单题路径。
2. 在 `buildQuestionElicitation` 中，`agy` 按 1 起始序号为每个问题生成表单字段：
   - **纯开放题（无选项）**：仅输出 `q{N}_other = { type: "string", title: <问题文本> }`。
   - **选择题（有选项）**：同时输出两个属性：
     - `q{N}`：单选为 `{ type: "string", title: <问题文本>, oneOf: [{ const, title, description? }, ...] }`；多选为 `{ type: "array", title: <问题文本>, items: { anyOf: [...] } }`。
     - `q{N}_other`：伴随的可选自由输入字段 `{ type: "string", title: "other", description: "Optional free-form answer to: <问题文本>" }`（无 `oneOf` / `enum` / `anyOf`）。
   - 未设置 `required`，且由于 Go `json.Marshal` 对 `map` 按键名字典序序列化，当问题数 ≥ 10 时会出现 `q1`, `q10`, `q10_other`, `q1_other`, `q2`... 的乱序键。
3. 在 `questionAnswersFromElicitation` 中，`agy` 期望 `action: "accept"` 且按问题序号读取 `content["q{N}"]`（选项 `const` ID 或数组）以及 `content["q{N}_other"]`（自由文本），只要二者之一非空即视为该题已作答。

### 2.2 T3 Code 上游侧（`v0.1.9`）

1. `apps/server/src/orchestration-v2/Adapters/AntigravityAdapterV2.ts` 中的 `makeAntigravityAcpAdapterFlavor` 仅实现了 `extractPermissionQuestion`，**未实现 `extractElicitationForm`**（而同类 ACP adapter 如 `droid` 已在 `packages/provider-acp-registry/src/server/droidAcp.ts` 实现了 `extractDroidElicitationForm` 来折叠成对的 `question_N` / `question_N_other`）。
2. 因此 `packages/provider-acp/src/server/adapter.ts` 回退到通用表单解析器 `parseElicitationForm`（`packages/provider-acp/src/server/elicitationForm.ts`）。
3. `parseElicitationForm` 将 `requestedSchema.properties` 的每一个顶层属性都拆成一道独立步骤：
   - 第 1 步是 `q1`（带选项，且 `allowCustomAnswer: false`）。
   - **第 2 步紧接着是 `q1_other`（`options: []`、`header: "other"`）**。
   - 后续是 `q2`、`q2_other`……
4. 用户在第 1 步点击选项后，`ComposerPendingUserInputPanel`（`apps/web/src/components/chat/ComposerPendingUserInputPanel.tsx`）在 200ms 后自动切到第 2 步（`q1_other`）；该步骤**没有任何选项**，同时 `buildPendingUserInputAnswers`（`packages/client-runtime/src/state/pendingUserInput.ts`）判定第 2 步未作答而禁用「下一步 / 提交」，导致整个多题交互卡死。
5. 此外通用回退还伴随三个次生问题：`q{N}` 只有 `title` 无 `description` 时问题正文被放进单行截断的 `header`、无法在选项旁输入自定义回答、≥ 10 题时步骤顺序错乱。

---

## 3. 本项目修复方案（`patches/0026-antigravity-multi-question.patch`）

遵循 `CONVENTIONS.md` 硬规则 #4（`upstream/` 保持只读干净），修复以编号补丁形式保存在 [0026-antigravity-multi-question.patch](file:///d:/Project/Applications/T3Code-zh/patches/0026-antigravity-multi-question.patch)，在构建和准备源码树时自动打到工作副本（`.build/src` 等）：

1. **`apps/server/src/provider/acp/AntigravityProtocol.ts`**
   - 新增并导出 `extractAntigravityElicitationForm`（类型 `NonNullable<AcpAdapterV2Flavor["extractElicitationForm"]>`）。
   - 仅当 `request.mode === "form"` 且 `requestedSchema.properties` 非空、所有键均匹配 `/^q([1-9]\d*)(_other)?$/` 时介入（否则返回 `undefined`，保留通用回退能力）。
   - 按题号数值升序（`1, 2, ..., 10`）归并每个分组：
     - 有 `q{N}` 时校验存在纯字符串伴随字段 `q{N}_other`，将两者**折叠为单个 `UserInputQuestion`**（`id: "qN"`），保留全部选项并允许自由输入（不设置 `allowCustomAnswer: false`），支持单选（`oneOf` / `enum`）与多选（`items.anyOf` / `items.enum`）。
     - 仅有 `q{N}_other`（纯开放题）时生成对应文本输入题目（`id: "qN_other"`, `options: []`）。
     - `description` 缺失时使用 `Question {index}` 作为短标题 `header`，把 `title` 放入完整的 Markdown `question` 正文。
   - 在 `respond(answers)` 中：
     - 选中选项回写 `content["q{N}"]`（单选为选项 ID，多选为 ID 数组）。
     - 自由输入回写 `content["q{N}_other"]`。
     - 选中选项且附带 `\n\nAttached (?:image|file) ...` 附件说明时，同时回写 `content["q{N}"]` 与 `content["q{N}_other"]`。
     - 空回答、无效输入或必填缺失时返回 `{ action: "cancel" }`。
2. **`apps/server/src/orchestration-v2/Adapters/AntigravityAdapterV2.ts`**
   - 在 `makeAntigravityAcpAdapterFlavor` 中挂载 `extractElicitationForm: extractAntigravityElicitationForm`。
3. **单元测试**
   - 在 `apps/server/src/provider/acp/AntigravityProtocol.test.ts` 与 `apps/server/src/orchestration-v2/Adapters/AntigravityAdapterV2.test.ts` 中增加覆盖测试（多题 `q1`/`q1_other` + `q2`/`q2_other`、多选、自定义输入、≥10 题数值排序、纯开放题、附件说明、空答取消、非 Antigravity 表单透传）。

---

## 4. 每次更新上游版本时的 AI 必查清单

每当 AI 检测并拉取上游新 Release（例如在运行 `scripts/upgrade-check.sh`、`scripts/switch-baseline.sh` 或人工跟进上游版本）时，**必须额外执行以下检查**：

1. **检查上游 `AntigravityAdapterV2.ts`**：
   - 查看新版本上游 `apps/server/src/orchestration-v2/Adapters/AntigravityAdapterV2.ts` 中的 `makeAntigravityAcpAdapterFlavor` 是否已配置 `extractElicitationForm`。
2. **检查上游 `elicitationForm.ts` / `AntigravityProtocol.ts`**：
   - 如果上游未实现 `extractElicitationForm`，则**上游尚未修复**，必须继续保留并按新基线重新对齐 `patches/0026-antigravity-multi-question.patch`（如源码上下文有变化需移植重构后重新导出，确保不丢失修复逻辑）。
   - 如果上游已实现 `extractElicitationForm` 或修改了 `parseElicitationForm`，**必须逐条核对以下 5 项均已被上游源码完整解决**，方可退役本补丁：
     1. 是否将成对的 `q{N}` 与 `q{N}_other` 折叠为单道题目，不再弹出空的 `q{N}_other` 卡片步骤？
     2. 用户选择选项时是否将选项 ID 回填到 `q{N}`，自由输入文本时是否回填到 `q{N}_other`？
     3. 多选题（`type: "array"` + `items.anyOf`）与选项附带文件/图片引用时是否正确回传？
     4. 纯开放式 `q{N}_other` 题目及与选择题混排的多题场景是否正常工作？
     5. 题目数量 ≥ 10 时是否按数值顺序排列（`q2` 在 `q10` 之前），且完整问题文本处于 `question` 而非被截断在单行 `header`？
3. **更新状态记录**：
   - 若上游仍未修复（或仅部分修复）：将 `0026` 对齐到新基线，并在当轮交接 / `patches/README.md` 对应版本迁移节说明「已复核上游未修复，继续保留并对齐 `0026-antigravity-multi-question.patch`」。
   - 若上游已**完整覆盖**上述 5 项：移除 `patches/0026-antigravity-multi-question.patch`、清理 `scripts/windows/windows-ci.test.ts` 中对应断言，并同步更新本文档、`patches/README.md`、`CONVENTIONS.md` 与 `docs/UPGRADE.md`。
