# Vue 项目目录规范

## 基础

vue 项目中的所有命名一定要与后端命名统一。

**比如权限：** `后端 privilege, 前端无论 router , store, api 等都必须使用 privielege 单词`

## 目录说明

目录名按照上面的命名规范，其中 `components` 组件用大写驼峰，其余除 `components` 组件目录外的所有目录均使用 `kebab-case` 命名。

**src 源码目录:**

```
|-- api                                                                           所有api接口
|-- assets                                                                      静态资源，images, icons, styles等
|-- components                                                            公用组件
|-- config                                                                      配置信息
|-- common                                                                  常量信息，项目所有Enum, 全局常量等
|-- directives                                                                 自定义指令
|-- filters                                                                       过滤器，全局工具
|-- datas                                                                       模拟数据，临时存放
|-- i18n                                                                         多语言文件
|-- lib                                                                            外部引用的插件存放及修改文件
|-- mock                                                                       模拟接口，临时存放
|-- plugins                                                                    插件，全局使用
|-- router                                                                      路由，统一管理
|-- store                                                                        vuex, 统一管理
|-- styles                                                                       公共样式
|-- utils                                                                         工具类
|-- pages                                                                      视图页面
|        |-- role                                                                 role模块名
|        |--    |-- main.js                                                     role模块入口
|        |--    |-- App.vue                                                   role页面内容
|        |--    |-- index.html                                                role页面结构
|        |--    |-- index.scss                                                 role模块样式
|        |--    |-- components                                            role模块通用组件文件夹
|        |-- employee                                                        employee模块
```

### api 目录

- 文件、变量命名要与后端保持一致。
- 此目录对应后端 `API` 接口，按照后端一个 `controller 一个 api js` 文件。若项目较大时，可以按照业务划分子目录，并与后端保持一致。
- `api` 中的方法名字要与后端 `api url` 尽量保持语义高度一致性。
- 对于 `api` 中的每个方法要添加注释，注释与后端 `swagger` 文档保持一致。

**正例：**

*后端 url： EmployeeController.java*

```
/employee/add
/employee/delete/{id}
/employee/update
```

*前端： employee.js*

``` js
// 添加员工
export function addEmployee (data) {
    return axios({
        method: 'post',
        url: '/employee/add',
        data
    })
}
// 更新员工信息
export function updateEmployee (data) {
    return axios({
        method: 'post',
        url: '/employee/update',
        data
    })
}
// 删除员工
export function deleteEmployee (employeeId) {
    return axios({
        method: 'delete',
        url: '/employee/delete/' + employeeId
    })
}
```

### components 目录

此目录用于存放公共组件，当组件包含多个组成文件时，应使用目录进行划分，目录命名为 `PascalCase` ，组件命名规则也为 `PascalCase`

```
components
|-- ErrorLog
|       |-- index.vue
|       |-- index.less
|-- MarkdownEditor
|       |-- index.vue
|       |-- index.js
|-- PascalCase.vue
```

### common 目录

此目录存放项目所有常量，通用模块继承类。如果常量在 vue 中使用，请使用 `vue-enum` 插件()

**目录结构：**

```
constants
|-- index.js
|-- role.js
|-- employee.js
```

**例子：** `employee.js`

``` js
export const EMPLOYEE_STATUS = {
    NORMAL: {
        value: 1,
        desc: '正常'
    },
    DISABLED: {
        value: 1,
        desc: '禁用'
    },
    DELETED: {
        value: 2,
        desc: '已删除'
    }
}
export const EMPLOYEE_ACCOUNT_TYPE = {
    QQ: {
        value: 1,
        desc: 'QQ登录'
    },
    WECHAT: {
        value: 2,
        desc: '微信登录'
    },
    DINGDING: {
        value: 3,
        desc: '钉钉登录'
    },
    USERNAME: {
        value: 4,
        desc: '用户名密码登录'
    }
}
export default {
    EMPLOYEE_STATUS,
    EMPLOYEE_ACCOUNT_TYPE
}
```

### router 与 store 目录

- 这两个目录一定要将业务进行拆分，不能放到一个 `js` 文件里。
- `router` 尽量按照 `pages` 中的结构保持一致
- `store` 按照业务进行拆分不同的 `js` 文件

### pages 目录

- 命名要与后端、`router`、`api` 等保持一致
- `components` 中组件要使用 `PascalCase` 规则

```
|-- pages                                                                 视图目录
|       |-- role                                                             role模块名
|       |      |-- App.vue                                               role页面内容
|       |      |-- index.html                                            role页面结构
|       |      |-- main.js                                                role模块入口
|       |      |-- index.scss                                            role模块样式
|       |      |-- components                                        role模块通用组件文件夹
|       |      |        |-- RoleHeader.vue                          role头部组件
|       |      |        |-- RoleModal.vue                           role弹出框组件
|       |-- employee                                                   employee模块
|       |-- behavior-log                                              行为日志log模块
|       |-- code-generator                                         代码生成器模块
```

## 注释说明

**整理必须加注释的地方**

- 公共组件使用说明
- `api` 目录的接口 `js` 文件必须加注释
- `store` 中的 `state`, `mutation`, `action` 等必须加注释
- `vue` 文件中的 `template` 必须加注释，若文件较大添加 `start end` 注释
- `vue` 文件的 `methods`，每个 `method` 必须添加注释
- `vue` 文件的 `data`, 非常见单词要加注释

## 其他

### 尽量不要手动操作 DOM

因使用 `vue` 框架，所以在项目开发中尽量使用 `vue` 的数据驱动更新 `DOM`，尽量（不到万不得已）不要手动操作 `DOM`，包括：增删改 `dom` 元素、以及更改样式、添加事件等。

### 删除无用代码

因使用了 `git/svn` 等代码版本工具，对于无用代码必须及时删除，例如：一些调试的 `console` 语句、无用的弃用功能代码