# 覆盖率报告 v0.1.7

- 扫描根：`upstream`（默认 `upstream/`，基线 worktree）
- 词库：`dict/zh-CN.json`，messages 5680 + templates 1281
- 判定来源：`plugin/matcher.ts` 的 `createScanContext` / `listScopeFiles` / `scanModule`
- 预扫描：2840 个文件，值用途字面量 30587 个，0 个解析错误
- 扫描范围：2022 个文件（§4：apps/web/src 与 web 依赖的 packages/*/src，排除测试/stories/bench/.d.ts）

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
| 可翻译位置总数 | 7227 | 5101 |
| 已翻译 | 6780（93.8%） | 4698 |
| 未翻译 | 447（6.2%） | 403 |
| 可疑项 | 784 | 610 |
| └ value-use | 218 | 110 |
| └ template-collision | 566 | 500 |
| mixed-jsx | 429 | 356 |
| A/B 值用途重名（单独清单，见 ab-value-use.md） | 319 | 145 |
| 过期词条（stale） | 2264 | — |

对账：可翻译位置总数 7227 = 已翻译 6780 + 未翻译 447 ✅

## 分类分布（translate / skip / suspicious）

| 类别 | translate | skip | suspicious |
|---|---:|---:|---:|
| A | 2385 | 912 | 154 |
| B | 1808 | 85 | 147 |
| C | 2885 | 855 | 464 |
| D | 149 | 1 | 19 |

## 按 reason 的出现次数

- `allow-listed`：136
- `as-const-property`：344
- `attribute`：1800
- `brand-name`：3
- `call-arg`：145
- `data-function`：16
- `destructuring-default`：17
- `error-constructor`：340
- `identifier-like`：39
- `jsx-expression`：1005
- `jsx-text`：1186
- `jsx-text-fragment`：192
- `label-function-return`：471
- `label-map`：180
- `mixed-jsx`：429
- `no-letters`：720
- `non-display-call`：303
- `property`：1751
- `rpc-input`：3
- `template-collision`：566
- `value-use`：218

## 与上一份报告的对比

对照 `reports/v0.1.1`（只列本次出现的指标，正数表示比上次多）：

| 指标 | 本次 | 上次 | 变化 |
|---|---:|---:|---:|
| scopeFiles | 2022 | 1678 | +344 |
| candidateOccurrences | 9864 | 9125 | +739 |
| translatableOccurrences | 7227 | 7292 | -65 |
| distinctTranslatable | 5101 | 5233 | -132 |
| translatedOccurrences | 6780 | 7195 | -415 |
| distinctTranslated | 4698 | 5143 | -445 |
| untranslatedOccurrences | 447 | 97 | +350 |
| distinctUntranslated | 403 | 90 | +313 |
| skipOccurrences | 1853 | 1592 | +261 |
| suspiciousOccurrences | 784 | 241 | +543 |
| suspiciousValueUseOccurrences | 218 | 155 | +63 |
| suspiciousCollisionOccurrences | 566 | 86 | +480 |
| abValueUseOccurrences | 319 | 243 | +76 |
| distinctAbValueUse | 145 | 131 | +14 |
| mixedJsxOccurrences | 429 | 322 | +107 |
| staleEntries | 2264 | 1816 | +448 |
| usedDictKeys | 4697 | 5142 | -445 |
| dictMessages | 5680 | 5677 | +3 |
| dictTemplates | 1281 | 1281 | 0 |

## 附：A/B 值用途重名

A（JSX 文本/子表达式）和 B 原始白名单属性即使与值用途字面量相同也照常转换（只用于显示），但 §4 要求在报告里列出——见 `ab-value-use.md`（319 处）。
