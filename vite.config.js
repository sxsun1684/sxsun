import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/sxsun',
  assetsInclude: ['**/*.md'], // 让 Vite 识别 .md 文件
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:5000",  // ✅ 确保 Flask 端口正确
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // }
});
