<template>
  <div class="mobile-navigation-container" :class="{ open: $store.getters.isMobileNavbar }">
    <ul>
      <nuxt-link to="/" v-if="$route.path !== '/'" tag="li">
        <a>Home</a>
      </nuxt-link>
      <li>
        <a
          @click="$store.commit('SET_MOBILE_NAVBAR', false)"
          href="#about-me"
          v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }"
        >About me</a>
      </li>
      <li>
        <a
          @click="$store.commit('SET_MOBILE_NAVBAR', false)"
          href="#portfolio"
          v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }"
        >Portfolio</a>
      </li>
      <li>
        <a
          @click="$store.commit('SET_MOBILE_NAVBAR', false)"
          href="#technologies"
          v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }"
        >Technologies</a>
      </li>
      <li>
        <a :href="require('~/assets/MarkoZlatarResume.pdf')" download class="resume-download">
          <i class="mdi mdi-download"></i> Resume
        </a>
      </li>
      <nuxt-link to="/contact-me" tag="li">
        <a>Contact me</a>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {}
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