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
            image: 'gem-media.png',
            video: 'https://www.youtube.com/embed/jHmw12dDkHY'
          },
          title: 'Gem Media - Social media project',
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
          overview:
            'To create this project, first I created setup with Webpack(module bundler). Once webpack setup is done correctly, he is responsible for fast development process and bundled minified code in production. Sass is used as css extension so i was able to to reuse css and organize it well. For all interactions with user vanilla JavaScript was used. Git and Github were used for version control.'
        },
        {
          src: {
            image: 'greatathlete.png',
            video: 'https://www.youtube.com/embed/lyMZig_bHtM'
          },
          title: 'Great Athlete - GYM website project',
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
          overview:
            'To create this project, first I used tool created by Nuxt.js team called create-nuxt-app. Nuxt.js is framework for Vue.js. In process of creating web application, for style is used Sass(Scss) and for version control is use Git & Github'
        },
        {
          src: {
            image: 'wlf-clothing.png',
            video: 'https://www.youtube.com/embed/2zUESAy5e4c'
          },
          title: 'WLF(We love fashion) Clothing - eCommerce project',
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
          overview:
            'This project was created from two separate parts - frontend and backend. For frontend I used Nuxt.js to create SSR(Server Side Render) Vue.js application. For UI i used Vuetify.js(Material Design component framework). For backend I created REST API with Node.js(Express framework). For database MongoDB(NoSQL database) is used. For  interactions with MongoDB mongoose library is used. Some of features that are implemented are: Authentication & Authorization, Payment with paypal, CMS for users and products, pagination, email interactions, AWS S3 storage... basically everything one e-commerce must have.'
        },
        {
          src: {
            image: 'seomind.png',
            video: 'https://www.youtube.com/embed/bkTLRbNk4hE'
          },
          title: 'SEO Mind - Website project',
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
          overview:
            'This project was created from two separate parts - frontend and backend. For frontend I used Nuxt.js to create SSR(Server Side Render) Vue.js application. For UI i used Vuetify.js(Material Design component framework). For backend I created REST API with Node.js(Express framework). For database MongoDB(NoSQL database) is used. For  interactions with MongoDB mongoose library is used. To implement private messaging feature Socket.io library is used .Node.js REST API is tested with Mocha.js, Chai.js, Sinon.js...Also rate-limiting is implemented.'
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