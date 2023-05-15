# 常见问题

## 解决prettier、eslint冲突问题

在项目中，我们都是`eslint`、`prettier`组合使用，难免会有冲突。下面我们分俩个方面： **呈现冲突**、**解决冲突**。

### 1.呈现冲突

- prettier的配置如下：

``` js
//.prettierrc.json文件中
{ 
  "tabWidth":2 ,
  "singleQuote":true //开启单引号
}
```

- eslint的配置如下：（只需关注<font color="red">rules</font>里面配置的规则）

``` js
module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"plugin:vue/vue3-essential",
		"standard-with-typescript"
		// "plugin:prettier/recommended" // 添加 prettier 插件
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module"
	},
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		// "vue/no-multiple-template-root": "off" // 关闭多根节点的校验
	}
};
```

如图所示：
![问题呈现1](/format/problems-1.png)


此时当我们<font color="red">`ctrl+s`</font>时，<font color="red">`prettier`</font>会将所有的引号转成单引号，而我们<font color="red">`eslint`</font>引号规则为：双引号，否则一律按照<font color="red">`error`</font>处理，这就形成了冲突。

### 2.解决冲突

- 安装插件

``` bash
npm i eslint-plugin-prettier eslint-config-prettier -D
```

- 在<font color="red">`.eslintrc.js`</font>文件中配置插件，保存即可

``` js
module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"plugin:vue/vue3-essential",
		"standard-with-typescript",
		"plugin:prettier/recommended" // 添加 prettier 插件
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module"
	},
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		// "vue/no-multiple-template-root": "off" // 关闭多根节点的校验
	}
};
```

- 完美解决冲突

如图所示：

![问题呈现2](/format/problems-2.png)

## 支持vue3.0中多根节点（fragements）

在Eslint、Prettier配置完毕后，如果配置的扩展插件不是vue3版本的，即不是`plugin:vue/vue3-essential`，那么就会报错。

``` js
module.exports = {
	...,
	extends: [
		"plugin:vue/vue3-essential", // 兼容vue3，多根节点不会报错；
	],
  ...,
};
```

- 错误原因：`The template root requires exactly one element. // 模板只需要一个根元素`

- 解决办法： 在.eslintrc.js文件中，配置rules成功解决。

``` js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ...,
  rules: {
    'vue/no-multiple-template-root': 'off',// 关闭多根节点的校验
  },
};
```

## 知识拓展

有时候，我们项目中配置了`eslint`，报错了，但是你又不熟悉如何去配置某个规则。

比如`console.log`这样的代码不应该为`error`,或许应该为`warn`更适合。下面我们来看个例子：

- 根据提示打开官网

![问题呈现3](/format/problems-3.png)

- 查看官网的配置

![问题呈现4](/format/problems-4.png)

- 在文件中配置

![问题呈现5](/format/problems-5.png)