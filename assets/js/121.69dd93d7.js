(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{454:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"常见设计模式总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见设计模式总结"}},[s._v("#")]),s._v(" 常见设计模式总结")]),s._v(" "),t("h2",{attrs:{id:"谈谈你对设计模式的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对设计模式的理解"}},[s._v("#")]),s._v(" 谈谈你对设计模式的理解？")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("设计模式是一种被广泛应用的解决问题的经验总结，它提供了一套可复用、可扩展、易于维护的解决方案。设计模式可以帮助我们更好地组织代码，提高代码质量和可读性。")]),s._v(" "),t("p",[s._v("由以前的程序员在实际工作中反复使用，总结得出的经验，形成的使用的模式。")])]),s._v(" "),t("li",[t("p",[s._v("有 7 个常用的软件设计原则")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("开闭原则 -- 对扩展开放，对修改关闭")]),s._v(" "),t("blockquote",[t("p",[s._v("你要对某个类进行加功能的时候，直接去继承这个类写一个新的类来使用，而不是在原有类上做修改")])])]),s._v(" "),t("li",[t("p",[s._v("单一职责原则 -- ⼀个类只负责⼀个功能领域中的相应职责")])]),s._v(" "),t("li",[t("p",[s._v("里氏替换原则 -- 所有引用基类的地方必须能透明地使用其子类的对象")])]),s._v(" "),t("li",[t("p",[s._v("依赖倒置原则 -- 依赖于抽象，不能依赖于具体实现")])]),s._v(" "),t("li",[t("p",[s._v("接口隔离原则 -- 类之间的依赖关系应该建立在最小的接口上")])]),s._v(" "),t("li",[t("p",[s._v("合成/聚合复用原则 -- 尽量使用合成/聚合，而不是通过继承达到复用的目的")])]),s._v(" "),t("li",[t("p",[s._v("最少知识原则 或者 迪米特法则 -- 一个软件实体应当尽可能少的与其他实体发生相互作用")])])])]),s._v(" "),t("li",[t("p",[s._v("主要有三大分类")]),s._v(" "),t("ul",[t("li",[s._v("创建型模式")]),s._v(" "),t("li",[s._v("结构型模式")]),s._v(" "),t("li",[s._v("行为型模式")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/images/image.5esivtv1v740.webp",alt:"image"}})])])]),s._v(" "),t("h2",{attrs:{id:"有哪些常见的设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有哪些常见的设计模式"}},[s._v("#")]),s._v(" 有哪些常见的设计模式？")]),s._v(" "),t("p",[s._v("常见的设计模式包括 单例模式、工厂模式、观察者模式、策略模式、模板方法模式 等。")]),s._v(" "),t("h2",{attrs:{id:"单例模式了解么-说一下单例模式的使用场景。手写一个单例模式的实现。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单例模式了解么-说一下单例模式的使用场景。手写一个单例模式的实现。"}},[s._v("#")]),s._v(" 单例模式了解么？说⼀下单例模式的使用场景。手写⼀个单例模式的实现。")]),s._v(" "),t("blockquote",[t("p",[s._v("什么是单例模式？")])]),s._v(" "),t("p",[s._v("单例模式是一种常见的（创建型）设计模式，它的作用是确保一个类只有一个实例，并提供一个全局的访问点。")]),s._v(" "),t("p",[s._v("在一些需要频繁创建对象的场景下，使用单例模式可以有效地减少系统的内存开销和性能损耗。")]),s._v(" "),t("blockquote",[t("p",[s._v("单例模式的使用场景")])]),s._v(" "),t("p",[s._v("单例模式的使用场景包括：")]),s._v(" "),t("ol",[t("li",[s._v("当类的实例化过程比较耗时或者需要消耗较多资源时，使用单例模式可以避免重复创建实例，从而提高系统性能。")]),s._v(" "),t("li",[s._v("当需要一个共享访问点来管理全局变量时，使用单例模式可以确保数据的一致性和可靠性。")]),s._v(" "),t("li",[s._v("当希望避免多个实例之间的冲突和竞争时，使用单例模式可以有效地避免这些问题。")])]),s._v(" "),t("blockquote",[t("p",[s._v("代码实现")])]),s._v(" "),t("p",[s._v("下面是一个简单的单例模式的实现：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),s._v(" instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         instance "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只有在第一次调用getInstance()方法时才会创建实例")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("这是懒汉式单例模式的基本实现，在这个实现中，我们使用了一个静态变量 instance 来保存单例实例，"),t("code",[s._v("getInstance()")]),s._v(" 方法用来获取实例。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在第一次调用 "),t("code",[s._v("getInstance()")]),s._v(" 方法时，instance 还没有初始化，会创建一个新的实例并返回，")])]),s._v(" "),t("li",[t("p",[s._v("以后再次调用 "),t("code",[s._v("getInstance()")]),s._v(" 方法时，直接返回已经创建好的实例。")])]),s._v(" "),t("li",[t("p",[s._v("这样就可以保证整个系统中只有一个 Singleton 实例存在。")]),s._v(" "),t("blockquote",[t("p",[s._v("饿汉式单例模式:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),s._v(" instance "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Singleton")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("在这个实现中，我们直接在静态变量中初始化 Singleton 实例，并在 getInstance() 方法中返回该实例。因为 instance 在类加载时就已经创建好了，所以不存在线程安全问题。")]),s._v(" "),t("p",[s._v("这种实现方式的"),t("strong",[s._v("缺点")]),s._v("是，如果 Singleton 实例的初始化需要消耗较多的资源或时间，会影响系统的性能，而且如果 Singleton 实例在整个系统中没有被使用到，也会浪费系统的资源。")])])])]),s._v(" "),t("h2",{attrs:{id:"观察者模式了解么-说一下观察者模式的使用场景。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式了解么-说一下观察者模式的使用场景。"}},[s._v("#")]),s._v(" 观察者模式了解么？说⼀下观察者模式的使⽤场景。")]),s._v(" "),t("p",[s._v("⼯⼚模式了解么？说⼀下⼯⼚模式的使⽤场景。")]),s._v(" "),t("p",[s._v("责任链模式了解么？")]),s._v(" "),t("p",[s._v("哪些开源项⽬（Netty、MyBatis）中⽤到了责任链模式？怎么⽤的？")]),s._v(" "),t("p",[s._v("SOL ID 原则了解么？")]),s._v(" "),t("p",[s._v("简单谈谈⾃⼰对于单⼀职责原则和开闭原则的理解。")]),s._v(" "),t("p",[s._v("阅读 Spring 源码的时候什么设计模式最让你影响深刻？能简单讲讲吗？")])])}),[],!1,null,null,null);t.default=e.exports}}]);