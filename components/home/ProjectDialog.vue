<template>
  <div
    @click.stop.self="$store.commit('SET_PROJECT_DIALOG_CONTENT', false)"
    class="overlay"
    key="dialog-overlay"
  >
    <transition
      name="scale"
      mode="out-in"
      @before-leave="$store.commit('SET_PROJECT_DIALOG_OVERLAY', false)"
    >
      <div v-if="$store.getters.isProjectDialogContent" class="dialog" key="dialog">
        <close-icon class="close-icon" @click="$store.commit('SET_PROJECT_DIALOG_CONTENT', false)"></close-icon>
        <h2>{{ getProjectDialogData.title }}</h2>
        <div class="dialog-box-1">
          <iframe
            class="dialog-video"
            :src="getProjectDialogData.src.video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="dialog-technologies">
            <h3>{{ $t('home.projectsSection.dialogTechnologies') }}</h3>
            <ul>
              <li
                v-for="(technologie, index) in getProjectDialogData.technologies"
                :key="index"
              >{{ technologie }}</li>
            </ul>
            <div>
              <a :href="getProjectDialogData.links.github" target="_blank">
                <project-button>
                  <github-icon></github-icon>
                  {{ $t('links.sourceCode') }}
                </project-button>
              </a>
              <a :href="getProjectDialogData.links.site" target="_blank">
                <project-button bordercolor="white" buttonClasses="project-button--white">
                  <search-web-icon></search-web-icon>
                  {{ $t('links.visitSite') }}
                </project-button>
              </a>
            </div>
          </div>
        </div>
        <div class="dialog-overview">
          <h3>{{ $t('home.projectsSection.dialogOverview') }}</h3>
          <p>{{ getProjectDialogData.overview }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ProjectButton from '@/components/home/ProjectButton'
import CloseIcon from "vue-material-design-icons/Close.vue"
import SearchWebIcon from "vue-material-design-icons/SearchWeb.vue"
import GithubIcon from "vue-material-design-icons/Github.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ProjectButton,
    CloseIcon,
    SearchWebIcon,
    GithubIcon
  },
  computed: {
    ...mapGetters({
      getProjectDialogData: 'getProjectDialogData'
    })
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
    // })
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
  position: fixed;
  top: 0px;
  left: 0px;
}

.dialog {
  position: relative;
  width: 80%;
  height: 75vh;
  max-height: 75vh;
  background-color: $site-gray-dark;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px;
  .dialog-box-1 {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 30px 0px;
  }
  h2 {
    font-size: 30px;
    margin: 30px 0px;
  }
  h3 {
    font-weight: normal;
    margin-bottom: 30px;
  }
  p {
    color: $site-text-dark;
  }
}

.dialog-video {
  margin-right: 60px;
  width: 600px;
  height: 338px;
}

.dialog-technologies {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  width: 400px;
  max-width: 400px;
  margin-left: 60px;
  ul {
    li {
      color: $site-text-dark;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 30px;
  }
}

.dialog-overview {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  max-width: 600px;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 100;
}

.scale-enter {
  transform: scale(0);
}
.scale-enter-active {
  transition: transform 250ms ease-in 0ms;
}
.scale-enter-to {
  transform: scale(1);
}
.scale-leave {
  transform: scale(1);
}
.scale-leave-active {
  transition: transform 250ms ease-out 0ms;
}
.scale-leave-to {
  transform: scale(0);
}

@media screen and(max-width: 1500px) {
  .dialog-video {
    margin-right: 30px;
  }
  .dialog-technologies {
    margin-left: 30px;
    width: 300px;
  }
}

@media screen and(max-width: 1300px) {
  .dialog {
    .dialog-box-1 {
      flex-direction: column;
    }
  }
  .dialog-video {
    margin-right: 0px;
  }
  .dialog-technologies {
    margin-left: 0px;
    margin-top: 30px;
    width: 100%;
  }
}

@media screen and(max-width: 800px) {
  .dialog {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    padding: 30px 5px;
  }
}

@media screen and(max-width: 600px) {
  .dialog-video {
    max-width: 100%;
  }
  .dialog-overview {
    align-items: flex-start;
    text-align: left;
  }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $site-gray;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $site-text-dark;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>