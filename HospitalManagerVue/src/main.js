/*
 * @Description: 
 * @Author: Rabbiter
 * @Date: 2023-01-14 20:02:29
 */
import Vue from "vue";
import App from "./App.vue";
import './assets/font/iconfont.css'
import router from "./router";
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
