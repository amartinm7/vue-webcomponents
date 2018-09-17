import Vue from 'vue'
import App from './App.vue'
Vue.config.ignoredElements = [
  'x-carousel','x-ticking-paragraph','x-simple-carousel'
]
new Vue({
  el: '#app',
  render: h => h(App)
})
