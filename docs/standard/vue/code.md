# Vue 编码基础

## 组件规范

### 组件名为多个单词

  组件名应该始终是多个单词组成（大于等于 2），且命名规范为PascalCase格式。

  ::: tip 提示
  这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。
  :::

  正例：

  ``` js
    export default {
        name: 'TodoItem'
        // ...
    };
  ```

  反例：

  ``` js
    export default {
        name: 'Todo',
        // ...
    }
    export default {
        name: 'todo-item',
        // ...
    }
  ```

### 组件文件名为 PascalCase 格式

  正例：

  ```
    components/
    |- MyComponent.vue
  ```

  反例：

  ```
    components/
    |- myComponent.vue
    |- my-component.vue
  ```

### 基础组件文件名为 base 开头...

  基础组件文件名为 base 开头，使用完整单词而不是缩写。

  正例：

  ```
    components/
    |- BaseButton.vue
    |- BaseTable.vue
    |- BaseIcon.vue
  ```

  反例：

  ```
    components/
    |- my-button.vue
    |- vueTable.vue
    |- Icon.vue
  ```

### 和父组件紧密耦合的子组件...

和父组件紧密耦合的子组件应该以父组件名作为前缀命名

  正例：

  ```
    components/
    |- TodoList.vue
    |- TodoListItem.vue
    |- TodoListItemButton.vue
    |- UserProfileOptions.vue （完整单词）
  ```

  反例：

  ```
    components/
    |- todo-list.vue
    |- todo-item.vue
    |- todo-button.vue
    |- UProfOpts.vue （使用了缩写）
  ```

### 在 Template 模版中使用组件...

在 Template 模版中使用组件，应使用kebab-case模式，并且使用自闭合组件。**  

  正例：

  ``` vue
    <!-- 在单文件组件、字符串模板中-->
    <my-component />
    <row>
        <table :column="data"/>
    </row>
  ```

### 在JSX模板中使用组件...

在JSX模板中使用组件，应使用 PascalCase 模式，并且使用自闭合组件。**  

  正例：

  ``` vue
    <!-- 在 JSX 中 -->
    <MyComponent />
    <Row>
        <BaseTable :column="data"/>
    </Row>
  ```

### Prop 定义应该尽量详细

  - 必须使用 camelCase 驼峰命名

  - 必须指定类型

  - 必须加上注释，表明其含义

  - 必须加上 required 或者 default，两者二选其一

  - 如果有业务需要，必须加上 validator 验证


  正例：

  ``` js
    props: {
      // 组件状态，用于控制组件的颜色
      status: {
          type: String,
          required: true,
          validator: function (value) {
              return [
                  'succ',
                  'info',
                  'error'
              ].indexOf(value) !== -1
          }
      },
      // 用户级别，用于显示皇冠个数
      userLevel：{
          type: String,
          required: true
      }
  }
  ```

### 为组件样式设置作用域

  *优先使用scoped，如需样式覆盖时可指定样式作用根选择器，避免样式污染*

  正例：

  ``` vue
    <template>
       <button class="btn btn-close">X</button>
    </template>

    <!-- 使用 `scoped` 特性 -->
    <style scoped>
      .btn-close {
         background-color: red;
      }
    </style>

    <template>
      <div class=”componentname”>
        <button class="btn btn-close">X</button>
      </div>
    </template>

    <!-- 指定样式作用于componentname类包裹下的dom ,由于组件的name不允许重复，可在一定程度上避免样式污染-->
    <style lang="scss">
      .componentname{
        .btn-close {
            background-color: red;
        }
      }
    </style>
  ```

  反例：

  ``` vue
  <template>
     <button class="btn btn-close">X</button>
  </template>
  <!-- 没有使用 `scoped` 特性 -->
  <style>
    .btn-close {
        background-color: red;
    }
  </style>
  ```

### 如果特性元素较多，应该主动换行

  正例：

  ``` vue
    <MyComponent
      foo="a" bar="b" baz="c"
      foo="a" bar="b" baz="c"
      foo="a" bar="b" baz="c"
    />
  ```

  反例：

  ``` vue
    <my-component foo="a" bar="b" baz="c" foo="a" 
    bar="b" baz="c" foo="a" bar="b" baz="c" 
    foo="a" bar="b" baz="c"/>
  ```

### 如没有必要，尽量使用单根组件...

并为单根元素指定类名，类名为拆分组件名各单词+container

  正例：
  
  ``` vue
    <!-- HelloWorld.vue -->
    <template>
    <div class="hello-world-container">
      <!--..........-->
      </div>
    </template>
  ```

  反例：

  ``` vue
    <!-- HelloWorld.vue -->
    <template>
    <div class="helloWorld">
      <!--..........-->
      </div>
    </template>
  ```

## 模板中使用简单的表达式

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。

正例：
  
``` vue
  <template>
      <p>{{ normalizedFullName }}</p>
  </template>

  // 复杂表达式已经移入一个计算属性
  computed: {
      normalizedFullName: function () {
          return this.fullName.split(' ').map(function (word) {
              return word[0].toUpperCase() + word.slice(1)
          }).join(' ')
      }
  }
```

反例：

``` vue
<template>
    <p>
        {{
            fullName.split(' ').map(function (word) {
                return word[0].toUpperCase() + word.slice(1)
            }).join(' ')
        }}
    </p>
</template>
```

## 指令都使用缩写形式

指令推荐都使用缩写形式，(用 `:` 表示 `v-bind: ` 、用 `@` 表示 `v-on:` 和用 `#` 表示 `v-slot:`)

正例：
  
``` vue
<input
    @input="onInput"
    @focus="onFocus"
>
```

反例：

``` vue
<input
    v-on:input="onInput"
    @focus="onFocus"
>
```

## 标签顺序保持一致

单文件组件应该总是让标签顺序保持为 `template > script > style` 

## 必须为 v-for 设置键值 key

## v-show 与 v-if 选择

如果运行时，需要非常频繁地切换，使用 `v-show` ；如果在运行时，条件很少改变，使用 `v-if`。

## script 标签内部结构顺序

`components > props > data > computed > watch > filter >` 钩子函数（钩子函数按其执行顺序） `> methods`