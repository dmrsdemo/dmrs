/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        'red-hat' : ['Red Hat Display', 'sans-serif']
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      animation: {
        ltr: 'ltr 20s infinite',
        rtl: 'rtl 20s infinite',
        ttb: 'ttb 20s infinite',
        btt: 'btt 20s infinite',
        bttsmall: 'bttsmall 3s easeout infinite',
      },

      keyframes: {
        ltr: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%' : { transform: 'translateX(-10px)' },
        },

        rtl: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%' : { transform: 'translateX(10px)' },
        },

        ttb: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%' : { transform: 'translateY(10px)' },
        },

        btt: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%' : { transform: 'translateY(-10px)' },
        },

        bttsmall : {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%' : { transform: 'translateY(3px)' },
        }
      },

      colors: {
        
        // 300 default, 200 hover, 400 clicked/active
        primary: {
          50: '#f1fcf9',
          100: '#d1f6ed',
          200: '#a3ecdb',
          300: '#55d6bd',
          400: '#3ec3ad',
          500: '#25a794',
          600: '#1b8679',
          700: '#1a6b62',
          800: '#195650',
          900: '#194843',
          950: '#082b29'
        },

        // 50 default, 100 hover, 200 clicked/active
        secondary: {
          50: '#fcfcfc',
          100: '#efefef',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3d3d3d',
          950: '#292929'
        },

        // 500 default, 400 hover, 600 clicked/active
        accent: {
          50: '#f6f4fe',
          100: '#eeeafd',
          200: '#ded9fb',
          300: '#c6baf8',
          400: '#a992f3',
          500: '#8860eb',
          600: '#7c46e1',
          700: '#6d34cd',
          800: '#5b2bac',
          900: '#4c258d',
          950: '#2f165f'
        },

        background: {
          light: '#FFFFFF',
          dark: '#100F13',
        }


      },

      fontSize: {
        xs : ['0.875rem', '150%'],
        sm : ['1rem', '130%'],
        base : ['1.375rem', '130%'],
        md : ['1.75rem', '130%'],
        lg : ['2.375rem', '100%'],
        xl : ['3.188rem', '100%'],
        '2xl' : ['4.25rem', '110%'],
        '3xl' : ['5.625rem', '110%'],
        '5xl' : ['7.5rem', '110%'],
        '6xl' : ['10rem', '110%'],
        'hero': ['36rem', '90%']
      },

      screens: {
        mobile : '480px',
        tablet : '768px',
        laptop : '1024px',
        desktop : '1366px',
        hd : '1920px',
      }

    },
  },
  plugins: [],
}