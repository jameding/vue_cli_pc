//https://www.jianshu.com/p/7e98f9c44c97

import store from '../store';
export default function() {
	if (!store.state.setting.h5RemSwitch) return;
	// var devicePixelRatio = 1;
	// var scale = 1 / devicePixelRatio;
	// document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	// 7.5根据设计稿的横向分辨率/100得来
	setFontSizeByClientWidth();

	// 禁止双击放大
	document.documentElement.addEventListener(
		'touchstart',
		function(event) {
			if (event.touches.length > 1) {
				event.preventDefault();
			}
		},
		false
	);
	var lastTouchEnd = 0;
	document.documentElement.addEventListener(
		'touchend',
		function(event) {
			var now = Date.now();
			if (now - lastTouchEnd <= 300) {
				event.preventDefault();
			}
			lastTouchEnd = now;
		},
		false
	);
}

function setFontSizeByClientWidth() {
	var deviceWidth = document.documentElement.clientWidth;
	deviceWidth = deviceWidth > 750 ? 37.5 * 10 : deviceWidth;
	document.documentElement.style.fontSize = deviceWidth / 37.5 + 'px';
	window.console.log(document.documentElement.style.fontSize);
	window.onresize = () => {
		var deviceWidth = document.documentElement.clientWidth;
		deviceWidth = deviceWidth > 750 ? 37.5 * 10 : deviceWidth;
		document.documentElement.style.fontSize = deviceWidth / 37.5 + 'px';
	};
}
