(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{376:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cpp之旅-学习笔记-第4章-错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpp之旅-学习笔记-第4章-错误处理"}},[t._v("#")]),t._v(" Cpp之旅（学习笔记）第4章 错误处理")]),t._v(" "),s("h2",{attrs:{id:"_4-1-异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-异常"}},[t._v("#")]),t._v(" 4.1 异常")]),t._v(" "),s("p",[t._v("当我们试图越界访问Vector动态数组时，应该发生什么？")]),t._v(" "),s("p",[t._v("假定可从下标越界的访问错误中恢复，那么Vector类的解决方案是实现者检测所有的越界访问并且告知用户。然后用户执行合适的操作。")]),t._v(" "),s("p",[t._v("例如：Vector::operator"),s("a",{attrs:{href:""}}),t._v("可以检测所有越界访问并且抛出out_of_range异常：")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" Vector"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" out_of_range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vector::operator[]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" elem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[t._v("throw指令创建了一个 out_of_range 类型的异常，并将异常的控制权转移给直接或者间接调用 "),s("code",[t._v("Vector::operator[]()")]),t._v(" 函数的用户。")]),t._v(" "),s("li",[t._v("要做到这点，编译器的实现需要回溯函数的调用栈并且找到调用者的上下文。")]),t._v(" "),s("li",[t._v("这意味着异常处理机制将退出当前作用域并且把上下文回溯到对该异常感兴趣的调用者，在这个过程中可能会调用析构函数。")])]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在这个区块抛出的out_of_range异常，使用下方处理器处理")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compute1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可能会试图访问v的结束以外的范围")]),t._v("\n        Vector v2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compute2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可能会试图访问v的结束以外的范围")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compute3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可能会试图访问v2的结束以外的范围")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" out_of_range"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//哎呀，发生了out_of_range错误")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//处理这个错误")]),t._v("\n        cerr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("what")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'\\n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("ul",[s("li",[t._v("将想要捕获异常的代码放进一个try代码块。此处的catch语句用来处理类型为 out_of_range 的异常。")]),t._v(" "),s("li",[t._v("out_of_range 类型在标准库"),s("code",[t._v("<stdexcept>")]),t._v("中定义，事实上也已经被一些容器访问类标准库函数使用。")]),t._v(" "),s("li",[t._v("这里使用引用来捕获异常以避免对异常变量的复制，同时使用 what() 函数打印输出被 throw 抛出的错误信息。")])]),t._v(" "),s("p",[t._v("异常处理机制可以是错误处理更简单、更系统化，同时提升可读性。")]),t._v(" "),s("p",[t._v("让异常处理变得简单与系统化的主流技术（"),s("strong",[t._v("名为资源获取即初始化，RAII")]),t._v("）。")]),t._v(" "),s("p",[t._v("RAII的基本思想：让构造函数负责获取类需要的资源，同时让析构函数负责释放资源，这样就可让资源释放可靠地自动进行。")]),t._v(" "),s("h2",{attrs:{id:"_4-2-断言机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-断言机制"}},[t._v("#")]),t._v(" 4.2 断言机制")]),t._v(" "),s("h3",{attrs:{id:"_4-2-1-assert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-assert"}},[t._v("#")]),t._v(" 4.2.1 assert")]),t._v(" "),s("p",[t._v("标准库提供了一个调试宏，assert()，它可以在运行时断言必须满足的条件。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//p不可以是nullptr")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("如果assert()的条件不满足，在调试模式下，程序终止，在非调试模式下，assert()不被检查。这个功能简单粗暴而且不够灵活，当然也比什么都不做要强。")]),t._v(" "),s("h3",{attrs:{id:"_4-2-2-static-assert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-static-assert"}},[t._v("#")]),t._v(" 4.2.2 static_assert")]),t._v(" "),s("p",[t._v("异常用于报告在运行时发现的错误。但只要有可能，我们倾向于尽量让错误可以在编译时被发现。")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"integers are too small"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//检查整数大小")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如果4 <= sizeof(int)不满足（意思是：如果系统中的int类型不具备至少4字节长度）。则会输出integers are too small。我们把这种语句叫做断言。")]),t._v(" "),s("p",[t._v("静态断言机制可以使用任何表达式：")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constexpr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" C "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("299792.458")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// km/s")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" speed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constexpr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" local_max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("160.0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 160km/h = 160.0/(60*60)km/s")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("speed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"can\'t go that fast"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误：speed必须是常量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static_assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("local_max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"can\'t go that fast"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可行")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ul",[s("li",[t._v("一般来说，如果A不为真，那么static_assert(A,S)打印输出S作为编译错误信息。")]),t._v(" "),s("li",[t._v("如果你不需要某个特定的信息，可以忽略S参数，编译器会生成默认信息："),s("code",[t._v("static_assert(4 <= sizeof(int));//使用默认信息")])]),t._v(" "),s("li",[t._v("典型的默认信息通常由static_assert调用代码的位置加上断言内容的字符表述谓词构成。")]),t._v(" "),s("li",[t._v("静态断言的一大重要用途是在泛型编程中对类型参数进行断言。")])]),t._v(" "),s("h3",{attrs:{id:"_4-2-3-noexcept"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-noexcept"}},[t._v("#")]),t._v(" 4.2.3  noexcept")]),t._v(" "),s("p",[t._v("如果一个函数绝不应当抛出异常，那么可以将它声明为noexcept。")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("noexcept")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vector "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iota")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将v填充为1，2，3，4...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("如果所有的意图与设计都失败，user()函数依然抛出异常，系统会立即调用std::terminate中止这个程序。")]),t._v(" "),s("h2",{attrs:{id:"_4-3-建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-建议"}},[t._v("#")]),t._v(" 4.3 建议")]),t._v(" "),s("ol",[s("li",[t._v("打开文件失败或到达迭代结束是预期事件而不是异常；")]),t._v(" "),s("li",[t._v("在错误需要通过多层函数调用向上渗透时，抛出异常；")]),t._v(" "),s("li",[t._v("如果不确定是使用异常还是错误代码，首选异常；")]),t._v(" "),s("li",[t._v("优先使用RAII，而不是直接用try代码块；")]),t._v(" "),s("li",[t._v("能在编译时检查的问题尽量在编译时检查；")]),t._v(" "),s("li",[t._v("使用断言机制对故障进行单点控制；")]),t._v(" "),s("li",[t._v("Concepts是编译时的断言，因此经常用在断言中；")]),t._v(" "),s("li",[t._v("如果你的函数不允许抛出异常，那么把它声明为noexcept；")]),t._v(" "),s("li",[t._v("除非经过全面考虑，否则不要使用noexcept；")])])])}),[],!1,null,null,null);s.default=e.exports}}]);