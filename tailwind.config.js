/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow : {
        'navbar' : "10px 20px 30px rgba(149, 128, 253,0.5)"
      }
    },
  },
  plugins: [],
};
