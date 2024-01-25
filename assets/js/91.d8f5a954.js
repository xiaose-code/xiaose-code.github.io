(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{424:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_538-把二叉搜索树转换为累加树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_538-把二叉搜索树转换为累加树"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://leetcode.cn/problems/convert-bst-to-greater-tree/",target:"_blank",rel:"noopener noreferrer"}},[s._v("538. 把二叉搜索树转换为累加树"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目：")]),s._v(" "),t("p",[s._v("给出二叉 "),t("strong",[s._v("搜索")]),s._v(" 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 "),t("code",[s._v("node")]),s._v(" 的新值等于原树中大于或等于 "),t("code",[s._v("node.val")]),s._v(" 的值之和。")]),s._v(" "),t("p",[s._v("提醒一下，二叉搜索树满足下列约束条件：")]),s._v(" "),t("ul",[t("li",[s._v("节点的左子树仅包含键 "),t("strong",[s._v("小于")]),s._v(" 节点键的节点。")]),s._v(" "),t("li",[s._v("节点的右子树仅包含键 "),t("strong",[s._v("大于")]),s._v(" 节点键的节点。")]),s._v(" "),t("li",[s._v("左右子树也必须是二叉搜索树。")])]),s._v(" "),t("p",[t("strong",[s._v("注意：")]),s._v(" 本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/ 相同")]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例：")]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")])]),s._v(" "),t("p",[t("strong",[t("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/05/03/tree.png",alt:"img"}})])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"题目解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目解释"}},[s._v("#")]),s._v(" 题目解释：")]),s._v(" "),t("p",[t("strong",[s._v("是不是没读懂题目？没关系，举个例子你就明白了：")])]),s._v(" "),t("blockquote",[t("p",[s._v("比如说根节点4转换为累加树之后为什么新值是30？按题目中的意思就是大于等于根节点4的原来二叉树的值全部加起来，即根节点4+（它的右子树）= 4 + 6 + 5 + 7 + 8 = 30，同理根节点4的左孩子节点1，那就是要将大于等于1的原二叉树的值全部加起来，那就是从自身开始1 + 2 + 3 + （之前根节点4累加的值，因为它们都比1大） = 36，所以新值为36，依此类推。")])]),s._v(" "),t("p",[s._v("这样子看来，题目是读懂了，但是没啥规律啊？解不了题啊？")]),s._v(" "),t("p",[s._v("根据题目的提示会发现原二叉树是满足以下性质的：")]),s._v(" "),t("ol",[t("li",[s._v("若它的左子树不空，则左子树上所有节点的值均小于它的根节点的值；")]),s._v(" "),t("li",[s._v("若它的右子树不空，则右子树上所有节点的值均大于它的根节点的值；")]),s._v(" "),t("li",[s._v("它的左、右子树也分别为二叉搜索树。")])]),s._v(" "),t("p",[s._v("说明原二叉树就是二叉搜索树，而累加树则刚好与二叉搜索树性质相反，刚好二叉搜索树的中序遍历是一个单调递增的有序序列。那么是否意味着累加树的逆序中序遍历是一个单调递减的有序序列。")]),s._v(" "),t("p",[s._v("二叉搜索树的中序遍历：[0、1、2、3、4、5、6、7、8]")]),s._v(" "),t("p",[s._v("累加树的中序遍历：[36、36、35、33、30、26、24、15、8]")]),s._v(" "),t("p",[s._v("果然如此！")]),s._v(" "),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：root = [0,null,1]\n输出：[1,null,1]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("示例 3：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：root = [1,0,2]\n输出：[3,3,2]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("示例 4：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：root = [3,2,4,1]\n输出：[7,9,4,10]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ul",[t("li",[s._v("树中的节点数介于 "),t("code",[s._v("0")]),s._v(" 和 "),t("code",[s._v("104")]),s._v(" 之间。")]),s._v(" "),t("li",[s._v("每个节点的值介于 "),t("code",[s._v("-104")]),s._v(" 和 "),t("code",[s._v("104")]),s._v(" 之间。")]),s._v(" "),t("li",[s._v("树中的所有值 "),t("strong",[s._v("互不相同")]),s._v(" 。")]),s._v(" "),t("li",[s._v("给定的树为二叉搜索树。")])]),s._v(" "),t("h2",{attrs:{id:"解题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题"}},[s._v("#")]),s._v(" 解题：")]),s._v(" "),t("h4",{attrs:{id:"方法一-反序中序遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一-反序中序遍历"}},[s._v("#")]),s._v(" 方法一：反序中序遍历")]),s._v(" "),t("p",[s._v("所以根据我的题目解释，这样我们只需要反序中序遍历该二叉搜索树，记录过程中的节点值之和，并不断更新当前遍历到的节点的节点值，即可得到题目要求的累加树。")]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    TreeNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertBST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TreeNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertBST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertBST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("复杂度分析：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("时间复杂度：O(n)，其中 n 是二叉搜索树的节点数。每一个节点恰好被遍历一次。")])]),s._v(" "),t("li",[t("p",[s._v("空间复杂度：O(n)，为递归过程中栈的开销，平均情况下为 O(log~⁡n~)，最坏情况下树呈现链状，为 O(n)。")])])]),s._v(" "),t("p",[s._v("看不懂代码的可以去调试一下代码就懂了")]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 二叉树节点定义")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    TreeNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    TreeNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("val")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("left")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("right")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    TreeNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertBST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TreeNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertBST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertBST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 成员变量用于记录累加值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 中序遍历打印二叉树")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrderTraversal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TreeNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrderTraversal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrderTraversal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 示例用法")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一棵示例二叉搜索树")]),s._v("\n    TreeNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("TreeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建 Solution 对象")]),s._v("\n    Solution solution"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转换为累加树（使用你提供的方式）")]),s._v("\n    TreeNode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" greaterSumTree "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" solution"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertBST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打印累加树的中序遍历结果")]),s._v("\n    std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"累加树的中序遍历结果: "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrderTraversal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("greaterSumTree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("cout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("endl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br")])]),t("p",[s._v("下面给出部分调试过程：")]),s._v(" "),t("p",[s._v("一开始先一直递归，直到右子树的末尾叶子节点8")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1701054284398.webp",alt:"1701054284398"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1701054316584.webp",alt:"1701054316584"}})]),s._v(" "),t("p",[s._v("然后递归里的执行：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1701054116346.webp",alt:"1701054116346"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1701054176037.webp",alt:"1701054176037"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1701054193305.webp",alt:"1701054193305"}})]),s._v(" "),t("h4",{attrs:{id:"方法二-morris-遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二-morris-遍历"}},[s._v("#")]),s._v(" 方法二：Morris 遍历")]),s._v(" "),t("p",[s._v("这个方法不搞了，第一个理解透彻就挺累的了。有需要自己去看吧")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://leetcode.cn/problems/convert-bst-to-greater-tree/solutions/421616/ba-er-cha-sou-suo-shu-zhuan-huan-wei-lei-jia-sh-14/",target:"_blank",rel:"noopener noreferrer"}},[s._v("538. 把二叉搜索树转换为累加树 - 力扣（LeetCode）"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);