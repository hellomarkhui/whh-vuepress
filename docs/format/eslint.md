# eslint配置

::: tip 定义
ESLint是一个用来识别 ECMAScript 并且按照规则给出报告的代码检测工具，使用它可以避免低级错误和统一代码的风格。如果每次在代码提交之前都进行一次eslint代码检查，就不会因为某个字段未定义为undefined或null这样的错误而导致服务崩溃，可以有效的控制项目代码的质量。
:::

在许多方面，ESLint和 JSLint、JSHint 相似，除了少数的例外：

- ESLint 使用 Espree 解析 JavaScript。
- ESLint 使用 AST 去分析代码中的模式。
- ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。

## 为什么

**为什么要使用eslint？**

  - 因为每个人的代码习惯不一样，每个开发人员都需要和他人协作或者项目需要交接给下一代开发者。
  - 保持统一的代码规范，可以极大地提高效率，降低沟通和理解代码的成本。

## 安装Eslint

``` bash
npm install eslint -D
```

## 生成配置文件

自动生成Eslint配置文件，详细见官网自动生成配置。

``` bash
//使用npx
npx eslint --init
//或者按照官网来
./node_modules/.bin/eslint --init
```

根据命令提示，完成操作：

![eslint配置文件1](/format/eslint-conf-1.png)

![eslint配置文件2](/format/eslint-conf-2.png)

![eslint配置文件3](/format/eslint-conf-3.png)

![eslint配置文件4](/format/eslint-conf-4.png)

![eslint配置文件5](/format/eslint-conf-5.png)

![eslint配置文件6](/format/eslint-conf-6.png)

![eslint配置文件7](/format/eslint-conf-7.png)

![eslint配置文件8](/format/eslint-conf-8.png)

最后两步就是：根据配置列出需要安装的包，问是否安装这些包以及选择管理工具。选择Yes和npm就可以了。

![eslint配置文件9](/format/eslint-conf-9.png)

## vscode安装插件

VSCode中使用Eslint需要安装Eslint插件

![安装eslint插件](/format/eslint.png)

## vscode的配置

- **全局环境中配置**

``` json
// vscode的setting.json文件中
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true //ctrl+s保存的时候使用eslint修复
  },
}
```

- **或者在局部配置**

``` json
// setting.json文件中
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true //ctrl+s保存的时候使用eslint修复
  },
}
```

![eslint局部配置](/format/eslint-set-1.png)

