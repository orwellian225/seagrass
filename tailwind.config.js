/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'rose-of-sharon': {
          '50': '#fffbeb',
          '100': '#fef3c7',
          '200': '#fde58a',
          '300': '#fbd24e',
          '400': '#fabe25',
          '500': '#f49d0c',
          '600': '#d87607',
          '700': '#bc560a',
          '800': '#923f0e',
          '900': '#78340f',
          '950': '#451a03',
        },
        'science-blue': {
          '50': '#f1f8fe',
          '100': '#e1f0fd',
          '200': '#bde0fa',
          '300': '#82c7f7',
          '400': '#40abf0',
          '500': '#1791e0',
          '600': '#0a70bc',
          '700': '#0a5a9a',
          '800': '#0c4d80',
          '900': '#10416a',
          '950': '#0b2946',
        },
      },
    },
  },
  plugins: [],
}

