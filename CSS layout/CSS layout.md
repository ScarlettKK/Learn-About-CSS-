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





