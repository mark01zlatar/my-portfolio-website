<template>
  <button :style="{ width, height }">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '140px'
    },
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style scoped lang="scss">
button {
  border-radius: 0px;
  border: none;
  background-color: white;
  color: $site-button-dark;
  outline: none;
  transition: all 450ms ease 0ms;
  font-size: 18px;
  font-family: RobotoMedium;
  margin: 5px 0px;
  &:hover {
    color: white;
    background-color: $site-button-dark;
    border: 1px solid white;
  }
}
</style>