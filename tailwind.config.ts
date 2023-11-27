import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page-components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 .2rem var(--primary-shadow)",
        zero: "0 0 0 0 var(--transparent)",
      },
      fontWeight: {
        semibold: '500'
      }
    },
    colors: {
      white: "var(--white)",
      black: "var(--black)",
      primary: "var(--primary)",
      primaryLight: "var(--primaryLight)",
      primaryLight2: "var(--primaryLight2)",
      grayLight: "var(--grayLight)",
      grayNeutral: "var(--grayNeutral)",
      grayDark: "var(--grayDark)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      transparent: "var(--transparent)",
      foregroundLight: "var(--foregroundLight)",
      foregroundDark: "var(--foregroundDark)",
    }
  },
  plugins: [],
  darkMode: 'class',
}
export default config
