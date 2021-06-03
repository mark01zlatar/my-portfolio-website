<template>
  <header id="top">
    <nav>
      <nuxt-link class="logo" tag="a" :to="localePath('/')">
        <img src="@/assets/images/MZ-logo-white-small.png" width="70" alt="Marko Zlatar Logo" />
      </nuxt-link>
      <div class="desktop-navigation">
        <scrollactive tag="ul" class="navigation-list">
          <!-- Home Page Links -->
          <template
            v-if="$route.path === localePath('/') || $route.path === localePath('/').slice(0, -1)"
          >
            <!-- <li> -->
              <!-- <a -->
                <!-- :href="localePath({ path: '/', hash: '#about' })" -->
                <!-- class="scrollactive-item" -->
              <!-- >{{ $t('links.about') }}</a> -->
            <!-- </li> -->
            <!-- <li> -->
              <!-- <a -->
                <!-- :href="localePath({ path: '/', hash: '#portfolio' })" -->
                <!-- class="scrollactive-item" -->
              <!-- >{{ $t('links.portfolio') }}</a> -->
            <!-- </li> -->
            <!-- <li> -->
              <!-- <a -->
                <!-- :href="localePath({ path: '/', hash: '#technologies' })" -->
                <!-- class="scrollactive-item" -->
              <!-- >{{ $t('links.technologies') }}</a> -->
            <!-- </li> -->
          </template>
          <!-- Links for other pages -->
          <template v-else>
            <!-- <nuxt-link tag="li" :to="localePath('/')"> -->
              <!-- <a>{{ $t('links.home') }}</a> -->
            <!-- </nuxt-link> -->
            <!-- <nuxt-link tag="li" :to="localePath({ path: '/', hash: '#about' })"> -->
              <!-- <a>{{ $t('links.about') }}</a> -->
            <!-- </nuxt-link> -->
            <!-- <nuxt-link tag="li" :to="localePath({ path: '/', hash: '#portfolio' })"> -->
              <!-- <a>{{ $t('links.portfolio') }}</a> -->
            <!-- </nuxt-link> -->
<!--  -->
            <!-- <nuxt-link tag="li" :to="localePath({ path: '/', hash: '#technologies' })"> -->
              <!-- <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.technologies') }}</a> -->
            <!-- </nuxt-link> -->
          </template>

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
        <!-- <app-link-download-resume class="resume-download"></app-link-download-resume> -->
        <nuxt-link
          v-if="$route.path !== localePath('contact-me')"
          :to="localePath('contact-me')"
          active-class
          exact
        >
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
import AppLinkDownloadResume from '@/components/shared/AppLinkDownloadResume'
import TranslateIcon from "vue-material-design-icons/Translate.vue"

export default {
  components: {
    AppButton,
    AppHamburger,
    AppMobileNavigation,
    AppLinkDownloadResume,
    TranslateIcon
  },
  data() {
    return {}
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  z-index: 100;
}
header {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 120px;
  z-index: 2;
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
  margin-right: auto;
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
