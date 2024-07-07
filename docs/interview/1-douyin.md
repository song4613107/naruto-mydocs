# 1.抖音剪映

<a name="ZyC0K"></a>

## 一、题目

1. 性能优化手段
2. SSR服务端异常处理
3. SSR水合过程实现原理
4. SSR首屏渲染和CSR渲染不一致怎么办
5. React的优化方案有哪些
6. React.memo、useCallback、useMemo介绍
7. React.memo里的props是怎么做变化对比的
8. React Fiber了解么？为什么对性能更好？
9. 笔试题（1）：经典useEffect里写setInterval和setState(count+1)，为什么不会更新count值？
10. 笔试题（2）：手写一个useSetInterval Hooks实现上述功能
11. 笔试题（3）：手写一个请求节流器 sendRequest函数
<a name="FVgHV"></a>

## 二、答案

<a name="KRBPD"></a>

### 1.前端性能优化手段

前端性能优化是一个持续的过程，涉及到多个方面，以下是一些常见的前端性能优化手段：

1. **代码分割**：使用Webpack、Vite等模块打包工具进行代码分割，按需加载资源。
2. **懒加载**：对图片、组件等进行懒加载，只有在用户滚动到视窗内时才加载。
3. **服务端渲染（SSR）**：首屏使用服务端渲染，减少客户端渲染时间。
4. **使用CDN**：将静态资源部署在CDN上，加快资源加载速度。
5. **压缩资源**：压缩CSS、JavaScript文件和图片，减少文件体积。
6. **缓存利用**：利用浏览器缓存、本地存储、IndexedDB等技术缓存数据。
7. **减少重绘和回流**：优化DOM操作，避免频繁的DOM变更和样式计算。
8. **使用Web Workers**：将复杂计算放在Web Workers中执行，避免阻塞主线程。
9. **优化图片**：使用合适的图片格式（如WebP）、压缩图片、使用图片懒加载。
10. **预加载和预取**：使用<link rel="preload">预加载关键资源，使用<link rel="prefetch">预取可能需要的资源。
11. **服务端性能优化**：优化后端服务，减少响应时间。
12. **使用HTTP/2**：利用HTTP/2的多路复用特性，减少连接建立时间。
13. **减少第三方库**：减少不必要的第三方库的使用，降低依赖和加载时间。
14. **优化字体加载**：合理使用字体文件，避免字体加载阻塞页面渲染。
15. **优化CSS选择器**：避免使用复杂的CSS选择器，减少选择器解析时间。
16. **使用骨架屏**：在页面加载过程中使用骨架屏，提升用户体验。
17. **优化API请求**：合并API请求，减少请求次数，使用请求缓存。
18. **优化交互动画**：使用CSS动画代替JavaScript动画，减少主线程负担。
19. **使用Intersection Observer API**：实现更高效的懒加载和无限滚动。
20. **优化表单处理**：使用防抖和节流技术优化表单输入事件。
21. **使用Tree Shaking**：移除未使用的代码，减少最终打包文件的大小。
22. **使用Critical CSS**：提取并优先加载页面首屏渲染所需的CSS。
23. **使用Lighthouse等性能分析工具**：定期检查并优化页面性能。
24. **避免使用复杂的CSS布局**：使用Flexbox或Grid布局替代传统的布局方式。
25. **使用原生组件**：在适当的情况下使用原生HTML元素代替复杂的组件。
<a name="cvDRM"></a>

### 2.SSR服务端异常处理

服务端渲染（SSR）过程中的异常处理是确保应用稳定性和用户体验的重要环节。以下是一些关键点和策略，用于处理SSR中的服务端异常：

