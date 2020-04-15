<template>
  <div>
    <app-header></app-header>
    <nuxt />
    <app-footer v-if="$route.path !== localePath('contact-me')"></app-footer>
    <app-cookie-banner v-if="!$store.getters.isCookiesAccepted"></app-cookie-banner>
  </div>
</template>

<script>
import AppHeader from '@/components/shared/AppHeader'
import AppFooter from '@/components/shared/AppFooter'
import AppCookieBanner from '@/components/shared/AppCookieBanner'

export default {
  head() {
    return this.$nuxtI18nSeo()
  },
  components: {
    AppHeader,
    AppFooter,
    AppCookieBanner
  },
  watch: {
    '$route.path': function(value) {
      this.$store.commit('SET_MOBILE_NAVBAR', false)
    }
  },
  mounted() {
    if (process.browser) {
      this.$gtag('config', 'UA-163702233-1', {
        page_title: this.$metaInfo.title,
        page_path: this.$route.fullPath,
      })
    }
    this.cookiesAccepted = JSON.parse(localStorage.getItem('cookiesAccepted'))

    this.$store.commit('SET_COOKIES_ACCEPTED', this.cookiesAccepted)

    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style>
</style>
