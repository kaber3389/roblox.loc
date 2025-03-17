export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
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
      apiKey: '111'
    },
    public: {
      apiBase: 'http://172.23.35.130:8781'
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
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})