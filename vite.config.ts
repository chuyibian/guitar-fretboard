import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 如果部署到 GitHub Pages 子路径，使用仓库名称
  // 如果部署到自定义域名，改为 "/"
  base: process.env.VITE_BASE_PATH || '/guitar-fretboard/',
})
