# Learn more deep about HTML!

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190304201539507-1866945106.png">

## Header

### meta

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

### title

title 元素可定义文档的标题。

浏览器会以特殊的方式来使用标题，并且通常把它放置在浏览器窗口的标题栏或状态栏上。同样，当把文档加入用户的链接列表或者收藏夹或书签列表时，标题将成为该文档链接的默认名称。

### style

作用是可以直接在html中写css，但如需链接外部样式表，需要使用 link 标签

标签中 type 属性是必需的，用以定义 style 元素的内容，唯一可能的值是 "text/css"

	<style type="text/css">
	h1 {color:red}
	p {color:blue}
	</style>

### link

多用于链接一个外部css样式表

	<link rel="stylesheet" type="text/css" href="theme.css" />

当然也可以链接其他外部资源

### script

script 标签用于定义客户端脚本，比如 JavaScript

script 元素既可以包含脚本语句，也可以通过 src 属性指向外部脚本文件

其中 type 属性是必需的，规定脚本的 MIME 类型

（MIME(Multipurpose Internet Mail Extensions)多用途互联网邮件扩展类型，是设定某种扩展名的文件用一种应用程序来打开的方式类型）

	<script type="text/javascript">
	document.write("Hello World!")
	</script>

### base

`<base href="/">`

ng-router等框架里面会出现，指定一个基础的路径href，指定后所有链接都是以这个路径为基准来进行计算

## Body

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190304201554207-541702160.png">

### a 超链接

href 链接地址 

target 需要在哪里打开这个链接（默认self本窗口打开，也可以blank新开窗口打开）

### img

src 图片资源路径  

alt 替换资源（当图片链接不可用的时候，用alt里面的文字来替换）

### table td

colspan rowspan 用于合并单元格

### form 

target 表单要提交到哪里（某地址）

method 用什么方式提交（GET/POST/....）

enctype 对表单数据的提交要采用哪种编码（针对POST请求）

	编码种类：

	multipart/form-data `不对字符编码，可用于发送文件`，其他两种类型不能用于发送文件；

	text/plain `用于发送纯文本内容`，空格转换为 "+" 加号，`不对特殊字符进行编码`，一般用于email之类的；

	application/x-www-form-urlencoded `在发送前编码所有字符`，即在发送到服务器之前，所有字符都会进行编码（空格转换为 "+" 加号，"+"加号转换为空格，特殊符号转换为 ASCII HEX 值）。

	【其中application/x-www-form-urlencoded为默认类型。 】

### input

种类：普通输入框，密码框，日期输入框，单选框，复选框...

### button

提交按钮

### select > option

下拉选择框 > 选项

### label

for属性：标签关联表单项，当点击label的时候，就相当于点击表单项本身。多用于单选框复选框
