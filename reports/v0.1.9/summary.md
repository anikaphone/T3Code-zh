# 覆盖率报告 v0.1.9

- 扫描根：`upstream`（默认 `upstream/`，基线 worktree）
- 词库：`dict/zh-CN.json`，messages 6641 + templates 1558
- 判定来源：`plugin/matcher.ts` 的 `createScanContext` / `listScopeFiles` / `scanModule`
- 预扫描：2949 个文件，值用途字面量 31681 个，0 个解析错误
- 扫描范围：2102 个文件（§4：apps/web/src 与 web 依赖的 packages/*/src，排除测试/stories/bench/.d.ts）

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
| 可翻译位置总数 | 8150 | 5823 |
| 已翻译 | 7958（97.6%） | 5651 |
| 未翻译 | 192（2.4%） | 172 |
| 可疑项 | 337 | 220 |
| └ value-use | 241 | 128 |
| └ template-collision | 96 | 92 |
| mixed-jsx | 488 | 405 |
| A/B 值用途重名（单独清单，见 ab-value-use.md） | 348 | 158 |
| 过期词条（stale） | 2558 | — |

对账：可翻译位置总数 8150 = 已翻译 7958 + 未翻译 192 ✅

## 分类分布（translate / skip / suspicious）

| 类别 | translate | skip | suspicious |
|---|---:|---:|---:|
| A | 2711 | 1006 | 6 |
| B | 2114 | 91 | 2 |
| C | 3168 | 895 | 313 |
| D | 157 | 3 | 16 |

## 按 reason 的出现次数

- `allow-listed`：142
- `as-const-property`：394
- `attribute`：2105
- `brand-name`：2
- `call-arg`：153
- `data-function`：16
- `destructuring-default`：17
- `error-constructor`：363
- `identifier-like`：39
- `jsx-expression`：1140
- `jsx-text`：1356
- `jsx-text-fragment`：208
- `label-function-return`：486
- `label-map`：242
- `mixed-jsx`：488
- `no-letters`：768
- `non-display-call`：316
- `property`：1907
- `rpc-input`：3
- `template-collision`：96
- `value-use`：241

## 与上一份报告的对比

对照 `reports/v0.1.8`（只列本次出现的指标，正数表示比上次多）：

| 指标 | 本次 | 上次 | 变化 |
|---|---:|---:|---:|
| scopeFiles | 2102 | 2091 | +11 |
| candidateOccurrences | 10482 | 10421 | +61 |
| translatableOccurrences | 8150 | 8106 | +44 |
| distinctTranslatable | 5823 | 5786 | +37 |
| translatedOccurrences | 7958 | 7920 | +38 |
| distinctTranslated | 5651 | 5619 | +32 |
| untranslatedOccurrences | 192 | 186 | +6 |
| distinctUntranslated | 172 | 167 | +5 |
| skipOccurrences | 1995 | 1980 | +15 |
| suspiciousOccurrences | 337 | 335 | +2 |
| suspiciousValueUseOccurrences | 241 | 239 | +2 |
| suspiciousCollisionOccurrences | 96 | 96 | 0 |
| abValueUseOccurrences | 348 | 343 | +5 |
| distinctAbValueUse | 158 | 156 | +2 |
| mixedJsxOccurrences | 488 | 482 | +6 |
| staleEntries | 2558 | 2532 | +26 |
| usedDictKeys | 5641 | 5609 | +32 |
| dictMessages | 6641 | 6595 | +46 |
| dictTemplates | 1558 | 1546 | +12 |

## 附：A/B 值用途重名

A（JSX 文本/子表达式）和 B 原始白名单属性即使与值用途字面量相同也照常转换（只用于显示），但 §4 要求在报告里列出——见 `ab-value-use.md`（348 处）。
