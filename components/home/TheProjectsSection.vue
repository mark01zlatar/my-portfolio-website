<template>
  <div class="projects-section">
    <h1>Portfolio</h1>
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
          imgSrc: 'gem-media.png',
          videoSrc: 'https://www.youtube.com/embed/jHmw12dDkHY',
          title: 'Gem Media - Social media project',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/social-media-frontend',
            site: 'https://gem-media-frontend.herokuapp.com/'
          },
          technologies: [],
          overview: ''
        },
        {
          imgSrc: 'greatathlete.png',
          videoSrc: 'https://www.youtube.com/embed/lyMZig_bHtM',
          title: 'Great Athlete - GYM website project',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/GYM-website',
            site: 'https://objective-brattain-d22de3.netlify.com'
          },
          technologies: [],
          overview: ''
        },
        {
          imgSrc: 'wlf-clothing.png',
          videoSrc: 'https://www.youtube.com/embed/2zUESAy5e4c',
          title: 'WLF(We love fashion) Clothing - eCommerce project',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/e-commerce-frontend',
            site: 'https://gem-media-frontend.herokuapp.com/'
          },
          technologies: [],
          overview: ''
        },
        {
          imgSrc: 'seomind.png',
          videoSrc: 'https://www.youtube.com/embed/bkTLRbNk4hE',
          title: 'SEO Mind - Website project',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/SEO-Mind-website',
            site: 'https://mystifying-perlman-1f895e.netlify.com'
          },
          technologies: [],
          overview: ''
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