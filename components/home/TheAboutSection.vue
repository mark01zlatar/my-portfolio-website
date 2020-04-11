<template>
  <div class="skewed-box">
    <div class="about-me-container">
      <div class="about-me-image-box">
        <img src="@/assets/images/markozlatar.jpg" height="500px" alt="Marko Zlatar" />
      </div>
      <div class="about-me-text">
        <h2 id="about-me">{{ $t('home.about.title') }}</h2>
        <h1>Marko Zlatar</h1>
        <p>{{ $t('home.aboutSection.firstPara') }}</p>
        <p>{{ $t('home.aboutSection.secondPara') }}</p>
        <p>{{ $t('home.aboutSection.thirdPara') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.skewed-box {
  padding: 300px 0px;
  background-color: $site-gray-dark;
  transform: skew(0, -10deg);
  margin-top: 150px;
}
.about-me-container {
  transform: skew(0, 10deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.about-me-image-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 60px;
  img {
    z-index: 1;
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: $site-gray;
    top: -50px;
    left: -50px;
  }
}

.about-me-text {
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  min-width: 280px;
  max-width: 400px;
  margin-left: 60px;
  h2 {
    font-size: 35px;
  }
  h1 {
    font-size: 45px;
    margin-top: 30px;
  }
  p {
    margin: 20px 0px;
    font-size: 22px;
    color: $site-text-dark;
    font-family: RobotoRegular;
  }
}

@media screen and (max-width: 1000px) {
  .about-me-container {
    flex-direction: column;
  }
  .about-me-image-box {
    margin: 0px;
  }
  .about-me-text {
    margin: 30px 0px 0px 0px;
    width: 100%;
    max-width: none;
    padding: 10px;
    p {
      width: 100%;
    }
  }
}
</style>