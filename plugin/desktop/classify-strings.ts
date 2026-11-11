/**
 * 桌面主进程字符串归类（T07-fix2，reports/desktop-main-strings-appendix.md 的生成器）。
 *
 * 用法：node plugin/desktop/survey-strings.ts > /tmp/survey.tsv
 *       node plugin/desktop/classify-strings.ts /tmp/survey.tsv > reports/desktop-main-strings-appendix.md
 *
 * 输入是 survey-strings.ts 的输出（全部多词字符串；条数随上游变化，见附录「合计」）。先按下面的规则自动归类，规则覆盖不到的逐条写在
 * MANUAL 里（键为 `file:line|文字`）；两者都不命中就报错退出，保证每一条都有明确结论。只读，不改任何文件。
 */
import fs from "node:fs";
import path from "node:path";

const ZH_ROOT = path.resolve(import.meta.dirname, "../..");

export const CATEGORIES: Record<string, string> = {
  N1: "原生界面，已翻译（patches/0003，dict/zh-CN.desktop.json）",
  N0: "原生窗口标题，但窗口不可见",
  N2: "原生界面，只在 Windows / Linux 出现（未翻译）",
  I1: "经 IPC 在 web 显示，已在 web 显示处翻译（patches/0006，dict/zh-CN.json）",
  I2: "经 IPC 在 web 显示，未处理（原因见说明）",
  I3: "经 IPC 传给 web，但 web 不显示，或是数据",
  W: "经 IPC 在 web 显示，只在 Windows / Linux 出现（未翻译）",
  C: "命令行输出：经控制 socket 回给 `t3` 命令行，不在图形界面",
  P: "预览注释工具（注入被预览页面，报告第 5 节，未翻译）",
  E: "错误消息：Error / TaggedError 的 message 及其参数（§4「从不转换」位置）",
  L: "日志与观测",
  S: "脚本、命令、SQL、HTML/CSS 模板、样式类名、SVG",
  D: "数据：路径片段、应用 / 浏览器名、给 AI 或 MCP 的内容、协议载荷等",
};

interface Row {
  loc: string;
  file: string;
  text: string;
  ctx: string;
}

