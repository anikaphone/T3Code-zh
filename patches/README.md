# 补丁清单

上游 `v0.1.11` 起已原生内置全套简体中文界面与桌面菜单（Web 9,737 条 + Desktop 122 条），因此本项目已移除外挂汉化插件、词库与全部文案补丁，仅保留以下 4 个聚焦补丁（按文件名编号顺序在干净基线工作树里逐个 `git apply`，打不上时构建立即中止）。

所有补丁均已在基线 tag `v0.1.11`（commit `59651c1761f6c63e9b6056839067066968e6a406`）上验证通过。

| 编号 | 文件 | 用途 | 涉及的上游文件 |
|---|---|---|---|
| 0005 | `0005-desktop-zh-hans-localization.patch` | macOS `Info.plist` 声明 `CFBundleLocalizations: ["en", "zh-Hans"]`，让系统自动插入的 AppKit 菜单项跟随简体中文显示 | `scripts/build-desktop-artifact.ts` |
| 0019 | `0019-bundle-t3-code-license.patch` | 打包桌面产物前把基线 MIT `LICENSE` 写入 `T3-Code-LICENSE.txt` 资源文件（合规分发） | `scripts/build-desktop-artifact.ts` |
| 0025 | `0025-disable-telemetry.patch` | 默认关闭产品用量遥测（PostHog / `ingest.t3.codes`）、本机账号归属探测、浏览器设备 ID 持久化与中继 OTEL 链路追踪 | `apps/server/src/telemetry/AnalyticsService.ts`、`apps/server/src/telemetry/Identify.ts`、`apps/web/src/cloud/publicConfig.ts`、`apps/web/src/connection/platform.ts`、`packages/shared/src/otelEnvironment.ts` 及对应测试 |
| 0026 | `0026-antigravity-multi-question.patch` | 修复 Antigravity（`agy`）一次 `ask_question` 提 ≥ 2 个问题时因 `qN` / `qN_other` 未配对折叠导致第 2 步起不显示选项的缺陷（**每次升级上游必查**，详见 `docs/ANTIGRAVITY-ASK-QUESTION-FIX.md`） | `apps/server/src/provider/acp/AntigravityProtocol.ts`、`apps/server/src/orchestration-v2/Adapters/AntigravityAdapterV2.ts` 及对应测试 |

> 仅 Windows 构建额外应用 `scripts/windows/patches/0001-windows-zh-packaging.patch`（单语简体中文 NSIS 安装器、可选安装目录、打包 `zh-CN.pak`、以及原生 Windows 构建的 payload 文件数上限调整）。

## 上游变化后怎么重做

1. 运行 `scripts/upgrade-check.sh <新 tag>` 检查哪份补丁冲突。
2. 在临时干净工作树里按顺序应用补丁并移植冲突文件的改动。
3. **按补丁逐份导出**（不要把多个补丁的改动混在同一份 diff 里），把导出的纯 diff 接回对应补丁开头的 `#` 说明文字之后，并更新说明里的基线 tag / commit。
4. 运行 `npm test`（验证全部补丁对目标 tag 可按序无错 apply 且 TS 语法完整）。

## 注意

- 不要用 `git apply -3` / `--reject` 等容错参数兜底：打不上就应报错停下。
