<template>
  <div class="mobile-navigation-container" :class="{ open: openMobileNav }">
    <ul>
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
        >Portfolio</a>
      </li>
      <li>
        <a
          href="#technologies"
          v-smooth-scroll="{ duration: 1000, offset: -50, updateHistory: false }"
        >Technologies</a>
      </li>
      <li>
        <a href="#">Resume</a>
      </li>
      <li>
        <a href="#contact-me">Contact me</a>
      </li>
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