1. **异常捕获**：在服务端的数据预获取和渲染过程中，使用try-catch语句来捕获可能发生的异常39。
2. **错误日志记录**：当异常发生时，记录详细的错误信息和堆栈跟踪，这有助于后续的问题诊断和修复35。
3. **用户友好的错误页面**：避免直接向用户展示技术性错误信息，而是提供一个友好的错误页面，告知用户发生了错误，并提供返回首页或联系支持的选项。
4. **服务端数据预获取异常处理**：在数据获取过程中，如果发生异常，可以选择让页面继续渲染，而不是直接抛出500错误，同时记录错误日志，并可能在客户端重试数据获取。
5. **渲染过程中的异常处理**：如果在渲染过程中出现异常，需要有策略来决定是继续渲染一个没有数据的页面，还是显示错误信息。
6. **接口代理问题处理**：在SSR中，服务端需要能够正确地处理接口代理，确保服务端能够访问到正确的后端服务。
7. **Cookie穿透问题**：确保服务端在请求后端接口时，能够携带客户端的cookie，以保持会话的连续性。
8. **服务端渲染性能优化**：通过页面级别、组件级别和接口级别的缓存来提高服务端渲染的性能。
9. **安全性考虑**：SSR服务可能会面临DDOS攻击、SQL注入和数据泄露等安全问题，需要采取相应的安全措施，比如使用HTTPS、输入验证、限制请求频率等。
10. **服务端资源管理**：确保服务端资源（如内存和CPU）得到合理管理，以避免因资源耗尽导致的异常。
11. **高可用性设计**：通过负载均衡、故障转移和冗余设计来提高服务端的可用性。
12. **定期维护和监控**：定期对服务器进行维护和监控，确保及时发现并处理潜在的异常。
13. **自定义异常处理**：在Spring框架中，可以通过@ControllerAdvice和@ExceptionHandler来实现全局或局部的异常处理，返回统一的错误响应格式。
14. **状态码使用**：合理使用HTTP状态码来表示不同类型的异常，例如404 Not Found和500 Internal Server Error5。
15. **测试和验证**：对SSR的异常处理逻辑进行充分的测试，包括单元测试和集成测试，确保异常处理按预期工作。

通过这些策略，可以有效地管理和响应SSR中的服务端异常，提高应用的健壮性和可靠性。
<a name="hMz1Y"></a>

### 3.SSR水合过程实现原理

SSR（服务端渲染）中的水合过程，也称为客户端水合（Client-side Hydration），是指客户端JavaScript代码接管服务端渲染的HTML内容，使其变为一个完全交互的页面的过程。以下是SSR水合过程的实现原理：

1. **服务端渲染**：首先，服务端接收到页面请求后，根据请求的路由信息，找到对应的页面组件，并执行组件的渲染方法，将组件转化为HTML字符串。
2. **发送到客户端**：服务端将渲染好的HTML字符串发送给客户端。这个HTML字符串可能包含一些占位符，例如<div id="root"></div>，用于客户端JavaScript挂载。
3. **客户端JavaScript加载**：客户端浏览器接收到HTML后，开始解析并渲染页面。同时，客户端JavaScript代码（例如React库）开始加载。
4. **水合过程**：客户端JavaScript代码加载完成后，它将使用ReactDOM.hydrate（或其他框架的类似方法）来接管服务端渲染的DOM。这个过程包括：
   - 客户端JavaScript比较服务端渲染的HTML和当前页面的DOM树。
   - 如果发现差异，客户端JavaScript将更新DOM以确保一致性。
   - 客户端JavaScript绑定事件处理器，使页面变得可交互。
5. **事件委托**：在水合过程中，客户端JavaScript通常会使用事件委托机制，将事件监听器添加到根节点上，然后根据事件冒泡的机制来处理具体的事件。
6. **数据同步**：如果服务端渲染过程中有数据获取，客户端JavaScript可能需要同步这些数据，以确保客户端状态与服务端渲染的状态一致。
7. **优化和性能**：水合过程需要尽量减少重渲染和DOM操作，以提高性能。这可能涉及到服务端和客户端的代码优化，以及避免不必要的数据获取和状态同步。

