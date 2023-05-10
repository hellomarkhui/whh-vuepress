# CSS 规范

## 命名

- 类名使用小写字母，以中划线分隔

- id 采用驼峰式命名

- scss 中的变量、函数、混合、placeholder 采用驼峰式命名

ID 和 class 的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称

不推荐：

``` css
.fw-800 {
    font-weight: 800;
}
.red {
    color: red;
}
```

推荐:

``` css
.heavy {
    font-weight: 800;
}
.text-warning {
    color: red;
}
```

## 选择器

css 选择器中避免使用标签名

1. 从结构、表现、行为分离的原则来看，应该尽量避免 css 中出现 HTML 标签，并且在 css 选择器中出现标签名会存在潜在的问题。

2. 很多前端开发人员写选择器链的时候不使用 直接子选择器（注：直接子选择器和后代选择器的区别）。有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。然而，在任何情况下，这是一个非常不好的做法。如果你不写很通用的，需要匹配到 DOM 末端的选择器， 你应该总是考虑直接子选择器。

不推荐：

``` css
.content .title {
    font-size: 2rem;
}
```

推荐:

``` css
.content > .title {
    font-size: 2rem;
}
```

## 省略0后面的单位

不推荐：

``` css
div {
    padding-bottom: 0px;
    margin: 0em;
}
```

推荐:

``` css
div {
    padding-bottom: 0;
    margin: 0;
}
```

## 公共样式

公共样式进行抽离，按功能定义划分不同文件
class名称建议使用 base[-文件名][-关键字][-*] 的格式

例如：

```
base-layout-head、base-theme-default
```

::: tip 附：公共样式常用文件名
base.css 基本共用
layout.css 布局、版面
theme.css 主题
font.css 字体
form.css 表单
:::

::: tip 附：class常用关键字
doc 文档、header 头部、body 主体、footer 尾部、main 主栏、sidebar 侧边栏、header 头、wrapper/contaienr/box 盒容器、left 左、center 中、right 右、inner 内部、outer 外部
nav 导航、subnav 自导航、menu 菜单、submenu 子菜单、breadcrumb 面包屑、tab 标签页、content 内容、list 列表、table 表格、form 表单、title 标题、login 登录、logo 标志、copyright 版权、search 搜索、tips 提示、help 帮助、guild 指南、download 下载、register 注册、scroll 滚动、banner 广告、button 按钮、input 输入
first 第一个、last 最后一个、current 当前、prev 上一个、next 下一个、forward 前进、back 后退
clearboth 清除浮动、close 关闭、default 默认、disabled 不可用、error 错误、hide 隐藏、open 打开、selected 选中、show 显示
:::