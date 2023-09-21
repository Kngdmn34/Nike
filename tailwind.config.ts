import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  
  theme: {
    extend: {
      
     
    },
    darkMode: "class",
    plugins: [nextui()],
    animation: {
      dance:'dance 7s infinite'
    },
    keyframes:{
      dance:{
        '0%' : {
          transform: 'translate(0px,0px) scale(1)'
        },
        '33%': {
          transform: 'translate(30px, -50px) scale(1.1)'
        },
        '66%': {
          transform: 'translate(20px, -20px) scale(0.9)'
        },
        '100%':{
          transofrm: 'translate(0px, 0px) scale(1)'
        }
      }
    }
  },
  plugins: [],
}
export default config
