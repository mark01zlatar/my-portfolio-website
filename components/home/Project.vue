<template>
  <div class="project-container">
    <img width="700px" :src="require(`@/assets/images/${project.src}`)" :alt="project.title" />
    <div class="project-text">
      <h1>{{ project.title }}</h1>
      <p>{{ project.text }}</p>
      <div>
        <button class="project-button project-button--one">
          <i class="mdi mdi-eye"></i> View more
        </button>
        <a :href="project.links.github" target="_blank" class="project-button">
          <i class="mdi mdi-github"></i> Source code
        </a>
        <a :href="project.links.site" target="_blank" class="project-button project-button--three">
          <i class="mdi mdi-search-web"></i> Visit site
        </a>
      </div>
    </div>
    <hr class="horizontal-line" />
  </div>
</template>

<script>
export default {
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
  }
}

.project-text {
  margin-left: 35px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  max-width: 600px;
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

.mdi {
  font-size: 25px;
}

.project-button {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 165px;
  height: 55px;
  outline: none;
  border: 1px solid $site-text-dark;
  background: transparent;
  color: $site-text-dark;
  border-radius: 80px;
  margin-right: 30px;
  transition: all 300ms ease-out 0ms;
  font-family: RobotoMedium;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: white;
    background: $site-text-dark;
  }
}

.project-button--one {
  background-color: $site-text-dark;
  color: white;
  &:hover {
    color: $site-text-dark;
    background: transparent;
  }
}

.project-button--three {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  &:hover {
    color: $site-gray;
    background: white;
  }
}

@media screen and (max-width: 1200px) {
}
</style>