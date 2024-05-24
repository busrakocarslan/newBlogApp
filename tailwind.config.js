/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fontSedan:["Sedan SC", "serif"]
      },
      backgroundImage: theme => ({        
        'login-bg': "url('./assets/write-3529980_1280.jpg')",
        'form-bg':"url('./assets/sms-mail-2784920_1280.png')"
      }),backgroundSize: {
        'cover': 'cover',
      },
      backgroundPosition: {
        'center': 'center',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
    },
  },
  plugins: [],
}