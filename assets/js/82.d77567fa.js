(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{414:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_141-环形链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_141-环形链表"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://leetcode.cn/problems/linked-list-cycle/",target:"_blank",rel:"noopener noreferrer"}},[s._v("141. 环形链表"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目：")]),s._v(" "),t("p",[s._v("给你一个链表的头节点 "),t("code",[s._v("head")]),s._v(" ，判断链表中是否有环。")]),s._v(" "),t("p",[s._v("如果链表中有某个节点，可以通过连续跟踪 "),t("code",[s._v("next")]),s._v(" 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 "),t("code",[s._v("pos")]),s._v(" 来表示链表尾连接到链表中的位置（索引从 0 开始）。"),t("strong",[s._v("注意："),t("code",[s._v("pos")]),s._v(" 不作为参数进行传递")]),s._v(" 。仅仅是为了标识链表的实际情况。")]),s._v(" "),t("p",[s._v("如果链表中存在环 ，则返回 "),t("code",[s._v("true")]),s._v(" 。 否则，返回 "),t("code",[s._v("false")]),s._v(" 。")]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例：")]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png",alt:"img"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：head = [3,2,0,-4], pos = 1\n输出：true\n解释：链表中有一个环，其尾部连接到第二个节点。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png",alt:"img"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：head = [1,2], pos = 0\n输出：true\n解释：链表中有一个环，其尾部连接到第一个节点。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("示例 3：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png",alt:"img"}})]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：head = [1], pos = -1\n输出：false\n解释：链表中没有环。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ul",[t("li",[s._v("链表中节点的数目范围是 "),t("code",[s._v("[0, 104]")])]),s._v(" "),t("li",[t("code",[s._v("-105 <= Node.val <= 105")])]),s._v(" "),t("li",[t("code",[s._v("pos")]),s._v(" 为 "),t("code",[s._v("-1")]),s._v(" 或者链表中的一个 "),t("strong",[s._v("有效索引")]),s._v(" 。")])]),s._v(" "),t("p",[s._v("**进阶：**你能用 "),t("code",[s._v("O(1)")]),s._v("（即，常量）内存解决此问题吗？")]),s._v(" "),t("h2",{attrs:{id:"解题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题"}},[s._v("#")]),s._v(" 解题：")]),s._v(" "),t("h3",{attrs:{id:"方法一-哈希表法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一-哈希表法"}},[s._v("#")]),s._v(" 方法一：哈希表法")]),s._v(" "),t("p",[s._v("每次遍历到一个节点时，判断该节点此前是否被访问过。具体地，我们可以使用哈希表来存储所有已经访问过的节点。每次我们到达一个节点，如果该节点已经存在于哈希表中，则说明该链表是环形链表，否则就将该节点加入哈希表中。重复这一过程，直到我们遍历完整个链表即可。")]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasCycle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ListNode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        unordered_set"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" seen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            seen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("insert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[s._v("复杂度分析")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("时间复杂度：O(N)，其中 N 是链表中的节点数。最坏情况下我们需要遍历每个节点一次。")])]),s._v(" "),t("li",[t("p",[s._v("空间复杂度：O(N)，其中 N 是链表中的节点数。主要为哈希表的开销，最坏情况下我们需要将每个节点插入到哈希表中一次。")])])]),s._v(" "),t("h3",{attrs:{id:"方法二-快慢指针"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二-快慢指针"}},[s._v("#")]),s._v(" 方法二：快慢指针")]),s._v(" "),t("p",[s._v("基本思路如下：")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("初始化：")]),s._v(" 使用两个指针，一个称为慢指针（slow），另一个称为快指针（fast）。初始时，它们都指向链表的头节点。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("移动：")]),s._v(" 在每一步中，慢指针移动一步，而快指针移动两步。这样就形成了一种“龟兔赛跑”的情景。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("判断：")]),s._v(" 如果链表中不存在环，快指针最终会到达链表的尾部（nullptr），而慢指针也会到达链表的某个节点。如果链表中存在环，快慢指针会在环中的某个位置相遇。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("判断环的起始位置：")]),s._v(" 如果链表中存在环，相遇后，可以将其中一个指针（例如快指针）重新指向链表头部，然后两个指针以相同的速度每次移动一步。它们的相遇点即为环的起始位置。")])])]),s._v(" "),t("p",[s._v("快慢指针的关键在于快指针的速度是慢指针的两倍，这样如果存在环，快指针就会“追上”慢指针。这是一种通过相对速度来检测环的有效方法。")]),s._v(" "),t("p",[s._v("这个思路可以应用于多种链表问题，不仅仅是检测环，还可以用于找到链表的中点等。在解决链表问题时，思考是否可以使用快慢指针是一个常用的技巧。")]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasCycle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" slow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ListNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" fast "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("slow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" fast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fast "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" fast"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            slow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" slow"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            fast "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fast"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[t("strong",[s._v("复杂度分析")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("时间复杂度：O(N)，其中 NNN 是链表中的节点数。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("当链表中不存在环时，快指针将先于慢指针到达链表尾部，链表中每个节点至多被访问两次。")])]),s._v(" "),t("li",[t("p",[s._v("当链表中存在环时，每一轮移动后，快慢指针的距离将减小一。而初始距离为环的长度，因此至多移动 N 轮。")])])])]),s._v(" "),t("li",[t("p",[s._v("空间复杂度：O(1)。我们只使用了两个指针的额外空间。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);