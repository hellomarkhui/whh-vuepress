# sass和less规范

## 代码组织

1. 将公共sass/less文件放置在styles文件夹
  
例：

```
color.scss，common.scss
```

2. 按以下顺序组织

    1. @import;

    2. 变量声明;

    3. 样式声明;

``` less
@import "mixins/size.less";
@default-text-color: #333;
.page {
    width: 960px;
    margin: 0 auto;
}
```