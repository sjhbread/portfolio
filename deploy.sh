#!/usr/bin/env bash
# 빌드 결과물(dist)을 gh-pages 브랜치로 올려 GitHub Pages 에 배포한다.
# 사용법:  ./deploy.sh
set -euo pipefail

BASE="${BASE:-/portfolio/}"   # GitHub Pages 하위 경로

echo "▶ 빌드 (BASE=$BASE)"
BASE="$BASE" npm run build

echo "▶ gh-pages 브랜치로 업로드"
rm -rf .deploy
cp -R dist .deploy
# Jekyll 처리를 끄지 않으면 _ 로 시작하는 파일이 무시된다.
touch .deploy/.nojekyll

cd .deploy
git init -q -b gh-pages
git add -A
git -c user.email="$(git -C .. config user.email)" \
    -c user.name="$(git -C .. config user.name)" \
    commit -q -m "deploy $(date +%Y-%m-%d\ %H:%M)"
git push -q --force "$(git -C .. remote get-url origin)" gh-pages
cd ..
rm -rf .deploy

echo "✅ 배포 완료"
