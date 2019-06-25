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

Bootstrap 的 网格系统 可以在 不同的分辨率下 有不同的分配

具体显示情况需要自己设计

## Bootstrap 定制方法

使用CSS同名类覆盖

	好处:操作简单,门槛低

	坏处:无法再使用Bootstrap不同的类之间的计算关系,只能直接写死.并且无法一次性全面覆盖样式,常常需要改很多个关联的类(如hover、active样式也要一起修改),实际上工作量不小

修改源码重新构建

	进入Bootstrap4 [sass]版本的源码进行修改后再重新编译,一般只需要修改一个变量(scss中的variable.scss),即可达到关联修改的效果

	需要先了解源码结构

引用SCSS源文件,并在同一个文件中修改变量

	将Bootstrap当成一个预处理框架来用

	见custom.scss

	需要更加了解源码结构

	最干净最高效的方式,按需引用,更好地做定制

## 面试真题

Bootstrap的优缺点

	优点: CSS代码结构合理 现成的样式可以直接用

	缺点: 定制较为繁琐 体积大


Bootstrap如何使用响应式布局

	原理: 通过 media query 设置不同分辨率的class

	使用: 为不同的分辨率选择不同的网格class

如何基于Bootstrap定制自己的样式

	使用CSS同名类覆盖

	修改源码重新构建

	引用SCSS源文件,并在同一个文件中修改变量













