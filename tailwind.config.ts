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
        glow: "0 0 5px var(--primary)"
      },
      fontWeight: {
        semibold: '500'
      }
    },
    colors: {
      white: "var(--white)",
      primary: "var(--primary)",
      primaryLight: "var(--primaryLight)",
      primaryLight2: "var(--primaryLight2)",
      grayLight: "var(--grayLight)",
      grayNeutral: "var(--grayNeutral)",
      grayDark: "var(--grayDark)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      transparent: "var(--transparent)"
    }
  },
  plugins: [],
}
export default config
