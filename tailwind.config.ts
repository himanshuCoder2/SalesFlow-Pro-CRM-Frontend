import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1152d4',
        'background-light': '#f6f6f8',
        'background-dark': '#101622',
      },
      fontFamily: { display: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}
export default config
