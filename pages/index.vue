<template>
  <div class="container">
    <landing-section></landing-section>
    <services-section></services-section>
  </div>
</template>

<script>
import LandingSection from '@/components/home/LandingSection'
import ServicesSection from '@/components/home/TheServicesSection'

export default {
  components: {
    LandingSection,
    ServicesSection
  }
}
</script>

<style>
</style>
