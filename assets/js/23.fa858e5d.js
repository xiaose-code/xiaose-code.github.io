(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{349:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第4章-cpp多线程系统编程精要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第4章-cpp多线程系统编程精要"}},[t._v("#")]),t._v(" 第4章 Cpp多线程系统编程精要")]),t._v(" "),s("h1",{attrs:{id:"_4-1-引言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-引言"}},[t._v("#")]),t._v(" 4.1 引言")]),t._v(" "),s("p",[s("strong",[t._v("学习多线程编程面临的最大的思维方式的转变有以下两点：")])]),t._v(" "),s("ul",[s("li",[t._v("当前线程可能随时会被切换出去，或者说被抢占（preempt）了")]),t._v(" "),s("li",[t._v("多线程程序中事件的发生顺序不再有全局统一的先后关系")])]),t._v(" "),s("p",[t._v("多线程程序的正确性不能依赖于任何一个线程的执行速度，不能通过原地等待 sleep() 来假定其他线程的事件已经发生，而必须通过适当的同步来让当前线程能看到其他线程的事件的结果。无论线程执行得快与慢（被操作系统切换出去得越多，执行越慢），程序都应该能正常工作。")]),t._v(" "),s("p",[t._v("例如下面这段代码就有这方面的问题。")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" running "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局标志")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("threadFunc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("running"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//get task from queue")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmuduo"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Thread "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("t")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("threadFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    running "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//应该放到t.start()之前")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("ul",[s("li",[t._v("这段代码暗中假定线程函数的启动慢于running变量的赋值，因此线程函数能进入while循环执行我们想要的功能。")]),t._v(" "),s("li",[t._v("但是，直到有一天，系统负载很高，Thread::start()调用pthread_create()陷入内核后返回时，内核决定换另外一个就绪任务来执行。于是running的赋值就推迟了，这时线程函数就可能不进入while循环而直接退出了。")]),t._v(" "),s("li",[t._v("有人会认为在while之前加一小段延时（sleep）就能解决问题，但这是错的，无论加多大的延时，系统都有可能先执行while的条件判断，然后再执行running的赋值。")]),t._v(" "),s("li",[t._v("正确的做法是把running的赋值放到t.start()之前，这样借助pthread_create()的happens-before语意来保证running的新值能被线程看到。")])]),t._v(" "),s("h1",{attrs:{id:"_4-2-基本线程原语的选用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-基本线程原语的选用"}},[t._v("#")]),t._v(" 4.2 基本线程原语的选用")]),t._v(" "),s("blockquote",[s("p",[t._v("POSIX threads的函数有110多个，真正常用的不过十几个。而且在 Cpp 程序中通常会有更为易用的 wrapper, 不会直接调用 Pthreads 函数。")])]),t._v(" "),s("p",[s("strong",[t._v("这11个最基本的Pthreads函数是：")])]),t._v(" "),s("ul",[s("li",[t._v("2个：线程的创建和等待结束（join）。封装为 muduo::Thread。")]),t._v(" "),s("li",[t._v("4个：mutex的创建、销毁、加锁、解锁。封装为 muduo::MutexLock。")]),t._v(" "),s("li",[t._v("5个：条件变量的创建、销毁、等待、通知、广播。封装为 muduo::Condition。")])]),t._v(" "),s("p",[t._v("用这三样东西（thread、mutex、condition）可以完成任何多线程编程任务。当然我们一般也不会直接使用它们（mutex除外），而是使用更高层的封装，例如 mutex::ThreadPool 和 mutex::CountDownLatch 等。")]),t._v(" "),s("p",[t._v("除此之外，Pthreads 还提供了其他一些原语，有些是可以酌情使用的，有些则是不推荐使用的。")]),t._v(" "),s("p",[s("strong",[t._v("可以酌情使用的有")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pthread_once")]),t._v(", 封装为 "),s("code",[t._v("muduo::Singleton<T>")]),t._v("。其实不如直接用全局变量。")]),t._v(" "),s("li",[s("code",[t._v("pthread_key*")]),t._v(", 封装为 "),s("code",[t._v("muduo::ThreadLocal<T>")]),t._v("。可以考虑用 "),s("code",[t._v("__thread")]),t._v(" 替换之。")])]),t._v(" "),s("p",[s("strong",[t._v("不建议使用")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("pthread_rwlock，读写锁通常应慎用。muduo没有封装读写锁，这是有意的。")]),t._v(" "),s("li",[t._v("sem_*，避免用信号量（semaphore）。它的功能与条件变量重合，但容易用错。")]),t._v(" "),s("li",[t._v("pthread_{cancel, kill}。程序中出现了它们，则通常意味着设计出了问题。")])]),t._v(" "),s("blockquote",[s("p",[t._v("不推荐使用读写锁的原因是它往往造成提高性能的错觉（允许多个线程并发读），实际上在很多情况下，与使用最简单的mutex相比，它实际上降低了性能。另外，写操作会阻塞读操作，如果要求优化读操作的延迟，用读写锁是不合适的。")])]),t._v(" "),s("p",[t._v("多线程系统编程的难点不在于学习线程原语（primitives），而在于理解多线程与现有的C/Cpp库函数和系统调用的交互关系，以进一步学习如何设计并实现线程安全且高效的程序。")]),t._v(" "),s("h1",{attrs:{id:"_4-3-c-cpp系统库的线程安全性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-c-cpp系统库的线程安全性"}},[t._v("#")]),t._v(" 4.3 C/Cpp系统库的线程安全性")]),t._v(" "),s("blockquote",[s("p",[t._v("现行的C/Cpp标准（C89/C99/Cpp03）并没有涉及线程。")]),t._v(" "),s("p",[t._v("新版的C/Cpp标准（C11和Cpp11）规定了程序在多线程下的语意，Cpp11还定义了一个线程库（std::thread）。")])]),t._v(" "),s("p",[t._v("对于标准而言，关键的不是定义线程库，而是规定内存模型（memory model）。特别是规定一个线程对某个共享变量的修改何时能被其他线程看到，这称为内存序（memory ordering）或者内存能见度（memory visibility）。")]),t._v(" "),s("p",[t._v("线程的出现给出现在20世纪90年代Unix操作系统的系统函数库带来了冲击，破坏了20年来一贯的编程传统和假定。")]),t._v(" "),s("p",[s("strong",[t._v("例如：")])]),t._v(" "),s("ul",[s("li",[t._v("errno不再是一个全局变量，因为每个线程可能会执行不同的系统库函数。")]),t._v(" "),s("li",[t._v("有些“纯函数”不受影响，例如memset/strcpy/snprintf等等。")]),t._v(" "),s("li",[t._v("有些影响全局状态或者有副作用的函数可以通过加锁来实现线程安全，例如malloc/free、printf、fread/fseek等等。")]),t._v(" "),s("li",[t._v("有些返回或使用静态空间的函数不可能做到线程安全，因此要提供另外的版本，例如asctime_r/ctime_r/gmtime_r、stderror_r、strtok_r等等。")]),t._v(" "),s("li",[t._v("传统的 fork() 并发模型不再适用于多线程程序")])]),t._v(" "),s("p",[t._v("现在 Linux glibc 把 errno 定义为一个宏，注意 errno 是一个 lvalue，因此不能简单定义为某个函数的返回值，而必须定义为对函数返回指针的 dereference。")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__errno_location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("errno")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__errno_location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("现在 glibc 库函数大部分都是线程安全的。特别是 "),s("code",[t._v("FILE*")]),t._v(" 系列函数是安全的，glibc 甚至提供了非线程安全的版本以应对某些特殊场合的性能需求。")]),t._v(" "),s("p",[t._v("尽管单个函数是线程安全的，但两个或多个函数放到一起就不再安全了。")]),t._v(" "),s("blockquote",[s("p",[t._v("例如 fseek() 和 fread() 都是安全的")])]),t._v(" "),s("ul",[s("li",[t._v("但是对某个文件“先seek再read”这两步操作中间有可能会被打断，其他线程有可能趁机修改了文件的当前位置，让程序逻辑无法正确执行。")]),t._v(" "),s("li",[t._v("在这种情况下，我们可以用"),s("code",[t._v("flockfile(FILE*)")]),t._v("和"),s("code",[t._v("funlockfile(FILE*)")]),t._v("函数来显式地加锁。并且由于"),s("code",[t._v("FILE*")]),t._v("的锁是可重入的，加锁之后再调用"),s("code",[t._v("fread()")]),t._v("不会造成死锁。")])]),t._v(" "),s("p",[t._v("如果程序直接使用 lseek 和 read 这两个系统调用来随机读取文件，也存在 “先 seek 再 read” 这种race condition，但是似乎我们无法高效地对系统调用加锁。解决办法是改用pread系统调用，它不会改变文件的当前位置。")]),t._v(" "),s("p",[t._v("由此可见，编写线程安全程序的一个难点在于线程安全是不可组合的（composable），一个函数foo()调用了两个线程安全的函数，而这个foo()函数本身很可能不是线程安全的。即便现在大多数glibc库函数是线程安全的，我们也不能像写单线程程序那样编写代码。")]),t._v(" "),s("p",[t._v("例如，在单线程程序中，如果我们要临时转换时区，可以用tzset()函数，这个函数会改变程序全局的“当前时区”。")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存当前的时区设置")]),t._v("\nstring oldTz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getenv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TZ"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置时区为欧洲伦敦 (Europe/London)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putenv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TZ=Europe/London"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新时区设置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tzset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个结构体用于存储伦敦的本地时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("tm")]),t._v(" localTimeInLN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前时间戳")]),t._v("\ntime_t now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前时间戳转换为伦敦时区的本地时间，并存储在localTimeInLN 中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("localtime_r")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("localTimeInLN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 恢复之前保存的时区设置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setenv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TZ"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldTz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c_str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新时区设置，使其回到之前的设置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tzset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[t._v("但是在多线程程序中，这么做不是线程安全的，即便tzset()本身是线程安全的。")]),t._v(" "),s("p",[t._v("因为它改变了全局状态（当前时区），这有可能影响其他线程转换当前时间，或者被其他进行类似操作的线程影响。")]),t._v(" "),s("p",[t._v("解决办法是使用 muduo::TimeZone class ，每个 immutable instance 对应一个时区，这样时间转换就不需要修改全局状态了。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义 TimeZone 类")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeZone")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造函数，接受时区文件路径")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("explicit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TimeZone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" zonefile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将时间戳转换为特定时区的本地时间")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("tm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocalTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time_t secondsSinceEpoch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将特定时区的本地时间转换为时间戳")]),t._v("\n    time_t "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromLocalTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("tm")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他可能的成员函数...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义常量表示纽约时区和伦敦时区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TimeZone "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kNewYorkTz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/share/zoneinfo/America/New_York"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TimeZone "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kLondonTz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/share/zoneinfo/Europe/London"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前时间戳")]),t._v("\ntime_t now "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前时间戳转换为纽约时区的本地时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("tm")]),t._v(" localTimeInNY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kNewYorkTz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocalTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将当前时间戳转换为伦敦时区的本地时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("tm")]),t._v(" localTimeInLN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kLondonTz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocalTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("一个基本思路是尽量把 class 设计成 immutable 的,这样用起来就不必为线程安全操心了。\n\n尽管Cpp03标准没有明说标准库的线程安全性，但我们可以遵循。\n\n- 一个基本原则：凡是非共享的对象都是彼此独立的,如果一个对象从始至终只被一个线程用到，那么它就是安全的。\n\n- 一个事实标准：共享的对象的 read-only 操作是安全的,前提是不能有并发的写操作。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("strong",[t._v("例如")])]),t._v(" "),s("ul",[s("li",[t._v("两个线程各自访问自己的局部 "),s("code",[t._v("vector")]),t._v(" 对象是安全的；")]),t._v(" "),s("li",[t._v("同时访问共享的 "),s("code",[t._v("const vector")]),t._v(" 对象也是安全的，但是这个 "),s("code",[t._v("vector")]),t._v(" 不能被第三个线程修改。一旦有 writer，那么 "),s("code",[t._v("read-only")]),t._v(" 操作也必须加锁，例如 "),s("code",[t._v("vector::size()")]),t._v("。")])]),t._v(" "),s("p",[t._v("Cpp 的标准库容器和 "),s("code",[t._v("std::string")]),t._v(" 都不是线程安全的，只有 "),s("code",[t._v("td::allocator")]),t._v(" 保证是线程安全的。一方面的原因是为了避免不必要的性能开销，另一方面的原因是单个成员函数的线程安全并不具备可组合性"),s("code",[t._v("（composable）")]),t._v("。")]),t._v(" "),s("p",[t._v("假设有"),s("code",[t._v("safe_vector<T>class")]),t._v("，它的接口与"),s("code",[t._v("std::vector")]),t._v("相同，不过每个成员函数都是线程安全的（类似 "),s("code",[t._v("Javasynchronized")]),t._v(" 方法）。但是用 "),s("code",[t._v("safe_vector<T>")]),t._v(" 并不一定能写出线程安全的代码。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("safe_vector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" vec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局可见")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("vec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//没有加锁保护")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这两步在多线程下是不安全的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("在if语句判断vec非空之后，别的线程可能清空其元素，从而造成vec[0]失效。")]),t._v(" "),s("p",[t._v("Cpp 标准库中的绝大多数泛型算法是线程安全的，因为这些都是无状态纯函数。只要输入区间是线程安全的，那么泛型函数就是线程安全的。")]),t._v(" "),s("p",[t._v("Cpp 的 iostream 不是线程安全的，因为流式输出")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Now is "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("等价于两个函数调用")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Now is "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("即便 ostream::operator<<() 做到了线程安全，也不能保证其他线程不会在两次函数调用之前向 stdout 输出其他字符。")]),t._v(" "),s("p",[t._v("对于“线程安全的 stdout 输出”这个需求，我们可以改用 printf，以达到安全性和输出的原子性。但是这等于用了全局锁，任何时刻只能有一个线程调用 printf，恐怕不见得高效。")]),t._v(" "),s("h1",{attrs:{id:"_4-4-linux上的线程标识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-linux上的线程标识"}},[t._v("#")]),t._v(" 4.4 Linux上的线程标识")]),t._v(" "),s("p",[t._v("POSIX threads 库提供了 pthread_self 函数用于返回当前进程的标识符，其类型为 pthread_t。pthread_t 不一定是一个数值类型（整数或指针），也有可能是一个结构体，因此 Pthreads 专门提供了pthread_equal 函数用于对比两个线程标识符是否相等。")]),t._v(" "),s("p",[s("strong",[t._v("这就带来一系列问题，包括：")])]),t._v(" "),s("ul",[s("li",[t._v("无法打印输出 pthread_t ，因为不知道其确切类型。也就没法在日志中用它表示当前线程的 id。")]),t._v(" "),s("li",[t._v("无法比较 pthread_t 的大小或计算其 hash 值，因此无法用作关联容器的 key。")]),t._v(" "),s("li",[t._v("无法定义一个非法的 pthread_t 值，用来表示绝对不可能存在的线程id，因此 MutexLock class 没有办法有效判断当前线程是否已经持有本锁。")]),t._v(" "),s("li",[t._v("pthread_t 值只在进程内有意义，与操作系统的任务调度之间无法建立有效关联。比方说在/proc文件系统中找不到 pthread_t 对应的 task。")])]),t._v(" "),s("p",[t._v("glibc的Pthreads实现实际上把 pthread_t 用作一个结构体指针（它的类型是unsigned long），指向一块动态分配的内存，而且这块内存是反复使用的。")]),t._v(" "),s("p",[t._v("这就造成 pthread_t 的值很容易重复。Pthreads 只保证同一进程之内，同一时刻的各个线程的 id 不同；不能保证同一进程先后多个线程具有不同的 id，更不要说一台机器上多个进程之间的 id 唯一性了。")]),t._v(" "),s("p",[t._v("例如下面这段代码中先后两个线程的标识符是相同的：")]),t._v(" "),s("div",{staticClass:"language-CPP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pthread_t t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pthread_create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("threadFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%lx\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pthread_join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pthread_create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("threadFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%lx\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pthread_join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./a.out\n7fad11787700\n7fad11787700\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("因此，pthread_t 并不适合用作程序中对线程的标识符。")]),t._v(" "),s("p",[s("strong",[t._v("在Linux上，作者建议使用gettid系统调用的返回值作为线程id，这么做的好处有：")])]),t._v(" "),s("ul",[s("li",[t._v("它的类型是 pid_t，其值通常是一个小整数 13，便于在日志中输出。")]),t._v(" "),s("li",[t._v("在现代 Linux 中，它直接表示内核的任务调度id，因此在 /proc 文件系统中可以轻易找到对应项：/proc/tid或 /prod/pid/task/tid。")]),t._v(" "),s("li",[t._v("在其他系统工具中也容易定位到具体某一个线程，例如在top中我们可以按线程列出任务，然后找出CPU 使用率最高的线程 id，再根据程序日志判断到底哪一个线程在耗用 CPU。")]),t._v(" "),s("li",[t._v("任何时刻都是全局唯一的，并且由于 Linux 分配新 pid 采用递增轮回办法，短时间内启动的多个线程也会具有不同的线程 id。")]),t._v(" "),s("li",[t._v("0 是非法值，因为操作系统第一个进程 init 的 pid 是 1。")])]),t._v(" "),s("p",[t._v("但是 glibc 并没有封装这个系统调用，需要我们自己实现。")]),t._v(" "),s("p",[t._v("作者封装的 gettid 的方法如下：")]),t._v(" "),s("p",[t._v("muduo::CurrentThread::tid() 采取的办法是用 __thread 变量来缓存 gettid 的返回值，这样只有在本线程第一次调用的时候才进行系统调用，以后都是直接从 thread local 缓存的线程 id 拿到结果，效率无忧。")]),t._v(" "),s("p",[t._v("未完待续。。。")])])}),[],!1,null,null,null);s.default=e.exports}}]);