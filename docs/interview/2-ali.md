# 2.阿里淘系P6

<a name="WpOYp"></a>

## 一、题目

1. 简单自我介绍，并介绍项目和技术栈
2. 说一说 react 和 vue 的区别
3. 详细说说 react diff 算法
4. 详细说说观察者模式实现
5. http报文头部有哪些字段? 有什么意义 ?
6. 移动端高清方案 ?
7. webpack的原理，loader 和 plugin 是干什么的? 有自己手写过么 ?
8. 简述从网页输入url到网页展示的过程发生了哪些事情 ?
9. SSR 和 客户端渲染有什么区别？vue是如何实现绑定事件的 ?
10. 简述公司 node 架构中容灾的实现 ?
11. 浏览器事件有哪些过程? 为什么一般在冒泡阶段, 而不是在捕获阶段注册监听? addEventListener 参数分别是什么 ?
12. 面向对象如何实现? 需要复用的变量怎么处理 ?
13. 移动端300ms延时的原因? 如何处理?
14. 主流框架的数据单向/双向绑定实现原理 ?
<a name="dTzSO"></a>

## 二、答案

<a name="CUfXl"></a>

### 说一说 react 和 vue 的区别

| 对比点 | React | Vue |
| --- | --- | --- |
| 设计哲学 | 函数式编程，单向数据流，不可变数据 | 响应式编程，双向数据绑定，可变数据 |
| 模板语法 | 使用JSX，JavaScript的HTML扩展 | 使用HTML模板，内建指令和数据绑定 |
| 组件系统 | 组件化，使用类或函数组件 | 单文件组件(.vue)，模板、脚本、样式合一 |
| 状态管理 | 通常使用Redux或Context API | 内置Vuex |
| 条件和循环渲染 | 使用JavaScript逻辑 | 使用指令v-if、v-for |
| 事件处理、双向数据绑定、动态属性绑定等 | 使用原生事件onClick、onChange、{...}展开运算符等处理 | 使用指令v-on或简写@、v-model、v-bind或:符号等处理 |
| 类和样式绑定 | 使用条件渲染或classnames库 | 使用v-bind:class或v-bind:style |
| 插槽系统 | 支持具名插槽和函数式插槽 | 支持具名插槽和作用域插槽 |
| 性能优化 | 手动优化，使用React.memo等 | 自动优化，响应式系统，但可能Watcher过多导致性能问题 |
| 工具链和生态系统 | 丰富的生态系统，Webpack、Babel等 | Vue CLI、Vue Router、Vuex、Vite等 |
| 社区和企业支持 | Facebook支持，庞大的社区和企业用户 | 活跃的社区，尤雨溪领导 |
| 学习曲线 | 可能较陡峭，需要学习函数式编程和JSX | 较平缓，模板语法接近传统HTML和JavaScript |
| 跨平台开发 | React Native | Vue Native、Weex或Nativescript进行跨平台开发 |

<a name="HGlfh"></a>

### 详细说说 react diff 算法

React的Diff算法是一个复杂的过程，涉及到多个步骤和策略来最小化DOM操作，提高应用性能。以下是React Diff算法的详细介绍：

1. **树节点比较**：
   - 当组件的状态或属性发生变化时，React会创建一个新的虚拟DOM树。
   - 然后React会从根节点开始，比较新旧两棵树的对应节点。
2. **节点类型不同**：
   - 如果新旧节点类型不同，React会直接删除旧节点，并创建新节点替换它。
3. **节点类型相同**：
   - 如果节点类型相同，React会递归地比较它们的子节点。
4. **属性比较**：
   - 对于相同类型的节点，React会比较它们的属性，只更新发生变化的属性。
5. **子节点比较**：
   - 对于具有子节点的元素，React会按照以下步骤比较子节点：
      - 首先，React会创建两个子节点列表：旧子节点列表和新子节点列表。
      - 然后，React会尝试对子节点进行匹配，以确定哪些节点是相同的，哪些是不同的。
6. **关键索引（Keys）**：
   - 如果列表项有唯一的key属性，React可以使用key来识别哪些项是相同的，哪些是不同的。
   - 如果没有提供key，React会使用数组索引作为默认的key。
7. **列表的四种情况**：
   - **新增节点**：如果新子节点列表中有新的节点，React会创建并插入这些节点。
   - **删除节点**：如果旧子节点列表中有节点不再存在于新列表中，React会从DOM中删除这些节点。
   - **移动节点**：如果节点在新旧列表中都存在，但是位置发生了变化，React会移动这些节点到新的位置。
   - **更新节点**：如果节点在新旧列表中都存在且位置没有变化，但是节点的内容或属性发生了变化，React会更新这些节点。
8. **最小化DOM操作**：
   - React会根据上述比较结果，生成最小的DOM操作命令，以最小化DOM的变动。
9. **批量更新**：
   - React会将所有的更新操作批量执行，以减少浏览器的重排和重绘。
10. **组件的shouldComponentUpdate**：

