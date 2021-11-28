const colors = require('tailwindcss/colors')
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        yellow: {
            light: '#ff7ce5',
            DEFAULT: '#FEF3C7',
            dark: '#ff16d1',
        },
        fontFamily: {
            'mountains-of-christmas': ['"Mountains of Christmas"', 'cursive'],
        },
    },
}
