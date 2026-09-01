import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel 은 도메인 루트에서 서빙하므로 base 는 '/' 다.
// 하위 경로(예: example.com/portfolio/)에 올릴 일이 생기면
// BASE=/portfolio/ npm run build 로 덮어쓸 수 있다.
export default defineConfig({
  base: process.env.BASE ?? '/',
  plugins: [react()],
})
