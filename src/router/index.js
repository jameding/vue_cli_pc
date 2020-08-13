import Vue from 'vue';
import VueRouter from 'vue-router';
import { setTitle } from '../utils/utils';
import { getToken } from '../utils/token';

Vue.use(VueRouter);

let routes = [
	{
		path: '/',
		name: 'home',
		meta: {
			title: '首页'
		},
		component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
	},
	{
		path: '/user',
		name: 'user',
		props: true,
		meta: {
			requireAuth: true,
			title: 'IELTS SpeakUP'
		},
		component: () => import(/* webpackChunkName: "user" */ '../views/user.vue')
	},
	{
		path: '/register',
		name: 'register',
		meta: {
			title: '登录'
		},
		component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
	}
];

/**
 * 查询模块,自动引入modules下边的所有路由模块
 */
let contexts = require.context('./modules', true, /\.js$/);
contexts.keys().forEach(routers => {
	// 获取路由模块数组
	let routersEntity = contexts(routers).default;
	// 直接合并数组，如果有重复，系统会抛出错误，在这里就不判断了
	routes = routes.concat(routersEntity.routes);
});

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		console.log(from);
		if (savedPosition) {
			return savedPosition;
		} else {
			return {
				x: 0,
				y: 0
			};
		}
	}
});

router.beforeEach((to, from, next) => {
	let token = getToken();
	if (to.path === '/register') {
		next();
	} else {
		if (to.matched.some(record => record.meta.requireAuth)) {
			console.log('---------');
			// 判断该路由是否需要登录权限
			if (token) {
				// 判断当前的token是否存在
				next();
			} else {
				// 没有token
				next({
					path: '/register',
					query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
				});
			}
		} else {
			// 不需要验证的路由直接放行
			next();
		}
	}
});

router.afterEach(to => {
	// 更改标题
	setTitle(to.meta.title);
});

export default router;
