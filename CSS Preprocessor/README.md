# CSS 预处理器（less/sass等）

基于CSS的另一种语言

通过工具编译成CSS

添加了很多CSS不具备的特性

能够提升CSS文件的组织方式

	现存方案：

	less：基于node，使用JS语法，编译较快，并且有一个浏览器中直接可以使用的版本，不需要预先编译，入门简单，但在一些复杂的特性上面显得有些繁琐

	Sass：使用ruby编写，编译速度较慢但存在解决方法（移植版本node-sass等）

提供功能：

嵌套 反映层级和约束

变量和计算 减少重复代码

extend 和 mixin 代码片段（类似JS函数）

循环 适用于复杂有规律的样式（如表格）

import CSS文件模块化（CSS原有的import性能差，这里类似JS的import，会做代码合并）

`less参考代码`：[1-nest.less](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/1-nest.less)

`less编译结果参考代码`：[1-nest.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/1-nest.css)

`sass参考代码`：[1-nest.scss](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/1-nest.scss)

`sass编译结果参考代码`：[1-nest-scss.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/1-nest-scss.css)
