<template>
  <div class="container">
    <landing-section></landing-section>
    <services-section></services-section>
    <about-section></about-section>
  </div>
</template>

<script>
import LandingSection from '@/components/home/LandingSection'
import ServicesSection from '@/components/home/TheServicesSection'
import AboutSection from '@/components/home/TheAboutSection'

export default {
  components: {
    LandingSection,
    ServicesSection,
    AboutSection
  }
}
</script>

<style>
</style>
