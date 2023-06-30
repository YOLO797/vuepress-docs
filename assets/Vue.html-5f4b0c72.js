import{_ as i,W as d,X as c,Y as a,$ as e,a0 as t,Z as n,a1 as l,C as r}from"./framework-b609eea8.js";const s={},p=e("p",null,"VUE2.0 \\ VUE3.0",-1),h=l(`<h2 id="_1-spa单页面" tabindex="-1"><a class="header-anchor" href="#_1-spa单页面" aria-hidden="true">#</a> 1. SPA单页面</h2><p>单页面，仅在页面初始化时加载相应的 <code>HTML</code> 、<code>JS</code>、<code>CSS</code>。一旦页面加载完成后，<code>SPA</code> 不会因为用户的操作而重新加载或者跳转页面，而是利用路由机制实现 <code>HTML</code> 内容的变换，<code>UI</code> 交互，避免页面重新加载。</p><div class="hint-container info"><p class="hint-container-title">参考答案</p><p><strong>优点：</strong></p><ul><li>用户体验好，快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染</li><li>相对服务器压力小</li><li>前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理</li></ul><p><strong>缺点：</strong></p><ul><li>初次加载耗时多：为实现单页面应用功能及显示效果，需要在页面加载时将 <code>js</code>、<code>css</code>同时加载，部分页面按需加载</li><li><code>SEO</code> 难度大：所有的内容都在一个页面中动态替换显示</li></ul></div><p><strong>解决spa首屏加载过慢？</strong></p><p>加载慢的原因可能如下：</p><ul><li>网络延迟</li><li>资源文件体积过大</li><li>资源重复发送请求加载</li><li>加载脚本时，渲染内容堵塞</li></ul><div class="hint-container info"><p class="hint-container-title">常见优化方式</p><ul><li>减小入口体积</li><li>静态资源本地缓存</li><li>UI 框架按需加载</li><li>图片资源的压缩</li><li>组件重复打包</li><li>使用 SSR</li></ul></div><h2 id="_2-数据的双向绑原理" tabindex="-1"><a class="header-anchor" href="#_2-数据的双向绑原理" aria-hidden="true">#</a> 2. 数据的双向绑原理</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>采用数据劫持+发布订阅模式方式。</p><p>分两个阶段：数据初始化阶段（数据监听、页面渲染），数据更新阶段</p><p>通过 <code>Observer</code> 对数据进行监听，通过 <code>Object.defineProperty</code> 转化为 <code>getter/setter</code>来监听所有属性，如果属性发生变化，通知订阅者 <code>Watcher</code>看是否需要更新</p><p>因为订阅者有很多个，所以需要 <code>Dep</code> 消息订阅器来专门收集这些订阅者，进行统一管理。</p><p>数据 <code>data</code> 变化 --&gt; <code>Observer</code> 中的 <code>setter</code> 触发 <code>Dep.notify()</code> --&gt; <code>Dep</code> 开始遍历所有的订阅者，对 <code>Watcher</code> 发送通知 --&gt; 触发 <code>update()</code> --&gt; <code>Watcher</code> 收到 <code>Dep</code>的通知 --&gt; 相应视图更新</p></div><h2 id="_3-为什么data属性是一个函数而不是一个对象" tabindex="-1"><a class="header-anchor" href="#_3-为什么data属性是一个函数而不是一个对象" aria-hidden="true">#</a> 3. 为什么data属性是一个函数而不是一个对象？</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>防止多个组件实例对象之间使用同一个 <code>data</code> 数据，产生数据污染。</p><p>采用函数的形式，每次都会返回一个新的 <code>data</code></p></div><h2 id="_4-组件之间的通信方式" tabindex="-1"><a class="header-anchor" href="#_4-组件之间的通信方式" aria-hidden="true">#</a> 4. 组件之间的通信方式</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><ul><li><code>props/$emit</code>：父子组件</li><li><code>ref</code> 与 <code>$parent/$children</code>：父子组件</li><li><code>EventBus( $emit/$on )</code>：任意</li><li><code>$attr/$listeners</code>：隔代组件</li><li><code>provide/inject</code>：任意</li><li><code>Vuex</code>：任意</li></ul></div><h2 id="_5-this-nexttick" tabindex="-1"><a class="header-anchor" href="#_5-this-nexttick" aria-hidden="true">#</a> 5. this.$nextTick</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>在下次 <code>DOM</code> 更新循环结束后执行延迟回调。在修改该数据之后立即使用这个方法，获取更新后的 <code>DOM</code></p><p><code>vue</code> 在更新 <code>DOM</code> 时是异步执行的。当数据发生变化时， <code>vue</code> 将开启一个异步更新队列，视图需要等队列中的所有数据变化完成后，在统一进行更新。</p></div><h2 id="_6-vue应该在哪个生命周期内发起请求" tabindex="-1"><a class="header-anchor" href="#_6-vue应该在哪个生命周期内发起请求" aria-hidden="true">#</a> 6. vue应该在哪个生命周期内发起请求</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>可以在 <code>created</code>、<code>mounted</code>中进行调用，因为在这时候 <code>data</code> 已经创建</p><p>推荐在 <code>created</code> 中发起请求：</p><ul><li>能够更快获取到服务器数据，减少页面 <code>loading</code> 时间</li><li>服务端渲染不支持 <code>beforeMount</code>、<code>mount</code>，所以放在 <code>created</code> 中有助于一致性</li></ul></div><h2 id="_7-vue页面级组件之间传值" tabindex="-1"><a class="header-anchor" href="#_7-vue页面级组件之间传值" aria-hidden="true">#</a> 7. vue页面级组件之间传值</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><ul><li>通过路由参数</li><li>本地缓存 <code>localStroage</code></li><li><code>vuex</code></li></ul></div><h2 id="_8-vue中使用token登录的具体流程" tabindex="-1"><a class="header-anchor" href="#_8-vue中使用token登录的具体流程" aria-hidden="true">#</a> 8. vue中使用token登录的具体流程</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><ol><li>用户通过账户名和密码发送登录请求</li><li>服务端对帐户的有效性进行验证</li><li>验证成功后再利用 <strong>密钥</strong> 和 <strong>加密算法</strong> 做一个签名的 <code>token</code> 返回给客户端</li><li>客户端本地存储 <code>token</code>，并在每次请求的 <code>header</code> 中带上 <code>token</code></li><li>服务端验证 <code>token</code> ，有且 <code>token</code>没有过期就返回数据，无或 <code>token</code> 失效返回 401 状态码</li><li>客户端一旦发现401 就重定向到登录页</li></ol></div><p><strong>如何利用 Axios实现携带token和401状态码判定？</strong></p><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>利用 <code>Axios</code> 的请求/拦截响应。</p><p>使用 <code>Axios.interceptors.request.use</code> 进行请求拦截，判断 <code>localStroage</code> 是否有 <code>token</code>，有则在请求头里携带。</p><p>使用 <code>Axios.interceptors.response.use</code> 进行响应拦截，判断 <code>response.status</code> 是否为401，是则代表 <code>token</code> 失效，清空本地 <code>token</code>，跳转登录页。</p></div><p><strong>如何监控路由跳转，并在没有token时跳转回登录页？</strong></p><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>使用 <code>Vue-Router</code> 的全局路由守卫 <code>router.beforeEach(to, from, next)</code></p><p>如果用户访问的是不需要登录就能访问的页面（如 <code>to.path === &#39;/login&#39;</code>），直接跳转</p><p>否则判断本地是否有 <code>token</code>，有则调用 <code>next()</code>，无则 <code>next(&#39;/login&#39;)</code> 跳转至登录页</p></div><h2 id="_9-模板编译原理" tabindex="-1"><a class="header-anchor" href="#_9-模板编译原理" aria-hidden="true">#</a> 9. 模板编译原理</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>将 <code>template</code> 转化成一个 <code>javascript</code> 函数，浏览器通过执行这个函数渲染出对应的 <code>HTML</code> 元素，就可以让视图跑起来，这个转化过程，就是模板编译。</p><p>模板编译分为三个阶段：解析 <code>parse</code>，优化 <code>optimize</code>，生成 <code>generate</code>，最终生成可执行函数 <code>render</code></p><ul><li><code>parse</code>阶段：使用大量正则表达式对 <code>template</code> 字符串进行解析，将标签、指令、属性等转化为抽象语法树 <code>AST</code></li><li><code>optimize</code>阶段：遍历 <code>AST</code>，找到其中的一些静态节点并标记，方便在页面重新渲染的时候进行 <code>diff</code> 比较时直接跳过这些静态节点，优化 <code>runtime</code> 的性能</li><li><code>generate</code>阶段：将最终的 <code>AST</code>转化为 <code>render</code> 函数字符串</li></ul></div><h2 id="_10-hash和history" tabindex="-1"><a class="header-anchor" href="#_10-hash和history" aria-hidden="true">#</a> 10. hash和history</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p><code>hash</code> ：</p><ul><li><code>url</code>展示上， 有 “#”</li><li><code>hash</code> 值的变化不会导致浏览器发出强求，所以不会刷新页面</li><li>刷新页面时，可以正常加载到 <code>hash</code> 值对应的页面</li><li>通过 <code>hashchange</code> 事件监听 <code>hash</code> 发生了哪些变化，然后根据变化来实现更新页面部分内容的操作</li></ul><p><code>history</code>：</p><ul><li>刷新页面时，如果没有重定向路由的话，会返回 404</li><li>新增 <code>pushState()</code>、<code>replaceState()</code> 方法，该方法改变 <code>url</code>,但不会发起请求</li></ul></div><h2 id="_11-vue-router路由钩子函数-执行顺序" tabindex="-1"><a class="header-anchor" href="#_11-vue-router路由钩子函数-执行顺序" aria-hidden="true">#</a> 11. vue-router路由钩子函数？执行顺序？</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>钩子函数：</p><ul><li>全局守卫：<code>beforeEach</code>、<code>afterEach</code></li><li>组件守卫：<code>beforeRouterLeave</code>、<code>beforeRouterUpdate</code>、<code>beforeRouterEnter</code></li><li>独享守卫：<code>beferEnter</code></li></ul><p>完整的导航解析流程：</p><ol><li>触发导航</li><li>失活的组件内调用 <code>beforeRouterLeave</code></li><li>调用 <code>beforeEach</code></li><li>在重用的组件内调用 <code>beforeRouterUpdate</code></li><li>在路由配置内 <code>beforeEnter</code></li><li>解析异步路由组件</li><li>在被激活的组件内调用 <code>beforeRouterEnter</code></li><li>导航确认</li><li><code>afterEach</code></li><li><code>DOM</code> 更新</li></ol></div><h2 id="_12-vue如何检测数组的变化" tabindex="-1"><a class="header-anchor" href="#_12-vue如何检测数组的变化" aria-hidden="true">#</a> 12. vue如何检测数组的变化</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p><code>vue </code> 将 <code>data</code> 中的数组进行了<mark>原型链重写</mark>，指向了自己定义的数组原型方法。这样当调用数组 <code>api</code> 时，可以通知 <mark>依赖更新</mark>。如果数组中包含引用类型，会对数组中的引用类型 <mark>再次递归遍历</mark>进行监控。这样就实现了监测数组变化。</p><p><strong>有两种情况无法监测到数组变化：</strong></p><ul><li>利用索引 下标改变数组时</li><li>修改数组长度时</li></ul><p>替代方案：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>vm<span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> index<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="_13-单项数据流" tabindex="-1"><a class="header-anchor" href="#_13-单项数据流" aria-hidden="true">#</a> 13. 单项数据流</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>数据总是从父组件传递到子组件，子组件没有权利修改父组件传过来的数据，只能请求父组件对原始数据的修改。这样可以防止从子组件意外改变父组件的状态，从而导致你的应用的数据流向难以理解。</p></div><h2 id="_14-vue初始化做了些什么" tabindex="-1"><a class="header-anchor" href="#_14-vue初始化做了些什么" aria-hidden="true">#</a> 14. vue初始化做了些什么</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><ol><li><p>初始化组件配置项</p><p>初始化根组件时进行了选项合并操作，将全局合并到根组件的局部配置中</p></li><li><p>初始化组件实例的关系属性，如：$parent、$children、$root、$refs等</p></li><li><p>处理自定义事件</p></li><li><p>调用 <code>beforeCreate</code>钩子函数</p></li><li><p>数据响应式，处理 props、methods、data、computed、watch等选项</p></li><li><p>调用 <code>created</code> 钩子函数</p></li><li><p>判断是否有 <code>el</code>，有自动调用 <code>$mount</code>，没有就必须调用 <code>$mount</code></p></li><li><p>挂载</p></li></ol></div><h2 id="_15-mvvm" tabindex="-1"><a class="header-anchor" href="#_15-mvvm" aria-hidden="true">#</a> 15 MVVM</h2><div class="hint-container info"><p class="hint-container-title">参考答案</p><p>M：model,模型，对应的是 data 的数据</p><p>V：view，视图，用户界面，DOM</p><p>VM：view-model，视图模型，链接model和view之间的桥梁</p><p>提供的是 view和viewmodel的双向绑定，当数据发生改变的时候，viewmodel能监听到数据的变化，自动更新视图。当用户操作视图的时候，viewmodel也可以监听视图的变化，然后通知数据进行改动，实现双向绑定。</p><p>我们只需要关注业务逻辑即可，不需要手动操作DOM，同时也不需要关注数据状态问题，由MVVM统一管理。</p></div><h2 id="diff算法" tabindex="-1"><a class="header-anchor" href="#diff算法" aria-hidden="true">#</a> diff算法</h2><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2>`,41),u={href:"https://www.51cto.com/article/652100.html?u_atoken=9941a446-3667-4396-aab8-59271510961c&u_asession=01xXsLEoewaxWnBOwtNZX6Hjv_nYblRjCVKi1QZxR42iDyyxOwbzMjQKNsQ5UgWnw2X0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K8cleyOw11lkpF98FaXIvqdrqbvh_g0SwoZUQIy9IQKTGBkFo3NEHBv0PZUm6pbxQU&u_asig=05cR52hcjdMgru4HQOxSwv1_PlNX4gP6RqX6HSQwq5usTBxNFivG8lgZ1ZfMbqR66dxqV_-LyzPtcKLGez4cPH7dcj0dEAfpg6gwGXWR-RwkAwKQFq0oFieKAKJi-HG75ezB1pGfY1zsU3wn9oatvNUTt2t520hX5KGDeuoQvfqPD9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzePOfv1_mZuShglJwtzr7azoIn-irCJ9tirn9Zn8VFifTWmG7GZanmEtNvKB0YxlD-3h9VXwMyh6PgyDIVSG1W98-xeb7OoSIIQfLZAZGCvd3Lxxiw1Iyz2TSblidq6Hs6SmYVgZHy2AOtiAv9340CPCEU6s0_Ol7LDePnrBxBYHmWspDxyAEEo4kbsryBKb9Q&u_aref=GDJlsHLd%2F9Dh6u8YNtrE7E00k4Q%3D",target:"_blank",rel:"noopener noreferrer"};function v(f,_){const o=r("ExternalLinkIcon");return d(),c("div",null,[p,a(" more "),h,e("p",null,[e("a",u,[t("性能优化"),n(o)])])])}const x=i(s,[["render",v],["__file","Vue.html.vue"]]);export{x as default};
