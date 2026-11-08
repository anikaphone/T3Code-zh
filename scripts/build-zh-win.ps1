param(
  [Parameter(Mandatory = $false, Position = 0)]
  [string]$Version = "0.1.7-zh.1",
  [Parameter(Mandatory = $false)]
  [string]$WslRuntime = "",
  [Parameter(Mandatory = $false)]
  [switch]$PrepareOnly
)

$ErrorActionPreference = "Stop"
$ZhRoot = Split-Path -Parent $PSScriptRoot
$Src = Join-Path $ZhRoot ".build/src"
$ReleaseDir = Join-Path $ZhRoot "release/$Version"
$EvidenceDir = Join-Path $ZhRoot "release/$Version-evidence"
$StageTemp = Join-Path ([System.IO.Path]::GetTempPath()) "t3zh-stage-temp-$Version"

Write-Host "[build-zh-win] 1. 重置并核对 .build/src 基线源码树..."
git -C $Src -c core.autocrlf=false reset --hard HEAD
git -C $Src -c core.autocrlf=false clean -fd -e node_modules -e native/resource-monitor/target

Write-Host "[build-zh-win] 2. 应用共享补丁与 Windows 打包补丁，注入汉化与 T3 Connect 配置..."
node (Join-Path $ZhRoot "scripts/windows/prepare-source.ts") prepare `
  --src $Src `
  --version $Version `
  --platform win `
  --evidence (Join-Path $EvidenceDir "prepare.json")
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

if ($PrepareOnly) {
  node (Join-Path $ZhRoot "scripts/windows/prepare-source.ts") verify-tree `
    --src $Src --version $Version --platform win
  exit $LASTEXITCODE
}

$SrcBin = Join-Path $Src "node_modules\.bin"
if (Test-Path $SrcBin) {
  $env:PATH = "$SrcBin;$env:PATH"
}

Write-Host "[build-zh-win] 3. 安装上游工作区依赖 (vp / corepack pnpm install --frozen-lockfile)..."
Push-Location $Src
try {
  $installArgs = @(
    "install",
    "--frozen-lockfile",
    "--filter=.",
    "--filter=t3...",
    "--filter=@t3tools/web...",
    "--filter=@t3tools/desktop...",
    "--filter=@t3tools/scripts..."
  )
  if (Get-Command vp -ErrorAction SilentlyContinue) {
    vp @installArgs
  } else {
    corepack pnpm @installArgs
  }
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
} finally {
  Pop-Location
}
if (Test-Path $SrcBin) {
  $env:PATH = "$SrcBin;$env:PATH"
}

Write-Host "[build-zh-win] 4. 构建中文 JS bundle (web + server + desktop)..."
node (Join-Path $ZhRoot "scripts/windows/build-bundle.ts") `
  --src $Src `
  --version $Version `
  --evidence (Join-Path $EvidenceDir "build-bundle.json")
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "[build-zh-win] 5. 打包并校验 Windows x64 NSIS 安装程序..."
$pkgArgs = @(
  (Join-Path $ZhRoot "scripts/windows/package-windows.ts"),
  "--src", $Src,
  "--version", $Version,
  "--out", $ReleaseDir,
  "--evidence", $EvidenceDir,
  "--stage-temp", $StageTemp
)
if ($WslRuntime -ne "") {
  $pkgArgs += @("--wsl-runtime", $WslRuntime)
} else {
  $pkgArgs += "--allow-no-wsl-runtime"
}
node @pkgArgs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "[build-zh-win] 6. 校验工作树改动守卫..."
node (Join-Path $ZhRoot "scripts/windows/prepare-source.ts") verify-tree `
  --src $Src `
  --version $Version `
  --platform win
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "[build-zh-win] 构建完成！产物目录：$ReleaseDir"
