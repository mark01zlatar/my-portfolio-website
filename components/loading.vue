<template>
  <div class="loader-container" v-if="loading">
    <img src="~/assets/images/MZ-logo-white-small.png" width="100" alt="Marko Zlatar Logo" />
    <div class="loadingio-spinner-eclipse-u1b973kbcuq">
      <div class="ldio-7h8o6h526pt">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loader-container {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background-color: $site-gray;
  color: white;
  img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes ldio-7h8o6h526pt {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-7h8o6h526pt div {
  position: absolute;
  animation: ldio-7h8o6h526pt 1s linear infinite;
  width: 160px;
  height: 160px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  box-shadow: 0 4px 0 0 #ffffff;
  transform-origin: 80px 82px;
  box-sizing: content-box;
}
.loadingio-spinner-eclipse-u1b973kbcuq {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #1d1f2a;
}
.ldio-7h8o6h526pt {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
</style>