/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}", // Main App file
    "./app/**/*.{js,jsx,ts,tsx}", // All files in the app directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include components directory if you have one
    "./screens/**/*.{js,jsx,ts,tsx}", // Include screens directory if applicable
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
