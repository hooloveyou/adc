import Vue from 'vue'
import Router from "vue-router"
Vue.use(Router)
import all from "./all";
import hero from "./hero";
import king from "./king";

export default new Router({
  routes: [
   all,
   hero,
   king
  ]
})
