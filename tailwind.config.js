/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '950px',
      lg: '1100px',
			computer: '1450px'
		},
    extend: {
      colors: {
				primary: '#293749'
			},
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
