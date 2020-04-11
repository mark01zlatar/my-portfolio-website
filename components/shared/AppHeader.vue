<template>
  <header id="top">
    <nav>
      <nuxt-link tag="a" to="/">
        <img src="@/assets/images/MZ-logo-white-small.png" width="70" alt="Marko Zlatar Logo White" />
      </nuxt-link>
      <div class="desktop-navigation">
        <ul class="navigation-list">
          <nuxt-link v-if="$route.path !== '/'" tag="li" to="/">
            <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.home') }}</a>
          </nuxt-link>
          <nuxt-link tag="li" to="/#about-me">
            <a>{{ $t('links.about') }}</a>
          </nuxt-link>
          <nuxt-link tag="li" to="/#portfolio">
            <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.portfolio') }}</a>
          </nuxt-link>

          <nuxt-link tag="li" to="/#technologies">
            <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.technologies') }}</a>
          </nuxt-link>
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            <i class="mdi mdi-translate"></i>
            {{ locale.name }}
          </nuxt-link>
        </ul>
        <a :href="require('~/assets/MarkoZlatarResume.pdf')" download class="resume-download">
          <i class="mdi mdi-download"></i>
          {{ $t('links.resume') }}
        </a>
        <nuxt-link v-if="$route.path !== '/contact-me'" to="/contact-me" active-class exact>
          <app-button :text="$t('links.contact')"></app-button>
        </nuxt-link>
      </div>
      <app-hamburger class="hamburger"></app-hamburger>
      <app-mobile-navigation></app-mobile-navigation>
    </nav>
  </header>
</template>

<script>
import AppButton from '@/components/shared/AppButton'
import AppHamburger from '@/components/shared/AppHamburger'
import AppMobileNavigation from '@/components/shared/AppMobileNavigation'

export default {
  components: {
    AppButton,
    AppHamburger,
    AppMobileNavigation
  },
  data() {
    return {}
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  mounted() {
    console.log(this.$i18n.locales)
    console.log(this.$i18n.locale)
  }
}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 120px;
  z-index: 1;
  background-color: $site-gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  nav {
    width: 80%;
    display: flex;
    align-items: center;
  }
}

.desktop-navigation {
  margin-left: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-list {
  color: white;
  display: flex;
  li {
    margin-right: 30px;
    cursor: pointer;
    a {
      transition: color 200ms ease;
      &:hover {
        color: $site-text-dark;
      }
    }
  }
}

.resume-download {
  margin-left: auto;
  margin-right: 30px;
  transition: color 200ms ease;
  &:hover {
    color: $site-text-dark;
  }
}

.hamburger {
  margin-left: auto;
  display: none;
  z-index: 100;
}

@media screen and (max-width: 1200px) {
  .desktop-navigation {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>