<template>
  <a
    v-if="$store.getters.getLocaleLang === 'en'"
    :href="require(`~/assets/MarkoZlatarResume.pdf`)"
    download
    class="link"
  >
    <download-icon class="icon"></download-icon>
    {{ $t('links.resume') }}
  </a>
  <a v-else :href="require(`~/assets/MarkoZlatarRezime.pdf`)" download>
    <download-icon class="icon"></download-icon>
    {{ $t('links.resume') }}
  </a>
</template>

<script>
import DownloadIcon from 'vue-material-design-icons/Download.vue';

export default {
  components: {
    DownloadIcon
  }
}
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>