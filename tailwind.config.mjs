/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        tsdark: "#0C0C0C",
        tslight: "#F7F7F7",
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
