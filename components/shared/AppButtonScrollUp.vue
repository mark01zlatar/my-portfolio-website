<template>
  <button>
    <i class="mdi mdi-chevron-double-up"></i>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
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
  i {
    font-size: 55px;
  }
  &:hover {
    background-color: $site-button-dark;
    border: 1px solid white;
    i {
      color: white;
    }
  }
}
</style>