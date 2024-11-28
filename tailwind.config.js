/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Your React files
    "./node_modules/flowbite-react/**/*.js", // Flowbite React components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Flowbite plugin
  ],
};
