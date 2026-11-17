# 覆盖率报告 v0.1.10

- 扫描根：`upstream`（默认 `upstream/`，基线 worktree）
- 词库：`dict/zh-CN.json`，messages 6826 + templates 1595
- 判定来源：`plugin/matcher.ts` 的 `createScanContext` / `listScopeFiles` / `scanModule`
- 预扫描：3081 个文件，值用途字面量 33081 个，0 个解析错误
- 扫描范围：2177 个文件（§4：apps/web/src 与 web 依赖的 packages/*/src，排除测试/stories/bench/.d.ts）

## 口径

- 报告按文件系统扫描 §4 范围（含未被 web 实际引入的 packages/ 文件），而构建插件只转换进入 web 构建模块图的文件，覆盖率数字因此**略偏保守**（分母偏大）。
- **可翻译位置总数**指 `scanModule` 判定为 `translate` 的候选出现次数（同一段文字多处出现算多次）；**去重后的文字数**按「相同 text + 相同 kind」合并。
- **已翻译 / 未翻译按运行时实际查表归类**：对每个 `translate` 候选，先查 messages 再查 templates（`runtime/t3zh-runtime.ts` 的 `createTranslator`，也是 matcher 做模板误配检查时用的同一实现与顺序）。能查到即「已翻译」，即使源码里的建议 key 是 `{0}` 形式、而词库用的是命名占位符（如源码 `Open in {0}` 命中词库模板 `Open in {fileManager}`）。查不到才是「未翻译」。
- `untranslated.json` 里的 `text` 是**建议 key**（把运行时表达式换成 `{0}`、`{1}` 后的形式），补词条时用它；它与「已用词条」是两套 key，别混。
- 可疑项、mixed-jsx 与 A/B 值用途重名清单都**单独统计**，不计入可翻译位置总数；因此 `可翻译位置总数 = 已翻译 + 未翻译` 恒成立。
- **过期词条（stale）**：词库里有、但没有任何 `translate` 候选会在运行时命中它的条目（按真正命中的词库 key 判据，不按源码里搜不搜得到）。只列出，不删除。
- 位置分类 A/B/C/D 与 reason 代码见 CONVENTIONS §4 与 `plugin/matcher.ts` 的 `Candidate.reason` 注释。

## 数字

| 指标 | 出现次数 | 去重后文字数 |
|---|---:|---:|
| 可翻译位置总数 | 8234 | 5894 |
| 已翻译 | 8036（97.6%） | 5716 |
| 未翻译 | 198（2.4%） | 178 |
| 可疑项 | 359 | 232 |
| └ value-use | 262 | 139 |
| └ template-collision | 97 | 93 |
| mixed-jsx | 483 | 401 |
| A/B 值用途重名（单独清单，见 ab-value-use.md） | 368 | 165 |
| 过期词条（stale） | 2715 | — |

对账：可翻译位置总数 8234 = 已翻译 8036 + 未翻译 198 ✅

## 分类分布（translate / skip / suspicious）

| 类别 | translate | skip | suspicious |
|---|---:|---:|---:|
| A | 2766 | 1006 | 7 |
| B | 2147 | 90 | 2 |
| C | 3154 | 926 | 332 |
| D | 167 | 3 | 18 |

## 按 reason 的出现次数

- `allow-listed`：140
- `as-const-property`：390
- `attribute`：2138
- `brand-name`：2
- `call-arg`：163
- `data-function`：16
- `destructuring-default`：17
- `error-constructor`：372
- `identifier-like`：40
- `jsx-expression`：1160
- `jsx-text`：1386
- `jsx-text-fragment`：213
- `label-function-return`：488
- `label-map`：206
- `mixed-jsx`：483
- `no-letters`：784
- `non-display-call`：325
- `property`：1933
- `rpc-input`：3
- `template-collision`：97
- `value-use`：262

## 与上一份报告的对比

对照 `reports/v0.1.9`（只列本次出现的指标，正数表示比上次多）：

| 指标 | 本次 | 上次 | 变化 |
|---|---:|---:|---:|
| scopeFiles | 2177 | 2102 | +75 |
| candidateOccurrences | 10618 | 10482 | +136 |
| translatableOccurrences | 8234 | 8150 | +84 |
| distinctTranslatable | 5894 | 5823 | +71 |
| translatedOccurrences | 8036 | 7958 | +78 |
| distinctTranslated | 5716 | 5651 | +65 |
| untranslatedOccurrences | 198 | 192 | +6 |
| distinctUntranslated | 178 | 172 | +6 |
| skipOccurrences | 2025 | 1995 | +30 |
| suspiciousOccurrences | 359 | 337 | +22 |
| suspiciousValueUseOccurrences | 262 | 241 | +21 |
| suspiciousCollisionOccurrences | 97 | 96 | +1 |
| abValueUseOccurrences | 368 | 348 | +20 |
| distinctAbValueUse | 165 | 158 | +7 |
| mixedJsxOccurrences | 483 | 488 | -5 |
| staleEntries | 2715 | 2558 | +157 |
| usedDictKeys | 5706 | 5641 | +65 |
| dictMessages | 6826 | 6641 | +185 |
| dictTemplates | 1595 | 1558 | +37 |

## 附：A/B 值用途重名

A（JSX 文本/子表达式）和 B 原始白名单属性即使与值用途字面量相同也照常转换（只用于显示），但 §4 要求在报告里列出——见 `ab-value-use.md`（368 处）。
