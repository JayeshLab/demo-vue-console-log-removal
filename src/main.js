import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// This is just to check the comments
console.log('Main Application');
new Vue({
  render: h => h(App),
}).$mount('#app')
