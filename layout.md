# 弹性盒布局

`Flash`以前在前端里面经常要用到的插件

动画工程师`
ActionScript`，互联网格局，PC端进入移动端（安卓，苹果开发）

`JavaScript` 共享单车，外卖，快递，微信，滴滴，淘宝，在线支付

浏览器宿主提供了场地

- CSS3 页面特效，过渡动画 （Flash）显卡
- HTML5

往`html`文件写入以下标签
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./index.css" />
    <title>Document</title>
</head>
<body>
    <!-- 先把该元素变成一个弹性盒 -->
    <header>头部</header>
    <div>中间内容区域</div>
    <footer>底部</footer>
</body>
</html>
```
让`header`变成弹性盒，这样才可以使用弹性盒布局
```css
header{
    /* 把header标签变成弹性盒 */
    /* css flex弹性盒 */
    display: flex;
}
```
让`<header>头部</header>`盒子变为弹性盒
```html
<header>头部</header>
<style>
    header{
        display:flex;
    }
</style>
```
我们可以往里面设置，子元素的排列顺序
```html
<header>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</header>
<style>
    header{
        display:flex;
        /* 从左往右排列  row*/
        /* 从上往下排列 column */
        flex-direction:row;
    }
</style>
```
做好盒子，安排子元素排列顺序，可以继续设置子元素的空间占比
```html
<header>
    <div>
        1
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
    <div>2</div>
    <div>3</div>
</header>
<style>
    header{
        display:flex;
        /* 从左往右排列  row*/
        /* 从上往下排列 column */
        flex-direction:row;
    }
    header div{
        flex: 1;
        display:flex;
    }
</style>
```
