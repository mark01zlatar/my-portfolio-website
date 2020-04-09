<template>
  <div class="error-page">
    <h1>The sky is blue.</h1>
    <h1>The earth is round.</h1>
    <h1 class="not-found">The page you want cannot be found.</h1>
    <nuxt-link to="/" tag="a">
      <app-button class="home-button" text="HOME"></app-button>
    </nuxt-link>
  </div>
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
.error-page {
  width: 100%;
  padding: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 40px;
  color: white;
  letter-spacing: 3px;
  text-align: center;
}
.not-found {
  color: $site-text-dark;
  margin-bottom: 50px;
}
.home-button {
  width: 500px !important;
  min-width: 240px;
  max-width: 550px;
}

@media screen and (max-width: 1450px) {
  .error-page {
    font-size: 30px;
  }
  .home-button {
    width: 300px !important;
    min-width: 240px;
    max-width: 550px;
  }
}

@media screen and (max-width: 600px) {
  .error-page {
    font-size: 20px;
  }
  .home-button {
    width: 250px !important;
    min-width: 240px;
    max-width: 550px;
  }
}

@media screen and (max-width: 450px) {
  .error-page {
    font-size: 16px;
  }
}
</style>