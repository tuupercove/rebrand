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
  },
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false, // Add this line to minify to one line
        collapseWhitespace: true, // Add this line to remove extra whitespace
      },
    },
  }  
})