/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            colors: {
                // light mode
                'background-light': '#fcfcfc',
                'text-color-light': '#000',
                'div-text-color-light': '#fafafa',
                'button-color-light': '#30598c',
                'hover-color-light': '#567eac',
                // dark mode
                'background-dark': '#0b0b25',
                'div-color-dark': '#111645',
                'button-color-dark': '#ececec',
                'button-text-color-dark': '#0b0b25',
                'hover-color-dark': '#d2cfcf',
                'text-color-dark': '#fcfcfc',
                'card-background-light': 'rgba(128, 128, 128, 0.294)',
            },
            fontFamily: {
                // main font
                poppins: ['Poppins', 'sans-serif'],
                // secondary fonts
                caprasimo: ['Caprasimo', 'cursive'],
                lilita: ['Lilita One', 'cursive'],
                inter: ['Inter', 'sans-serif'],
            },
            screens: {
                sm: '640px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
        },
    },
    plugins: [],
}
