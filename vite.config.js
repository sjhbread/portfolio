import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages는 https://<계정>.github.io/<저장소이름>/ 주소로 열린다.
// 그래서 파일 경로 앞에 저장소 이름을 붙여줘야 CSS/JS를 못 찾는 일이 없다.
// 다른 곳(Vercel 등 도메인 루트)에 올릴 땐 BASE=/ 로 빌드하면 된다.
export default defineConfig({
  base: process.env.BASE ?? '/portfolio/',
  plugins: [react()],
})
