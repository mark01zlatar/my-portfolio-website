<template>
  <scrollactive tag="div">
    <a :href="localePath('/#services')" class="scrollactive-item icon-scroll"></a>
  </scrollactive>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.icon-scroll,
.icon-scroll::before {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.icon-scroll {
  width: 40px;
  height: 70px;
  border: 2px solid #fff;
  border-radius: 25px;
  cursor: pointer;
  bottom: 2rem;
}

.icon-scroll::before {
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 15px;
  border-radius: 50%;
  animation: 1.5s scroll cubic-bezier(0.65, -0.55, 0.25, 1.5) infinite;
}

@keyframes scroll {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.5);
  }
  10% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(30px) scale(0.5);
  }
}
</style>