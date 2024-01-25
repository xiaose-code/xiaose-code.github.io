(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{343:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"让自己习惯cpp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#让自己习惯cpp"}},[s._v("#")]),s._v(" 让自己习惯Cpp")]),s._v(" "),t("h1",{attrs:{id:"条款1-视cpp为一个语言联邦"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款1-视cpp为一个语言联邦"}},[s._v("#")]),s._v(" 条款1：视Cpp为一个语言联邦")]),s._v(" "),t("p",[s._v("条款1中提到了将Cpp看作为一个“语言联邦”的概念。具体来说，“语言联邦”是指将Cpp看作由多种不同的子语言组成的联邦。每种子语言都有自己的惯用法、工具和库，可以用来解决特定的问题。因此，Cpp程序员应该了解这些子语言，并选择最适合解决特定问题的子语言。 这个概念的含义可以从以下几个方面来解释：")]),s._v(" "),t("ol",[t("li",[s._v("多种子语言：Cpp由多种子语言组成，每种子语言都有自己的规则、习惯和约定。例如，面向对象编程（OOP）子语言、模板元编程（TMP）子语言等。这些子语言都有自己的语法和语义，可以用来解决特定的问题。")]),s._v(" "),t("li",[s._v("惯用法和工具：每种子语言都有自己的惯用法和工具。例如，"),t("strong",[s._v("OOP中常用的类、继承、多态等概念，以及与之对应的工具和库")]),s._v("，"),t("strong",[s._v("如STL、Boost等")]),s._v("。熟悉这些惯用法和工具可以提高程序员的开发效率和代码质量。")]),s._v(" "),t("li",[s._v("选择最适合的子语言：Cpp程序员应该了解这些子语言，并选择最适合解决特定问题的子语言。例如，"),t("strong",[s._v("如果要处理大量的数值计算，可以选择使用TMP子语言中的模板元编程技术，来提高程序的性能")]),s._v("；"),t("strong",[s._v("如果要实现一些复杂的数据结构和算法，可以使用STL等库来简化代码")]),s._v("。")])]),s._v(" "),t("p",[s._v("总的来说，可以将Cpp视为一个由4个次语言组成的联邦而非单一语言：")]),s._v(" "),t("ol",[t("li",[s._v("C，说到底Cpp仍是以C为基础。")]),s._v(" "),t("li",[s._v("object-oriented Cpp，包括封装、继承、多态等面向对象设计。")]),s._v(" "),t("li",[s._v("template Cpp，泛型编程，衍生出模板元编程（在各个新标准中逐步完善）。")]),s._v(" "),t("li",[s._v("STL，包括容器、迭代器、算法与函数对象。")])]),s._v(" "),t("h1",{attrs:{id:"条款2-尽量以const、enum、inline替换-define"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款2-尽量以const、enum、inline替换-define"}},[s._v("#")]),s._v(" 条款2：尽量以const、enum、inline替换#define")]),s._v(" "),t("p",[s._v("条款2中提到了尽量使用"),t("code",[s._v("const")]),s._v("、"),t("code",[s._v("enum")]),s._v("和"),t("code",[s._v("inline")]),s._v("来替代"),t("code",[s._v("#define")]),s._v("的概念。具体来说，"),t("code",[s._v("#define")]),s._v("是一种预处理指令，可以将一个标识符定义为一个值或一个字符串。而"),t("code",[s._v("const")]),s._v("、"),t("code",[s._v("enum")]),s._v("和"),t("code",[s._v("inline")]),s._v("都是Cpp语言中的关键字，也可以用于定义常量和函数。以下是对这个条款的一些解释：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("#define")]),s._v("的缺点：使用"),t("code",[s._v("#define")]),s._v("定义常量存在一些缺点，"),t("strong",[s._v("例如它不会进行类型检查，容易引起意外的副作用，也不会被语法检查工具正确地处理")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("const")]),s._v("的优点：使用"),t("code",[s._v("const")]),s._v("定义常量可以避免"),t("code",[s._v("#define")]),s._v("的缺点。"),t("code",[s._v("const")]),s._v("定义的常量有类型，可以被编译器检查和优化，也可以被调试器和其他工具正确地处理。")]),s._v(" "),t("li",[t("code",[s._v("enum")]),s._v("的优点：如果要定义一系列相关的常量，可以使用"),t("code",[s._v("enum")]),s._v("枚举类型。"),t("code",[s._v("enum")]),s._v("定义的常量有类型，可以被编译器检查和优化，同时也可以提高代码的可读性和可维护性。")]),s._v(" "),t("li",[t("code",[s._v("inline")]),s._v("的优点：如果要定义一个简单的函数或者函数模板，可以使用"),t("code",[s._v("inline")]),s._v("关键字。"),t("code",[s._v("inline")]),s._v("函数在编译时会被展开，从而避免了函数调用的开销。同时，"),t("code",[s._v("inline")]),s._v("函数也可以提高代码的可读性和可维护性。")])]),s._v(" "),t("p",[s._v("#define可以用来定义一些变量、函数，但它只是一方面单纯的文本替换，并且没有任何类型检查，导致容易引起莫名其妙的问题，另一方面预处理后已经消失，编译链接过程中没有其符号信息，出问题时无法定位到它。")]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("CALL_WITH_MAX")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CALL_WITH_MAX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CALL_WITH_MAX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("即使上文的宏已经仔细地为所有参数添加小括号，仍然出现了问题：第一次调用中a被累加两次，第二次调用中a被累加一次。")]),s._v(" "),t("blockquote",[t("p",[t("strong",[t("code",[s._v("CALL_WITH_MAX(++a,b)")]),s._v("在展开后变成了"),t("code",[s._v("f((++a)>(b)?(++a):(b))")]),s._v("，其中"),t("code",[s._v("a")]),s._v("的值被多次递增。")])]),s._v(" "),t("p",[t("strong",[s._v("而"),t("code",[s._v("CALL_WITH_MAX(++a,b+10)")]),s._v("在展开后变成了"),t("code",[s._v("f((++a)>(b+10)?(++a):(b+10))")]),s._v("，其中"),t("code",[s._v("a")]),s._v("的值也被多次递增。")])]),s._v(" "),t("p",[s._v("因此，这两个调用会导致"),t("code",[s._v("a")]),s._v("的值被递增多次，结果可能不是我们所期望的。")]),s._v(" "),t("p",[t("strong",[s._v("为了避免这个问题，更加可预测并且类型安全的写法是，可以使用函数模板来替代"),t("code",[s._v("#define")]),s._v("宏。使用const对象（对于一系列常量，使用枚举或枚举类，而不是一系列#define）")])]),s._v(" "),t("p",[s._v("例如，可以定义一个"),t("code",[s._v("template<typename T> inline void callWithMax(const T& a, const T& b)")]),s._v("函数来替代"),t("code",[s._v("CALL_WITH_MAX")]),s._v("宏。")]),s._v(" "),t("p",[s._v("这样做不仅可以避免上述问题，还可以提高代码的可读性和可维护性。例如：")]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typename")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inline")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("callWithMax")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("callWithMax")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("callWithMax")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这段代码中，a的值只会被递增一次，符合我们的预期。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不过inline目前主要指多重定义而非内联")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])]),s._v(" "),t("h1",{attrs:{id:"条款3-尽可能使用const"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款3-尽可能使用const"}},[s._v("#")]),s._v(" 条款3：尽可能使用const")]),s._v(" "),t("p",[s._v("条款3中提到了尽可能使用"),t("code",[s._v("const")]),s._v("的概念。具体来说，"),t("code",[s._v("const")]),s._v("是Cpp语言中的关键字，用于定义常量。以下是对这个条款的一些解释：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("const")]),s._v("的作用：使用"),t("code",[s._v("const")]),s._v("可以将变量定义为常量，即不能被修改。常量可以提高代码的可读性和可维护性，同时也可以避免意外的修改导致的错误。")]),s._v(" "),t("li",[t("code",[s._v("const")]),s._v("的使用场景：在Cpp中，"),t("code",[s._v("const")]),s._v("可以用于定义常量、函数参数和函数返回值等。使用"),t("code",[s._v("const")]),s._v("定义常量时，可以使用"),t("code",[s._v("const")]),s._v("关键字加上变量的类型，例如"),t("code",[s._v("const int MAX_SIZE = 1024;")]),s._v("。使用"),t("code",[s._v("const")]),s._v("定义函数参数时，可以在参数类型前加上"),t("code",[s._v("const")]),s._v("关键字，例如"),t("code",[s._v("void foo(const std::string& str);")]),s._v("。使用"),t("code",[s._v("const")]),s._v("定义函数返回值时，可以在函数声明和定义中返回类型前加上"),t("code",[s._v("const")]),s._v("关键字，例如"),t("code",[s._v("const std::string& foo() const;")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("const")]),s._v("的作用域：在Cpp中，"),t("code",[s._v("const")]),s._v("变量和"),t("code",[s._v("const")]),s._v("函数的作用域与普通变量和函数的作用域相同。如果"),t("code",[s._v("const")]),s._v("变量或"),t("code",[s._v("const")]),s._v("函数在某个作用域内定义，那么它们只能在该作用域内使用。")]),s._v(" "),t("li",[t("code",[s._v("const")]),s._v("和指针：使用指针时，"),t("code",[s._v("const")]),s._v("可以用于限定指针本身或指针所指向的内容是否可修改。例如，"),t("code",[s._v("const int* p")]),s._v("表示指向"),t("code",[s._v("const int")]),s._v("类型的指针，即指针所指向的内容不能被修改；"),t("code",[s._v("int* const p")]),s._v("表示指向"),t("code",[s._v("int")]),s._v("类型的"),t("code",[s._v("const")]),s._v("指针，即指针本身不能被修改。另外，"),t("code",[s._v("const")]),s._v("还可以同时限定指针本身和指针所指向的内容是否可修改，例如"),t("code",[s._v("const int* const p")]),s._v("表示指向"),t("code",[s._v("const int")]),s._v("类型的"),t("code",[s._v("const")]),s._v("指针。")])]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" greeting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" p1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" greeting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" p2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" greeting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//被指物不可修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" p3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" greeting        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//指针不可修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" p4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" greeting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//皆不可修改")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("真正威力强大的用法是面对函数声明时，const可以和函数返回值、各参数、成员函数自身产生关联。例如令函数返回const，往往可以降低因用户错误而造成的意外，又不至于放弃安全性和高效性。")]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rational")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Rational "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Rational"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" lhs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Rational"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" rhs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//上述写法可以避免用户写出 a*b = c")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("对于成员函数自身的const，编译器强制实施bitwise const，即强制不能修改任何成员变量。**这意味着，在const成员函数中，即使我们使用了mutable关键字，也不能修改任何非mutable成员变量。**但实际上很多情况下我们需要的是logical const，"),t("strong",[s._v("即const成员函数也应该可以修改某些客户不可见的数据，这时可以用mutable成员变量来绕过const成员函数的限制。")])]),s._v(" "),t("p",[s._v("例如对于一个文本块的对象而言，其内部很可能存在高速缓存；对于查询文本块长度这样的const操作，仍然需要更新高速缓存：")]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextBlock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("size_t "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("pText"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mutable")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("size_t text_length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mutable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" length_is_valid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nstd"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("size_t "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextBlock")]),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("length_is_valid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    text_length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("strlen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pText"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    length_is_valid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" text_length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("这是一个名为"),t("code",[s._v("TextBlock")]),s._v("的类，其中包含一个私有成员变量"),t("code",[s._v("char *pText")]),s._v("，表示一个C风格的字符串。该类还包含了两个"),t("code",[s._v("mutable")]),s._v("类型的私有成员变量"),t("code",[s._v("std::size_t text_length")]),s._v("和"),t("code",[s._v("bool length_is_valid")]),s._v("，用于缓存字符串长度和标记长度是否已经被计算。该类还定义了一个公有成员函数"),t("code",[s._v("std::size_t length() const")]),s._v("，用于获取字符串的长度。下面是对该类的解释：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("TextBlock")]),s._v("类中的"),t("code",[s._v("char *pText")]),s._v("表示一个C风格的字符串，但是没有提供构造函数或析构函数来管理字符串的内存，这样会存在内存泄漏的风险，需要在类中添加构造函数和析构函数来管理字符串的内存。")]),s._v(" "),t("li",[s._v("**"),t("code",[s._v("TextBlock")]),s._v("类中的"),t("code",[s._v("text_length")]),s._v("和"),t("code",[s._v("length_is_valid")]),s._v("成员变量被声明为"),t("code",[s._v("mutable")]),s._v("类型，表示即使在"),t("code",[s._v("const")]),s._v("函数中也可以被修改。**这是==因为"),t("code",[s._v("length()")]),s._v("函数需要计算字符串的长度，如果多次调用该函数，每次都重新计算字符串长度会浪费时间，因此使用"),t("code",[s._v("mutable")]),s._v("类型的成员变量缓存计算结果，避免重复计算。==")]),s._v(" "),t("li",[t("code",[s._v("TextBlock")]),s._v("类中的"),t("code",[s._v("length()")]),s._v("函数是一个"),t("code",[s._v("const")]),s._v("函数，表示该函数不会修改类的成员变量，因此可以在"),t("code",[s._v("const")]),s._v("对象中调用。在函数中使用"),t("code",[s._v("!length_is_valid")]),s._v("判断是否需要重新计算字符串长度，如果需要计算，则调用"),t("code",[s._v("std::strlen(pText)")]),s._v("计算字符串长度，再将计算结果缓存到"),t("code",[s._v("text_length")]),s._v("中，并将"),t("code",[s._v("length_is_valid")]),s._v("标记为"),t("code",[s._v("true")]),s._v("。最后，返回缓存的字符串长度。")]),s._v(" "),t("li",[s._v("由于"),t("code",[s._v("TextBlock")]),s._v("类中的"),t("code",[s._v("pText")]),s._v("变量是一个C风格的字符串，并且没有提供构造函数和析构函数来管理内存，因此在使用该类时需要特别注意内存泄漏的问题。可以通过使用"),t("code",[s._v("std::string")]),s._v("等Cpp标准库提供的字符串类型来避免这个问题。")])]),s._v(" "),t("p",[s._v("Cpp中两个函数如果只是常量性不同，也可以重载。当const成员函数与非const成员函数有着实质等价的实现时，为了避免冗余，可以令non-const版本调用const版本：")]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextBlock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("size_t position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("size_t position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token generic-function"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("const_cast")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token generic-function"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("static_cast")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" TextBlock"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//后者首先将自身转换为const对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//随后调用const成员函数，返回const引用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//最后转换为non-const引用")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("这是一个名为"),t("code",[s._v("TextBlock")]),s._v("的类，其中定义了两个下标运算符"),t("code",[s._v("operator[]")]),s._v("，用于访问类中的字符数据。第一个下标运算符是一个"),t("code",[s._v("const")]),s._v("成员函数，返回一个"),t("code",[s._v("const char&")]),s._v("类型的引用，表示在指定位置的字符数据。第二个下标运算符是一个非"),t("code",[s._v("const")]),s._v("成员函数，返回一个"),t("code",[s._v("char&")]),s._v("类型的引用，表示在指定位置的字符数据。下面是对该代码的解释：")]),s._v(" "),t("ol",[t("li",[s._v("第一个下标运算符是一个"),t("code",[s._v("const")]),s._v("成员函数，表示该函数不会修改类的成员变量。在函数中，使用"),t("code",[s._v("const")]),s._v("关键字修饰函数的返回值，表示返回的是一个常量引用。该函数返回指定位置的字符数据，并且由于返回的是一个常量引用，因此客户端无法通过该函数修改类的成员变量。")]),s._v(" "),t("li",[s._v("第二个下标运算符是一个非"),t("code",[s._v("const")]),s._v("成员函数，表示该函数可以修改类的成员变量。在函数中，我们使用了"),t("code",[s._v("const_cast")]),s._v("和"),t("code",[s._v("static_cast")]),s._v("两个操作符，将该函数转换成了一个"),t("code",[s._v("const")]),s._v("成员函数的调用。"),t("strong",[s._v("具体来说，我们首先使用"),t("code",[s._v("static_cast<const TextBlock&>(*this)")]),s._v("将当前对象转换成一个"),t("code",[s._v("const TextBlock&")]),s._v("类型的对象，然后调用第一个下标运算符，返回在指定位置的字符数据的常量引用。接着，我们使用"),t("code",[s._v("const_cast<char&>")]),s._v("将常量引用转换为一个非常量引用，从而使得客户端可以通过该函数修改类的成员变量。")]),s._v("==需要注意的是，这种使用const_cast的方式是有风险的，因为它可以绕过函数的const限制，可能导致程序的未定义行为和内存安全问题。==")]),s._v(" "),t("li",[s._v("如果我们希望在第二个下标运算符中修改一些客户端不可见的数据，可以使用mutable关键字修饰一个成员变量，避免使用const_cast绕过const限制。")])]),s._v(" "),t("h1",{attrs:{id:"条款4-确定对象被使用前已先被初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条款4-确定对象被使用前已先被初始化"}},[s._v("#")]),s._v(" 条款4：确定对象被使用前已先被初始化")]),s._v(" "),t("p",[s._v("条款4的意思是，在使用一个对象之前，必须确保该对象已经被正确地初始化。如果一个对象没有被正确地初始化，那么它的行为是未定义的，可能会导致程序崩溃、数据损坏等不可预测的结果。 "),t("strong",[s._v("在Cpp中，对象的初始化方式有多种，包括默认初始化、值初始化、直接初始化、拷贝初始化等")]),s._v("。不同的初始化方式会对对象的状态产生不同的影响。为了保证对象被正确地初始化，我们应该遵循以下几个原则：")]),s._v(" "),t("ol",[t("li",[s._v("**明确对象的初始化方式。**在定义对象时，应该清楚地指定对象的初始化方式，避免使用未初始化的对象。")]),s._v(" "),t("li",[s._v("**尽可能使用构造函数进行初始化。**构造函数是一种专门用于初始化对象的函数，可以保证对象的状态正确。因此，在定义对象时，应该尽可能使用构造函数进行初始化。")]),s._v(" "),t("li",[s._v("**避免使用未定义的对象。**在使用对象之前，应该确保对象已经被正确地初始化。如果不确定对象是否已经被初始化，就应该避免使用该对象。")]),s._v(" "),t("li",[s._v("**避免使用未定义的成员变量。**在定义类时，应该确保类的成员变量都被正确地初始化。如果一个成员变量没有被正确地初始化，那么该成员变量的行为也是未定义的，可能会导致程序崩溃、数据损坏等不可预测的结果。")])]),s._v(" "),t("p",[s._v("Cpp中变量并非一定会进行初始化。最佳处理办法是：对于内置类型必须手动初始化，而对于用户定义的对象，在使用对象前将其初始化（责任落在构造函数上）。")]),s._v(" "),t("p",[s._v("构造函数包含成员初值列与函数体。")]),s._v(" "),t("ol",[t("li",[s._v("最好使用成员初始列的初始化而非函数体内的赋值，否则对象会在成员初始列的步骤中进行默认初始化，再在赋值的过程中进行拷贝，成本增高。")]),s._v(" "),t("li",[s._v("成员初始列的排列顺序应与在类中的声明次序一致，因为成员初始化顺序只与后者有关，前者若与后者不一致的话可能导致误解。")])]),s._v(" "),t("p",[s._v("只剩最后一个难点：函数内的静态变量称为local静态变量，其他的都是non-local；而不同编译单元（一个编译单元指产出单一目标文件的源码们）内定义的non-local静态对象的初始化顺序并未规定。倘若存在这样的两个变量a和b，且b的初始化需要使用a，如果a尚未初始化就被b使用了，显然程序会出错。")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("local静态变量指的是函数内定义的静态变量，只在函数的作用域内可见；")])]),s._v(" "),t("p",[t("strong",[s._v("而non-local静态变量指的是在全局作用域或命名空间内定义的静态变量，可以被多个函数使用。")])]),s._v(" "),t("p",[s._v("在Cpp中，对于non-local静态变量的初始化顺序并没有严格的规定。这意味着，如果存在两个non-local静态变量a和b，且b的初始化需要使用a，那么如果a尚未初始化就被b使用了，就会导致程序出错。"),t("strong",[s._v("这是因为，如果a尚未初始化，那么它的值是不确定的，可能是一个随机值，也可能是0或其他默认值。如果b在使用a之前被初始化，那么它使用的a的值是不确定的，这可能会导致程序出错。")])]),s._v(" "),t("p",[s._v("为了避免这种问题，我们可以采用一些编程技巧和约定来确保non-local静态变量的正确初始化顺序。"),t("strong",[s._v("例如，可以使用单例模式等设计模式")]),s._v("来确保对象的初始化顺序；或者可以将non-local静态变量的初始化工作放在函数内部，以确保它们在第一次使用之前被正确地初始化。此外，我们还可以使用编译器提供的一些选项来控制non-local静态变量的初始化顺序，但这种方法并不是跨平台的，可能会导致代码的可移植性问题。")])]),s._v(" "),t("p",[s._v("解决方法也很简单：将每个non-local静态变量移到自己的专属函数内，这些函数返回该静态变量的引用，用户使用这些函数而非直接使用变量（类似单例模式）。至此，non-local静态变量被local静态变量取代。")]),s._v(" "),t("div",{staticClass:"language-Cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FileSystem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nFileSystem"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tfs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" FileSystem fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Directory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Directory")]),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Directory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n   std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("size_t disks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tfs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("num_disks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("这段代码定义了一个名为"),t("code",[s._v("FileSystem")]),s._v("的类和一个名为"),t("code",[s._v("tfs()")]),s._v("的函数，以及另一个名为"),t("code",[s._v("Directory")]),s._v("的类和它的一个构造函数。")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("tfs()")]),s._v("函数内部，定义了一个名为"),t("code",[s._v("fs")]),s._v("的静态对象，它是"),t("code",[s._v("FileSystem")]),s._v("类的一个实例，并且返回了这个静态对象的引用。")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("Directory")]),s._v("类的构造函数内部，首先执行了一些初始化工作，然后通过调用"),t("code",[s._v("tfs()")]),s._v("函数获取到了"),t("code",[s._v("FileSystem")]),s._v("对象的引用，并通过该引用调用了"),t("code",[s._v("num_disks()")]),s._v("函数，将返回值存储在了一个名为"),t("code",[s._v("disks")]),s._v("的变量中。")]),s._v(" "),t("p",[s._v("由于"),t("code",[s._v("tfs()")]),s._v("函数内部定义的"),t("code",[s._v("fs")]),s._v("对象是一个静态对象，因此它在程序运行期间只会被创建一次，并且在整个程序的生命周期内都存在。")]),s._v(" "),t("p",[s._v("每次调用"),t("code",[s._v("tfs()")]),s._v("函数时，都会返回同一个静态对象的引用。这种方式可以保证"),t("code",[s._v("FileSystem")]),s._v("类的实例只有一个，并且可以在全局范围内被访问。")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("Directory")]),s._v("类的构造函数内部，通过调用"),t("code",[s._v("tfs()")]),s._v("函数获取到了"),t("code",[s._v("FileSystem")]),s._v("对象的引用，并且调用了它的"),t("code",[s._v("num_disks()")]),s._v("函数，这种方式可以确保"),t("code",[s._v("Directory")]),s._v("类的实例可以访问到全局唯一的"),t("code",[s._v("FileSystem")]),s._v("对象，并且可以获取到该对象的属性和方法。")]),s._v(" "),t("p",[s._v("总之，这段代码通过使用静态变量和函数，实现了一个全局唯一的"),t("code",[s._v("FileSystem")]),s._v("对象，并且可以在其他类的构造函数中使用该对象，从而避免了对象的多次创建和初始化，提高了程序的效率和可读性。同时，该代码还展示了Cpp中静态变量和静态函数的用法，可以作为学习Cpp语言的参考。")])])}),[],!1,null,null,null);t.default=e.exports}}]);