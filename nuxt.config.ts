// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error']
    }
  },
  css: ['./assets/css/app.css'],
  modules: ['@nuxt/image', '@nuxt/scripts'],
  runtimeConfig: {
    server: {
      apiKey: '111'
    },
    public: {
      apiBase: 'http://api.roblox.loc'
    }
  }
})