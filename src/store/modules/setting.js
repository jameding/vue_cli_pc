const getDefaultState = () => {
	return {
		h5RemSwitch: false, //是否开启h5开发模块，默认rem = 10px = 375px，默认关闭
		scrollSwitch: false, //是否开启页面滚动监听，默认关闭
		scrollTop: 0, //页面的scrollTop
		windowChange: true, //是否开启页面窗口变动监听，默认关闭
		windowHeight: 0, //页面高度
		windowWidth: 0 //页面宽度
	};
};

const state = getDefaultState();

const mutations = {
	//监听页面滚动
	linsenerScrollTop(state) {
		if (state.scrollSwitch) {
			window.onscroll = () => {
				state.scrollTop = document.documentElement.scrollTop;
				window.console.log(state.scrollTop);
			};
		}
	},
	//获取以及监听屏幕高度变化
	lisenerWindowChange(state) {
		state.windowHeight = `${document.documentElement.clientHeight}`;
		state.windowWidth = `${document.documentElement.clientWidth}`;
		if (state.windowChange) {
			window.console.log('监听变化时间');
			window.onresize = () => {
				state.windowHeight = `${document.documentElement.clientHeight}`;
				state.windowWidth = `${document.documentElement.clientWidth}`;
				window.console.log('变了', state.windowWidth);
			};
		}
	}
};
const getters = {};
const actions = {};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};
