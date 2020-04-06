<template>
  <div class="services-container">
    <h1>Some of my services</h1>
    <client-only>
      <carousel-3d class="carousel" :controls-visible="true" width="530" height="360">
        <slide class="slide" v-for="slide in slides" :key="slide.index" :index="slide.index">
          <img
            height="100"
            :src="require(`@/assets/icons-services/${slide.src}`)"
            :alt="slide.title + ' icon'"
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
          title: 'Mobile-friendly',
          text:
            'A responsive design makes your website accessible to all users, regardless of their device.'
        },
        {
          index: 1,
          src: 'checklist.svg',
          title: 'Website Audits',
          text:
            'Looking to improve your page performance, SEO, or user experience? Request a free site audit.'
        },
        {
          index: 2,
          src: 'contract.svg',
          title: 'CMS(Content-Management-System)',
          text: 'Easily update content without knowing how to code.'
        },
        {
          index: 3,
          src: 'data.svg',
          title: 'Design + Development',
          text:
            'Clean, modern designs - optimized for performance, search engines, and converting users to customers.'
        },
        {
          index: 4,
          src: 'shopping-cart.svg',
          title: 'eCommerce',
          text:
            'Integration of eCommerce platforms, payment gateways, custom product templates, and more.'
        },
        {
          index: 5,
          src: 'analytics.svg',
          title: 'Analytics',
          text:
            'Get insights into who is browsing your site so that you can make smarter business decisions.'
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