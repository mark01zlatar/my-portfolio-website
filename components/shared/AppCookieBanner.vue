<template>
  <div class="cookie-banner-container">
    <i class="mdi mdi-cookie"></i>
    <p>Cookies are used to enhance user experience</p>
    <button @click="acceptCookies">Accept</button>
  </div>
</template>

<script>
export default {
  methods: {
    acceptCookies() {
      localStorage.setItem('cookiesAccepted', true)
      this.$store.commit('SET_COOKIES_ACCEPTED', true);
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
  i {
    font-size: 70px;
  }
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
@media screen and(max-width: 900px) {
  .cookie-banner-container {
    width: 100%;
    bottom: 0px;
    min-height: 60px;
    i {
      font-size: 30px;
    }
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
    i {
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