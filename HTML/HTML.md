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

### style

### link

### script

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

target 表单要提交到哪里

method 用什么方式提交