水合过程是SSR中非常关键的一步，它确保了服务端渲染的内容能够在客户端上以一种高效和用户友好的方式变得可交互。
<a name="GPOxv"></a>

### 4.SSR首屏渲染和CSR渲染不一致怎么办

SSR（服务端渲染）和CSR（客户端渲染）之间出现首屏渲染不一致的问题通常由几个因素引起，比如数据获取方式、执行环境差异、代码逻辑差异等。以下是一些解决这一问题的策略：

1. **保持数据获取一致性**：确保服务端和客户端使用相同的数据获取逻辑和API。如果服务端渲染依赖于特定的数据，客户端也应获取相同的数据以确保渲染结果一致。
2. **使用同构代码**：开发可在服务端和客户端运行的同构代码，确保在不同环境中行为一致。
3. **状态管理同步**：如果应用中使用了状态管理库（如Redux或Vuex），确保服务端和客户端的状态管理逻辑同步，状态在客户端能够正确地重新初始化。
4. **避免客户端特定代码**：在服务端渲染过程中避免使用只能在客户端执行的代码，比如某些DOM操作或浏览器API调用。
5. **客户端激活状态**：在客户端使用ReactDOM.hydrate（React）或其他框架的等效方法，确保客户端能够激活服务端渲染的标记，而不是重新渲染整个页面。
6. **使用服务端事件模拟**：对于某些需要事件绑定的交互，可以在服务端模拟事件，然后在客户端重新触发这些事件。
7. **服务端渲染错误处理**：在服务端渲染过程中加入错误处理机制，如果渲染失败，能够给客户端返回一个备用的CSR版本或者错误页面。
8. **客户端回退机制**：如果SSR渲染出现问题，客户端应有回退机制，比如加载一个备用的客户端渲染版本。
9. **服务端渲染测试**：进行充分的服务端渲染测试，确保在不同场景下都能提供一致的用户体验。
<a name="bOEvF"></a>

### 5.React的优化方案有哪些

React 是一个用于构建用户界面的 JavaScript 库，它在开发过程中非常流行。为了提高 React 应用的性能和用户体验，有多种优化方案可以采用。以下是一些常见的优化策略：

1. **代码分割和懒加载（Code Splitting and Lazy Loading）**：
   - 使用 React.lazy() 进行组件懒加载，按需加载那些在特定路由或条件下才需要的组件。
   - 使用 Suspense 组件来包裹懒加载的组件，以展示加载状态。
2. **使用 React.memo 和 PureComponent**：
   - 对于函数组件，使用 React.memo 来避免不必要的渲染。
   - 对于类组件，继承 PureComponent 以减少不必要的渲染。
3. **避免在渲染方法中进行复杂的计算**：
   - 将复杂的计算逻辑移出组件的渲染路径，例如使用 useCallback 和 useMemo 钩子。
4. **使用 shouldComponentUpdate、getDerivedStateFromProps 和 getSnapshotBeforeUpdate 生命周期方法**：
   - 对于类组件，这些方法可以用来控制组件的更新。
5. **优化列表渲染**：
   - 使用 React.KeyedFragments 来避免不必要的列表项重新渲染。
   - 确保列表中每一项的 key 是唯一且稳定的。
6. **使用生产者/消费者模式（Producer/Consumer Pattern）**：
   - 对于复杂的组件树，使用 React.createFactory 来避免重复创建相同的组件实例。
7. **优化状态管理**：
   - 合理组织状态结构，避免不必要的全局状态。
   - 使用状态管理库（如 Redux 或 MobX）来优化状态更新。
8. **服务端渲染（Server-Side Rendering, SSR）**：
   - 对于首屏渲染性能要求较高的应用，可以使用服务端渲染。
9. **使用静态站点生成（Static Site Generation, SSG）**：
   - 对于数据不经常变动的页面，可以使用静态站点生成来提升加载速度。
10. **减少重绘和回流**：

- 避免在 DOM 更新时触发不必要的重绘和回流。

