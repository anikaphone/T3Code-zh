# 桌面主进程字符串归类明细（附录）

由 `node plugin/desktop/survey-strings.ts > survey.tsv && node plugin/desktop/classify-strings.ts survey.tsv` 生成，不要手改。
输入是 `upstream/apps/desktop/src` 下全部非测试 `.ts` 里「含空白、至少两个单词」的字符串和模板字面量（插值写成 `{0}`）；
单词标签（`File`、`Edit` 等菜单名）不在这个口径里，见报告第 1 节。行号是基线原文件的行号。

## 类别与条数

| 类别 | 含义 | 条数 |
|---|---|---:|
| N1 | 原生界面，已翻译（patches/0003，dict/zh-CN.desktop.json） | 42 |
| N0 | 原生窗口标题，但窗口不可见 | 2 |
| N2 | 原生界面，只在 Windows / Linux 出现（未翻译） | 1 |
| I1 | 经 IPC 在 web 显示，已在 web 显示处翻译（patches/0006，dict/zh-CN.json） | 30 |
| I2 | 经 IPC 在 web 显示，未处理（原因见说明） | 36 |
| I3 | 经 IPC 传给 web，但 web 不显示，或是数据 | 9 |
| W | 经 IPC 在 web 显示，只在 Windows / Linux 出现（未翻译） | 90 |
| C | 命令行输出：经控制 socket 回给 `t3` 命令行，不在图形界面 | 12 |
| P | 预览注释工具（注入被预览页面，报告第 5 节，未翻译） | 44 |
| E | 错误消息：Error / TaggedError 的 message 及其参数（§4「从不转换」位置） | 310 |
| L | 日志与观测 | 161 |
| S | 脚本、命令、SQL、HTML/CSS 模板、样式类名、SVG | 228 |
| D | 数据：路径片段、应用 / 浏览器名、给 AI 或 MCP 的内容、协议载荷等 | 29 |
| 合计 | | 994 |

## N1：原生界面，已翻译（patches/0003，dict/zh-CN.desktop.json）（42）

| file:line | 文字 | 说明 |
|---|---|---|
| `ipc/methods/notificationBadge.ts:32` | "{0} threads with new notifications" | Windows 任务栏 overlay 图标说明（0003） |
| `permissions/MacPermission.ts:12` | "Screen Recording" |  |
| `permissions/MacPermission.ts:14` | "Full Disk Access" |  |
| `permissions/MacPermissionHelper.ts:43` | "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">\n<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; img-src …" | 权限助手面板的 HTML；其中 3 处界面文字已翻译（报告 1.5） |
| `permissions/MacPermissionHelper.ts:112` | "Set up {0}" | 窗口标题 |
| `preview/BrowserSession.ts:254` | "Open this {0} link?" | 外部协议确认对话框，0003；URL 和协议翻译后插入 |
| `preview/BrowserSession.ts:255` | "A page in the browser wants to open another application:\n\n{0}" | 外部协议确认对话框，0003；URL 和协议翻译后插入 |
| `preview/BrowserSession.ts:313` | "{0} wants to see text and images copied to the clipboard" |  |
| `preview/Manager.ts:165` | "<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <meta\n      http-equiv=\"Content-Security-Policy\"\n      content=\"default-src '…" | 画中画窗口的 HTML；alt 文字已翻译（报告 1.6，fix2） |
| `preview/Manager.ts:2848` | "Browser preview" | 窗口标题 |
| `preview/Passkeys.ts:56` | "Unnamed passkey" |  |
| `snapShot/SnapShotTransition.ts:142` | "<!doctype html><style>\nhtml,body{margin:0;width:100%;height:100%;overflow:hidden;background:transparent}\n#card{position:absolute;left:{0}px;…" | 截图动画遮罩的 HTML；回退标题 Captured window 已翻译（报告 1.7，fix2） |
| `updates/DesktopUpdates.ts:350` | "Automatic updates are not available because no update feed is configured." | 原生对话框 detail（0003）；也进远程更新失败原因（0006） |
| `updates/DesktopUpdates.ts:353` | "Automatic updates are only available in packaged production builds." | 同上 |
| `updates/DesktopUpdates.ts:356` | "Automatic updates are disabled by the T3CODE_DISABLE_AUTO_UPDATE setting." | 同上 |
| `updates/DesktopUpdates.ts:359` | "Automatic updates on Linux require the AppImage or the .deb package." | 同上 |
| `window/DesktopApplicationMenu.ts:76` | "You're up to date!" |  |
| `window/DesktopApplicationMenu.ts:77` | "T3 Code {0} is currently the newest version available." |  |
| `window/DesktopApplicationMenu.ts:83` | "Update check failed" |  |
| `window/DesktopApplicationMenu.ts:84` | "Could not check for updates." |  |
| `window/DesktopApplicationMenu.ts:85` | "An unknown error occurred. Please try again later." |  |
| `window/DesktopApplicationMenu.ts:101` | "Updates unavailable" |  |
| `window/DesktopApplicationMenu.ts:102` | "Automatic updates are not available right now." |  |
| `window/DesktopApplicationMenu.ts:168` | "Check for Updates..." |  |
| `window/DesktopApplicationMenu.ts:216` | "Close Window" |  |
| `window/DesktopApplicationMenu.ts:230` | "Paste as Text" |  |
| `window/DesktopApplicationMenu.ts:254` | "Force Reload" |  |
| `window/DesktopApplicationMenu.ts:259` | "Toggle Developer Tools" |  |
| `window/DesktopApplicationMenu.ts:264` | "Actual Size" |  |
| `window/DesktopApplicationMenu.ts:265` | "Zoom In" |  |
| `window/DesktopApplicationMenu.ts:267` | "Zoom In" |  |
| `window/DesktopApplicationMenu.ts:275` | "Zoom In" |  |
| `window/DesktopApplicationMenu.ts:282` | "Zoom Out" |  |
| `window/DesktopApplicationMenu.ts:285` | "Actual Size" |  |
| `window/DesktopApplicationMenu.ts:291` | "Zoom In" |  |
| `window/DesktopApplicationMenu.ts:297` | "Zoom Out" |  |
| `window/DesktopApplicationMenu.ts:321` | "Check for Updates..." |  |
| `window/DesktopWindow.ts:212` | "<!doctype html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; style-src 'unsafe-i…" | Windows WSL 启动画面；0003 仅翻固定标签，HTML/CSS 与运行时颜色保持原样 |
| `window/DesktopWindow.ts:591` | "No suggestions" |  |
| `window/DesktopWindow.ts:599` | "Copy Link" |  |
| `window/DesktopWindow.ts:612` | "Copy Email Address" |  |
| `window/DesktopWindow.ts:623` | "Copy Image" |  |

## N0：原生窗口标题，但窗口不可见（2）

| file:line | 文字 | 说明 |
|---|---|---|
| `snapShot/SnapShotTransition.ts:117` | "T3 Code Snapshot Animation" | 截图动画遮罩：无边框、透明、不可聚焦，只存在约 1 秒 |
| `window/DesktopApplicationMenu.ts:204` | "Close Developer Tools" | 隐藏菜单快捷键项（visible: false），仅用于焦点在 DevTools 时响应 Cmd/Ctrl+W，不在界面显示 |

## N2：原生界面，只在 Windows / Linux 出现（未翻译）（1）

| file:line | 文字 | 说明 |
|---|---|---|
| `ipc/methods/snapShot.ts:121` | "Desktop config" | Linux（Niri / Hyprland）打开文件对话框的过滤器名 |

## I1：经 IPC 在 web 显示，已在 web 显示处翻译（patches/0006，dict/zh-CN.json）（30）

| file:line | 文字 | 说明 |
|---|---|---|
| `backend/DesktopServerExposure.ts:168` | "This machine" | 端点名；沿用主词库已有的「此设备」 |
| `backend/DesktopServerExposure.ts:180` | "Local network" | 端点名 |
| `backend/DesktopServerExposure.ts:196` | "Custom HTTPS" | 端点名 |
| `backend/DesktopServerExposure.ts:196` | "Custom endpoint" | 端点名 |
| `snapShot/DesktopSnapShot.ts:110` | "Allow Screen Recording in System Settings, then restart T3 Code." | macOS 权限提示 |
| `snapShot/DesktopSnapShot.ts:112` | "Allow Accessibility in System Settings, then restart T3 Code." | macOS 权限提示 |
| `snapShot/DesktopSnapShot.ts:114` | "Allow Accessibility and Screen Recording in System Settings, then restart T3 Code." | macOS 权限提示 |
| `snapShot/DesktopSnapShot.ts:748` | "This shortcut is already used by the system or another app." | 快捷键检测 |
| `snapShot/DesktopSnapShot.ts:754` | "The system could not register this shortcut." | 快捷键检测 |
| `snapShot/snapShot.ts:42` | "{0} is not available on this system." | 快捷键检测；macOS 的 4 种修饰键逐条进名单 |
| `snapShot/snapShot.ts:46` | "This shortcut is already used by the system or another app." | 快捷键检测 |
| `snapShot/snapShot.ts:50` | "Select All" | COMMON_MOD_ACTIONS 的值，同上 |
| `snapShot/snapShot.ts:58` | "New Tab" | COMMON_MOD_ACTIONS 的值，拼进 This shortcut is … in most apps. |
| `snapShot/snapShot.ts:60` | "Close Window" | COMMON_MOD_ACTIONS 的值，同上 |
| `snapShot/snapShot.ts:75` | "Shift combinations are used for typing and text selection. Add another modifier." | 快捷键检测 |
| `snapShot/snapShot.ts:80` | "This shortcut is {0} in most apps." | 快捷键检测；13 种动作逐条进名单 |
| `snapShot/snapShot.ts:83` | "This shortcut controls running commands in terminals." | 快捷键检测 |
| `snapShot/snapShot.ts:85` | "The system uses Alt+Tab to switch apps." | 快捷键检测 |
| `snapShot/snapShot.ts:87` | "The system already uses this shortcut." | 快捷键检测 |
| `updates/DesktopRemoteUpdates.ts:125` | "The desktop app failed to install the update." | 远程更新失败原因 |
| `updates/DesktopRemoteUpdates.ts:174` | "A prepared desktop update is already in progress." | 远程更新失败原因 |
| `updates/DesktopRemoteUpdates.ts:294` | "The desktop app lost the downloaded update." | 远程更新失败原因 |
| `updates/DesktopRemoteUpdates.ts:459` | "This desktop update is no longer prepared." | 远程更新失败原因 |
| `updates/DesktopRemoteUpdates.ts:470` | "The desktop app failed to install the update." | 远程更新失败原因 |
| `updates/DesktopRemoteUpdates.ts:481` | "This desktop update is no longer prepared." | 远程更新失败原因 |
| `updates/DesktopRemoteUpdates.ts:500` | "The desktop app could not start the install." | 远程更新失败原因 |
| `updates/remoteUpdateFlow.ts:41` | "Automatic updates are disabled on this machine." | 远程更新失败原因 |
| `updates/remoteUpdateFlow.ts:67` | "The desktop app failed to download the update." | 远程更新失败原因 |
| `updates/remoteUpdateFlow.ts:86` | "The desktop app update failed." | 远程更新失败原因 |
| `updates/remoteUpdateFlow.ts:93` | "The desktop app did not report an update result." | 远程更新失败原因 |

## I2：经 IPC 在 web 显示，未处理（原因见说明）（36）

