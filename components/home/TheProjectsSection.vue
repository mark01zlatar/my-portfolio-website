<template>
  <div class="projects-section">
    <h1>Portfolio</h1>
    <project></project>
  </div>
</template>

<script>
import Project from '@/components/home/Project'

export default {
  components: {
    Project
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