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

line-box与inline-box的关系：

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190328095406109-1749838054.png">

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

### 边框

`参考代码`：[border.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/border.html)

#### 边框的属性： 线形 大小(粗细) 颜色

eg: `border:dashed 5px red`

#### 边框背景图

参考博客：[CSS border-image属性](https://www.cnblogs.com/panshijie205/p/6851759.html)

border-image原理分析：

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190328095343365-895977841.png">

border-image-slice属性分析：

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190328095328505-914504856.png">

#### 边框衔接（三角形、梯形）

用边框（border实现）

原理：其实border（eg；border-left、border-bottom）交界的地方是斜切的

当盒子模型只有边框宽度，没有内容宽度的时候，就会出现三角形。盒子模型有宽度高度的时候会出现梯形

在三角形上面叠加圆角（border-radius）就会出现扇形

### 滚动

`参考代码`：[scroll.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/scroll.html)

#### 滚动行为和滚动条

与CSS属性overflow有关

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190328095309284-1256845290.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190328095317409-1873641576.png">

### 文字折行

`参考代码`：[wrap.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/wrap.html)

当文字内容长度超过文本框的宽度的时候，我们就要考虑换行了

<img src="https://img2018.cnblogs.com/blog/1147701/201904/1147701-20190401123222988-1519824336.jpg">

### 装饰性属性及其他

`参考代码`：[font-weight.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/font-weight.html)

<img src="https://img2018.cnblogs.com/blog/1147701/201904/1147701-20190402201609159-248727532.png">

### CSS Hack

针对IE7、8、6的使用场景，最近可能用的少了

<img src="https://img2018.cnblogs.com/blog/1147701/201904/1147701-20190403095637550-954571741.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201904/1147701-20190403095647126-615596778.png">

写的时候要【注意】：需要把标准属性写在前面，hack写在后面，不然在IE中hack和标准都会生效，标准会覆盖hack的效果。注意在高级浏览器中hack不会生效。

### 纯CSS的更多骚操作

#### 漂亮的单选框

`参考代码`：[checkbox.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS/checkbox.html)

#### tabs/幻灯片

<img src="https://img2018.cnblogs.com/blog/1147701/201904/1147701-20190406232806805-86430447.png">

提示：用radio（单选）实现，未选中的时候，display:none，选中的时候，display:block

#### tree树状图

<img src="https://img2018.cnblogs.com/blog/1147701/201904/1147701-20190406232809643-1268931610.png">

提示：使用checkbox，如上面的tabs，控制display

## CSS面试真题

1. CSS样式（选择器）的优先级
	
	通过计算权重确定

	!important

	内联样式

	后写的优先级高

2. 雪碧图的作用

	通过background-position控制背景图位移

	减少http请求数，提高加载性能

	有一些情况下可以减少图片大小（颜色种类基本一样的时候）

3. 自定义字体的使用场景

	宣传/品牌/banner等固定文案

	字体图标（icon）

4. base64的使用

	图片 -> 文本

	用于减少http请求

	适用于小图片

	体积会增大，约为原图的4/3

5. 伪类和伪元素的区别？

	伪类表状态（hover、focused...）

	伪元素是真的有元素（before、after）

	一般在写法上伪类单冒号、伪元素双冒号

6. 如何美化checkbox

	label[for]和id

	隐藏原生的input

	:checked + label
