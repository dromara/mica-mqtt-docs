#!/usr/bin/env bash
#
# mica-mqtt-docs 部署脚本
#
# 用法：sh deploy.sh [SSH_HOST]
#   SSH_HOST 默认 tx（依赖 ~/.ssh/config 中已配置 ssh 别名）
#
# 约定：
#   - 服务器侧 ssh 别名: tx
#   - nginx 站点根目录指向: /data/nginx/mqtt_docs/dist

set -euo pipefail
cd "$(dirname "$0")"

SSH_HOST="${1:-tx}"
REMOTE_DIR="/data/nginx/mqtt_docs"
DIST_DIR="src/.vuepress/dist"

node -v && pnpm -v
pnpm install --frozen-lockfile
pnpm build

[ -d "$DIST_DIR" ] || { echo "✗ $DIST_DIR 不存在，构建失败" >&2; exit 1; }

cd "$DIST_DIR"
zip -qr ../dist.zip .
cd -

scp dist.zip "$SSH_HOST:$REMOTE_DIR/dist.zip"
ssh "$SSH_HOST" "cd $REMOTE_DIR && rm -rf dist && unzip -oq dist.zip && rm -f dist.zip"

echo "✓ 发布完成 -> $SSH_HOST:$REMOTE_DIR/dist"
