#!/usr/bin/env bash
#
# mica-mqtt-docs 部署脚本
#
# 用法：
#   sh deploy.sh [SSH_HOST]
#   SSH_HOST 默认 tx（依赖 ~/.ssh/config 中已配置 ssh 别名）
#
# 行为：
#   1. 在脚本所在目录安装依赖、构建文档
#   2. 校验产物 src/.vuepress/dist.zip 是否存在
#   3. 原子发布：上传到服务器 → 清空站点目录 → 解压
#
# 约定：
#   - 服务器侧 ssh 别名: tx
#   - nginx 站点根目录: /data/nginx/mqtt_docs
#   - 解压后 zip 内顶层文件直接铺平到站点目录，无需下钻

set -euo pipefail

cd "$(dirname "$0")"

SSH_HOST="${1:-tx}"
REMOTE_DIR="/data/nginx/mqtt_docs"

echo "==> Node / pnpm 版本"
node -v
pnpm -v

echo "==> 安装依赖"
pnpm install --frozen-lockfile

echo "==> 构建文档"
pnpm build

DIST_ZIP="src/.vuepress/dist.zip"
if [ ! -f "$DIST_ZIP" ]; then
  echo "✗ 产物 $DIST_ZIP 不存在，构建可能失败。" >&2
  exit 1
fi
echo "==> 产物信息"
ls -lh "$DIST_ZIP"

echo "==> 上传到 $SSH_HOST:$REMOTE_DIR"
ssh "$SSH_HOST" "mkdir -p '$REMOTE_DIR'"
scp "$DIST_ZIP" "$SSH_HOST:$REMOTE_DIR/dist.zip"

echo "==> 解压发布到 $REMOTE_DIR"
ssh "$SSH_HOST" "
  set -e
  cd '$REMOTE_DIR'
  # 清空旧产物（保留目录本身），然后解压新的 zip
  find . -mindepth 1 -delete
  unzip -oq dist.zip
  rm -f dist.zip
"

echo "✓ 发布完成 -> $SSH_HOST:$REMOTE_DIR"
