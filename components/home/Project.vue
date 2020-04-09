<template>
  <div class="project-container">
    <img width="700px" :src="require(`@/assets/images/${project.src.image}`)" :alt="project.title" />
    <div class="project-text">
      <h1>{{ project.title }}</h1>
      <div>
        <span @click="$store.dispatch('openDialog', project)">
          <project-button text="View more" icon="mdi-eye" buttonClasses="project-button--reverse"></project-button>
        </span>

        <a :href="project.links.github" target="_blank">
          <project-button text="Source code" icon="mdi-github"></project-button>
        </a>
        <a :href="project.links.site" target="_blank">
          <project-button
            text="Visit site"
            icon="mdi-search-web"
            bordercolor="white"
            buttonClasses="project-button--white"
          ></project-button>
        </a>
      </div>
    </div>
    <hr class="horizontal-line" />
  </div>
</template>

<script>
import ProjectButton from '@/components/home/ProjectButton'

export default {
  components: {
    ProjectButton
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.horizontal-line {
  position: absolute;
  width: 80%;
  bottom: 30px;
  background-color: $site-text-dark;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    $site-gray,
    $site-text-dark,
    $site-gray
  );
}

.project-container {
  position: relative;
  height: 550px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  img {
    margin-right: 35px;
    width: 700px;
  }
}

.project-text {
  margin-left: 35px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  max-width: 630px;
  h1 {
    margin-bottom: 40px;
    word-wrap: break-word !important;
    white-space: pre-wrap;
    word-break: keep-all;
  }

  p {
    margin-bottom: 40px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: left;
  }
}

// .mdi {
//   font-size: 25px;
// }

// .project-button {
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   width: 165px;
//   height: 55px;
//   outline: none;
//   border: 1px solid $site-text-dark;
//   background: transparent;
//   color: $site-text-dark;
//   border-radius: 80px;
//   margin-right: 30px;
//   transition: all 300ms ease-out 0ms;
//   font-family: RobotoMedium;
//   font-size: 18px;
//   cursor: pointer;
//   margin-top: 5px;
//   &:hover {
//     color: white;
//     background: $site-text-dark;
//   }
// }

// .project-button--one {
//   background-color: $site-text-dark;
//   color: white;
//   &:hover {
//     color: $site-text-dark;
//     background: transparent;
//   }
// }

// .project-button--three {
//   background-color: transparent;
//   color: white;
//   border: 1px solid white;
//   &:hover {
//     color: $site-gray;
//     background: white;
//   }
// }

@media screen and (max-width: 1450px) {
  .horizontal-line {
    bottom: -30px;
  }
  .project-container {
    height: auto;
    flex-direction: column;
    margin-bottom: 100px;
    img {
      margin-right: 0px;
    }
  }

  .project-text {
    margin-left: 0px;
    div {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
}

@media screen and (max-width: 750px) {
  .project-container {
    img {
      width: 90%;
    }
  }
  .project-text {
    padding: 0px 10px;
    h1 {
      font-size: 25px;
    }
  }
}
</style>