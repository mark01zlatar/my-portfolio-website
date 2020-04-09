<template>
  <div class="skewed-box">
    <div class="technologies-container">
      <div class="technologies-text">
        <h2>Technologies that I use to create beautiful front-end applications</h2>
        <h3>Some of them are: HTML5, CSS3, JavaScript, Vue.js, Nuxt.js, Sass, Bootstrap, Vuetify.js, Webpack, Git & Github, etc.</h3>
      </div>
      <div class="technologies-images">
        <div class="image-box-container first">
          <image-box>
            <img
              src="@/assets/images/technologies-images/vuejs.png"
              class="technology-image"
              width="150px"
              alt
            />
            <p>Vue.js</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/nuxtjs.png"
              class="technology-image"
              width="150px"
              alt
            />
            <p>Nuxt.js</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/webpack.png"
              class="technology-image"
              width="150px"
              alt
            />
            <p>Webpack</p>
          </image-box>
        </div>
        <div class="image-box-container second">
          <image-box>
            <img
              src="@/assets/images/technologies-images/htmllogo.png"
              class="technology-image responsive-special"
              width="170px"
              alt
            />
            <p>HTML</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/csslogo.png"
              class="technology-image"
              width="130px"
              alt
            />
            <p>CSS</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/javascript.png"
              class="technology-image"
              width="120px"
              alt
            />
            <p>Javascript</p>
          </image-box>
        </div>
        <div class="image-box-container third">
          <image-box></image-box>
          <image-box></image-box>
          <image-box></image-box>
        </div>
        <div class="image-box-container fourth">
          <image-box></image-box>
          <image-box></image-box>
          <image-box></image-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageBox from '@/components/home/TechnologieImageBox'
export default {
  components: {
    ImageBox
  }
}
</script>

<style lang="scss" scoped>
.skewed-box {
  padding: 300px 0px;
  background-color: $site-gray-dark;
  transform: skew(0, -10deg);
  margin-top: 150px;
  margin-bottom: 300px;
}

.technologies-container {
  transform: skew(0, 10deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  min-height: 600px;
}

.technologies-text {
  max-width: 500px;
  h2 {
    font-size: 40px;
    //   font-weight: bold;
    margin-bottom: 30px;
  }
  h3 {
    font-size: 30px;
    font-weight: normal;
    color: $site-text-dark;
  }
}
.technologies-images {
  width: 35%;
  margin-left: 200px;
  height: auto;
  display: flex;
  align-items: center;
}

.image-box-container {
  margin-right: 30px;
}

.image-box-container.first {
  transform: translateY(-70px);
}
.image-box-container.third {
  transform: translateY(-70px);
  opacity: 0.4;
}
.image-box-container.fourth {
  opacity: 0.2;
}

@media screen and (max-width: 1400px) {
  .technologies-images {
    margin-left: 50px;
  }
}

@media screen and (max-width: 1035px) {
  .image-box-container.third,
  .image-box-container.fourth {
    display: none;
  }
  .technologies-container {
    flex-direction: column;
  }
  .technologies-images {
    margin-left: 0px;
    width: 100%;
    justify-content: center;
    margin-top: 100px;
  }
  .image-box-container.second {
    margin-right: 0px;
  }
}

@media screen and (max-width: 600px) {
  .technologies-text {
    padding: 15px;
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 20px;
    }
  }
}
</style>