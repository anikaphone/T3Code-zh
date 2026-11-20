#!/usr/bin/env bash
# 升级第 1 步：一条命令摸清上游新版本对补丁与构建链的影响（只读，不改仓库已跟踪的文件）。
#
# 用法：scripts/upgrade-check.sh <新 tag>        例：scripts/upgrade-check.sh v0.1.12
#
# 做的事：
#   1. 上游克隆（$T3ZH_UPSTREAM_REPO，默认 <仓库>/upstream）fetch 新 tag，建 / 更新工作树 .build/next
#   2. 上游改动规模：提交数、各目录改动文件数（不含测试）
#   3. 补丁试打：新 tag 源码的临时副本里按编号顺序 git apply（共享 patches/ + Windows 补丁）
#   4. 构建链守卫：build-zh.sh 第 6 步的预期值逐项对新源码核对；pnpm-lock.yaml 是否变化
#   5. 汇总写到 .build/upgrade-<新 tag>.md（不污染仓库已跟踪文件）

set -uo pipefail

NEW_TAG="${1:-}"
[[ -n "${NEW_TAG}" ]] || { echo "用法：scripts/upgrade-check.sh <新 tag>" >&2; exit 2; }

ZH_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ORIGIN_REPO="${T3ZH_UPSTREAM_REPO:-${ZH_ROOT}/upstream}"
NEXT="${ZH_ROOT}/.build/next"
OLD_COMMIT="$(sed -n 's/^BASELINE_COMMIT="\(.*\)"$/\1/p' "${ZH_ROOT}/scripts/build-zh.sh")"
OLD_TAG="$(sed -n 's/^BASELINE_TAG="\(.*\)"$/\1/p' "${ZH_ROOT}/scripts/build-zh.sh")"
SCRATCH="$(mktemp -d "/tmp/t3zh-upgrade-check.XXXXXX")"
OUT="${ZH_ROOT}/.build/upgrade-${NEW_TAG}.md"
mkdir -p "${ZH_ROOT}/.build"

unset ELECTRON_RUN_AS_NODE
log() { printf '[upgrade-check] %s\n' "$*" >&2; }
md() { printf '%s\n' "$*" >>"${OUT}"; }
: >"${OUT}"

log "1/4 获取 ${NEW_TAG}"
git -C "${ORIGIN_REPO}" fetch origin tag "${NEW_TAG}" --no-tags >&2 || { log "fetch 失败"; exit 1; }
NEW_COMMIT="$(git -C "${ORIGIN_REPO}" rev-parse "${NEW_TAG}^{commit}")"
if [[ -e "${NEXT}" ]]; then
  if [[ "$(git -C "${NEXT}" rev-parse HEAD 2>/dev/null)" != "${NEW_COMMIT}" ]]; then
    [[ -z "$(git -C "${NEXT}" status --porcelain)" ]] || { log ".build/next 有改动，先处理掉再跑"; exit 1; }
    git -C "${NEXT}" checkout --quiet --detach "${NEW_COMMIT}"
  fi
else
  git -C "${ORIGIN_REPO}" worktree add --no-checkout --detach "${NEXT}" "${NEW_COMMIT}" >&2
  git -C "${NEXT}" sparse-checkout set --no-cone '/*' '!/.repos/'
  git -C "${NEXT}" checkout --quiet --detach "${NEW_COMMIT}"
fi

md "# 升级体检：${OLD_TAG} → ${NEW_TAG}"
md ""
md "- 当前基线：\`${OLD_TAG}\`（\`${OLD_COMMIT}\`）"
md "- 新 tag：\`${NEW_TAG}\`（\`${NEW_COMMIT}\`），源码在 \`.build/next\`"
md ""

log "2/4 上游改动规模"
md "## 1. 上游改动规模"
md ""
md "- 提交数：$(git -C "${NEXT}" rev-list --count "${OLD_COMMIT}..${NEW_COMMIT}")"
md ""
md "| 目录 | 改动文件（不含测试） |"
md "|---|---:|"
for dir in apps/web/src apps/desktop/src apps/server/src packages scripts; do
  count="$(git -C "${NEXT}" diff --name-only "${OLD_COMMIT}" "${NEW_COMMIT}" -- "${dir}" | grep -cvE '\.test\.|__tests__|\.spec\.')"
  md "| \`${dir}\` | ${count} |"
