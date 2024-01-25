(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{388:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),t("h1",{attrs:{id:"条款26-尽可能延后变量定义式的出现时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款26-尽可能延后变量定义式的出现时间"}},[s._v("#")]),s._v(" 条款26：尽可能延后变量定义式的出现时间")]),s._v(" "),t("h1",{attrs:{id:"条款27-尽量少做转型动作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款27-尽量少做转型动作"}},[s._v("#")]),s._v(" 条款27：尽量少做转型动作")]),s._v(" "),t("h1",{attrs:{id:"条款28-避免返回handles指向对象内部成分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款28-避免返回handles指向对象内部成分"}},[s._v("#")]),s._v(" 条款28：避免返回handles指向对象内部成分")]),s._v(" "),t("p",[s._v("在Cpp中，handles是指一个指向对象的指针或引用，用于访问该对象的成员函数或成员变量。")]),s._v(" "),t("p",[s._v("而条款28所说的“返回handles指向对象内部成分”，是指返回指向该对象的私有成员或受保护成员的指针或引用。")]),s._v(" "),t("p",[s._v("这样做的问题在于，如果对该成员进行修改或者删除操作，可能会破坏该对象的不变量（invariant）或者类的封装性，导致程序出现不可预测的结果。")]),s._v(" "),t("p",[s._v("另外，如果返回的指针或引用是指向临时对象或已经被释放的对象，则会导致指针悬挂（dangling pointer）或引用无效的问题。")]),s._v(" "),t("p",[s._v("为了避免这种问题，建议使用对象的公有成员函数访问该对象的内部成分，而不是返回指向内部成分的指针或引用。")]),s._v(" "),t("p",[s._v("如果必须返回指针或引用，可以考虑使用智能指针（如"),t("code",[s._v("std::shared_ptr")]),s._v("或"),t("code",[s._v("std::unique_ptr")]),s._v("）来确保对象的生命周期，或者返回const指针或引用，防止被修改。")]),s._v(" "),t("p",[s._v("假设有一个类"),t("code",[s._v("Person")]),s._v("，其中有一个私有变量"),t("code",[s._v("age")]),s._v("表示年龄，如下所示：")]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetAge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置年龄")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetAge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取年龄")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("如果在该类中返回对"),t("code",[s._v("age")]),s._v("的引用或指针，就会存在返回handles指向对象内部成分的问题。例如：")]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetAgeRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回对age的引用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetAgePtr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回指向age的指针")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在这种情况下，如果返回的引用或指针被用于修改或者删除"),t("code",[s._v("age")]),s._v("，将会破坏"),t("code",[s._v("Person")]),s._v("类的封装性，导致程序出现不可预测的结果。 为了解决这个问题，可以使用对象的公有成员函数访问该对象的内部成分，而不是返回指向内部成分的指针或引用。例如：")]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetAge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置年龄")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetAge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取年龄")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetAgeViaFunction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetAge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过公有成员函数设置年龄")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("在这个例子中，我们新增了一个公有成员函数"),t("code",[s._v("SetAgeViaFunction")]),s._v("，用于通过公有成员函数"),t("code",[s._v("SetAge")]),s._v("来设置年龄。这样，外部代码就不能直接访问"),t("code",[s._v("age")]),s._v("，而是必须通过"),t("code",[s._v("SetAgeViaFunction")]),s._v("来访问"),t("code",[s._v("age")]),s._v("，从而保证了"),t("code",[s._v("Person")]),s._v("类的封装性。")]),s._v(" "),t("h1",{attrs:{id:"条款29-为-异常安全-而努力是值得的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款29-为-异常安全-而努力是值得的"}},[s._v("#")]),s._v(" 条款29：为“异常安全”而努力是值得的")]),s._v(" "),t("blockquote",[t("p",[s._v("“异常安全”是指程序在面对异常时，能够保持正确性、资源不泄漏、不破坏数据结构等性质。")]),s._v(" "),t("p",[s._v("在Cpp中，异常安全是非常重要的，因为Cpp支持异常机制，如果程序无法正确处理异常，可能会导致资源泄漏、内存泄漏、数据结构损坏等问题，从而影响程序的正确性和稳定性。")])]),s._v(" "),t("p",[s._v("请记住：")]),s._v(" "),t("ol",[t("li",[s._v("异常安全函数（Exception-safe functions）即使发生异常也不会泄露资源或允许任何数据结构败坏。这样的函数区分为三种可能的保证：基本型、强烈型、不抛异常型。")]),s._v(" "),t("li",[s._v("“强烈保证”往往能够以 copy-and-swap 实现出来，但“强烈保证“并非对所有函数都可实现或具备现实意义。")]),s._v(" "),t("li",[s._v("函数提供的”异常安全保证“通常最高只等于其所调用的各个函数的”异常安全保证“中的最弱者。")])]),s._v(" "),t("p",[s._v("因此，为了确保程序的异常安全性，我们需要在编写代码时，考虑并努力实现异常安全。具体来说，我们需要注意以下几点：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("确保不会让异常逃逸：在函数中抛出异常后，应该确保异常被正确地处理掉，而不是让它逃逸到函数外部，导致资源泄漏或数据结构损坏。为了避免异常逃逸，可以使用RAII技术，通过在对象构造函数中获取资源，在对象析构函数中释放资源，来保证资源的正确获取和释放。")])]),s._v(" "),t("li",[t("p",[s._v("考虑异常安全的级别：异常安全性有三个级别，分别是基本保证、弱异常安全和强异常安全。在编写代码时，应该根据情况选择最佳的异常安全级别。")]),s._v(" "),t("p",[s._v("基本保证是指：如果函数出现异常，程序状态不会受到破坏，但是可能会发生资源泄漏。")]),s._v(" "),t("p",[s._v("弱异常安全是指：如果函数出现异常，程序状态和资源都不会受到破坏，但是可能会出现不一致的状态。")]),s._v(" "),t("p",[s._v("强异常安全是指：如果函数出现异常，程序状态和资源都不会受到破坏，而且程序状态和资源都会回到调用函数前的状态。")])]),s._v(" "),t("li",[t("p",[s._v("使用异常处理机制：在编写代码时，应该使用异常处理机制来处理异常。通过抛出异常并捕获异常，可以避免程序崩溃，并将异常抛出给调用者进行处理。在抛出异常时，应该提供一个清晰的异常信息，方便调用者进行处理。")])])]),s._v(" "),t("h1",{attrs:{id:"条款30-透彻了解inlining的里里外外"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款30-透彻了解inlining的里里外外"}},[s._v("#")]),s._v(" 条款30：透彻了解inlining的里里外外")]),s._v(" "),t("p",[s._v('条款30中的"inlining"是指Cpp中的内联函数，它是一种编译器的优化技术，可以将函数调用处直接替换为函数体，从而减少函数调用的开销，提高程序的性能。但是，内联函数也有一些限制和缺点，因此，在使用内联函数时，需要透彻了解其里里外外，以便能够正确地使用和优化内联函数。')]),s._v(" "),t("p",[s._v('具体来说，理解"inlining"的里里外外需要注意以下几点：')]),s._v(" "),t("ol",[t("li",[s._v("内联函数的适用范围：内联函数适用于函数体比较小、被频繁调用的函数。如果函数体比较大，内联函数可能会导致代码膨胀，从而影响程序的性能。因此，在使用内联函数时，需要根据实际情况进行选择。")]),s._v(" "),t("li",[s._v("内联函数的定义：内联函数通常需要在头文件中进行定义，以便编译器能够在编译时进行函数替换。"),t("strong",[s._v("在定义内联函数时，需要注意函数体不能包含循环、递归等语句，否则会导致编译器无法进行内联")]),s._v("。")]),s._v(" "),t("li",[s._v("内联函数的声明：内联函数的声明通常也需要在头文件中进行，以便其他文件能够调用内联函数。**在声明内联函数时，需要使用inline关键字，**以便告诉编译器该函数需要进行内联。")]),s._v(" "),t("li",[s._v("内联函数的优化：在使用内联函数时，需要注意优化内联函数的代码，以提高程序的性能。"),t("strong",[s._v("可以使用一些技巧，如避免多余的函数调用、避免局部变量过多、使用常量表达式等")]),s._v("。")]),s._v(" "),t("li",[s._v("内联函数的限制：内联函数也有一些限制，例如不能取地址、不能有静态变量等。在使用内联函数时，需要注意这些限制，以便正确地使用内联函数。")])]),s._v(" "),t("p",[s._v("请记住：")]),s._v(" "),t("ol",[t("li",[s._v("将大多数inlining限制在小型、被频繁调用的函数身上。这可使日后的调试过程和二进制升级更容易，也可使潜在的代码膨胀问题最小化，使程序的速度提升机会最大化。")]),s._v(" "),t("li",[s._v("不要只因为function templates 出现在头文件，就将它们声明为inline")])]),s._v(" "),t("blockquote",[t("p",[s._v("=="),t("strong",[s._v("如何理解“不要只因为function templates 出现在头文件，就将它们声明为inline”这句话？")]),s._v("==")])]),s._v(" "),t("p",[s._v("在Cpp中，函数模板（function templates）是一种通用的函数定义方式，它可以用来定义多个具有相同功能但类型不同的函数。**由于函数模板通常需要在头文件中进行定义，因此很容易将它们声明为内联函数（inline）以提高程序的性能。**但是，"),t("strong",[s._v("在使用函数模板时，不要只因为它们出现在头文件中，就将它们声明为内联函数")]),s._v("，而应该根据实际情况进行选择。 具体来说，不要将所有函数模板都声明为内联函数的原因有以下几点：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("函数模板的大小不确定")]),s._v("：由于函数模板可以用于定义多个函数，因此其大小在编译时是不确定的。如果将所有函数模板都声明为内联函数，可能会导致代码膨胀，从而影响程序的性能。")]),s._v(" "),t("li",[t("strong",[s._v("内联函数的适用范围有限")]),s._v("：内联函数适用于函数体比较小、被频繁调用的函数。对于函数模板来说，其具体调用情况是不确定的，因此并不是所有函数模板都适合声明为内联函数。")]),s._v(" "),t("li",[s._v("其他优化方式：除了将函数模板声明为内联函数之外，还有其他一些优化方式，如使用编译器的优化选项、避免多余的函数调用等。在使用函数模板时，应该根据实际情况选择最合适的优化方式。")])]),s._v(" "),t("p",[s._v("因此，不要只因为函数模板出现在头文件中，就将它们声明为内联函数。应该根据实际情况进行选择，综合考虑函数模板的大小、调用情况、优化方式等因素，以便选取最合适的优化方案。")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("==如何理解“将大多数inlining限制在小型、被频繁调用的函数身上。这可使日后的调试过程和二进制升级更容易，也可使潜在的代码膨胀问题最小化，使程序的速度提升机会最大化。”这句话？==")])])]),s._v(" "),t("p",[s._v("这句话指出了在使用内联函数时应该将大多数内联函数限制在小型、被频繁调用的函数中，以便最大化程序的速度提升机会，并最小化潜在的代码膨胀问题，同时也方便了日后的调试过程和二进制升级。 具体来说，这句话的含义可以从以下几个方面进行解释：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("内联函数的适用范围")]),s._v("：内联函数适用于函数体比较小、被频繁调用的函数。将大多数内联函数限制在这样的函数中，可以最大化程序的速度提升机会，因为内联函数可以减少函数调用的开销。")]),s._v(" "),t("li",[t("strong",[s._v("调试和升级的问题")]),s._v("：将内联函数限制在小型、被频繁调用的函数中，可以使调试过程更加容易，因为这些函数的代码比较简单，容易定位和排查问题。同时，也方便了二进制升级，因为这些函数的代码不会对其他部分的代码产生过多的影响。")]),s._v(" "),t("li",[t("strong",[s._v("代码膨胀问题")]),s._v("：内联函数会将函数体直接嵌入到调用处，从而增加代码的长度。如果将所有函数都声明为内联函数，可能会导致代码膨胀，从而影响程序的性能。将大多数内联函数限制在小型、被频繁调用的函数中，可以最小化潜在的代码膨胀问题，并提高程序的性能。")])]),s._v(" "),t("p",[s._v("综上所述，将大多数内联函数限制在小型、被频繁调用的函数中，可以最大化程序的速度提升机会，最小化潜在的代码膨胀问题，并方便了日后的调试过程和二进制升级。")]),s._v(" "),t("h1",{attrs:{id:"条款31-将文件间的编译依存关系降至最低"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款31-将文件间的编译依存关系降至最低"}},[s._v("#")]),s._v(" 条款31：将文件间的编译依存关系降至最低")]),s._v(" "),t("p",[s._v("条款31指出了在软件开发中，应该尽可能地将文件间的编译依存关系降至最低，以便实现更好的模块化和可重用性。具体来说，可以从以下几个方面来理解这个条款：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("编译依存关系：文件间的编译依存关系指的是一个源文件（或头文件）在编译时所依赖的其他源文件（或头文件）。如果一个源文件依赖于另外的源文件，那么在编译时就需要将这些源文件一起编译，从而增加了编译时间和编译的复杂性。")])]),s._v(" "),t("li",[t("p",[s._v("最小化编译依存关系的好处：将文件间的编译依存关系降至最低，可以实现更好的模块化和可重用性。")]),s._v(" "),t("p",[s._v("模块化指的是将软件系统分解为多个独立的模块，每个模块都具有清晰的接口和功能；")]),s._v(" "),t("p",[s._v("可重用性指的是可以将一个模块在不同的系统中重复使用。")]),s._v(" "),t("p",[s._v("最小化编译依存关系可以使得每个模块都具有清晰的接口和功能，从而提高了模块化和可重用性。")])]),s._v(" "),t("li",[t("p",[s._v("实现最小化编译依存关系的方法：实现最小化编译依存关系的方法有很多，比如使用前置声明（forward declaration）、将接口和实现分离、使用接口类（interface class）等。")]),s._v(" "),t("p",[s._v("前置声明可以减少头文件之间的相互依赖；将接口和实现分离可以使得模块之间的依赖更加清晰；")]),s._v(" "),t("p",[s._v("使用接口类可以将模块之间的依赖限制在接口上，从而提高了模块化和可重用性。")])])]),s._v(" "),t("p",[s._v("以下是对该条款的理解和一些实践建议：")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("减少头文件的依赖")]),s._v("：尽量减少头文件之间的相互包含，只包含必要的头文件。这样可以降低编译依存关系，避免引入不必要的依赖关系。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("使用前向声明（Forward Declaration）")]),s._v("：如果在头文件中只需要使用某个类的指针或引用而不需要知道其具体实现细节，可以使用前向声明来代替包含整个头文件。这样可以减少头文件的依赖关系。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("使用接口类（Interface Class）")]),s._v("：将公共接口定义在一个独立的接口类中，然后在其他文件中使用该接口类而不是具体的实现类。这样可以降低对具体实现类的依赖，提高代码的可扩展性和可替换性。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("使用编译器前置声明（Compiler Firewall）")]),s._v("：在某个实现文件中使用前向声明和指针/引用，然后在该文件的头文件中包含所需的具体实现。这样可以将依赖关系局限在该实现文件内部，减少对其他文件的影响。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("使用纯虚函数（Pure Virtual Functions）")]),s._v("：如果某个类在其他文件中只需要通过指针或引用进行操作，可以将该类设计为纯虚函数的基类，然后使用基类的指针或引用来操作具体的子类。这样可以降低对具体子类的依赖，提高代码的灵活性和可扩展性。")])])]),s._v(" "),t("p",[s._v("总的来说，条款31的目标是通过降低文件间的编译依存关系，减少代码间的耦合性，从而提高代码的可维护性和可扩展性。通过合理的头文件设计、前向声明、接口类和编译器前置声明等技术手段，可以将依赖关系限制在合适的范围内，使代码更加模块化、可重用和易于维护。")])])}),[],!1,null,null,null);t.default=e.exports}}]);