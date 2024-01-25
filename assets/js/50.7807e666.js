(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{375:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_206-反转链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_206-反转链表"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[s._v("206. 反转链表"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目：")]),s._v(" "),t("p",[s._v("给你单链表的头节点 "),t("code",[s._v("head")]),s._v(" ，请你反转链表，并返回反转后的链表。")]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例：")]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg",alt:"img"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：head = [1,2,3,4,5]\n输出：[5,4,3,2,1]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg",alt:"img"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：head = [1,2]\n输出：[2,1]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("示例 3：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：head = []\n输出：[]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ul",[t("li",[s._v("链表中节点的数目范围是 "),t("code",[s._v("[0, 5000]")])]),s._v(" "),t("li",[t("code",[s._v("-5000 <= Node.val <= 5000")])])]),s._v(" "),t("p",[s._v("**进阶：**链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？")]),s._v(" "),t("h2",{attrs:{id:"解题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题"}},[s._v("#")]),s._v(" 解题：")]),s._v(" "),t("h3",{attrs:{id:"方法一-迭代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一-迭代"}},[s._v("#")]),s._v(" 方法一：迭代")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1701241032043.webp",alt:"1701241032043"}})]),s._v(" "),t("p",[s._v("之前链表的头节点是元素 1， 反转之后头结点就是元素 5 ，这里并没有添加或者删除节点，仅仅是改变 next 指针的方向。")]),s._v(" "),t("p",[t("strong",[s._v("思路是：")])]),s._v(" "),t("p",[s._v("首先定义一个 cur 指针，指向头结点，再定义一个 pre 指针，初始化为 null。")]),s._v(" "),t("p",[s._v("然后就要开始反转了，首先要把 cur->next 节点用 tmp 指针保存一下，也就是保存一下这个节点。")]),s._v(" "),t("p",[s._v("为什么要保存一下这个节点呢，因为接下来要改变 cur->next 的指向了，将cur->next 指向 pre ，此时已经反转了第一个节点了。")]),s._v(" "),t("p",[s._v("接下来，就是循环走如下代码逻辑了，继续移动 pre 和 cur 指针。")]),s._v(" "),t("p",[s._v("最后，cur 指针已经指向了 null，循环结束，链表也反转完毕了。 此时我们 return pre 指针就可以了，pre 指针就指向了新的头结点。")]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverseList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保存cur的下一个节点")]),s._v("\n        ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" pre "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            temp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保存一下 cur的下一个节点，因为接下来要改变cur->next")]),s._v("\n            cur"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pre"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 翻转操作")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更新pre 和 cur指针")]),s._v("\n            pre "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pre"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[t("strong",[s._v("复杂度分析")])]),s._v(" "),t("ul",[t("li",[s._v("时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。")]),s._v(" "),t("li",[s._v("空间复杂度：O(1)。")])]),s._v(" "),t("h3",{attrs:{id:"方法二-递归"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二-递归"}},[s._v("#")]),s._v(" 方法二：递归")]),s._v(" "),t("p",[s._v("看官方解答吧，这里只贴一下解题代码")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://leetcode.cn/problems/reverse-linked-list/solutions/551596/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/",target:"_blank",rel:"noopener noreferrer"}},[s._v("206. 反转链表 - 力扣（LeetCode）"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverseList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" newHead "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverseList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" newHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[t("strong",[s._v("复杂度分析")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("时间复杂度：O(n)，其中 n 是链表的长度。需要对链表的每个节点进行反转操作。")])]),s._v(" "),t("li",[t("p",[s._v("空间复杂度：O(n)，其中 n 是链表的长度。空间复杂度主要取决于递归调用的栈空间，最多为 n 层。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);