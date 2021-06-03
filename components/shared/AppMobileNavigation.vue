<template>
  <div class="mobile-navigation-container" :class="{ open: $store.getters.isMobileNavbar }">
    <scrollactive tag="ul">
      <!-- Home Page Links -->
      <template
        v-if="$route.path === localePath('/') || $route.path=== localePath('/').slice(0, -1) "
      >
        <!-- <li> -->
          <!-- <a -->
            <!-- :href="localePath({ path: '/', hash: '#about' })" -->
            <!-- @click="$store.commit('SET_MOBILE_NAVBAR', false)" -->
            <!-- class="scrollactive-item" -->
          <!-- >{{ $t('links.about') }}</a> -->
        <!-- </li> -->
        <!-- <li> -->
          <!-- <a -->
            <!-- :href="localePath({ path: '/', hash: '#portfolio' })" -->
            <!-- @click="$store.commit('SET_MOBILE_NAVBAR', false)" -->
            <!-- class="scrollactive-item" -->
          <!-- >{{ $t('links.portfolio') }}</a> -->
        <!-- </li> -->
        <!-- <li> -->
          <!-- <a -->
            <!-- :href="localePath({ path: '/', hash: '#technologies' })" -->
            <!-- @click="$store.commit('SET_MOBILE_NAVBAR', false)" -->
            <!-- class="scrollactive-item" -->
          <!-- >{{ $t('links.technologies') }}</a> -->
        <!-- </li> -->
      </template>
      <!-- Links for other pages -->
      <template v-else>
        <nuxt-link tag="li" :to="localePath('/')">
          <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.home') }}</a>
        </nuxt-link>
        <!-- <nuxt-link tag="li" :to="localePath({ path: '/', hash: '#about' })"> -->
          <!-- <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.about') }}</a> -->
        <!-- </nuxt-link> -->
        <!-- <nuxt-link tag="li" :to="localePath({ path: '/', hash: '#portfolio' })"> -->
          <!-- <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.portfolio') }}</a> -->
        <!-- </nuxt-link> -->

        <!-- <nuxt-link tag="li" :to="localePath({ path: '/', hash: '#technologies' })"> -->
          <!-- <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.technologies') }}</a> -->
        <!-- </nuxt-link> -->
      </template>
      <!-- <li> -->
        <!-- <app-link-download-resume></app-link-download-resume> -->
      <!-- </li> -->
      <nuxt-link
        v-if="$route.path !== localePath('contact-me')"
        :to="localePath('contact-me')"
        tag="li"
      >
        <a>{{ $t('links.contact') }}</a>
      </nuxt-link>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        tag="li"
      >
        <a>
          <translate-icon></translate-icon>
          {{ locale.name }}
        </a>
      </nuxt-link>
    </scrollactive>
  </div>
</template>

<script>
import AppLinkDownloadResume from '@/components/shared/AppLinkDownloadResume'
import TranslateIcon from "vue-material-design-icons/Translate.vue"

export default {
  components: {
    AppLinkDownloadResume,
    TranslateIcon
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
  .mobile-navigation-container {
    display: none !important;
  }
}
.mobile-navigation-container {
  z-index: 2;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: $site-gray-dark;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: circle(0px at 100% -0%);
  -webkit-clip-path: circle(0px at 100% -0%);
  transition: all 1s ease-out;
  pointer-events: none;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    li {
      transition: all 400ms ease 0ms;
      margin: 10px 0px;
      font-size: 20px;
      a {
        transition: color 200ms ease;
        &:hover {
          color: $site-text-dark;
        }
      }
    }
  }
}

.mobile-navigation-container.open {
  clip-path: circle(1200px at 90% -10%);
  -webkit-clip-path: circle(1200px at 90% -10%);
  pointer-events: all;
}
</style>
