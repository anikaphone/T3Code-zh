# 公共约定

本项目基于 T3 Code 官方正式版源码，以非侵入式补丁集的方式构建 Windows 与 macOS 桌面端安装包。上游自 `v0.1.11` 起已原生支持完整简体中文界面与桌面菜单，因此本项目不再维护外挂 AST 汉化插件与独立词库，仅维护精简补丁与构建守卫。

## 1. 基线与目录

- 基线 tag：`v0.1.11`
- 基线 commit：`59651c1761f6c63e9b6056839067066968e6a406`
- 上游仓库：远端 `pingdotgg/t3code`（本地只读克隆位于 `upstream/`，或由 `T3ZH_UPSTREAM_REPO` 指定）
- 版本跟进渠道：只跟进官方正式 Release，不主动跟进 Nightly / Preview。

```
t3code-zh/
├── upstream/                  基线 tag 的只读上游克隆（git 忽略）
├── .build/src/                专供构建的干净工作树（git 忽略）
├── release/                   构建产物（git 忽略）
├── patches/                   跨平台共享补丁（0005 / 0019 / 0025 / 0026），按编号顺序应用
├── scripts/                   build-zh.sh、build-zh-win.ps1、windows/、lib/
├── .github/workflows/         release.yml（Windows + macOS 自动编译与发版）
└── docs/                      构建、升级与缺陷复核文档
```

TypeScript 脚本直接用 `node scripts/xxx.ts` 运行（Node >= 24 类型擦除），只写可擦除的 TS 语法（不用 enum、namespace、参数属性）。

## 2. 硬规则

1. **不读写 `~/.t3/userdata`**（真实用户数据）。本地烟测一律使用独立沙盒目录。
2. **不改 `/Applications` 下的已安装应用**，正式安装由维护者手动完成。
3. **`upstream/` 只读。** 任何任务结束时，`git -C upstream status --porcelain` 必须为空。
4. **补丁打不上就报错中止**：构建严禁使用 `git apply -3` / `--reject` 兜底。
5. **只提交任务范围内的文件**，不改写已推送历史。
6. **每次升级上游新版本时，必须复核 `0026-antigravity-multi-question.patch`**：检查上游 `AntigravityAdapterV2.ts` / `elicitationForm.ts` 是否已彻底修复 Antigravity（`agy`）调用 `ask_question` 一次提 ≥ 2 题时单下划线 `qN` / `qN_other` 未配对折叠的 bug（详见 `docs/ANTIGRAVITY-ASK-QUESTION-FIX.md`）；若上游尚未修复，必须将该补丁迁移至新基线。

## 3. 版本号约定

- 交付版本号格式：`<上游版本>-zh.<序号>`（例如 `0.1.11-zh.1`）。
- 禁止使用 `-nightly.YYYYMMDD.N`、`-pr.N.`、`-preview.YYYYMMDD.N` 形式，以免触发上游 Nightly/Preview 命名与通道逻辑。
