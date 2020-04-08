<template>
  <header id="top">
    <nav>
      <nuxt-link tag="a" to="/">
        <img src="@/assets/images/MZ-logo-white-small.png" width="70" alt="Marko Zlatar Logo White" />
      </nuxt-link>
      <div class="desktop-navigation">
        <ul class="navigation-list">
          <li>
            <a
              href="#about-me"
              v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }"
            >About me</a>
          </li>
          <li>
            <a
              href="#portfolio"
              v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }"
              @click="$store.commit('SET_MOBILE_NAVBAR', false)"
            >Portfolio</a>
          </li>
          <li>
            <a
              href="#technologies"
              v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }"
              @click="$store.commit('SET_MOBILE_NAVBAR', false)"
            >Technologies</a>
          </li>
        </ul>
        <nuxt-link to="#" class="resume-download" tag="a">Resume</nuxt-link>
        <app-button text="Contact me"></app-button>
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

@media screen and (max-width: 1000px) {
  .desktop-navigation {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
</style>