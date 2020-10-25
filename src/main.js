import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import { Datetime } from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

export const eventemitter = new Vue()

Vue.use(Datetime)
new Vue({
  render: h => h(App)
}).$mount("#app");
