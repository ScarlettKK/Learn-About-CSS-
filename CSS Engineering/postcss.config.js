// postcss插件配置文件
const autoprefixer = require('autoprefixer')

module.exports = {
	plugins: [
		// autoprefixer:指定浏览器的适用版本,autoprefixer就会为我们自动加上前缀
		autoprefixer({
			"overrideBrowserslist": [
			    "> 1%"
			]
		})
	]
}