import Vue from "vue";
import vueRouter from "vue-router";
import indexVue from "./components/index/index.vue";
import productListVue from "./components/productList/productList.vue";
import newProductVue from "./components/newProduct/newProduct.vue";
import hotSalesVue from "./components/hotSales/hotSales.vue";
import specialOfferVue from "./components/specialOffer/specialOffer.vue";
import recomdationVue from "./components/recomdation/recomdation.vue";
import loginVue from "./components/login/login.vue";
import registerVue from "./components/register/register.vue";
import detailsVue from "./components/details/details.vue";
Vue.use(vueRouter);
let routes=new vueRouter({
	linkActiveClass:"nav-bg",
	routes:[
		{path:"/",redirect:{name:'index'}},
		{name:'index',path:"/index",component:indexVue},
		{name:'productList',path:"/productList",component:productListVue},
		{name:'newProduct',path:"/newProduct",component:newProductVue},
		{name:'hotSales',path:"/hotSales",component:hotSalesVue},
		{name:'specialOffer',path:"/specialOffer",component:specialOfferVue},
		{name:'recomdation',path:"/recomdation",component:recomdationVue},
		{name:'login',path:"/login",component:loginVue},
		{name:'register',path:"/register",component:registerVue},
		{name:'details',path:"/details",component:detailsVue}
	]
})
export default routes