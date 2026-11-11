# 覆盖率报告 v0.1.8

- 扫描根：`upstream`（默认 `upstream/`，基线 worktree）
- 词库：`dict/zh-CN.json`，messages 6595 + templates 1546
- 判定来源：`plugin/matcher.ts` 的 `createScanContext` / `listScopeFiles` / `scanModule`
- 预扫描：2937 个文件，值用途字面量 31487 个，0 个解析错误
- 扫描范围：2091 个文件（§4：apps/web/src 与 web 依赖的 packages/*/src，排除测试/stories/bench/.d.ts）

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
| 可翻译位置总数 | 8106 | 5786 |
| 已翻译 | 7920（97.7%） | 5619 |
| 未翻译 | 186（2.3%） | 167 |
| 可疑项 | 335 | 218 |
| └ value-use | 239 | 126 |
| └ template-collision | 96 | 92 |
| mixed-jsx | 482 | 399 |
| A/B 值用途重名（单独清单，见 ab-value-use.md） | 343 | 156 |
| 过期词条（stale） | 2532 | — |

对账：可翻译位置总数 8106 = 已翻译 7920 + 未翻译 186 ✅

## 分类分布（translate / skip / suspicious）

| 类别 | translate | skip | suspicious |
|---|---:|---:|---:|
| A | 2698 | 994 | 6 |
| B | 2101 | 91 | 2 |
| C | 3150 | 892 | 311 |
| D | 157 | 3 | 16 |

## 按 reason 的出现次数

- `allow-listed`：142
- `as-const-property`：394
- `attribute`：2092
- `brand-name`：2
- `call-arg`：153
- `data-function`：16
- `destructuring-default`：17
- `error-constructor`：361
- `identifier-like`：39
- `jsx-expression`：1135
- `jsx-text`：1346
- `jsx-text-fragment`：210
- `label-function-return`：485
- `label-map`：239
- `mixed-jsx`：482
- `no-letters`：763
- `non-display-call`：314
- `property`：1893
- `rpc-input`：3
- `template-collision`：96
- `value-use`：239

## 与上一份报告的对比

对照 `reports/v0.1.7`（只列本次出现的指标，正数表示比上次多）：

| 指标 | 本次 | 上次 | 变化 |
|---|---:|---:|---:|
| scopeFiles | 2091 | 2022 | +69 |
| candidateOccurrences | 10421 | 9864 | +557 |
| translatableOccurrences | 8106 | 7227 | +879 |
| distinctTranslatable | 5786 | 5101 | +685 |
| translatedOccurrences | 7920 | 6780 | +1140 |
| distinctTranslated | 5619 | 4698 | +921 |
| untranslatedOccurrences | 186 | 447 | -261 |
| distinctUntranslated | 167 | 403 | -236 |
| skipOccurrences | 1980 | 1853 | +127 |
| suspiciousOccurrences | 335 | 784 | -449 |
| suspiciousValueUseOccurrences | 239 | 218 | +21 |
| suspiciousCollisionOccurrences | 96 | 566 | -470 |
| abValueUseOccurrences | 343 | 319 | +24 |
| distinctAbValueUse | 156 | 145 | +11 |
| mixedJsxOccurrences | 482 | 429 | +53 |
| staleEntries | 2532 | 2264 | +268 |
| usedDictKeys | 5609 | 4697 | +912 |
| dictMessages | 6595 | 5680 | +915 |
| dictTemplates | 1546 | 1281 | +265 |

## 附：A/B 值用途重名

A（JSX 文本/子表达式）和 B 原始白名单属性即使与值用途字面量相同也照常转换（只用于显示），但 §4 要求在报告里列出——见 `ab-value-use.md`（343 处）。
