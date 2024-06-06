// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  modules: [//"@nuxtjs/tailwindcss",
  "@nuxtjs/i18n", "@nuxt/image", "nuxt-icon", "@nuxtjs/seo", "@nuxt/ui", "@nuxtjs/device", "@nuxt/fonts", "nuxt-gtag", "@formkit/nuxt", "nuxt-icons", "nuxt-svgo"],
  alias: {
    '#tailwind-config': './tailwind.config.js'
  },
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  }
})