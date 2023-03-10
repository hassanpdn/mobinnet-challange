import Vue from 'vue'
import App from './App.vue'

// Custom Styles
import './assets/css/styles.scss'

Vue.config.productionTip = false

new Vue({
      render: h => h(App),
}).$mount('#app')
