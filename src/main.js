import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import index from "vuex";
Vue.use(index);
Vue.prototype.$axios = axios
Vue.use(ElementUI)



axios.defaults.baseURL = '/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