11. **使用 Profiler 组件进行性能监控**：

- React 18 引入了新的 Profiler 组件，用于测量组件渲染的性能。

12. **避免使用内联函数作为 prop**：

- 内联函数作为 prop 传递会导致子组件每次父组件渲染时都重新创建。

13. **使用 useReducer 替代复杂的 useState**：

- 当状态更新逻辑变得复杂时，使用 useReducer 可以更好地组织代码。

14. **优化路由配置**：

- 使用 React Router 等库时，合理配置路由，避免路由的重复渲染。

15. **使用自定义 Hooks**：

- 自定义 Hooks 可以封装组件逻辑，提高代码复用性。
<a name="NMt2L"></a>

### 6.React.memo、useCallback、useMemo介绍

React.memo、useCallback 和 useMemo 是 React 中用于优化性能的三个工具，它们帮助我们减少不必要的组件渲染和计算。下面是对这三个工具的详细介绍：
<a name="oQpG6"></a>

#### 6.1 React.memo

React.memo 是一个高阶组件，用于函数组件的记忆化。它与 PureComponent 的行为类似，但是用于函数组件。React.memo 仅在组件的 props 发生改变时才会重新渲染组件，如果 props 没有变化，则不会重新渲染。<br />**使用场景**：

- 当一个函数组件接收的 props 在两次渲染之间没有变化时，使用 React.memo 可以避免不必要的渲染。

**示例**：

```javascript
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染组件 */
});

// 或者使用箭头函数
const MyComponent = React.memo((props) => {
  /* 使用 props 渲染组件 */
});
```

<a name="oCaVZ"></a>

#### 6.2 useCallback

useCallback 是一个 Hook，它返回一个记忆化的回调函数。这个回调函数仅在其依赖项发生变化时才会重新创建。<br />**使用场景**：

- 当你希望传递回调函数给子组件，并且希望这个回调函数在父组件重新渲染时不会被重新创建时。

**示例**：

```javascript
const useCallbackExample = () => {
  // 假设有一些状态或计算值
  const [count, setCount] = useState(0);

  // 创建一个记忆化的回调函数
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // 只有当 count 改变时，increment 才会重新创建

  return (
    <button onClick={increment}>Increment</button>
  );
};
```

<a name="pjxM1"></a>

#### 6.3 useMemo

useMemo 是一个 Hook，它返回一个记忆化的结果。这个结果仅在其依赖项发生变化时才会重新计算。<br />**使用场景**：

- 当你在组件内部执行昂贵的计算，并且希望避免在每次渲染时都进行这些计算时。

**示例**：

```javascript
const useMemoExample = () => {
  // 假设有一个复杂的计算
  const expensiveValue = useMemo(() => {
    // 进行一些计算
    return computeExpensiveValue(someArgument);
  }, [someArgument]); // 只有当 someArgument 改变时，expensiveValue 才会重新计算

  return (
    <div>{expensiveValue}</div>
  );
};
```

<a name="j5Nhx"></a>

#### 6.4 注意事项

- 所有这三个工具都是基于它们的依赖项数组（如果提供了依赖项）来决定是否重新执行或渲染。如果依赖项数组为空，React.memo 将仅在组件挂载时执行一次，而 useCallback 和 useMemo 将返回一个不变的回调函数或值。
- 过度使用这些优化可能会导致代码难以理解和维护，因此应该在实际需要时才使用它们。

使用这些工具可以帮助提高 React 应用的性能，尤其是在处理大型列表或复杂组件时。
<a name="dDNCn"></a>

### 7.React.memo里的props是怎么做变化对比的？

React.memo 是一个高阶组件，它对函数组件进行记忆化处理。它通过对比当前的 props 和前一次渲染的 props 来判断是否需要重新渲染组件。React.memo 的变化对比过程遵循以下步骤：