| file:line | 文字 | 说明 |
|---|---|---|
| `app/DesktopClerk.ts:190` | "Could not receive hosted web ChatGPT sign-in. Retry or use the redirect URL in the web app." | 登录错误：经 IPC 抛错（Electron 加前缀）后以 failure.message 通用显示，见报告 4.2 |
| `app/DesktopCliCommand.ts:146` | "powershell exited with {0}" | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:153` | "Could not read your PATH, so it was left unchanged." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:158` | "Could not update your PATH." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:166` | "{0} is not executable." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:289` | "Could not set up the t3 launcher at {0}." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:296` | "The t3 command needs an installed app." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:302` | "T3 Code cannot put {0} on PATH because it has a \";\". Run {1} directly." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:310` | "Added t3 to your PATH but could not record it." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:324` | "Another t3 at {0} runs first in a new terminal. Remove it, or run the launcher directly at {1}." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:368` | "Another t3 command is already in ~/.local/bin and ~/bin, or neither is writable. Run the launcher directly at {0}." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:387` | "Could not remove {0}." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:398` | "Install the t3 command first." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:401` | "T3 Code cannot add t3 to this shell's PATH." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:405` | "Another t3 at {0} runs first; T3 Code leaves it in place." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `app/DesktopCliCommand.ts:413` | "Could not add t3 to {0}." | t3 命令安装错误，经 IPC 任意错误通道显示，不交给 t() |
| `backend/tailscaleEndpointProvider.ts:61` | "Tailscale IP" | 端点名，产品名 + 缩写，不译 |
| `backend/tailscaleEndpointProvider.ts:102` | "Tailscale HTTPS" | 端点名，产品名 + 缩写，不译 |
| `ipc/methods/providerAuth.ts:31` | "Could not receive ChatGPT sign-in on this computer. Try again or paste the redirect URL." | 登录错误，同上 |
| `ipc/methods/providerAuth.ts:47` | "Invalid ChatGPT sign-in request." | 登录错误，同上 |
| `preload.ts:82` | "SSH authentication cancelled." | SSH 错误：经通用连接错误通道显示，见报告 4.2 |
| `snapShot/DesktopSnapShot.ts:733` | "{0} is observed and cannot be reserved exclusively." | 快捷键可用时才返回；web 只在不可用时显示 message，不会出现 |
| `snapShot/DesktopSnapShot.ts:735` | "{0} This key can also open the system's own menu." | 同上，且只在非 macOS |
| `snapShot/DesktopSnapShot.ts:738` | "{0} This key can also activate app menu bars." | 同上，且只在 Windows |
| `ssh/DesktopSshEnvironment.ts:99` | "Secure randomness is unavailable." | SSH 错误：经 IPC 抛错（Electron 加前缀）后走通用连接错误通道 |
| `ssh/DesktopSshEnvironment.ts:103` | "T3 Code window is not available for SSH authentication." | SSH 错误，同上 |
| `ssh/DesktopSshEnvironment.ts:106` | "SSH authentication timed out for {0}." | SSH 错误，同上 |
| `ssh/DesktopSshEnvironment.ts:109` | "SSH authentication cancelled for {0}." | SSH 错误，同上（取消类走 ConnectionBlockedError 的 detail） |
| `ssh/DesktopSshEnvironment.ts:112` | "SSH authentication was cancelled because the app window closed." | SSH 错误，同上 |
| `ssh/DesktopSshEnvironment.ts:115` | "SSH password prompt service stopped." | SSH 错误，同上 |
| `updates/DesktopRemoteUpdates.ts:324` | "The desktop app found no build of {0}." | 含动态版本号的远程更新失败原因，经错误通道显示，保持原文 |
| `updates/DesktopUpdatePolicy.ts:79` | "Updates are off because T3 Code cannot use the managed policy at {0}. Contact your administrator." | 含动态策略文件路径的托管策略错误说明，保持原文 |
| `updates/DesktopUpdates.ts:347` | "Updates are turned off on this machine." | 托管策略禁用更新时的原因说明，保持原文 |
| `updates/DesktopUpdates.ts:487` | "{0} Switch to the stable channel to keep getting updates." | 托管策略禁用每夜版更新通道时的原因说明，保持原文 |
| `updates/DesktopUpdates.ts:487` | "Nightly updates are turned off on this machine." | 托管策略禁用每夜版更新通道时的原因说明，保持原文 |
| `updates/remoteUpdateFlow.ts:52` | "Update {0} did not apply on this machine. Retry it from the desktop app there." | 含版本号的动态远程更新失败原因，经任意错误通道显示，保持原文 |

## I3：经 IPC 传给 web，但 web 不显示，或是数据（9）

| file:line | 文字 | 说明 |
|---|---|---|
| `backend/DesktopBackendConfiguration.ts:835` | "Local environment" | 本机环境的默认名（数据） |
| `backend/DesktopLocalEnvironmentAuth.ts:108` | "T3 Code Desktop" | 客户端名，发给服务端保存（数据） |
| `backend/DesktopServerExposure.ts:172` | "Loopback endpoint for this desktop app." | 端点说明，web 不显示 endpoint.description |
| `backend/DesktopServerExposure.ts:185` | "Reachable from devices on the same network." | 端点说明，web 不显示 |
| `backend/DesktopServerExposure.ts:202` | "User-configured HTTPS endpoint for this desktop backend." | 端点说明，web 不显示 |
| `backend/DesktopServerExposure.ts:203` | "User-configured endpoint for this desktop backend." | 端点说明，web 不显示 |
| `backend/tailscaleEndpointProvider.ts:65` | "Reachable from devices on the same Tailnet." | 端点说明，web 不显示 |
| `backend/tailscaleEndpointProvider.ts:108` | "HTTPS endpoint served by Tailscale Serve." | 端点说明，web 不显示 |
| `backend/tailscaleEndpointProvider.ts:109` | "MagicDNS hostname. Configure Tailscale Serve for HTTPS access." | 端点说明，web 不显示 |

## W：经 IPC 在 web 显示，只在 Windows / Linux 出现（未翻译）（90）

| file:line | 文字 | 说明 |
|---|---|---|
| `backend/DesktopBackendConfiguration.ts:310` | "WSL is not available on this system" | WSL 预检原因 |
| `backend/DesktopBackendConfiguration.ts:322` | "Unable to list WSL distributions: {0}" | WSL 预检原因 |
| `backend/DesktopBackendConfiguration.ts:337` | "WSL distro is not installed: {0}" | WSL 预检原因 |
| `backend/DesktopBackendConfiguration.ts:339` | "WSL has no installed distributions" | WSL 预检原因 |
| `backend/DesktopBackendConfiguration.ts:340` | "WSL has no default distribution" | WSL 预检原因 |
| `backend/DesktopBackendConfiguration.ts:352` | "WSL node-pty unavailable: {0}" | WSL 预检原因 |
| `backend/DesktopBackendConfiguration.ts:369` | "missing server entry at {0}" | WSL 预检原因 |
| `backend/DesktopBackendConfiguration.ts:377` | "wslpath conversion failed for {0}" | WSL 预检原因 |
| `backend/DesktopBackendConfiguration.ts:387` | "WSL runtime unavailable: {0}" | WSL 预检原因 |
| `backend/DesktopBackendConfiguration.ts:408` | "The staged WSL runtime did not start; retrying from the mounted server tree." | WSL 预检原因，只在 Windows |
| `backend/DesktopBackendConfiguration.ts:415` | "Could not stage the WSL runtime; launching from the mounted server tree instead." | WSL 预检原因，只在 Windows |
| `backend/DesktopBackendConfiguration.ts:602` | "Ignoring the WSL runtime archive because its SHA-256 identity is missing or invalid; launching from the mounted server tree instead." | WSL 预检原因，只在 Windows |
| `backend/DesktopBackendConfiguration.ts:827` | "WSL-only backend requested but WSL is unavailable; starting the Windows primary instead." | WSL 预检原因，只在 Windows |
| `snapShot/CaptureShortcutConfig.ts:305` | "Config saved, but Hyprland couldn't reload it cleanly. Check hyprctl configerrors, then run hyprctl reload." | 只在 Windows / Linux 的文件 |
| `snapShot/DesktopSnapShot.ts:103` | "Modifier-pair shortcuts aren't available in this Wayland session. Choose another shortcut or use Take snapshot from the command palette." | Wayland |
| `snapShot/DesktopSnapShot.ts:530` | "Active window" | Linux 截图来源名的回退值 |
| `snapShot/DesktopSnapShot.ts:1065` | "SnapShots are not supported on this platform." | 只在不支持截图的平台 |
| `snapShot/DesktopSnapShot.ts:1070` | "Configure the capture shortcut in your Niri config, not in T3 Code." | Linux（Niri） |
| `snapShot/DesktopSnapShot.ts:1076` | "Change the capture binding in your Hyprland config, then save it." | Linux（Hyprland） |
| `snapShot/DesktopSnapShot.ts:1113` | "Your desktop will confirm this shortcut when you save it." | Linux（portal） |
| `snapShot/DesktopSnapShot.ts:1117` | "Unsupported shortcut." | Linux（portal） |
| `snapShot/DesktopSnapShot.ts:1196` | "SnapShots require a Wayland session. X11 capture is not supported." | Linux（X11） |
| `snapShot/DesktopSnapShot.ts:1197` | "SnapShots are not supported on this platform." | 只在不支持截图的平台 |
| `snapShot/DesktopSnapShot.ts:1224` | "The Niri capture endpoint disconnected. Restart T3 Code." | Linux（Niri） |
| `snapShot/DesktopSnapShot.ts:1247` | "Set up the shortcut to add it to your Niri config." | Linux（Niri） |
| `snapShot/DesktopSnapShot.ts:1248` | "Could not start the Niri capture endpoint. Another T3 Code instance may be using it." | Linux（Niri） |
| `snapShot/DesktopSnapShot.ts:1310` | "Could not connect to your desktop's shortcut service." | Linux（portal） |
| `snapShot/DesktopSnapShot.ts:1632` | "Could not check desktop capture support. Check your desktop session and try again." | Linux（portal 模式） |
| `snapShot/GnomeCaptureSetup.ts:172` | "The bundled extension supports GNOME {0}. This session runs GNOME {1}." | 只在 Windows / Linux 的文件 |
| `snapShot/GnomeCaptureSetup.ts:178` | "Install the bundled extension to capture the active window without a picker. No download or administrator password is needed." | 只在 Windows / Linux 的文件 |
| `snapShot/GnomeCaptureSetup.ts:184` | "Installed. Save your work, sign out of GNOME and sign back in, then return here to enable the extension. Restarting T3 Code alone is not eno…" | 只在 Windows / Linux 的文件 |
| `snapShot/GnomeCaptureSetup.ts:190` | "A newer extension is bundled with this app. Install it, then sign out and back in to load the update." | 只在 Windows / Linux 的文件 |
| `snapShot/GnomeCaptureSetup.ts:196` | "GNOME has disabled user extensions. Turn on Extensions in the GNOME Extensions app, then check again. T3 Code will not enable your other ext…" | 只在 Windows / Linux 的文件 |
| `snapShot/GnomeCaptureSetup.ts:201` | "The T3 Code extension is running. Active-window snapshots are available." | 只在 Windows / Linux 的文件 |
| `snapShot/GnomeCaptureSetup.ts:208` | "GNOME could not load the extension. Check GNOME Extensions for details, or sign out and back in." | 只在 Windows / Linux 的文件 |
| `snapShot/GnomeCaptureSetup.ts:213` | "Enable the T3 Code extension to allow active-window snapshots. You can disable it here at any time." | 只在 Windows / Linux 的文件 |
| `snapShot/GnomeCaptureSetup.ts:218` | "Could not check GNOME extension setup." | 只在 Windows / Linux 的文件 |
| `snapShot/HyprlandSnapShot.ts:94` | "Install the bundled helper to capture the window you're using." | 只在 Windows / Linux 的文件 |
| `snapShot/HyprlandSnapShot.ts:104` | "Update the bundled capture helper to continue." | 只在 Windows / Linux 的文件 |
| `snapShot/HyprlandSnapShot.ts:109` | "Helper ready. Hyprland may ask for screen-sharing permission on your first capture." | 只在 Windows / Linux 的文件 |
| `snapShot/HyprlandSnapShot.ts:115` | "Couldn't check Hyprland capture access." | 只在 Windows / Linux 的文件 |
| `snapShot/KdeSnapShot.ts:112` | "Install the bundled helper to capture the window you're using without a picker." | 只在 Windows / Linux 的文件 |
| `snapShot/KdeSnapShot.ts:118` | "The capture helper is missing from this build. Update or reinstall T3 Code." | 只在 Windows / Linux 的文件 |
| `snapShot/KdeSnapShot.ts:123` | "Update the bundled capture helper to continue." | 只在 Windows / Linux 的文件 |
| `snapShot/KdeSnapShot.ts:128` | "KDE capture access is ready. Next, choose your shortcut." | 只在 Windows / Linux 的文件 |
| `snapShot/KdeSnapShot.ts:134` | "Couldn't check KDE capture access." | 只在 Windows / Linux 的文件 |
| `snapShot/NiriCaptureShortcut.ts:34` | "Capture takes no arguments." | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:66` | "Waiting for shortcut permission. Approve the desktop prompt if one appears." | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:100` | "Connecting to Hyprland shortcuts…" | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:161` | "Couldn't connect to Hyprland shortcuts. Make sure xdg-desktop-portal-hyprland is running, then restart T3 Code." | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:164` | "Could not register the capture shortcut." | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:300` | "Shortcut permission wasn't granted. Open shortcut permissions to allow it." | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:301` | "Shortcut permission wasn't granted. Allow T3 Code in your desktop's shortcut settings." | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:323` | "Managed by Hyprland. Add the binding to your config and save it." | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:324` | "Hyprland did not register the capture action. Check that xdg-desktop-portal-hyprland is running, then restart T3 Code." | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:334` | "Desktop shortcut: {0}" | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:336` | "No shortcut is assigned. Open shortcut permissions to choose one." | 只在 Windows / Linux 的文件 |
| `snapShot/PortalCaptureShortcut.ts:337` | "No shortcut is assigned. Choose one in your desktop's shortcut settings." | 只在 Windows / Linux 的文件 |
| `snapShot/RegionSnapShotWorker.ts:26` | "Windows window capture failed." | 只在 Windows / Linux 的文件 |
| `updates/DesktopRemoteUpdates.ts:201` | "This desktop app also runs WSL backends, whose databases a remote switch cannot check. Switch it on that machine." | 含 WSL 后端时的远程切换渠道限制原因，仅在 Windows 出现 |
| `wsl/DesktopWslBackend.ts:42` | "WSL (default distro)" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslBackend.ts:131` | "Another T3 Code server is using this distro's T3 home, or an older background service is set up for it. Stop that server or pair with it, or…" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:160` | "WSL backend preflight timed out while probing for {0}. WSL may be slow to start; retry, or check that the distro is healthy." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:162` | "WSL backend preflight could not start wsl.exe to probe for {0}. Check that WSL is installed and the distro is accessible." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:164` | "WSL backend preflight lost communication with wsl.exe while probing for {0}. Retry, or check that the distro is healthy." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:424` | "WSL support is missing from this T3 Code build: the packaged Linux node-pty binary was not included. Install a build that includes WSL suppo…" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:558` | "Node.js{0} (e.g. via nvm)" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:561` | "node {0} (requires {1})" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:563` | "a newer Node.js satisfying `{0}` (e.g. `nvm install 24 && nvm alias default 24`)" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:570` | "the build toolchain (e.g. `sudo apt install -y build-essential python3` on Ubuntu/Debian)" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:574` | "WSL distro is missing required tools: {0}. Install {1}, then retry." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:591` | "the staged runtime" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:600` | "{0}/t3 --version failed (exit {1}){2}" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:607` | "WSL login-shell PATH could not be resolved during backend preflight." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:661` | "Node.js was not found in the WSL distro. Install it (e.g. via nvm) and restart the desktop app." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:668` | "WSL login-shell PATH could not be resolved during backend preflight." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:677` | "WSL server dependencies could not be loaded (for example \"node-pty\"). The native packages the server needs are not unpacked where the WSL di…" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:692` | "WSL Node.js {0} does not satisfy the server's required engine range ({1}). Install a compatible version, and restart the desktop app." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:744` | "The bundled WSL backend binary (node-pty) could not be loaded in this distro. This usually means an unsupported CPU architecture or incompat…" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:773` | "node-pty Linux build failed (exit {0}): {1}" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:773` | "no stderr captured" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:790` | "wslpath conversion failed for {0}" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:805` | "WSL runtime installation timed out. Check that the distro has free disk space, then retry." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:806` | "WSL runtime installation lost communication with wsl.exe. Retry, or check that the distro is healthy." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:813` | "WSL runtime installation failed (exit {0}): {1}" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:813` | "no stderr captured" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:821` | "WSL runtime installation completed without reporting its cache path." | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:1102` | "prepareRuntime stub not configured" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslEnvironment.ts:1129` | "ensureNodePty stub not configured" | 只在 Windows / Linux 的文件 |
| `wsl/DesktopWslServerTree.ts:183` | "WSL server files could not be extracted to {0}: {1}" | 只在 Windows / Linux 的文件 |

## C：命令行输出：经控制 socket 回给 `t3` 命令行，不在图形界面（12）

| file:line | 文字 | 说明 |
|---|---|---|
| `app/DesktopAppActivation.ts:137` | "The desktop app request is too large." |  |
| `app/DesktopAppActivation.ts:150` | "The desktop app request is not valid JSON." |  |
| `app/DesktopAppActivation.ts:157` | "The desktop app request is invalid." |  |
| `app/DesktopAppActivation.ts:165` | "T3 Code could not process the desktop app request." |  |
| `app/DesktopAppActivationBroker.ts:47` | "T3 Code is shutting down." |  |
| `app/DesktopAppActivationBroker.ts:52` | "The request id is already in use." |  |
| `app/DesktopAppActivationBroker.ts:62` | "The desktop app did not finish opening the project in time." |  |
| `app/DesktopAppActivationBroker.ts:92` | "The T3 Code window closed before it opened the project." |  |
| `app/DesktopAppActivationBroker.ts:105` | "The command closed before T3 Code was ready." |  |
| `app/DesktopAppActivationBroker.ts:114` | "T3 Code is shutting down." |  |
| `app/DesktopCliShim.ts:13` | "Written by T3 Code: runs the desktop app's bundled t3 CLI." | CLI 启动器说明或错误，不在图形界面 |
| `app/DesktopCliShim.ts:22` | "T3 Code has moved or been removed. Open the app once to update this command." | CLI 启动器说明或错误，不在图形界面 |

## P：预览注释工具（注入被预览页面，报告第 5 节，未翻译）（44）

| file:line | 文字 | 说明 |
|---|---|---|
| `preview/PickPreload.ts:47` | "color-mix(in srgb, var(--t3-primary) 10%, transparent)" |  |
| `preview/PickPreload.ts:329` | "translate({0}px, {1}px)" |  |
| `preview/PickPreload.ts:389` | "translate({0}px, {1}px)" |  |
| `preview/PickPreload.ts:467` | "Style value" |  |
| `preview/PickPreload.ts:489` | "grid min-h-7 grid-cols-[82px_minmax(0,1fr)] items-center gap-2 font-sans text-xs font-medium text-muted-foreground" |  |
| `preview/PickPreload.ts:593` | "pointer-events-auto fixed hidden max-h-[calc(100vh-16px)] w-[min(360px,calc(100vw-16px))] flex-col overflow-hidden rounded-xl border border-…" |  |
| `preview/PickPreload.ts:600` | "Expand annotation editor" |  |
| `preview/PickPreload.ts:601` | "Expand annotation editor" |  |
| `preview/PickPreload.ts:610` | "Describe the change…" |  |
| `preview/PickPreload.ts:626` | "Start voice input" |  |
| `preview/PickPreload.ts:631` | "Start voice input" |  |
| `preview/PickPreload.ts:637` | "Cancel voice input" |  |
| `preview/PickPreload.ts:641` | "Finish voice input" |  |
| `preview/PickPreload.ts:644` | "Skip transcript cleanup" |  |
| `preview/PickPreload.ts:762` | "Open voice settings" |  |
| `preview/PickPreload.ts:762` | "Start voice input" |  |
| `preview/PickPreload.ts:781` | "Dismiss voice input error" |  |
| `preview/PickPreload.ts:781` | "Cancel voice input" |  |
| `preview/PickPreload.ts:783` | "Voice input" |  |
| `preview/PickPreload.ts:802` | "(prefers-reduced-motion: reduce)" |  |
| `preview/PickPreload.ts:812` | "Finish voice input" |  |
| `preview/PickPreload.ts:812` | "Voice input is busy" |  |
| `preview/PickPreload.ts:839` | "Drag annotation editor" |  |
| `preview/PickPreload.ts:844` | "Attach annotation and screenshot (Enter)" | 同一注释按钮在不可发送时的提示，沿用报告第 5 节的未翻译范围 |
| `preview/PickPreload.ts:847` | "Attach annotation and screenshot (Enter). Send with Cmd/Ctrl+Enter." | 注入被预览页面的注释工具按钮提示，沿用报告第 5 节的未翻译范围 |
| `preview/PickPreload.ts:848` | "Attach annotation and screenshot (Enter)" | 同一注释按钮在不可发送时的提示，沿用报告第 5 节的未翻译范围 |
| `preview/PickPreload.ts:858` | "hidden max-h-[min(176px,calc(100vh-180px))] overflow-auto border-t border-border bg-muted/40 px-3" |  |
| `preview/PickPreload.ts:1021` | "Font size" |  |
| `preview/PickPreload.ts:1031` | "Font weight" |  |
| `preview/PickPreload.ts:1039` | "Line height" |  |
| `preview/PickPreload.ts:1048` | "grid min-h-7 grid-cols-[82px_minmax(0,1fr)] items-center gap-2 font-sans text-xs font-medium text-muted-foreground" |  |
| `preview/PickPreload.ts:1053` | "grid h-7 grid-cols-[22px_minmax(0,1fr)] items-center gap-1 rounded-md border border-input bg-background px-1 shadow-xs" |  |
| `preview/PickPreload.ts:1080` | "Text color" |  |
| `preview/PickPreload.ts:1101` | "Border color" |  |
| `preview/PickPreload.ts:1112` | "Border width" |  |
| `preview/PickPreload.ts:1126` | "Lock aspect ratio" |  |
| `preview/PickPreload.ts:1223` | "Select elements (V)" |  |
| `preview/PickPreload.ts:1225` | "Draw freehand (D)" |  |
| `preview/PickPreload.ts:1226` | "Remove an annotation target (E)" |  |
| `preview/PickPreload.ts:1322` | "Collapse annotation editor" |  |
| `preview/PickPreload.ts:1323` | "Collapse annotation editor" |  |
| `preview/PickPreload.ts:1331` | "Expand annotation editor" |  |
| `preview/PickPreload.ts:1332` | "Expand annotation editor" |  |
| `preview/PickPreload.ts:1540` | "color-mix(in srgb, var(--t3-primary) 6%, transparent)" |  |

## E：错误消息：Error / TaggedError 的 message 及其参数（§4「从不转换」位置）（310）

| file:line | 文字 | 说明 |
|---|---|---|
| `app/ClerkTokenStore.ts:34` | "Clerk token file \"{0}\" must be a regular file." |  |
| `app/ClerkTokenStore.ts:102` | "Clerk token directory \"{0}\" must be a real directory." |  |
| `app/DesktopApp.ts:66` | "No desktop backend port is available on hosts {0} between {1} and {2}." |  |
| `app/DesktopApp.ts:75` | "T3CODE_PORT is required in desktop development." |  |
| `app/DesktopAppActivation.ts:46` | "Could not start the desktop app control socket at {0}." |  |
| `app/DesktopAppActivation.ts:85` | "{0} is not a directory." |  |
| `app/DesktopAppActivation.ts:88` | "{0} is owned by another user." |  |
| `app/DesktopAssets.ts:25` | "Failed to probe desktop asset \"{0}\" at {1}." |  |
| `app/DesktopClerk.ts:38` | "Failed to initialize the desktop Clerk bridge for state directory \"{0}\" (development: {1})." |  |
| `app/DesktopClerk.ts:51` | "Failed to clean up the desktop Clerk bridge for state directory \"{0}\" (development: {1})." |  |
| `app/DesktopConnectionCatalogStore.ts:79` | "Desktop connection catalog write failed during {0} at {1}." |  |
| `app/DesktopConnectionCatalogStore.ts:92` | "Failed to decode {0} for the desktop connection catalog at {1}." |  |
| `app/DesktopConnectionCatalogStore.ts:104` | "Failed to read the desktop connection catalog at {0}." |  |
| `app/DesktopConnectionCatalogStore.ts:116` | "Failed to decode the desktop connection catalog document at {0}." |  |
| `app/DesktopConnectionCatalogStore.ts:131` | " for environment {0}" |  |
| `app/DesktopConnectionCatalogStore.ts:132` | "Legacy desktop saved-environment migration failed during {0}{1} into {2}." |  |
| `app/DesktopConnectionCatalogStore.ts:145` | "Desktop connection catalog protection failed during {0} at {1}." |  |
| `app/DesktopLifecycle.ts:32` | "Desktop relaunch failed for reason \"{0}\"." |  |
| `app/DesktopLinuxUrlHandler.ts:29` | ", xdg-mime exit code {0}" |  |
| `app/DesktopLinuxUrlHandler.ts:30` | "Failed to register the {0}:// URL handler (step: {1}{2})." |  |
| `app/DesktopLinuxUrlHandler.ts:46` | ", update-desktop-database exit code {0}" |  |
| `app/DesktopLinuxUrlHandler.ts:47` | "Failed to refresh the desktop MIME cache at {0}{1}." |  |
| `app/DesktopObservability.ts:114` | "{0} must be >= 1 (received {1})" |  |
| `app/DesktopStartupRecovery.ts:84` | "Checking for a newer version…" | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:87` | "Version {0} is available. It can contain a fix." | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:88` | "Update to {0}" | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:92` | "Downloading {0}{1}. T3 Code restarts when the download is done." | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:97` | "Version {0} started correctly on this computer. Download it and install it to go back." | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:102` | "Get a different version from the releases page." | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:103` | "Open releases" | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:107` | "Your organization's managed policy stopped T3 Code from starting. Send the details below to your IT administrator." | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:135` | "Copy details" | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:136` | "The server wrote no output." | 后端启动失败恢复诊断文案，保持原文 |
| `app/DesktopStartupRecovery.ts:271` | "T3 Code could not start" | 后端启动失败恢复诊断窗口标题，保持原文 |
| `app/DesktopUserData.ts:17` | "Could not initialize Electron user data during {0} at {1} ({2})." |  |
| `app/chromiumLocalStorage.ts:48` | "unexpected end of data" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:60` | "varint too long" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:63` | "length out of range" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:113` | "snappy literal overflows output" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示（自动规则会误判为样式类名） |
| `app/chromiumLocalStorage.ts:131` | "snappy copy out of range" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:139` | "snappy output length mismatch" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:244` | "unknown manifest tag {0}" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:248` | "incomplete manifest" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:268` | "write batch too short" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:280` | "unknown write batch record type {0}" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:288` | "block handle out of range" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:292` | "block checksum" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:295` | "unsupported block compression {0}" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:299` | "block too short" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:302` | "restart array out of range" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:309` | "block key prefix out of range" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:319` | "table too short" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:327` | "internal key too short" | LevelDB / Snappy 解析错误：读取旧版 localStorage 时的内部失败原因，不在界面显示 |
| `app/chromiumLocalStorage.ts:357` | "Could not read Chromium Local Storage at {0}." |  |
| `app/chromiumLocalStorage.ts:383` | "bad CURRENT" |  |
| `app/chromiumLocalStorage.ts:422` | "database changed while reading" |  |
| `backend/DesktopBackendConfiguration.ts:38` | "Failed to read persisted backend observability settings at {0}." | 读取持久化后端观测设置失败的通用错误，不限 Windows 或 WSL |
| `backend/DesktopBackendManager.ts:115` | "Timed out after {0}ms waiting for desktop backend readiness at {1}." |  |
| `backend/DesktopBackendManager.ts:127` | "Failed to encode the desktop backend bootstrap payload for {0}." |  |
| `backend/DesktopBackendManager.ts:139` | "Failed to spawn desktop backend entry {0} with {1}." |  |
| `backend/DesktopBackendManager.ts:153` | "Failed to read {0} from desktop backend process {1}." |  |
| `backend/DesktopBackendManager.ts:168` | "Failed to handle {0} bytes from {1} of desktop backend process {2}." |  |
| `backend/DesktopBackendManager.ts:185` | "Failed to read the exit status of desktop backend process {0}." |  |
| `backend/DesktopBackendManager.ts:980` | "The server started but did not become ready in time." | 后端启动超时诊断消息，保持原文 |
| `backend/DesktopBackendManager.ts:1039` | "The server could not start ({0})." | 后端启动失败诊断消息，保持原文 |
| `backend/DesktopBackendPool.ts:44` | "Backend instance \"{0}\" is already registered in the pool." |  |
| `backend/DesktopBackendPool.ts:53` | "Refusing to unregister the primary backend from the pool." |  |
| `backend/DesktopLocalEnvironmentAuth.ts:41` | "Local backend is not configured." |  |
| `backend/DesktopLocalEnvironmentAuth.ts:50` | "Failed to create the local desktop bearer session." |  |
| `backend/DesktopNetworkInterfaces.ts:31` | "Failed to read desktop network interfaces on {0}." |  |
| `backend/DesktopServerExposure.ts:219` | "No reachable network address is available for desktop network access on port {0}." |  |
| `backend/DesktopServerExposure.ts:231` | "Failed to persist desktop server exposure mode {0}." |  |
| `backend/DesktopServerExposure.ts:244` | "Failed to persist desktop Tailscale Serve settings (enabled: {0}, port: {1})." |  |
| `electron/ElectronApp.ts:26` | "Failed to read Electron app metadata property \"{0}\"." |  |
| `electron/ElectronApp.ts:38` | "Failed to wait for the Electron app to become ready (packaged: {0})." |  |
| `electron/ElectronDialog.ts:18` | "the application" |  |
| `electron/ElectronDialog.ts:19` | "no default path" |  |
| `electron/ElectronDialog.ts:20` | "Failed to open the Electron folder picker for {0} with {1}." |  |
| `electron/ElectronDialog.ts:33` | "the application" |  |
| `electron/ElectronDialog.ts:34` | "no default path" |  |
| `electron/ElectronDialog.ts:35` | "Failed to open the Electron file picker for {0} with {1}." |  |
| `electron/ElectronDialog.ts:52` | "Failed to show the Electron {0} message box with {1} buttons." |  |
| `electron/ElectronDialog.ts:65` | "Failed to show the Electron error box with a {0}-character title and {1}-character content." |  |
| `electron/ElectronMenu.ts:45` | " for window {0}" |  |
| `electron/ElectronMenu.ts:46` | "Electron menu operation {0} failed{1} with {2} items on {3}." |  |
| `electron/ElectronProtocol.ts:39` | "Failed to register Electron protocol scheme \"{0}\"." |  |
| `electron/ElectronProtocol.ts:51` | "Failed to unregister Electron protocol scheme \"{0}\"." |  |
| `electron/ElectronSafeStorage.ts:21` | "Electron safe storage failed to check encryption availability." |  |
| `electron/ElectronSafeStorage.ts:32` | "Electron safe storage failed to encrypt a string." |  |
| `electron/ElectronSafeStorage.ts:43` | "Electron safe storage failed to decrypt a string." |  |
| `electron/ElectronTheme.ts:21` | "Failed to set the Electron theme source to {0}." |  |
| `electron/ElectronUpdater.ts:21` | "Electron updater failed to check for updates on channel {0}." |  |
| `electron/ElectronUpdater.ts:33` | "Electron updater failed to download the update on channel {0}." |  |
| `electron/ElectronUpdater.ts:47` | "Electron updater failed to quit and install the update on channel {0} (silent: {1}, force run after: {2})." |  |
| `electron/ElectronWindow.ts:89` | "Failed to create Electron BrowserWindow{0}{1}." |  |
| `electron/ElectronWindow.ts:104` | " for window {0}" |  |
| `electron/ElectronWindow.ts:105` | " on channel {0}" |  |
| `electron/ElectronWindow.ts:106` | "Electron window operation {0} failed{1}{2} on {3}." |  |
| `electron/WindowsForeground.ts:31` | "Unsupported Windows window handle size: {0} bytes." |  |
| `electron/WindowsForeground.ts:218` | "Windows refused to activate the T3 Code window." |  |
| `ipc/DesktopIpc.ts:44` | "Failed to register the {0} IPC handler for {1}." |  |
| `ipc/DesktopIpc.ts:57` | "Failed to unregister the {0} IPC handler for {1}." |  |
| `ipc/DesktopIpc.ts:66` | "Rejected {0} from a sender that is not the app window." |  |
| `ipc/methods/snapShot.ts:30` | "Snapshot request was rejected." |  |
| `ipc/methods/sshEnvironment.ts:88` | "[ssh_http:{0}] " |  |
| `ipc/methods/sshEnvironment.ts:89` | "{0}SSH remote API request failed during {1}." |  |
| `ipc/methods/window.ts:369` | "Could not read media." |  |
| `permissions/MacPermissionHelper.ts:95` | "The packaged T3 Code icon is missing." |  |
| `permissions/MacPermissions.ts:27` | "Could not show the permission helper." |  |
| `preview/BrowserImport/BrowserImport.ts:52` | "Importing cookies from {0} failed: {1}." |  |
| `preview/BrowserImport/BrowserImport.ts:68` | "The managed policy at {0} could not be read, so importing browser cookies is not allowed." |  |
| `preview/BrowserImport/BrowserImport.ts:69` | "importing browser cookies" |  |
| `preview/BrowserImport/BrowserImport.ts:100` | "Imported cookies could not be flushed to disk." |  |
| `preview/BrowserImport/BrowserImport.ts:113` | "Could not write imported cookie {0} for {1}." |  |
| `preview/BrowserImport/ChromiumCookies.ts:50` | "Could not read Chromium cookies at {0}: {1}." |  |
| `preview/BrowserImport/ChromiumKeys.ts:36` | "Could not obtain the Chromium cookie key: {0}." |  |
| `preview/BrowserImport/FirefoxCookies.ts:16` | "Could not read Firefox cookies at {0}." |  |
| `preview/BrowserImport/SafariCookies.ts:30` | "Could not read Safari cookies: {0}." |  |
| `preview/BrowserImport/SafariCookies.ts:31` | "Could not read Safari cookies at {0}: {1}." |  |
| `preview/BrowserSession.ts:84` | "Failed to derive a desktop preview browser partition for scope {0}." |  |
| `preview/BrowserSession.ts:97` | "Failed to create a desktop preview browser session for scope {0} (partition {1})." |  |
| `preview/BrowserSession.ts:109` | "Failed to clear desktop preview browser storage for partition {0}." |  |
| `preview/BrowserSession.ts:121` | "Failed to clear the desktop preview browser cache for partition {0}." |  |
| `preview/CdpRelay.ts:91` | "CDP payload too large" | CDP 协议载荷过大错误消息，保持原文 |
| `preview/CdpRelay.ts:164` | "Only this preview tab's page can be attached." | CDP 命令协议校验错误，Error 消息保持原文 |
| `preview/CdpRelay.ts:187` | "Not supported for a desktop preview tab: {0}" | 不受支持的 CDP 命令错误，Error 消息保持原文 |
| `preview/DesktopBrowserHost.ts:159` | "The preview connection that asked for this screenshot closed." |  |
| `preview/DesktopBrowserHost.ts:342` | "The page this screenshot was for has moved on." |  |
| `preview/GuestInput.ts:24` | "The page's focus is inside a cross-site frame, which takes typed input only while the preview has focus. Click the field first." | 跨站iframe输入失败的 Error 消息，非原生界面标签 |
| `preview/GuestInput.ts:211` | "{0} needs the preview to have focus." |  |
| `preview/Manager.ts:1043` | "WebContents was destroyed" |  |
| `preview/Manager.ts:2958` | "Picture-in-picture session closed before it became visible." |  |
| `preview/Manager.ts:2991` | "Preview webview changed while picture-in-picture was opening." |  |
| `preview/Manager.ts:3430` | "Preview tab not found: {0}" |  |
| `preview/Manager.ts:3439` | "WebContents {0} not found for preview tab {1}" |  |
| `preview/Manager.ts:3448` | "Preview tab \"{0}\" has no webview registered" |  |
| `preview/Manager.ts:3457` | "Cannot start preview frame capture while the main window is closed: {0}" |  |
| `preview/Manager.ts:3470` | "Preview tab {0} is still claiming the capture stream, so recording could not start for tab {1}" |  |
| `preview/Manager.ts:3482` | "Preview recording capture is unavailable for tab {0} in WebContents {1}" |  |
| `preview/Manager.ts:3506` | "Desktop preview operation failed: {0}{1}" |  |
| `preview/Manager.ts:3520` | "Preview artifact path {0} is outside {1}" |  |
| `preview/Manager.ts:3529` | "Preview artifact could not be loaded as an image: {0}" |  |
| `preview/Manager.ts:3538` | "Close preview DevTools before using agent browser control for WebContents {0}" |  |
| `preview/Manager.ts:3547` | "Preview control cannot attach to WebContents {0} because another debugger owns it" |  |
| `preview/PasskeyBridge.ts:18` | "The operation either timed out or was not allowed. See: https://www.w3.org/TR/webauthn-2/#sctn-privacy-considerations-client." | WebAuthn 标准拒绝 / 超时错误，交给网页脚本，保持原文 |
| `preview/PasskeyBridge.ts:41` | "The passkey request options are invalid." |  |
| `preview/PasskeyBridge.ts:198` | "The operation was aborted." |  |
| `settings/DesktopAppSettings.ts:140` | "Desktop settings write failed during {0} at {1}." |  |
| `settings/DesktopClientSettings.ts:39` | "Desktop client settings read failed during {0} at {1}." |  |
| `settings/DesktopClientSettings.ts:61` | "Desktop client settings write failed during {0} at {1}." |  |
| `settings/DesktopSavedEnvironments.ts:80` | "Failed to read desktop saved environments at {0}." |  |
| `settings/DesktopSavedEnvironments.ts:92` | "Failed to decode desktop saved environments at {0}." |  |
| `settings/DesktopSavedEnvironments.ts:106` | "Failed to decode {0} for environment {1} at {2}." |  |
| `settings/DesktopSavedEnvironments.ts:120` | "Desktop saved-environment secret protection failed during {0} for environment {1} at {2}." |  |
| `shell/DesktopShellEnvironment.ts:61` | "Desktop shell environment {0} probe ({1}) failed." |  |
| `shell/DesktopShellEnvironment.ts:73` | "Desktop shell environment {0} probe ({1}) timed out after {2}ms." |  |
| `snapShot/CaptureShortcutConfig.ts:57` | "Choose a config file smaller than 1 MB." |  |
| `snapShot/CaptureShortcutConfig.ts:59` | "Choose a config file smaller than 1 MB." |  |
| `snapShot/CaptureShortcutConfig.ts:61` | "Choose a text config file." |  |
| `snapShot/CaptureShortcutConfig.ts:77` | "Niri couldn't validate the proposed config. Nothing was changed. Check your config in Advanced." |  |
| `snapShot/CaptureShortcutConfig.ts:91` | "Hyprland reported config errors." |  |
| `snapShot/CaptureShortcutConfig.ts:118` | "Couldn't check Hyprland's current shortcuts. Try again from your Hyprland session." |  |
| `snapShot/CaptureShortcutConfig.ts:129` | "{0} is already used by Hyprland. Choose another shortcut." |  |
| `snapShot/CaptureShortcutConfig.ts:136` | "Wait for the current config change to finish." |  |
| `snapShot/CaptureShortcutConfig.ts:139` | "Couldn't read your settings file. Choose a different file in Advanced." |  |
| `snapShot/CaptureShortcutConfig.ts:142` | "Choose your own config, not system or Omarchy defaults." |  |
| `snapShot/CaptureShortcutConfig.ts:154` | "Choose a .kdl Niri config or a .conf/.lua Hyprland config." |  |
| `snapShot/CaptureShortcutConfig.ts:175` | "This config has too many included files. Use manual setup in Advanced." |  |
| `snapShot/CaptureShortcutConfig.ts:178` | "This config uses a dynamic include. Use manual setup in Advanced." |  |
| `snapShot/CaptureShortcutConfig.ts:191` | "Couldn't read an included Niri config. Check its location in Advanced." |  |
| `snapShot/CaptureShortcutConfig.ts:202` | "{0} is already used in {1}. Choose another shortcut." |  |
| `snapShot/CaptureShortcutConfig.ts:232` | "This preview expired. Review changes again before saving." |  |
| `snapShot/CaptureShortcutConfig.ts:250` | "Your config changed since this preview. Review changes again before saving." |  |
| `snapShot/CaptureShortcutConfig.ts:263` | "Your config changed since this preview. Nothing was saved. Review changes again before saving." |  |
| `snapShot/DesktopSnapShot.ts:149` | "Could not list pending snapshots." |  |
| `snapShot/DesktopSnapShot.ts:151` | "Could not read the snapshot." |  |
| `snapShot/DesktopSnapShot.ts:153` | "Could not remove the snapshot." |  |
| `snapShot/DesktopSnapShot.ts:155` | "SnapShots are not supported here." |  |
| `snapShot/DesktopSnapShot.ts:157` | "Enable SnapShots in Settings first." |  |
| `snapShot/DesktopSnapShot.ts:159` | "No window was selected." |  |
| `snapShot/DesktopSnapShot.ts:161` | "The active window is not available for capture." |  |
| `snapShot/DesktopSnapShot.ts:163` | "Finish SnapShot setup in Settings → SnapShots." |  |
| `snapShot/DesktopSnapShot.ts:165` | "Could not capture the active window." |  |
| `snapShot/DesktopSnapShot.ts:177` | "Could not register the SnapShot shortcut." |  |
| `snapShot/DesktopSnapShot.ts:243` | "Test capture requires macOS." |  |
| `snapShot/DesktopSnapShot.ts:244` | "Could not capture a test snapshot." |  |
| `snapShot/DesktopSnapShot.ts:246` | "{0} No window is available to capture." |  |
| `snapShot/DesktopSnapShot.ts:249` | "Finding the front window" |  |
| `snapShot/DesktopSnapShot.ts:250` | "Capturing the window" |  |
| `snapShot/DesktopSnapShot.ts:253` | "{0} timed out." |  |
| `snapShot/DesktopSnapShot.ts:255` | "{0} failed: {1} exited with code {2}." |  |
| `snapShot/DesktopSnapShot.ts:260` | "{0} {1} macOS grants Screen Recording and Accessibility to each app separately. In System Settings, open Privacy & Security and check that \"…" |  |
| `snapShot/DesktopSnapShot.ts:264` | "Config setup requires a Niri or Hyprland session." |  |
| `snapShot/DesktopSnapShot.ts:266` | "Couldn't prepare your capture shortcut changes." |  |
| `snapShot/DesktopSnapShot.ts:267` | "Couldn't save your capture shortcut." |  |
| `snapShot/DesktopSnapShot.ts:274` | "Helper setup requires a Hyprland Wayland session outside a sandbox." |  |
| `snapShot/DesktopSnapShot.ts:276` | "Helper setup requires a KDE Plasma Wayland session outside a sandbox." |  |
| `snapShot/DesktopSnapShot.ts:277` | "Extension setup requires a GNOME Wayland session outside a sandbox." |  |
| `snapShot/DesktopSnapShot.ts:278` | "Could not open shortcut permissions." |  |
| `snapShot/DesktopSnapShot.ts:280` | "Could not set up Hyprland capture." |  |
| `snapShot/DesktopSnapShot.ts:282` | "Could not set up KDE capture." |  |
| `snapShot/DesktopSnapShot.ts:283` | "Could not set up the GNOME extension." |  |
| `snapShot/GlobalShiftShortcutProcess.ts:58` | "Snapshot shortcut helper exited with code {0}" |  |
| `snapShot/GnomeCaptureSetup.ts:50` | "The extension installation is not a regular directory. Manage it in GNOME Extensions instead." |  |
| `snapShot/GnomeCaptureSetup.ts:57` | "A newer extension is installed. Update T3 Code instead of replacing it." |  |
| `snapShot/GnomeCaptureSetup.ts:120` | "GNOME did not respond. Sign in to a GNOME Wayland session and try again." |  |
| `snapShot/GnomeCaptureSetup.ts:127` | "GNOME returned no setup information." |  |
| `snapShot/GnomeCaptureSetup.ts:241` | "GNOME has not loaded the extension. Sign out and back in, then try again." |  |
| `snapShot/HyprlandSnapShot.ts:22` | "Invalid capture application ID." |  |
| `snapShot/HyprlandSnapShot.ts:61` | "Hyprland capture did not respond. Check capture setup and try again." |  |
| `snapShot/HyprlandSnapShot.ts:76` | "The capture helper must be a regular file, not a link." |  |
| `snapShot/HyprlandSnapShot.ts:99` | "The Hyprland capture helper is missing from this build. Update or reinstall T3 Code." |  |
| `snapShot/HyprlandSnapShot.ts:127` | "The capture helper directory must not be a link." |  |
| `snapShot/HyprlandSnapShot.ts:134` | "The Hyprland capture helper is missing from this build." |  |
| `snapShot/KdeSnapShot.ts:62` | "KDE couldn't register the capture helper. Make sure KDE's service tools (kbuildsycoca6) are installed, then reinstall the helper." |  |
| `snapShot/KdeSnapShot.ts:70` | "KDE hasn't granted capture access. Reinstall the capture helper in setup, then try again." |  |
| `snapShot/KdeSnapShot.ts:77` | "The KDE capture helper did not respond. Reopen capture setup and check access." |  |
| `snapShot/KdeSnapShot.ts:93` | "Capture helper files must be regular files. Remove the conflicting link before trying again." |  |
| `snapShot/KdeSnapShot.ts:144` | "Another desktop entry uses the capture helper's name. Rename it before continuing." |  |
| `snapShot/KdeSnapShot.ts:152` | "The capture helper directory is not a regular directory." |  |
| `snapShot/KdeSnapShot.ts:163` | "The capture helper is missing from this build. Update or reinstall T3 Code." |  |
| `snapShot/LinuxSnapShot.ts:136` | "Snapshot timed out." |  |
| `snapShot/LinuxSnapShot.ts:146` | "Missing D-Bus reply." |  |
| `snapShot/LinuxSnapShot.ts:272` | "Invalid screenshot request handle." |  |
| `snapShot/LinuxSnapShot.ts:282` | "Snapshot was cancelled." |  |
| `snapShot/LinuxSnapShot.ts:283` | "Your desktop did not allow the snapshot." |  |
| `snapShot/LinuxSnapShot.ts:307` | "Another T3 Code instance is capturing a window. Try again." |  |
| `snapShot/LinuxSnapShot.ts:318` | "Invalid extension screenshot." |  |
| `snapShot/LinuxSnapShot.ts:391` | "Hyprland capture setup is unavailable in this build." |  |
| `snapShot/LinuxSnapShot.ts:403` | "KDE capture setup is unavailable in this build." |  |
| `snapShot/MacModifierPairShortcutProcess.ts:89` | "Snapshot shortcut helper exited with code {0}" |  |
| `snapShot/MacSnapShot.ts:47` | "macOS returned an invalid snapshot." |  |
| `snapShot/MacSnapShot.ts:50` | "macOS returned an invalid snapshot." |  |
| `snapShot/NiriCaptureShortcut.ts:51` | "Niri capture shortcut registration timed out." |  |
| `snapShot/NiriCaptureShortcut.ts:57` | "Another T3 Code instance already owns the capture shortcut." |  |
| `snapShot/NiriSnapShot.ts:72` | "Niri returned an oversized message." |  |
| `snapShot/NiriSnapShot.ts:83` | "Niri returned an invalid message." |  |
| `snapShot/NiriSnapShot.ts:89` | "Niri disconnected." |  |
| `snapShot/NiriSnapShot.ts:112` | "Invalid Niri response." |  |
| `snapShot/NiriSnapShot.ts:115` | "Niri snapshot timed out." |  |
| `snapShot/NiriSnapShot.ts:125` | "Niri connection closed." |  |
| `snapShot/NiriSnapShot.ts:151` | "SnapShots require Niri 25.11 or newer." |  |
| `snapShot/NiriSnapShot.ts:157` | "Niri activation cancelled." |  |
| `snapShot/NiriSnapShot.ts:176` | "More than one T3 Code window matches the capture destination." |  |
| `snapShot/NiriSnapShot.ts:199` | "Niri has no focused window to capture." |  |
| `snapShot/PortalCaptureShortcut.ts:114` | "Capture shortcut registration closed." |  |
| `snapShot/PortalCaptureShortcut.ts:130` | "Change the capture binding in your Hyprland config, then save it." |  |
| `snapShot/PortalCaptureShortcut.ts:133` | "Open your desktop's shortcut settings and allow T3 Code's capture shortcut." |  |
| `snapShot/PortalCaptureShortcut.ts:177` | "Shortcut permission request timed out. Try again." |  |
| `snapShot/PortalCaptureShortcut.ts:188` | "Capture shortcut registration closed." |  |
| `snapShot/PortalCaptureShortcut.ts:190` | "Missing shortcut portal reply." |  |
| `snapShot/PortalCaptureShortcut.ts:215` | "The desktop shortcut service restarted. Retry the shortcut request." |  |
| `snapShot/PortalCaptureShortcut.ts:235` | "Your desktop closed the capture shortcut. Retry the shortcut request." |  |
| `snapShot/PortalCaptureShortcut.ts:286` | "Invalid shortcut request handle." |  |
| `snapShot/PortalCaptureShortcut.ts:305` | "Your desktop could not create a capture shortcut session." |  |
| `snapShot/PortalCaptureShortcut.ts:402` | "Invalid shortcut session handle." |  |
| `snapShot/RegionSnapShot.ts:68` | "Windows window capture is unavailable." |  |
| `snapShot/RegionSnapShot.ts:80` | "Windows window capture failed." |  |
| `snapShot/RegionSnapShot.ts:98` | "Windows window capture helper exited." |  |
| `snapShot/RegionSnapShot.ts:106` | "Windows window capture helper already used." |  |
| `snapShot/RegionSnapShot.ts:108` | "Windows window capture timed out. Try again." |  |
| `snapShot/RegionSnapShot.ts:121` | "Windows window capture cancelled." |  |
| `snapShot/RegionSnapShot.ts:153` | "Windows window capture is unavailable." |  |
| `snapShot/RegionSnapShot.ts:155` | "Windows window capture is still in progress. Try again." |  |
| `snapShot/captureConfigEdit.ts:15` | "Choose a letter, number, or function key with Ctrl, Alt, or Super." |  |
| `snapShot/captureConfigEdit.ts:43` | "Invalid capture application ID." |  |
| `snapShot/captureConfigEdit.ts:55` | "This Niri config has an unexpected binds section. Check it in Advanced." |  |
| `snapShot/captureConfigEdit.ts:106` | "Couldn't resolve a Niri include. Choose the config in Advanced." |  |
| `snapShot/captureConfigEdit.ts:149` | "This Lua config needs a manual edit. Choose your bindings file or use manual setup in Advanced." |  |
| `snapShot/captureConfigEdit.ts:167` | "{0} is already used in this config. Choose another shortcut." |  |
| `snapShot/captureConfigKdl.ts:19` | "Couldn't read this Niri config. Use Advanced to configure it manually." |  |
| `snapShot/linuxCaptureSession.ts:17` | "{0} Open Settings → SnapShots to continue setup." |  |
| `snapShot/linuxCaptureSession.ts:108` | "This key isn't supported as a Wayland capture shortcut. Choose another key." |  |
| `snapShot/linuxCaptureSession.ts:125` | "Invalid or oversized window screenshot." |  |
| `snapShot/linuxCaptureSession.ts:128` | "The window screenshot is empty." |  |
| `snapShot/linuxCaptureSession.ts:147` | "Invalid screenshot file." |  |
| `snapShot/linuxCaptureSession.ts:152` | "Incomplete screenshot file." |  |
| `ssh/DesktopSshEnvironment.ts:90` | "Unhandled desktop SSH password prompt error: {0}" |  |
| `ssh/DesktopSshPasswordPrompts.ts:52` | "Secure randomness is unavailable." |  |
| `ssh/DesktopSshPasswordPrompts.ts:65` | "before a request id was assigned" |  |
| `ssh/DesktopSshPasswordPrompts.ts:66` | "T3 Code window is unavailable during {0} for SSH authentication to {1} (request: {2})." |  |
| `ssh/DesktopSshPasswordPrompts.ts:80` | "Failed to present SSH password prompt for {0}." |  |
| `ssh/DesktopSshPasswordPrompts.ts:92` | "SSH authentication timed out for {0}." |  |
| `ssh/DesktopSshPasswordPrompts.ts:104` | "SSH authentication cancelled for {0}." |  |
| `ssh/DesktopSshPasswordPrompts.ts:116` | "SSH authentication was cancelled because the app window closed." |  |
| `ssh/DesktopSshPasswordPrompts.ts:128` | "SSH password prompt service stopped." |  |
| `ssh/DesktopSshPasswordPrompts.ts:139` | "Invalid SSH password prompt id." |  |
| `ssh/DesktopSshPasswordPrompts.ts:150` | "SSH password prompt expired. Try connecting again." |  |
| `updates/DesktopUpdates.ts:106` | "Cannot change the desktop update channel to {0} while an update {1} action is in progress." |  |
| `updates/DesktopUpdates.ts:118` | "Failed to persist the {0} desktop update channel." |  |
| `updates/DesktopUpdates.ts:130` | "Desktop update {0} poller failed." |  |
| `updates/DesktopUpdates.ts:142` | "Failed to handle desktop update {0} event." |  |
| `updates/DesktopUpdates.ts:154` | "Desktop updater {0} operation reported an error." |  |
| `updates/DesktopUpdates.ts:166` | "Desktop update {0} action failed unexpectedly." |  |
| `updates/DesktopUpdates.ts:178` | "{0} The {1} channel is not available." |  |
| `updates/DesktopUpdates.ts:1210` | "Your administrator manages T3 Code updates." |  |
| `window/ContextMenuImage.ts:24` | "Unsupported image URL" |  |
| `window/ContextMenuImage.ts:34` | "Image request failed or exceeded the size limit" |  |
| `window/ContextMenuImage.ts:36` | "Image response has no body" |  |
| `window/ContextMenuImage.ts:48` | "Image exceeded the size limit" |  |
| `window/ContextMenuImage.ts:64` | "Image dimensions exceed the size limit" |  |
| `window/ContextMenuImage.ts:92` | "Image could not be decoded" |  |
| `window/ContextMenuImage.ts:97` | "PNG exceeded the size limit" |  |
| `window/DesktopApplicationMenu.ts:24` | "Desktop menu action \"{0}\" failed." |  |
| `window/DesktopWindow.ts:49` | "Could not copy the context-menu image." |  |
| `wsl/DesktopWslBackend.ts:55` | "No loopback port available for WSL backend between {0} and {1}." |  |
| `wsl/DesktopWslEnvironment.ts:885` | "wsl.exe --list --verbose exited with code {0}" |  |
| `wsl/DesktopWslEnvironment.ts:895` | "Failed to run wsl.exe --list --verbose: {0}" |  |
| `wsl/DesktopWslEnvironment.ts:903` | "wsl.exe --list --verbose timed out" |  |
| `wsl/DesktopWslServerTree.ts:32` | "Failed to extract the WSL server tree to {0}." |  |

