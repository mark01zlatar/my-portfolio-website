<template>
  <header>
    <nav>
      <nuxt-link tag="a" to="/">
        <img src="@/assets/images/MZ-logo-white-small.png" width="70" alt="Marko Zlatar Logo White" />
      </nuxt-link>
      <ul class="navigation-list">
        <nuxt-link to="#" tag="li">About me</nuxt-link>
        <nuxt-link to="#" tag="li">Projects</nuxt-link>
        <nuxt-link to="#" tag="li">Technologies</nuxt-link>
      </ul>
      <nuxt-link to="#" class="resume-download" tag="a">Resume</nuxt-link>
      <app-button text="Contact me"></app-button>
    </nav>
  </header>
</template>

<script>
import AppButton from '@/components/shared/AppButton'
export default {
  components: {
    AppButton
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

.navigation-list {
  color: white;
  display: flex;
  margin-left: 120px;
  li {
    margin-right: 30px;
    transition: color 200ms ease;
    cursor: pointer;
    &:hover {
      color: $site-text-dark;
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
</style>