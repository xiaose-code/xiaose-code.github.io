(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{404:function(v,_,t){"use strict";t.r(_);var s=t(4),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"硬件结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#硬件结构"}},[v._v("#")]),v._v(" 硬件结构")]),v._v(" "),_("h2",{attrs:{id:"cpu-是如何执行程序的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-是如何执行程序的"}},[v._v("#")]),v._v(" CPU 是如何执行程序的？")]),v._v(" "),_("p",[v._v("问题：")]),v._v(" "),_("ol",[_("li",[v._v("代码写了那么多，你知道 "),_("code",[v._v("a = 1 + 2")]),v._v(" 这条代码是怎么被 CPU 执行的吗？")]),v._v(" "),_("li",[v._v("软件用了那么多，你知道软件的 32 位和 64 位之间的区别吗？32 位的操作系统可以运行在 64 位的电脑上吗？64 位的操作系统可以运行在 32 位的电脑上吗？如果不行，原因是什么？")]),v._v(" "),_("li",[v._v("CPU 看了那么多，我们都知道 CPU 通常分为 32 位和 64 位，你知道 64 位相比 32 位 CPU 的优势在哪吗？64 位 CPU 的计算性能一定比 32 位 CPU 高很多吗？")])]),v._v(" "),_("h3",{attrs:{id:"图灵机的工作方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图灵机的工作方式"}},[v._v("#")]),v._v(" 图灵机的工作方式")]),v._v(" "),_("p",[v._v("图灵的"),_("strong",[v._v("基本思想")]),v._v("是用机器来模拟人们用纸笔进行数学运算的过程，而且还定义了计算机由哪些部分组成，程序又是如何执行的。")]),v._v(" "),_("p",[v._v("图灵机的"),_("strong",[v._v("基本组成")]),v._v("如下：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("有一条「纸带」，纸带由一个个连续的格子组成，每个格子可以写入字符，纸带就好比内存，而纸带上的格子的字符就好比内存中的数据或程序；")])]),v._v(" "),_("li",[_("p",[v._v("有一个「读写头」，读写头可以读取纸带上任意格子的字符，也可以把字符写入到纸带的格子；")])]),v._v(" "),_("li",[_("p",[v._v("读写头上有一些部件，比如存储单元、控制单元以及运算单元：")]),v._v(" "),_("p",[v._v("1、存储单元用于存放数据；")]),v._v(" "),_("p",[v._v("2、控制单元用于识别字符是数据还是指令，以及控制程序的流程等；")]),v._v(" "),_("p",[v._v("3、运算单元用于执行运算指令；")])])]),v._v(" "),_("p",[v._v("图灵机"),_("strong",[v._v("主要功能")]),v._v("就是：")]),v._v(" "),_("ol",[_("li",[v._v("读取纸带格子中的内容，然后交给控制单元识别字符是数字还是运算符指令，（读取 -> 识别）")]),v._v(" "),_("li",[v._v("如果是数字则存入到图灵机状态中，")]),v._v(" "),_("li",[v._v("如果是运算符，则通知运算符单元读取状态中的数值进行计算，计算结果最终返回给读写头，")]),v._v(" "),_("li",[v._v("读写头把结果写入到纸带的格子中。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/image.bssgawjqk5k.webp",alt:"image"}})]),v._v(" "),_("h3",{attrs:{id:"冯诺依曼模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#冯诺依曼模型"}},[v._v("#")]),v._v(" 冯诺依曼模型")]),v._v(" "),_("p",[v._v("定义计算机基本结构为 5 个部分，分别是"),_("strong",[v._v("运算器、控制器、存储器、输入设备、输出设备")]),v._v("，这 5 个部分也被称为"),_("strong",[v._v("冯诺依曼模型")]),v._v("。")]),v._v(" "),_("p",[v._v("运算器、控制器是在中央处理器(CPU)里的，存储器就我们常见的内存，输入输出设备则是计算机外接的设备，比如键盘就是输入设备，显示器就是输出设备。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/image.3r89v0vvsyq0.webp",alt:"image"}})]),v._v(" "),_("p",[v._v("存储单元和输入输出设备要与中央处理器打交道的话，离不开总线。所以，它们之间的关系如下图：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/image.6j8evo24uqw0.webp",alt:"image"}})]),v._v(" "),_("h4",{attrs:{id:"内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[v._v("#")]),v._v(" 内存")]),v._v(" "),_("p",[v._v("我们的程序和数据都是存储在内存，存储的区域是线性的。")]),v._v(" "),_("p",[v._v("在计算机数据存储中，存储数据的基本单位是"),_("strong",[v._v("字节（"),_("em",[v._v("byte")]),v._v("）")]),v._v("，1 字节等于 8 位（8 bit）。每一个字节都对应一个内存地址。")]),v._v(" "),_("p",[v._v("内存的地址是从 0 开始编号的，然后自增排列，最后一个地址为内存总字节数 - 1，这种结构好似我们程序里的数组，所以内存的读写任何一个数据的速度都是一样的。")]),v._v(" "),_("h4",{attrs:{id:"中央处理器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中央处理器"}},[v._v("#")]),v._v(" 中央处理器")]),v._v(" "),_("p",[v._v("中央处理器也就是我们常说的 CPU。")]),v._v(" "),_("p",[v._v("32 位和 64 位 CPU 最主要区别在于一次能计算多少字节数据：")]),v._v(" "),_("ul",[_("li",[v._v("32 位 CPU 一次可以计算 4 个字节；（32/8，一字节 8 位）")]),v._v(" "),_("li",[v._v("64 位 CPU 一次可以计算 8 个字节；（64/8)")])]),v._v(" "),_("p",[v._v("这里的 32 位和 64 位，通常称为 "),_("strong",[v._v("CPU 的位宽")]),v._v("，代表的是 CPU 一次可以计算（运算）的数据量。")]),v._v(" "),_("p",[v._v("CPU 内部还有一些组件，常见的有"),_("strong",[v._v("寄存器、控制单元和逻辑运算单元")]),v._v("等。")]),v._v(" "),_("ol",[_("li",[v._v("控制单元负责控制 CPU 工作，")]),v._v(" "),_("li",[v._v("逻辑运算单元负责计算，")]),v._v(" "),_("li",[v._v("而寄存器可以分为多种类，每种寄存器的功能又不尽相同。主要作用是存储计算时的数据。")])]),v._v(" "),_("p",[_("em",[v._v("为什么有了内存还需要寄存器？")])]),v._v(" "),_("p",[v._v("因为内存离 CPU 太远了，而寄存器就在 CPU 里，还紧挨着控制单元和逻辑运算单元，自然计算时速度会很快。")]),v._v(" "),_("p",[_("em",[v._v("常见的寄存器种类")]),v._v("：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("通用寄存器")]),v._v("，用来存放需要进行运算的数据，比如需要进行加和运算的两个数据。")]),v._v(" "),_("li",[_("strong",[v._v("程序计数器")]),v._v("，用来存储 CPU 下一条要执行指令「所在的内存地址」，注意不是存储了下一条要执行的指令，此时指令还在内存中，程序计数器只是存储了下一条指令「的地址」。")]),v._v(" "),_("li",[_("strong",[v._v("指令寄存器")]),v._v("，用来存放当前正在执行的指令，也就是指令本身，指令被执行完成之前，指令都存储在这里")])]),v._v(" "),_("h4",{attrs:{id:"总线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总线"}},[v._v("#")]),v._v(" 总线")]),v._v(" "),_("p",[v._v("总线是用来通信的，在 CPU 和内存以及其他设备之间，总线可分为 3 种：")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("地址总线")]),v._v("，用于指定 CPU 将要操作的内存地址；")]),v._v(" "),_("li",[_("strong",[v._v("数据总线")]),v._v("，用于读写内存的数据；")]),v._v(" "),_("li",[_("strong",[v._v("控制总线")]),v._v("，用于发送和接收信号，比如中断、设备复位等信号，CPU 收到信号后自然进行响应，这时也需要控制总线；")])]),v._v(" "),_("p",[_("em",[v._v("当 CPU 要读写内存数据的时候，是如何通过总线的？")])]),v._v(" "),_("ol",[_("li",[v._v("首先要通过「地址总线」来指定内存的地址；")]),v._v(" "),_("li",[v._v("然后通过「控制总线」控制是读或写命令；")]),v._v(" "),_("li",[v._v("最后通过「数据总线」来传输数据；")])]),v._v(" "),_("p",[v._v("地址总线 -> 控制总线 -> 数据总线")]),v._v(" "),_("h4",{attrs:{id:"输入、输出设备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#输入、输出设备"}},[v._v("#")]),v._v(" 输入、输出设备")]),v._v(" "),_("p",[v._v("输入设备向计算机输入数据，计算机经过计算后，（运算器）把数据输出给输出设备。期间，如果输入设备是键盘，按下按键时是需要和 CPU 进行交互的，这时就需要用到控制总线了。")]),v._v(" "),_("h3",{attrs:{id:"线路位宽与-cpu-位宽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线路位宽与-cpu-位宽"}},[v._v("#")]),v._v(" 线路位宽与 CPU 位宽")]),v._v(" "),_("blockquote",[_("p",[v._v("线路位宽")])]),v._v(" "),_("p",[_("em",[v._v("数据是如何通过线路传输的呢？")])]),v._v(" "),_("p",[v._v("其实是通过操作电压，低电压表示 0，高压电压则表示 1。")]),v._v(" "),_("p",[v._v("如果构造了高低高这样的信号，其实就是 101 二进制数据，十进制则表示 5，如果只有一条线路，就意味着每次只能传递 1 bit 的数据，即 0 或 1，那么传输 101 这个数据，就需要 3 次才能传输完成，这样的效率非常低。")]),v._v(" "),_("ul",[_("li",[v._v("这样一位一位传输的方式，称为"),_("strong",[v._v("串行")]),v._v("，下一个 bit 必须等待上一个 bit 传输完成才能进行传输。")]),v._v(" "),_("li",[v._v("当然，想一次多传一些数据，增加线路即可，这时数据就可以"),_("strong",[v._v("并行")]),v._v("传输。")])]),v._v(" "),_("p",[_("strong",[v._v("为了避免低效率的串行传输的方式，线路的位宽最好一次就能访问到所有的内存地址。")])]),v._v(" "),_("p",[v._v("CPU 想要操作「内存地址」就需要「地址总线」：")]),v._v(" "),_("ul",[_("li",[v._v("如果地址总线只有 1 条，那每次只能表示 「0 或 1」这两种地址，所以 CPU 能操作的内存地址最大数量为 2（2^1）个（注意，不要理解成同时能操作 2 个内存地址）；")]),v._v(" "),_("li",[v._v("如果地址总线有 2 条，那么能表示 00、01、10、11 这四种地址，所以 CPU 能操作的内存地址最大数量为 4（2^2）个。")])]),v._v(" "),_("p",[v._v("那么，想要 CPU 操作 4G 大的内存，那么就需要 32 条地址总线，因为 "),_("code",[v._v("2 ^ 32 = 4G")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[v._v("CPU 位宽")])]),v._v(" "),_("p",[_("strong",[v._v("CPU 的位宽最好不要小于线路位宽")]),v._v("，比如 32 位 CPU 控制 40 位宽的地址总线和数据总线的话，工作起来就会非常复杂且麻烦，所以 32 位的 CPU 最好和 32 位宽的线路搭配，因为 32 位 CPU 一次最多只能操作 32 位宽的地址总线和数据总线。")]),v._v(" "),_("p",[_("em",[v._v("为什么 64 位 CPU 性能不一定就比 32 位 CPU 高很多？")])]),v._v(" "),_("p",[v._v("因为很少应用需要算超过 32 位的数字，")]),v._v(" "),_("p",[v._v("所以"),_("strong",[v._v("如果计算的数额不超过 32 位数字的情况下，32 位和 64 位 CPU 之间没什么区别的，只有当计算超过 32 位数字的情况下，64 位的优势才能体现出来")]),v._v("。")]),v._v(" "),_("h3",{attrs:{id:"程序执行的基本过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#程序执行的基本过程"}},[v._v("#")]),v._v(" 程序执行的基本过程")]),v._v(" "),_("p",[v._v("程序实际上是一条一条指令，所以程序的运行过程就是把每一条指令一步一步的执行起来，负责执行指令的就是 CPU 了。(寄存器)")]),v._v(" "),_("p",[v._v("那 "),_("strong",[v._v("CPU 执行程序的过程")]),v._v("如下：")]),v._v(" "),_("ol",[_("li",[v._v("第一步，\n"),_("ul",[_("li",[v._v("CPU 读取「程序计数器」的值，这个值是指令的内存地址，")]),v._v(" "),_("li",[v._v("然后 CPU 的【控制单元】操作「地址总线」指定需要访问的内存地址，")]),v._v(" "),_("li",[v._v("接着通知【内存设备】准备数据，数据准备好后通过「数据总线」将指令数据传给 CPU，")]),v._v(" "),_("li",[v._v("CPU 收到内存传来的数据后，将这个指令数据存入到「指令寄存器」。")])])]),v._v(" "),_("li",[v._v("第二步，\n"),_("ul",[_("li",[v._v("「程序计数器」的值自增，表示指向下一条指令。")]),v._v(" "),_("li",[v._v("这个自增的大小，由 CPU 的位宽决定，比如 32 位的 CPU，指令是 4 个字节，需要 4 个内存地址存放，因此「程序计数器」的值会自增 4；")])])]),v._v(" "),_("li",[v._v("第三步，\n"),_("ul",[_("li",[v._v("CPU 分析「指令寄存器」中的指令，确定指令的类型和参数，")]),v._v(" "),_("li",[v._v("如果是计算类型的指令，就把指令交给「逻辑运算单元」运算；")]),v._v(" "),_("li",[v._v("如果是存储类型的指令，则交由「控制单元」执行；")])])])]),v._v(" "),_("p",[_("em",[v._v("简单总结一下就是")])]),v._v(" "),_("p",[v._v("一个程序执行的时候，CPU 会根据程序计数器里的内存地址，从内存里面把需要执行的指令读取到指令寄存器里面执行，然后根据指令长度自增，开始顺序读取下一条指令。")]),v._v(" "),_("p",[v._v("CPU 从程序计数器读取指令、到执行、再到下一条指令，这个过程会不断循环，直到程序执行结束，这个不断循环（执行程序）的过程被称为 "),_("strong",[v._v("CPU 的指令周期")]),v._v("。")]),v._v(" "),_("h3",{attrs:{id:"a-1-2-执行具体过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#a-1-2-执行具体过程"}},[v._v("#")]),v._v(" a = 1 + 2 执行具体过程")]),v._v(" "),_("p",[v._v("CPU 是不认识 "),_("code",[v._v("a = 1 + 2")]),v._v(" 这个字符串，这些字符串只是方便我们程序员认识，要想这段程序能跑起来，还需要把整个程序翻译成"),_("strong",[v._v("汇编语言")]),v._v("的程序，这个过程称为编译成汇编代码。")]),v._v(" "),_("p",[v._v("针对汇编代码，我们还需要用汇编器翻译成机器码，这些机器码由 0 和 1 组成的机器语言，这一条条机器码，就是一条条的"),_("strong",[v._v("计算机指令")]),v._v("，这个才是 CPU 能够真正认识的东西。")]),v._v(" "),_("p",[_("em",[v._v("下面来看看 "),_("code",[v._v("a = 1 + 2")]),v._v(" 在 32 位 CPU 的执行过程。")])]),v._v(" "),_("p",[v._v("程序编译过程中，编译器通过分析代码，发现 1 和 2 是数据，于是程序运行时，内存会有个专门的区域来存放这些数据，这个区域就是「"),_("strong",[v._v("数据段")]),v._v("」。如下图，数据 1 和 2 的区域位置：")]),v._v(" "),_("ul",[_("li",[v._v("数据 1 被存放到 0x200 位置；")]),v._v(" "),_("li",[v._v("数据 2 被存放到 0x204 位置；")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/image.4l942uq5g0i0.webp",alt:"image"}})]),v._v(" "),_("p",[v._v("编译器会把 "),_("code",[v._v("a = 1 + 2")]),v._v(" 翻译成 4 条指令，存放到正文段中。如图，这 4 条指令被存放到了 0x100 ~ 0x10c 的区域中：")]),v._v(" "),_("ol",[_("li",[v._v("0x100 的内容是 "),_("code",[v._v("load")]),v._v(" 指令将 0x200 地址中的数据 1 装入到(指令)寄存器 "),_("code",[v._v("R0")]),v._v("；")]),v._v(" "),_("li",[v._v("0x104 的内容是 "),_("code",[v._v("load")]),v._v(" 指令将 0x204 地址中的数据 2 装入到寄存器 "),_("code",[v._v("R1")]),v._v("；")]),v._v(" "),_("li",[v._v("0x108 的内容是 "),_("code",[v._v("add")]),v._v(" 指令将寄存器 "),_("code",[v._v("R0")]),v._v(" 和 "),_("code",[v._v("R1")]),v._v(" 的数据相加，并把结果存放到寄存器 "),_("code",[v._v("R2")]),v._v("；")]),v._v(" "),_("li",[v._v("0x10c 的内容是 "),_("code",[v._v("store")]),v._v(" 指令将寄存器 "),_("code",[v._v("R2")]),v._v(" 中的数据"),_("strong",[v._v("存")]),v._v("回数据段中的 0x208 地址中，这个地址也就是变量 "),_("code",[v._v("a")]),v._v(" 内存中的地址；")])]),v._v(" "),_("blockquote",[_("p",[v._v("简单总结就是："),_("code",[v._v("add")]),v._v(" 指令将寄存器 "),_("code",[v._v("R0")]),v._v(" 和 "),_("code",[v._v("R1")]),v._v(" 的数据相加，并把结果放入到 "),_("code",[v._v("R2")]),v._v("，从而翻译成机器码")])]),v._v(" "),_("p",[v._v("编译完成后，具体执行程序的时候，【程序计数器】会被设置为 0x100 地址，然后依次执行这 4 条指令。（编译 -> 执行）")]),v._v(" "),_("p",[_("em",[v._v("不难发现上面的例子中，地址之间都是相隔 4 个字节")])]),v._v(" "),_("ul",[_("li",[v._v("指令间隔")])]),v._v(" "),_("p",[v._v("这是因为上面的例子是在 32 位 CPU 执行的，因此一条指令是占 32 位大小，所以你会发现每条指令间隔 4 个字节。")]),v._v(" "),_("ul",[_("li",[v._v("数据间隔")])]),v._v(" "),_("p",[v._v("而数据的大小是根据你在程序中指定的变量类型，比如 "),_("code",[v._v("int")]),v._v(" 类型的数据则占 4 个字节，"),_("code",[v._v("char")]),v._v(" 类型的数据则占 1 个字节")]),v._v(" "),_("blockquote",[_("p",[_("code",[v._v("string")]),v._v(" 类型的话，在 UTF-8 编码下，一个英文字母通常占用 1 个字节，一个汉字通常占用 3 个字节。")])]),v._v(" "),_("h4",{attrs:{id:"指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[v._v("#")]),v._v(" 指令")]),v._v(" "),_("p",[v._v("指令的内容是一串二进制数字的机器码，每条指令都有对应的机器码，CPU 通过解析机器码来知道指令的内容。")]),v._v(" "),_("p",[v._v("不同的 CPU 有不同的指令集，也就是对应着不同的汇编语言和不同的机器码。")]),v._v(" "),_("p",[_("em",[v._v("最简单的 MIPS 指集")])]),v._v(" "),_("p",[v._v("MIPS 的指令是一个 32 位的整数。")]),v._v(" "),_("ul",[_("li",[v._v("高 6 位代表着操作码，表示这条指令是一条什么样的指令，")]),v._v(" "),_("li",[v._v("剩下的 26 位不同指令类型所表示的内容也就不相同，")]),v._v(" "),_("li",[v._v("主要有三种类型 R、I 和 J。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/image.34364bhhb660.webp",alt:"image"}})]),v._v(" "),_("p",[v._v("三种类型的含义：")]),v._v(" "),_("ul",[_("li",[_("em",[v._v("R 指令")]),v._v("，用在"),_("strong",[v._v("算术和逻辑操作")]),v._v("，里面有读取和写入数据的寄存器地址。如果是逻辑位移操作，后面还有位移操作的「位移量」，而最后的「功能码」则是再前面的操作码不够的时候，扩展操作码来表示对应的具体指令的；")]),v._v(" "),_("li",[_("em",[v._v("I 指令")]),v._v("，用在"),_("strong",[v._v("数据传输、条件分支")]),v._v("等。这个类型的指令，就没有了位移量和功能码，也没有了第三个寄存器，而是把这三部分直接合并成了一个地址值或一个常数；")]),v._v(" "),_("li",[_("em",[v._v("J 指令")]),v._v("，用在"),_("strong",[v._v("跳转")]),v._v("，高 6 位之外的 26 位都是一个跳转后的地址；")])]),v._v(" "),_("p",[v._v("编译器在编译程序的时候，会构造指令，这个过程叫做指令的"),_("strong",[v._v("编码")]),v._v("。")]),v._v(" "),_("p",[v._v("CPU 执行程序的时候，就会解析指令，这个过程叫作指令的"),_("strong",[v._v("解码")]),v._v("。")]),v._v(" "),_("p",[_("em",[v._v("执行指令的方式")])]),v._v(" "),_("p",[v._v("大多数 CPU 都使用来【流水线】的方式来执行指令，所谓的流水线就是【把一个任务拆分成多个小任务】，于是一条指令通常分为 4 个阶段，称为 4 级流水线。")]),v._v(" "),_("p",[v._v("四个阶段的具体含义：")]),v._v(" "),_("ol",[_("li",[v._v("CPU 通过程序计数器读取对应内存地址的指令，这个部分称为 "),_("strong",[v._v("Fetch（取得指令）")]),v._v("；")]),v._v(" "),_("li",[v._v("CPU 对指令进行解码，这个部分称为 "),_("strong",[v._v("Decode（指令译码）")]),v._v("；")]),v._v(" "),_("li",[v._v("CPU 执行指令，这个部分称为 "),_("strong",[v._v("Execution（执行指令）")]),v._v("；")]),v._v(" "),_("li",[v._v("CPU 将计算结果存回寄存器或者将寄存器的值存入内存，这个部分称为 "),_("strong",[v._v("Store（数据回写）")]),v._v("；")])]),v._v(" "),_("p",[v._v("上面这 4 个阶段，我们称为"),_("strong",[v._v("指令周期（"),_("em",[v._v("Instrution Cycle")]),v._v("）")]),v._v("，CPU 的工作就是一个周期接着一个周期，周而复始。")]),v._v(" "),_("h4",{attrs:{id:"指令的类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指令的类型"}},[v._v("#")]),v._v(" 指令的类型")]),v._v(" "),_("p",[v._v("指令从功能角度划分，可以分为 5 大类：")]),v._v(" "),_("ol",[_("li",[_("em",[v._v("数据传输类型的指令")]),v._v("，比如 "),_("code",[v._v("store/load")]),v._v(" 是寄存器与内存间数据传输的指令，"),_("code",[v._v("mov")]),v._v(" 是将一个内存地址的数据移动到另一个内存地址的指令；")]),v._v(" "),_("li",[_("em",[v._v("运算类型的指令")]),v._v("，比如加减乘除、位运算、比较大小等等，它们最多只能处理两个寄存器中的数据；")]),v._v(" "),_("li",[_("em",[v._v("跳转类型的指令")]),v._v("，通过修改程序计数器的值来达到跳转执行指令的过程，比如编程中常见的 "),_("code",[v._v("if-else")]),v._v("、"),_("code",[v._v("switch-case")]),v._v("、函数调用等。")]),v._v(" "),_("li",[_("em",[v._v("信号类型的指令")]),v._v("，比如发生中断的指令 "),_("code",[v._v("trap")]),v._v("；")]),v._v(" "),_("li",[_("em",[v._v("闲置类型的指令")]),v._v("，比如指令 "),_("code",[v._v("nop")]),v._v("，执行后 CPU 会空转一个周期")])]),v._v(" "),_("p",[v._v("传输、运算、跳转、信号、闲置")]),v._v(" "),_("h4",{attrs:{id:"指令的执行速度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指令的执行速度"}},[v._v("#")]),v._v(" 指令的执行速度")]),v._v(" "),_("p",[v._v("CPU 的硬件参数都会有 "),_("code",[v._v("GHz")]),v._v(" 这个参数（主频），比如一个 1 GHz 的 CPU，指的是时钟频率是 1 G，代表着 1 秒会产生 1G 次数的脉冲信号，每一次脉冲信号高低电平的转换就是一个周期，称为"),_("strong",[v._v("时钟周期")]),v._v("。")]),v._v(" "),_("p",[v._v("对于 CPU 来说，在一个时钟周期内，CPU 仅能完成一个最基本的动作，时钟频率越高，时钟周期就越短，工作速度也就越快。(v=f/T)")]),v._v(" "),_("p",[_("em",[v._v("一个时钟周期一定能执行完一条指令吗？")])]),v._v(" "),_("p",[v._v("答案是不一定的，大多数指令不能在一个时钟周期完成，通常需要若干个时钟周期。不同的指令需要的时钟周期是不同的，加法和乘法都对应着一条 CPU 指令，但是乘法需要的时钟周期就要比加法多。")]),v._v(" "),_("p",[_("em",[v._v("如何让程序跑的更快")]),v._v("？")]),v._v(" "),_("p",[v._v("程序的 CPU 执行时间 越少 程序就跑得 越快。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/image.686f6oen5240.webp",alt:"image"}})]),v._v(" "),_("p",[v._v("主频越高说明 CPU 的工作速度就越快，比如我手头上的电脑的 CPU 是 2.4 GHz 四核 Intel Core i5，这里的 2.4 GHz 就是电脑的主频，时钟周期时间就是 1/2.4G。")]),v._v(" "),_("p",[_("strong",[v._v("CPU 时钟周期数 = 指令数 x 每条指令的平均时钟周期数（"),_("em",[v._v("Cycles Per Instruction")]),v._v("，简称 "),_("code",[v._v("CPI")]),v._v("）")])]),v._v(" "),_("p",[v._v("因此，要想程序跑的更快，优化这三者即可：")]),v._v(" "),_("ul",[_("li",[_("em",[v._v("指令数")]),v._v("，表示执行程序所需要多少条指令，以及哪些指令。需优化编译器。")]),v._v(" "),_("li",[_("em",[v._v("每条指令的平均时钟周期数 CPI")]),v._v("，表示一条指令需要多少个时钟周期数，依赖于流水线方式；")]),v._v(" "),_("li",[_("em",[v._v("时钟周期时间")]),v._v("，表示计算机主频，取决于计算机硬件。")])]),v._v(" "),_("h3",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("p",[v._v("冯诺依曼模型")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/%E5%86%AF%E8%AF%BA%E4%BE%9D%E6%9B%BC%E6%A8%A1%E5%9E%8B.7idyymywb9g0.png",alt:"冯诺依曼模型"}})]),v._v(" "),_("blockquote",[_("p",[v._v("你知道软件的 32 位和 64 位之间的区别吗？再来 32 位的操作系统可以运行在 64 位的电脑上吗？64 位的操作系统可以运行在 32 位的电脑上吗？如果不行，原因是什么？")])]),v._v(" "),_("p",[v._v("64 位和 32 位软件，实际上代表指令是 64 位还是 32 位的：")]),v._v(" "),_("ul",[_("li",[v._v("如果 32 位指令在 64 位机器上执行，需要一套兼容机制，就可以做到兼容运行了。但是"),_("strong",[v._v("如果 64 位指令在 32 位机器上执行，就比较困难了，因为 32 位的寄存器存不下 64 位的指令")]),v._v("；")]),v._v(" "),_("li",[v._v("操作系统其实也是一种程序，我们也会看到操作系统会分成 32 位操作系统、64 位操作系统，其代表意义就是操作系统中程序的指令是多少位，比如 64 位操作系统，指令也就是 64 位，因此不能装在 32 位机器上。")])]),v._v(" "),_("p",[v._v("总之，硬件的 64 位和 32 位指的是 CPU 的位宽，软件的 64 位和 32 位指的是指令的位宽")]),v._v(" "),_("blockquote",[_("p",[v._v("64 位相比 32 位 CPU 的优势在哪吗？64 位 CPU 的计算性能一定比 32 位 CPU 高很多吗？")])]),v._v(" "),_("p",[v._v("64 位相比 32 位 CPU 的优势主要体现在两个方面：")]),v._v(" "),_("ul",[_("li",[v._v("64 位 CPU 可以一次计算超过 32 位的数字，而 32 位 CPU 如果要计算超过 32 位的数字，要分多步骤进行计算，效率就没那么高，但是大部分应用程序很少会计算那么大的数字，所以"),_("strong",[v._v("只有运算大数字的时候，64 位 CPU 的优势才能体现出来，否则和 32 位 CPU 的计算性能相差不大")]),v._v("。")]),v._v(" "),_("li",[v._v("通常来说 64 位 CPU 的地址总线是 48 位，而 32 位 CPU 的地址总线是 32 位，所以 64 位 CPU 可以"),_("strong",[v._v("寻址更大的物理内存空间")]),v._v("。如果一个 32 位 CPU 的地址总线是 32 位，那么该 CPU 最大寻址能力是 4G，即使你加了 8G 大小的物理内存，也还是只能寻址到 4G 大小的地址，而如果一个 64 位 CPU 的地址总线是 48 位，那么该 CPU 最大寻址能力是 "),_("code",[v._v("2^48")]),v._v("，远超于 32 位 CPU 最大寻址能力。")])]),v._v(" "),_("p",[_("em",[v._v("为什么通常说 64 位 CPU 的地址总线是 48 位的？")])]),v._v(" "),_("p",[v._v("这涉及到物理寻址和虚拟内存的设计。实际上，64 位 CPU 的地址总线并不是固定为 48 位，而是有一定的范围。")]),v._v(" "),_("h2",{attrs:{id:"磁盘比内存慢几万倍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#磁盘比内存慢几万倍"}},[v._v("#")]),v._v(" 磁盘比内存慢几万倍？")]),v._v(" "),_("blockquote",[_("p",[v._v("如果大家自己想组装电脑的话，肯定需要购买一个 CPU 和存储器方面的设备。")])]),v._v(" "),_("p",[v._v("相信大家都知道内存和硬盘都属于计算机的存储设备，断电后内存的数据是会丢失的，而硬盘则不会，因为硬盘是持久化存储设备，同时也是一个 I/O 设备。")]),v._v(" "),_("p",[v._v("但其实 CPU 内部也有存储数据的组件，比如"),_("strong",[v._v("寄存器、CPU L1/L2/L3 Cache")]),v._v(" 也都是属于存储设备，只不过它们能存储的数据非常小。")]),v._v(" "),_("p",[_("em",[v._v("那机械硬盘、固态硬盘、内存这三个存储器，到底和 CPU L1 Cache 相比速度差多少倍呢？")])]),v._v(" "),_("h3",{attrs:{id:"存储器的层次结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储器的层次结构"}},[v._v("#")]),v._v(" 存储器的层次结构")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/%E5%AD%98%E5%82%A8%E5%99%A8%E7%9A%84%E5%B1%82%E6%AC%A1%E7%BB%93%E6%9E%84.6j1846qj8bk0.webp",alt:"存储器的层次结构"}})]),v._v(" "),_("p",[_("strong",[v._v("寄存器")]),v._v("，处理速度是最快的，但是能存储的数据也是最少的。")]),v._v(" "),_("p",[_("strong",[v._v("CPU Cache")]),v._v("，中文称为 CPU 高速缓存，处理速度相比寄存器慢了一点，但是能存储的数据也稍微多了一些。")]),v._v(" "),_("p",[v._v("L1 Cache 通常分成「数据缓存」和「指令缓存」，L1 是距离 CPU 最近的，因此它比 L2、L3 的读写速度都快、存储空间都小。")]),v._v(" "),_("p",[_("strong",[v._v("对于存储器，它的速度越快、能耗会越高、而且材料的成本也是越贵的，以至于速度快的存储器的容量都比较小。")])]),v._v(" "),_("blockquote",[_("p",[v._v("CPU 里的寄存器和 Cache，是整个计算机存储器中价格最贵的")])]),v._v(" "),_("h4",{attrs:{id:"寄存器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#寄存器"}},[v._v("#")]),v._v(" 寄存器")]),v._v(" "),_("p",[v._v("寄存器的数量通常在几十到几百之间，每个寄存器可以用来存储一定的字节（byte）的数据。比如：")]),v._v(" "),_("ul",[_("li",[v._v("32 位 CPU 中大多数寄存器可以存储 "),_("code",[v._v("4")]),v._v(" 个字节；")]),v._v(" "),_("li",[v._v("64 位 CPU 中大多数寄存器可以存储 "),_("code",[v._v("8")]),v._v(" 个字节。")])]),v._v(" "),_("p",[v._v("如果寄存器的速度太慢，则会拉长指令的处理周期，从而给用户的感觉，就是电脑「很慢」。")]),v._v(" "),_("h4",{attrs:{id:"cpu-cache"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cpu-cache"}},[v._v("#")]),v._v(" CPU Cache")]),v._v(" "),_("p",[v._v("CPU Cache 用的是一种叫 **SRAM（"),_("em",[v._v("Static Random-Access Memory")]),v._v("，静态随机存储器）**的芯片。")]),v._v(" "),_("p",[v._v("SRAM 之所以叫「静态」存储器，是因为只要有电，数据就可以保持存在，而一旦断电，数据就会丢失了。")]),v._v(" "),_("h4",{attrs:{id:"内存-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存-2"}},[v._v("#")]),v._v(" 内存")]),v._v(" "),_("p",[v._v("内存用的芯片和 CPU Cache 有所不同，它使用的是一种叫作 **DRAM（"),_("em",[v._v("Dynamic Random Access Memory")]),v._v("，动态随机存取存储器）**的芯片。")]),v._v(" "),_("p",[v._v("相比 SRAM，DRAM 的密度更高，功耗更低，有更大的容量，而且造价比 SRAM 芯片便宜很多。")]),v._v(" "),_("p",[v._v("因为数据会被存储在电容里，电容会不断漏电，所以需要「定时刷新」电容，才能保证数据不会被丢失，这就是 DRAM 之所以被称为「动态」存储器的原因")]),v._v(" "),_("h4",{attrs:{id:"ssd-hdd-硬盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssd-hdd-硬盘"}},[v._v("#")]),v._v(" SSD/HDD 硬盘")]),v._v(" "),_("p",[v._v("SSD（"),_("em",[v._v("Solid-state disk")]),v._v("）就是我们常说的"),_("strong",[v._v("固态硬盘")]),v._v("，结构和内存类似，但是它相比内存的优点是断电后数据还是存在的，而内存、寄存器、高速缓存断电后数据都会丢失。内存的读写速度比 SSD 大概快 "),_("code",[v._v("10~1000")]),v._v(" 倍。")]),v._v(" "),_("p",[v._v("当然，还有一款传统的硬盘，也就是"),_("strong",[v._v("机械硬盘")]),v._v("（"),_("em",[v._v("Hard Disk Drive, HDD")]),v._v("），它是通过物理读写的方式来访问数据的，因此它访问速度是非常慢的，它的速度比内存慢 "),_("code",[v._v("10W")]),v._v(" 倍左右。")]),v._v(" "),_("blockquote",[_("p",[v._v("由于 SSD 的价格快接近机械硬盘了，因此机械硬盘已经逐渐被 SSD 替代了。")])]),v._v(" "),_("h3",{attrs:{id:"存储器的层次关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储器的层次关系"}},[v._v("#")]),v._v(" 存储器的层次关系")]),v._v(" "),_("h2",{attrs:{id:"虚拟地址与物理地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟地址与物理地址"}},[v._v("#")]),v._v(" 虚拟地址与物理地址")]),v._v(" "),_("ol",[_("li",[v._v("虚拟地址（Virtual Address）：虚拟地址是"),_("strong",[v._v("由 CPU 生成的用于访问内存的地址空间")]),v._v("，它是在程序运行时由操作系统提供给每个进程或线程的抽象地址。虚拟地址空间是每个进程独立的，使得每个进程可以认为自己独占整个内存空间，不受其他进程的影响。虚拟地址空间可以比实际的物理内存大小大得多，这样就允许每个进程使用的内存超过实际可用的物理内存。")]),v._v(" "),_("li",[v._v("物理地址（Physical Address）：物理地址是"),_("strong",[v._v("内存中实际存储数据的地址")]),v._v("，是 CPU 通过地址总线直接访问内存单元的地址。它对应着计算机中实际的硬件内存空间。每个物理地址都与内存模块上的特定存储单元（如 RAM）相关联。")])]),v._v(" "),_("p",[v._v("在计算机系统中，虚拟地址与物理地址之间的映射是由操作系统的"),_("strong",[v._v("内存管理单元")]),v._v("（MMU，Memory Management Unit）来实现的。MMU 将虚拟地址映射到物理地址，使得程序访问虚拟地址时，可以被正确地映射到对应的物理地址，从而实现正确的内存访问。")]),v._v(" "),_("ul",[_("li",[v._v("虚拟地址和物理地址的使用有助于提高计算机系统的性能和安全性，使得每个进程可以独立使用自己的地址空间，且不受其他进程的影响。")]),v._v(" "),_("li",[v._v("同时，操作系统可以使用虚拟地址空间来提供内存隔离和保护机制，从而增强计算机系统的安全性和稳定性。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);