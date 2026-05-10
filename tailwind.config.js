/** @type {import('tailwindcss').Config} */
module.exports = {
  // app 폴더 안의 모든 파일에 Tailwind를 적용해줘
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}