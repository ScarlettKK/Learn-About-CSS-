# Bootstrap

一个CSS框架

Twitter出品

提供通用基础样式

(这里使用的是Bootstrap4 [sass]版本,Bootstrap3 [1-3都是less]最近一次更新已经是一年前了)
	
	特点:兼容IE10+(Bootstrap3:IE9)

	使用flexbox布局(这点导致兼容性变高)

	抛弃Normalize.css(抛弃了通用的CSS样式重置)

	提供布局和reboot版本(reboot相当于CSS样式重置,这里的布局和reboot都可以单独拎出来使用)

## Bootstrap提供了什么?

基础样式、常用组件(按钮等)、JS插件(弹窗等)


## Bootstrap JS组件

用于组件交互(dropdown下拉、modal弹窗 等)

所需要依赖的js文件:

	基于jquery,必须引用jquery文件

	还依赖一个第三方库Popper.js,用于处理弹出框(Bootstrap.bundle.js打包了Popper和Bootstrap)

	最后需要引用Bootstrap.js文件

使用方式:

	基于html的data-*属性(data-toggle 切换状态、data-target 目标DOM对象、data-dismiss 取消切换对象...)

	基于JS API,更灵活一些

但其实Bootstrap提供的JS组件使用限制还是比较大,需要引入指定的JS,一般在大型项目中会有自己的设计,就不太适用

## Bootstrap 响应式布局

<img src="https://img2018.cnblogs.com/blog/1147701/201906/1147701-20190620171113215-1889767670.png">

Bootstrap 的 网格系统 可以在 不同的分辨率下 有不同的分配

具体显示情况需要自己设计
