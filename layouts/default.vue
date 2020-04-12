<template>
  <div>
    <app-header></app-header>
    <nuxt />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/shared/AppHeader'
import AppFooter from '@/components/shared/AppFooter'

export default {
  head() {
    return this.$nuxtI18nSeo()
  },
  components: {
    AppHeader,
    AppFooter
  },
  watch: {
    '$route.path': function(value) {
      this.$store.commit('SET_MOBILE_NAVBAR', false)
    }
  }
}
</script>

<style>
</style>
