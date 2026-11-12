# T3 Code 简体中文版 (t3code-zh)

<p align="center">
  <b>T3 Code 桌面端非官方简体中文本地化与跨平台打包工程</b><br>
  原生支持在「设置 → 常规 → 语言」中自由切换中文与英文
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Upstream%20Baseline-v0.1.9-green.svg" alt="Baseline">
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20macOS-orange.svg" alt="Platform">
</p>

---

> [!NOTE]
> 本项目为**非官方**衍生构建项目，与 T3 Tools Inc. 无关。  
> 汉化基线基于 [T3 Code](https://github.com/pingdotgg/t3code) **官方正式版**（当前基线为 `v0.1.9`，对应汉化版 `0.1.9-zh.1`）。仅跟进官方正式 Release，保证使用稳定性。

---

## ✨ 核心特性

- 🌐 **原生中英双语切换**：无缝集成至客户端「设置 → 常规 → 语言（Language）」，切换即时生效。
- 🔒 **默认关闭遥测（隐私保护）**：默认彻底禁用产品使用数据统计（Telemetry）、设备行为追踪以及中继链路追踪（Relay Tracing），守护代码资产与开发隐私。
- ⚡ **非侵入式编译流水线**：不直接篡改上游源码，通过构建期 Vite AST 插件与运行时查表机制注入翻译，方便快速随官方版本升级。
- 🖥️ **跨平台支持**：提供预编译的 **Windows (x64)** 与 **macOS (Apple Silicon)** 独立安装包。
- 🛡️ **严格的词库质量守卫**：配套自动化词库提取、语法与占位符校验、覆盖率分析与回归测试工具链。

---

## 📦 下载与安装

请前往项目的 **[Releases](../../releases/latest)** 页面下载对应系统的最新安装包：

| 系统平台 | 安装包文件名 | 说明 |
| :--- | :--- | :--- |
| **Windows 64位** (Intel / AMD x64) | `T3-Code-<版本>-x64.exe` | NSIS 标准独立安装程序 |
| **macOS Apple Silicon** (M系列芯片) | `T3-Code-<版本>-arm64.dmg` | 拖拽即用的 DMG 镜像包 |

安装包 SHA-256 校验和可在 Release 附件中的 `SHA256SUMS.txt` 查看。**安装前请先退出正在运行的 T3 Code 实例。**

### Windows 安装注意事项
1. 运行 `.exe` 安装程序进行安装。
2. 安装包未购买商业开发者代码签名，若触发系统 Windows Defender SmartScreen 拦截，点击 **「更多信息」→「仍要运行」** 即可。

### macOS 安装注意事项
1. 双击打开 `.dmg`，将 `T3 Code (Beta)` 拖入「应用程序（Applications）」目录。
2. 首次启动若提示“无法验证开发者”（由于未做 Apple 商业公证）：
   - 点击提示框的「完成」。
   - 打开 **「系统设置」→「隐私与安全性」**，滑到页面最下方点击 **「仍要打开」**。
3. 若系统提示“应用已损坏，无法打开”，在终端执行以下命令解除隔离属性：
   ```bash
   xattr -dr com.apple.quarantine "/Applications/T3 Code (Beta).app"
   ```

> [!WARNING]
> - 本安装包会替换原有的 T3 Code (Beta)，并关闭了上游自动更新，后续版本请关注 Releases 更新。
> - 请避免与官方英文原版同时启动运行，两者会共用用户数据目录 `~/.t3/userdata`。

---

## 🏗️ 架构与实现原理

本项目不采用侵入式的 Fork 魔改方式，而是采用**下游构建补丁与流水线**架构：

```
t3code-zh/
├── upstream/             # 上游官方源码（只读基线，Git 忽略）
├── dict/                 # 汉化词库（zh-CN.json 等，独立版本控制）
├── plugin/               # 构建期 Vite AST 转换插件（拦截 UI 文本并包装查表函数）
├── runtime/              # 运行时查表与语言切换逻辑注入
├── patches/              # 针对上游主进程 IPC / 桌面菜单等极少数源码的补丁
├── scripts/              # 词库提取、语法校验、CI 与多平台打包脚本
└── docs/                 # 构建手册与升级跟进指引
```

1. **AST 静态编译拦截**：在打包过程中，[`plugin/vite-plugin-t3zh.ts`](plugin/vite-plugin-t3zh.ts) 解析前端组件的语法树，将界面英文字符串自动替换为运行时查表调用 `t("...")`。
2. **独立词库驱动**：词条维护在 [`dict/zh-CN.json`](dict/zh-CN.json)，支持静态文案以及带动态插值参数的模板词条。
3. **补丁有序注入**：对于主进程、IPC 通信以及**默认禁用遥测追踪（`patches/0025-disable-telemetry.patch`）**等底层能力，按编号维护在 [`patches/`](patches/) 目录中，在打包构建时自动应用。

---

## 🛠️ 本地开发与构建

### 1. 基础环境要求
- **Node.js**：`>= 24.0.0`
- **pnpm** / npm
- **Git**
- *(macOS 打包需额外配备)*：Xcode Command Line Tools、Rust 工具链、[Vite+](https://vite.plus)

### 2. 初始化项目依赖
```bash
git clone <本仓库地址> t3code-zh
cd t3code-zh
npm install
```

### 3. 常用开发与校验命令
```bash
# 词库校验与合规性检查（必跑）
npm run check-dict

# 运行插件单测
npm run test:plugin

# 生成词库覆盖率与未翻译报告
npm run report
```

### 4. 平台打包

- **Windows 本地构建**（PowerShell）：
  ```powershell
  npm run build:win
  ```
  产物将输出在 `release/<版本号>/` 目录下。

- **macOS 本地构建**（Bash / Zsh）：
  ```bash
  ./scripts/build-zh.sh 0.1.9-zh.1
  ```

---

## 🚀 CI/CD 云端构建（推荐）

通过 **GitHub Actions** 矩阵构建，可在新版本发布（推送 Release Tag）时自动启动云端 Windows 与 macOS 虚拟机完成全平台打包，并自动发布至 Releases。

若您需要在企业内网、Gitee 或自建 Gitea 中使用：
1. **GitHub 作为主开发与构建平台**：利用免费的 GitHub Actions 完成跨平台打包与 Release 托管。
2. **Gitee / Gitea 作为备份与国内镜像**：通过仓库的「镜像同步（Mirror）」功能单向自动同步代码。

---

## 📋 已知限制

少量文字保持英文，主要包括：
- 第三方身份认证弹层（由 Clerk 托管下发）
- 部分服务端动态返回的错误提示与底层系统权限弹窗

详细清单参见 [docs/KNOWN-LIMITATIONS.md](docs/KNOWN-LIMITATIONS.md)。

---

## 📜 许可证与鸣谢

- 本仓库遵循 [MIT 许可证](LICENSE)。
- 词库初始参考源自 [ZhiweiXiao98/t3code](https://github.com/ZhiweiXiao98/t3code)，感谢原作者的探索。
- 上游 T3 Code 许可证与第三方声明请参见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
