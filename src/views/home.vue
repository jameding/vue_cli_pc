<template>
	<div class="position-absolute align-justify-items-clo">
		<router-link class="title" to="/register">去登录</router-link>
		<router-link class="title" to="/user">去个人中心</router-link>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import { jkGoodsDetailInfo } from '../server/index';
export default {
	name: 'Home',
	components: {
		// HelloWorld
	},
	methods: {
		//获取活动详情
		// async jkGoodsDetailInfo() {
		// 	this.loading = true;
		// 	try {
		// 		//列出要查询的数据
		// 		let res = await jkGoodsDetailInfo(5);
		// 		this.loading = false;
		// 		console.log('落地页详情', res);
		// 	} catch (e) {
		// 		this.loading = false;
		// 		console.log('查询错误了', e);
		// 	}
		// }
	},
	created() {
		// this.jkGoodsDetailInfo();
	}
};
</script>
<style scoped lang="less">
.title {
	margin-left: 30px;
	font-size: 20px;
	line-height: 36px;
	display: table;
	&:hover {
		color: red;
	}
}
</style>
