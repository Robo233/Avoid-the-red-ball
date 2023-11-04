module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      width: {
        '600': '600px',
        '800': '800px',
       },
       height: {
        '500': '500px',
       },
       left: {
         '100': '100px',
       },
       backgroundColor: {
         'steelblue': 'steelblue'
       },
       textColor: {
        'dark-green': '00491c'
       }
       
    }
  },
  plugins: [],
}
