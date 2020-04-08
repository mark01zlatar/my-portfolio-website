<template>
  <div class="projects-section">
    <h1>Portfolio</h1>
    <project v-for="(project, index) in projects" :key="index" :project="project"></project>
    <project-dialog v-if="$store.getters.isProjectDialog"></project-dialog>
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
          videoSrc: '',
          title: 'Gem Media - Social media project',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/social-media-frontend',
            site: 'https://gem-media-frontend.herokuapp.com/'
          }
        },
        {
          imgSrc: 'greatathlete.png',
          videoSrc: 'https://www.youtube.com/embed/lyMZig_bHtM',
          title: 'Great Athlete - GYM website project',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/GYM-website',
            site: 'https://objective-brattain-d22de3.netlify.com'
          }
        },
        {
          imgSrc: 'wlf-clothing.png',
          videoSrc: 'https://youtu.be/2zUESAy5e4c',
          title: 'WLF(We love fashion) Clothing - eCommerce project',
          text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione eaque corrupti veniam aut illum voluptatibus, animi aliquid explicabo quo repudiandae odio soluta optio consectetur.',
          links: {
            github: 'https://github.com/mark01Zlatar/e-commerce-frontend',
            site: 'https://gem-media-frontend.herokuapp.com/'
          }
        },
        {
          imgSrc: 'seomind.png',
          videoSrc: '',
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