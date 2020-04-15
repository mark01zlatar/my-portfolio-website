<template>
  <scrollactive tag="div">
    <a :href="localePath('/#top')" class="scrollactive-item">
      <chevron-double-up-icon :size="40" class="icon-color"></chevron-double-up-icon>
    </a>
  </scrollactive>
</template>

<script>
import ChevronDoubleUpIcon from 'vue-material-design-icons/ChevronDoubleUp.vue';

export default {
  components: {
    ChevronDoubleUpIcon
  }
}
</script>

<style lang="scss" scoped>
a {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px;
  border: none;
  background-color: white;
  color: $site-button-dark;
  outline: none;
  transition: all 450ms ease 0ms;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background-color: $site-button-dark;
    border: 1px solid white;
    .icon-color {
      color: white;
    }
  }
}

@media screen and (max-width: 800px) {
  a {
    width: 40px;
    height: 40px;
    i {
      font-size: 40px;
    }
    bottom: 25px;
    right: 25px;
  }
}
</style>