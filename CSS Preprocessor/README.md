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

## less/sass变量

`less参考代码`：[2-variable.less](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/2-variable.less)

`less编译结果参考代码`：[2-variable.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/2-variable.css)

`sass参考代码`：[2-variable.scss](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/2-variable.scss)

`sass编译结果参考代码`：[2-variable-scss.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/2-variable-scss.css)

## mixin

之前没有mixin的时候，在css中如何复用样式？

把复用的样式抽取出来单独成类，然后在html里面多处引用即可实现，但不是在css层面的复用

mixin就是为了这种场景而生的，为我们提供了一种css层面的复用

应用：一些通用样式（如清除浮动），只需要编写一次，后面直接引用即可。也方便我们按单元构造样式。

`less参考代码`：[3-mixin.less](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/3-mixin.less)

`less编译结果参考代码`：[3-mixin.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/3-mixin.css)

`sass参考代码`：[3-mixin.scss](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/3-mixin.scss)

`sass编译结果参考代码`：[3-mixin-scss.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/3-mixin-scss.css)

## extend

只用mixin的话，编译出来的代码会带有大规模的重复，mixin只是简单粗暴的重复

一般在CSS中为了避免这种重复，我们会把相同的部分抽取出来一起集中定义

在预处理语言中，我们就会用extend来解决这个问题，减少重复代码

extend：扩展某一个选择器，但不能带参数（不够灵活）

`less参考代码`：[4-extend.less](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/4-extend.less)

`less编译结果参考代码`：[4-extend.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/4-extend.css)

`sass参考代码`：[4-extend.scss](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/4-extend.scss)

`sass编译结果参考代码`：[4-extend-scss.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/4-extend-scss.css)

## loop

应用：

网格、

复杂的动画效果，如动画延迟（每个元素延迟时间都不一样）、

多元素但无法共用一个class的情况，且class之间有规律差异

注意：sass是支持for循环的，不用用mixin的写法，而less暂不支持for循环

`less参考代码`：[5-loop.less](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/5-loop.less)

`less编译结果参考代码`：[5-loop.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/5-loop.css)

`sass参考代码`：[5-loop.scss](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/5-loop.scss)

`sass编译结果参考代码`：[5-loop-scss.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/5-loop-scss.css)

## import 

less/sass的import与CSS原有的import是不同的

less/sass的import 可以做到合并、复用代码，最终合并形成一个文件

而CSS的import并不能做到这一点，只能一个一个去加载CSS文件

一般我们会将less/sass变量单独抽取出来形成一个文件来管理

这里需要按照一定的顺序，变量定义的部分需要第一个import，才能在其他模块之中使用该变量

`less参考代码`：[6-import-main.less](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/6-import-main.less)

`less编译结果参考代码`：[6-import-main.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/6-import-main.css)

`sass参考代码`：[6-import-main.scss](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/6-import-main.scss)

`sass编译结果参考代码`：[6-import-main-scss.css](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Preprocessor/6-import-main-scss.css)

## 总结

<img src="https://img2018.cnblogs.com/blog/1147701/201906/1147701-20190612200116264-1393930528.png">

