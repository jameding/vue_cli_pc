
/**
 * @desc 获取url参数
 * @param {String} name  想要获取的参数名字
 */
export function getQueryString(name) {
	var reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(&|$)');
	var r = window.location.href.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}
// title
export const setTitle = (title = process.env.VUE_APP_TITLE) => {
	document.title = title;
};

//处理html数据
export const processingHtmlData = str => {
	if (str) {
		return str.replace(/\n|\r\n/g, '<br/>');
	} else {
		return '';
	}
};
//判断isIPhoneX
export const isIPhoneX = () => {
	if (typeof window !== 'undefined' && window) {
		return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812;
	}
	return false;
};

/*
 * public methods by jame.d
 * 根据（时间/时间戳格）式化时间
 * 例子：formatTimeByDate(1580641846,"yyyy-MM-dd hh:mm:ss")
 * 例子：formatTimeByDate(new Date(),"yyyy-MM-dd hh:mm:ss")
 */
export const formatTimeByDate = (time, fmt) => {
	if (typeof time == 'number') {
		//如果传入的是时间戳，就将时间戳转成时间
		time = new Date(time);
	}
	var o = {
		'M+': time.getMonth() + 1, //月份
		'd+': time.getDate(), //日
		'h+': time.getHours(), //小时
		'm+': time.getMinutes(), //分
		's+': time.getSeconds(), //秒
		'q+': Math.floor((time.getMonth() + 3) / 3), //季度
		S: time.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp('(' + k + ')').test(fmt))
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
			);
	return fmt;
};
//判断是否是weixin
export const isWeixin = () => {
	//判断是否微信平台
	let ua = window.navigator.userAgent.toLowerCase();
	return ua.match(/MicroMessenger/i) == 'micromessenger';
};

//获取当前页面的路径
export const getThisPageUrl = () => {
	return window.location.origin + window.location.pathname + window.location.search;
};
