(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{479:function(t,s,a){"use strict";a.r(s);var _=a(4),v=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"完美世界秋招-c-游戏开发面经-cpp部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完美世界秋招-c-游戏开发面经-cpp部分"}},[t._v("#")]),t._v(" 完美世界秋招 C++ 游戏开发面经（Cpp部分）")]),t._v(" "),s("h2",{attrs:{id:"_1、对象池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、对象池"}},[t._v("#")]),t._v(" 1、对象池")]),t._v(" "),s("blockquote",[s("p",[t._v("对象池（Object Pool）是一种软件设计模式，用于在需要频繁创建和销毁对象的场景下，提高性能和资源利用率。它通过预先创建一定数量的对象并将其存储在一个池中，在需要时直接从池中获取对象，使用完后再放回池中重复利用。")])]),t._v(" "),s("p",[s("strong",[t._v("具体来说，对象池通常包含以下几个核心组件：")])]),t._v(" "),s("ul",[s("li",[t._v("对象容器（Object Container）：用于存储可重复利用的对象实例。可以使用数组、链表或其他数据结构来实现。")]),t._v(" "),s("li",[t._v("对象工厂（Object Factory）：负责创建和初始化新的对象实例，并将其添加到对象容器中。")]),t._v(" "),s("li",[t._v("对象借出（Object Borrowing）：当需要获取一个对象时，从对象容器中取出一个空闲的对象，并进行相应的状态更新。")]),t._v(" "),s("li",[t._v("对象归还（Object Returning）：当使用完一个对象后，将其归还给对象容器，并恢复到初始状态以供下次使用。")])]),t._v(" "),s("p",[s("strong",[t._v("优点：")])]),t._v(" "),s("ul",[s("li",[t._v("减少了频繁创建和销毁对象的开销，提高了性能。")]),t._v(" "),s("li",[t._v("提升了系统对资源的利用率。")]),t._v(" "),s("li",[t._v("控制了同时存在的最大对象数目，避免了资源耗尽问题。")])]),t._v(" "),s("p",[s("strong",[t._v("适用场景：")])]),t._v(" "),s("ul",[s("li",[t._v("频繁创建和销毁代价较大的资源密集型对象，如数据库连接、线程等。")]),t._v(" "),s("li",[t._v("需要限制同时存在的对象数量的场景。")]),t._v(" "),s("li",[t._v("需要减少垃圾回收开销的场景。")])]),t._v(" "),s("h2",{attrs:{id:"_2、内存泄漏-怎么解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、内存泄漏-怎么解决"}},[t._v("#")]),t._v(" 2、内存泄漏，怎么解决")]),t._v(" "),s("blockquote",[s("p",[t._v("内存泄漏是指在程序运行过程中，动态分配的内存空间没有被正确释放，导致无法再次使用。")])]),t._v(" "),s("p",[s("strong",[t._v("解决内存泄漏的方法如下：")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("审查代码：")]),t._v(" 仔细检查代码，找出可能存在内存泄漏的地方。通常是通过跟踪对象的生命周期来确定是否有未释放的内存。")]),t._v(" "),s("li",[s("strong",[t._v("使用智能指针：")]),t._v(" C++ 提供了智能指针（如 std::shared_ptr 和 std::unique_ptr），它们可以自动管理对象的生命周期，在对象不再使用时自动释放相关的内存。")]),t._v(" "),s("li",[s("strong",[t._v("释放资源：")]),t._v(" 确保在不再使用某个对象时及时调用 delete 或 free 函数来手动释放对应的内存。")]),t._v(" "),s("li",[s("strong",[t._v("注意循环引用：")]),t._v(" 当存在循环引用时，智能指针可能无法正确释放对象。这种情况下，可以使用弱引用或断开循环引用来解决。")]),t._v(" "),s("li",[s("strong",[t._v("使用垃圾回收器：")]),t._v(" 某些编程语言（如 Java）具有垃圾回收器机制，可以自动检测和清理不再使用的对象以避免内存泄漏。")]),t._v(" "),s("li",[s("strong",[t._v("内存检测工具：")]),t._v(" 使用专门的工具（如 Valgrind、DrMemory 等）来检测和诊断内存泄漏问题，并根据工具输出进行修复。")])]),t._v(" "),s("h2",{attrs:{id:"_3、堆和栈-栈大小-哪些存堆上-static和全局变量存在哪里"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、堆和栈-栈大小-哪些存堆上-static和全局变量存在哪里"}},[t._v("#")]),t._v(" 3、堆和栈，栈大小，哪些存堆上，static和全局变量存在哪里")]),t._v(" "),s("p",[t._v("堆和栈是内存管理的两个重要概念。")]),t._v(" "),s("ul",[s("li",[t._v("栈（Stack）：由编译器自动分配和释放，用于存储函数调用时的局部变量、函数参数以及函数返回地址等信息。它的大小在程序编译时就已经确定，并且是有限的。")]),t._v(" "),s("li",[t._v("堆（Heap）：由程序员手动分配和释放，用于存储动态分配的内存，例如使用 new 或 malloc 函数申请的内存。堆的大小通常比栈大得多，并且在运行时可以根据需要进行动态扩展。")]),t._v(" "),s("li",[t._v("对于栈来说，其大小是固定的，一般较小，通常在几MB到几十MB之间，具体取决于操作系统和编译器设置。")])]),t._v(" "),s("p",[s("strong",[t._v("以下类型数据存储在堆上：")])]),t._v(" "),s("ol",[s("li",[t._v("动态分配的对象（通过 new 或 malloc 创建）")]),t._v(" "),s("li",[t._v("全局对象（包括全局变量和静态变量），它们始终存在于整个程序生命周期中。")])]),t._v(" "),s("p",[t._v("Static 变量和全局变量都存储在静态存储区（static storage area）中。这个区域在程序启动时被分配，并在程序结束时释放。")]),t._v(" "),s("p",[t._v("全局变量在定义时就已经存在，而 static 变量只会初始化一次并持久存在于整个程序执行过程中。")]),t._v(" "),s("p",[t._v("不同点是 static 变量仅限于当前文件范围可见，而全局变量可以被其他文件访问。")]),t._v(" "),s("h2",{attrs:{id:"_4、多态-虚函数表-虚函数表指针-存在哪里-什么时候初始化-对象里面可能有几个虚函数表指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、多态-虚函数表-虚函数表指针-存在哪里-什么时候初始化-对象里面可能有几个虚函数表指针"}},[t._v("#")]),t._v(" 4、多态，虚函数表，虚函数表指针，存在哪里，什么时候初始化，对象里面可能有几个虚函数表指针？")]),t._v(" "),s("blockquote",[s("p",[t._v("多态是面向对象编程中的一个重要概念，它允许不同的对象通过统一的接口进行操作。")])]),t._v(" "),s("p",[t._v("虚函数表（Virtual Function Table）是 C++ 实现动态多态性的机制之一。它是一个存储了虚函数地址的数据结构，在类中定义了虚函数时，编译器会生成一个对应的虚函数表。")]),t._v(" "),s("p",[t._v("虚函数表指针（Vptr）是一个指针，指向包含虚函数表的内存区域。每个具有虚函数或继承自带有虚函数的类都会在其对象中拥有一个或多个虚函数表指针。")]),t._v(" "),s("p",[t._v("每个对象中只存在一个默认的虚函数表指针。这个指针在对象被创建时由构造函数进行初始化，将其指向正确的虚函数表。")]),t._v(" "),s("p",[s("strong",[t._v("总结起来：")])]),t._v(" "),s("ul",[s("li",[t._v("虚函数表存储在内存中某个固定位置。")]),t._v(" "),s("li",[t._v("虚函数表指针存在于每个具有虚函数或继承自带有虚函数的类对象中。")]),t._v(" "),s("li",[t._v("虚函数表指针在对象被创建时由构造函数进行初始化，根据继承关系可能存在多级派生导致存在多个基类子对象及对应的虚函数表指针。")])]),t._v(" "),s("h2",{attrs:{id:"_5、socket-io多路复用-select-poll-epoll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、socket-io多路复用-select-poll-epoll"}},[t._v("#")]),t._v(" 5、socket, IO多路复用，select, poll, epoll")]),t._v(" "),s("blockquote",[s("p",[t._v("Socket 是一种在网络中实现进程间通信的编程接口。它可以用于不同机器之间或同一机器上的进程间通信。")])]),t._v(" "),s("p",[t._v("I/O 多路复用是一种处理多个 I/O 事件的技术。它通过同时监听多个文件描述符（如 socket），当其中任意一个文件描述符准备好进行读写操作时，就会通知程序进行相应处理，从而提高系统性能和资源利用率。")]),t._v(" "),s("p",[s("strong",[t._v("select、poll 和 epoll 都是常见的 I/O 多路复用机制：")])]),t._v(" "),s("ul",[s("li",[t._v("select: 最早出现的 I/O 多路复用函数，通过对待监视文件描述符集合进行轮询来检查是否有可读、可写或异常事件发生。")]),t._v(" "),s("li",[t._v("poll: 类似于 select，但使用链表来存储待监视文件描述符集合，解决了 select 中文件描述符数量限制的问题。")]),t._v(" "),s("li",[t._v("epoll: Linux 特有的 I/O 多路复用机制，使用事件驱动方式来管理文件描述符，通过 epoll_ctl 注册感兴趣的事件，并通过 epoll_wait 获取已经就绪的事件。")])]),t._v(" "),s("p",[t._v("这些机制都可以实现高效地处理并发网络请求，在实际开发中根据需求和平台选择适合的方法。")]),t._v(" "),s("h2",{attrs:{id:"_6、进程间通信-应用场景-共享内存什么时候用得多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、进程间通信-应用场景-共享内存什么时候用得多"}},[t._v("#")]),t._v(" 6、进程间通信，应用场景，共享内存什么时候用得多")]),t._v(" "),s("blockquote",[s("p",[t._v("进程间通信（Inter-Process Communication，IPC）是指在多个进程之间进行数据交换和共享资源的机制。")])]),t._v(" "),s("p",[s("strong",[t._v("它在以下应用场景中经常被使用：")])]),t._v(" "),s("ul",[s("li",[t._v("并发编程：当多个进程或线程同时执行时，需要进行进程间通信来实现数据同步和互斥操作，以避免竞态条件和数据不一致。")]),t._v(" "),s("li",[t._v("分布式系统：在分布式系统中，不同计算节点之间需要通过进程间通信来传递消息、共享状态信息、协调任务等。")]),t._v(" "),s("li",[t._v("客户端/服务器模型：客户端与服务器之间需要进行进程间通信来完成请求与响应的交互过程。")]),t._v(" "),s("li",[t._v("操作系统内核：操作系统内核中的各个子系统之间需要通过进程间通信来传递控制信息、共享资源等。")])]),t._v(" "),s("p",[t._v("共享内存是一种特殊的 IPC 机制，它将一个物理内存区域映射到多个进程的地址空间中，使得这些进程可以直接访问和修改该内存区域。")]),t._v(" "),s("p",[t._v("共享内存在需要高性能和大规模数据共享的场景下使用较多，例如数据库管理系统、图像处理等领域。")]),t._v(" "),s("p",[t._v("由于直接访问内存，共享内存具有较低的开销和高效的读写速度。然而，在使用共享内存时需要考虑并发访问带来的同步和一致性问题。")]),t._v(" "),s("h2",{attrs:{id:"_7、copy-on-write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、copy-on-write"}},[t._v("#")]),t._v(" 7、Copy On Write")]),t._v(" "),s("blockquote",[s("p",[t._v("Copy On Write（写时复制）是一种优化策略，常用于操作系统或编程语言的内存管理中。它可以减少内存拷贝的开销。")])]),t._v(" "),s("p",[t._v("在 Copy On Write 机制下，当多个变量共享同一个资源时，只有在其中一个变量需要修改资源时才进行真正的拷贝。在修改之前，所有共享该资源的变量都指向同一个内存地址。当其中一个变量要进行写操作时，系统会先为这个变量分配独立的内存空间，并将原始数据复制到新的位置上。这样做可以避免不必要的数据拷贝开销，在多数情况下节省了时间和空间。")]),t._v(" "),s("p",[t._v("使用 Copy On Write 机制的好处是可以提高性能和效率。当多个进程或线程同时读取共享资源时，并不会造成冲突或互斥锁等待，因为它们都指向相同的内存地址。只有在需要修改数据时才发生实际的拷贝操作。")]),t._v(" "),s("h2",{attrs:{id:"_8、c-stl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、c-stl"}},[t._v("#")]),t._v(" 8、C++ STL")]),t._v(" "),s("p",[t._v("C++ STL（Standard Template Library）是 C++ 标准库中的一个重要组成部分，它提供了一套通用的模板类和函数，用于实现常用的数据结构和算法。STL 包含了许多容器、迭代器、算法和函数对象等，可以极大地简化 C++ 程序的开发过程。")]),t._v(" "),s("p",[t._v("STL 中最常用的容器有 vector、list、deque、set、map 等，它们分别对应动态数组、双向链表、双端队列、集合和映射等数据结构。通过使用这些容器，我们可以方便地进行元素的插入、删除和查找等操作。")]),t._v(" "),s("p",[t._v("除了容器之外，STL 还提供了丰富的算法，如排序、查找、变换等。通过使用这些算法，我们可以在不同的容器上执行各种操作，并且不需要手动编写循环代码。")]),t._v(" "),s("p",[t._v("此外，STL 还包括迭代器（iterator），它充当了与容器交互的桥梁角色，使得我们可以按照统一的方式遍历容器中的元素。")]),t._v(" "),s("h2",{attrs:{id:"_9、vector-和-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、vector-和-list"}},[t._v("#")]),t._v(" 9、vector 和 list")]),t._v(" "),s("blockquote",[s("p",[t._v("Vector 和 List 是 C++ 中两种不同的容器类型。它们在数据存储和访问方式上有一些不同之处。")])]),t._v(" "),s("p",[t._v("Vector 是一个动态数组，它可以根据需要自动调整大小。它通过连续的内存块来存储元素，因此支持快速的随机访问，并且在尾部插入和删除元素的时间复杂度为常数级别。然而，在中间位置进行插入和删除操作会比较低效，因为需要移动后续元素。")]),t._v(" "),s("p",[t._v("List 是一个双向链表，它通过节点之间的指针链接来存储元素。由于每个节点都包含指向前一个节点和后一个节点的指针，所以在任意位置进行插入和删除操作都很高效。但是，对于随机访问来说效率较低，需要遍历链表才能找到特定位置的元素。")]),t._v(" "),s("p",[t._v("选择使用哪种容器类型取决于具体的需求。")]),t._v(" "),s("ul",[s("li",[t._v("如果需要频繁地在尾部进行插入和删除操作，并且需要支持快速的随机访问，那么 Vector 可能更合适。")]),t._v(" "),s("li",[t._v("如果需要经常在中间位置进行插入和删除操作，并且对随机访问性能要求不高，则 List 可能更适合。")])]),t._v(" "),s("h2",{attrs:{id:"_10、map-和-unordered-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、map-和-unordered-map"}},[t._v("#")]),t._v(" 10、map 和 unordered_map")]),t._v(" "),s("p",[s("code",[t._v("map")]),t._v(" 和 "),s("code",[t._v("unordered_map")]),t._v(" 都是 C++ 标准库中的关联容器，用于实现键值对的存储和访问。")]),t._v(" "),s("p",[s("strong",[t._v("主要区别如下：")])]),t._v(" "),s("ol",[s("li",[t._v("底层实现方式：\n"),s("ol",[s("li",[s("code",[t._v("map")]),t._v(" 使用红黑树（平衡二叉搜索树）作为底层数据结构，以保持有序性；")]),t._v(" "),s("li",[t._v("而 "),s("code",[t._v("unordered_map")]),t._v(" 使用哈希表作为底层数据结构，以提供更快的查找和插入操作。")])])]),t._v(" "),s("li",[t._v("迭代顺序：\n"),s("ol",[s("li",[s("code",[t._v("map")]),t._v(" 的迭代顺序按照键的比较函数进行排序；")]),t._v(" "),s("li",[t._v("而 "),s("code",[t._v("unordered_map")]),t._v(" 的迭代顺序取决于哈希函数计算出的哈希值。")])])]),t._v(" "),s("li",[t._v("时间复杂度：\n"),s("ol",[s("li",[t._v("在典型情况下，插入、查找和删除操作在 "),s("code",[t._v("map")]),t._v(" 和 "),s("code",[t._v("unordered_map")]),t._v(" 中都具有常数时间复杂度。")]),t._v(" "),s("li",[t._v("但是，在最坏情况下，即当发生散列冲突时，哈希表需要进行额外处理，可能导致某些操作具有线性时间复杂度。")])])]),t._v(" "),s("li",[t._v("接口特点：\n"),s("ol",[s("li",[t._v("两者提供了类似的接口，包括插入元素、查找元素、删除元素等功能。")]),t._v(" "),s("li",[t._v("但由于底层实现不同，部分接口细节可能略有差异。")])])])]),t._v(" "),s("p",[t._v("选择使用哪个容器取决于具体需求。")]),t._v(" "),s("ul",[s("li",[t._v("如果需要按照键进行排序或遍历有序数据，则使用 "),s("code",[t._v("map")]),t._v("；")]),t._v(" "),s("li",[t._v("如果对查询和插入速度有更高要求，并不关心元素的顺序，则使用 "),s("code",[t._v("unordered_map")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"_11、哈希冲突解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11、哈希冲突解决"}},[t._v("#")]),t._v(" 11、哈希冲突解决")]),t._v(" "),s("blockquote",[s("p",[t._v("哈希冲突是指不同的键经过哈希函数计算得到相同的哈希值，造成数据存储冲突。")])]),t._v(" "),s("p",[s("strong",[t._v("解决哈希冲突的常用方法有以下几种：")])]),t._v(" "),s("p",[t._v("哈希冲突是指两个或多个不同的键通过哈希函数映射到相同的哈希值，导致它们在哈希表中存储的位置相同。解决哈希冲突的常用方法包括：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("链地址法（Separate Chaining）：")]),t._v(" "),s("ul",[s("li",[t._v("将哈希表的每个槽（bucket）设为一个链表，哈希冲突时，将冲突的键值对添加到对应槽的链表中。这样，每个槽存储一个链表，解决了冲突的问题。")])])]),t._v(" "),s("li",[s("strong",[t._v("开放寻址法（Open Addressing）：")]),t._v(" "),s("ul",[s("li",[t._v("在哈希表中找到一个空槽存放冲突的键值对，而不是使用额外的数据结构。有几种开放寻址的方法：\n"),s("ul",[s("li",[s("strong",[t._v("线性探测（Linear Probing）：")]),t._v(" 如果一个槽被占用，就检查下一个槽，直到找到一个空槽。")]),t._v(" "),s("li",[s("strong",[t._v("二次探测（Quadratic Probing）：")]),t._v(" 根据某个增量函数进行二次计算下一个槽的位置。")]),t._v(" "),s("li",[s("strong",[t._v("双重哈希（Double Hashing）：")]),t._v(" 使用第二个哈希函数来计算下一个槽的位置。")])])])])]),t._v(" "),s("li",[s("strong",[t._v("再哈希（Rehashing）：")]),t._v(" "),s("ul",[s("li",[t._v("当哈希表达到一定的负载因子（已存储元素数量与槽位总数之比）时，进行再哈希。即创建一个更大的哈希表，将所有键值对重新插入。这可以减小冲突的概率，但可能会导致性能损失。")])])]),t._v(" "),s("li",[s("strong",[t._v("建立公共溢出区（Cuckoo Hashing）：")]),t._v(" "),s("ul",[s("li",[t._v("将所有发生冲突的键值对都存放在一个公共区域中。")])])])]),t._v(" "),s("p",[t._v("选择解决哈希冲突的方法通常取决于应用的特定需求和对性能的要求。链地址法适用于高负载因子，而开放寻址法适用于内存空间较小的情况。")]),t._v(" "),s("h2",{attrs:{id:"_12、迭代器类型-vector-和-map-分别是什么迭代器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12、迭代器类型-vector-和-map-分别是什么迭代器"}},[t._v("#")]),t._v(" 12、迭代器类型，vector 和 map 分别是什么迭代器")]),t._v(" "),s("p",[t._v("在 C++ 中，vector 和 map 是两种不同的容器类型，它们分别有不同的迭代器类型。")]),t._v(" "),s("p",[t._v("对于 vector，它提供了正向迭代器（iterator）、常量正向迭代器（const_iterator）、反向迭代器（reverse_iterator）以及常量反向迭代器（const_reverse_iterator）。这些迭代器可以用于遍历 vector 容器中的元素。")]),t._v(" "),s("p",[t._v("对于 map，它也提供了类似的正向迭代器（iterator）、常量正向迭代器（const_iterator）、反向迭代器（reverse_iterator）以及常量反向迭代器（const_reverse_iterator）。通过这些迭代器，可以遍历 map 容器中存储的键值对。")]),t._v(" "),s("p",[t._v("需要注意的是，map 是按照键进行排序存储的，因此使用迭代器遍历时会按照键的顺序输出。而 vector 则按照元素在容器中的顺序进行存储和遍历。")]),t._v(" "),s("h2",{attrs:{id:"_13、迭代器失效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13、迭代器失效"}},[t._v("#")]),t._v(" 13、迭代器失效")]),t._v(" "),s("p",[t._v("迭代器失效是指在使用迭代器遍历容器元素时，如果对容器进行了插入或删除操作，会导致原本有效的迭代器指向的元素位置改变，从而使得该迭代器失效。")]),t._v(" "),s("p",[t._v("迭代器失效的具体情况和不同的容器类型有关。通常情况下，插入元素可能会导致之前的迭代器失效，因为新插入的元素会影响到容器内部数据结构的布局。删除元素则可能使得被删除元素后面的元素位置向前移动，也可能导致之前的迭代器失效。")]),t._v(" "),s("p",[s("strong",[t._v("为了避免迭代器失效，可以采取以下几种方式：")])]),t._v(" "),s("ul",[s("li",[t._v("使用智能指针或者引用来替代直接使用迭代器。")]),t._v(" "),s("li",[t._v("在进行插入和删除操作之前，先保存好需要访问的元素位置，并在操作完成后重新获取迭代器。")]),t._v(" "),s("li",[t._v("对于某些容器类型（如 std::vector），可以使用索引值来替代迭代器进行访问，因为索引值不会受到插入和删除操作影响。")])]),t._v(" "),s("h2",{attrs:{id:"_14、vector-删除元素-删除区间-erase-返回什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14、vector-删除元素-删除区间-erase-返回什么"}},[t._v("#")]),t._v(" 14、vector 删除元素，删除区间，erase 返回什么")]),t._v(" "),s("p",[t._v("在 C++ 中，如果使用"),s("code",[t._v("std::vector")]),t._v("的"),s("code",[t._v("erase")]),t._v("函数删除一个或多个元素，它将返回指向被删除元素之后位置的迭代器。换句话说，它返回一个指向下一个有效元素的迭代器。")]),t._v(" "),s("p",[t._v("当你使用"),s("code",[t._v("erase")]),t._v("函数删除单个元素时，用法如下：")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" vec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("erase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除值为3的元素")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("当你使用"),s("code",[t._v("erase")]),t._v("函数删除一个区间时，用法如下：")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("vector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除从第2个元素开始到第4个元素结束的区间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" end "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("erase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("需要注意的是，被删除的元素会被析构并释放内存，同时原来位于删除区间后面的所有元素都会向前移动填补空缺。")]),t._v(" "),s("h2",{attrs:{id:"_15、syn-泛洪攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15、syn-泛洪攻击"}},[t._v("#")]),t._v(" 15、SYN 泛洪攻击")]),t._v(" "),s("p",[t._v("SYN 泛洪攻击（SYN Flood Attack）是一种常见的网络攻击方式，它利用 TCP 三次握手过程中的漏洞来消耗目标系统资源。具体来说，攻击者发送大量伪造的 TCP 连接请求（SYN 包），但不完整地进行握手流程，导致目标系统在等待响应时占用了大量资源，从而无法处理正常的请求。")]),t._v(" "),s("p",[t._v("这种攻击的目的通常是使目标系统无法正常提供服务，导致服务拒绝或降级。")]),t._v(" "),s("p",[s("strong",[t._v("为了应对 SYN 泛洪攻击，可以采取以下几种方法：")])]),t._v(" "),s("ul",[s("li",[t._v("防火墙设置：配置防火墙规则，限制对目标系统特定端口的连接数量和频率。")]),t._v(" "),s("li",[t._v("SYN Cookie 机制：使用 SYN Cookie 机制来抵御该类型攻击。该机制会将客户端的源 IP 地址、端口号以及一些状态信息加密生成一个 cookie 值发送给客户端，在后续握手过程中进行校验。")]),t._v(" "),s("li",[t._v("负载均衡器：通过引入负载均衡器来分发流量，将请求合理地分散到多台服务器上，并且能够过滤掉异常或恶意请求。")]),t._v(" "),s("li",[t._v("连接数限制：设置系统内核参数或使用专业软件工具限制单个 IP 地址或单个用户所能建立的最大连接数。")]),t._v(" "),s("li",[t._v("流量监测和分析：实时监测网络流量，及时发现异常流量并采取相应的防御措施。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);