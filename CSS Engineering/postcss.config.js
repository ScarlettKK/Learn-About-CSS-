// postcss插件配置文件
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const atImport = require('postcss-import')

module.exports = {
	plugins: [
		// postcss-import: 合并CSS @import涉及的所有文件,将它们压缩成一个
		atImport,
		// autoprefixer:指定浏览器的适用版本,autoprefixer就会为我们自动加上前缀
		autoprefixer({
			"overrideBrowserslist": [
			    "> 1%"
			]
		}),
		// cssnano:代码压缩工具,声明需要放在最后,因为一般进行代码处理最后才进行压缩
		cssnano
	]
}