done
md ""

log "3/4 补丁试打"
md "## 2. 补丁试打（新源码副本，按编号顺序）"
md ""
git -C "${NEXT}" archive "${NEW_COMMIT}" -- . ':!.repos' | tar -x -C "${SCRATCH}"
git -C "${SCRATCH}" init --quiet
PATCH_FAILED=0
apply_dir() {
  local dir="$1"
  [[ -d "${dir}" ]] || return 0
  while IFS= read -r patch; do
    local name
    name="$(basename "${patch}")"
    if git -C "${SCRATCH}" apply "${patch}" 2>/dev/null; then
      md "- ✅ \`${name}\`"
    else
      PATCH_FAILED=1
      md "- ❌ \`${name}\`：打不上的文件 ——"
      while IFS= read -r file; do
        git -C "${SCRATCH}" apply --check --include="${file}" "${patch}" 2>/dev/null || md "  - \`${file}\`"
      done < <(git apply --numstat "${patch}" | awk -F'\t' '{print $3}')
    fi
  done < <(find "${dir}" -maxdepth 1 -type f -name '*.patch' | LC_ALL=C sort)
}
apply_dir "${ZH_ROOT}/patches"
apply_dir "${ZH_ROOT}/scripts/windows/patches"
md ""

log "4/4 构建链守卫"
md "## 3. 构建链守卫（build-zh.sh 第 6 步的预期值）"
md ""
chain() {
  local file="$1" query="$2" var="$3" expected actual
  expected="$(sed -n "s/^${var}='\(.*\)'$/\1/p" "${ZH_ROOT}/scripts/build-zh.sh")"
  actual="$(node "${ZH_ROOT}/scripts/lib/build-chain.ts" "${NEXT}/${file}" "${query}" 2>&1)"
  if [[ "${actual}" == "${expected}" ]]; then md "- ✅ \`${file}\` ${query}"; else md "- ❌ \`${file}\` ${query}：预期 \`${expected}\`，实际 \`${actual}\`"; fi
}
chain apps/server/vite.config.ts run.tasks.build.command EXPECTED_SERVER_BUILD_COMMAND
chain apps/server/vite.config.ts run.tasks.build.dependsOn EXPECTED_SERVER_BUILD_DEPENDS_ON
chain apps/desktop/vite.config.ts run.tasks.build.command EXPECTED_DESKTOP_BUILD_COMMAND
chain apps/desktop/vite.config.ts run.tasks.build.dependsOn EXPECTED_DESKTOP_BUILD_DEPENDS_ON
chain apps/web/package.json scripts.build EXPECTED_WEB_BUILD_SCRIPT
chain package.json scripts.build:desktop EXPECTED_ROOT_BUILD_DESKTOP_SCRIPT
if git -C "${NEXT}" diff --quiet "${OLD_COMMIT}" "${NEW_COMMIT}" -- pnpm-lock.yaml; then
  md "- pnpm-lock.yaml 未变"
else
  md "- pnpm-lock.yaml 变了：首次构建第 3 步会重新安装依赖（需要网络）"
fi
md ""
md "## 下一步"
md ""
md "1. 复核 \`0026-antigravity-multi-question.patch\` 对应缺陷上游是否已修复（见 \`docs/ANTIGRAVITY-ASK-QUESTION-FIX.md\`）"
md "2. 重做上面 ❌ 的补丁（见 \`patches/README.md\`）"
md "3. 切换基线：\`scripts/switch-baseline.sh ${NEW_TAG}\`，更新版本号并跑 \`npm test\`"
md "4. 触发发布构建或本地打包验证"

rm -rf "${SCRATCH}"
log "汇总：${OUT}"
[[ "${PATCH_FAILED}" == 0 ]] || log "有补丁打不上，见汇总第 2 节"