## L：日志与观测（161）

| file:line | 文字 | 说明 |
|---|---|---|
| `app/DesktopApp.ts:139` | "fatal startup error" |  |
| `app/DesktopApp.ts:147` | "T3 Code failed to start" |  |
| `app/DesktopApp.ts:177` | "bootstrap start" |  |
| `app/DesktopApp.ts:189` | "bootstrap ipc handlers registered" |  |
| `app/DesktopApp.ts:204` | "skipped installing the t3 command without the shell PATH" |  |
| `app/DesktopApp.ts:210` | "bootstrap skipping local environment (disabled in settings)" |  |
| `app/DesktopApp.ts:230` | "selected backend port via sequential scan" |  |
| `app/DesktopApp.ts:231` | "using configured backend port" |  |
| `app/DesktopApp.ts:239` | "bootstrap restoring persisted server exposure mode" |  |
| `app/DesktopApp.ts:245` | "bootstrap resolved backend endpoint" |  |
| `app/DesktopApp.ts:249` | "bootstrap enabled network access" |  |
| `app/DesktopApp.ts:257` | "bootstrap fell back to local-only because no advertised network host was available" |  |
| `app/DesktopApp.ts:266` | "bootstrap backend start requested" |  |
| `app/DesktopApp.ts:278` | "desktop app control socket ready" |  |
| `app/DesktopApp.ts:279` | "desktop app control socket unavailable" |  |
| `app/DesktopApp.ts:325` | "runtime logging configured" |  |
| `app/DesktopApp.ts:330` | "linux password store configured" |  |
| `app/DesktopApp.ts:347` | "app ready" |  |
| `app/DesktopApp.ts:350` | "safe storage ready" |  |
| `app/DesktopAppActivation.ts:320` | "failed to focus the desktop window" |  |
| `app/DesktopAppActivation.ts:344` | "failed to restore the desktop app control socket" |  |
| `app/DesktopAppActivation.ts:352` | "failed to close the desktop app control socket" |  |
| `app/DesktopClerk.ts:194` | "Could not complete ChatGPT desktop handoff." |  |
| `app/DesktopClerk.ts:211` | "Could not return to provider setup" |  |
| `app/DesktopCliCommand.ts:425` | "left the t3 command to Settings on an existing install" |  |
| `app/DesktopCliCommand.ts:432` | "left another T3 Code app's t3 command in place" |  |
| `app/DesktopCliCommand.ts:445` | "left the t3 command to Settings beside another t3" |  |
| `app/DesktopCliCommand.ts:450` | "installed the t3 command on first launch" |  |
| `app/DesktopCliCommand.ts:458` | "did not install the t3 command on first launch" |  |
| `app/DesktopConnectionCatalogStore.ts:273` | "Could not remove a temporary connection catalog file." |  |
| `app/DesktopLegacyLocalStorage.ts:69` | "Could not record the V1 Local Storage import" |  |
| `app/DesktopLegacyLocalStorage.ts:86` | "Could not read V1 Local Storage; will retry next launch" |  |
| `app/DesktopLegacyLocalStorage.ts:91` | "V1 Local Storage ready to import" |  |
| `app/DesktopLifecycle.ts:130` | "quit already in progress" |  |
| `app/DesktopLifecycle.ts:133` | "desktop shutdown stalled; exiting without it" |  |
| `app/DesktopLifecycle.ts:150` | "before-quit received" |  |
| `app/DesktopLifecycle.ts:167` | "before-quit received" |  |
| `app/DesktopLifecycle.ts:171` | "failed to destroy windows before shutdown" |  |
| `app/DesktopLifecycle.ts:206` | "process signal received" |  |
| `app/DesktopLifecycle.ts:220` | "desktop relaunch requested" |  |
| `app/DesktopLifecycle.ts:271` | "allowing updater-controlled quit" |  |
| `app/DesktopLifecycle.ts:273` | "failed to destroy windows before updater quit" |  |
| `app/DesktopLinuxUrlHandler.ts:247` | "icon theme cache refresh failed" |  |
| `app/DesktopLinuxUrlHandler.ts:251` | "app id theme icon install failed" |  |
| `app/DesktopLinuxUrlHandler.ts:304` | "URL handler icon copy failed" |  |
| `app/DesktopLinuxUrlHandler.ts:313` | "desktop MIME cache refresh failed" |  |
| `app/DesktopLinuxUrlHandler.ts:322` | "registered URL scheme handler" |  |
| `app/DesktopLinuxUrlHandler.ts:325` | "URL scheme handler registration failed" |  |
| `app/DesktopObservability.ts:470` | "backend child process failure output start" |  |
| `app/DesktopObservability.ts:482` | "backend child process output" |  |
| `app/DesktopObservability.ts:494` | "backend child process failure output end" |  |
| `app/DesktopStartupRecovery.ts:210` | "startup recovery action" |  |
| `app/DesktopStartupRecovery.ts:299` | "startup recovery window shown" |  |
| `app/DesktopStartupRecovery.ts:302` | "could not show startup recovery" |  |
| `app/DesktopStartupRecovery.ts:329` | "could not record the started version" |  |
| `app/DesktopStartupRecovery.ts:353` | "primary backend failing to start" |  |
| `app/DesktopStartupRecovery.ts:361` | "startup recovery stopped" |  |
| `app/DesktopUserData.ts:130` | "could not clear stale GPU caches" |  |
| `backend/DesktopBackendManager.ts:332` | "backend shutdown exceeded timeout; waiting for exit" |  |
| `backend/DesktopBackendManager.ts:502` | "ignored invalid desktop telemetry control message" |  |
| `backend/DesktopBackendManager.ts:510` | "desktop telemetry control stream stopped" |  |
| `backend/DesktopBackendManager.ts:537` | "desktop browser command stream stopped" | 浏览器控制流结束后的后台告警，不在界面显示 |
| `backend/DesktopBackendManager.ts:606` | "killed by {0}" | 后台进程退出原因，交给重启诊断记录 |
| `backend/DesktopBackendManager.ts:726` | "failed to generate desktop backend configuration" |  |
| `backend/DesktopBackendManager.ts:734` | "failed to generate desktop backend configuration" | scheduleRestart 的原因，只进日志 |
| `backend/DesktopBackendManager.ts:771` | "backend preflight still failing after fallback; stopping" |  |
| `backend/DesktopBackendManager.ts:784` | "backend preflight failed repeatedly; surfacing and falling back" |  |
| `backend/DesktopBackendManager.ts:809` | "missing server entry at {0}" | scheduleRestart 的原因，只进日志 |
| `backend/DesktopBackendManager.ts:933` | "pid={0} port={1} cwd={2}" |  |
| `backend/DesktopBackendManager.ts:974` | "backend readiness check failed during bootstrap" |  |
| `backend/DesktopBackendManager.ts:1032` | "backend exited unexpectedly; restart scheduled" |  |
| `backend/DesktopBackendManager.ts:1057` | "desktop backend restart fiber failed" |  |
| `backend/DesktopBackendPool.ts:122` | "primary WSL preflight retry window exhausted; using Windows for this launch" |  |
| `backend/DesktopBackendPool.ts:126` | "WSL backend is still unavailable" |  |
| `backend/DesktopBackendPool.ts:127` | "{0}\n\nT3 Code will use the Windows backend for this launch and retry WSL the next time the app starts." |  |
| `backend/DesktopBackendPool.ts:133` | "primary WSL preflight failed; falling back to Windows" |  |
| `backend/DesktopBackendPool.ts:137` | "WSL backend couldn't start" |  |
| `backend/DesktopBackendPool.ts:138` | "{0}\n\nFalling back to the Windows backend so T3 Code can open. Re-enable the WSL backend from Settings > Sharing & access once the WSL distro…" |  |
| `backend/DesktopBackendPool.ts:145` | "failed to persist Windows fallback after WSL preflight failure" |  |
| `backend/DesktopBackendPool.ts:167` | "failed to open main window after backend readiness" |  |
| `backend/DesktopBackendPool.ts:179` | "This T3 home is unavailable" |  |
| `backend/DesktopBackendPool.ts:180` | "Another T3 Code server, such as the background service, is using this data directory, or an older background service is set up for it. Stop …" |  |
| `backend/DesktopBackendPool.ts:330` | "DesktopBackendPool.layerTest requires at least one instance" |  |
| `backend/DesktopBackendPool.ts:343` | "DesktopBackendPool.layerTest does not support register" |  |
| `backend/DesktopBackendPool.ts:346` | "DesktopBackendPool.layerTest does not support unregister" |  |
| `ipc/DesktopIpc.ts:158` | "Rejected sync IPC from an untrusted sender." |  |
| `ipc/methods/notificationBadge.ts:40` | "Could not update notification badge" |  |
| `permissions/MacPermissions.ts:52` | "Could not show permission helper" |  |
| `preview/BrowserImport/BrowserImport.ts:200` | "Imported cookies could not be flushed to disk" |  |
| `preview/BrowserImport/BrowserImport.ts:259` | "Reading browser cookie key from the keychain" |  |
| `preview/Manager.ts:705` | "Failed to restore preview webview frame capture throttling." |  |
| `preview/Manager.ts:801` | "Failed to restore preview frame capture throttling." |  |
| `preview/Manager.ts:833` | "Desktop preview event listener failed." |  |
| `preview/Manager.ts:1364` | "Favicon capture failed." |  |
| `preview/Manager.ts:1919` | "Preview webview control session was not opened on attach." |  |
| `preview/Manager.ts:2216` | "preview annotation screenshot failed" |  |
| `preview/Manager.ts:2647` | "Picture-in-picture frame delivery failed." |  |
| `preview/Manager.ts:2662` | "Background preview frame capture failed." |  |
| `preview/Manager.ts:2737` | "Initial background preview frame was not ready; capture will retry." |  |
| `preview/Manager.ts:3719` | "preview download copy failed" |  |
| `preview/Passkeys.ts:36` | "Failed to enable Touch ID passkeys for the in-app browser (keychain group {0})." | 通行密钥启用失败告警，仅进日志，保持原文 |
| `settings/DesktopClientSettings.ts:85` | "Could not read desktop client settings." |  |
| `settings/DesktopClientSettings.ts:106` | "Could not decode desktop client settings." |  |
| `shell/DesktopShellEnvironment.ts:637` | "Could not cache shell environment" |  |
| `snapShot/DesktopSnapShot.ts:952` | "The compositor could not activate T3 Code after the snapshot" |  |
| `telemetry/DesktopRendererHistory.ts:91` | "Renderer incident history could not be opened." |  |
| `telemetry/DesktopTelemetryPublisher.ts:299` | "Failed to sample Electron telemetry" |  |
| `updates/DesktopRemoteUpdates.ts:181` | "remote update requested" |  |
| `updates/DesktopRemoteUpdates.ts:311` | "remote update prepared" |  |
| `updates/DesktopRemoteUpdates.ts:335` | "remote update finished" |  |
| `updates/DesktopRemoteUpdates.ts:375` | "remote update request failed unexpectedly" |  |
| `updates/DesktopRemoteUpdates.ts:494` | "remote update commit joining an in-progress install" |  |
| `updates/DesktopRemoteUpdates.ts:510` | "remote update commit failed unexpectedly" |  |
| `updates/DesktopUpdatePolicy.ts:61` | "managed policy restricts updates" |  |
| `updates/DesktopUpdatePolicy.ts:71` | "updates are off because the managed policy cannot be used" |  |
| `updates/DesktopUpdates.ts:232` | "[redacted URL]" |  |
| `updates/DesktopUpdates.ts:233` | "[redacted credential]" |  |
| `updates/DesktopUpdates.ts:236` | "[redacted header]" |  |
| `updates/DesktopUpdates.ts:240` | "[redacted credential]" |  |
| `updates/DesktopUpdates.ts:246` | "[truncated cause]" | 更新错误详情的诊断截断标记 |
| `updates/DesktopUpdates.ts:273` | "; caused by {0}" | 拼接动态诊断原因，不送入翻译器 |
| `updates/DesktopUpdates.ts:528` | "using update channel" |  |
| `updates/DesktopUpdates.ts:548` | "skipping update check while update is active" |  |
| `updates/DesktopUpdates.ts:560` | "checking for updates" |  |
| `updates/DesktopUpdates.ts:610` | "downloading update" |  |
| `updates/DesktopUpdates.ts:665` | "Could not write the update restart marker." |  |
| `updates/DesktopUpdates.ts:682` | "Could not record the update install." |  |
| `updates/DesktopUpdates.ts:753` | "Desktop update install recovery could not restart every backend." |  |
| `updates/DesktopUpdates.ts:757` | "Desktop update install recovery failed unexpectedly." |  |
| `updates/DesktopUpdates.ts:934` | "ignoring update outside the selected channel or its floor" |  |
| `updates/DesktopUpdates.ts:961` | "update available" |  |
| `updates/DesktopUpdates.ts:987` | "no updates available" |  |
| `updates/DesktopUpdates.ts:1046` | "download progress" |  |
| `updates/DesktopUpdates.ts:1073` | "ignoring download outside the selected channel or its floor" |  |
| `updates/DesktopUpdates.ts:1086` | "update downloaded" |  |
| `updates/DesktopUpdates.ts:1132` | "the last update install did not apply" |  |
| `updates/DesktopUpdates.ts:1173` | "Apple Silicon host detected while running Intel build; updates will switch to arm64 packages" |  |
| `updates/DesktopUpdates.ts:1179` | "looking for updates" |  |
| `window/DesktopApplicationMenu.ts:96` | "manual update check requested, but updates are disabled" |  |
| `window/DesktopWindow.ts:410` | "failed to read connected displays; using defaults" |  |
| `window/DesktopWindow.ts:416` | "saved main window bounds could not be restored; using defaults" |  |
| `window/DesktopWindow.ts:485` | "failed to persist main window bounds" |  |
| `window/DesktopWindow.ts:629` | "failed to copy context-menu image" |  |
| `window/DesktopWindow.ts:840` | "main window failed to load" |  |
| `window/DesktopWindow.ts:866` | "main window render process gone" |  |
| `window/DesktopWindow.ts:931` | "main window created" |  |
| `window/DesktopWindow.ts:1011` | "connecting splash shown" |  |
| `window/DesktopWindow.ts:1014` | "failed to show connecting splash" |  |
| `window/DesktopWindow.ts:1080` | "backend ready" |  |
| `wsl/DesktopWslBackend.ts:85` | "refusing to unregister primary as wsl instance" |  |
| `wsl/DesktopWslBackend.ts:100` | "could not allocate port for WSL backend" |  |
| `wsl/DesktopWslBackend.ts:112` | "registering WSL backend with pool" |  |
| `wsl/DesktopWslBackend.ts:144` | "WSL backend already registered, skipping start" |  |
| `wsl/DesktopWslBackend.ts:185` | "retrying idle WSL backend" |  |
| `wsl/DesktopWslBackend.ts:196` | "tearing down WSL backend" |  |
| `wsl/DesktopWslBackend.ts:211` | "reconcile failed" |  |
| `wsl/DesktopWslEnvironment.ts:839` | "Could not prune old WSL runtime caches." |  |
| `wsl/DesktopWslEnvironment.ts:859` | "Could not invalidate the staged WSL runtime cache." |  |
| `wsl/DesktopWslServerTree.ts:124` | "[wsl-server-tree] Extracting {0} to {1}..." |  |
| `wsl/DesktopWslServerTree.ts:140` | "[wsl-server-tree] Extraction complete at {0}." |  |
| `wsl/DesktopWslServerTree.ts:158` | "[wsl-server-tree] Could not remove the legacy extraction cache." |  |

