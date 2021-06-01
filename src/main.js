import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'
import './assets/styles/styles.scss'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    md: 1250,
    lg: Infinity,
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
