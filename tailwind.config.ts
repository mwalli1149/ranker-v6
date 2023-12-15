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
        b_color_2: "#C9C9C9 ",//grey 
        b_color_3: "F3F3F3",//light grey
        t_color_1: "white",
        t_color_2: "#0047bb",//rochester blue
      }
    },
  },
  plugins: [],
}
export default config
