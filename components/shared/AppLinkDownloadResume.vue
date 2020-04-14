<template>
  <a
    v-if="$store.getters.getLocaleLang === 'en'"
    :href="require(`~/assets/MarkoZlatarResume.pdf`)"
    download
  >
    <i class="mdi mdi-download"></i>
    {{ $t('links.resume') }}
  </a>
  <a v-else :href="require(`~/assets/MarkoZlatarRezime.pdf`)" download>
    <i class="mdi mdi-download"></i>
    {{ $t('links.resume') }}
  </a>
</template>

<script>
export default {

}
</script>

<style>
</style>