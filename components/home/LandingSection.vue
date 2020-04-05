<template>
  <section class="landing-section">
    <the-text-animation></the-text-animation>
    <h1>
      Self-taught software and
      <span>web developer</span>
    </h1>
    <app-button class="landing-button" text="Contact me"></app-button>
  </section>
</template>

<script>
import AppHeader from '@/components/shared/AppHeader'
import AppButton from '@/components/shared/AppButton'
import TheTextAnimation from '@/components/home/TheTextAnimation'

export default {
  components: {
    AppHeader,
    AppButton,
    TheTextAnimation
  }
}
</script>

<style lang="scss" scoped>
.landing-section {
  width: 100%;
  height: 100vh;
  background-color: $site-gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

h1 {
  color: transparent;
  font-size: 45px;
  margin: 20px 0px;
  color: white;
  span {
    -webkit-text-stroke: 0.1px white;
    color: transparent;
    font-size: 50px;
  }
}

.landing-button {
  width: 30% !important;
  min-width: 240px;
  max-width: 550px;
}

@media screen and (max-width: 600px) {
  .landing-section {
    h1 {
      font-size: 35px;
      span {
        font-size: 45px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .landing-section {
    h1 {
      font-size: 25px;
      span {
        font-size: 35px;
      }
    }
  }
}
</style>