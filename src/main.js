import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { getQueryString, setTitle } from './utils/utils';
import { setToken } from './utils/token';
// 全局过滤器
import * as filters from './filter';

// --** 设置token **--
const token = getQueryString('token');
if (token) {
	setToken(token);
}

// --** 设置根rem以及相关配置,  H5的网站的时候可以打开 **--
import remAndPhoneConfig from './utils/remConfig';
remAndPhoneConfig();

// --** 添加全局样式 **--
import './style/main.less';

// --** 如果是非线上环境，加载 VConsole **--
import VConsole from 'vconsole';
if (process.env.VUE_APP_ENV == 'test') {
	new VConsole();
	//开启性能追踪
	Vue.config.performance = true;
}

// --** 注册常用方法 **--
Vue.prototype.$setTitle = setTitle; //设置页面的标题

// --** 过滤器安装 **--
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

console.log('当前环境', process.env.VUE_APP_ENV);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
