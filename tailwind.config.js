/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        galada : "'Galada', cursive",
        grand : "'Grand Hotel', cursive",
        itim : "'Itim', cursive",
        mooli : "'Mooli', sans-serif",
        script : "Style Script', cursive",

      },
      backgroundImage : {
        'featureBg': "url(../../public/home/featured.jpg)",
        'chefBg': "url(../../public/home/chef-service.jpg)",
        'menuBg': "url(../../public/menu/banner3.jpg)"
      }
    },
  },
  plugins: [require("daisyui")],
}

