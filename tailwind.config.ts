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
        brand: {
          red:          '#f9462d',
          'red-dark':   '#d63520',
          blue:         '#4a71f6',
          'blue-light': '#eef1fe',
          navy:         '#2e3d5c',
          'navy-mid':   '#3d5070',
          cream:        '#efe3d4',
          'cream-dark': '#ddd0bf',
          offwhite:     '#edeee8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
