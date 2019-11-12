# position:absolute

## position:absolute & float

页面布局方案有很多种办法, 可以相互替代

相同点:

	包裹性 (div应用绝对定位之后,宽度会自动调整,刚刚好能够包裹住div里面的内容)
	破坏性 (脱离文档流)

不同点:

	限制工具不同 (不让其太过于奔放以至于脱离文档流)
		float                      : clear
		position:absolute          : position:relative

## position:absolute 功能篇

position:absolute 越独立越强大, 可以摆脱overflow的限制, 实现一些窗口关闭右上角btn的效果一类

不受 position:relative 控制的 position:absolute 功能十分强大

功能主要有以下几点:

	position:absolute 可以去除浮动, 当 position:absolute 生效的时候, float失效
	position:absolute 有位置跟随的特性, 在没有定义tblr位置的时候, 会在原来 position:absolute 之前的位置上浮动起来, 不会主动靠左或者靠右, 而是站在原来的位置上不动
	配合 margin负值定位 一起食用可以获得更精确的定位(元素垂直居中[划重点])

不影响其他布局的绝对定位下的相对定位之王(使用绝对定位, 实现相对定位的效果)

`功能特性`:

图片图标来覆盖, 无依赖(父元素不额外添加position:relative属性), 真不赖(如下图红色圈圈)

其实要做到自由的图标,并不需要给其父元素设置position:relative,设置了反而降低了自适应性

最好的做法是, 父元素不变, 图标设置position:absolute, 但通过margin来调整其位置, 不通过left right等属性. 好处如下:

	父元素不需要额外添加position:relative属性,更加干净(且父元素这个属性可能后续会被去掉,或者产生其他影响)
	自适应性更加强, 会根据其他兄弟元素的大小自动调整位置, 而不是写死的定位


<img src="https://tva1.sinaimg.cn/large/006y8mN6gy1g8veavylxoj30e40f6jx8.jpg">





