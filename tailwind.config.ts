import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        heroDesktop: `url(/images/hero-desktop-1x.png)`,
        heroTablet: `url(/images/hero-tablet-1x.png)`,
        heroMobile: `url(/images/hero-mobile-1x.png)`,
      }),
      screens: {
        xs: "375px",
        sm: "834px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
