// 基础路径 注意发布之前要先修改这里 /lanjinrong-website-manager/manager/api/v1/
// const baseUrl = 'listeningWeb' //二级目录设置
const CompressionWebpackPlugin = require('compression-webpack-plugin');

let env = process.env.VUE_APP_ENV;
console.log('========================');
console.log('当前环境：', env);
console.log('打包文件夹：', 'dist');
// console.log('打包文件夹：', process.env.BASE_URL.substring(1,process.env.BASE_URL.length))
console.log('========================');

module.exports = {
	// publicPath: process.env.BASE_URL, // 根据你的实际情况更改这里
	lintOnSave: false,
	// devServer: {
	//     publicPath: process.env.BASE_URL, // 和 baseUrl 保持一致
	//     open: true, // 是否自动打开浏览器页面
	//     https: false, // 使用https提供服务
	//     proxy: 'https://jztest.jinghangapps.com/live', // string | Object 代理设置
	//     compress: true, //一切服务都启用gzip 压缩
	// },
	chainWebpack: config => {
		config.output.filename('[name].[hash].js').end();
		// babel-polyfill 加入 entry
		// const entry = config.entry('app')
		// entry.add('babel-polyfill').end()
	},
	//开启Gzip压缩
	configureWebpack: config => {
		// config => {}
		if (env !== 'dev') {
			config.plugins.push(
				new CompressionWebpackPlugin({
					filename: '[path].gz[query]',
					test: /\.js$|\.html$|.\css/, //匹配文件名
					threshold: 10240, //对超过10k的数据压缩
					deleteOriginalAssets: false //不删除源文件
				})
			);
		}
	},
	//单独进行兼容的转换
	transpileDependencies: ['dom7']
};
