# Learn more deep about HTML!

## HTML elements

`参考代码`：[html-ele.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/HTML/html-ele.html)

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190304201539507-1866945106.png">

### Header

#### meta

`<meta charset="utf-8">`

charset：意为字符集，这里表示我们的页面用了什么字符集，一般为utf-8，可以囊括所有的中英文

一般在页面的第一行就要加上charset="utf-8"，保证页面不会出现编码错误

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`

viewport：意为视图窗口（可能是平板，电脑，手机等设备的浏览器），设备屏幕大小代表页面的尺寸大小

content：设置name中元素的内容

width=device-width：设置页面宽度等于设备宽度【适配移动端】

应用：

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190304201546910-980561614.png">

initial-scale=1.0：初始化缩放比例为1

maximum-scale=1.0：最大缩放比例为1

user-scalable=no：用户不可缩放

#### title

title 元素可定义文档的标题。

浏览器会以特殊的方式来使用标题，并且通常把它放置在浏览器窗口的标题栏或状态栏上。同样，当把文档加入用户的链接列表或者收藏夹或书签列表时，标题将成为该文档链接的默认名称。

#### style

作用是可以直接在html中写css，但如需链接外部样式表，需要使用 link 标签

标签中 type 属性是必需的，用以定义 style 元素的内容，唯一可能的值是 "text/css"

	<style type="text/css">
	h1 {color:red}
	p {color:blue}
	</style>

#### link

多用于链接一个外部css样式表

	<link rel="stylesheet" type="text/css" href="theme.css" />

当然也可以链接其他外部资源

#### script

script 标签用于定义客户端脚本，比如 JavaScript

script 元素既可以包含脚本语句，也可以通过 src 属性指向外部脚本文件

其中 type 属性是必需的，规定脚本的 MIME 类型

（MIME(Multipurpose Internet Mail Extensions)多用途互联网邮件扩展类型，是设定某种扩展名的文件用一种应用程序来打开的方式类型）

	<script type="text/javascript">
	document.write("Hello World!")
	</script>

#### base

`<base href="/">`

ng-router等框架里面会出现，指定一个基础的路径href，指定后所有链接都是以这个路径为基准来进行计算

### Body

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190304201554207-541702160.png">

#### a 超链接

href 链接地址 

target 需要在哪里打开这个链接（默认self本窗口打开，也可以blank新开窗口打开）

#### img

src 图片资源路径  

alt 替换资源（当图片链接不可用的时候，用alt里面的文字来替换）

#### table td

colspan rowspan 用于合并单元格

#### form 

target 表单要提交到哪里（某地址）

method 用什么方式提交（GET/POST/....）

enctype 对表单数据的提交要采用哪种编码（针对POST请求）

	编码种类：

	multipart/form-data `不对字符编码，可用于发送文件`，其他两种类型不能用于发送文件；

	text/plain `用于发送纯文本内容`，空格转换为 "+" 加号，`不对特殊字符进行编码`，一般用于email之类的；

	application/x-www-form-urlencoded `在发送前编码所有字符`，即在发送到服务器之前，所有字符都会进行编码（空格转换为 "+" 加号，"+"加号转换为空格，特殊符号转换为 ASCII HEX 值）。

	【其中application/x-www-form-urlencoded为默认类型。 】

#### input

种类：普通输入框，密码框，日期输入框，单选框，复选框...

#### button

提交按钮

#### select > option

下拉选择框 > 选项

#### label

for属性：标签关联表单项，当点击label的时候，就相当于点击表单项本身。多用于单选框复选框

#### 补充

问题：如果是AJAX请求，并不通过form的submit去提交，是否还需要form元素？

从技术上来说，并不一定需要，但仍然建议使用form元素

原因：

1. form 就算不用submit，还可以用reset特性

2. 利用form可以方便批量获取表单
	
	eg：jquery 中的 serialize 方法

	$('form').submit(function() {

	  alert($(this).serialize());

	  return false;

	});

	输出标准的查询字符串：

	`a=1&b=2&c=3&d=4&e=5`

3. 有form的时候，还可以方便与框架结合，或者一些验证组件结合，去做表单验证

4. form 支持一些用户喜欢的使用特性，比如浏览器的密码管理工具可以记住用户的账户密码

## 如何理解HTML

1. HTML`文档`

2. 描述文档的`结构`　

3. 有区块和大纲

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190311213913837-242807436.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190311213926924-1446534233.png">

HTML5增加了许多语义化的标签，就是为了让HTML的结构更清晰更明显

HTML5结构解析（大纲算法）工具：[h5o](http://h5o.github.io/)

一个好的页面应该做到大纲清晰，利于搜索引擎优化，让阅读器更容易解析你页面的内容，也利于开发者的代码阅读

不要整个页面都是div！避免结构混乱

## HTML版本

`参考代码`：[valid-xhtml.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/HTML/valid-xhtml.html) [valid-html.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/HTML/valid-html.html)

HTML4 语法容错性强，大小写错乱或者是没写闭合标签并不会报错，代码标准错乱

XHTML 语法要求严格，所有标签必须小写，所有属性既声明必须有值（在HTML4/5中bool属性声明可以不赋值），必须有闭合（像br换行符必须写`<br/>`HTML4、5写`<br>`即可）。增强代码的可读性，但代码标准有些过于严格，增加了开发的难度

HTML5 基于HTML4，因为这时候XHTML已经流行过一段时间了，放宽松标准相对不会错乱

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190312094710112-2004519168.png">

### HTML5 新增内容（更加语义化，更多功能）

新的区块标签会反映在之前所说的页面大纲中

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190312094718334-1396405257.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190312094727447-90666825.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190312094738730-1654326499.png">

## HTML元素分类

`参考代码`：[block-inline.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/HTML/block-inline.html)

### 按照默认样式分

1. 块级元素 block 

	方块（长方形），占据一行

2. 行内元素 inline

	无规则形状（空间不够的时候可能会出现内部换行，一半在上面一半在下面），无自己的尺寸（width height设置无效），挤在一行的某个位置

3. inline-block

	对外像inline元素，可以跟其他元素挤在一行

	对内像block元素，有自己的形状，尺寸

	很多常见表单元素（input、select）都是inline-block元素

### 按照内容分

HTML5 新的分类方法

详情见[w3c HTML5文档 kinds-of-content分类图](https://www.w3.org/TR/html5/dom.html#kinds-of-content)

## HTML元素嵌套关系

1. 块级元素可以包含行内元素

2. 块级元素不一定能包含块级元素（eg：`<p>`中不能再包含`<div>`这样的元素）

	在 [HTML5 规范性文档](https://www.w3.org/TR/html5/textlevel-semantics.html#the-q-element)中，p 的 content model（里面可嵌套的内容） 是 phrasing content，用于装载文本，而div并不是一个phrasing content，故不合法

3. 行内元素一般不能包含块级元素（eg：`<span>`中不能再包含`<div>`这样的元素）

	疑问：为什么是一般？

	反例：`<a>`元素中可以包含`<div>`这样的元素

		为什么 a > div 是合法的？

		在HTML4中，a标签只能包含行内元素，而且里面不能再包含一个a标签或者是其他交互性组件，如btn

		在很多场景中，我们需要点击某一大块的广告跳到某个链接，所以 a > div 这点在 HTML5 中作了合法化

		在 [HTML5 规范性文档](https://www.w3.org/TR/html5/textlevel-semantics.html#the-a-element)中，将 a 的 content model 列为 transparent，也就是在计算内容模型的时候，这个 a 元素本身是不参与计算的

		也就是说，当文档中有 a 标签，页面去计算嵌套合法性的时候，会把这个a当作是不存在的，只计算了里面的div，故合法

## HTML元素默认样式

### 默认样式的意义

HTML作为文档性标记语言，其中的元素（特别如下拉框、输入框）是需要有初始化的样式以及显示的，不然你每个元素的样式都要去定义一遍，失去了HTML语法简洁的特性

### 默认样式带来的问题

有一些元素的默认样式，是我们并不想要的，这里就需要覆盖

甚至有的元素的样式是难以被覆盖的（如下拉框）

各个浏览器的默认样式也各不相同

### CSS Reset

CSS Reset（样式重置）：覆盖掉不想要的默认样式，统一不同浏览器之间的样式

通用[CSS样式重置代码](https://meyerweb.com/eric/tools/css/reset/index.html)可以帮助我们进行CSS样式初始化工作

更多[CSS Reset代码](https://yuilibrary.com/yui/docs/cssreset/)

### 补充

另一种HTML默认样式处理方法（非CSS Reset）：[normalize.css](https://necolas.github.io/normalize.css/)

有选择地保留一些元素的默认样式

并且尝试在不同浏览器之间作一些样式修正

[normalize.css 原理详解](https://jerryzou.com/posts/aboutNormalizeCss/）












