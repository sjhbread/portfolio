#!/usr/bin/env bash
# Vercel 프로덕션 배포.
# 사용법:  ./deploy.sh
set -euo pipefail

echo "▶ 커밋 안 된 변경 확인"
if [[ -n "$(git status --porcelain)" ]]; then
  echo "⚠️  커밋되지 않은 변경이 있다. 배포는 로컬 파일 기준으로 나간다."
  git status --short
  echo
fi

echo "▶ Vercel 프로덕션 배포"
npx --yes vercel@latest --prod --yes

echo
echo "✅ 배포 완료"
echo "   https://sjhbread-vibe.vercel.app"
