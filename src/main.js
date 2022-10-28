import Vue from 'vue'
import App from './App.vue'
import {router} from "./router"
import {store} from "./store/store"
import axios from "axios"

//axios.defaults.baseURL ="https://vue-gelirgider-default-rtdb.firebaseio.com/operation.json"

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
