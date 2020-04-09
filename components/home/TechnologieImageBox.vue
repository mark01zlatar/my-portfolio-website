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
  margin: 30px 0px;
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

@media screen and (max-width: 1300px) {
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
  .technology-image.responsive-special {
    width: 120px;
  }
}

@media screen and (max-width: 1035px) {
  .box-container {
    width: 230px;
    height: 230px;
  }
  .technology-image {
    width: 120px;
  }
  p {
    font-size: 25px;
  }
}

@media screen and (max-width: 600px) {
  .box-container {
    width: 150px;
    height: 150px;
  }
  .technology-image {
    width: 70px;
  }
  .technology-image.responsive-special {
    width: 95px;
  }
  p {
    font-size: 18px;
  }
}

@media screen and (max-width: 400px) {
  .box-container {
    width: 120px;
    height: 120px;
  }
  .technology-image {
    width: 60px;
  }
  .technology-image.responsive-special {
    width: 85px;
  }
  p {
    font-size: 14px;
  }
}
</style>