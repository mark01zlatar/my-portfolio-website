import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: {
        id: 'UA-163702233-1',
      },
      bootstrap: false,
    },
    app.router
  )
}
