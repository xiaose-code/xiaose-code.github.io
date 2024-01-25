(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{394:function(t,e,a){"use strict";a.r(e);var l=a(4),v=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nosql-基础知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nosql-基础知识"}},[t._v("#")]),t._v(" NoSQL 基础知识")]),t._v(" "),e("h2",{attrs:{id:"什么是-nosql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-nosql"}},[t._v("#")]),t._v(" 什么是 NoSQL?")]),t._v(" "),e("p",[t._v("NoSQL（Not Only SQL 的缩写）泛指非关系型的数据库，主要针对的是键值、文档以及图形类型数据存储。")]),t._v(" "),e("p",[t._v("NoSQL 数据库天生支持分布式，数据冗余和数据分片等特性，旨在提供可扩展的高可用高性能数据存储解决方案。")]),t._v(" "),e("p",[t._v("NoSQL 数据库代表：HBase、Cassandra、MongoDB、Redis")]),t._v(" "),e("h2",{attrs:{id:"mysql-和-nosql-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-和-nosql-的区别"}},[t._v("#")]),t._v(" MySQL 和 NoSQL 的区别")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}}),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MySQL")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("NoSQL")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据模型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用关系型数据模型（表格结构）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用非关系型数据模型（键值对、文档、列族等）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据存储")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("存储在预定义的表中")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("存储在集合、文档、列族等中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据查询")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用结构化查询语言 (SQL)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用特定的查询语言或 API")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据灵活性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("需要预先定义表结构")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无需预先定义结构，可以灵活添加字段")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据一致性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持 ACID 事务，保证数据一致性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("大多数 NoSQL 数据库是 BASE 模型，注重可用性和分区容错性，牺牲一致性")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("可扩展性")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("垂直扩展或水平分片")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("水平扩展，可以通过添加节点来扩展")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("扩展性能")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("通常在高负载时性能下降")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("可以在大规模数据时保持高性能")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("关系处理")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持复杂的关系查询和连接操作")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("通常不支持复杂的关系查询")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("数据模式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用固定模式，需定义表结构")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("动态模式，无需事先定义")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("主要用途")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("适用于结构化数据和复杂查询")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("适用于半结构化或非结构化数据，高可扩展性和大规模数据存储")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("事务支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("支持原子性、一致性、隔离性和持久性 (ACID) 事务")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("通常不支持 ACID 事务，为了可扩展、高性能进行了权衡，少部分支持比如 MongoDB 。不过，MongoDB 对 ACID 事务 的支持和 MySQL 还是有所区别的。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Oracle、MySQL、Microsoft SQL Server、PostgreSQL")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("文档：MongoDB、CouchDB，键值：Redis、DynamoDB，宽列：Cassandra、 HBase，图表：Neo4j、 Amazon Neptune、Giraph")])])])]),t._v(" "),e("h2",{attrs:{id:"nosql-数据库有什么优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nosql-数据库有什么优势"}},[t._v("#")]),t._v(" NoSQL 数据库有什么优势？")]),t._v(" "),e("ol",[e("li",[t._v("**架构灵活：**NoSQL 数据库通常提供灵活的架构，以实现更快速、更多的迭代开发。灵活的数据模型使 NoSQL 数据库成为半结构化和非结构化数据的理想之选。")]),t._v(" "),e("li",[t._v("**可扩展性好：**NoSQL 数据库通常被设计为通过使用分布式硬件集群来横向扩展，而不是通过添加昂贵和强大的服务器来纵向扩展。")]),t._v(" "),e("li",[t._v("**高性能：**NoSQL 数据库针对特定的数据模型和访问模式进行了优化，这与尝试使用关系数据库完成类似功能相比可实现更高的性能。")]),t._v(" "),e("li",[t._v("**拥有强大的功能：**NoSQL 数据库提供功能强大的 API 和数据类型，专门针对其各自的数据模型而构建。")])]),t._v(" "),e("h2",{attrs:{id:"nosql-数据库有哪些类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nosql-数据库有哪些类型"}},[t._v("#")]),t._v(" NoSQL 数据库有哪些类型？")]),t._v(" "),e("p",[t._v("主要可以分为下面四种类型：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("键值")]),t._v("：键值数据库是一种较简单的数据库，其中每个项目都包含键和值。这是极为灵活的 NoSQL 数据库类型，因为应用可以完全控制 value 字段中存储的内容，没有任何限制。"),e("strong",[t._v("Redis 和 DynanoDB")]),t._v(" 是两款非常流行的键值数据库。")]),t._v(" "),e("li",[e("strong",[t._v("文档")]),t._v("：文档数据库中的数据被存储在类似于 JSON（JavaScript 对象表示法）对象的文档中，非常清晰直观。每个文档包含成对的字段和值。这些值通常可以是各种类型，包括字符串、数字、布尔值、数组或对象等，并且它们的结构通常与开发者在代码中使用的对象保持一致。"),e("strong",[t._v("MongoDB")]),t._v(" 就是一款非常流行的文档数据库。")]),t._v(" "),e("li",[e("strong",[t._v("图形")]),t._v("：图形数据库旨在轻松构建和运行与高度连接的数据集一起使用的应用程序。图形数据库的典型使用案例包括社交网络、推荐引擎、欺诈检测和知识图形。"),e("strong",[t._v("Neo4j 和 Giraph")]),t._v(" 是两款非常流行的图形数据库。")]),t._v(" "),e("li",[e("strong",[t._v("宽列")]),t._v("：宽列存储数据库非常适合需要存储大量的数据。"),e("strong",[t._v("Cassandra 和 HBase")]),t._v(" 是两款非常流行的宽列存储数据库。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/image.1l1vkzknt83k.webp",alt:"image"}})]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://javaguide.cn/database/nosql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://javaguide.cn/database/nosql.html"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/relational-vs-nosql-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("Relational vs. NoSQL data | Microsoft Learn"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);