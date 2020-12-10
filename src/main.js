import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import pageTitle from '@/tools/page-title'
import '@/assets/scss/main.scss'

Vue.mixin(pageTitle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
