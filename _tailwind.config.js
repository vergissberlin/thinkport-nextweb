module.exports = {
    theme: {
        container: {
            padding: '2rem',
        },
        colors: {
            blue: {
                light: '#85d7ff',
                DEFAULT: '#1fb6ff',
                dark: '#009eeb',
            },
            pink: {
                light: '#ff7ce5',
                DEFAULT: '#ff49db',
                dark: '#ff16d1',
            },
            gray: {
                darkest: '#1f2d3d',
                dark: '#3c4858',
                DEFAULT: '#c0ccda',
                light: '#e0e6ed',
                lightest: '#f9fafc',
            }
        },
        fontFamily: {
            sans: ['Monserat', 'sans-serif'],
        },
        extend: {
            flexGrow: {
                2: '2',
                3: '3',
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },
        },
    },
    content: [
        './src/components/**/*.{html,js,md,mdx,astro}',
        './src/content/**/*.{html,js,md,mdx,astro}',
        './src/layouts/**/*.{html,js,md,mdx,astro}',
        './src/pages/**/*.{html,js,md,mdx,astro}',
    ]
}
