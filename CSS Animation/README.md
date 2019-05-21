# CSS Animation

动画的原理（翻动的小人书）：

1. 视觉暂留作用

2. 画面逐渐变化

（保持每秒呈现多少个不同的画面，这些画面差距不大）

动画的作用：

1. 愉悦感

2. 引起注意

3. 反馈

4. 掩饰（loading）

CSS中的动画类型：

1. transition 补间动画（从一个状态到另一个状态，中间的过程是补出来的）

2. keyframe 关键帧动画（有很多个关键帧，也就是多个补间动画拼起来的）

3. 逐帧动画（有很多帧画面，只能从一个跳到另一个，类似小人书）

## transition 补间动画

`参考代码`：[01-transition.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Animation/01-transition.html)

只能计算以下属性：【注意：display:none -> block不能运用补间动画！因为需要计算中间过程，但不能计算所有属性的中间过程】

	位置 - 平移（left/right/margin/transform）

	方位 - 旋转（transform）

	大小 - 缩放（transform）

	透明度 - opacity

	其他 - 线性变换（transform）

	颜色（background/color）最近才支持

transition动画效果函数（transition-timing-function）：

<img src="https://img2018.cnblogs.com/blog/1147701/201905/1147701-20190514115533788-77803076.png">

transition调试工具：

<img src="https://img2018.cnblogs.com/blog/1147701/201905/1147701-20190514115540398-1481196681.png">

## keyframe 关键帧动画

`参考代码`：[02-keyframe.html](https://github.com/ScarlettKK/Learn-About-CSS-/blob/master/CSS%20Animation/02-keyframe.html)

相当于多个补间动画

与元素状态的变化无关，可以自动播放（不是必须有个hover才有动画，而是可以自动播放动画）

定义更加灵活

## 逐帧动画

每一帧都是关键帧，没有补间动画，是keyframe 关键帧动画的一种特殊用法

适用于【无法】补间计算的动画（有得补间当然选择补间，省事，省空间）

这里的重点是，我我们需要停掉关键帧动画animation中间的补间，使用：

	animation-timing-function: steps(1);

适用范围：动画面积不大，时长也不大，不然性能消耗会很大

## 面试真题

大多考察语法，所以一定要熟知transition、keyframe怎么写

1. CSS动画的实现方式有几种

	transition

	keyframes（animation）

2. 过渡动画和关键帧动画的区别

	过渡动画需要有状态变化

	关键帧动画不需要状态变化

	关键帧动画能控制的更为精细（正播反播，停留状态等等）

3. 如何实现逐帧动画

	使用关键帧动画的语法（keyframes）

	去掉补间（animation-timing-function: steps(1);）

4. CSS动画的性能

	性能不坏

	部分情况下优于JS

	但JS可以做到更好（JS支持优化）

	部分高危属性，无论谁来做性能都不好（box-shadow等，需要慎重使用）




