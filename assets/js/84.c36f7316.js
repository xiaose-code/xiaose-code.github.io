(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{419:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_121-买卖股票的最佳时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_121-买卖股票的最佳时机"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/",target:"_blank",rel:"noopener noreferrer"}},[s._v("121. 买卖股票的最佳时机"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目：")]),s._v(" "),t("p",[s._v("给定一个数组 "),t("code",[s._v("prices")]),s._v(" ，它的第 "),t("code",[s._v("i")]),s._v(" 个元素 "),t("code",[s._v("prices[i]")]),s._v(" 表示一支给定股票第 "),t("code",[s._v("i")]),s._v(" 天的价格。")]),s._v(" "),t("p",[s._v("你只能选择 "),t("strong",[s._v("某一天")]),s._v(" 买入这只股票，并选择在 "),t("strong",[s._v("未来的某一个不同的日子")]),s._v(" 卖出该股票。设计一个算法来计算你所能获取的最大利润。")]),s._v(" "),t("p",[s._v("返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 "),t("code",[s._v("0")]),s._v(" 。")]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例：")]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：[7,1,5,3,6,4]\n输出：5\n解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。\n     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：prices = [7,6,4,3,1]\n输出：0\n解释：在这种情况下, 没有交易完成, 所以最大利润为 0。 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("提示：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("1 <= prices.length <= 105")])]),s._v(" "),t("li",[t("code",[s._v("0 <= prices[i] <= 104")])])]),s._v(" "),t("h2",{attrs:{id:"解题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题"}},[s._v("#")]),s._v(" 解题：")]),s._v(" "),t("h3",{attrs:{id:"方法一-一次循环贪心法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一-一次循环贪心法"}},[s._v("#")]),s._v(" 方法一：一次循环贪心法")]),s._v(" "),t("p",[s._v("解题思路：")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("初始化变量：")]),s._v(" 使用 "),t("code",[s._v("inf")]),s._v("（正无穷大的常量）初始化 "),t("code",[s._v("minprice")]),s._v("，表示遍历过程中的最小价格，同时初始化 "),t("code",[s._v("maxprofit")]),s._v(" 为 0，表示卖出股票时的最大利润。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("遍历数组：")]),s._v(" 对于每一天的股票价格，进行以下操作：")]),s._v(" "),t("ul",[t("li",[s._v("更新 "),t("code",[s._v("maxprofit")]),s._v("：比较当前价格减去 "),t("code",[s._v("minprice")]),s._v(" 得到的利润与之前的 "),t("code",[s._v("maxprofit")]),s._v("，取较大者作为新的 "),t("code",[s._v("maxprofit")]),s._v("。")]),s._v(" "),t("li",[s._v("更新 "),t("code",[s._v("minprice")]),s._v("：比较当前价格与之前的 "),t("code",[s._v("minprice")]),s._v("，取较小者作为新的 "),t("code",[s._v("minprice")]),s._v("。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("返回结果：")]),s._v(" 最终返回 "),t("code",[s._v("maxprofit")]),s._v("，即最大利润。")])])]),s._v(" "),t("p",[s._v("这种方法的核心思想是，在遍历数组的过程中，始终保持 "),t("code",[s._v("minprice")]),s._v(" 记录的是当前为止的最小价格，而 "),t("code",[s._v("maxprofit")]),s._v(" 记录的是当前为止的最大利润。通过不断更新这两个变量，可以在一次遍历中找到最佳的买入和卖出时机，从而得到最大利润。")]),s._v(" "),t("div",{staticClass:"language-CPP line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("maxProfit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vector"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" prices"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" inf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1e9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用于表示正无穷大的常量")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" minprice "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" inf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录遍历过程中的最小价格")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maxprofit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录卖出股票时的最大利润")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" price"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" prices"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            maxprofit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("maxprofit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" price "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" minprice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更新最大利润")]),s._v("\n            minprice "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" minprice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更新最小价格")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" maxprofit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回最终的最大利润")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[t("strong",[s._v("复杂度分析")])]),s._v(" "),t("ul",[t("li",[s._v("时间复杂度：O(n)，只需要遍历一次。")]),s._v(" "),t("li",[s._v("空间复杂度：O(1)，只使用了常数个变量。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);