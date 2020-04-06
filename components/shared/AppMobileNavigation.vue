<template>
  <div class="mobile-navigation-container" :class="{ open: openMobileNav }">
    <ul>
      <nuxt-link to="#" tag="li">
        <a>About me</a>
      </nuxt-link>
      <nuxt-link to="#" tag="li">
        <a>Projects</a>
      </nuxt-link>
      <nuxt-link to="#" tag="li">
        <a>Technologies</a>
      </nuxt-link>
      <nuxt-link to="#" tag="li">
        <a>Resume</a>
      </nuxt-link>
      <nuxt-link to="#" tag="li">
        <a>Contact me</a>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    openMobileNav: {
      type: Boolean,
      reqired: true
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
}
</style>