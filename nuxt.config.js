require('dotenv').config()

// Languages
import en from './lang/en'
import sr from './lang/sr'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} | Marko Zlatar` : 'Marko Zlatar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',
  /*
   ** Global CSS
   */
  css: [
    // SCSS file in the project
    '@/assets/scss/main.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  // Doc: https://wlada.github.io/vue-carousel-3d/
  plugins: [
    { src: '~plugins/vue-scrollactive' },
    { src: '~plugins/vue-notifications', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { systemvars: true }],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    // Doc: https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    // Doc: https://github.com/WilliamDASILVA/nuxt-trailingslash-module
    [
      'nuxt-trailingslash-module',
      {
        /* module options */
        methods: ['GET', 'HEAD'],
      },
    ],
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  styleResources: {
    scss: ['@/assets/scss/_colors.scss'],
  },
  i18n: {
    locales: [
      { code: 'sr', iso: 'sr-RS', name: 'Srpski' },
      { code: 'en', iso: 'en-US', name: 'English' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, sr },
    },
    baseUrl: process.env.baseURL,
    parsePages: false,
    pages: {
      'contact-me/index': {
        en: '/contact-me',
        sr: '/kontaktiraj-me',
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    vuex: {
      moduleName: 'i18n',
      syncLocale: true,
      syncMessages: false,
      syncRouteParams: true,
    },
  },
  robots: {},
  sitemap: {
    hostname: 'https://markozlatar.com',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Find the rule which contains a assets file extension
      const assetsLoader = config.module.rules.find((rule) =>
        rule.test.test('.png')
      )

      // Overwrite the test regex and add `pdf`
      assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf)$/i

      return config
    },
  },
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
  },
}
