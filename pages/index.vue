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
  name: 'index',
  head() {
    return {
      bodyAttrs: {
        style: `overflow-y: ${
          this.$store.getters.isProjectDialogOverlay ? 'hidden' : 'scroll'
        }`
      },
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Marko Zlatar - Self taught software and web developer. I tend to code all of my projects from scratch in order to deliver a unique experience to every company. I spend my free time learning and using what i learn by building new and challenging projects.'
        }
      ],
      noscript: [{ innerHTML: 'Body No Scripts', body: true }]
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
