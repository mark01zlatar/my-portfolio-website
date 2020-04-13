<template>
  <div class="skewed-box">
    <div class="technologies-container">
      <h1 id="technologies">{{ $t('home.technologiesSection.title') }}</h1>
      <div class="technologies-text">
        <div>
          <h2>{{ $t('home.technologiesSection.frontend.title') }}</h2>
          <h3>{{ $t('home.technologiesSection.frontend.subtitle') }}</h3>
        </div>
      </div>
      <div class="technologies-images">
        <div class="image-box-container first">
          <image-box>
            <img
              src="@/assets/images/technologies-images/vuejs.png"
              class="technology-image"
              width="150px"
              alt="Vue.js logo image"
            />
            <p>Vue.js</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/nuxtjs.png"
              class="technology-image"
              width="150px"
              alt="Nuxt.js logo image"
            />
            <p>Nuxt.js</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/webpack.png"
              class="technology-image"
              width="150px"
              alt="Webpack logo image"
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
              alt="HTML logo image"
            />
            <p>HTML</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/csslogo.png"
              class="technology-image"
              width="130px"
              alt="CSS logo image"
            />
            <p>CSS</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/javascript.png"
              class="technology-image"
              width="120px"
              alt="JavaScript logo image"
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

    <div class="technologies-container technologies-container-backend">
      <div class="technologies-images-backend">
        <div class="image-box-container fourth">
          <image-box></image-box>
          <image-box></image-box>
          <image-box></image-box>
        </div>
        <div class="image-box-container third">
          <image-box></image-box>
          <image-box></image-box>
          <image-box></image-box>
        </div>
        <div class="image-box-container image-box-container-backend second">
          <image-box>
            <img
              src="@/assets/images/technologies-images/socketio.png"
              class="technology-image"
              width="150px"
              alt="Socket.io logo image"
            />
            <p>Socket.io</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/graphql.png"
              class="technology-image"
              width="150px"
              alt="GraphQL logo image"
            />
            <p>GraphQL</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/express.png"
              class="technology-image"
              width="150px"
              alt="Express framework logo image"
            />
            <p>Express.js</p>
          </image-box>
        </div>
        <div class="image-box-container image-box-container-backend first">
          <image-box>
            <img
              src="@/assets/images/technologies-images/nodejs.png"
              class="technology-image responsive-special"
              width="170px"
              alt="Node.js logo image"
            />
            <p>Node.js</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/mongodb.png"
              class="technology-image"
              width="130px"
              alt="MongoDB logo image"
            />
            <p>MongoDB</p>
          </image-box>
          <image-box>
            <img
              src="@/assets/images/technologies-images/mysql.png"
              class="technology-image"
              width="150px"
              alt="MySQL logo image"
            />
            <p>MySQL</p>
          </image-box>
        </div>
      </div>
      <div class="technologies-text">
        <div>
          <h2>{{ $t('home.technologiesSection.backend.title') }}</h2>
          <h3>{{ $t('home.technologiesSection.backend.subtitle') }}</h3>
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
  padding: 400px 0px 300px 0px;
  background-color: $site-gray-dark;
  transform: skew(0, -10deg);
  margin-top: 150px;
  margin-bottom: 300px;
  overflow: hidden;
  position: relative;
}

.technologies-container {
  transform: skew(0, 10deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  min-height: 600px;

  & > h1 {
    font-size: 40px;
    position: absolute;
    top: -180px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.technologies-container-backend {
  margin-top: 200px;
}

.technologies-text {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  div {
    padding: 0px 30px;
    max-width: 600px;
  }
}
.technologies-images {
  width: 60%;
  display: flex;
  justify-content: flex-end;
  transform: translateX(80px);
}

.technologies-images-backend {
  width: 60%;
  display: flex;
  justify-content: flex-start;
  transform: translateX(-80px);
}

.image-box-container {
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-box-container.first,
.image-box-container.third {
  transform: translateY(-70px);
}

.image-box-container.third {
  opacity: 0.4;
}
.image-box-container.fourth {
  opacity: 0.2;
}

@media screen and (max-width: 1250px) {
  .technologies-container {
    flex-direction: column;
  }
  .technologies-images-backend {
    order: 2;
  }
  .image-box-container.second {
    margin-right: 0px;
  }
  .image-box-container-backend.first {
    margin-right: 0px;
  }
  .image-box-container-backend.second {
    margin-right: 30px;
  }
  .technologies-images,
  .technologies-images-backend {
    width: 100%;
    transform: translateX(0px);
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  .technologies-text {
    width: 100%;
    text-align: center;
  }
  .image-box-container.third,
  .image-box-container.fourth {
    display: none;
  }
}

@media screen and (max-width: 450px) {
  .technologies-text {
    div {
      padding: 15px;
    }
    h2 {
      font-size: 25px;
    }
    h3 {
      font-size: 20px;
    }
  }
}
</style>