/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      PlayfairDisplay: ["Playfair Display", "serif"],
      Lora: ["Lora", "serif"],
    },
    colors: {
      primary: "",
      secondary: "",
      tertiary: "",
      black: "#000000",
      white: "#ffffff",
    },
    backgroundImage: {
      bannerImg1:
        "url('https://images.unsplash.com/photo-1653566031489-78ae0fa0872c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      bannerImg2:
        "url('https://images.unsplash.com/photo-1653669486789-72a1124a0a26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
  },

  plugins: [],
};
export default keepTheme(config);
