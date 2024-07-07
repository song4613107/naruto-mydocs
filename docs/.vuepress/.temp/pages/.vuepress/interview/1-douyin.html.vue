<template><div><p><a name="ZyC0K"></a></p>
<h2 id="一、题目" tabindex="-1"><a class="header-anchor" href="#一、题目"><span>一、题目</span></a></h2>
<ol>
<li>性能优化手段</li>
<li>SSR服务端异常处理</li>
<li>SSR水合过程实现原理</li>
<li>SSR首屏渲染和CSR渲染不一致怎么办</li>
<li>React的优化方案有哪些</li>
<li>React.memo、useCallback、useMemo介绍</li>
<li>React.memo里的props是怎么做变化对比的</li>
<li>React Fiber了解么？为什么对性能更好？</li>
<li>笔试题（1）：经典useEffect里写setInterval和setState(count+1)，为什么不会更新count值？</li>
<li>笔试题（2）：手写一个useSetInterval Hooks实现上述功能</li>
<li>笔试题（3）：手写一个请求节流器 sendRequest函数
<a name="FVgHV"></a></li>
</ol>
<h2 id="二、答案" tabindex="-1"><a class="header-anchor" href="#二、答案"><span>二、答案</span></a></h2>
<p><a name="KRBPD"></a></p>
<h3 id="_1-前端性能优化手段" tabindex="-1"><a class="header-anchor" href="#_1-前端性能优化手段"><span>1.前端性能优化手段</span></a></h3>
<p>前端性能优化是一个持续的过程，涉及到多个方面，以下是一些常见的前端性能优化手段：</p>
<ol>
<li><strong>代码分割</strong>：使用Webpack、Vite等模块打包工具进行代码分割，按需加载资源。</li>
<li><strong>懒加载</strong>：对图片、组件等进行懒加载，只有在用户滚动到视窗内时才加载。</li>
<li><strong>服务端渲染（SSR）</strong>：首屏使用服务端渲染，减少客户端渲染时间。</li>
<li><strong>使用CDN</strong>：将静态资源部署在CDN上，加快资源加载速度。</li>
<li><strong>压缩资源</strong>：压缩CSS、JavaScript文件和图片，减少文件体积。</li>
<li><strong>缓存利用</strong>：利用浏览器缓存、本地存储、IndexedDB等技术缓存数据。</li>
<li><strong>减少重绘和回流</strong>：优化DOM操作，避免频繁的DOM变更和样式计算。</li>
<li><strong>使用Web Workers</strong>：将复杂计算放在Web Workers中执行，避免阻塞主线程。</li>
<li><strong>优化图片</strong>：使用合适的图片格式（如WebP）、压缩图片、使用图片懒加载。</li>
<li><strong>预加载和预取</strong>：使用<link rel="preload">预加载关键资源，使用<link rel="prefetch">预取可能需要的资源。</li>
<li><strong>服务端性能优化</strong>：优化后端服务，减少响应时间。</li>
<li><strong>使用HTTP/2</strong>：利用HTTP/2的多路复用特性，减少连接建立时间。</li>
<li><strong>减少第三方库</strong>：减少不必要的第三方库的使用，降低依赖和加载时间。</li>
<li><strong>优化字体加载</strong>：合理使用字体文件，避免字体加载阻塞页面渲染。</li>
<li><strong>优化CSS选择器</strong>：避免使用复杂的CSS选择器，减少选择器解析时间。</li>
<li><strong>使用骨架屏</strong>：在页面加载过程中使用骨架屏，提升用户体验。</li>
<li><strong>优化API请求</strong>：合并API请求，减少请求次数，使用请求缓存。</li>
<li><strong>优化交互动画</strong>：使用CSS动画代替JavaScript动画，减少主线程负担。</li>
<li><strong>使用Intersection Observer API</strong>：实现更高效的懒加载和无限滚动。</li>
<li><strong>优化表单处理</strong>：使用防抖和节流技术优化表单输入事件。</li>
<li><strong>使用Tree Shaking</strong>：移除未使用的代码，减少最终打包文件的大小。</li>
<li><strong>使用Critical CSS</strong>：提取并优先加载页面首屏渲染所需的CSS。</li>
<li><strong>使用Lighthouse等性能分析工具</strong>：定期检查并优化页面性能。</li>
<li><strong>避免使用复杂的CSS布局</strong>：使用Flexbox或Grid布局替代传统的布局方式。</li>
<li><strong>使用原生组件</strong>：在适当的情况下使用原生HTML元素代替复杂的组件。
<a name="cvDRM"></a></li>
</ol>
<h3 id="_2-ssr服务端异常处理" tabindex="-1"><a class="header-anchor" href="#_2-ssr服务端异常处理"><span>2.SSR服务端异常处理</span></a></h3>
<p>服务端渲染（SSR）过程中的异常处理是确保应用稳定性和用户体验的重要环节。以下是一些关键点和策略，用于处理SSR中的服务端异常：</p>
<ol>
<li><strong>异常捕获</strong>：在服务端的数据预获取和渲染过程中，使用try-catch语句来捕获可能发生的异常39。</li>
<li><strong>错误日志记录</strong>：当异常发生时，记录详细的错误信息和堆栈跟踪，这有助于后续的问题诊断和修复35。</li>
<li><strong>用户友好的错误页面</strong>：避免直接向用户展示技术性错误信息，而是提供一个友好的错误页面，告知用户发生了错误，并提供返回首页或联系支持的选项。</li>
<li><strong>服务端数据预获取异常处理</strong>：在数据获取过程中，如果发生异常，可以选择让页面继续渲染，而不是直接抛出500错误，同时记录错误日志，并可能在客户端重试数据获取。</li>
<li><strong>渲染过程中的异常处理</strong>：如果在渲染过程中出现异常，需要有策略来决定是继续渲染一个没有数据的页面，还是显示错误信息。</li>
<li><strong>接口代理问题处理</strong>：在SSR中，服务端需要能够正确地处理接口代理，确保服务端能够访问到正确的后端服务。</li>
<li><strong>Cookie穿透问题</strong>：确保服务端在请求后端接口时，能够携带客户端的cookie，以保持会话的连续性。</li>
<li><strong>服务端渲染性能优化</strong>：通过页面级别、组件级别和接口级别的缓存来提高服务端渲染的性能。</li>
<li><strong>安全性考虑</strong>：SSR服务可能会面临DDOS攻击、SQL注入和数据泄露等安全问题，需要采取相应的安全措施，比如使用HTTPS、输入验证、限制请求频率等。</li>
<li><strong>服务端资源管理</strong>：确保服务端资源（如内存和CPU）得到合理管理，以避免因资源耗尽导致的异常。</li>
<li><strong>高可用性设计</strong>：通过负载均衡、故障转移和冗余设计来提高服务端的可用性。</li>
<li><strong>定期维护和监控</strong>：定期对服务器进行维护和监控，确保及时发现并处理潜在的异常。</li>
<li><strong>自定义异常处理</strong>：在Spring框架中，可以通过@ControllerAdvice和@ExceptionHandler来实现全局或局部的异常处理，返回统一的错误响应格式。</li>
<li><strong>状态码使用</strong>：合理使用HTTP状态码来表示不同类型的异常，例如404 Not Found和500 Internal Server Error5。</li>
<li><strong>测试和验证</strong>：对SSR的异常处理逻辑进行充分的测试，包括单元测试和集成测试，确保异常处理按预期工作。</li>
</ol>
<p>通过这些策略，可以有效地管理和响应SSR中的服务端异常，提高应用的健壮性和可靠性。
<a name="hMz1Y"></a></p>
<h3 id="_3-ssr水合过程实现原理" tabindex="-1"><a class="header-anchor" href="#_3-ssr水合过程实现原理"><span>3.SSR水合过程实现原理</span></a></h3>
<p>SSR（服务端渲染）中的水合过程，也称为客户端水合（Client-side Hydration），是指客户端JavaScript代码接管服务端渲染的HTML内容，使其变为一个完全交互的页面的过程。以下是SSR水合过程的实现原理：</p>
<ol>
<li><strong>服务端渲染</strong>：首先，服务端接收到页面请求后，根据请求的路由信息，找到对应的页面组件，并执行组件的渲染方法，将组件转化为HTML字符串。</li>
<li><strong>发送到客户端</strong>：服务端将渲染好的HTML字符串发送给客户端。这个HTML字符串可能包含一些占位符，例如<div id="root"></div>，用于客户端JavaScript挂载。</li>
<li><strong>客户端JavaScript加载</strong>：客户端浏览器接收到HTML后，开始解析并渲染页面。同时，客户端JavaScript代码（例如React库）开始加载。</li>
<li><strong>水合过程</strong>：客户端JavaScript代码加载完成后，它将使用ReactDOM.hydrate（或其他框架的类似方法）来接管服务端渲染的DOM。这个过程包括：
<ul>
<li>客户端JavaScript比较服务端渲染的HTML和当前页面的DOM树。</li>
<li>如果发现差异，客户端JavaScript将更新DOM以确保一致性。</li>
<li>客户端JavaScript绑定事件处理器，使页面变得可交互。</li>
</ul>
</li>
<li><strong>事件委托</strong>：在水合过程中，客户端JavaScript通常会使用事件委托机制，将事件监听器添加到根节点上，然后根据事件冒泡的机制来处理具体的事件。</li>
<li><strong>数据同步</strong>：如果服务端渲染过程中有数据获取，客户端JavaScript可能需要同步这些数据，以确保客户端状态与服务端渲染的状态一致。</li>
<li><strong>优化和性能</strong>：水合过程需要尽量减少重渲染和DOM操作，以提高性能。这可能涉及到服务端和客户端的代码优化，以及避免不必要的数据获取和状态同步。</li>
</ol>
<p>水合过程是SSR中非常关键的一步，它确保了服务端渲染的内容能够在客户端上以一种高效和用户友好的方式变得可交互。
<a name="GPOxv"></a></p>
<h3 id="_4-ssr首屏渲染和csr渲染不一致怎么办" tabindex="-1"><a class="header-anchor" href="#_4-ssr首屏渲染和csr渲染不一致怎么办"><span>4.SSR首屏渲染和CSR渲染不一致怎么办</span></a></h3>
<p>SSR（服务端渲染）和CSR（客户端渲染）之间出现首屏渲染不一致的问题通常由几个因素引起，比如数据获取方式、执行环境差异、代码逻辑差异等。以下是一些解决这一问题的策略：</p>
<ol>
<li><strong>保持数据获取一致性</strong>：确保服务端和客户端使用相同的数据获取逻辑和API。如果服务端渲染依赖于特定的数据，客户端也应获取相同的数据以确保渲染结果一致。</li>
<li><strong>使用同构代码</strong>：开发可在服务端和客户端运行的同构代码，确保在不同环境中行为一致。</li>
<li><strong>状态管理同步</strong>：如果应用中使用了状态管理库（如Redux或Vuex），确保服务端和客户端的状态管理逻辑同步，状态在客户端能够正确地重新初始化。</li>
<li><strong>避免客户端特定代码</strong>：在服务端渲染过程中避免使用只能在客户端执行的代码，比如某些DOM操作或浏览器API调用。</li>
<li><strong>客户端激活状态</strong>：在客户端使用ReactDOM.hydrate（React）或其他框架的等效方法，确保客户端能够激活服务端渲染的标记，而不是重新渲染整个页面。</li>
<li><strong>使用服务端事件模拟</strong>：对于某些需要事件绑定的交互，可以在服务端模拟事件，然后在客户端重新触发这些事件。</li>
<li><strong>服务端渲染错误处理</strong>：在服务端渲染过程中加入错误处理机制，如果渲染失败，能够给客户端返回一个备用的CSR版本或者错误页面。</li>
<li><strong>客户端回退机制</strong>：如果SSR渲染出现问题，客户端应有回退机制，比如加载一个备用的客户端渲染版本。</li>
<li><strong>服务端渲染测试</strong>：进行充分的服务端渲染测试，确保在不同场景下都能提供一致的用户体验。
<a name="bOEvF"></a></li>
</ol>
<h3 id="_5-react的优化方案有哪些" tabindex="-1"><a class="header-anchor" href="#_5-react的优化方案有哪些"><span>5.React的优化方案有哪些</span></a></h3>
<p>React 是一个用于构建用户界面的 JavaScript 库，它在开发过程中非常流行。为了提高 React 应用的性能和用户体验，有多种优化方案可以采用。以下是一些常见的优化策略：</p>
<ol>
<li><strong>代码分割和懒加载（Code Splitting and Lazy Loading）</strong>：
<ul>
<li>使用 React.lazy() 进行组件懒加载，按需加载那些在特定路由或条件下才需要的组件。</li>
<li>使用 Suspense 组件来包裹懒加载的组件，以展示加载状态。</li>
</ul>
</li>
<li><strong>使用 React.memo 和 PureComponent</strong>：
<ul>
<li>对于函数组件，使用 React.memo 来避免不必要的渲染。</li>
<li>对于类组件，继承 PureComponent 以减少不必要的渲染。</li>
</ul>
</li>
<li><strong>避免在渲染方法中进行复杂的计算</strong>：
<ul>
<li>将复杂的计算逻辑移出组件的渲染路径，例如使用 useCallback 和 useMemo 钩子。</li>
</ul>
</li>
<li><strong>使用 shouldComponentUpdate、getDerivedStateFromProps 和 getSnapshotBeforeUpdate 生命周期方法</strong>：
<ul>
<li>对于类组件，这些方法可以用来控制组件的更新。</li>
</ul>
</li>
<li><strong>优化列表渲染</strong>：
<ul>
<li>使用 React.KeyedFragments 来避免不必要的列表项重新渲染。</li>
<li>确保列表中每一项的 key 是唯一且稳定的。</li>
</ul>
</li>
<li><strong>使用生产者/消费者模式（Producer/Consumer Pattern）</strong>：
<ul>
<li>对于复杂的组件树，使用 React.createFactory 来避免重复创建相同的组件实例。</li>
</ul>
</li>
<li><strong>优化状态管理</strong>：
<ul>
<li>合理组织状态结构，避免不必要的全局状态。</li>
<li>使用状态管理库（如 Redux 或 MobX）来优化状态更新。</li>
</ul>
</li>
<li><strong>服务端渲染（Server-Side Rendering, SSR）</strong>：
<ul>
<li>对于首屏渲染性能要求较高的应用，可以使用服务端渲染。</li>
</ul>
</li>
<li><strong>使用静态站点生成（Static Site Generation, SSG）</strong>：
<ul>
<li>对于数据不经常变动的页面，可以使用静态站点生成来提升加载速度。</li>
</ul>
</li>
<li><strong>减少重绘和回流</strong>：</li>
</ol>
<ul>
<li>避免在 DOM 更新时触发不必要的重绘和回流。</li>
</ul>
<ol start="11">
<li><strong>使用 Profiler 组件进行性能监控</strong>：</li>
</ol>
<ul>
<li>React 18 引入了新的 Profiler 组件，用于测量组件渲染的性能。</li>
</ul>
<ol start="12">
<li><strong>避免使用内联函数作为 prop</strong>：</li>
</ol>
<ul>
<li>内联函数作为 prop 传递会导致子组件每次父组件渲染时都重新创建。</li>
</ul>
<ol start="13">
<li><strong>使用 useReducer 替代复杂的 useState</strong>：</li>
</ol>
<ul>
<li>当状态更新逻辑变得复杂时，使用 useReducer 可以更好地组织代码。</li>
</ul>
<ol start="14">
<li><strong>优化路由配置</strong>：</li>
</ol>
<ul>
<li>使用 React Router 等库时，合理配置路由，避免路由的重复渲染。</li>
</ul>
<ol start="15">
<li><strong>使用自定义 Hooks</strong>：</li>
</ol>
<ul>
<li>自定义 Hooks 可以封装组件逻辑，提高代码复用性。
<a name="NMt2L"></a></li>
</ul>
<h3 id="_6-react-memo、usecallback、usememo介绍" tabindex="-1"><a class="header-anchor" href="#_6-react-memo、usecallback、usememo介绍"><span>6.React.memo、useCallback、useMemo介绍</span></a></h3>
<p>React.memo、useCallback 和 useMemo 是 React 中用于优化性能的三个工具，它们帮助我们减少不必要的组件渲染和计算。下面是对这三个工具的详细介绍：
<a name="oQpG6"></a></p>
<h4 id="_6-1-react-memo" tabindex="-1"><a class="header-anchor" href="#_6-1-react-memo"><span>6.1 React.memo</span></a></h4>
<p>React.memo 是一个高阶组件，用于函数组件的记忆化。它与 PureComponent 的行为类似，但是用于函数组件。React.memo 仅在组件的 props 发生改变时才会重新渲染组件，如果 props 没有变化，则不会重新渲染。<br /><strong>使用场景</strong>：</p>
<ul>
<li>当一个函数组件接收的 props 在两次渲染之间没有变化时，使用 React.memo 可以避免不必要的渲染。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* 使用 props 渲染组件 */</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 或者使用箭头函数</span></span>
<span class="line"><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* 使用 props 渲染组件 */</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="oCaVZ"></a></p>
<h4 id="_6-2-usecallback" tabindex="-1"><a class="header-anchor" href="#_6-2-usecallback"><span>6.2 useCallback</span></a></h4>
<p>useCallback 是一个 Hook，它返回一个记忆化的回调函数。这个回调函数仅在其依赖项发生变化时才会重新创建。<br /><strong>使用场景</strong>：</p>
<ul>
<li>当你希望传递回调函数给子组件，并且希望这个回调函数在父组件重新渲染时不会被重新创建时。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useCallbackExample</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 假设有一些状态或计算值</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 创建一个记忆化的回调函数</span></span>
<span class="line">  <span class="token keyword">const</span> increment <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 只有当 count 改变时，increment 才会重新创建</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="pjxM1"></a></p>
<h4 id="_6-3-usememo" tabindex="-1"><a class="header-anchor" href="#_6-3-usememo"><span>6.3 useMemo</span></a></h4>
<p>useMemo 是一个 Hook，它返回一个记忆化的结果。这个结果仅在其依赖项发生变化时才会重新计算。<br /><strong>使用场景</strong>：</p>
<ul>
<li>当你在组件内部执行昂贵的计算，并且希望避免在每次渲染时都进行这些计算时。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">useMemoExample</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 假设有一个复杂的计算</span></span>
<span class="line">  <span class="token keyword">const</span> expensiveValue <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 进行一些计算</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">computeExpensiveValue</span><span class="token punctuation">(</span>someArgument<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>someArgument<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 只有当 someArgument 改变时，expensiveValue 才会重新计算</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>expensiveValue<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="j5Nhx"></a></p>
<h4 id="_6-4-注意事项" tabindex="-1"><a class="header-anchor" href="#_6-4-注意事项"><span>6.4 注意事项</span></a></h4>
<ul>
<li>所有这三个工具都是基于它们的依赖项数组（如果提供了依赖项）来决定是否重新执行或渲染。如果依赖项数组为空，React.memo 将仅在组件挂载时执行一次，而 useCallback 和 useMemo 将返回一个不变的回调函数或值。</li>
<li>过度使用这些优化可能会导致代码难以理解和维护，因此应该在实际需要时才使用它们。</li>
</ul>
<p>使用这些工具可以帮助提高 React 应用的性能，尤其是在处理大型列表或复杂组件时。
<a name="dDNCn"></a></p>
<h3 id="_7-react-memo里的props是怎么做变化对比的" tabindex="-1"><a class="header-anchor" href="#_7-react-memo里的props是怎么做变化对比的"><span>7.React.memo里的props是怎么做变化对比的？</span></a></h3>
<p>React.memo 是一个高阶组件，它对函数组件进行记忆化处理。它通过对比当前的 props 和前一次渲染的 props 来判断是否需要重新渲染组件。React.memo 的变化对比过程遵循以下步骤：</p>
<ol>
<li><strong>首次渲染</strong>：当组件首次渲染时，React.memo 会将当前的 props 作为依赖项存储起来。</li>
<li><strong>后续渲染</strong>：在组件的后续渲染过程中，React.memo 会将新的 props 和之前存储的 props 进行浅比较（shallow comparison）。</li>
<li><strong>浅比较</strong>：浅比较意味着它只会比较对象的第一层属性。如果对象的引用相同，或者属性值相同（通过 Object.is 进行比较），则视为没有变化。</li>
<li><strong>依赖项变化</strong>：如果浅比较发现 props 发生了变化，React.memo 将允许组件重新渲染。如果 props 没有变化，组件将跳过渲染过程，从而提高性能。</li>
<li><strong>更新依赖项</strong>：一旦组件重新渲染，React.memo 会更新其内部存储的 props，以便在下一次渲染时使用。
<a name="YFtBl"></a></li>
</ol>
<h4 id="_7-1-浅比较的实现" tabindex="-1"><a class="header-anchor" href="#_7-1-浅比较的实现"><span>7.1 浅比较的实现</span></a></h4>
<p>浅比较是通过比较每个 prop 的引用和值来实现的。对于基本数据类型，它会比较它们的值。对于对象和数组，它会比较它们的引用。如果 prop 是对象或数组，并且内部结构发生了变化，但引用没有变化，React.memo 会认为没有变化，因此不会重新渲染组件。
<a name="kBqyL"></a></p>
<h4 id="_7-2-代码示例" tabindex="-1"><a class="header-anchor" href="#_7-2-代码示例"><span>7.2 代码示例</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* 使用 props 渲染组件 */</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">areEqual</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> nextProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 自定义比较逻辑，例如比较对象的特定属性</span></span>
<span class="line">  <span class="token keyword">return</span> prevProps<span class="token punctuation">.</span>value <span class="token operator">===</span> nextProps<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> MemoizedComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> areEqual<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，areEqual 函数是一个自定义的比较函数，它接收两个参数：prevProps（上一次渲染的 props）和 nextProps（当前的 props）。这个函数可以定义更复杂的比较逻辑，比如比较对象的特定属性。如果 areEqual 返回 true，则组件不会重新渲染。
<a name="BobXR"></a></p>
<h4 id="_7-3-注意事项" tabindex="-1"><a class="header-anchor" href="#_7-3-注意事项"><span>7.3 注意事项</span></a></h4>
<ul>
<li>React.memo 只进行浅比较，如果 props 中包含复杂对象或数组，并且这些对象或数组的内部结构发生了变化，React.memo 可能无法检测到这些变化，从而导致组件未能按预期重新渲染。</li>
<li>如果组件的 props 经常变化，或者 props 的结构非常复杂，使用 React.memo 可能不会带来预期的性能提升，甚至可能降低性能，因为它增加了比较的开销。</li>
<li>在使用 React.memo 时，应该谨慎考虑组件的 props 结构和变化频率，以确保它能够提供有效的优化。
<a name="ky82q"></a></li>
</ul>
<h3 id="_8-react-fiber了解么-为什么对性能更好" tabindex="-1"><a class="header-anchor" href="#_8-react-fiber了解么-为什么对性能更好"><span>8.React Fiber了解么？为什么对性能更好？</span></a></h3>
<p>React Fiber 是 React 核心算法的一个重构版本，它旨在提高 React 应用的性能和可靠性。Fiber 的开发始于 2015 年，并且在 React 16.0 中首次推出。Fiber 的主要目标是允许 React 应用在更新时更加灵活和可中断。
<a name="LSWre"></a></p>
<h4 id="_8-1-react-fiber-的关键特性" tabindex="-1"><a class="header-anchor" href="#_8-1-react-fiber-的关键特性"><span>8.1 React Fiber 的关键特性</span></a></h4>
<ol>
<li><strong>时间分片（Time Slicing）</strong>：
<ul>
<li>Fiber 允许 React 应用在渲染过程中进行“暂停”和“恢复”，这使得应用可以在高优先级任务（如用户输入）发生时让出控制权，从而提高响应性。</li>
</ul>
</li>
<li><strong>异步渲染（Asynchronous Rendering）</strong>：
<ul>
<li>通过将渲染过程拆分成多个小的块，React 可以在浏览器的空闲时间进行渲染，减少对主线程的阻塞。</li>
</ul>
</li>
<li><strong>优先级（Prioritization）</strong>：
<ul>
<li>Fiber 允许 React 根据任务的重要性来安排更新的顺序。例如，用户交互相关的更新可以优先处理。</li>
</ul>
</li>
<li><strong>错误边界（Error Boundaries）</strong>：
<ul>
<li>React 16 引入了错误边界的概念，它允许应用捕获子组件树中抛出的错误，而不会使得整个应用崩溃。</li>
</ul>
</li>
<li><strong>代码的模块化</strong>：
<ul>
<li>Fiber 架构使得 React 代码更加模块化，这有助于未来的维护和扩展。
<a name="VFmYx"></a></li>
</ul>
</li>
</ol>
<h4 id="_8-2-为什么对性能更好" tabindex="-1"><a class="header-anchor" href="#_8-2-为什么对性能更好"><span>8.2 为什么对性能更好？</span></a></h4>
<ol>
<li><strong>避免长时间运行的任务</strong>：
<ul>
<li>在传统的 React 中，如果组件树很深或者组件很复杂，渲染可能会占用大量时间，导致 UI 无响应。Fiber 通过时间分片避免了这种情况。</li>
</ul>
</li>
<li><strong>改善用户体验</strong>：
<ul>
<li>用户的操作（如点击、滚动）可以被优先处理，即使在渲染过程中也不会被阻塞。</li>
</ul>
</li>
<li><strong>更高效的更新</strong>：
<ul>
<li>React 可以更智能地安排更新，只更新那些真正需要更新的部分，而不是整个组件树。</li>
</ul>
</li>
<li><strong>更好的内存使用</strong>：
<ul>
<li>Fiber 架构允许 React 更有效地管理内存，因为更新可以更精确地进行。</li>
</ul>
</li>
<li><strong>支持新的功能</strong>：
<ul>
<li>Fiber 的架构为 React 的未来发展提供了基础，例如 Suspense 组件（用于代码分割和数据获取的异步加载）。</li>
</ul>
</li>
<li><strong>更细粒度的控制</strong>：
<ul>
<li>开发者可以更细粒度地控制组件的渲染过程，例如通过 React.Suspense 和 useTransition 等新的 API。</li>
</ul>
</li>
<li><strong>避免布局抖动</strong>：
<ul>
<li>通过更细粒度的渲染控制，Fiber 有助于减少布局抖动，提供更平滑的 UI 体验。</li>
</ul>
</li>
</ol>
<p>React Fiber 是一个底层的重构，对于大多数开发者来说，日常开发中可能不会直接感受到 Fiber 的存在。但是，它为 React 应用提供了更好的性能和更强大的功能。随着 React 的发展，Fiber 架构将继续支持新特性和改进，进一步提升应用的性能和用户体验。
<a name="Ghffv"></a></p>
<h3 id="笔试题-1-经典useeffect里写setinterval和setstate-count-1-为什么不会更新count值" tabindex="-1"><a class="header-anchor" href="#笔试题-1-经典useeffect里写setinterval和setstate-count-1-为什么不会更新count值"><span>笔试题（1）：经典useEffect里写setInterval和setState(count+1)，为什么不会更新count值？</span></a></h3>
<p>在 React 中，如果你在 useEffect 钩子中同时使用 setInterval 和 setState 来更新状态，可能会遇到无法更新状态的问题。这通常发生在以下情况：</p>
<ol>
<li><strong>状态更新异步性</strong>： React 的 setState 是异步的，这意味着调用 setState 后不会立即更新状态，而是计划一个状态更新。</li>
<li><strong>闭包问题</strong>： 在 useEffect 中设置的 setInterval 可能会捕获到 count 的一个快照。由于 setState 是异步的，当定时器回调执行时，可能使用了一个旧的 count 值。</li>
</ol>
<p>下面是一个示例代码，演示了这个问题：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setState</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里可能使用了闭包捕获的旧 count 值</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 清理定时器</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，setInterval 每秒调用一次，但由于 setState 的异步性，count 可能还没有更新到最新的值。<br />为了解决这个问题，你可以使用 setState 的函数形式，这样你就可以基于前一个状态来更新状态：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevCount</span><span class="token punctuation">)</span> <span class="token operator">=></span> prevCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用函数形式的 setState，确保基于最新的状态更新</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 清理定时器</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用函数形式的 setState 可以确保你访问的是最新的状态值，而不是在定时器设置时捕获的旧值。这样，每次定时器触发时，React 都会使用当前的状态来计算新的状态。<br />此外，使用 useEffect 的清理函数（在上述示例中的返回语句）是很重要的，以确保在组件卸载时清除定时器，防止内存泄漏或意外行为。
<a name="wV914"></a></p>
<h3 id="笔试题-2-手写一个usesetinterval-hooks实现上述功能" tabindex="-1"><a class="header-anchor" href="#笔试题-2-手写一个usesetinterval-hooks实现上述功能"><span>笔试题（2）：手写一个useSetInterval Hooks实现上述功能</span></a></h3>
<p>要实现一个自定义的 useSetInterval Hook 来处理定时器和状态更新，我们可以参照 setInterval 的功能，同时确保状态更新是基于最新的状态值。下面是一个简单的实现：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useSetInterval</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 初始化一个状态来存储定时器的引用</span></span>
<span class="line">  <span class="token keyword">const</span> savedCallback <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 确保回调函数是最新的</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>timerRef<span class="token punctuation">,</span> setTimerRef<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 使用 useCallback 来确保回调函数在组件的整个生命周期内保持不变</span></span>
<span class="line">  <span class="token keyword">const</span> tick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    savedCallback<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行传入的回调函数</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>savedCallback<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果 delay 变化，根据新值更新定时器</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>delay<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span>tick<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">setTimerRef</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>delay<span class="token punctuation">,</span> tick<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当 delay 或者 tick 变化时，重新设置定时器</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 返回一个清除函数，可以在组件内部调用以清除定时器</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用示例</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 使用自定义的 useSetInterval Hook</span></span>
<span class="line">  <span class="token keyword">const</span> clearInterval <span class="token operator">=</span> <span class="token function">useSetInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 组件卸载时清除定时器</span></span>
<span class="line">    <span class="token keyword">return</span> clearInterval<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>clearInterval<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token literal-property property">Count</span><span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个 useSetInterval Hook 中：</p>
<ul>
<li>使用 useState 来创建一个 timerRef 来存储定时器的 ID。</li>
<li>使用 useCallback 来创建一个记忆化的 tick 函数，确保每次 useEffect 运行时传递给 setInterval 的回调函数都是最新的。</li>
<li>使用 useEffect 来设置和清理定时器。当 delay 或 tick 变化时，定时器会重新设置。</li>
<li>组件可以调用 clearInterval 函数来在适当的时候清除定时器，例如在组件卸载时。</li>
</ul>
<p>这样，我们就创建了一个自定义的 useSetInterval Hook，它能够正确地处理定时器和状态更新，避免了闭包问题，并确保了状态更新的正确性。
<a name="XCTXh"></a></p>
<h3 id="笔试题-3-手写一个请求并发限制器-requestthrottler" tabindex="-1"><a class="header-anchor" href="#笔试题-3-手写一个请求并发限制器-requestthrottler"><span>笔试题（3）：手写一个请求并发限制器 requestThrottler</span></a></h3>
<p><a name="phsJ2"></a></p>
<h3 id="案例-总计1000个请求-同一时刻最多5个请求并发进行" tabindex="-1"><a class="header-anchor" href="#案例-总计1000个请求-同一时刻最多5个请求并发进行"><span>案例：总计1000个请求，同一时刻最多5个请求并发进行</span></a></h3>
<p>要实现这样一个请求节流器 sendRequest 函数，我们可以维护一个请求队列和一个活动请求计数器。以下是具体的实现步骤和代码示例：</p>
<ol>
<li>创建一个队列来存储待处理的请求。</li>
<li>使用一个计数器来跟踪当前正在执行的请求数量。</li>
<li>当请求数量没有达到最大并发限制时，从队列中取出请求并执行。</li>
<li>请求完成后，更新计数器并从队列中取出下一个请求继续执行。</li>
<li>如果请求队列空了，停止执行。</li>
</ol>
<p>下面是具体的实现代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">RequestThrottler</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">maxConcurrentRequests</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>activeRequests <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>maxConcurrentRequests <span class="token operator">=</span> maxConcurrentRequests<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">requestParams<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> requestParams<span class="token punctuation">,</span> callback <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">processQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>activeRequests <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxConcurrentRequests</span>
<span class="line">    <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> <span class="token punctuation">{</span> requestParams<span class="token punctuation">,</span> callback <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>activeRequests<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token function">fetch</span><span class="token punctuation">(</span>requestParams<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>activeRequests<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 继续处理队列</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">callback</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>activeRequests<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用示例</span></span>
<span class="line"><span class="token keyword">const</span> maxConcurrentRequests <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> requestThrottler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RequestThrottler</span><span class="token punctuation">(</span>maxConcurrentRequests<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> requests <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.example.com/data?index=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">requests<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">requestParams<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  requestThrottler<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span></span>
<span class="line">    requestParams<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">请求 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 失败:</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">请求 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 成功:</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个实现中：</p>
<ul>
<li>RequestThrottler 类负责管理请求队列和并发请求计数。</li>
<li>enqueue 方法用于将请求添加到队列中，并处理队列中的请求。</li>
<li>processQueue 方法用于执行队列中的请求，直到达到最大并发请求限制或队列为空。</li>
<li>使用 fetch API 来发送请求，并通过回调函数处理请求成功或失败的情况。</li>
<li>当请求完成时，减少 activeRequests 计数，并尝试继续处理队列中的下一个请求。</li>
</ul>
<p>这个实现确保了最多只有5个请求同时进行，直到所有500个请求都完成。</p>
</div></template>


