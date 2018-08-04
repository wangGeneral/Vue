import Vue from "vue";
import mintUi from "mint-ui";
import Axios from "axios";
import "mint-ui/lib/style.css";
//import "./dist/css/mui.css";
import "./css/bootstrap.css";
import app from "./components/home.vue";
import headerVue from "./components/public/header.vue";
import navVue from "./components/public/nav.vue";
import footerVue from "./components/public/footer.vue";
import listVue from "./components/public/list.vue";
import router from "./routeConfig.js";
Vue.use(mintUi);
Vue.prototype.$AJAX=Axios;
Vue.component("headerVue",headerVue);
Vue.component("navVue",navVue);
Vue.component("footerVue",footerVue);
Vue.component("listVue",listVue);
new Vue({
	el:"#box",
	router,
	render:(c)=>c(app)
})