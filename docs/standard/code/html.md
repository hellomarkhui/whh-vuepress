# HTML规范

::: tip 提示
Vue Template 同样适用
:::

## HTML 类型

推荐使用 HTML5 的文档类型申明：

- 规定字符编码
- IE 兼容模式
- 规定字符编码
- doctype 大写

正例：
``` html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta charset="UTF-8" />
        <title>Page title</title>
    </head>
    <body>
        <img src="images/company-logo.png" alt="Company" />
    </body>
</html>
```

## 语义化标签

HTML5 中新增很多语义化标签，所以优先使用语义化标签，避免一个页面都是 div 或者 p 标签

正例：
``` html
<header></header>
<footer></footer>
```
反例：
``` html
<div>
    <p></p>
</div>
```

## 引号

标签属性使用双引号(" ") 而不是单引号(’ ') 。

正例：
``` html
<div class=""></div>
```
反例：
``` html
<div class=''></div>
```
