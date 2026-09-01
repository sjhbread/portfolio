import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 기본은 도메인 루트(/) 기준 — Vercel, 자체 도메인이 여기 해당한다.
// GitHub Pages 는 https://<계정>.github.io/<저장소>/ 처럼 하위 경로라서
// deploy.sh 가 BASE=/portfolio/ 를 넘겨 빌드한다.
export default defineConfig({
  base: process.env.BASE ?? '/',
  plugins: [react()],
})
