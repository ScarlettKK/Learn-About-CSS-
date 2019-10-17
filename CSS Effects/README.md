# CSS Effects

效果属性：是为了要解决问题：这个效果怎么实现？是CSS中最出彩的一部分

## box-shadow

`参考代码`：[01-box-shadow.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Effects/01-box-shadow.html) [02-box-shadow.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Effects/02-box-shadow.html) [03-box-shadow.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Effects/03-box-shadow.html) 

<img src="https://img2018.cnblogs.com/blog/1147701/201905/1147701-20190501182444460-82652859.png">

作用：

营造层次感（立体感）

充当没有宽度的边框（box-shadow不占据空间，不影响排版）

特殊效果（不停地复制, 当有阴影一定的偏移值、无模糊、有尺寸的时候, 这里的 尺寸的值 是在复制原型的尺寸上加减的意思, 由于阴影默认四周都有, 所以这个尺寸会x2）


## text-shadow

`参考代码`：[04-text-shadow.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Effects/04-text-shadow.html)

立体感

印刷品质感

## border-radius

圆角矩形

圆形

半圆/扇形

一些奇怪的角角

## contain

纹理、图案

渐变

雪碧图动画（新）`参考代码`：[06-background-animate.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Effects/06-background-animate.html)

背景图尺寸适应（新）`参考代码`：[07-background-size.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Effects/07-background-size.html)

## clip-path

`参考代码`：[08-clip-path.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Effects/08-clip-path.html)

对容器进行裁剪，也就是指定容器的一部分是显示的，剩下的部分就被裁减掉了

常见几何图形

自定义路径

	特性：

	1. 容器占位不变，也就是原来的div还是存在的，只是被裁减得只有一部分可以显示

	2. 这样使得一些容器内的动画就很好做

	3. 浏览器兼容性可能没那么好，但功能强大

## 3D变换（transform）

`参考代码`：[09-3d.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Effects/09-3d.html)

在3D空间中进行变换

<img src="https://img2018.cnblogs.com/blog/1147701/201905/1147701-20190508113809104-1090055281.png">

translateZ 是3D变换的重点

但需要利用下面两个属性，我们才可以在屏幕上看到明显的三维视觉效果：

	perspective：透视距离，表示人眼观看的地方离这个对象表面有多远，利用这个属性我们可以看到3D效果

	transform-style: preserve-3d;  设置transform-style为3d透视，使被转换的子元素保留其 3D 转换特性

transform只表示对元素的样式的变换，并不带有动画，跟translate是两回事

缺点：性能没有那么好，渲染起来可能会有误差（浏览器的锅）

## CSS 面试真题

1. 如何用一个div画XXX

	box-shadow 无限投影

	::before / ::after （伪元素）

2. 如何产生不占空间的边框（精细排版）

	box-shadow 放大

	outline（定制度不高）

	修改box-sizing（盒模型）为border-box

3. 如何实现圆形元素（头像）

	border-radius:50%

4. 如何实现ios图标的圆角（非标准圆角）

	clip-path:(svg) （这里估计要借助外部工具）
	
<img src="https://img2018.cnblogs.com/blog/1147701/201905/1147701-20190509170835029-1303860656.png">
	
5. 如何实现半圆、扇形等图形

	利用border-radius的几种组合：

	有无边框

	边框粗细

	圆角半径

6. 如何实现背景图居中显示 / 不重复 / 改变大小

	background-position

	background-repeat

	background-size（cover/contain）

7. 如何平移/放大一个元素

	transform: translateX(100px);
	
	transform: scale(2);

8. 如何实现3D效果

	perspective: 500px; 透视角度

	transform-style: preserve-3d; 保留3d效果

	transform: translate rotate ... 具体的变换
