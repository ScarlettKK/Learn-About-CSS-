# CSS基础

CSS全称：Cascading Style Sheet 层叠样式表

层叠是CSS一个非常重要的特性

## 基本规则

`参考代码`：[css-basic.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/css-basic.html)

选择器{
	
	属性: 值;（这里的分号概念上是一个分隔符号，编程中可以不加上，程序也不会报错，但是加上分号更有利于代码维护）

	属性: 值

}

### 选择器匹配规则

选择器用于匹配HTML元素，选择器有不同的匹配规则，多个选择器可以叠加

浏览器解析选择器的方式是从右往左的，也就是最右边的元素会先被寻找，然后再去验证其祖先是不是div，再以此类推

这样的解析顺序是从性能考虑的，防止从左往右查找范围过大（假设.body中有好几百个div，那么还要一个一个去div里面找）

从右往左的话，一般只需要定位那么几个小元素，然后找其父级进行验证即可，这样的方式更为高效

### 选择器分类和权重

`参考代码`：[selector-priority.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/selector-priority.html)

`参考代码`：[selector-priority2.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/selector-priority2.html)

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190319202601678-1477624302.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190319202608280-405581363.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190319202627131-783053517.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190320092936376-1490326394.png">

### 选择器解析方式和性能

### 值的关注的选择器

