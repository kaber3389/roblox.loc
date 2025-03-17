export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['./assets/css/app.css'],

  modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],

  runtimeConfig: {
    server: {
      apiKey: process.env.APP_API_KEY
    },
    public: {
      apiBase: process.env.APP_API_BASE
    }
  },

  i18n: {
    lazy: true,
    locales: [
      {code: 'en', iso: 'en-US', file: 'en-US.json', name: 'English'},
      {code: 'ru', iso: 'ru-RU', file: 'ru-RU.json',name: 'Русский'},
    ],
    defaultLocale: 'ru',
    detectBrowserLanguage: false,
    strategy: 'prefix',
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  compatibilityDate: '2025-03-17'
})