1. **首次渲染**：当组件首次渲染时，React.memo 会将当前的 props 作为依赖项存储起来。
2. **后续渲染**：在组件的后续渲染过程中，React.memo 会将新的 props 和之前存储的 props 进行浅比较（shallow comparison）。
3. **浅比较**：浅比较意味着它只会比较对象的第一层属性。如果对象的引用相同，或者属性值相同（通过 Object.is 进行比较），则视为没有变化。
4. **依赖项变化**：如果浅比较发现 props 发生了变化，React.memo 将允许组件重新渲染。如果 props 没有变化，组件将跳过渲染过程，从而提高性能。
5. **更新依赖项**：一旦组件重新渲染，React.memo 会更新其内部存储的 props，以便在下一次渲染时使用。
<a name="YFtBl"></a>

#### 7.1 浅比较的实现

浅比较是通过比较每个 prop 的引用和值来实现的。对于基本数据类型，它会比较它们的值。对于对象和数组，它会比较它们的引用。如果 prop 是对象或数组，并且内部结构发生了变化，但引用没有变化，React.memo 会认为没有变化，因此不会重新渲染组件。
<a name="kBqyL"></a>

#### 7.2 代码示例

```javascript
function MyComponent(props) {
  /* 使用 props 渲染组件 */
  return <div>{props.value}</div>;
}

const areEqual = (prevProps, nextProps) => {
  // 自定义比较逻辑，例如比较对象的特定属性
  return prevProps.value === nextProps.value;
};

const MemoizedComponent = React.memo(MyComponent, areEqual);
```

在上面的示例中，areEqual 函数是一个自定义的比较函数，它接收两个参数：prevProps（上一次渲染的 props）和 nextProps（当前的 props）。这个函数可以定义更复杂的比较逻辑，比如比较对象的特定属性。如果 areEqual 返回 true，则组件不会重新渲染。
<a name="BobXR"></a>

#### 7.3 注意事项

- React.memo 只进行浅比较，如果 props 中包含复杂对象或数组，并且这些对象或数组的内部结构发生了变化，React.memo 可能无法检测到这些变化，从而导致组件未能按预期重新渲染。
- 如果组件的 props 经常变化，或者 props 的结构非常复杂，使用 React.memo 可能不会带来预期的性能提升，甚至可能降低性能，因为它增加了比较的开销。
- 在使用 React.memo 时，应该谨慎考虑组件的 props 结构和变化频率，以确保它能够提供有效的优化。
<a name="ky82q"></a>

### 8.React Fiber了解么？为什么对性能更好？

React Fiber 是 React 核心算法的一个重构版本，它旨在提高 React 应用的性能和可靠性。Fiber 的开发始于 2015 年，并且在 React 16.0 中首次推出。Fiber 的主要目标是允许 React 应用在更新时更加灵活和可中断。
<a name="LSWre"></a>

#### 8.1 React Fiber 的关键特性

1. **时间分片（Time Slicing）**：
   - Fiber 允许 React 应用在渲染过程中进行“暂停”和“恢复”，这使得应用可以在高优先级任务（如用户输入）发生时让出控制权，从而提高响应性。
2. **异步渲染（Asynchronous Rendering）**：
   - 通过将渲染过程拆分成多个小的块，React 可以在浏览器的空闲时间进行渲染，减少对主线程的阻塞。
3. **优先级（Prioritization）**：
   - Fiber 允许 React 根据任务的重要性来安排更新的顺序。例如，用户交互相关的更新可以优先处理。
4. **错误边界（Error Boundaries）**：
   - React 16 引入了错误边界的概念，它允许应用捕获子组件树中抛出的错误，而不会使得整个应用崩溃。
5. **代码的模块化**：
   - Fiber 架构使得 React 代码更加模块化，这有助于未来的维护和扩展。
<a name="VFmYx"></a>

#### 8.2 为什么对性能更好？

1. **避免长时间运行的任务**：
   - 在传统的 React 中，如果组件树很深或者组件很复杂，渲染可能会占用大量时间，导致 UI 无响应。Fiber 通过时间分片避免了这种情况。
