import redirectSSL from 'redirect-ssl';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'R&K',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:image', property: 'og:image', content: '/img/logo/logo.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  env: {
    appTitle: process.env.APP_TITLE || "R&K Consultant",
    appAddr: process.env.APP_ADDR || "3333 Cavendish Blvd Suite 250, Montreal, Quebec, H4B 2M5, Canada",
    appEmail: process.env.APP_EMAIL || "info@RnK-consulting.com",
    appMtlPhone: process.env.APP_MONTREAL_PHONE || "(514) 979-0830",
    appTorPhone: process.env.APP_TORONTO_PHONE || "(437) 995-0905",
    nodeEnv: process.env.NODE_ENV || "development"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap/bootstrap.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    { src: '~/plugins/v-calendar.js', mode: 'client' }
  ],

  router: {
    linkActiveClass: '',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],

  axios: {
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      'fr',
      'en',  // Make sure that default locale is the last one!
    ],
    vueI18nLoader: true,
  },

  image: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
     }),
  ],

  render: {
    // Setting up cache for 'static' directory - a year in seconds
    static: {
      maxAge: 60 * 60 * 24 * 365
    },
  },

}
