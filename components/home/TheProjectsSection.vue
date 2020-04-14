<template>
  <div class="projects-section">
    <h1 id="portfolio">Portfolio</h1>
    <project v-for="(project, index) in projects" :key="index" :project="project"></project>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="$store.commit('SET_PROJECT_DIALOG_CONTENT', true)"
    >
      <project-dialog v-if="$store.getters.isProjectDialogOverlay"></project-dialog>
    </transition>
  </div>
</template>

<script>
import Project from '@/components/home/Project'
import ProjectDialog from '@/components/home/ProjectDialog'

export default {
  components: {
    Project,
    ProjectDialog
  },
  data() {
    return {
      projects: [
        {
          src: {
            image: 'gem-media.webp',
            video: 'https://www.youtube.com/embed/jHmw12dDkHY'
          },
          title: this.$t('home.projectsSection.gemMedia.title'),
          links: {
            github: 'https://github.com/mark01Zlatar/social-media-frontend',
            site: 'https://gem-media-frontend.herokuapp.com/'
          },
          technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'SASS(SCSS)',
            'Webpack',
            'Git',
            'Github'
          ],
          overview: this.$t('home.projectsSection.gemMedia.overview')
        },
        {
          src: {
            image: 'greatathlete.webp',
            video: 'https://www.youtube.com/embed/lyMZig_bHtM'
          },
          title: this.$t('home.projectsSection.greatAthlete.title'),
          links: {
            github: 'https://github.com/mark01Zlatar/GYM-website',
            site: 'https://objective-brattain-d22de3.netlify.com'
          },
          technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'SASS(SCSS)',
            'Vue.js',
            'Nuxt.js',
            'Git',
            'Github'
          ],
          overview: this.$t('home.projectsSection.greatAthlete.overview')
        },
        {
          src: {
            image: 'wlf-clothing.webp',
            video: 'https://www.youtube.com/embed/2zUESAy5e4c'
          },
          title: this.$t('home.projectsSection.wlfClothing.title'),
          links: {
            github: 'https://github.com/mark01Zlatar/e-commerce-frontend',
            site: 'https://gem-media-frontend.herokuapp.com/'
          },
          technologies: [
            'HTML5',
            'CSS3',
            'JavaScript ',
            'SASS(SCSS)',
            'Vue.js',
            'Nuxt.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Mongoose',
            'AWS-SDK',
            'Paypal API',
            'JWT',
            'SendGrid API',
            'Git',
            'Github'
          ],
          overview: this.$t('home.projectsSection.wlfClothing.overview')
        },
        {
          src: {
            image: 'seomind.webp',
            video: 'https://www.youtube.com/embed/bkTLRbNk4hE'
          },
          title: this.$t('home.projectsSection.seoMind.title'),
          links: {
            github: 'https://github.com/mark01Zlatar/SEO-Mind-website',
            site: 'https://mystifying-perlman-1f895e.netlify.com'
          },
          technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'SASS(SCSS)',
            'Vue.js',
            'Nuxt.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Mongoose',
            'AWS-SDK',
            'Socket.io',
            'JWT',
            'Git',
            'Github'
          ],
          overview: this.$t('home.projectsSection.seoMind.overview')
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

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 250ms ease 0ms;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 250ms ease 250ms;
}
.fade-leave-to {
  opacity: 0;
}
</style>