2. **改善用户体验**：
   - 用户的操作（如点击、滚动）可以被优先处理，即使在渲染过程中也不会被阻塞。
3. **更高效的更新**：
   - React 可以更智能地安排更新，只更新那些真正需要更新的部分，而不是整个组件树。
4. **更好的内存使用**：
   - Fiber 架构允许 React 更有效地管理内存，因为更新可以更精确地进行。
5. **支持新的功能**：
   - Fiber 的架构为 React 的未来发展提供了基础，例如 Suspense 组件（用于代码分割和数据获取的异步加载）。
6. **更细粒度的控制**：
   - 开发者可以更细粒度地控制组件的渲染过程，例如通过 React.Suspense 和 useTransition 等新的 API。
7. **避免布局抖动**：
   - 通过更细粒度的渲染控制，Fiber 有助于减少布局抖动，提供更平滑的 UI 体验。

React Fiber 是一个底层的重构，对于大多数开发者来说，日常开发中可能不会直接感受到 Fiber 的存在。但是，它为 React 应用提供了更好的性能和更强大的功能。随着 React 的发展，Fiber 架构将继续支持新特性和改进，进一步提升应用的性能和用户体验。
<a name="Ghffv"></a>

### 笔试题（1）：经典useEffect里写setInterval和setState(count+1)，为什么不会更新count值？

在 React 中，如果你在 useEffect 钩子中同时使用 setInterval 和 setState 来更新状态，可能会遇到无法更新状态的问题。这通常发生在以下情况：

1. **状态更新异步性**： React 的 setState 是异步的，这意味着调用 setState 后不会立即更新状态，而是计划一个状态更新。
2. **闭包问题**： 在 useEffect 中设置的 setInterval 可能会捕获到 count 的一个快照。由于 setState 是异步的，当定时器回调执行时，可能使用了一个旧的 count 值。

下面是一个示例代码，演示了这个问题：

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setState(count + 1); // 这里可能使用了闭包捕获的旧 count 值
  }, 1000);

  // 清理定时器
  return () => clearInterval(interval);
}, []);
```

在上面的代码中，setInterval 每秒调用一次，但由于 setState 的异步性，count 可能还没有更新到最新的值。<br />为了解决这个问题，你可以使用 setState 的函数形式，这样你就可以基于前一个状态来更新状态：

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setState((prevCount) => prevCount + 1); // 使用函数形式的 setState，确保基于最新的状态更新
  }, 1000);

  // 清理定时器
  return () => clearInterval(interval);
}, []);
```

使用函数形式的 setState 可以确保你访问的是最新的状态值，而不是在定时器设置时捕获的旧值。这样，每次定时器触发时，React 都会使用当前的状态来计算新的状态。<br />此外，使用 useEffect 的清理函数（在上述示例中的返回语句）是很重要的，以确保在组件卸载时清除定时器，防止内存泄漏或意外行为。
<a name="wV914"></a>

### 笔试题（2）：手写一个useSetInterval Hooks实现上述功能

要实现一个自定义的 useSetInterval Hook 来处理定时器和状态更新，我们可以参照 setInterval 的功能，同时确保状态更新是基于最新的状态值。下面是一个简单的实现：

```javascript
import { useState, useEffect, useCallback } from 'react';

function useSetInterval(callback, delay) {
  // 初始化一个状态来存储定时器的引用
  const savedCallback = useState(() => callback); // 确保回调函数是最新的
  const [timerRef, setTimerRef] = useState(null);

  // 使用 useCallback 来确保回调函数在组件的整个生命周期内保持不变
  const tick = useCallback(() => {
    savedCallback[0](); // 执行传入的回调函数
  }, [savedCallback]);

  useEffect(() => {
    // 如果 delay 变化，根据新值更新定时器
    if (delay) {
      const id = setInterval(tick, delay);
      setTimerRef(id);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [delay, tick]); // 当 delay 或者 tick 变化时，重新设置定时器

  // 返回一个清除函数，可以在组件内部调用以清除定时器
  return () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };
}

// 使用示例
function Counter() {
  const [count, setCount] = useState(0);

  // 使用自定义的 useSetInterval Hook
  const clearInterval = useSetInterval(() => {
    setCount(count + 1);
  }, 1000);

  useEffect(() => {
    // 组件卸载时清除定时器
    return clearInterval;
  }, [clearInterval]);

  return (
    <div>
    Count: {count}
  </div>
  );
}
```

