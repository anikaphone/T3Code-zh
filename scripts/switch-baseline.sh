#!/usr/bin/env bash
# 升级基线脚本：将仓库的基线标识切到新 tag（补丁已重做验证之后运行）。
#
# 用法：scripts/switch-baseline.sh <新 tag>
#
# 改写（只改基线标识，不碰其他内容）：
#   - scripts/build-zh.sh 的 BASELINE_TAG / BASELINE_COMMIT
#   - .github/workflows/release.yml 的 UPSTREAM_TAG / UPSTREAM_COMMIT
#   - CONVENTIONS.md 的基线 tag / commit
#   - patches/*.patch、scripts/windows/patches/*.patch 开头 `#` 说明里的基线 tag / commit
#   - patches/README.md 里的基线 tag / commit
# 工作树：upstream/ 与 .build/src（若存在）切到新 commit。

set -Eeuo pipefail

NEW_TAG="${1:-}"
[[ -n "${NEW_TAG}" ]] || { echo "用法：scripts/switch-baseline.sh <新 tag>" >&2; exit 2; }

ZH_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ORIGIN_REPO="${T3ZH_UPSTREAM_REPO:-${ZH_ROOT}/upstream}"
OLD_COMMIT="$(sed -n 's/^BASELINE_COMMIT="\(.*\)"$/\1/p' "${ZH_ROOT}/scripts/build-zh.sh")"
OLD_TAG="$(sed -n 's/^BASELINE_TAG="\(.*\)"$/\1/p' "${ZH_ROOT}/scripts/build-zh.sh")"
NEW_COMMIT="$(git -C "${ORIGIN_REPO}" rev-parse "${NEW_TAG}^{commit}")"
log() { printf '[switch-baseline] %s\n' "$*"; }

[[ "${OLD_TAG}" != "${NEW_TAG}" ]] || { log "已经是 ${NEW_TAG}"; exit 0; }
[[ -n "${OLD_COMMIT}" && -n "${OLD_TAG}" ]] || { log "读不到当前基线（build-zh.sh）"; exit 1; }
[[ -z "$(git -C "${ZH_ROOT}/upstream" status --porcelain)" ]] || { log "upstream/ 有改动，停下"; exit 1; }

replace_in_comments() {
  perl -i -pe "if (/^#/) { s/\Q${OLD_TAG}\E/${NEW_TAG}/g; s/\Q${OLD_COMMIT}\E/${NEW_COMMIT}/g; }" "$1"
}

log "${OLD_TAG}（${OLD_COMMIT}）→ ${NEW_TAG}（${NEW_COMMIT}）"
perl -i -pe "s/^BASELINE_TAG=\"\Q${OLD_TAG}\E\"/BASELINE_TAG=\"${NEW_TAG}\"/; s/^BASELINE_COMMIT=\"\Q${OLD_COMMIT}\E\"/BASELINE_COMMIT=\"${NEW_COMMIT}\"/" "${ZH_ROOT}/scripts/build-zh.sh"
perl -i -pe "s/UPSTREAM_TAG: '\Q${OLD_TAG}\E'/UPSTREAM_TAG: '${NEW_TAG}'/; s/UPSTREAM_COMMIT: '\Q${OLD_COMMIT}\E'/UPSTREAM_COMMIT: '${NEW_COMMIT}'/" "${ZH_ROOT}/.github/workflows/release.yml"
perl -i -pe "s/^- 基线 tag：\`\Q${OLD_TAG}\E\`/- 基线 tag：\`${NEW_TAG}\`/; s/^- 基线 commit：\`\Q${OLD_COMMIT}\E\`/- 基线 commit：\`${NEW_COMMIT}\`/" "${ZH_ROOT}/CONVENTIONS.md"
for patch in "${ZH_ROOT}"/patches/*.patch "${ZH_ROOT}"/scripts/windows/patches/*.patch; do
  [[ -f "${patch}" ]] && replace_in_comments "${patch}"
done
perl -i -pe "s/\Q${OLD_TAG}\E/${NEW_TAG}/g; s/\Q${OLD_COMMIT}\E/${NEW_COMMIT}/g" "${ZH_ROOT}/patches/README.md"

grep -q "^BASELINE_TAG=\"${NEW_TAG}\"" "${ZH_ROOT}/scripts/build-zh.sh" || { log "build-zh.sh BASELINE_TAG 没改到"; exit 1; }
grep -q "^BASELINE_COMMIT=\"${NEW_COMMIT}\"" "${ZH_ROOT}/scripts/build-zh.sh" || { log "build-zh.sh BASELINE_COMMIT 没改到"; exit 1; }
grep -q "UPSTREAM_COMMIT: '${NEW_COMMIT}'" "${ZH_ROOT}/.github/workflows/release.yml" || { log "release.yml 没改到"; exit 1; }

log "upstream/ → ${NEW_COMMIT}"
git -C "${ZH_ROOT}/upstream" checkout --quiet --detach "${NEW_COMMIT}"
if [[ -d "${ZH_ROOT}/.build/src/.git" || -f "${ZH_ROOT}/.build/src/.git" ]]; then
  log ".build/src → ${NEW_COMMIT}（先还原，保留 node_modules）"
  git -C "${ZH_ROOT}/.build/src" reset --hard --quiet
  git -C "${ZH_ROOT}/.build/src" clean -fdx -e node_modules --quiet
  git -C "${ZH_ROOT}/.build/src" checkout --quiet --detach "${NEW_COMMIT}"
fi

[[ -z "$(git -C "${ZH_ROOT}/upstream" status --porcelain)" ]] || { log "upstream/ 切换后不干净"; exit 1; }
log "完成。接着：同步 scripts/windows/windows-ci.test.ts、package.json 与 README.md 的版本号，跑 npm test"