/** 规则覆盖不到的条目，逐条人工判定：[类别, 说明]。 */
const MANUAL: Record<string, readonly [string, string]> = {
  // v0.1.8 基线：逐条核对真实调用位置，协议与通用错误保持原文。
  "app/DesktopAppActivation.ts:137|The desktop app request is too large.": ["C", ""],
  "app/DesktopAppActivation.ts:150|The desktop app request is not valid JSON.": ["C", ""],
  "app/DesktopAppActivation.ts:157|The desktop app request is invalid.": ["C", ""],
  "app/DesktopAppActivation.ts:165|T3 Code could not process the desktop app request.": ["C", ""],
  "app/DesktopAppActivationBroker.ts:47|T3 Code is shutting down.": ["C", ""],
  "app/DesktopAppActivationBroker.ts:52|The request id is already in use.": ["C", ""],
  "app/DesktopAppActivationBroker.ts:62|The desktop app did not finish opening the project in time.": ["C", ""],
  "app/DesktopAppActivationBroker.ts:92|The T3 Code window closed before it opened the project.": ["C", ""],
  "app/DesktopAppActivationBroker.ts:105|The command closed before T3 Code was ready.": ["C", ""],
  "app/DesktopAppActivationBroker.ts:114|T3 Code is shutting down.": ["C", ""],
  "app/DesktopClerk.ts:185|Could not receive hosted web ChatGPT sign-in. Retry or use the redirect URL in the web app.": ["I2", "登录错误：经 IPC 抛错（Electron 加前缀）后以 failure.message 通用显示，见报告 4.2"],
  "app/DesktopCliCommand.ts:48|\n$ErrorActionPreference = 'Stop'\nif ($env:T3_SET -eq '1') {\n  $key = [Microsoft.Win32.Registry]::CurrentUser.CreateSubKey('Environment')\n  $kind = [Microsoft.Win32.RegistryValueKind]::ExpandString\n  if ($key.GetValueNames() -contains 'Path' -and $key.GetValueKind('Path') -eq 'String') {\n    $kind = [Microsoft.Win32.RegistryValueKind]::String\n  }\n  $key.SetValue('Path', $env:T3_PATH, $kind)\n  Add-Type -Namespace T3 -Name Env -MemberDefinition '[DllImport(\"user32.dll\", CharSet = CharSet.Unicode)] public static extern System.IntPtr SendMessageTimeout(System.IntPtr hWnd, uint Msg, System.UIntPtr wParam, string lParam, uint fuFlags, uint uTimeout, out System.UIntPtr lpdwResult);'\n  $result = [System.UIntPtr]::Zero\n  [void][T3.Env]::SendMessageTimeout([System.IntPtr]0xffff, 0x1A, [System.UIntPtr]::Zero, 'Environment', 2, 5000, [ref]$result)\n} else {\n  $key = [Microsoft.Win32.Registry]::CurrentUser.OpenSubKey('Environment')\n  $value = if ($key) { $key.GetValue('Path', '', 'DoNotExpandEnvironmentNames') } else { '' }\n  [Console]::Out.Write([Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes([string]$value)))\n}\n": ["S", "安装 t3 命令使用的 PowerShell PATH 脚本，不是错误消息"],
  "app/DesktopCliCommand.ts:146|powershell exited with {0}": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:153|Could not read your PATH, so it was left unchanged.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:158|Could not update your PATH.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:166|{0} is not executable.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:289|Could not set up the t3 launcher at {0}.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:296|The t3 command needs an installed app.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:302|T3 Code cannot put {0} on PATH because it has a \";\". Run {1} directly.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:310|Added t3 to your PATH but could not record it.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:324|Another t3 at {0} runs first in a new terminal. Remove it, or run the launcher directly at {1}.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:368|Another t3 command is already in ~/.local/bin and ~/bin, or neither is writable. Run the launcher directly at {0}.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:387|Could not remove {0}.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:398|Install the t3 command first.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:401|T3 Code cannot add t3 to this shell's PATH.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:405|Another t3 at {0} runs first; T3 Code leaves it in place.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliCommand.ts:411|\n# Added by T3 Code\n{0}\n": ["S", "写入 shell 配置文件的 PATH 导出片段"],
  "app/DesktopCliCommand.ts:413|Could not add t3 to {0}.": ["I2", "t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t()"],
  "app/DesktopCliShim.ts:13|Written by T3 Code: runs the desktop app's bundled t3 CLI.": ["C", "CLI 启动器说明或错误，不在图形界面"],
  "app/DesktopCliShim.ts:22|T3 Code has moved or been removed. Open the app once to update this command.": ["C", "CLI 启动器说明或错误，不在图形界面"],
  "app/DesktopCliShim.ts:40|chcp %t3_codepage% >nul": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:42|@echo off": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:45|setlocal EnableExtensions DisableDelayedExpansion": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:49|for /f \"tokens=2 delims=:.\" %%c in ('chcp') do set \"t3_codepage=%%c\"": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:50|chcp 65001 >nul": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:53|set \"T3CODE_CLI_PATH={0}\"": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:54|if not defined T3CODE_HOME set \"T3CODE_HOME={0}\"": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:55|set \"ELECTRON_RUN_AS_NODE=1\"": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:59|if exist {0} goto run": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:65|set \"t3_exit=%ERRORLEVEL%\"": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:74|export T3CODE_CLI_PATH={0}": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:76|export T3CODE_HOME=\"${T3CODE_HOME:-$home}\"": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:77|export ELECTRON_RUN_AS_NODE=1": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:79|if [ ! -x \"$app\" ]; then": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:85|exec \"$app\" {0} \"$@\"": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:88|\"{0}/{1}\" \"{2}/resources/app.asar/{3}\" \"$@\"": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:92|unset APPIMAGE_EXTRACT_AND_RUN": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:94|work=$(mktemp -d) || exit 1": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:95|\"$app\" --appimage-mount >\"$work/mount\" 2>/dev/null &": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:97|trap 'kill \"$mounter\" 2>/dev/null; rm -rf \"$work\"' EXIT": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:98|trap 'exit 130' INT TERM": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:100|while kill -0 \"$mounter\" 2>/dev/null; do": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:101|  mount=$(head -n 1 \"$work/mount\")": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:102|  [ -d \"$mount\" ] && break": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:107|if [ -z \"$mount\" ]; then": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:108|  (cd \"$work\" && \"$app\" --appimage-extract >/dev/null) || { echo \"Could not open $app.\" >&2; exit 1; }": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:109|  mount=\"$work/squashfs-root\"": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:146|leaving a t3 launcher the app did not write": ["S", "CLI 启动脚本"],
  "app/DesktopCliShim.ts:160|could not install t3 launcher": ["S", "CLI 启动脚本"],
  "app/DesktopEnvironment.ts:157|Application Support": ["D", "路径片段"],
  "app/DesktopLegacyLocalStorage.ts:24|T3 Code (Alpha)": ["D", "遗留 V1 userData 目录名"],
  "app/DesktopLegacyLocalStorage.ts:54|Local Storage": ["D", "Chromium 目录名"],
  "app/DesktopObservability.ts:470|backend child process failure output start": ["L", ""],
  "app/DesktopObservability.ts:482|backend child process output": ["L", ""],
  "app/DesktopObservability.ts:494|backend child process failure output end": ["L", ""],
  "app/DesktopStartupRecovery.ts:79|<a class=\"button{0}\" href=\"{1}/{2}\">{3}</a>": ["S", "启动恢复窗口的按钮 HTML 片段"],
  "app/DesktopStartupRecovery.ts:84|Checking for a newer version…": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:87|Version {0} is available. It can contain a fix.": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:88|Update to {0}": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:92|Downloading {0}{1}. T3 Code restarts when the download is done.": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:97|Version {0} started correctly on this computer. Download it and install it to go back.": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:102|Get a different version from the releases page.": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:103|Open releases": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:107|Your organization's managed policy stopped T3 Code from starting. Send the details below to your IT administrator.": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:121|<html>": ["S", "后端启动失败恢复诊断窗口 HTML 模板"],
  "app/DesktopStartupRecovery.ts:135|Copy details": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:136|The server wrote no output.": ["E", "后端启动失败恢复诊断文案，保持原文"],
  "app/DesktopStartupRecovery.ts:236|T3 Code {0} ({1} {2}) could not start.\n{3}\n\n{4}": ["D", "复制到剪贴板的启动失败诊断详情"],
  "app/DesktopStartupRecovery.ts:271|T3 Code could not start": ["E", "后端启动失败恢复诊断窗口标题，保持原文"],
  "app/DesktopUserData.ts:43|T3 Code (Dev)": ["D", "遗留 userData 目录名"],
  "app/DesktopUserData.ts:44|T3 Code (Alpha)": ["D", "遗留 userData 目录名"],
  "app/DesktopUserData.ts:60|Local State": ["D", "Chromium 文件名"],
  "app/DesktopUserData.ts:62|Local State": ["D", "Chromium 文件名"],
  "app/DesktopUserData.ts:65|Local State": ["D", "Chromium 文件名"],
  "app/chromiumLocalStorage.ts:48|unexpected end of data": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:60|varint too long": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:63|length out of range": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:113|snappy literal overflows output": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示（自动规则会误判为样式类名）"],
  "app/chromiumLocalStorage.ts:131|snappy copy out of range": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:139|snappy output length mismatch": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:244|unknown manifest tag {0}": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:248|incomplete manifest": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:268|write batch too short": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:280|unknown write batch record type {0}": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:288|block handle out of range": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:292|block checksum": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:295|unsupported block compression {0}": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:299|block too short": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:302|restart array out of range": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:309|block key prefix out of range": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:319|table too short": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "app/chromiumLocalStorage.ts:327|internal key too short": ["E", "LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示"],
  "backend/DesktopBackendConfiguration.ts:38|Failed to read persisted backend observability settings at {0}.": ["E", "读取持久化后端观测设置失败的通用错误，不限 Windows 或 WSL"],
  "backend/DesktopBackendConfiguration.ts:310|WSL is not available on this system": ["W", "WSL 预检原因"],
  "backend/DesktopBackendConfiguration.ts:322|Unable to list WSL distributions: {0}": ["W", "WSL 预检原因"],
  "backend/DesktopBackendConfiguration.ts:337|WSL distro is not installed: {0}": ["W", "WSL 预检原因"],
  "backend/DesktopBackendConfiguration.ts:339|WSL has no installed distributions": ["W", "WSL 预检原因"],
  "backend/DesktopBackendConfiguration.ts:340|WSL has no default distribution": ["W", "WSL 预检原因"],
  "backend/DesktopBackendConfiguration.ts:352|WSL node-pty unavailable: {0}": ["W", "WSL 预检原因"],
  "backend/DesktopBackendConfiguration.ts:369|missing server entry at {0}": ["W", "WSL 预检原因"],
  "backend/DesktopBackendConfiguration.ts:377|wslpath conversion failed for {0}": ["W", "WSL 预检原因"],
  "backend/DesktopBackendConfiguration.ts:387|WSL runtime unavailable: {0}": ["W", "WSL 预检原因"],
  "backend/DesktopBackendConfiguration.ts:408|The staged WSL runtime did not start; retrying from the mounted server tree.": ["W", "WSL 预检原因，只在 Windows"],
  "backend/DesktopBackendConfiguration.ts:415|Could not stage the WSL runtime; launching from the mounted server tree instead.": ["W", "WSL 预检原因，只在 Windows"],
  "backend/DesktopBackendConfiguration.ts:602|Ignoring the WSL runtime archive because its SHA-256 identity is missing or invalid; launching from the mounted server tree instead.": ["W", "WSL 预检原因，只在 Windows"],
  "backend/DesktopBackendConfiguration.ts:827|WSL-only backend requested but WSL is unavailable; starting the Windows primary instead.": ["W", "WSL 预检原因，只在 Windows"],
  "backend/DesktopBackendConfiguration.ts:835|Local environment": ["I3", "本机环境的默认名（数据）"],
  "backend/DesktopBackendManager.ts:524|desktop browser command stream stopped": ["L", "浏览器控制流结束后的后台告警，不在界面显示"],
  "backend/DesktopBackendManager.ts:593|killed by {0}": ["L", "后台进程退出原因，交给重启诊断记录"],
  "backend/DesktopBackendManager.ts:713|failed to generate desktop backend configuration": ["L", "scheduleRestart 的原因，只进日志"],
  "backend/DesktopBackendManager.ts:721|failed to generate desktop backend configuration": ["L", "scheduleRestart 的原因，只进日志"],
  "backend/DesktopBackendManager.ts:796|missing server entry at {0}": ["L", "scheduleRestart 的原因，只进日志"],
  "backend/DesktopBackendManager.ts:920|pid={0} port={1} cwd={2}": ["L", ""],
  "backend/DesktopBackendManager.ts:967|The server started but did not become ready in time.": ["E", "后端启动超时诊断消息，保持原文"],
  "backend/DesktopBackendManager.ts:1026|The server could not start ({0}).": ["E", "后端启动失败诊断消息，保持原文"],
  "backend/DesktopLocalEnvironmentAuth.ts:108|T3 Code Desktop": ["I3", "客户端名，发给服务端保存（数据）"],
  "backend/DesktopServerExposure.ts:168|This machine": ["I1", "端点名；沿用主词库已有的「此设备」"],
  "backend/DesktopServerExposure.ts:172|Loopback endpoint for this desktop app.": ["I3", "端点说明，web 不显示 endpoint.description"],
  "backend/DesktopServerExposure.ts:180|Local network": ["I1", "端点名"],
  "backend/DesktopServerExposure.ts:185|Reachable from devices on the same network.": ["I3", "端点说明，web 不显示"],
  "backend/DesktopServerExposure.ts:196|Custom HTTPS": ["I1", "端点名"],
  "backend/DesktopServerExposure.ts:196|Custom endpoint": ["I1", "端点名"],
  "backend/DesktopServerExposure.ts:202|User-configured HTTPS endpoint for this desktop backend.": ["I3", "端点说明，web 不显示"],
  "backend/DesktopServerExposure.ts:203|User-configured endpoint for this desktop backend.": ["I3", "端点说明，web 不显示"],
  "backend/tailscaleEndpointProvider.ts:61|Tailscale IP": ["I2", "端点名，产品名 + 缩写，不译"],
  "backend/tailscaleEndpointProvider.ts:65|Reachable from devices on the same Tailnet.": ["I3", "端点说明，web 不显示"],
  "backend/tailscaleEndpointProvider.ts:102|Tailscale HTTPS": ["I2", "端点名，产品名 + 缩写，不译"],
  "backend/tailscaleEndpointProvider.ts:108|HTTPS endpoint served by Tailscale Serve.": ["I3", "端点说明，web 不显示"],
  "backend/tailscaleEndpointProvider.ts:109|MagicDNS hostname. Configure Tailscale Serve for HTTPS access.": ["I3", "端点说明，web 不显示"],
  "ipc/methods/notificationBadge.ts:32|{0} threads with new notifications": ["N1", "Windows 任务栏 overlay 图标说明（0003）"],
  "ipc/methods/providerAuth.ts:31|Could not receive ChatGPT sign-in on this computer. Try again or paste the redirect URL.": ["I2", "登录错误，同上"],
  "ipc/methods/providerAuth.ts:47|Invalid ChatGPT sign-in request.": ["I2", "登录错误，同上"],
  "ipc/methods/snapShot.ts:121|Desktop config": ["N2", "Linux（Niri / Hyprland）打开文件对话框的过滤器名"],
  "permissions/MacPermissionHelper.ts:43|<html>": ["N1", "权限助手面板的 HTML；其中 3 处界面文字已翻译（报告 1.5）"],
  "preload.ts:82|SSH authentication cancelled.": ["I2", "SSH 错误：经通用连接错误通道显示，见报告 4.2"],
  "preview/BrowserImport/BrowserImport.ts:310|Local State": ["D", "Chromium 文件名"],
  "preview/BrowserImport/Sources.ts:40|Application Support": ["D", "路径片段"],
  "preview/BrowserImport/Sources.ts:94|Microsoft Edge": ["D", "浏览器名（产品名）"],
  "preview/BrowserImport/Sources.ts:96|Microsoft Edge": ["D", "浏览器名（产品名）"],
  "preview/BrowserImport/Sources.ts:97|Microsoft Edge": ["D", "浏览器名（产品名）"],
  "preview/BrowserImport/Sources.ts:134|User Data": ["D", "路径片段"],
  "preview/BrowserImport/Sources.ts:143|User Data": ["D", "路径片段"],
  "preview/BrowserImport/Sources.ts:479|Local State": ["D", "Chromium 文件名"],
  "preview/BrowserSession.ts:254|Open this {0} link?": ["N1", "外部协议确认对话框，0003；URL 和协议翻译后插入"],
  "preview/BrowserSession.ts:255|A page in the browser wants to open another application:\n\n{0}": ["N1", "外部协议确认对话框，0003；URL 和协议翻译后插入"],
  "preview/CdpRelay.ts:91|CDP payload too large": ["E", "CDP 协议载荷过大错误消息，保持原文"],
  "preview/CdpRelay.ts:164|Only this preview tab's page can be attached.": ["E", "CDP 命令协议校验错误，Error 消息保持原文"],
  "preview/CdpRelay.ts:187|Not supported for a desktop preview tab: {0}": ["E", "不受支持的 CDP 命令错误，Error 消息保持原文"],
  "preview/GuestInput.ts:24|The page's focus is inside a cross-site frame, which takes typed input only while the preview has focus. Click the field first.": ["E", "跨站iframe输入失败的 Error 消息，非原生界面标签"],
  "preview/Manager.ts:160|system-ui, sans-serif": ["S", "字体栈"],
  "preview/Manager.ts:161|ui-monospace, monospace": ["S", "字体栈"],
  "preview/Manager.ts:165|<html>": ["N1", "画中画窗口的 HTML；alt 文字已翻译（报告 1.6，fix2）"],
  "preview/PasskeyBridge.ts:18|The operation either timed out or was not allowed. See: https://www.w3.org/TR/webauthn-2/#sctn-privacy-considerations-client.": ["E", "WebAuthn 标准拒绝 / 超时错误，交给网页脚本，保持原文"],
  "preview/Passkeys.ts:36|Failed to enable Touch ID passkeys for the in-app browser (keychain group {0}).": ["L", "通行密钥启用失败告警，仅进日志，保持原文"],
  "preview/PickPreload.ts:844|Attach annotation and screenshot (Enter)": ["P", "同一注释按钮在不可发送时的提示，沿用报告第 5 节的未翻译范围"],
  "preview/PickPreload.ts:847|Attach annotation and screenshot (Enter). Send with Cmd/Ctrl+Enter.": ["P", "注入被预览页面的注释工具按钮提示，沿用报告第 5 节的未翻译范围"],
  "preview/PickPreload.ts:848|Attach annotation and screenshot (Enter)": ["P", "同一注释按钮在不可发送时的提示，沿用报告第 5 节的未翻译范围"],
  "preview/RecordingCursor.ts:69|translate({0}px, {1}px)": ["S", ""],
  "preview/RecordingCursor.ts:137|translate({0}px, {1}px)": ["S", ""],
  "preview/captureErrors.ts:29|Current display surface not available for capture": ["D", "用于识别 Chromium 截图错误的比较常量"],
  "snapShot/DesktopSnapShot.ts:103|Modifier-pair shortcuts aren't available in this Wayland session. Choose another shortcut or use Take snapshot from the command palette.": ["W", "Wayland"],
  "snapShot/DesktopSnapShot.ts:110|Allow Screen Recording in System Settings, then restart T3 Code.": ["I1", "macOS 权限提示"],
  "snapShot/DesktopSnapShot.ts:112|Allow Accessibility in System Settings, then restart T3 Code.": ["I1", "macOS 权限提示"],
  "snapShot/DesktopSnapShot.ts:114|Allow Accessibility and Screen Recording in System Settings, then restart T3 Code.": ["I1", "macOS 权限提示"],
  "snapShot/DesktopSnapShot.ts:530|Active window": ["W", "Linux 截图来源名的回退值"],
  "snapShot/DesktopSnapShot.ts:733|{0} is observed and cannot be reserved exclusively.": ["I2", "快捷键可用时才返回；web 只在不可用时显示 message，不会出现"],
  "snapShot/DesktopSnapShot.ts:735|{0} This key can also open the system's own menu.": ["I2", "同上，且只在非 macOS"],
  "snapShot/DesktopSnapShot.ts:738|{0} This key can also activate app menu bars.": ["I2", "同上，且只在 Windows"],
  "snapShot/DesktopSnapShot.ts:748|This shortcut is already used by the system or another app.": ["I1", "快捷键检测"],
  "snapShot/DesktopSnapShot.ts:754|The system could not register this shortcut.": ["I1", "快捷键检测"],
  "snapShot/DesktopSnapShot.ts:1065|SnapShots are not supported on this platform.": ["W", "只在不支持截图的平台"],
  "snapShot/DesktopSnapShot.ts:1070|Configure the capture shortcut in your Niri config, not in T3 Code.": ["W", "Linux（Niri）"],
  "snapShot/DesktopSnapShot.ts:1076|Change the capture binding in your Hyprland config, then save it.": ["W", "Linux（Hyprland）"],
  "snapShot/DesktopSnapShot.ts:1113|Your desktop will confirm this shortcut when you save it.": ["W", "Linux（portal）"],
  "snapShot/DesktopSnapShot.ts:1117|Unsupported shortcut.": ["W", "Linux（portal）"],
  "snapShot/DesktopSnapShot.ts:1196|SnapShots require a Wayland session. X11 capture is not supported.": ["W", "Linux（X11）"],
  "snapShot/DesktopSnapShot.ts:1197|SnapShots are not supported on this platform.": ["W", "只在不支持截图的平台"],
  "snapShot/DesktopSnapShot.ts:1224|The Niri capture endpoint disconnected. Restart T3 Code.": ["W", "Linux（Niri）"],
  "snapShot/DesktopSnapShot.ts:1247|Set up the shortcut to add it to your Niri config.": ["W", "Linux（Niri）"],
  "snapShot/DesktopSnapShot.ts:1248|Could not start the Niri capture endpoint. Another T3 Code instance may be using it.": ["W", "Linux（Niri）"],
  "snapShot/DesktopSnapShot.ts:1310|Could not connect to your desktop's shortcut service.": ["W", "Linux（portal）"],
  "snapShot/DesktopSnapShot.ts:1632|Could not check desktop capture support. Check your desktop session and try again.": ["W", "Linux（portal 模式）"],
  "snapShot/NativeCaptureFeedback.ts:42|{\"command\":\"close\"}\n": ["S", "子进程协议"],
  "snapShot/SnapShotTransition.ts:117|T3 Code Snapshot Animation": ["N0", "截图动画遮罩：无边框、透明、不可聚焦，只存在约 1 秒"],
  "snapShot/SnapShotTransition.ts:142|<html>": ["N1", "截图动画遮罩的 HTML；回退标题 Captured window 已翻译（报告 1.7，fix2）"],
  "snapShot/snapShot.ts:42|{0} is not available on this system.": ["I1", "快捷键检测；macOS 的 4 种修饰键逐条进名单"],
  "snapShot/snapShot.ts:46|This shortcut is already used by the system or another app.": ["I1", "快捷键检测"],
  "snapShot/snapShot.ts:50|Select All": ["I1", "COMMON_MOD_ACTIONS 的值，同上"],
  "snapShot/snapShot.ts:58|New Tab": ["I1", "COMMON_MOD_ACTIONS 的值，拼进 This shortcut is … in most apps."],
  "snapShot/snapShot.ts:60|Close Window": ["I1", "COMMON_MOD_ACTIONS 的值，同上"],
  "snapShot/snapShot.ts:75|Shift combinations are used for typing and text selection. Add another modifier.": ["I1", "快捷键检测"],
  "snapShot/snapShot.ts:80|This shortcut is {0} in most apps.": ["I1", "快捷键检测；13 种动作逐条进名单"],
  "snapShot/snapShot.ts:83|This shortcut controls running commands in terminals.": ["I1", "快捷键检测"],
  "snapShot/snapShot.ts:85|The system uses Alt+Tab to switch apps.": ["I1", "快捷键检测"],
  "snapShot/snapShot.ts:87|The system already uses this shortcut.": ["I1", "快捷键检测"],
  "snapShot/snapShot.ts:523|Google Chrome": ["D", "浏览器产品名"],
  "ssh/DesktopSshEnvironment.ts:99|Secure randomness is unavailable.": ["I2", "SSH 错误：经 IPC 抛错（Electron 加前缀）后走通用连接错误通道"],
  "ssh/DesktopSshEnvironment.ts:103|T3 Code window is not available for SSH authentication.": ["I2", "SSH 错误，同上"],
  "ssh/DesktopSshEnvironment.ts:106|SSH authentication timed out for {0}.": ["I2", "SSH 错误，同上"],
  "ssh/DesktopSshEnvironment.ts:109|SSH authentication cancelled for {0}.": ["I2", "SSH 错误，同上（取消类走 ConnectionBlockedError 的 detail）"],
  "ssh/DesktopSshEnvironment.ts:112|SSH authentication was cancelled because the app window closed.": ["I2", "SSH 错误，同上"],
  "ssh/DesktopSshEnvironment.ts:115|SSH password prompt service stopped.": ["I2", "SSH 错误，同上"],
  "updates/DesktopRemoteUpdates.ts:125|The desktop app failed to install the update.": ["I1", "远程更新失败原因"],
  "updates/DesktopRemoteUpdates.ts:174|A prepared desktop update is already in progress.": ["I1", "远程更新失败原因"],
  "updates/DesktopRemoteUpdates.ts:201|This desktop app also runs WSL backends, whose databases a remote switch cannot check. Switch it on that machine.": ["W", "含 WSL 后端时的远程切换渠道限制原因，仅在 Windows 出现"],
  "updates/DesktopRemoteUpdates.ts:294|The desktop app lost the downloaded update.": ["I1", "远程更新失败原因"],
  "updates/DesktopRemoteUpdates.ts:324|The desktop app found no build of {0}.": ["I2", "含动态版本号的远程更新失败原因，经错误通道显示，保持原文"],
  "updates/DesktopRemoteUpdates.ts:459|This desktop update is no longer prepared.": ["I1", "远程更新失败原因"],
  "updates/DesktopRemoteUpdates.ts:470|The desktop app failed to install the update.": ["I1", "远程更新失败原因"],
  "updates/DesktopRemoteUpdates.ts:481|This desktop update is no longer prepared.": ["I1", "远程更新失败原因"],
  "updates/DesktopRemoteUpdates.ts:500|The desktop app could not start the install.": ["I1", "远程更新失败原因"],
  "updates/DesktopUpdatePolicy.ts:79|Updates are off because T3 Code cannot use the managed policy at {0}. Contact your administrator.": ["I2", "含动态策略文件路径的托管策略错误说明，保持原文"],
  "updates/DesktopUpdates.ts:242|[truncated cause]": ["L", "更新错误详情的诊断截断标记"],
  "updates/DesktopUpdates.ts:269|; caused by {0}": ["L", "拼接动态诊断原因，不送入翻译器"],
  "updates/DesktopUpdates.ts:343|Updates are turned off on this machine.": ["I2", "托管策略禁用更新时的原因说明，保持原文"],
  "updates/DesktopUpdates.ts:346|Automatic updates are not available because no update feed is configured.": ["N1", "原生对话框 detail（0003）；也进远程更新失败原因（0006）"],
  "updates/DesktopUpdates.ts:349|Automatic updates are only available in packaged production builds.": ["N1", "同上"],
  "updates/DesktopUpdates.ts:352|Automatic updates are disabled by the T3CODE_DISABLE_AUTO_UPDATE setting.": ["N1", "同上"],
  "updates/DesktopUpdates.ts:355|Automatic updates on Linux require the AppImage or the .deb package.": ["N1", "同上"],
  "updates/DesktopUpdates.ts:483|{0} Switch to the stable channel to keep getting updates.": ["I2", "托管策略禁用每夜版更新通道时的原因说明，保持原文"],
  "updates/DesktopUpdates.ts:483|Nightly updates are turned off on this machine.": ["I2", "托管策略禁用每夜版更新通道时的原因说明，保持原文"],
  "updates/releaseNotes.ts:88|whats changed": ["D", "解析 release notes 用的小写标题标记"],
  "updates/releaseNotes.ts:150|new contributors": ["D", "同上"],
  "updates/releaseNotes.ts:150|full changelog": ["D", "同上"],
  "updates/remoteUpdateFlow.ts:41|Automatic updates are disabled on this machine.": ["I1", "远程更新失败原因"],
  "updates/remoteUpdateFlow.ts:52|Update {0} did not apply on this machine. Retry it from the desktop app there.": ["I2", "含版本号的动态远程更新失败原因，经任意错误通道显示，保持原文"],
  "updates/remoteUpdateFlow.ts:67|The desktop app failed to download the update.": ["I1", "远程更新失败原因"],
  "updates/remoteUpdateFlow.ts:86|The desktop app update failed.": ["I1", "远程更新失败原因"],
  "updates/remoteUpdateFlow.ts:93|The desktop app did not report an update result.": ["I1", "远程更新失败原因"],
  "window/DesktopApplicationMenu.ts:204|Close Developer Tools": ["N0", "隐藏菜单快捷键项（visible: false），仅用于焦点在 DevTools 时响应 Cmd/Ctrl+W，不在界面显示"],
};

const WINDOWS_LINUX_FILES =
  /^(wsl\/|snapShot\/(Gnome|Kde|Hyprland|Niri|Portal|Linux|linuxCaptureSession|captureConfig|CaptureShortcutConfig|RegionSnapShot|WindowsCapture|GlobalShiftShortcut|gnomeCaptureBundle)|app\/DesktopLinuxUrlHandler|linuxSecretStorage|preview\/BrowserImport\/LinuxBrowserSecret|electron\/WindowsForeground)/;

function nearestNew(ctx: string): string | null {
  const parts = ctx.split(" < ");
  const hit = parts.find((part) => part.startsWith("new call:"));
  return hit ? hit.slice("new call:".length) : null;
}

function classify(row: Row, desktopKeys: Set<string>): readonly [string, string] | null {
  const html = /^\s*<!doctype html>/i.test(row.text) ? `${row.loc}|<html>` : null;
  const manual = MANUAL[html ?? `${row.loc}|${row.text}`];
  if (manual) return manual;
  const { text, ctx, file } = row;
  const ctor = nearestNew(ctx);
  if (ctor && /BrowserWindow/.test(ctor) && ctx.startsWith("key:title")) {
    if (desktopKeys.has(text)) return ["N1", "窗口标题"];
  }
  if (ctor && /(Error|Exception)$/.test(ctor.split(".").pop() ?? "")) return ["E", ""];
  if (/method:message/.test(ctx)) return ["E", ""];
  if (/^call:[A-Za-z.]*([lL]og[A-Za-z]*|Effect\.die)\b/.test(ctx)) return ["L", ""];
  if (/^call:failure\b|^call:invalidResponse\b/.test(ctx)) return ["C", ""];
  const looksCode =
    /=>|function |\bconst |\$\.|ObjC\.|select |pragma |VACUUM|Write-Output|\$value|printf |hl\.(bind|dsp)|^bind = |gdbus|<svg|\{ cursor|repeat=false|Add-Type|ensure_remote_node_path|command -v|globalThis\[/.test(
      text,
    );
  if (
    looksCode ||
    /evaluate|ArrayExpression\.join|var:[A-Z_]*SCRIPT|var:raw\b|key:expression|var:code\b|call:TaggedTemplateExpression|var:requestRecordingCaptureExpression/.test(
      ctx,
    )
  ) {
    return ["S", ""];
  }
  if (key(ctx) === "keychainService") return ["D", "钥匙串服务名"];
  const looksClass =
    /^[a-z0-9:/\-[\]().%!_ ]+$/.test(text.trim()) &&
    /(^|\s)(h-|w-|px-|py-|bg-|text-|border|rounded|flex|grid|font-|shadow|items-|justify-|shrink|hover:|z-|fixed|absolute|inline|min-|max-|gap-|p-0|overflow)/.test(
      text,
    );
  if (looksClass) return ["S", "样式类名"];
  if (/^[a-z-]+:[^;]+;([a-z-]+:[^;]+;?)*$/.test(text.trim())) return ["S", "内联样式"];
  if (file === "preview/PickPreload.ts") return ["P", ""];
  if (desktopKeys.has(text.replace(/\{\d+\}/g, "{0}"))) return ["N1", ""];
  if (file === "window/DesktopWindow.ts" && text.startsWith("<!doctype html>") && text.includes("Connecting to WSL…")) return ["N1", "Windows WSL 启动画面；0003 仅翻固定标签，HTML/CSS 与运行时颜色保持原样"];
  if (WINDOWS_LINUX_FILES.test(file)) return ["W", "只在 Windows / Linux 的文件"];
  return null;
}

function key(ctx: string): string | null {
  return /^key:([A-Za-z]+)/.exec(ctx)?.[1] ?? null;
}

function main(): void {
  const input = process.argv[2];
  if (!input) throw new Error("用法：node plugin/desktop/classify-strings.ts <survey.tsv>");
  const desktopDict = JSON.parse(fs.readFileSync(path.join(ZH_ROOT, "dict/zh-CN.desktop.json"), "utf8"));
  const desktopKeys = new Set<string>([...Object.keys(desktopDict.messages), ...Object.keys(desktopDict.templates)]);
  const rows: Row[] = fs
    .readFileSync(input, "utf8")
    .trim()
    .split("\n")
    .map((line) => {
      const [loc = "", json = "\"\"", ctx = ""] = line.split("\t");
      return { loc, file: loc.replace(/:\d+$/, ""), text: JSON.parse(json) as string, ctx };
    });
  const used = new Set<string>();
  const missing: string[] = [];
  const classified = rows.map((row) => {
    const html = /^\s*<!doctype html>/i.test(row.text) ? `${row.loc}|<html>` : `${row.loc}|${row.text}`;
    if (MANUAL[html]) used.add(html);
    const result = classify(row, desktopKeys);
    if (!result) missing.push(`${row.loc}\t${JSON.stringify(row.text)}\t${row.ctx}`);
    const [category, note] = result ?? ["?", ""];
    return { ...row, category, note };
  });
  if (missing.length > 0) throw new Error(`没有归类的条目 ${missing.length} 条：\n${missing.join("\n")}`);
  const unused = Object.keys(MANUAL).filter((manualKey) => !used.has(manualKey));
  if (unused.length > 0) throw new Error(`MANUAL 里有对不上的条目（上游变了？）：\n${unused.join("\n")}`);

  const counts = new Map<string, number>();
  for (const row of classified) counts.set(row.category, (counts.get(row.category) ?? 0) + 1);
  const cell = (value: string) => value.replace(/\|/g, "\\|").replace(/\n/g, "⏎");
  const lines: string[] = [];
  lines.push("# 桌面主进程字符串归类明细（附录）", "");
  lines.push(
    "由 `node plugin/desktop/survey-strings.ts > survey.tsv && node plugin/desktop/classify-strings.ts survey.tsv` 生成，不要手改。",
    "输入是 `upstream/apps/desktop/src` 下全部非测试 `.ts` 里「含空白、至少两个单词」的字符串和模板字面量（插值写成 `{0}`）；",
    "单词标签（`File`、`Edit` 等菜单名）不在这个口径里，见报告第 1 节。行号是基线原文件的行号。",
    "",
    "## 类别与条数",
    "",
    "| 类别 | 含义 | 条数 |",
    "|---|---|---:|",
  );
  for (const [code, label] of Object.entries(CATEGORIES)) lines.push(`| ${code} | ${label} | ${counts.get(code) ?? 0} |`);
  lines.push(`| 合计 | | ${classified.length} |`, "");
  for (const [code, label] of Object.entries(CATEGORIES)) {
    const subset = classified.filter((row) => row.category === code);
    if (subset.length === 0) continue;
    lines.push(`## ${code}：${label}（${subset.length}）`, "", "| file:line | 文字 | 说明 |", "|---|---|---|");
    for (const row of subset) {
      const shown = row.text.length > 140 ? `${row.text.slice(0, 140)}…` : row.text;
      lines.push(`| \`${row.loc}\` | ${cell(JSON.stringify(shown))} | ${cell(row.note)} |`);
    }
    lines.push("");
  }
  process.stdout.write(lines.join("\n"));
}

main();