## S：脚本、命令、SQL、HTML/CSS 模板、样式类名、SVG（228）

| file:line | 文字 | 说明 |
|---|---|---|
| `app/DesktopCliCommand.ts:48` | "\n$ErrorActionPreference = 'Stop'\nif ($env:T3_SET -eq '1') {\n  $key = [Microsoft.Win32.Registry]::CurrentUser.CreateSubKey('Environment')\n  $…" | 安装 t3 命令使用的 PowerShell PATH 脚本，不是错误消息 |
| `app/DesktopCliCommand.ts:411` | "\n# Added by T3 Code\n{0}\n" | 写入 shell 配置文件的 PATH 导出片段 |
| `app/DesktopCliShim.ts:40` | "chcp %t3_codepage% >nul" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:42` | "@echo off" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:45` | "setlocal EnableExtensions DisableDelayedExpansion" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:49` | "for /f \"tokens=2 delims=:.\" %%c in ('chcp') do set \"t3_codepage=%%c\"" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:50` | "chcp 65001 >nul" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:53` | "set \"T3CODE_CLI_PATH={0}\"" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:54` | "if not defined T3CODE_HOME set \"T3CODE_HOME={0}\"" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:55` | "set \"ELECTRON_RUN_AS_NODE=1\"" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:57` | "set \"T3CODE_DESKTOP_CLI_LAUNCHER=1\"" |  |
| `app/DesktopCliShim.ts:59` | "if exist {0} goto run" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:65` | "set \"t3_exit=%ERRORLEVEL%\"" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:74` | "export T3CODE_CLI_PATH={0}" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:76` | "export T3CODE_HOME=\"${T3CODE_HOME:-$home}\"" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:77` | "export ELECTRON_RUN_AS_NODE=1" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:79` | "if [ ! -x \"$app\" ]; then" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:85` | "exec \"$app\" {0} \"$@\"" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:88` | "\"{0}/{1}\" \"{2}/resources/app.asar/{3}\" \"$@\"" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:92` | "unset APPIMAGE_EXTRACT_AND_RUN" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:94` | "work=$(mktemp -d) \|\| exit 1" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:95` | "\"$app\" --appimage-mount >\"$work/mount\" 2>/dev/null &" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:97` | "trap 'kill \"$mounter\" 2>/dev/null; rm -rf \"$work\"' EXIT" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:98` | "trap 'exit 130' INT TERM" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:100` | "while kill -0 \"$mounter\" 2>/dev/null; do" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:101` | "  mount=$(head -n 1 \"$work/mount\")" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:102` | "  [ -d \"$mount\" ] && break" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:107` | "if [ -z \"$mount\" ]; then" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:108` | "  (cd \"$work\" && \"$app\" --appimage-extract >/dev/null) \|\| { echo \"Could not open $app.\" >&2; exit 1; }" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:109` | "  mount=\"$work/squashfs-root\"" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:146` | "leaving a t3 launcher the app did not write" | CLI 启动脚本 |
| `app/DesktopCliShim.ts:160` | "could not install t3 launcher" | CLI 启动脚本 |
| `app/DesktopLinuxUrlHandler.ts:86` | "[Desktop Entry]" |  |
| `app/DesktopStartupRecovery.ts:79` | "<a class=\"button{0}\" href=\"{1}/{2}\">{3}</a>" | 启动恢复窗口的按钮 HTML 片段 |
| `app/DesktopStartupRecovery.ts:121` | "<!doctype html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; style-src 'unsafe-i…" | 后端启动失败恢复诊断窗口 HTML 模板 |
| `electron/ElectronProtocol.ts:86` | "default-src 'self'" |  |
| `electron/ElectronProtocol.ts:87` | "script-src {0}" |  |
| `electron/ElectronProtocol.ts:88` | "connect-src {0}" |  |
| `electron/ElectronProtocol.ts:89` | "img-src 'self' {0}: blob: data: http: https:" |  |
| `electron/ElectronProtocol.ts:90` | "media-src 'self' {0}: blob: http: https:" |  |
| `electron/ElectronProtocol.ts:91` | "style-src 'self' 'unsafe-inline'" |  |
| `electron/ElectronProtocol.ts:92` | "font-src 'self' {0}: data:" |  |
| `electron/ElectronProtocol.ts:93` | "worker-src 'self' blob:" |  |
| `electron/ElectronProtocol.ts:94` | "frame-src 'self' blob: http: https:" |  |
| `electron/ElectronProtocol.ts:95` | "object-src 'self' blob: http: https:" |  |
| `electron/ElectronProtocol.ts:96` | "form-action 'self'" |  |
| `permissions/MacSettingsWindow.ts:20` | "\nObjC.import(\"CoreGraphics\");\nObjC.import(\"AppKit\");\nObjC.import(\"unistd\");\nfunction run() {\n  let previous = \"\";\n  while ($.getppid() !== 1…" |  |
| `preview/BrowserImport/ChromiumCookies.ts:184` | "select value from meta where key = 'version' limit 1" |  |
| `preview/BrowserImport/ChromiumCookies.ts:190` | "select host_key, name, value, encrypted_value, path,\n                expires_utc / 1000000 as expires_seconds, is_secure, is_httponly,\n     …" |  |
| `preview/BrowserImport/ChromiumCookies.ts:193` | "select host_key, name, value, encrypted_value, path,\n                expires_utc / 1000000 as expires_seconds, is_secure, is_httponly,\n     …" |  |
| `preview/BrowserImport/ChromiumKeys.ts:138` | "Add-Type -AssemblyName System.Security;" |  |
| `preview/BrowserImport/CookieDatabase.ts:57` | "VACUUM INTO {0}" |  |
| `preview/BrowserImport/FirefoxCookies.ts:72` | "pragma user_version" |  |
| `preview/BrowserImport/FirefoxCookies.ts:79` | "\n          select host, name, value, path, expiry, isSecure, isHttpOnly, sameSite, rawSameSite\n            from moz_cookies\n           where…" |  |
| `preview/BrowserImport/FirefoxCookies.ts:84` | "\n          select host, name, value, path, expiry, isSecure, isHttpOnly, sameSite,\n                 null as rawSameSite\n            from moz…" |  |
| `preview/BrowserImport/Sources.ts:350` | "select count(*) as count from moz_cookies where originAttributes = ''" |  |
| `preview/BrowserImport/Sources.ts:351` | "select count(*) as count from cookies" |  |
| `preview/BrowserImport/Sources.ts:390` | "\n      select title, external_uuid from bookmarks\n      where parent = 0 and type = 1 and subtype = 2 and deleted = 0\n      order by order_i…" |  |
| `preview/BrowserImport/Sources.ts:642` | "import fcntl,os,sys\n" |  |
| `preview/BrowserImport/Sources.ts:643` | "fd=os.open(sys.argv[1],os.O_WRONLY)\n" |  |
| `preview/BrowserImport/Sources.ts:645` | "  fcntl.lockf(fd,fcntl.LOCK_EX\|fcntl.LOCK_NB)\n" |  |
| `preview/BrowserImport/Sources.ts:646` | "except BlockingIOError:\n" |  |
| `preview/BrowserImport/Sources.ts:647` | "  print('held')\n" |  |
| `preview/BrowserImport/Sources.ts:649` | "  print('free')" |  |
| `preview/FaviconCapture.ts:606` | "\n    (() => {\n      const rasterize = async () => {\n        try {\n          const source = Uint8Array.from(atob(\"{0}\"), (char) => char.charC…" |  |
| `preview/GuestInput.ts:10` | "(() => {\n  let doc = document;\n  for (;;) {\n    const active = doc.activeElement;\n    if (active?.tagName !== \"IFRAME\" && active?.tagName !=…" |  |
| `preview/GuestInput.ts:111` | "(() => {\n    const state = ({0} ??= { saved: null, presses: [] });\n    const active = document.activeElement;\n    let pressed = false;\n    t…" |  |
| `preview/GuestInput.ts:128` | "(() => {\n        const state = {0};\n        const index = state ? state.presses.indexOf({1}) : -1;\n        if (index < 0) return;\n        st…" |  |
| `preview/GuestInput.ts:206` | "(() => { const doc = {0}; for (const name of {1}) doc?.execCommand(name); return 0; })()" |  |
| `preview/Manager.ts:143` | "globalThis[{0}]?.({1}) === true" |  |
| `preview/Manager.ts:160` | "system-ui, sans-serif" | 字体栈 |
| `preview/Manager.ts:161` | "ui-monospace, monospace" | 字体栈 |
| `preview/PickPreload.ts:313` | "border:2px solid {0}" |  |
| `preview/PickPreload.ts:364` | "fixed z-1 max-w-70 overflow-hidden rounded-md bg-primary px-2 py-1 font-sans text-xs font-semibold text-primary-foreground shadow-md" | 样式类名 |
| `preview/PickPreload.ts:462` | "inline-flex h-7 cursor-pointer items-center justify-center rounded-md border border-transparent px-2 font-sans text-xs font-medium text-fore…" | 样式类名 |
| `preview/PickPreload.ts:469` | "h-7 min-w-0 w-full appearance-none rounded-md border border-input bg-background px-2 font-mono text-xs text-foreground shadow-xs outline-non…" | 样式类名 |
| `preview/PickPreload.ts:478` | "pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 font-mono text-xs text-muted-foreground" | 样式类名 |
| `preview/PickPreload.ts:502` | "grid gap-1 border-t border-border py-2" | 样式类名 |
| `preview/PickPreload.ts:562` | "fixed inset-0 font-sans text-foreground" | 样式类名 |
| `preview/PickPreload.ts:566` | "html[data-t3code-annotation-tool] body, html[data-t3code-annotation-tool] body * { cursor: crosshair !important; } [{0}], [{1}] * { cursor: …" |  |
| `preview/PickPreload.ts:586` | "pointer-events-auto fixed top-2.5 left-1/2 flex -translate-x-1/2 gap-0.5 rounded-lg border border-border bg-popover/95 p-1 text-popover-fore…" | 样式类名 |
| `preview/PickPreload.ts:598` | "flex items-start gap-2 p-2" | 样式类名 |
| `preview/PickPreload.ts:604` | " h-8 w-8 shrink-0 bg-muted p-0 text-muted-foreground hover:bg-accent hover:text-accent-foreground" | 样式类名 |
| `preview/PickPreload.ts:606` | "<svg viewBox=\"0 0 20 20\" width=\"15\" height=\"15\" aria-hidden=\"true\"><path d=\"M4 5h12M4 10h12M4 15h12M7 3v4M13 8v4M9 13v4\" fill=\"none\" stroke=…" |  |
| `preview/PickPreload.ts:614` | "min-h-8 max-h-24 min-w-0 flex-1 resize-none overflow-y-hidden border-0 border-b border-b-transparent bg-transparent px-0 py-1.5 font-sans te…" | 样式类名 |
| `preview/PickPreload.ts:628` | "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"r…" |  |
| `preview/PickPreload.ts:629` | " h-8 w-8 shrink-0 p-0 text-muted-foreground" | 样式类名 |
| `preview/PickPreload.ts:634` | "flex min-w-0 items-center justify-end gap-1 px-2 pb-2" | 样式类名 |
| `preview/PickPreload.ts:639` | "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path d=\"m18 6-12 12M6 6l12 12\" fill=\"none\" stroke=\"currentColor\" stroke-…" |  |
| `preview/PickPreload.ts:640` | " h-7 w-7 shrink-0 rounded-full p-0" | 样式类名 |
| `preview/PickPreload.ts:643` | " h-7 w-7 shrink-0 rounded-full border-primary bg-primary p-0 text-primary-foreground hover:bg-primary/90" | 样式类名 |
| `preview/PickPreload.ts:645` | " h-7 shrink-0 rounded-full px-2.5" | 样式类名 |
| `preview/PickPreload.ts:649` | "flex h-7 min-w-0 flex-1 items-center gap-2" | 样式类名 |
| `preview/PickPreload.ts:652` | "min-w-0 flex-1 truncate text-right text-sm text-muted-foreground" | 样式类名 |
| `preview/PickPreload.ts:655` | "flex h-5 min-w-0 flex-1 items-center justify-between gap-px overflow-hidden" | 样式类名 |
| `preview/PickPreload.ts:660` | "h-full w-0.5 shrink-0 origin-center rounded-full bg-primary" | 样式类名 |
| `preview/PickPreload.ts:667` | "shrink-0 text-xs tabular-nums text-muted-foreground" | 样式类名 |
| `preview/PickPreload.ts:678` | "px-2 pb-2 text-sm text-muted-foreground" | 样式类名 |
| `preview/PickPreload.ts:775` | "flex h-8 min-w-0 flex-1 items-center gap-2" | 样式类名 |
| `preview/PickPreload.ts:776` | "flex min-w-0 items-center gap-1" | 样式类名 |
| `preview/PickPreload.ts:817` | "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path d=\"m5 12 4 4L19 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"…" |  |
| `preview/PickPreload.ts:818` | "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path d=\"M12 2a10 10 0 1 0 10 10\" fill=\"none\" stroke=\"currentColor\" strok…" |  |
| `preview/PickPreload.ts:841` | "hidden h-8 w-6 shrink-0 cursor-grab select-none border-0 bg-transparent p-0 font-sans text-lg font-bold leading-5 text-muted-foreground" | 样式类名 |
| `preview/PickPreload.ts:852` | " h-8 shrink-0 border-primary bg-primary px-3 text-primary-foreground shadow-sm hover:bg-primary/90" | 样式类名 |
| `preview/PickPreload.ts:1063` | "min-w-0 w-full border-0 bg-transparent font-mono text-xs text-foreground outline-none" | 样式类名 |
| `preview/PickPreload.ts:1116` | "display:grid;grid-template-columns:82px minmax(0,1fr);gap:8px;align-items:center" | 内联样式 |
| `preview/PickPreload.ts:1118` | "grid gap-2 font-sans text-xs font-medium text-muted-foreground" | 样式类名 |
| `preview/PickPreload.ts:1130` | " bg-primary/10 text-primary" | 样式类名 |
| `preview/PickPreload.ts:1143` | "<svg viewBox=\"0 0 20 20\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M8 6.5 9.5 5A3.5 3.5 0 0 1 14.5 10l-1.5 1.5M12 13.5 10.5 15A3.5 …" |  |
| `preview/PickPreload.ts:1144` | "<svg viewBox=\"0 0 20 20\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"m6 6 8 8M8 6.5 9.5 5A3.5 3.5 0 0 1 14 9M12 13.5 10.5 15A3.5 3.5 …" |  |
| `preview/PickPreload.ts:1224` | "Draw a region or marquee-select elements (R)" |  |
| `preview/PickPreload.ts:1230` | " h-8 px-2.5 text-sm" | 样式类名 |
| `preview/RecordingCursor.ts:28` | "html, html * { cursor: none !important; } [data-t3code-recording-cursor]::backdrop, [data-t3code-recording-agent-cursor]::backdrop { display…" |  |
| `preview/RecordingCursor.ts:37` | "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"24\" viewBox=\"0 0 16 24\"><path d=\"M1 1v18l4-4 4 8 3-1.5-4-8H15Z\" fill=\"black\" stro…" |  |
| `preview/RecordingCursor.ts:44` | "position:fixed;left:0;top:0;width:20px;height:20px;pointer-events:none;z-index:2147483647;display:none;filter:drop-shadow(0 1px 2px #0003);t…" | 内联样式 |
| `preview/RecordingCursor.ts:46` | "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"var(--recording-cursor-background,white)\" stroke=\"v…" |  |
| `preview/RecordingCursor.ts:69` | "translate({0}px, {1}px)" |  |
| `preview/RecordingCursor.ts:137` | "translate({0}px, {1}px)" |  |
| `shell/DesktopShellEnvironment.ts:223` | "$ErrorActionPreference = 'Stop'" |  |
| `shell/DesktopShellEnvironment.ts:226` | "Write-Output '{0}'" |  |
| `shell/DesktopShellEnvironment.ts:227` | "$value = [Environment]::GetEnvironmentVariable('{0}')" |  |
| `shell/DesktopShellEnvironment.ts:228` | "if ($null -ne $value -and $value.Length -gt 0) { Write-Output $value }" |  |
| `shell/DesktopShellEnvironment.ts:229` | "Write-Output '{0}'" |  |
| `snapShot/ActiveWindow.ts:57` | "\nObjC.import(\"CoreGraphics\");\nObjC.import(\"AppKit\");\nfunction run() {\n  const app = $.NSWorkspace.sharedWorkspace.frontmostApplication;\n  if…" |  |
| `snapShot/HyprlandSnapShot.ts:25` | "hl.bind(\"CTRL + SHIFT + 2\", hl.dsp.global(\"{0}\"))" |  |
| `snapShot/HyprlandSnapShot.ts:26` | "bind = CTRL SHIFT, 2, global, {0}" |  |
| `snapShot/KdeSnapShot.ts:34` | "[Desktop Entry]" |  |
| `snapShot/KdeSnapShot.ts:36` | "Name=T3 Code SnapShots" |  |
| `snapShot/KdeSnapShot.ts:38` | "Exec={0} check" |  |
| `snapShot/MacModifierPairShortcutProcess.ts:15` | "\nObjC.import(\"AppKit\");\n$.NSApplication.sharedApplication.setActivationPolicy($.NSApplicationActivationPolicyProhibited);\nObjC.import(\"CoreG…" |  |
| `snapShot/NativeCaptureFeedback.ts:42` | "{\"command\":\"close\"}\n" | 子进程协议 |
| `snapShot/captureConfigEdit.ts:48` | "hl.bind(\"{0}\", hl.dsp.global(\"{1}\"))" |  |
| `snapShot/captureConfigEdit.ts:49` | "bind = {0}, {1}, global, {2}" |  |
| `snapShot/linuxCaptureSession.ts:44` | "Ctrl+Shift+2 repeat=false { spawn \"gdbus\" \"call\" \"--session\" \"--dest\" \"{0}.SnapShot\" \"--object-path\" \"{1}\" \"--method\" \"{2}.Capture\"; }" |  |
| `window/ContextMenuImage.ts:72` | "(async () => {\n          const source = Uint8Array.from(atob(\"{0}\"), char => char.charCodeAt(0));\n          const bitmap = await createImage…" |  |
| `wsl/DesktopWslEnvironment.ts:172` | "{0}\nensure_remote_node_path \|\| true\n" |  |
| `wsl/DesktopWslEnvironment.ts:267` | "set -eu" |  |
| `wsl/DesktopWslEnvironment.ts:271` | "runtime_entry_runs() {" |  |
| `wsl/DesktopWslEnvironment.ts:272` | "  [ -x \"$1/t3\" ] && \"$1/t3\" --version >/dev/null" |  |
| `wsl/DesktopWslEnvironment.ts:275` | "runtime_server_entry_digest() {" |  |
| `wsl/DesktopWslEnvironment.ts:276` | "  sha256sum \"$1/t3\" 2>/dev/null \| cut -d ' ' -f 1" |  |
| `wsl/DesktopWslEnvironment.ts:278` | "runtime_is_ready() {" |  |
| `wsl/DesktopWslEnvironment.ts:279` | "  [ -f \"$ready_marker\" ] &&" |  |
| `wsl/DesktopWslEnvironment.ts:280` | "    runtime_entry_runs \"$runtime_root\" 2>/dev/null &&" |  |
| `wsl/DesktopWslEnvironment.ts:281` | "    recorded_entry_digest=$(tr -d '[:space:]' < \"$ready_marker\" 2>/dev/null) &&" |  |
| `wsl/DesktopWslEnvironment.ts:282` | "    [ -n \"$recorded_entry_digest\" ] &&" |  |
| `wsl/DesktopWslEnvironment.ts:283` | "    [ \"$recorded_entry_digest\" = \"$(runtime_server_entry_digest \"$runtime_root\")\" ]" |  |
| `wsl/DesktopWslEnvironment.ts:285` | "mkdir -p \"$runtime_parent\"" |  |
| `wsl/DesktopWslEnvironment.ts:287` | "trap 'exit 1' HUP INT TERM" |  |
| `wsl/DesktopWslEnvironment.ts:288` | "exec 9> \"$runtime_lock\"" |  |
| `wsl/DesktopWslEnvironment.ts:290` | "if runtime_is_ready; then" |  |
| `wsl/DesktopWslEnvironment.ts:291` | "  touch \"$runtime_root/{0}\"" |  |
| `wsl/DesktopWslEnvironment.ts:292` | "  printf 'runtimeRoot:%s\\n' \"$runtime_root\"" |  |
| `wsl/DesktopWslEnvironment.ts:295` | "archive_sha=$(sha256sum {0} \| cut -d ' ' -f 1)" |  |
| `wsl/DesktopWslEnvironment.ts:296` | "if [ \"$archive_sha\" != {0} ]; then" |  |
| `wsl/DesktopWslEnvironment.ts:297` | "  printf 'WSL runtime archive does not match its recorded SHA-256 (expected %s, got %s)\\n' {0} \"$archive_sha\" >&2" |  |
| `wsl/DesktopWslEnvironment.ts:301` | "runtime_in_use() {" |  |
| `wsl/DesktopWslEnvironment.ts:303` | "  [ -d /proc/1 ] \|\| return 0" |  |
| `wsl/DesktopWslEnvironment.ts:304` | "  grep -qF -- \"$1/\" /proc/[0-9]*/cmdline 2>/dev/null" |  |
| `wsl/DesktopWslEnvironment.ts:306` | "if [ -e \"$runtime_root\" ]; then" |  |
| `wsl/DesktopWslEnvironment.ts:307` | "  if runtime_in_use \"$runtime_root\"; then" |  |
| `wsl/DesktopWslEnvironment.ts:308` | "    runtime_root_in_use=1" |  |
| `wsl/DesktopWslEnvironment.ts:310` | "    runtime_root_in_use=0" |  |
| `wsl/DesktopWslEnvironment.ts:312` | "  runtime_stale=$(mktemp -d \"$runtime_parent/.{0}.stale.XXXXXX\")" |  |
| `wsl/DesktopWslEnvironment.ts:313` | "  rmdir \"$runtime_stale\"" |  |
| `wsl/DesktopWslEnvironment.ts:314` | "  if mv -T \"$runtime_root\" \"$runtime_stale\" 2>/dev/null; then" |  |
| `wsl/DesktopWslEnvironment.ts:315` | "    if [ \"$runtime_root_in_use\" = 1 ]; then" |  |
| `wsl/DesktopWslEnvironment.ts:317` | "      touch \"$runtime_stale\"" |  |
| `wsl/DesktopWslEnvironment.ts:319` | "      rm -rf \"$runtime_stale\"" |  |
| `wsl/DesktopWslEnvironment.ts:323` | "runtime_tmp=$(mktemp -d \"$runtime_parent/.{0}.tmp.XXXXXX\")" |  |
| `wsl/DesktopWslEnvironment.ts:324` | "cleanup_runtime_install() { rm -rf \"$runtime_tmp\"; }" |  |
| `wsl/DesktopWslEnvironment.ts:325` | "trap cleanup_runtime_install EXIT" |  |
| `wsl/DesktopWslEnvironment.ts:326` | "tar -xzf {0} -C \"$runtime_tmp\" --strip-components=1" |  |
| `wsl/DesktopWslEnvironment.ts:327` | "if ! runtime_entry_runs \"$runtime_tmp\"; then" |  |
| `wsl/DesktopWslEnvironment.ts:328` | "  printf 'WSL runtime archive does not contain a working t3 executable\\n' >&2" |  |
| `wsl/DesktopWslEnvironment.ts:331` | "installed_entry_digest=$(runtime_server_entry_digest \"$runtime_tmp\")" |  |
| `wsl/DesktopWslEnvironment.ts:332` | "if [ -z \"$installed_entry_digest\" ]; then" |  |
| `wsl/DesktopWslEnvironment.ts:333` | "  printf 'Could not hash the WSL runtime server entry\\n' >&2" |  |
| `wsl/DesktopWslEnvironment.ts:336` | "printf '%s\\n' \"$installed_entry_digest\" > \"$runtime_tmp/{0}\"" |  |
| `wsl/DesktopWslEnvironment.ts:337` | "if mv -T \"$runtime_tmp\" \"$runtime_root\" 2>/dev/null; then" |  |
| `wsl/DesktopWslEnvironment.ts:339` | "elif runtime_is_ready; then" |  |
| `wsl/DesktopWslEnvironment.ts:340` | "  rm -rf \"$runtime_tmp\"" |  |
| `wsl/DesktopWslEnvironment.ts:342` | "  printf 'Could not promote WSL runtime cache at %s\\n' \"$runtime_root\" >&2" |  |
| `wsl/DesktopWslEnvironment.ts:345` | "touch \"$runtime_root/{0}\"" |  |
| `wsl/DesktopWslEnvironment.ts:346` | "printf 'runtimeRoot:%s\\n' \"$runtime_root\"" |  |
| `wsl/DesktopWslEnvironment.ts:356` | "set -eu" |  |
| `wsl/DesktopWslEnvironment.ts:359` | "[ -d \"$runtime_parent\" ] \|\| exit 0" |  |
| `wsl/DesktopWslEnvironment.ts:362` | "exec 8> \"$prune_lock\"" |  |
| `wsl/DesktopWslEnvironment.ts:365` | "[ -d /proc/1 ] \|\| exit 0" |  |
| `wsl/DesktopWslEnvironment.ts:366` | "runtime_in_use() {" |  |
| `wsl/DesktopWslEnvironment.ts:367` | "  grep -qF -- \"$1/\" /proc/[0-9]*/cmdline 2>/dev/null" |  |
| `wsl/DesktopWslEnvironment.ts:370` | "for candidate in \"$runtime_parent\"/sha256-*; do" |  |
| `wsl/DesktopWslEnvironment.ts:371` | "  [ -d \"$candidate\" ] \|\| continue" |  |
| `wsl/DesktopWslEnvironment.ts:372` | "  [ \"$candidate\" != \"$current_runtime\" ] \|\| continue" |  |
| `wsl/DesktopWslEnvironment.ts:373` | "  [ -f \"$candidate/{0}\" ] \|\| continue" |  |
| `wsl/DesktopWslEnvironment.ts:374` | "  if [ -z \"$previous_runtime\" ] \|\| [ \"$candidate\" -nt \"$previous_runtime\" ]; then" |  |
| `wsl/DesktopWslEnvironment.ts:375` | "    previous_runtime=\"$candidate\"" |  |
| `wsl/DesktopWslEnvironment.ts:378` | "for candidate in \"$runtime_parent\"/sha256-*; do" |  |
| `wsl/DesktopWslEnvironment.ts:379` | "  [ -d \"$candidate\" ] \|\| continue" |  |
| `wsl/DesktopWslEnvironment.ts:380` | "  [ \"$candidate\" != \"$current_runtime\" ] \|\| continue" |  |
| `wsl/DesktopWslEnvironment.ts:381` | "  [ \"$candidate\" != \"$previous_runtime\" ] \|\| continue" |  |
| `wsl/DesktopWslEnvironment.ts:382` | "  ! runtime_in_use \"$candidate\" \|\| continue" |  |
| `wsl/DesktopWslEnvironment.ts:383` | "  candidate_name=${candidate##*/}" |  |
| `wsl/DesktopWslEnvironment.ts:384` | "  candidate_lock=\"$runtime_parent/.${candidate_name}.install.lock\"" |  |
| `wsl/DesktopWslEnvironment.ts:385` | "  exec 9> \"$candidate_lock\"" |  |
| `wsl/DesktopWslEnvironment.ts:387` | "  selected_marker=\"$candidate/{0}\"" |  |
| `wsl/DesktopWslEnvironment.ts:388` | "  if [ -f \"$selected_marker\" ] && find \"$selected_marker\" -maxdepth 0 -mmin -{0} -print -quit \| grep -q .; then" |  |
| `wsl/DesktopWslEnvironment.ts:392` | "  rm -rf -- \"$candidate\"" |  |
| `wsl/DesktopWslEnvironment.ts:395` | "for scratch in \"$runtime_parent\"/.*.tmp.* \"$runtime_parent\"/.*.stale.*; do" |  |
| `wsl/DesktopWslEnvironment.ts:396` | "  [ -d \"$scratch\" ] \|\| continue" |  |
| `wsl/DesktopWslEnvironment.ts:397` | "  find \"$scratch\" -maxdepth 0 -mmin +{0} -print -quit \| grep -q . \|\| continue" |  |
| `wsl/DesktopWslEnvironment.ts:398` | "  rm -rf -- \"$scratch\"" |  |
| `wsl/DesktopWslEnvironment.ts:407` | "set -eu" |  |
| `wsl/DesktopWslEnvironment.ts:408` | "rm -f \"$HOME/.t3/wsl-runtime/{0}/{1}\"" |  |
| `wsl/DesktopWslEnvironment.ts:428` | "printf 'resolvedPath:%s\\n' \"$PATH\"" |  |
| `wsl/DesktopWslEnvironment.ts:432` | "printf 'nodePath:%s\\n' \"$(command -v node 2>/dev/null)\"\nprintf 'nodeVersion:%s\\n' \"$(node -p 'process.versions.node' 2>/dev/null)\"\n{0}\ncd {1…" |  |
| `wsl/DesktopWslEnvironment.ts:463` | "bash -lc {0} 2>/dev/null \|\| {1}" |  |
| `wsl/DesktopWslEnvironment.ts:464` | "{0} --version >/dev/null 2>&1" |  |
| `wsl/DesktopWslEnvironment.ts:468` | "for tool in node make g++ python3; do" |  |
| `wsl/DesktopWslEnvironment.ts:469` | "  command -v \"$tool\" >/dev/null 2>&1 \|\| echo \"missing:$tool\"" |  |
| `wsl/DesktopWslEnvironment.ts:471` | "if command -v node >/dev/null 2>&1; then" |  |
| `wsl/DesktopWslEnvironment.ts:472` | "  ver=\"$(node -p 'process.versions.node' 2>/dev/null)\"" |  |
| `wsl/DesktopWslEnvironment.ts:473` | "  if [ -n \"$ver\" ]; then printf \"nodeVersion:%s\\n\" \"$ver\"; fi" |  |
| `wsl/DesktopWslEnvironment.ts:481` | "pkg_dir=$(node -p \"require('node:path').dirname(require.resolve('node-pty/package.json'))\")" |  |
| `wsl/DesktopWslEnvironment.ts:482` | "cd \"$pkg_dir\"" |  |
| `wsl/DesktopWslEnvironment.ts:483` | "npx --yes node-gyp rebuild" |  |
| `wsl/DesktopWslEnvironment.ts:484` | "node -e 'require(\"node-pty\")'" |  |
| `wsl/DesktopWslEnvironment.ts:1009` | "printf \"%s\" \"$(getent passwd \"$(id -un)\" \| cut -d: -f6)\"" |  |

## D：数据：路径片段、应用 / 浏览器名、给 AI 或 MCP 的内容、协议载荷等（29）

| file:line | 文字 | 说明 |
|---|---|---|
| `app/DesktopEnvironment.ts:157` | "Application Support" | 路径片段 |
| `app/DesktopLegacyLocalStorage.ts:24` | "T3 Code (Alpha)" | 遗留 V1 userData 目录名 |
| `app/DesktopLegacyLocalStorage.ts:54` | "Local Storage" | Chromium 目录名 |
| `app/DesktopStartupRecovery.ts:236` | "T3 Code {0} ({1} {2}) could not start.\n{3}\n\n{4}" | 复制到剪贴板的启动失败诊断详情 |
| `app/DesktopUserData.ts:43` | "T3 Code (Dev)" | 遗留 userData 目录名 |
| `app/DesktopUserData.ts:44` | "T3 Code (Alpha)" | 遗留 userData 目录名 |
| `app/DesktopUserData.ts:60` | "Local State" | Chromium 文件名 |
| `app/DesktopUserData.ts:62` | "Local State" | Chromium 文件名 |
| `app/DesktopUserData.ts:65` | "Local State" | Chromium 文件名 |
| `preview/BrowserImport/BrowserImport.ts:310` | "Local State" | Chromium 文件名 |
| `preview/BrowserImport/Sources.ts:40` | "Application Support" | 路径片段 |
| `preview/BrowserImport/Sources.ts:86` | "Chrome Safe Storage" | 钥匙串服务名 |
| `preview/BrowserImport/Sources.ts:94` | "Microsoft Edge" | 浏览器名（产品名） |
| `preview/BrowserImport/Sources.ts:95` | "Microsoft Edge Safe Storage" | 钥匙串服务名 |
| `preview/BrowserImport/Sources.ts:96` | "Microsoft Edge" | 浏览器名（产品名） |
| `preview/BrowserImport/Sources.ts:97` | "Microsoft Edge" | 浏览器名（产品名） |
| `preview/BrowserImport/Sources.ts:104` | "Brave Safe Storage" | 钥匙串服务名 |
| `preview/BrowserImport/Sources.ts:113` | "Vivaldi Safe Storage" | 钥匙串服务名 |
| `preview/BrowserImport/Sources.ts:123` | "Opera Safe Storage" | 钥匙串服务名 |
| `preview/BrowserImport/Sources.ts:132` | "Arc Safe Storage" | 钥匙串服务名 |
| `preview/BrowserImport/Sources.ts:134` | "User Data" | 路径片段 |
| `preview/BrowserImport/Sources.ts:139` | "Helium Storage Key" | 钥匙串服务名 |
| `preview/BrowserImport/Sources.ts:143` | "User Data" | 路径片段 |
| `preview/BrowserImport/Sources.ts:479` | "Local State" | Chromium 文件名 |
| `preview/captureErrors.ts:29` | "Current display surface not available for capture" | 用于识别 Chromium 截图错误的比较常量 |
| `snapShot/snapShot.ts:523` | "Google Chrome" | 浏览器产品名 |
| `updates/releaseNotes.ts:88` | "whats changed" | 解析 release notes 用的小写标题标记 |
| `updates/releaseNotes.ts:150` | "new contributors" | 同上 |
| `updates/releaseNotes.ts:150` | "full changelog" | 同上 |
