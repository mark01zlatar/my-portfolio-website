<template>
  <div class="services-container">
    <h1 id="services">{{ $t('home.servicesSection.title') }}</h1>
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides" :key="slide.index">
          <img
            height="100"
            :src="require(`@/assets/icons/services/${slide.src}`)"
            :alt="slide.title + ' - service image'"
          />
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.text }}</p>
        </div>
      </div>
    </div>
    <!-- <client-only>
      <carousel-3d class="carousel" :controls-visible="true" width="530" height="360">
        <slide class="slide" v-for="slide in slides" :key="slide.index" :index="slide.index">
          <img
            height="100"
            :src="require(`@/assets/icons/services/${slide.src}`)"
            :alt="slide.title + ' - service image'"
          />
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.text }}</p>
        </slide>
      </carousel-3d>
    </client-only>-->
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';

export default {
   directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
          loop: true,
          preventClicksPropagation: false,
          noSwiping: false
      },
      slides: [
        {
          index: 0,
          src: 'responsive.svg',
          title: this.$t('home.servicesSection.mobileFriendly.title'),
          text: this.$t('home.servicesSection.mobileFriendly.text')
        },
        {
          index: 1,
          src: 'checklist.svg',
          title: this.$t('home.servicesSection.websiteAudits.title'),
          text: this.$t('home.servicesSection.websiteAudits.text')
        },
        {
          index: 2,
          src: 'contract.svg',
          title: this.$t('home.servicesSection.cms.title'),
          text: this.$t('home.servicesSection.cms.text')
        },
        {
          index: 3,
          src: 'data.svg',
          title: this.$t('home.servicesSection.designDevelopment.title'),
          text: this.$t('home.servicesSection.designDevelopment.text')
        },
        {
          index: 4,
          src: 'shopping-cart.svg',
          title: this.$t('home.servicesSection.eCommerce.title'),
          text: this.$t('home.servicesSection.eCommerce.text')
        },
        {
          index: 5,
          src: 'analytics.svg',
          title: this.$t('home.servicesSection.analytics.title'),
          text: this.$t('home.servicesSection.analytics.text')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.services-container {
  background: $site-gray;
  padding: 150px 0px 150px 0px;
  color: white;
  position: relative;
  width: 100%;
  margin: 0px auto;
  h1 {
    text-align: center;
    margin-bottom: 50px;
    font-family: RobotoThin;
    font-size: 45px;
  }
}

.swiper-wrapper {
  width: 100%;
  height: 500px;
  .swiper-slide {
    background-color: $site-gray-dark;
    width: 500px;
    height: 330px;
    margin: auto 0px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 25px;
    text-align: center;
    img {
      margin-bottom: 30px;
    }
    h3 {
      font-family: RobotoRegular;
      margin-bottom: 15px;
    }
    p {
      font-family: RobotoThin;
    }
  }
}

@media screen and (max-width: 500px) {
  .swiper-wrapper {
    .swiper-slide {
      height: 450px;
      width: 100%;
    }
  }
}
</style>