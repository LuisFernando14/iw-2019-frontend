import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Notifications from 'vue-notification'
import ToggleButton from 'vue-js-toggle-button'
import ActionHub from './hubs/action-hub.js'
// https://stackoverflow.com/questions/36823343/how-do-i-set-profile-image-as-first-letters-of-first-and-last-name

Vue.config.productionTip = false
// Setup axios as the Vue default $http library
axios.defaults.baseURL = 'https://smarthouse48.azurewebsites.net' // same as the Url the server listens to
Vue.prototype.$http = axios
Vue.use(Notifications)
Vue.use(ToggleButton)
Vue.use(ActionHub)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
