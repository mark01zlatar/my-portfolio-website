<template>
  <header>
    <nav>
      <nuxt-link tag="a" to="/">
        <img src="@/assets/images/MZ-logo-white-small.png" width="70" alt="Marko Zlatar Logo White" />
      </nuxt-link>
      <div class="desktop-navigation">
        <ul class="navigation-list">
          <nuxt-link to="#" tag="li">About me</nuxt-link>
          <nuxt-link to="#" tag="li">Projects</nuxt-link>
          <nuxt-link to="#" tag="li">Technologies</nuxt-link>
        </ul>
        <nuxt-link to="#" class="resume-download" tag="a">Resume</nuxt-link>
        <app-button text="Contact me"></app-button>
      </div>
      <app-hamburger class="hamburger"></app-hamburger>
    </nav>
  </header>
</template>

<script>
import AppButton from '@/components/shared/AppButton'
import AppHamburger from '@/components/shared/AppHamburger'

export default {
  components: {
    AppButton,
    AppHamburger
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

.hamburger {
  margin-left: auto;
  display: none;
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