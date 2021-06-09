import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { googleApiKey } from './utils/api-keys'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: googleApiKey,
    libraries: 'places'
  }
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
