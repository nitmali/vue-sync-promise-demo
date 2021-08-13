import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import sync from './directive/sync/sync'
Vue.use(sync)

new Vue({
  render: h => h(App),
}).$mount('#app')
