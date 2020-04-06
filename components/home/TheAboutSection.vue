<template>
  <div class="skewed-box">
    <div class="about-me-container">
      <div class="about-me-image-box">
        <img src="@/assets/images/markozlatar.jpg" height="500px" alt="Marko Zlatar" />
      </div>
      <div class="about-me-text">
        <h2>Who Am I</h2>
        <h1>Marko Zlatar</h1>
        <p>
          I was never the best at school or academics, I’m just a super curious guy. I spend a lot of time building websites and web apps, but there’s also a lot more to it.
          Also I spent at least one hour a day working out or having some physical activity - for me health is most important thing, and then comes everything else.
        </p>
        <p>I started my journey as a self-taught web and software developer in second year of High School. Ever since I have fallen in love with programming and spend most of my days taking my craft and skills to the next level.</p>
        <p>
          Nowadays I tend to code all of my projects from scratch in order to deliver a unique experience to every company.
          I spend my free time learning and using what i learn by building new and challenging projects.
        </p>
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