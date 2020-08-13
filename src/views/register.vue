<template>
	<div class="position-absolute align-justify-items-clo register">
		<h1>这是登录页面</h1>
		<div @click="clickLogin" class="button align-justify-items">点击登录</div>
	</div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { setToken } from '@/utils/token';
export default {
	name: 'Home',
	components: {
		// HelloWorld
	},
	methods: {
		clickLogin() {
			//保存token到cookie里
			setToken('123');
			//去来源页面
			if (this.$route.query && this.$route.query.redirect) {
				let params = { ...this.$route.query };
				delete params.redirect; //redirect字段是进入字段，也没啥用了
				delete params.token; //因为token已经失效，如果路径里有token，直接删掉
				this.$router.replace({
					path: this.$route.query.redirect,
					query: params
				});
			} else {
				console.log('来由来源页面，去首页面');
				this.$router.go(-1);
			}
		}
	},
	created() {}
};
</script>
<style scoped lang="less">
.register {
	padding: 30px;
	// align-items: flex-start;
	font-size: 22px;
	.button {
		border: 1px solid gray;
		padding: 5px 10px;
		margin-top: 19px;
		border-radius: 10px;
		font-size: 16px;
	}
}
</style>
