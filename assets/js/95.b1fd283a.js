(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{428:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_70-爬楼梯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_70-爬楼梯"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://leetcode.cn/problems/climbing-stairs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("70. 爬楼梯"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目：")]),s._v(" "),t("p",[s._v("假设你正在爬楼梯。需要 "),t("code",[s._v("n")]),s._v(" 阶你才能到达楼顶。")]),s._v(" "),t("p",[s._v("每次你可以爬 "),t("code",[s._v("1")]),s._v(" 或 "),t("code",[s._v("2")]),s._v(" 个台阶。你有多少种不同的方法可以爬到楼顶呢？")]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例：")]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：n = 2\n输出：2\n解释：有两种方法可以爬到楼顶。\n1. 1 阶 + 1 阶\n2. 2 阶\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：n = 3\n输出：3\n解释：有三种方法可以爬到楼顶。\n1. 1 阶 + 1 阶 + 1 阶\n2. 1 阶 + 2 阶\n3. 2 阶 + 1 阶\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("1 <= n <= 45")])])]),s._v(" "),t("h2",{attrs:{id:"解题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题"}},[s._v("#")]),s._v(" 解题：")]),s._v(" "),t("h4",{attrs:{id:"方法一-动态规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一-动态规划"}},[s._v("#")]),s._v(" 方法一：动态规划")]),s._v(" "),t("p",[s._v("一级台阶一种方法，二级台阶两种方法（1+1，2），三级台阶三种方法（1+1+1，1+2，2+1）。。。")]),s._v(" "),t("ul",[t("li",[s._v("n=1, f(n) = 1;")]),s._v(" "),t("li",[s._v("n=2, f(n) = 2;")]),s._v(" "),t("li",[s._v("n=3, f(n) = 3;")]),s._v(" "),t("li",[s._v("n=4, f(n) = 5;")])]),s._v(" "),t("p",[s._v("这不是斐波那契数列吗？f(n) = f(n-2) + f(n-1)；")]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("climbStairs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" first "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" second "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" third "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            first "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" second"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            second "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" third"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            third "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" first "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" second"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" third"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[t("strong",[s._v("复杂度分析")])]),s._v(" "),t("ul",[t("li",[s._v("时间复杂度：循环执行 n 次，每次花费常数的时间代价，故渐进时间复杂度为 O(n)。")]),s._v(" "),t("li",[s._v("空间复杂度：这里只用了常数个变量作为辅助空间，故渐进空间复杂度为 O(1)。")])]),s._v(" "),t("h4",{attrs:{id:"方法二-dp动态规划三部曲"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二-dp动态规划三部曲"}},[s._v("#")]),s._v(" 方法二：dp动态规划三部曲")]),s._v(" "),t("ol",[t("li",[s._v("定义dp数组\n我们会用一个数组，来保存历史数组，假设用一维数组 dp[] 吧。这个时候有一个非常重要的点，就是规定你这个数组元素的含义，例如你的 dp[i] 是代表什么意思？")]),s._v(" "),t("li",[s._v("找出递推关系式\n动态规划类似于高中数学的数学归纳法，当我们要计算 dp[n] 时，是可以利用 dp[n-1]，dp[n-2]…..dp[1]，来推出 dp[n] 的，也就是可以利用历史数据来推出新的元素值，所以我们要找出数组元素之间的关系式，例如 dp[n] = dp[n-1] + dp[n-2]，这个就是他们的关系式了。")]),s._v(" "),t("li",[s._v("找出初始值\n找出了递推公式，我们还需要初始值，因为递推公式就是靠前面的值推出后面的值，但总得有个头吧，这个头就是初始值。")])]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<vector>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("climbStairs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        std"),t("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("vector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        dp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        dp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            dp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" dp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);