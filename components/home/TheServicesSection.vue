<template>
  <div class="services-container">
    <h1 id="services">{{ $t('home.servicesSection.title') }}</h1>
    <client-only>
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
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

  h1 {
    text-align: center;
    margin-bottom: 50px;
    font-family: RobotoThin;
    font-size: 45px;
  }
}

.slide {
  background-color: $site-gray-dark;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
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

@media screen and (max-width: 400px) {
  .carousel {
    height: 400px !important;
  }
  .slide {
    height: 400px !important;
    padding: 5px 20px;
    img {
      height: 85px;
    }
  }
}
</style>