// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/css/main.css'],
    modules: ['@pinia/nuxt'],
    typescript: {
        shim: false,
    },
    app: {
        head: {
            title: 'Greatreads',
            meta: [
              { name: 'description', content: 'Your next book awaits' },
              {charset: 'utf-16'},
            ],
        }
    }
})
