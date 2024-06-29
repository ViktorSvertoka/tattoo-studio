import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        heroDesktop: `url(/images/hero-desktop-2x.png)`,
        heroTablet: `url(/images/hero-tablet-2x.png)`,
        heroMobile: `url(/images/hero-mobile-2x.png)`,

        contactsDesktop: `url(/images/contacts-desktop-2x.png)`,
        contactsTablet: `url(/images/contacts-tablet-2x.png)`,
        contactsMobile: `url(/images/contacts-mobile-2x.png)`,
      }),
      screens: {
        xs: '375px',
        sm: '834px',
        lg: '1440px',
      },
      colors: {
        white: '#F5F3F3',
        gray: '#888888',
        darkGray: '#263238',
        black: '#15161E',
        darkOrange: '#FF6C00',
        lightOrange: 'rgba(255, 108, 0, 0.3)',
      },
      fontFamily: {
        rye: ['Rye', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        orelega: ['Orelega One', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
