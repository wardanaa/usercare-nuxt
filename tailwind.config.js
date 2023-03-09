import defaultTheme from 'tailwindcss/defaultTheme'
export default {
    theme: {
        extend: {
            colors: {
                primary: defaultTheme.colors.green
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms')
    ]
}