/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "violet": "#1125d4",
        "violet2":"#7020e8",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "light-lavender":"hsl(241, 100%, 89%)",
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow":"hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue":"hsl(234, 85%, 45%)",
        "dark-gray-blue":"hsl(224, 30%, 27%)"

      },
      fontFamily: {
        "hanken": ["Hanken Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}