- 对于类组件，React会在更新前调用shouldComponentUpdate生命周期方法，以决定是否需要执行更新。

11. **函数组件的React.memo**：

- 对于函数组件，可以使用React.memo来实现类似shouldComponentUpdate的功能。
![](https://cdn.nlark.com/yuque/__mermaid_v3/013799a2b99c6f846c5aa1950831ba7c.svg#lake_card_v2=eyJ0eXBlIjoibWVybWFpZCIsImNvZGUiOiJmbG93Y2hhcnQgVERcbiAgICBBW-W8gOWni-avlOi-g10gLS0-IEJ75qC56IqC54K55q-U6L6DPGJyPuexu-Wei-ebuOWQjD99XG4gICAgQiAtLSDmmK8gLS0-IENb6YCS5b2S5a2Q6IqC54K55q-U6L6DXVxuICAgIEIgLS0g5ZCmIC0tPiBEW-WIoOmZpOaXp-iKgueCuTxicj7liJvlu7rmlrDoioLngrldXG4gICAgQyAtLT4gRVvpgY3ljoblrZDoioLngrnliJfooahdXG4gICAgRSAtLT4gRnvlrZDoioLngrnmr5TovoM8YnI-57G75Z6L55u45ZCMP31cbiAgICBGIC0tIOaYryAtLT4gR1vlsZ7mgKfmr5TovoM8YnI-5LuF5pu05paw5Y-Y5YyW55qE5bGe5oCnXVxuICAgIEYgLS0g5ZCmIC0tPiBIW-WIoOmZpOaXp-WtkOiKgueCuTxicj7liJvlu7rmlrDlrZDoioLngrldXG4gICAgRyAtLT4gSXvliJfooajpobnmr5TovoM8YnI-5pyJ5ZSv5LiAa2V5P31cbiAgICBJIC0tIOaYryAtLT4gSlvkvb_nlKhrZXnljLnphY08YnI-56Gu5a6a55u45ZCM5oiW5LiN5ZCMXVxuICAgIEkgLS0g5ZCmIC0tPiBLW-S9v-eUqOe0ouW8leS9nOS4umtleTxicj7ov5vooYzljLnphY1dXG4gICAgSiAtLT4gTFvlpITnkIblm5vnp43mg4XlhrVdXG4gICAgSyAtLT4gTFxuICAgIEwgLS0-IE1b5paw5aKe6IqC54K5XVxuICAgIEwgLS0-IE5b5Yig6Zmk6IqC54K5XVxuICAgIEwgLS0-IE9b56e75Yqo6IqC54K5XVxuICAgIEwgLS0-IFBb5pu05paw6IqC54K5XVxuICAgIE0gLS0-IFFb5o-S5YWl5paw6IqC54K55YiwRE9NXVxuICAgIE4gLS0-IFJb5LuORE9N5Lit5Yig6Zmk6IqC54K5XVxuICAgIE8gLS0-IFNb56e75YqoRE9N6IqC54K55Yiw5paw5L2N572uXVxuICAgIFAgLS0-IFRb5pu05pawRE9N6IqC54K55YaF5a655oiW5bGe5oCnXVxuICAgIFEgLS0-IFVb5om56YeP5pu05pawXVxuICAgIFIgLS0-IFVcbiAgICBTIC0tPiBVXG4gICAgVCAtLT4gVVxuICAgIFUgLS0-IFZb5pu05paw5a6M5oiQXSIsInVybCI6Imh0dHBzOi8vY2RuLm5sYXJrLmNvbS95dXF1ZS9fX21lcm1haWRfdjMvMDEzNzk5YTJiOTljNmY4NDZjNWFhMTk1MDgzMWJhN2Muc3ZnIiwiaWQiOiJKVkhFcSIsIm1hcmdpbiI6eyJ0b3AiOnRydWUsImJvdHRvbSI6dHJ1ZX0sImNhcmQiOiJkaWFncmFtIn0=)<a name="dcezS"></a>

### 详细说说观察者模式实现

观察者模式（Observer Pattern），又称为发布-订阅模式（Publish-Subscribe Pattern），是一种常用的软件设计模式，用于在对象之间建立一种一对多的依赖关系，让一个对象的状态改变能够自动通知给依赖它的对象。以下是观察者模式实现的详细步骤和组成部分：
<a name="oLRba"></a>

#### 组成部分

1. **Subject（主题）**：
   - 也称为Observable，是观察者模式的核心，它持有观察者列表，并提供接口供观察者注册和注销自己。
2. **Observer（观察者）**：
   - 定义了观察者接收通知的接口，通常包含一个update方法。
3. **ConcreteSubject（具体主题）**：
   - 实现了Subject接口，包含实际状态和相关业务逻辑，当状态改变时，会通知所有注册的观察者。
4. **ConcreteObserver（具体观察者）**：
   - 实现了Observer接口，包含更新状态的逻辑，以响应来自具体主题的通知。
<a name="iESYB"></a>

#### 实现步骤

1. **定义Observer接口**：
   - 包含一个update方法，用于接收主题状态改变的通知。
2. **创建Subject类**：
   - 包含一个观察者列表，以及注册（attach）、注销（detach）和通知（notify）观察者的方法。
3. **实现具体主题（ConcreteSubject）**：
   - 包含业务逻辑和状态，当状态改变时，调用notify方法通知所有观察者。
4. **实现具体观察者（ConcreteObserver）**：
   - 实现Observer接口的update方法，定义接收通知后的行为。
5. **注册观察者**：
   - 将观察者对象注册到主题的观察者列表中。
6. **状态改变通知**：
   - 当主题的状态发生变化时，调用notify方法，遍历观察者列表并调用每个观察者的update方法。
7. **更新观察者**：
   - 观察者接收到通知后，执行update方法中的逻辑，更新自己的状态或行为。
<a name="o8oEe"></a>

#### 示例代码（JavaScript）

```javascript
// Observer 接口
class Observer {
  update(subject) {
    // 接收通知
  }
}

// ConcreteSubject
class ConcreteSubject {
  constructor() {
    this.observers = [];
    this.state = '';
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach(observer => observer.update(this));
  }

  setState(state) {
    this.state = state;
    this.notify();
  }
}

// ConcreteObserver
class ConcreteObserver extends Observer {
  update(subject) {
    console.log(`Observer: State changed. New state: ${subject.state}`);
  }
}

// 使用
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.attach(observer1);
subject.attach(observer2);

subject.setState('active'); // 通知所有观察者状态改变
```

在这个示例中，ConcreteSubject类包含状态和观察者列表，当状态改变时，会通知所有注册的观察者。ConcreteObserver类实现了Observer接口的update方法，用于响应状态变化的通知。观察者模式允许多个观察者订阅同一个主题，实现低耦合和高内聚的设计。
<a name="ZGQwg"></a>

### http报文头部有哪些字段? 有什么意义?

下面的表格将HTTP头部字段分为三类：**请求头部、响应头部和通用头部**。每个字段旁边都简要描述了它的意义和用途，使得信息的呈现更加清晰和易于理解。

| 头部字段分类 | 头部字段名 | 意义/用途 |
| --- | --- | --- |
| 1.请求头部 | Host | 指定服务器域名和端口号。 |
|  | User-Agent | 浏览器或客户端的名称和版本信息。 |
|  | Accept | 客户端能够处理的媒体类型。 |
|  | Accept-Language | 客户端偏好的语言。 |
|  | Accept-Encoding | 客户端能够解码的压缩算法。 |
|  | Authorization | 访问需要权限资源的认证信息。 |
|  | Cookie | 客户端存储的cookie信息。 |
|  | Content-Length | 请求体的长度。 |
|  | Content-Type | 请求体的媒体类型。 |
|  | If-None-Match | 资源的ETag值，用于缓存控制。 |
| 2.响应头部 | Server | 服务器软件的名称和版本。 |
|  | Date | 响应生成的日期和时间。 |
|  | Content-Type | 响应体的媒体类型。 |
|  | Content-Length | 响应体的长度。 |
|  | Set-Cookie | 设置客户端cookie的指令。 |
|  | Cache-Control | 控制响应的缓存行为。 |
|  | Expires | 响应过期的时间。 |
|  | ETag | 资源版本的标识符，用于缓存控制。 |
|  | Last-Modified | 资源最后被修改的时间。 |
|  | WWW-Authenticate | HTTP认证的挑战信息。 |
| 3.通用头部 | Connection | 控制HTTP连接的持久性。 |
|  | Transfer-Encoding | 传输报文的编码方式，如chunked。 |
|  | Via | 报文经过的代理服务器信息。 |
|  | Pragma | 实现特定的指令，用于向后兼容。 |
|  | Upgrade | 协议升级，客户端和服务器之间协议的升级。 |
|  | Warning | 关于可能的问题的警告信息。 |
|  | Allow | 资源允许的HTTP方法。 |

<a name="Ag97w"></a>

### 移动端高清方案

![](https://cdn.nlark.com/yuque/__mermaid_v3/f798516f4664efc82250bfb71461a82a.svg#lake_card_v2=eyJ0eXBlIjoibWVybWFpZCIsImNvZGUiOiJjbGFzc0RpYWdyYW1cbiAgICBjbGFzcyDpq5jmuIXmlrnmoYgge1xuICAgICAgICAr56Gu5a6a6ZyA5rGC5ZKM55uu5qCH6K6-5aSHXG4gICAgICAgICvpgInmi6nlkIjpgILnmoTlm77niYfmoLzlvI9cbiAgICAgICAgK-S9v-eUqOWTjeW6lOW8j-iuvuiuoeWNleS9jVxuICAgICAgICAr5a6e546w5LiN5ZCM5YiG6L6o546H55qE6YCC6YWNXG4gICAgfVxuICAgIGNsYXNzIOWbvueJh-S8mOWMliB7XG4gICAgICAgICvkvb_nlKjpq5jliIbovqjnjoflm77niYdcbiAgICAgICAgK-S4ulJldGluYeWxj-W5leS8mOWMllxuICAgICAgICAr5L2_55SoU1ZH5Zu-5b2iXG4gICAgICAgICvpgInmi6npq5jmlYjnmoTlm77niYfmoLzlvI9cbiAgICAgICAgK-mAmui_h3NyY3NldOWxnuaAp-aPkOS-m-WkmuWIhui-qOeOh-WbvueJh1xuICAgIH1cbiAgICBjbGFzcyDlk43lupTlvI_orr7orqEge1xuICAgICAgICAr5L2_55SoQ1NT5aqS5L2T5p-l6K-iXG4gICAgICAgICvkvb_nlKjlk43lupTlvI_ljZXkvY1cbiAgICAgICAgK-iuvue9rnZpZXdwb3J05YWD5L-h5oGvXG4gICAgICAgICvliY3nq6_moYbmnrbnmoTlk43lupTlvI_orr7orqHmlK_mjIFcbiAgICB9XG4gICAgY2xhc3Mg5oCn6IO95LyY5YyWIHtcbiAgICAgICAgK-WbvueJh-aHkuWKoOi9veaKgOacr1xuICAgICAgICAr5pyN5Yqh56uv5riy5p-TXG4gICAgICAgICvkvb_nlKhDRE7liIblj5Hlm77niYdcbiAgICAgICAgK-e8k-WtmOetlueVpVxuICAgICAgICAr5rWL6K-V5ZKM6YCC6YWNXG4gICAgfVxuXG4gICAg6auY5riF5pa55qGIIG8tLSDlm77niYfkvJjljJY6IOWMheWQq1xuICAgIOmrmOa4heaWueahiCBvLS0g5ZON5bqU5byP6K6-6K6hOiDljIXlkKtcbiAgICDpq5jmuIXmlrnmoYggby0tIOaAp-iDveS8mOWMljog5YyF5ZCrIiwidXJsIjoiaHR0cHM6Ly9jZG4ubmxhcmsuY29tL3l1cXVlL19fbWVybWFpZF92My9mNzk4NTE2ZjQ2NjRlZmM4MjI1MGJmYjcxNDYxYTgyYS5zdmciLCJpZCI6IlZXeTFmIiwibWFyZ2luIjp7InRvcCI6dHJ1ZSwiYm90dG9tIjp0cnVlfSwiY2FyZCI6ImRpYWdyYW0ifQ==)<a name="HfuWJ"></a>

### webpack的原理，loader 和 plugin 是干什么的? 有自己手写过么 ?

Webpack是一个现代JavaScript应用程序的静态模块打包器（module bundler）。它的主要目的是将项目中的所有依赖项（JavaScript、图片、CSS等）打包成一个或多个bundle，以便可以优化和在浏览器中使用。下面是Webpack的原理以及Loader和Plugin的作用：
<a name="COw0b"></a>

#### Webpack原理

1. **入口点（Entry）**： Webpack从指定的入口文件开始分析和构建依赖图。
2. **依赖图（Dependency Graph）**： Webpack递归地找出所有依赖项，并构建一个依赖图。
3. **Loader转换（Loader Transformation）**： Loader用于将某些类型的模块从原始源代码转换为浏览器可执行代码。例如，将ES6代码转换为ES5。
4. **插件扩展（Plugin Extension）**： Plugin用于在Webpack构建过程中执行更广泛的任务，如压缩代码、分割代码、优化图片等。
5. **输出（Output）**： Webpack根据配置将依赖图转换成一个或多个bundle，并输出到指定路径。
6. **代码分割（Code Splitting）**： Webpack可以智能地将代码分割成多个chunk，实现按需加载，提高应用性能。
7. **缓存（Caching）**： Webpack提供了开发服务器和持久化缓存机制，以加快构建速度。
<a name="BUywI"></a>

#### Loader

- Loader是Webpack的模块加载器，它们允许你在构建过程中预处理文件。
- Loader可以将不同类型的文件转换成JavaScript模块，例如：
  - babel-loader：将ES6+代码转换为向后兼容的JavaScript版本。
  - style-loader和css-loader：允许你导入CSS文件，并将其作为样式表应用。
  - file-loader和url-loader：处理图片和其他文件的导入，将它们嵌入或输出到构建目录。
<a name="Jkv6h"></a>

#### Plugin

- Plugin为Webpack提供了额外的功能，如环境变量注入、代码分割、压缩等。
- 一些常用的插件包括：
  - HtmlWebpackPlugin：自动创建一个包含所有bundle的HTML文件。
  - UglifyJsPlugin：用于压缩JavaScript文件。
  - MiniCssExtractPlugin：将CSS提取到单独的文件中。
<a name="WiECw"></a>

#### 手写Loader和Plugin

编写自定义Loader和Plugin是Webpack高级用法的一部分，通常在以下情况下需要：

- 当现有的Loader不能满足特定转换需求时。
- 当需要扩展Webpack的功能，执行特定的构建任务时。

自定义Loader示例（伪代码）：

```javascript
module.exports = function(source) {
  // source是loader处理的源文件内容
  // 这里可以进行转换操作
  const transformedSource = someTransformation(source);
  return transformedSource;
};
```

自定义Plugin示例（伪代码）：

```javascript
class MyCustomPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('MyCustomPlugin', compilation => {
      // compilation是当前的构建过程
      // 可以在这里执行自定义逻辑，如修改文件、添加内容等
    });
  }
}

module.exports = MyCustomPlugin;
```

在实际开发中，编写Loader和Plugin需要对Webpack的工作原理有深入的理解，以及对Node.js的文件处理和事件循环有较好的掌握。自定义Loader和Plugin可以大大增强Webpack的灵活性和功能，但同时也增加了项目的复杂性。
<a name="YDho5"></a>

### addEventListener 参数分别是什么? 浏览器事件有哪些过程? 为什么一般在冒泡阶段, 而不是在捕获阶段注册监听?

<a name="mJNJA"></a>

#### （1）addEventListener 方法参数

- type：字符串，表示要监听的事件的类型，如'click'、'mouseover'等。
- listener：函数，当事件触发时调用的回调函数。
- options：对象，可选，包含一些额外的设置：
  - capture：布尔值，表示事件处理是否在捕获阶段调用。默认为false，表示在冒泡阶段调用。
  - once：布尔值，表示这个监听器是否应该在触发一次后被自动移除。
  - passive：布尔值，表示监听器是否永远不会调用event.preventDefault()。这可以用来优化滚动和触摸事件的性能。
  - 其他选项可能包括{ useCapture, passive, once }等。

以下是一个使用addEventListener的示例：

```javascript
const element = document.getElementById('myElement');
// 注册点击事件监听器
element.addEventListener('click', function(event) {
  console.log('Element clicked!');
}, {
  capture: false, // 表示在冒泡阶段调用监听器
  once: false,    // 表示这个监听器不会在触发一次后自动移除
  passive: false  // 表示监听器可能会调用preventDefault()
});
```

在这个示例中，我们给具有ID myElement的DOM元素添加了一个点击事件监听器，并且指定了监听器在冒泡阶段触发。
<a name="LOp38"></a>

#### （2）浏览器事件模型包含三个主要过程

1. **事件捕获（Event Capturing）**：事件从文档的根节点（如document对象）开始向下传播，直到目标元素。这个阶段可以捕获事件的初始阶段。
2. **事件目标识别（Target Identification）**：事件到达目标元素，这是事件触发的元素。
3. **事件冒泡（Event Bubbling）**：事件从目标元素向上冒泡回文档根节点。在这个阶段，可以处理事件的后续影响。
<a name="khrDP"></a>

#### （3）为什么通常在冒泡阶段而不是捕获阶段注册监听？

- **自然行为**：事件冒泡是符合大多数用户直觉的事件传播方式，事件从触发点开始向外扩散。
- **事件委托**：在冒泡阶段注册监听可以实现事件委托，这是一种性能优化手段。通过在父元素上注册监听器来管理子元素的事件，可以减少内存占用和提高性能。
- **特定行为**：某些行为（如点击列表项）更自然地在冒泡阶段处理，因为可以在列表的父元素上统一处理所有子项的点击事件。
- **兼容性**：尽管现代浏览器支持捕获阶段，但冒泡阶段的使用更广泛，更兼容。
<a name="VyCAh"></a>

### Vue是如何实现绑定事件的？

Vue.js 中实现事件绑定的原理涉及到 Vue 的响应式系统和虚拟 DOM 的更新机制。下面是 Vue 绑定事件的原理：

1. **响应式系统**：Vue 使用数据劫持和发布-订阅模式来创建响应式系统。Vue 实例的每个属性都是响应式的，当属性值变化时，订阅该属性的 Watcher 会被通知。
2. **编译模板**：Vue 启动时会对模板进行编译。编译过程中，Vue 会识别模板中的指令，包括 v-on 指令。
3. **指令处理器**：Vue 的指令如 v-on 由对应的指令处理器处理。指令处理器是一个对象，包含了几个具有特定功能的钩子函数，如 bind、inserted、update 和 unbind。
4. **事件绑定的 bind 钩子**：在 v-on 指令的 bind 钩子中，Vue 会创建一个事件监听器，并将其与特定的 DOM 元素关联。
5. **事件侦听器的创建**：Vue 使用原生 JavaScript 的 addEventListener 方法来添加事件侦听器。
6. **事件处理器**：事件侦听器的实际处理函数会被注册到 Vue 实例的 methods 中定义的方法。
7. **事件修饰符**：Vue 支持事件修饰符，如 .stop、.prevent 和 .capture。这些修饰符会在创建事件侦听器时应用。
8. **更新事件侦听器**：如果 v-on 绑定的表达式（即事件处理函数）发生变化，Vue 会相应地更新事件侦听器。
9. **虚拟 DOM 事件**：Vue 的虚拟 DOM 系统中，事件绑定被抽象为 vnode（虚拟 DOM 节点）的一部分。当 vnode 被渲染到真实 DOM 时，事件侦听器会被添加到对应的 DOM 元素上。
10. **事件触发**：当事件发生时，浏览器会调用事件侦听器。Vue 的侦听器会将事件派发到 Vue 实例的 methods 中注册的处理函数。
11. **事件对象**：事件处理函数可以接收一个事件对象参数，该对象包含有关事件的详细信息。
12. **组件事件**：在组件中，Vue 使用自定义事件系统来实现父子组件间的通信。这涉及到 $emit 和 $on 方法。

Vue 的事件绑定机制是自动和响应式的。它允许开发者以声明式的方式在模板中绑定事件处理函数，而无需手动操作 DOM 或事件侦听器。这种机制简化了事件处理的复杂性，并提高了代码的可维护性和可读性。
<a name="ZWNbk"></a>

### 主流框架的数据单向/双向绑定实现原理 ?

深入探讨主流框架的数据单向和双向绑定实现原理，我们可以从React和Vue这两个框架的内部机制来分析。
<a name="jX0bl"></a>

#### （1）Vue

Vue 的数据绑定主要基于其响应式系统，具体实现如下：

1. **响应式对象**: Vue使用Object.defineProperty（Vue 2.x）或Proxy（Vue 3.x）来劫持数据对象的getter和setter，实现响应式追踪。
2. **依赖收集**: 当组件访问响应式状态时，Vue会记录这个组件对状态的依赖。这是通过在组件的渲染过程中记录访问的响应式属性实现的。
3. **派发更新**: 当响应式状态被修改时，Vue会通知所有依赖这些状态的组件。这通常通过调用组件的更新方法实现，导致组件重新渲染。
4. **虚拟DOM**: Vue使用虚拟DOM来比较新旧状态，并计算出最小的更新范围。只有当状态改变时，才会触发虚拟DOM的重新渲染。
5. **双向绑定**: Vue的v-model是双向绑定的语法糖。它实际上是value属性和input事件的结合体。Vue会自动在适当的时候更新DOM输入的值，并在输入值改变时更新数据。
6. **异步更新队列**: Vue批量处理数据更新，避免不必要的重复渲染。当状态被更新时，Vue会将更新放入一个异步队列，然后按顺序执行更新。
<a name="Qxlip"></a>

#### （2）React

React 的数据绑定实现基于组件的状态和属性，以及它们如何触发组件的重新渲染：

1. **状态和属性**: React的状态是组件内部的，可以通过setState更新。属性是父组件传递给子组件的，通常是不可变的。
2. **组件的渲染**: React组件的渲染是通过调用组件的render方法或函数组件本身来完成的。状态或属性的变化会触发重新渲染。
3. **生命周期方法/Hooks**: 类组件的生命周期方法（如componentDidUpdate）或函数组件的useEffect Hook可以用来响应状态变化。
4. **不可变数据原则**: React推崇使用不可变数据模式。这意味着在更新状态时，应该创建新的状态对象，而不是直接修改现有状态。
5. **虚拟DOM**: React使用虚拟DOM来减少实际DOM操作的次数。状态变化时，React会生成一个新的虚拟DOM树，并与旧的虚拟DOM树进行比较。
6. **调和过程（Reconciliation）**: React的调和过程是自上而下的，从根组件开始，遍历整个组件树，更新需要重新渲染的组件。
7. **模拟双向绑定**: React没有内置的双向绑定，但可以通过组合使用状态和回调函数来模拟。例如，在表单元素中，使用value属性控制输入的值，并通过onChange事件更新状态。
<a name="i9hu8"></a>

### 面向对象如何实现? 需要复用的变量怎么处理 ?

面向对象编程（OOP）是一种编程范式，它使用“对象”来设计软件。对象可以包含数据（通常称为属性或字段）和代码（通常称为方法或函数）。以下是面向对象编程的基本实现步骤和概念：

1. **定义类（Class）**：类是对象的蓝图或模板。它定义了对象的属性和方法。
2. **创建对象（Instantiation）**：使用类来创建具体的对象实例。
3. **封装（Encapsulation）**：将数据和操作这些数据的代码组合在一起，并对外部隐藏实现细节。
4. **继承（Inheritance）**：允许一个类（子类）继承另一个类（父类或超类）的属性和方法。
5. **多态（Polymorphism）**：允许同一个接口接受不同的数据类型，或在子类中重写父类的方法。
6. **抽象（Abstraction）**：简化复杂的现实世界问题，通过类和对象来表示问题的主要特征。

对于需要复用的变量，面向对象编程提供了几种处理方式：

1. **全局变量**：在某些语言中，全局变量可以在任何地方访问，但过度使用全局变量可能导致代码难以维护。
2. **类属性**：将变量定义为类的一部分，这样所有实例都可以访问和使用这些变量。
3. **单例模式**：确保一个类只有一个实例，并提供一个全局访问点。
4. **依赖注入**：通过构造函数、方法或属性将变量传递给对象，而不是在对象内部创建。
5. **工厂模式**：使用工厂类来创建和复用对象，隐藏对象创建的复杂性。
6. **模块化**：在支持模块化的语言中，可以将变量定义在模块中，并使用export/import语句来共享。
7. **原型继承**：在某些语言中（如JavaScript），对象可以通过原型链来共享属性和方法。

以下是一个简单的面向对象编程示例（使用JavaScript）：

```javascript
// 定义一个类
class Animal {
  
  constructor(name) {
    this.name = name; // 实例变量
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }

  // 静态变量，类变量
  static species = 'Animal';
}

// 创建对象实例
const myAnimal = new Animal('Charlie');

// 使用对象的方法
myAnimal.speak(); // 输出: Charlie makes a noise.

// 访问静态属性
console.log(Animal.species); // 输出: Animal
```

在这个示例中，Animal 类有一个构造函数、一个实例方法 speak 和一个静态属性 species。通过 new 关键字创建 Animal 的实例 myAnimal，然后调用其方法和属性。<br />面向对象编程的核心是将数据和行为封装到对象中，并通过继承、多态和抽象来提高代码的复用性和可维护性。
<a name="AVdjT"></a>

### 移动端300ms延时的原因? 如何处理?

移动端的300ms延时主要是由于浏览器的双击缩放（double tap to zoom）机制引起的。在早期移动Web设计中，为了适应小屏幕设备浏览为大屏幕设计的网页，浏览器实现了双击缩放功能1234。当用户在移动设备上轻触屏幕时，浏览器会等待300毫秒，以确定用户是否要进行双击缩放操作。这样做是为了避免用户在快速双击放大页面时，意外触发了页面的点击事件1237。<br />处理移动端300ms延时的方法有以下几种：

1. **使用meta标签禁用缩放功能**： 在HTML文档头部添加如下meta标签，可以禁用移动端浏览器的缩放功能，从而解决300毫秒的问题：

```javascript
<meta name="viewport" content="width=device-width, user-scalable=no">
```

但这种方法的缺点是，它会影响到一些移动设备下的用户体验，因为它完全禁用了页面的缩放功能。

2. **使用FastClick库**： FastClick是一个JavaScript库，专门用于解决移动端浏览器的300ms延迟问题。它通过检测用户的touch事件来模拟点击事件，并能够处理移动设备的touch事件，从而提高点击响应速度。FastClick的实现原理是在检测到touchend事件时，立即通过DOM自定义事件发出模拟的click事件，并阻止浏览器在300ms后发出的click事件。
3. **使用CSS的touch-action属性**： touch-action属性可以指定在元素上能够触发的浏览器默认行为。将该属性设置为touch-action: none，可以告诉浏览器在该元素上的操作不会触发任何默认行为，从而避免300ms的延迟判断。
4. **使用touch事件代替click事件**： 移动设备支持touch事件，可以通过touchstart和touchend事件来模拟click事件，减少点击延迟。但需要注意的是，touch事件有时也会有延迟，并且可能会出现点击穿透现象，因此这种方法并不适用于所有场景。
5. **封装自定义的tap函数**： 可以封装一个处理touch事件的函数，通过检测触摸时间差和屏幕移动距离来判断是否为点击操作，如果是，则手动触发点击事件的处理函数，以此规避300ms的延迟。

开发者可以根据具体需求和场景选择适合的方法来解决移动端的300ms点击延迟问题。
<a name="hv4UW"></a>

### 简述从网页输入url到网页展示的过程发生了哪些事情 ?

从在网页浏览器中输入URL到网页展示出来，整个过程涉及多个步骤，主要包括：

1. **DNS解析**： 输入URL后，浏览器首先需要将域名解析为IP地址。这通常通过DNS（域名系统）查询完成。
2. **TCP连接**： 浏览器使用IP地址建立到服务器的TCP连接。这包括一个三次握手过程，确保连接的可靠性。
3. **HTTP请求**： 一旦TCP连接建立，浏览器发送HTTP（或HTTPS）请求到服务器。请求包括请求方法（如GET）、请求的资源路径、协议版本等。
4. **服务器处理请求**： 服务器接收到请求后，根据请求的资源路径处理请求。这可能包括查询数据库、执行后端逻辑等。
5. **HTTP响应**： 服务器处理请求后，将响应发送回浏览器。响应包括状态码（如200表示成功）、响应头和响应体（通常是HTML内容）。
6. **TCP连接关闭**： 数据传输完成后，TCP连接通常会关闭，这通过一个四次挥手过程实现。
7. **HTML解析**： 浏览器接收到HTML响应后，开始解析HTML，构建DOM（文档对象模型）树。
8. **CSS样式应用**： 浏览器应用CSS样式，将DOM树和CSSOM（CSS对象模型）结合起来，形成渲染树。
9. **JavaScript执行**： 浏览器执行HTML中的JavaScript代码，这可能会修改DOM或CSSOM，从而影响渲染树。
10. **页面渲染**： 浏览器根据渲染树进行布局（layout）和绘制（painting），将网页渲染到屏幕上。
11. **资源加载**： 浏览器并行加载HTML中引用的其他资源，如图片、CSS文件、JavaScript文件等。
12. **重绘和重排**： 如果JavaScript代码或CSS更改导致布局或样式变化，浏览器可能需要进行重绘和重排。
13. **页面交互**： 页面渲染完成后，用户可以与页面交互，如点击链接、填写表单等，浏览器响应这些事件。

这个过程是网络通信、服务器处理、浏览器渲染等多个环节协同工作的结果，现代浏览器和网络协议栈高度优化了这一过程，以确保快速、高效地加载和渲染网页。
<a name="a92h1"></a>

### SSR和客户端渲染有什么区别？

服务器端渲染（SSR）和客户端渲染（CSR）是两种不同的网页内容渲染方式，它们在Web开发中有不同的应用场景和特点：
<a name="taQiE"></a>

#### 服务器端渲染（SSR）

1. **渲染位置**：
   - 在服务器上生成完整的HTML内容，然后发送到客户端。
2. **首屏加载**：
   - 由于HTML内容已经在服务器上生成，首屏加载时间更快，有利于SEO。
3. **性能**：
   - 服务器需要承担渲染页面的计算压力，对服务器性能要求较高。
4. **交互性**：
   - 页面加载完成后，客户端JavaScript才会被解析和执行，之后页面才能变得交互式。
5. **适用场景**：
   - 适合内容型网站，尤其是依赖搜索引擎优化（SEO）的网站。
6. **实现方式**：
   - 使用Node.js等技术在服务器端执行渲染逻辑，如Next.js、Nuxt.js等框架。
<a name="qiig9"></a>

#### 客户端渲染（CSR）

1. **渲染位置**：
   - 在用户的浏览器中，通过JavaScript动态生成页面内容。
2. **首屏加载**：
   - 首屏加载时间可能较长，因为需要等待JavaScript加载并执行完成后才能显示内容。
3. **性能**：
   - 减轻服务器压力，将计算和渲染工作放在客户端完成。
4. **交互性**：
   - 可以更快地响应用户操作，因为JavaScript代码可以立即与DOM交互。
5. **适用场景**：
   - 适合交互性强的Web应用，如单页应用（SPA）。
6. **实现方式**：
   - 使用现代前端框架（如React、Vue、Angular）在浏览器中构建用户界面。
<a name="bqKTI"></a>

#### 区别总结

- **SEO友好性**：SSR由于在服务器上生成HTML，更有利于搜索引擎爬虫抓取，对SEO更友好。
- **加载时间**：SSR通常提供更快的首屏加载时间，而CSR可能需要等待JavaScript加载和执行。
- **服务器负载**：SSR可能会增加服务器负载，而CSR将更多的工作交给客户端处理。
- **开发复杂度**：SSR可能需要更复杂的服务器端逻辑和框架支持，CSR则主要关注客户端逻辑。
- **用户体验**：CSR可以提供更流畅的用户体验，因为它允许在不重新加载页面的情况下与页面交互。

选择SSR还是CSR应根据应用的具体需求、预期用户规模、SEO要求以及开发团队的技术栈和偏好来决定。
<a name="xa1Pj"></a>

### 简述 node 架构中容灾的实现 ?

Node.js架构中实现容灾（Disaster Recovery）通常涉及多个层面的策略和技术，以确保在发生故障或灾难时应用能够快速恢复。以下是一些常见的容灾实现方法：

1. **数据备份**：定期备份数据，确保在数据丢失或损坏时能够恢复。
2. **多区域部署**：在不同的地理区域部署应用，当一个区域发生故障时，其他区域可以继续提供服务。
3. **负载均衡**：使用负载均衡器分配请求到多个服务器，提高应用的可用性和容错能力。
4. **故障转移和故障恢复**：实现故障转移机制，当主节点失败时自动切换到备用节点。
5. **高可用性集群**：使用高可用性集群技术，如Paxos或Raft，确保服务的持续运行。
6. **数据库复制**：使用数据库的主从复制或多主复制，确保数据的一致性和容灾能力。
7. **微服务架构**：采用微服务架构，各个服务独立部署，降低单点故障的影响。
8. **自动扩展**：实现自动扩展策略，根据负载动态增加或减少资源。
9. **健康检查和监控**：定期进行健康检查，实时监控应用和服务器的状态，快速响应问题。
10. **限流和降级**：在系统压力过大时，实施限流和降级策略，保护系统稳定运行。
11. **容器化和编排**：使用Docker等容器技术，结合Kubernetes等编排工具，快速恢复服务。
12. **服务网格和服务发现**：使用Istio或Linkerd等服务网格技术，实现服务发现和容灾处理。
13. **持续集成和持续部署（CI/CD）**：通过自动化的CI/CD流程快速部署和回滚应用。
14. **网络安全策略**：实施网络安全策略，防止DDoS攻击等安全威胁。
15. **灾难恢复计划**：制定详细的灾难恢复计划和流程，定期进行演练。
