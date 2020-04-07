<template>
  <div class="projects-section">
    <h1>Portfolio</h1>
    <project v-for="(project, index) in projects" :key="index" :project="project"></project>
  </div>
</template>

<script>
import Project from '@/components/home/Project'

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          src: 'gem-media.png',
          title: 'Gem Media - Social media project',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/social-media-frontend',
            site: 'https://gem-media-frontend.herokuapp.com/'
          }
        },
        {
          src: 'greatathlete.png',
          title: 'Great Athlete - GYM website project',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/GYM-website',
            site: 'https://objective-brattain-d22de3.netlify.com'
          }
        },
        {
          src: 'wlf-clothing.png',
          title: 'WLF(We love fashion) Clothing - eCommerce project',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/e-commerce-frontend',
            site: 'https://gem-media-frontend.herokuapp.com/'
          }
        },
        {
          src: 'seomind.png',
          title: 'SEO Mind - Website project',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/SEO-Mind-website',
            site: 'https://mystifying-perlman-1f895e.netlify.com'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-section {
  padding: 150px 0px;
  margin-top: 150px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h1 {
    letter-spacing: 2px;
    font-size: 50px;
    margin-bottom: 30px;
  }
}
</style>