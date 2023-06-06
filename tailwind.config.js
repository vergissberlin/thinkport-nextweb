module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    /* BLUE */
                    50: '#e6f2ff',
                    100: '#cce5ff',
                    200: '#99ccff',
                    300: '#66b3ff',
                    400: '#3399ff',
                    500: '#007fff',
                    600: '#0066cc',
                    700: '#004d99',
                    800: '#003366',
                    900: '#001a33',
                },
                secondary: {
                    /* ORANGE */
                    50: '#fff5eb',
                    100: '#ffe6cc',
                    200: '#ffd699',
                    300: '#ffcc66',
                    400: '#ffb84d',
                    500: '#ffa31a',
                    600: '#e69500',
                    700: '#bf8000',
                    800: '#995c00',
                    900: '#804000',
                },
                tertiary: {
                    /*GRAY*/
                    50: '#f2f2f2',
                    100: '#e6e6e6',
                    200: '#cccccc',
                    300: '#b3b3b3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4d4d4d',
                    800: '#333333',
                    900: '#1a1a1a',
                }





            },
        },
        plugins: [
            require('flowbite/plugin')
        ],
    }
}
