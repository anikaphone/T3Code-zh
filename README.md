# T3 Code 中文增强打包版 (t3code-zh)

<p align="center">
  <b>基于 T3 Code 官方正式版的非官方补丁增强与跨平台打包工程</b><br>
  基于上游原生简体中文，叠加默认零遥测、Antigravity 多问题修复与桌面端中文打包优化
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Upstream%20Baseline-v0.1.11-green.svg" alt="Baseline">
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20macOS-orange.svg" alt="Platform">
</p>

---

> [!NOTE]
> 本项目为**非官方**衍生构建项目，与 T3 Tools Inc. 无关。  
> 当前基线基于 [T3 Code](https://github.com/pingdotgg/t3code) 官方正式版 `v0.1.11`（对应交付版 `0.1.11-zh.1`）。上游自 `v0.1.11` 起已原生支持完整的简体中文 Web 界面与桌面菜单，本项目已移除外挂汉化插件与词库，精简为轻量补丁集 + 跨平台自动化构建流水线。

---

## ✨ 保留与增强特性

- 🔒 **默认关闭遥测（隐私保护）**（`0025-disable-telemetry.patch`）：默认禁用 PostHog 上报（`ingest.t3.codes`）、本机账号归属探测、浏览器设备 ID 持久化以及中继 OTEL 链路追踪。
- 🧩 **Antigravity 多问题表单修复**（`0026-antigravity-multi-question.patch`）：修复 Antigravity（`agy`）单次 `ask_question` 提 ≥ 2 个问题时因 `qN` / `qN_other` 未配对折叠导致第 2 步起不显示选项的缺陷。
- 🍎 **macOS 系统菜单中文声明**（`0005-desktop-zh-hans-localization.patch`）：在 `Info.plist` 中声明 `CFBundleLocalizations: ["en", "zh-Hans"]`，让 AppKit 自动插入的系统级菜单项跟随中文系统显示中文。
- 🪟 **Windows 中文安装器与 Chromium 中文资源**（`scripts/windows/patches/0001-windows-zh-packaging.patch`）：提供简体中文 NSIS 安装向导（支持自定义安装目录）并附带 `locales/zh-CN.pak`。
- 📜 **合规附带上游 MIT 许可证**（`0019-bundle-t3-code-license.patch`）：在桌面端安装包资源目录内自动附带与基线一致的 `T3-Code-LICENSE.txt`。

---

## 📦 下载与安装

请前往项目的 **[Releases](../../releases/latest)** 页面下载对应系统的最新安装包：

| 系统平台 | 安装包文件名 | 说明 |
| :--- | :--- | :--- |
| **Windows 64位** (Intel / AMD x64) | `T3-Code-<版本>-x64.exe` | NSIS 简体中文独立安装程序（支持自选路径） |
| **macOS Apple Silicon** (M系列芯片) | `T3-Code-<版本>-arm64.dmg` | 拖拽即用的 DMG 镜像包 |

安装包 SHA-256 校验和可在 Release 附件中的 `SHA256SUMS.txt` 查看。**安装前请先退出正在运行的 T3 Code 实例。**

### Windows 安装注意事项
1. 运行 `.exe` 安装程序，可自定义安装目录。
2. 安装包未购买商业开发者代码签名，若触发 Windows Defender SmartScreen 拦截，点击 **「更多信息」→「仍要运行」** 即可。

### macOS 安装注意事项
1. 双击打开 `.dmg`，将 `T3 Code (Beta)` 拖入「应用程序（Applications）」目录。
2. 首次启动若提示“无法验证开发者”（由于未做 Apple 商业公证）：
   - 点击提示框的「完成」。
   - 打开 **「系统设置」→「隐私与安全性」**，滑到最下方点击 **「仍要打开」**。
3. 若系统提示“应用已损坏，无法打开”，在终端执行：
   ```bash
   xattr -dr com.apple.quarantine "/Applications/T3 Code (Beta).app"
   ```

> [!WARNING]
> - 本安装包会替换原有的 T3 Code (Beta)，并关闭了上游自动更新，后续版本请关注 Releases 更新。
> - 请避免与官方原版同时启动运行，两者共用用户数据目录 `~/.t3/userdata`。

---

## 🏗️ 仓库结构

```
t3code-zh/
├── upstream/             # 上游官方源码（只读基线，Git 忽略）
├── patches/              # 4 个跨平台共享补丁（0005 / 0019 / 0025 / 0026）
├── scripts/
│   ├── build-zh.sh       # macOS 一键构建脚本（含构建链与产物守卫）
│   ├── build-zh-win.ps1  # Windows 本地构建脚本
│   ├── windows/          # Windows CI 准备、打包、仅 Windows 补丁与测试
│   └── lib/              # 构建链、T3 Connect 公开配置与发布合规校验
├── .github/workflows/    # Windows + macOS 多平台自动编译与 Release 流水线
└── docs/                 # 构建、升级与缺陷复核文档
```

---

## 🛠️ 本地校验与构建

### 1. 基础环境要求
- **Node.js**：`>= 24.0.0`
- **pnpm** / npm / **Git**
- 桌面端打包还需 Rust 工具链（编译 `t3-resource-monitor`）；macOS 打包需 Xcode Command Line Tools 与 [Vite+](https://vite.plus)。

### 2. 安装依赖并运行校验测试
```bash
npm ci
npm test
```

### 3. 本地打包
- **Windows**（PowerShell）：
  ```powershell
  npm run build:win
  ```
- **macOS**（Bash / Zsh）：
  ```bash
  bash scripts/build-zh.sh 0.1.11-zh.1
  ```
- **GitHub Actions 自动发版**：推送 `v*` tag（如 `v0.1.11-zh.1`）或在 Actions 页面手动触发 `Release Multi-Platform`。

---

## 📄 开源许可

本仓库脚本与补丁代码基于 [MIT License](LICENSE) 开源；上游 T3 Code 版权归 T3 Tools Inc. 所有（详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)）。
