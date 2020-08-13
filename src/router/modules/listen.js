// 听力的需求
const routes = [
	// 点选模式
	{
		path: '/listen/training',
		name: 'training',
		props: true,
		component: () => import(/* webpackChunkName: "training" */ '../../views/user.vue')
	}
];
export default {
	routes
};
