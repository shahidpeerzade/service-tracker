module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#39AFEA',
        cardColor: '#5e69ee', 
      },
      boxShadow: {
        'custom-blue': '4px 4px 10px rgba(49, 140, 231, 0.5)', 
      },
    },
  },
  plugins: [],
}
