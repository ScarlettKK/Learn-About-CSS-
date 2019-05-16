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