在这个 useSetInterval Hook 中：

- 使用 useState 来创建一个 timerRef 来存储定时器的 ID。
- 使用 useCallback 来创建一个记忆化的 tick 函数，确保每次 useEffect 运行时传递给 setInterval 的回调函数都是最新的。
- 使用 useEffect 来设置和清理定时器。当 delay 或 tick 变化时，定时器会重新设置。
- 组件可以调用 clearInterval 函数来在适当的时候清除定时器，例如在组件卸载时。

这样，我们就创建了一个自定义的 useSetInterval Hook，它能够正确地处理定时器和状态更新，避免了闭包问题，并确保了状态更新的正确性。
<a name="XCTXh"></a>

### 笔试题（3）：手写一个请求并发限制器 requestThrottler

<a name="phsJ2"></a>

### 案例：总计1000个请求，同一时刻最多5个请求并发进行

要实现这样一个请求节流器 sendRequest 函数，我们可以维护一个请求队列和一个活动请求计数器。以下是具体的实现步骤和代码示例：

1. 创建一个队列来存储待处理的请求。
2. 使用一个计数器来跟踪当前正在执行的请求数量。
3. 当请求数量没有达到最大并发限制时，从队列中取出请求并执行。
4. 请求完成后，更新计数器并从队列中取出下一个请求继续执行。
5. 如果请求队列空了，停止执行。

下面是具体的实现代码：

```javascript
class RequestThrottler {
  constructor(maxConcurrentRequests) {
    this.queue = [];
    this.activeRequests = 0;
    this.maxConcurrentRequests = maxConcurrentRequests;
  }

  enqueue(requestParams, callback) {
    this.queue.push({ requestParams, callback });
    this.processQueue();
  }

  processQueue() {
    while (
      this.queue.length > 0 &&
      this.activeRequests < this.maxConcurrentRequests
    ) {
      const { requestParams, callback } = this.queue.shift();
      this.activeRequests++;

      fetch(requestParams)
        .then(response => response.json())
        .then(data => {
          callback(null, data);
          this.activeRequests--;
          this.processQueue(); // 继续处理队列
        })
        .catch(error => {
          callback(error, null);
          this.activeRequests--;
          this.processQueue();
        });
    }
  }
}

// 使用示例
const maxConcurrentRequests = 5;
const requestThrottler = new RequestThrottler(maxConcurrentRequests);

const requests = Array.from({ length: 500 }, (v, k) => ({
  url: `https://api.example.com/data?index=${k}`,
}));

requests.forEach((requestParams, index) => {
  requestThrottler.enqueue(
    requestParams,
    (error, data) => {
      if (error) {
        console.error(`请求 ${index} 失败:`, error);
      } else {
        console.log(`请求 ${index} 成功:`, data);
      }
    }
  );
});
```

在这个实现中：

- RequestThrottler 类负责管理请求队列和并发请求计数。
- enqueue 方法用于将请求添加到队列中，并处理队列中的请求。
- processQueue 方法用于执行队列中的请求，直到达到最大并发请求限制或队列为空。
- 使用 fetch API 来发送请求，并通过回调函数处理请求成功或失败的情况。
- 当请求完成时，减少 activeRequests 计数，并尝试继续处理队列中的下一个请求。

这个实现确保了最多只有5个请求同时进行，直到所有500个请求都完成。
