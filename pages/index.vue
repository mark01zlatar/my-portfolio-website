<template>
  <div class="container">
    <landing-section></landing-section>
    <services-section></services-section>
    <about-section></about-section>
    <projects-section></projects-section>
    <technologies-section></technologies-section>
    <app-button-scroll-up></app-button-scroll-up>
  </div>
</template>

<script>
import LandingSection from '@/components/home/LandingSection'
import ServicesSection from '@/components/home/TheServicesSection'
import AboutSection from '@/components/home/TheAboutSection'
import ProjectsSection from '@/components/home/TheProjectsSection'
import AppButtonScrollUp from '@/components/shared/AppButtonScrollUp'
import TechnologiesSection from '@/components/home/TheTechnologiesSection'

export default {
  head() {
    return {
      bodyAttrs: {
        style: `overflow-y: ${
          this.$store.getters.isProjectDialogOverlay ? 'hidden' : 'scroll'
        }`
      }
    }
  },
  components: {
    LandingSection,
    ServicesSection,
    AboutSection,
    ProjectsSection,
    AppButtonScrollUp,
    TechnologiesSection
  }
}
</script>

<style>
</style>
