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

	block / inline / inline-block

position 确定元素的位置

	static / relative / absolute / fixed

	z-index 适用于：已经定位的元素（即position:relative/absolute/fixed）


