// watch css var in @styles/globals

import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/common/**/*.{js,ts,jsx,tsx,mdx,css}",
      "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],

   important: true,
   theme: {
      extend: {
         colors: {
            primary: "var(--primary-color)",
            secondary: "var(--secondary-color)",

            "primary-btn": "var(--active-button-color)",
            "secondary-btn": "var(--inactive-button-color)",
            "hover-btn": "var(--hover-button-color)",

            "primary-icon": "var(--active-icon-color)",
            "secondary-icon": "var(--inactive-icon-color)",

            "light-gray-txt": "var(--text-light-gray)",
            "gray-txt": "var(--text-gray)",
            "dark-gray-txt": "var(--text-dark-gray)",

            "active-status": "#31A24C",

            gray: "#f2f2f2",
            white: "#FFFFFF",
            red: "#FF0000",
            black: "#000000",
            transparent: "transparent",
         },

         width: {
            "chat-side": "248px",
         },

         fontSize: {
            tiny: "12px",
            regular: "16px",
            huge: "24px",

            sm: ["14px", "20px"],
            base: ["16px", "24px"],
            lg: ["20px", "28px"],
            xl: ["24px", "32px"],
         },

         fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
         },

         boxShadow: {
            modal: "0px 5px 15px rgba(0, 0, 0, 0.35)",
            inner: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
         },

         screens: {
            tablet: "700px",
            // => @media (min-width: 640px) { ... }

            laptop: "900px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
         },
      },
   },
   plugins: [],
   corePlugins: {
      preflight: false,
   },
};

export default config;
