<template>
	<router-view />
</template>
<script>
export default {
	created() {
		//调用去开启页面滚动监听，默认是关闭的，在vuex.setting中设置
		this.$store.commit('setting/linsenerScrollTop');
		//调用去开启页面窗口变化监听，默认监听是关闭的，在vuex.setting中设置
		this.$store.commit('setting/lisenerWindowChange');
	}
};
</script>
