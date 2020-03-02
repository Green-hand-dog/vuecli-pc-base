import Vue from 'vue';
import Router from 'vue-router';

// 分模块路由引入
import common from "./common";
import order from "./order";
import goods from "./goods";
import login from "./login";
import test from "./test";

Vue.use(Router);

// 分模块路由设置
const router = new Router({
	base:process.env.BASE_URL,
	routes:[
		...test,
		...common,
		...order,
		...goods,
		...login,
	],
})


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router;