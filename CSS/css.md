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

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190319202601678-1477624302.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190319202608280-405581363.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190319202627131-783053517.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190320092936376-1490326394.png">

### 选择器解析方式和性能

浏览器解析选择器的方式是从右往左的，也就是最右边的元素会先被寻找，然后再去验证其祖先是不是div，再以此类推

这样的解析顺序是从性能考虑的，防止从左往右查找范围过大（假设.body中有好几百个div，那么还要一个一个去div里面找）

从右往左的话，一般只需要定位那么几个小元素，然后找其父级进行验证即可，这样的方式更为高效

### 值的关注的选择器

`参考代码`：[selector-priority2.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/selector-priority2.html)

## 非布局样式

### 字体

`参考代码`：[fonts.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/fonts.html)

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190321212942522-1603792244.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190321212952112-786401952.png">

iconfont是什么？

[参考文档](https://www.cnblogs.com/fashandian/p/6880892.html)

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190321213257675-1243755166.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190321213301998-1683433576.png">

### 行高

参考文档：[一招帮你搞定基线位置(line box基线)](https://www.jianshu.com/p/6f9d7da220c8)

#### 行高的构成

`参考代码`：[inline.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/inline.html)

行高由line-box决定

line-box由inline-box组成

inline-box的高度会决定行高的高度

#### 行高相关的现象和方案

`参考代码`：[line-height.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/line-height.html)

现象：图片下会有3px左右的空白

原因：img按照inline元素排版，排版就会相对基线对齐，基线跟底线之间是有距离的，这个距离由字体大小决定（12px的字体有3px左右的空隙）

解决方案：vertical-align：bottom，相对底线对齐。或者整成block、inline-block

#### 行高的调整

CSS中：line-height: xxx;

### 背景

`参考代码`：[background.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/background.html)

#### 背景颜色

英文单词、十六进制、rgba、hsla

#### 渐变色背景

linear-gradient

#### 多背景叠加

例子代码中用background实现的网格效果

`参考代码`：[background-image.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/background-image.html)

#### 背景图片和属性（雪碧图）

背景图可以指定位置（background-position）、重复不重复（background-repeat）、背景图大小（background-size）等

也就是说，我们可以对背景图进行一些控制

参考示例代码，雪碧图的原理是：

	加载的都是同一张图，图上有很多图标，但是我们只显示这张图上面的一部分

	控制：1.框大小 2.背景图不重复 3.背景的大小 4.背景图的位置

	相当于background开了一个小窗口，只看这张图的一个小区域

	有的时候，我们可能不需要那么大的图片，这时候需要缩小背景图片的大小（background-size），这时候坐标（background-position）也需要变化

#### base64 和性能优化

将图片转成文本（base64，一般在项目中由打包工具来转），这样就不需要http请求图片了，提高了性能

缺点是图片本身体积会增大1/3，而且css文件体积会增大。并且这里增大了解码base64的开销。

所以这里只适用于小图标、少量图片的情况

#### 多分辨率适配

n倍屏的处理方案：找一个n倍尺寸的大图片，在background-size里将其缩小n倍，即可

