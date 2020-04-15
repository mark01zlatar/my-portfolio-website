<template>
  <div class="cookie-banner-container">
    <cookie-icon :size="40" class="cookieIcon"></cookie-icon>
    <p>{{ $t('cookies.message') }}</p>
    <button @click="acceptCookies">{{ $t('cookies.button') }}</button>
  </div>
</template>

<script>
import { bootstrap } from "vue-gtag"
import CookieIcon from "vue-material-design-icons/Cookie.vue"

export default {
  components: {
    CookieIcon
  },
  methods: {
    acceptCookies() {
      localStorage.setItem('cookiesAccepted', true)
      this.$store.commit('SET_COOKIES_ACCEPTED', true)

      bootstrap().then(gtag => {
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie-banner-container {
  position: fixed;
  height: 80px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0px);
  background-color: white;
  z-index: 99;
  color: $site-gray;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.253);
  p {
    font-size: 22px;
  }
  button {
    border: 2px solid $site-gray;
    background-color: transparent;
    height: 50px;
    width: 120px;
    border-radius: 0px;
    font-size: 18px;
    cursor: pointer;
    transition: all 200ms ease 0ms;
    &:hover {
      background: $site-gray;
      color: white;
    }
  }
}
@media screen and(max-width: 1100px) {
  .cookie-banner-container {
    width: 100%;
    bottom: 0px;
    min-height: 60px;
    p {
      font-size: 16px;
    }
    button {
      height: 35px;
      width: 90px;
      font-size: 16px;
    }
  }
}

@media screen and(max-width: 510px) {
  .cookie-banner-container {
    height: 120px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    text-align: center;
    flex-wrap: none;
    .cookieIcon {
      display: none;
    }
    p {
      margin-bottom: 5px;
      font-size: 18px;
    }
    // button {
    // }
  }
}
</style>