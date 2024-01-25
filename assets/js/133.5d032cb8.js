(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{466:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"虎牙c-技术面经"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虎牙c-技术面经"}},[s._v("#")]),s._v(" 虎牙C++技术面经")]),s._v(" "),t("h1",{attrs:{id:"_1、虚函数底层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、虚函数底层"}},[s._v("#")]),s._v(" 1、虚函数底层")]),s._v(" "),t("p",[s._v("在C++中，虚函数的实现涉及到虚函数表（Virtual Table）的概念。每个含有虚函数的类都会有一个对应的虚函数表，其中存储着指向各个虚函数的地址。当一个对象被创建时，编译器会将该对象的虚函数表地址保存在对象的内存布局中。")]),s._v(" "),t("p",[s._v("通过使用指针或引用来访问对象时，可以根据对象所属类型找到相应的虚函数表，并通过虚函数表中存储的地址调用正确的虚函数。")]),s._v(" "),t("p",[s._v("具体来说，在底层实现上，编译器通常为每个类生成一个隐藏的成员变量——指向虚函数表的指针（即vptr）。当调用一个基类指针或引用上的虚成员函数时，实际执行过程是首先根据 vptr 找到相应的虚函数表，然后通过偏移量找到正确位置上存储着目标成员函数地址，并进行调用。")]),s._v(" "),t("p",[s._v("这种方式使得在派生类中重写（override）基类中定义的虚函数成为可能，派生类可以通过修改自己对应的虚函数表中相应项来改变默认行为。这也是 C++ 多态性（polymorphism）特性实现之一。")]),s._v(" "),t("p",[t("strong",[s._v("细节补充：")])]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("虚函数表的位置：")]),s._v(" 虚函数表通常位于类的静态存储区域。每个类的实例都包含一个指向其虚函数表的指针。")]),s._v(" "),t("li",[t("strong",[s._v("纯虚函数：")]),s._v(" 如果一个类包含至少一个纯虚函数（即带有 "),t("code",[s._v("= 0")]),s._v(" 的虚函数），那么该类将变为抽象类，无法被实例化。抽象类的虚函数表中包含指向纯虚函数的指针。")]),s._v(" "),t("li",[t("strong",[s._v("虚析构函数：")]),s._v(" 如果基类的析构函数是虚的，那么它可以确保在通过基类指针删除指向派生类对象的时候调用正确的析构函数。")]),s._v(" "),t("li",[t("strong",[s._v("多重继承：")]),s._v(" 对于多继承，每个基类都有自己的虚函数表，派生类会包含指向这些表的指针。在多重继承的情况下，可能会有虚拟继承的概念，以避免产生二义性。")]),s._v(" "),t("li",[t("strong",[s._v("vptr 和 vtable 的命名：")]),s._v("  虚指针（vptr）和虚函数表（vtable）的具体命名可能会有所不同，取决于编译器和平台。")]),s._v(" "),t("li",[t("strong",[s._v("动态类型识别：")]),s._v(" 运行时类型信息（RTTI）也与虚函数密切相关，可以通过 "),t("code",[s._v("typeid")]),s._v(" 运算符来获得对象的实际类型。")])]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<typeinfo>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Base")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("virtual")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Base::foo()"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("virtual")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Base")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 虚析构函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Derived")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token base-clause"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Base")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("override")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Derived::foo()"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Base"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" basePtr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" Derived"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行时类型识别")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("basePtr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Derived"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"basePtr指向Derived类对象"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除对象时会调用正确的析构函数")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" basePtr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h1",{attrs:{id:"_2、vector-动态扩容底层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、vector-动态扩容底层"}},[s._v("#")]),s._v(" 2、Vector 动态扩容底层")]),s._v(" "),t("p",[s._v("在 C++ 中，std::vector 是一个动态数组容器，它会根据需要自动扩展内部的存储空间。当元素数量超过当前容量时，vector 会重新分配一块更大的内存，并将现有元素拷贝到新的内存区域中。")]),s._v(" "),t("p",[s._v("具体实现上，vector 通常使用动态分配的连续内存来存储元素。它在底层使用了指针和动态内存分配函数（如malloc()或new[]）来管理内存。")]),s._v(" "),t("p",[s._v("当需要扩展容量时，vector 会创建一个更大的缓冲区，并将原有数据拷贝到新缓冲区中。然后释放旧缓冲区所占用的内存空间。")]),s._v(" "),t("p",[s._v("这种动态扩容的机制使得 vector 可以高效地处理不确定大小的数据集合，并且支持随机访问、快速插入和删除操作。")]),s._v(" "),t("p",[t("strong",[s._v("细节补充：")])]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("内存分配策略：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("预留容量：")]),s._v(" vector 通常会预留一些额外的容量，以避免每次插入操作都触发动态扩容。这个额外的容量可以通过 "),t("code",[s._v("capacity()")]),s._v(" 函数查询。预留容量的目的是减少频繁扩容的次数，提高性能。")])])]),s._v(" "),t("li",[t("strong",[s._v("扩容策略：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("翻倍扩容：")]),s._v(" 为了均摊插入操作的代价，vector 通常采用翻倍扩容的策略。也就是说，当容量不足时，它会创建一个原容量两倍大小的新缓冲区，并将元素从旧缓冲区拷贝到新缓冲区，然后释放旧缓冲区。这个策略确保了插入操作的平摊复杂度是 O(1)。")]),s._v(" "),t("li",[t("strong",[s._v("增量步长：")]),s._v(" 有些实现可能选择采用增加一个固定步长的方式进行扩容，而不是翻倍。这可以减小内存的浪费，但可能会导致插入操作的均摊代价略高。")])])]),s._v(" "),t("li",[t("strong",[s._v("移动语义：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("C++11 引入的优化：")]),s._v(" C++11 引入了移动语义，使得在动态扩容时可以对元素进行移动而非拷贝。这在对象较大且开销较高的情况下可以提高性能。")])])]),s._v(" "),t("li",[t("strong",[s._v("内存碎片：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("碎片问题：")]),s._v(" 尽管 vector 的动态扩容机制带来了灵活性，但在频繁插入和删除操作时可能导致内存碎片。这可能影响内存的利用率，特别是对于大量小对象的情况。")])])]),s._v(" "),t("li",[t("strong",[s._v("swap 惯用法：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("释放不需要的内存：")]),s._v(" 在预知要插入大量元素之前，可以使用 "),t("code",[s._v("vector<T>().swap(v)")]),s._v(" 的惯用法来释放不需要的内存。这个操作会构造一个临时 vector 并与原 vector 进行交换，最终原 vector 会获得一个较小的容量。这在需要最小化内存占用的情况下是一种常见的做法。")])])])]),s._v(" "),t("h1",{attrs:{id:"_3、两个-vector-一个放普通数据类型一个放指针-扩容有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、两个-vector-一个放普通数据类型一个放指针-扩容有什么区别"}},[s._v("#")]),s._v(" 3、两个 vector 一个放普通数据类型一个放指针，扩容有什么区别")]),s._v(" "),t("p",[s._v("当一个 vector 存放普通数据类型（如int、float等）而另一个 vector 存放指针时，在扩容过程中会有一些区别。")]),s._v(" "),t("p",[s._v("对于存放普通数据类型的 vector，扩容时会重新分配更大的连续内存空间，并将原有数据拷贝到新的内存区域中。这是因为普通数据类型是值语义，直接复制即可。")]),s._v(" "),t("p",[s._v("而对于存放指针的 vector，扩容时仅会复制指针本身，并不会复制指针所指向的对象。这是因为指针只是保存了对象地址，而不拥有对象本身。因此，在扩容过程中，原有指针的值被简单地复制到新内存区域中，而并没有复制指针所指向的实际对象。")]),s._v(" "),t("p",[s._v("需要注意的是，在存在多个 vector 同时持有同一个对象或者多个对象之间存在依赖关系（比如共享同一块动态分配内存）时，对其中一个 vector 进行扩容可能导致其他 vector 中的指针失效或引起潜在错误。在这种情况下，需要谨慎处理和管理指针以避免问题发生。")]),s._v(" "),t("p",[t("strong",[s._v("细节补充：")])]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("指针不负责内存管理：")]),s._v(" 存放指针的 vector 本身并不负责指针所指向的内存的生命周期管理。这意味着在扩容的过程中，指针的值会被简单地复制，但指针所指向的实际对象并不会被复制。如果指针所指向的内存是动态分配的，需要确保在不再需要的时候正确释放内存，以防止内存泄漏。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("潜在的野指针问题：")]),s._v(" 如果在扩容后没有正确处理指针的所有权和生命周期，可能会导致悬空指针或野指针的问题。当一个 vector 扩容时，其元素的指针值被复制到新的内存区域，而老的内存区域被释放。如果其他地方还在使用老的内存区域，就会出现悬空指针问题。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("共享同一块内存：")]),s._v(" 如果多个 vector 共享同一块内存，那么在扩容时需要确保所有相关的 vector 都被正确处理。否则，一个 vector 的扩容可能会导致其他 vector 中的指针失效或指向无效内存。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("深拷贝和浅拷贝：")]),s._v(" 如果指针所指向的对象需要深度拷贝，那么在扩容时需要自行实现深拷贝操作。否则，多个 vector 可能会指向相同的对象，从而导致对一个对象的修改影响其他对象。")])])]),s._v(" "),t("p",[s._v("总体而言，在存放指针的 vector 中进行扩容需要特别小心，确保正确地管理指针和与指针相关的内存。使用智能指针（如"),t("code",[s._v("std::shared_ptr")]),s._v("或"),t("code",[s._v("std::unique_ptr")]),s._v("）可以帮助减少一些潜在的问题，因为它们具有自动内存管理的特性。")]),s._v(" "),t("h1",{attrs:{id:"_4、进程通信-共享内存如何实现进程安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、进程通信-共享内存如何实现进程安全"}},[s._v("#")]),s._v(" 4、进程通信，共享内存如何实现进程安全")]),s._v(" "),t("p",[s._v("在使用共享内存进行进程间通信时，确保进程安全是非常重要的。以下是一些常见的方法来实现进程安全：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("互斥锁（Mutex）：")]),s._v(" 使用互斥锁可以确保同一时间只有一个进程可以访问共享内存区域。在读写共享内存之前，进程需要先获得互斥锁，完成操作后释放锁。这样可以防止多个进程同时修改数据导致冲突。")]),s._v(" "),t("li",[t("strong",[s._v("信号量（Semaphore）：")]),s._v(" 通过信号量来控制对共享内存的访问。使用计数型的信号量可以限制对资源的并发访问数量。当一个进程需要访问共享内存时，它必须首先检查信号量计数值，如果大于0，则允许访问，并将计数减1；如果为0，则表示当前没有可用资源，进程需要等待其他进程释放资源。")]),s._v(" "),t("li",[t("strong",[s._v("文件锁（File Locking）：")]),s._v(" 利用操作系统提供的文件锁机制，在访问共享内存之前获取一个特定文件上的独占锁或共享锁。只有获得了文件锁的进程才能执行相应操作，其他进程则需要等待。")]),s._v(" "),t("li",[t("strong",[s._v("读写锁（Read-Write Lock）：")]),s._v(" 当多个进程需要同时读取共享内存而不涉及修改时，可以使用读写锁进行优化。读写锁允许多个进程同时读取，但只有一个进程能够进行写操作。这样可以提高读操作的并发性能。")]),s._v(" "),t("li",[t("strong",[s._v("原子操作（Atomic Operation）：")]),s._v(" 某些特定情况下，共享内存中的数据可以通过原子操作进行修改。原子操作是不可被中断的单个指令，保证了在多线程或多进程环境中的一致性和完整性。")]),s._v(" "),t("li",[t("strong",[s._v("适当的数据结构设计：")]),s._v(" 在共享内存中使用适当的数据结构设计可以降低竞态条件的发生。例如，使用原子操作的计数器而不是共享的计数器，可以减少竞态条件的可能性。")]),s._v(" "),t("li",[t("strong",[s._v("事务性操作：")]),s._v(" 将对共享内存的一系列操作组织成事务，要么全部成功执行，要么全部回滚。这通常需要使用类似数据库事务的机制，确保在一系列操作中任何一步出错都能够回滚到一致的状态")]),s._v(" "),t("li",[t("strong",[s._v("同步工具：")]),s._v(" 利用同步工具如条件变量，确保一个进程在进入关键代码段之前等待某个条件的发生，从而避免竞态条件。")]),s._v(" "),t("li",[t("strong",[s._v("锁层次：")]),s._v(" 如果多个共享资源需要访问，考虑使用锁层次结构，按照顺序获取锁，释放锁的顺序相反。这样可以降低死锁的概率。")]),s._v(" "),t("li",[t("strong",[s._v("仔细的错误处理：")]),s._v(" 需要在共享内存的读写过程中处理可能发生的错误，以防止错误的状态导致不一致性。")]),s._v(" "),t("li",[t("strong",[s._v("写时复制（Copy-on-Write）：")]),s._v(" 对于大块数据的写操作，可以考虑使用写时复制策略，即在写操作时先复制一份，再修改。这样可以减少写操作的冲突。")])]),s._v(" "),t("h1",{attrs:{id:"_5、malloc和-free如何知道释放内存具体大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、malloc和-free如何知道释放内存具体大小"}},[s._v("#")]),s._v(" 5、malloc和 free如何知道释放内存具体大小")]),s._v(" "),t("p",[s._v("在使用 "),t("code",[s._v("malloc")]),s._v(" 动态分配内存时，系统会在分配的内存块之前记录其大小。这样，当你调用 "),t("code",[s._v("free")]),s._v(" 释放内存时，系统可以根据这个大小信息来确保正确地释放相应的内存。")]),s._v(" "),t("p",[s._v("具体而言，在大部分情况下，"),t("code",[s._v("malloc")]),s._v(" 会在分配的内存块之前留出一定大小的空间用于保存大小信息。这个大小信息通常是以字节为单位，并且依赖于系统和编译器的实现。")]),s._v(" "),t("p",[s._v("对于 "),t("code",[s._v("free")]),s._v(" 函数，它能够根据传入指针所指向的内存地址找到相关的大小信息，并将相应的内存块归还给系统。")]),s._v(" "),t("p",[s._v("需要注意的是，在使用动态分配函数时（如 "),t("code",[s._v("malloc")]),s._v("、"),t("code",[s._v("calloc")]),s._v("、"),t("code",[s._v("realloc")]),s._v("），我们不能修改返回指针所指向的数据区域之前或之后额外添加任何数据。如果这样做可能会导致未定义行为。")]),s._v(" "),t("p",[t("strong",[s._v("细节补充：")])]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("头部信息：")])]),s._v(" "),t("ul",[t("li",[s._v("通常，"),t("code",[s._v("malloc")]),s._v(" 分配的内存块前面会有一个头部信息，用于存储分配的大小。这个头部信息的大小和具体内容取决于系统和编译器的实现。")]),s._v(" "),t("li",[s._v("这个头部信息通常包含了分配的内存块的大小，以字节为单位。"),t("code",[s._v("malloc")]),s._v(" 返回的指针指向的是用户可用的内存块的起始地址，而不是头部信息的地址。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("对齐要求：")])]),s._v(" "),t("ul",[t("li",[s._v("有些系统和编译器对内存的对齐有特殊要求，因此分配的内存块的实际大小可能会比用户请求的大小大一些。这是为了满足平台的对齐需求。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("内部碎片：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("malloc")]),s._v(" 会根据系统的内存分配策略（如首次适应、最佳适应等）分配一块足够大的内存，这可能导致一些内部碎片，即实际分配的内存块大小可能比用户请求的稍大。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("多线程安全：")])]),s._v(" "),t("ul",[t("li",[s._v("在多线程环境下，一些实现可能需要额外的空间来存储线程相关的信息，以确保 "),t("code",[s._v("malloc")]),s._v(" 和 "),t("code",[s._v("free")]),s._v(" 的多线程安全性。")])])])]),s._v(" "),t("h1",{attrs:{id:"_6、线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、线程池"}},[s._v("#")]),s._v(" 6、线程池")]),s._v(" "),t("p",[s._v("线程池是一种用于管理和复用多个线程的机制，它通过维护一定数量的线程，并将任务分配给这些线程来提高应用程序的性能和效率。以下是线程池的基本原理和实现过程：")]),s._v(" "),t("ol",[t("li",[s._v("创建线程池：首先需要创建一个线程池对象，其中包含固定数量的工作线程（也称为工作者线程）。")]),s._v(" "),t("li",[s._v("接收任务：当有新任务需要执行时，可以将任务提交给线程池。任务可以以函数、方法或其他可执行单位的形式表示。")]),s._v(" "),t("li",[s._v("任务队列：线程池维护一个任务队列，用于存储待执行的任务。当有新任务提交时，将其加入到队列中。")]),s._v(" "),t("li",[s._v("工作者线程：在初始化阶段，所有工作者线程都处于空闲状态，等待从任务队列中获取可执行的任务。")]),s._v(" "),t("li",[s._v("任务调度：当有空闲的工作者线程时，它会从任务队列中取出一个待执行的任务，并开始执行该任务。")]),s._v(" "),t("li",[s._v("处理结果：在任务完成后，可以选择返回结果或通知相关方。")]),s._v(" "),t("li",[s._v("线程复用：一旦某个工作者线程完成了当前分配的任务，它会再次进入空闲状态并准备接受下一个任务。这样就避免了频繁创建和销毁线程带来的开销。")]),s._v(" "),t("li",[s._v("线程池管理：线程池还可以提供一些管理功能，例如动态调整线程数量、设置最大线程数、超时处理等。")])]),s._v(" "),t("p",[s._v("使用线程池的好处是避免了反复创建和销毁线程的开销，提高了任务执行的效率。此外，它还能够限制并发线程数量，避免资源过度占用，并提供更好的任务调度和管理机制。")]),s._v(" "),t("h1",{attrs:{id:"_7、基类析构函数为什么是虚函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、基类析构函数为什么是虚函数"}},[s._v("#")]),s._v(" 7、基类析构函数为什么是虚函数")]),s._v(" "),t("p",[s._v("基类析构函数为虚函数的主要目的是实现多态性的正确销毁。")]),s._v(" "),t("p",[s._v("当基类指针指向派生类对象时，如果基类析构函数不是虚函数，则在使用 delete 操作符释放这个对象时，只会调用基类的析构函数而不会调用派生类的析构函数。这就导致派生类中可能存在资源没有正确释放，造成内存泄漏或其他问题。")]),s._v(" "),t("p",[s._v("通过将基类析构函数声明为虚函数，在使用 delete 操作符释放一个指向派生类对象的基类指针时，会先调用派生类的析构函数，再调用基类的析构函数。这样可以确保每个继承层次上的析构过程都得到正确执行，从而避免了潜在的资源泄漏和错误。")]),s._v(" "),t("h1",{attrs:{id:"_8、堆区和栈区的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、堆区和栈区的区别"}},[s._v("#")]),s._v(" 8、堆区和栈区的区别")]),s._v(" "),t("p",[s._v("堆区和栈区是计算机内存中两个不同的存储区域，主要用于管理变量和对象的内存分配。")]),s._v(" "),t("p",[t("strong",[s._v("栈区（Stack）：")])]),s._v(" "),t("ul",[t("li",[s._v("栈区是由编译器自动管理的，具有自动分配和释放内存的特性。")]),s._v(" "),t("li",[s._v("存放函数调用时的局部变量、函数参数等。")]),s._v(" "),t("li",[s._v("栈内存由系统自动分配和回收，速度较快。")]),s._v(" "),t("li",[s._v("存储空间有限，一般较小。")])]),s._v(" "),t("p",[t("strong",[s._v("堆区（Heap）：")])]),s._v(" "),t("ul",[t("li",[s._v("堆区是由程序员手动管理的，需要显式地申请和释放内存。")]),s._v(" "),t("li",[s._v("用于存储程序运行时动态分配的对象或大块数据。")]),s._v(" "),t("li",[s._v("堆内存分配通过 malloc、new 等操作实现，释放通过 free、delete 等操作实现。")]),s._v(" "),t("li",[s._v("堆内存空间较大，可以灵活地进行动态分配。")])]),s._v(" "),t("p",[t("strong",[s._v("细节补充：")])]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("生命周期：")])]),s._v(" "),t("ul",[t("li",[s._v("栈区中的变量生命周期由其作用域决定，函数执行结束时，栈上的局部变量会自动被销毁。")]),s._v(" "),t("li",[s._v("堆区中的对象生命周期由程序员控制，需要手动分配和释放，没有明确的作用域概念，需要注意防止内存泄漏。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("大小限制：")])]),s._v(" "),t("ul",[t("li",[s._v("栈区的大小是有限的，通常较小。栈空间是有限的，通常几 MB 到几十 MB ，具体取决于系统和编译器。")]),s._v(" "),t("li",[s._v("堆区的大小较大，理论上受制于计算机的虚拟内存限制，可以动态地分配和释放较大的内存块。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("碎片问题：")])]),s._v(" "),t("ul",[t("li",[s._v("栈区由于是连续分配的，可能会发生碎片问题，即频繁的压栈和出栈可能导致栈内存出现零散的空间，不能被充分利用。")]),s._v(" "),t("li",[s._v("堆区由于是动态分配的，可能会有内存碎片问题，但通过各种内存管理策略（如内存池）可以缓解这一问题。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("访问速度：")])]),s._v(" "),t("ul",[t("li",[s._v("栈区的存取速度较快，因为它是线性的、有序的，变量的创建和销毁只涉及移动栈指针。")]),s._v(" "),t("li",[s._v("堆区的存取速度相对较慢，因为需要动态分配和释放，而且可能存在内存碎片问题。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("使用场景：")])]),s._v(" "),t("ul",[t("li",[s._v("栈区适合存放局部变量、函数调用等，适用于生命周期较短、较小的数据。")]),s._v(" "),t("li",[s._v("堆区适合存放动态分配的大量数据，如动态数组、对象等，适用于需要灵活管理内存的情况。")])])])]),s._v(" "),t("p",[s._v("总体而言，栈和堆的选择取决于数据的生命周期、大小以及对内存管理的要求。")]),s._v(" "),t("h1",{attrs:{id:"_9、宏定义放在哪里"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、宏定义放在哪里"}},[s._v("#")]),s._v(" 9、宏定义放在哪里")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("可读性：")]),s._v(" 将宏定义放在开头可以让其他人更容易理解代码中使用的宏，提高代码的可读性。")]),s._v(" "),t("li",[t("strong",[s._v("作用域：")]),s._v(" 如果宏定义放在源文件或头文件的顶部，则该宏定义对整个源文件或包含了该头文件的所有源文件都可见，确保了正确地应用于需要的范围内。")]),s._v(" "),t("li",[t("strong",[s._v("预处理效率：")]),s._v(" 将宏定义集中放置，预处理器可以更快速地进行替换和展开，提高预处理效率。")])]),s._v(" "),t("p",[s._v("然而，在特定情况下，也可以将宏定义局部化，只在特定作用域内起作用。例如，在某个函数内部使用一个简单的宏定义来提高代码可读性或减少重复输入。")]),s._v(" "),t("p",[t("strong",[s._v("细节补充：")])]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("括号的使用：")]),s._v(" 在宏定义中，对于参数的使用要特别小心，确保用括号括起来，以避免由于运算符优先级导致的问题。例如，"),t("code",[s._v("MAX(a, b)")]),s._v(" 中的括号是必要的，因为在宏中可能包含表达式。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("MAX")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("副作用：")]),s._v(" 宏中的参数可能会被多次求值，因此在传递有副作用的表达式时要小心。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("SQUARE")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SQUARE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此时 a 被修改两次")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("名称空间：")]),s._v(" 宏定义没有名称空间的概念，因此可能会发生命名冲突。为了减少冲突的可能性，可以使用较长或者具有特殊前缀的名字。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("MY_PROJECT_MAX")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("内联函数：")]),s._v(" 在 C++ 中，宏定义可以被内联函数替代，内联函数更安全，而且通常更易读。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 宏定义")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("SQUARE_MACRO")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 内联函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inline")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("square_inline")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("条件编译：")]),s._v(" 宏定义常用于条件编译，但要注意使用 "),t("code",[s._v("#ifdef")]),s._v("、"),t("code",[s._v("#ifndef")]),s._v("、"),t("code",[s._v("#else")]),s._v("、"),t("code",[s._v("#endif")]),s._v(" 来确保只在需要时进行编译。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("DEBUG")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("LOG")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" msg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("else")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("LOG")]),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])]),s._v(" "),t("p",[s._v("宏定义在一些情况下可以提高代码的灵活性和可读性，但过度使用可能会导致代码的可维护性降低。在现代 C++ 中，许多情况下都能使用 "),t("code",[s._v("const")]),s._v("、"),t("code",[s._v("constexpr")]),s._v("、内联函数或模板来替代宏定义。")]),s._v(" "),t("h1",{attrs:{id:"_10、qt-信号链接的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、qt-信号链接的方式"}},[s._v("#")]),s._v(" 10、qt 信号链接的方式")]),s._v(" "),t("p",[s._v("在 Qt 中，信号与槽是一种常用的通信机制。以下是几种常见的连接方式：")]),s._v(" "),t("ol",[t("li",[s._v("使用 QObject::connect() 函数：这是最常见的连接方式。可以使用该函数将一个信号与一个槽函数进行连接。示例代码如下：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("   QObject::connect(senderObject, SIGNAL(signalName()), receiverObject, SLOT(slotName()));\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("使用 Lambda 表达式：如果你使用 C++11 或更高版本，可以使用 Lambda 表达式来连接信号和槽。示例代码如下：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("   QObject::connect(senderObject, &SenderClass::signalName, receiverObject, [](parameters) {\n       // 槽函数实现\n   });\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("使用 Qt5 新语法：从 Qt5 开始引入了新的连接语法，它使用了更安全和类型检查的方法来连接信号和槽。示例代码如下：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("   QObject::connect(senderObject, &SenderClass::signalName, receiverObject, &ReceiverClass::slotName);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("无论选择哪种方式，都需要确保发送者对象、接收者对象和信号/槽函数正确地定义和声明，并且满足相应的访问限制要求。")]),s._v(" "),t("p",[s._v("还有其他一些高级特性可用于信号与槽的连接，例如使用 Qt 的元对象系统查询、使用多个参数等。具体使用方式可以参考 Qt 文档以及相关教程和示例。")]),s._v(" "),t("h1",{attrs:{id:"_11、智能指针三种底层实现和应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、智能指针三种底层实现和应用场景"}},[s._v("#")]),s._v(" 11、智能指针三种底层实现和应用场景")]),s._v(" "),t("p",[s._v("智能指针是一种 C++ 中的智能内存管理工具，用于自动化地管理动态分配的内存资源，防止内存泄漏和悬空指针等问题。以下是三种常见的智能指针底层实现和它们的应用场景：")]),s._v(" "),t("ol",[t("li",[s._v("shared_ptr：shared_ptr使用引用计数的方式来管理资源，即通过记录有多少个智能指针共享同一个资源，并在没有任何引用时释放该资源。这种底层实现适用于多个智能指针需要共享同一个资源的情况，例如在多线程环境下共享数据、循环引用等。")]),s._v(" "),t("li",[s._v("unique_ptr：unique_ptr使用独占所有权的方式来管理资源，即每个资源只能由一个unique_ptr拥有，并且不能进行复制或拷贝操作。这种底层实现适用于需要独占某个资源且不需要共享所有权的情况，例如管理原始数组、显式拥有对象等。")]),s._v(" "),t("li",[s._v("weak_ptr：weak_ptr是一种辅助性智能指针，它可以与shared_ptr配合使用。与shared_ptr相比，weak_ptr不增加引用计数，也不拥有所指向的资源。其主要作用是解决shared_ptr可能导致的循环引用问题，在需要观察但不拥有某个对象时使用。")])]),s._v(" "),t("p",[s._v("应用场景举例：")]),s._v(" "),t("ul",[t("li",[s._v("shared_ptr：在多个对象之间共享同一资源，如共享数据结构、共享缓存等。")]),s._v(" "),t("li",[s._v("unique_ptr：管理独占性资源，如动态分配的内存块、原始指针等。")]),s._v(" "),t("li",[s._v("weak_ptr：解决shared_ptr循环引用问题，如观察者模式、缓存回收等。")])]),s._v(" "),t("p",[s._v("需要根据具体的需求和设计来选择适合的智能指针类型及其底层实现方式。")]),s._v(" "),t("h1",{attrs:{id:"_12、预防内存泄漏方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、预防内存泄漏方式"}},[s._v("#")]),s._v(" 12、预防内存泄漏方式")]),s._v(" "),t("ol",[t("li",[s._v("使用智能指针：使用 C++ 中的智能指针，如 shared_ptr 、 unique_ptr 等，可以自动管理动态分配的内存资源，避免手动释放忘记或错误释放导致的内存泄漏。")]),s._v(" "),t("li",[s._v("遵循 RAII（资源获取即初始化）原则：在对象构造时申请资源，在析构时释放资源。通过使用栈上对象或成员对象来管理资源生命周期，确保在不再需要时及时释放资源。")]),s._v(" "),t("li",[s._v("避免无效指针赋值：在将指针变量赋值为 nullptr 之前，应始终检查其是否已经被删除或释放。同时，避免野指针和悬空指针的出现。")]),s._v(" "),t("li",[s._v("清理不再使用的对象：定期检查并清理不再使用的对象和数据结构，确保它们被正确地删除或释放。")]),s._v(" "),t("li",[s._v("谨慎使用动态内存分配：尽量减少对堆内存的直接动态分配，并且在必要时使用合适大小和作用域的内存块进行动态分配，以避免过多频繁地申请和销毁内存。")]),s._v(" "),t("li",[s._v("使用工具进行内存泄漏检测：可以借助一些工具来进行静态代码分析或运行时检测，以帮助发现潜在的内存泄漏问题，如 Valgrind 、 LeakSanitizer 等。")])]),s._v(" "),t("h1",{attrs:{id:"_13、调试工具用什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13、调试工具用什么"}},[s._v("#")]),s._v(" 13、调试工具用什么")]),s._v(" "),t("ol",[t("li",[s._v("GDB：GDB 是一个功能强大的命令行调试器，适用于 C、C++ 等语言。它允许你在程序运行时进行断点设置、变量查看、堆栈跟踪等操作。")]),s._v(" "),t("li",[s._v("Visual Studio Debugger：对于使用Visual Studio开发的项目，Visual Studio提供了内置的集成调试器，可以方便地进行单步执行、变量查看、条件断点等操作。")]),s._v(" "),t("li",[s._v("Xcode Debugger： Xcode 是苹果公司提供的集成开发环境，在 Mac 上进行 iOS 和 macOS 开发时常用。Xcode 提供了强大的调试功能，包括代码断点、变量监视、内存查看等。")]),s._v(" "),t("li",[s._v("Eclipse Debugger： Eclipse 是一个流行的Java开发环境，并且支持多种编程语言。Eclipse提供了内置的调试功能，适用于Java和其他语言。")]),s._v(" "),t("li",[s._v("Valgrind： Valgrind 是一款用于内存错误检测和性能分析的工具套件。它可以检测到内存泄漏、不正确的内存访问以及其他潜在问题。")]),s._v(" "),t("li",[s._v("Chrome DevTools：针对 Web 开发，在 Chrome 浏览器中使用 DevTools 可以进行 JavaScript 调试和性能分析，包括断点设置、网络请求监控、内存分析等功能。")])]),s._v(" "),t("h1",{attrs:{id:"_14、互斥锁和条件变量的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14、互斥锁和条件变量的使用"}},[s._v("#")]),s._v(" 14、互斥锁和条件变量的使用")]),s._v(" "),t("p",[s._v("互斥锁（Mutex）和条件变量（Condition Variable）是多线程编程中常用的同步机制。它们通常一起使用来实现线程间的协调与同步。")]),s._v(" "),t("p",[s._v("互斥锁主要用于保护共享资源，确保在任意时刻只有一个线程可以访问该资源。以下是互斥锁的基本使用方式：")]),s._v(" "),t("ol",[t("li",[s._v("初始化互斥锁：在使用互斥锁之前，需要先进行初始化。")]),s._v(" "),t("li",[s._v("加锁：当一个线程需要访问共享资源时，它会尝试获取互斥锁。如果互斥锁已经被其他线程持有，则该线程将进入阻塞状态，直到获得锁为止。")]),s._v(" "),t("li",[s._v("访问共享资源：一旦某个线程成功获得了互斥锁，它就可以安全地访问共享资源了。")]),s._v(" "),t("li",[s._v("解锁：当某个线程完成对共享资源的操作后，应该及时释放互斥锁，以便其他等待获取该资源的线程可以继续执行。")])]),s._v(" "),t("p",[s._v("条件变量用于在线程之间发送信号和等待信号。以下是条件变量的基本使用方式：")]),s._v(" "),t("ol",[t("li",[s._v("初始化条件变量：在使用条件变量之前，需要先进行初始化。")]),s._v(" "),t("li",[s._v("等待信号：当某个线程需要等待某个条件满足时，在加锁的情况下，它会调用条件变量的等待函数进行等待。此时，线程会释放互斥锁，并进入阻塞状态。")]),s._v(" "),t("li",[s._v("发送信号：当某个条件满足时，可以通过条件变量的发送信号函数通知正在等待的线程。该线程将从阻塞状态中被唤醒，并重新获取互斥锁以继续执行。")])]),s._v(" "),t("p",[s._v("需要注意的是，条件变量和互斥锁一起使用时，通常先对互斥锁加锁，然后再操作条件变量。")])])}),[],!1,null,null,null);t.default=n.exports}}]);