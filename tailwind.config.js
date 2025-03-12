/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // 让 Tailwind 处理所有 React 组件
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite", // 霓虹光环旋转
        wave: "wave 4s ease-in-out infinite", // 上下浮动
      },
      keyframes: {
        
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }, // 头像浮动
        },
      },
    },
  },
  plugins: [],
}


