import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        b_color_1: "#0047bb",//rochester blue
        b_color_2: "grey",
        t_color_1: "white",
      }
    },
  },
  plugins: [],
}
export default config
