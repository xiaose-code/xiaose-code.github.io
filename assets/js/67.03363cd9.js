(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{392:function(t,a,_){"use strict";_.r(a);var v=_(4),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"字符集详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符集详解"}},[t._v("#")]),t._v(" 字符集详解")]),t._v(" "),a("blockquote",[a("p",[t._v("MySQL 字符编码集中有两套 UTF-8 编码实现："),a("strong",[a("code",[t._v("utf8")])]),t._v(" 和 "),a("strong",[a("code",[t._v("utf8mb4")])]),t._v("。")]),t._v(" "),a("p",[t._v("如果使用 "),a("strong",[a("code",[t._v("utf8")])]),t._v(" 的话，存储 emoji 符号和一些比较复杂的汉字、繁体字就会出错。")]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("utf8")])]),t._v("："),a("code",[t._v("utf8")]),t._v("编码只支持"),a("code",[t._v("1-3")]),t._v("个字节 。 在 "),a("code",[t._v("utf8")]),t._v(" 编码中，中文是占 3 个字节，其他数字、英文、符号占一个字节。但 emoji 符号占 4 个字节，一些较复杂的文字、繁体字也是 4 个字节。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("utf8mb4")])]),t._v("：UTF-8 的完整实现，正版！最多支持使用 4 个字节表示字符，因此，可以用来存储 emoji 符号。")])])]),t._v(" "),a("h2",{attrs:{id:"什么是字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是字符集"}},[t._v("#")]),t._v(" 什么是字符集？")]),t._v(" "),a("p",[t._v("字符是各种文字和符号的统称，包括各个国家文字、标点符号、表情、数字等等。")]),t._v(" "),a("p",[a("strong",[t._v("字符集")]),t._v(" 就是一系列字符的集合（编码规则）。")]),t._v(" "),a("p",[t._v("每个字符在字符集中都有一个唯一的编码，计算机根据这个编码来识别和处理字符。不同的字符集支持不同的字符范围和编码方式。")]),t._v(" "),a("ul",[a("li",[t._v("字符 转换成 二进制数据的过程称为 "),a("strong",[t._v("字符编码")])]),t._v(" "),a("li",[t._v("二进制数据 解析成 字符的过程称为 "),a("strong",[t._v("字符解码")])])]),t._v(" "),a("h2",{attrs:{id:"常见的字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的字符集"}},[t._v("#")]),t._v(" 常见的字符集")]),t._v(" "),a("h3",{attrs:{id:"ascii-码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ascii-码"}},[t._v("#")]),t._v(" ASCII 码")]),t._v(" "),a("p",[t._v("ASCII（American Standard Code for Information Interchange）是最早的字符集之一，它使用 7 位二进制数表示 128 个字符，包括英文字母、数字、标点符号和控制字符等。ASCII 码是计算机系统最基本的字符集之一，它为文本数据提供了最基本的编码方式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/image.44bf9rdifmi0.webp",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"unicode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unicode"}},[t._v("#")]),t._v(" Unicode")]),t._v(" "),a("p",[t._v("随着计算机技术的发展，对于国际化和多语言支持的需求不断增加，ASCII 码已经不能满足各种语言字符的表示需求。于是，Unicode 字符集应运而生。Unicode 采用更多的位数来表示字符，常见的有 16 位的 UCS-2 和 32 位的 UCS-4。")]),t._v(" "),a("h3",{attrs:{id:"utf-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utf-8"}},[t._v("#")]),t._v(" UTF-8")]),t._v(" "),a("p",[t._v("UTF-8（Unicode Transformation Format-8）是一种对 Unicode 进行编码的变长字符集，它可以使用 1 到 4 个字节表示一个字符，根据字符的不同范围自动选择合适的编码长度。UTF-8 是目前互联网上广泛使用的字符集之一，它既能表示 ASCII 字符，又能表示任意国家和地区的字符。")]),t._v(" "),a("h3",{attrs:{id:"gbk-和-gb2312"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gbk-和-gb2312"}},[t._v("#")]),t._v(" GBK 和 GB2312")]),t._v(" "),a("p",[t._v("GBK 和 GB2312 是中文字符集，用于表示中文字符。GBK 扩展了 GB2312 字符集，支持更多的中文字符，包括繁体字和生僻字。GBK 和 GB2312在中国大陆广泛使用，是中文文本处理的基本字符集。")]),t._v(" "),a("h3",{attrs:{id:"big5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#big5"}},[t._v("#")]),t._v(" BIG5")]),t._v(" "),a("p",[t._v("BIG5 主要针对的是繁体中文，收录了 13000 多个汉字。")]),t._v(" "),a("h3",{attrs:{id:"ansi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansi"}},[t._v("#")]),t._v(" ANSI")]),t._v(" "),a("p",[t._v("ANSI（American National Standards Institute）是一种字符集标准的通用名称，它实际上不是一个具体的字符集，而是指"),a("strong",[t._v("各种不同的字符集标准")]),t._v("。在不同的操作系统和编程环境中，ANSI 可能对应不同的字符集，因此在使用 ANSI 字符集时需要注意平台的兼容性。")]),t._v(" "),a("h2",{attrs:{id:"在线编码和解码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线编码和解码"}},[t._v("#")]),t._v(" 在线编码和解码")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.haomeili.net/HanZi/ZiFuBianMaZhuanHuan",target:"_blank",rel:"noopener noreferrer"}},[t._v("utf-8转utf-8、Unicode (UTF-8)转Unicode (UTF-8)、utf-8转utf-8编码 (haomeili.net)"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"mysql-字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-字符集"}},[t._v("#")]),t._v(" MySQL 字符集")]),t._v(" "),a("h3",{attrs:{id:"查看支持的字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看支持的字符集"}},[t._v("#")]),t._v(" 查看支持的字符集")]),t._v(" "),a("p",[t._v("可以通过 "),a("code",[t._v("SHOW CHARSET")]),t._v(" 命令来查看")]),t._v(" "),a("h3",{attrs:{id:"默认字符集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认字符集"}},[t._v("#")]),t._v(" 默认字符集")]),t._v(" "),a("p",[t._v("在 MySQL5.7 中，默认字符集是 "),a("code",[t._v("latin1")]),t._v(" ；在 MySQL8.0 中，默认字符集是 "),a("code",[t._v("utf8mb4")])]),t._v(" "),a("h3",{attrs:{id:"字符集的层次级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符集的层次级别"}},[t._v("#")]),t._v(" 字符集的层次级别")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("server")]),t._v("（MySQL 实例级别）")]),t._v(" "),a("li",[a("code",[t._v("database")]),t._v("（库级别）")]),t._v(" "),a("li",[a("code",[t._v("table")]),t._v("（表级别）")]),t._v(" "),a("li",[a("code",[t._v("column")]),t._v("（字段级别）")])]),t._v(" "),a("p",[t._v("优先级从上往下依次增大")]),t._v(" "),a("h3",{attrs:{id:"_5-x-版本和-8-x-版本都兼容的字符集与排序规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-x-版本和-8-x-版本都兼容的字符集与排序规则"}},[t._v("#")]),t._v(" 5.x 版本和 8.x 版本都兼容的字符集与排序规则")]),t._v(" "),a("p",[t._v("字符集：utf8mb4")]),t._v(" "),a("p",[t._v("排序规则：utf8mb4_general_ci")]),t._v(" "),a("p",[a("em",[t._v("解析")])]),t._v(" "),a("ol",[a("li",[t._v("字符集：utf8mb4 是 MySQL 5.x 和 8.x 版本都兼容的字符集。它是支持四字节的 UTF-8 编码，可以用于存储包含 Emoji 表情等特殊字符的文本数据。")]),t._v(" "),a("li",[t._v("排序规则：在 MySQL 5.x 版本中，默认的排序规则是 utf8mb4_general_ci，而在 MySQL 8.x 版本中，默认的排序规则是 utf8mb4_0900_ai_ci。这是因为 MySQL 8.x 引入了新的排序规则算法 utf8mb4_0900_ai_ci，它在一些情况下（例如对特殊字符的排序）表现更为准确和符合语言习惯。")])]),t._v(" "),a("p",[t._v("所以，如果希望在 MySQL 5.x 和 8.x 版本中都兼容，并且不需要新的排序规则算法，可以使用 utf8mb4 字符集和 utf8mb4_general_ci 排序规则。但如果需要更准确的排序和对特殊字符的支持，可以考虑使用 utf8mb4 字符集和 utf8mb4_0900_ai_ci 排序规则。")])])}),[],!1,null,null,null);a.default=r.exports}}]);