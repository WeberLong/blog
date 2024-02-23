(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{309:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"性能与错误监控方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能与错误监控方案"}},[t._v("#")]),t._v(" 性能与错误监控方案")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("由于许多前端老项目需要性能优化，但是我们看不到用户实际数据，需要添加性能监控获取用户页面性能数据。同时许多项目需要用户页面错误数据，避免被动等待用户告诉我们bug。")]),t._v(" "),a("h2",{attrs:{id:"方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案"}},[t._v("#")]),t._v(" 方案")]),t._v(" "),a("p",[t._v("前端监控流程：数据采集 -> 数据上报 -> 服务端处理 -> 数据可视化")]),t._v(" "),a("h3",{attrs:{id:"_1-性能数据采集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-性能数据采集"}},[t._v("#")]),t._v(" 1. 性能数据采集")]),t._v(" "),a("p",[a("strong",[t._v("（1）页面信息采集。")]),t._v(" window.performance.timing对象里包含了页面加载各个阶段的起始及结束时间。我们可以获取我们关心的几个属性：")]),t._v(" "),a("p",[t._v("// 白屏时间")]),t._v(" "),a("p",[t._v("whiteScreen: timing.domLoading - timing.navigationStart,")]),t._v(" "),a("p",[t._v("// 重定向耗时")]),t._v(" "),a("p",[t._v("redirect: timing.redirectEnd - timing.redirectStart,")]),t._v(" "),a("p",[t._v("// DOM 渲染耗时")]),t._v(" "),a("p",[t._v("dom: timing.domComplete - timing.domLoading,")]),t._v(" "),a("p",[t._v("// 页面加载耗时")]),t._v(" "),a("p",[t._v("load: timing.loadEventEnd - timing.navigationStart,")]),t._v(" "),a("p",[t._v("// 页面卸载耗时")]),t._v(" "),a("p",[t._v("unload: timing.unloadEventEnd - timing.unloadEventStart,")]),t._v(" "),a("p",[t._v("// 请求耗时")]),t._v(" "),a("p",[t._v("request: timing.responseEnd - timing.requestStart,")]),t._v(" "),a("p",[t._v("// 获取性能信息时当前时间")]),t._v(" "),a("p",[t._v("time: new Date().getTime(),")]),t._v(" "),a("p",[t._v("真正的白屏时间需要根据各自项目自定义计算，比如：从用户打开页面到首页接口返回数据并展示时间。")]),t._v(" "),a("p",[a("strong",[t._v("（2）资源加载信息采集。")]),t._v(" 通过window.performance.getEntriesByType('resource')方法可以获取页面当前加载的所有资源信息。它一般包括以下几个类型：script/link/img/css/fetch/other/xmlhttprequest，我们需要使用的信息有：")]),t._v(" "),a("p",[t._v("// 资源的名称")]),t._v(" "),a("p",[t._v("name: item.name,")]),t._v(" "),a("p",[t._v("// 资源加载耗时")]),t._v(" "),a("p",[t._v("duration: item.duration.toFixed(2),")]),t._v(" "),a("p",[t._v("// 资源大小")]),t._v(" "),a("p",[t._v("size: item.transferSize,")]),t._v(" "),a("p",[t._v("// 资源所用协议")]),t._v(" "),a("p",[t._v("protocol: item.nextHopProtocol,")]),t._v(" "),a("h3",{attrs:{id:"_2-错误数据采集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-错误数据采集"}},[t._v("#")]),t._v(" 2. 错误数据采集")]),t._v(" "),a("p",[t._v("页面经常捕捉的错误有6种：")]),t._v(" "),a("ol",[a("li",[t._v("资源加载错误。通过addEventListener('error', callback, true)进行捕捉。")]),t._v(" "),a("li",[t._v("js执行错误。通过window.onerror捕捉js错误。")]),t._v(" "),a("li",[t._v("promise错误。通过addEventListener('unhandledrejection', callback)捕捉promise错误。")]),t._v(" "),a("li",[t._v("console.error错误。")]),t._v(" "),a("li",[t._v("window.fetch请求错误。")]),t._v(" "),a("li",[t._v("window.XMLHttpRequest请求错误。")])]),t._v(" "),a("p",[t._v("还有vue框架里的错误Vue.config.errorHandler，需要自定义方法进行采集。")]),t._v(" "),a("h3",{attrs:{id:"_3-性能数据上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-性能数据上报"}},[t._v("#")]),t._v(" 3. 性能数据上报")]),t._v(" "),a("p",[t._v("性能数据可以在页面加载完之后上报，不能对页面性能造成影响，可以在浏览器空闲时间进行采集并上报。这个功能不是所有浏览器都支持，需要做兼容判断。例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestIdleCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestIdleCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            report"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPerformance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            report"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reprotData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            report"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPerformance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            report"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reprotData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-错误数据上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-错误数据上报"}},[t._v("#")]),t._v(" 4. 错误数据上报")]),t._v(" "),a("p",[t._v("错误数据上报跟性能数据上报为什么分开上报？性能数据跟错误数据不同，性能数据在页面加载完成时所有的数据已拿到手，而错误数据，是会在整个页面周期不断的收集数据。一个是一次性数据，一个是源源不断的数据。错误上报时机一般有延时上报和及时上报，但是用户一旦关系了浏览器传统处理方法就会上报失败。浏览器引入了navigator.sendBeacon方法。这个方法还是异步发出请求，但是请求与当前页面脱钩，作为浏览器的任务，因此可以保证会把数据发出去，不拖延卸载流程。")]),t._v(" "),a("p",[t._v("navigator.sendBeacon方法有以下特点：")]),t._v(" "),a("p",[t._v("（1）发出的是异步请求，并且是POST请求，后端解析参数时，需要注意处理方式；")]),t._v(" "),a("p",[t._v("（2）发出的请求，是放到的浏览器任务队列执行的，脱离了当前页面，所以不会阻塞当前页面的卸载和后面页面的加载过程，用户体验较好；")]),t._v(" "),a("p",[t._v("（3）只能判断出是否放入浏览器任务队列，不能判断是否发送成功；")]),t._v(" "),a("p",[t._v("（4）Beacon API不提供相应的回调，因此后端返回最好省略response body。")]),t._v(" "),a("p",[t._v("navigator.sendBeacon方法接受两个参数，第一个参数是目标服务器的 URL，第二个参数是所要发送的数据（可选），可以是任意类型（字符串、表单对象、二进制对象等）。使用方法：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("unload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在页面卸载的时候上报错误数据")]),t._v("\n  navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBeacon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/xxxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" report"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);