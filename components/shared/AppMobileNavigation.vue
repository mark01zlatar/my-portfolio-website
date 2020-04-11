<template>
  <div class="mobile-navigation-container" :class="{ open: $store.getters.isMobileNavbar }">
    <ul>
      <nuxt-link v-if="$route.path !== '/'" tag="li" to="/">
        <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.home') }}</a>
      </nuxt-link>
      <nuxt-link tag="li" to="/#about-me">
        <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.about') }}</a>
      </nuxt-link>
      <nuxt-link tag="li" to="/#portfolio">
        <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.portfolio') }}</a>
      </nuxt-link>
      <nuxt-link tag="li" to="/#technologies">
        <a @click="$store.commit('SET_MOBILE_NAVBAR', false)">{{ $t('links.technologies') }}</a>
      </nuxt-link>
      <li>
        <a :href="require('~/assets/MarkoZlatarResume.pdf')" download class="resume-download">
          <i class="mdi mdi-download"></i>
          {{ $t('links.resume') }}
        </a>
      </li>
      <nuxt-link v-if="$route.path === '/'" to="/contact-me" tag="li">
        <a>{{ $t('links.contact') }}</a>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  watch: {
    '$router.path': function(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-navigation-container {
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