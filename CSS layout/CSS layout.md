# CSS 布局

CSS 知识体系的重中之重

早期以table为主（简单）语义不够明确

后来以技巧性布局为主（难）

现在有flexbox/grid（偏简单）

响应式布局是必备知识

## 常用布局方法

table 表格布局

float 浮动 + margin

inline-block 布局

flexbox布局

## table 表格布局

`参考代码`：[03-table.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/03-table.html)

简单、好理解、使用方便

带有文字默认垂直居中的样式，并且会自动调整布局（eg：左边缩小20px，右边自动增大20px）

但现在用的不多了

## 一些布局属性

### 盒子模型

<img src="https://img2018.cnblogs.com/blog/1147701/201904/1147701-20190411214956586-94148047.png">

默认情况下，宽度和高度【只对内容】生效

padding：边框到内容之间的留白

margin：离别的元素的距离，在边框之外

一个盒子占用的空间 = 内容宽度 + padding宽 + border宽

### display / position

display 确定元素的显示类型

`参考代码`：[01-display.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/01-display.html)

	block / inline / inline-block

position 确定元素的位置

`参考代码`：[02-position.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/02-position.html)

	static / relative / absolute / fixed

	z-index 适用于：已经定位的元素（即position:relative/absolute/fixed）

## flexbox

`参考代码`：[07-flex.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/08-flex.html) [08-flex.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/08-flex.html)

CSS中真正意义上用于布局的属性

	弹性盒子

	盒子本来就是并列的

	指定宽度即可

	但并不能被大规模使用，主要是兼容性的问题，ie低版本是肯定不行的

	flex写法版本变化太多，市面上有多种兼容flex不同版本的浏览器

	如果要使用的话需要写各种兼容的语法，才能保证flex在不同的浏览器上尽可能的兼容

## float 布局

`参考代码`：[04-float.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/04-float.html) [05-float.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/05-float.html)

最麻烦的一个布局方案

元素“浮动”

脱离文档流【不会对其他元素的布局产生影响】

但不脱离文本流【但是会对文字布局产生影响】

对自身的影响：

	形成“块”（BlockFormatContent），这个块会负责自己的布局，宽高可以自己设置，就算这个元素本身是个inline元素

	位置尽量靠上

	位置尽量靠左（右）

对兄弟的影响：

	上方贴非float元素

	旁边贴float元素

	不影响其他块级元素的位置

	影响其他块级元素内部文本

对父级元素的影响：

	从布局上“消失”

	高度塌陷，不能撑起父级元素的高度

## inline-block

`参考代码`：[06-inline-block.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/06-inline-block.html)

像文本一样排block元素

没有清除浮动等问题

存在问题：需要处理间隙

为什么会存在间隙问题：inline-block会被当成文字，那么文字和文字之间是会有间隙的

处理方案：

1. 将父元素的字体大小设置为0，子元素内再规定需要的字体大小，将字体大小设置回来（因为字体大小为0的时候，文字间隙也同样为0了）

2. 在代码中将两个inline-block中间的换行去掉，中间不要留白，或用注释注释掉换行，这样也可以达到消除间隙的目的（但不推荐）

适用场景：定宽的div，对于自适应宽度不太适合

## 响应式设计和布局

`参考代码`：[09-responsive.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/09-responsive.html)  [10-responsive.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20layout/10-responsive.html)

让页面能够在不同设备上正常使用

一般主要处理屏幕大小问题

主要方法：

	隐藏 + 折行 + 自适应空间

	rem / viewport / media query

## 一些主流网站的布局方案

腾讯网：float布局，左右定宽。使用伪元素clear:both清除浮动

网易：float布局，使用伪元素clear:both清除浮动

百度：float布局，使用 div 元素clear:both清除浮动（为了适配更低端的浏览器）

淘宝：float布局，使用伪元素clear:both清除浮动

国内各大网站基本上都是用float进行布局，因为兼容性比较好，然后一般使用定宽+清除浮动的方式布局

国外网站如苹果官网会使用flex box布局，但也会做一些兼容性的处理

## CSS布局面试真题

1. 实现两栏（三栏）布局的方法

	(1)表格布局
	
	(2)float + margin布局（兼容性较好）

	(3)inline-block布局

	(4)flexbox布局

2. position: absolute/fixed有什么区别

	absolute相对最近的absolute/relative进行定位

	fixed相对于屏幕（viewport），在移动端适配不好，老旧的移动端设备基本上无法使用

3. display: inline-block的间隙
	
	原因：字符间距

	解决：消灭字符（html的div中间不要留白，可以加上注释）或者消灭间距（font-size:0）

4. 如何清除浮动

	原因：浮动的元素不会占据父元素的布局空间，可能会超出父元素的范围，对其他元素产生影响

	解决：让盒子（父元素）负责自己的布局

		overflow: hidden(auto) 设置超出父元素的范围之后了要怎么办

		::after{clear:both} 把一个伪元素放在浮动元素的后面，让父元素一定要包含这个在后面的伪元素，从而包含浮动元素。注意这个伪元素左右的浮动元素都要被清除掉。

5. 如何适配移动端页面？

	viewport

	rem / viewport / media query

	设计上： 隐藏 折行 自适应
