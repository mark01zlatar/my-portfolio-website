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
    titleTemplate: titleChunk => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} | Marko Zlatar` : 'Marko Zlatar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css',
        rel: 'stylesheet'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    // SCSS file in the project
    '@/assets/scss/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  // Doc: https://wlada.github.io/vue-carousel-3d/
  plugins: [
    { src: '~plugins/vue-carousel-3d', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { systemvars: true }],
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  styleResources: {
    scss: ['@/assets/scss/_colors.scss']
  },
  i18n: {
    locales: [
      { code: 'sr', iso: 'sr-RS', name: 'Srpski' },
      { code: 'en', iso: 'en-US', name: 'English' }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, sr }
    },
    baseUrl: process.env.baseURL,
    parsePages: false,
    pages: {
      'contact-me': {
        en: '/contact-me',
        sr: '/kontaktiraj-me'
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    }
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
      const assetsLoader = config.module.rules.find(rule =>
        rule.test.test('.png')
      )

      // Overwrite the test regex and add `pdf`
      assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf)$/i

      return config
    }
  }
}
