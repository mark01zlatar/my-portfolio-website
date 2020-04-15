<template>
  <button class="project-button" :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      default: ''
    },
    buttonClasses: {
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.project-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 55px;
  outline: none;
  border: 1px solid $site-text-dark;
  background: transparent;
  color: $site-text-dark;
  border-radius: 80px;
  margin-right: 30px;
  transition: all 300ms ease-out 0ms;
  font-family: RobotoMedium, sans-serif;
  font-size: 18px;
  padding: 0px 10px;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    color: white;
    background: $site-text-dark;
  }
}

span {
  margin-right: 10px;
}

.project-button--reverse {
  background-color: $site-text-dark;
  color: white;
  &:hover {
    color: $site-text-dark;
    background: transparent;
  }
}

.project-button--white {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  &:hover {
    color: $site-gray;
    background: white;
  }
}
</style>