<template>
  <div class="box-container">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.box-container {
  width: 250px;
  height: 250px;
  background-color: $site-gray-light;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px 0px;
}
.technology-image {
  filter: grayscale(100%);
}
p {
  font-size: 30px;
  letter-spacing: 4px;
  margin-top: 10px;
  color: $site-text-dark;
}

@media screen and (max-width: 1700px) {
  .box-container {
    width: 175px;
    height: 175px;
  }
  .technology-image {
    width: 90px;
  }
  p {
    font-size: 20px;
  }
}

@media screen and (max-width: 450px) {
  .box-container {
    width: 125px;
    height: 125px;
  }
  .technology-image {
    width: 60px;
  }
  p {
    font-size: 16px;
  }
}
</style>