import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'DHL-bg': "url('/images/DHL.jpg')",
        'Alten-bg': "url('/images/Alten.jpg')",
        'TATA-bg': "url('/images/TATA.jpg')",
        'Wb-bg': "url('/images/Wg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }),
      fontFamily: {
        Hedvig: ['"Hedvig Letters"', ...defaultTheme.fontFamily.sans],
        Garamond : ['"EB Garamond"', ...defaultTheme.fontFamily.sans]
        
      }
    },
  },
  plugins: [],
}
export default config
