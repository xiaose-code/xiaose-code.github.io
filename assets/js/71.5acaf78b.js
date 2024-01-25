(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{396:function(v,_,t){"use strict";t.r(_);var s=t(4),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"mysql-索引详解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-索引详解"}},[v._v("#")]),v._v(" MySQL 索引详解")]),v._v(" "),_("h2",{attrs:{id:"讲一下什么是索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#讲一下什么是索引"}},[v._v("#")]),v._v(" 讲一下什么是索引？")]),v._v(" "),_("p",[_("strong",[v._v("索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。")])]),v._v(" "),_("p",[v._v("作用相当于"),_("strong",[v._v("书的目录")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"了解索引的底层数据结构吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#了解索引的底层数据结构吗"}},[v._v("#")]),v._v(" 了解索引的底层数据结构吗？")]),v._v(" "),_("p",[v._v("索引底层数据结构存在很多种类型，常见的索引结构有: B 树， B+树 和 Hash 表、红黑树。")]),v._v(" "),_("p",[v._v("在 MySQL 中，无论是 Innodb 还是 MyIsam，都使用了【B+树】作为索引结构。")]),v._v(" "),_("h2",{attrs:{id:"索引的优缺点了解吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引的优缺点了解吗"}},[v._v("#")]),v._v(" 索引的优缺点了解吗？")]),v._v(" "),_("p",[_("strong",[v._v("优点")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("使用索引可以大大加快 数据的检索速度（大大减少检索的数据量）, 这也是创建索引的最主要的原因。")]),v._v(" "),_("li",[v._v("通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性。")])]),v._v(" "),_("p",[_("strong",[v._v("缺点")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("创建索引和维护索引需要耗费许多时间。当对表中的数据进行增删改的时候，如果数据有索引，那么索引也需要动态的修改，会降低 SQL 执行效率。")]),v._v(" "),_("li",[v._v("索引需要使用物理文件存储，也会耗费一定空间。")])]),v._v(" "),_("h2",{attrs:{id:"使用索引一定能提高查询性能吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用索引一定能提高查询性能吗"}},[v._v("#")]),v._v(" 使用索引一定能提高查询性能吗？")]),v._v(" "),_("p",[v._v("不一定。使用索引可以提高查询速度，但并不是一定能提高查询速度。")]),v._v(" "),_("ul",[_("li",[v._v("在大多数情况下，索引查询都是比全表扫描要快的。")]),v._v(" "),_("li",[v._v("但是如果数据库的数据量不大，那么使用索引也不一定能够带来很大提升，甚至降低查询速率。")])]),v._v(" "),_("h2",{attrs:{id:"索引底层数据结构选型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引底层数据结构选型"}},[v._v("#")]),v._v(" 索引底层数据结构选型")]),v._v(" "),_("h3",{attrs:{id:"hash-表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hash-表"}},[v._v("#")]),v._v(" Hash 表")]),v._v(" "),_("p",[v._v("哈希表是"),_("strong",[v._v("键值对的集合")]),v._v("，通过键(key)即可快速取出对应的值(value)，因此哈希表可以快速检索数据（接近 O（1））。")]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("为何能够通过 key 快速取出 value 呢？")])])]),v._v(" "),_("p",[v._v("原因在于 "),_("strong",[v._v("哈希算法")]),v._v("（也叫散列算法）。通过哈希算法，我们可以快速找到 key 对应的 index，找到了 index 也就找到了对应的 value。")]),v._v(" "),_("div",{staticClass:"language-java line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[v._v("hash "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("hashfunc")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("key"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\nindex "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" hash "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("%")]),v._v(" array_size\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("blockquote",[_("p",[v._v("既然哈希表这么快，"),_("strong",[v._v("为什么 MySQL 没有使用其作为索引的数据结构呢？")])])]),v._v(" "),_("p",[v._v("主要是因为 Hash 索引不支持顺序和范围查询。")]),v._v(" "),_("p",[v._v("假如我们要对表中的数据进行排序或者进行范围查询，那 Hash 索引可就不行了。并且，每次 IO 只能取一个。")]),v._v(" "),_("h3",{attrs:{id:"二叉查找树-bst"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二叉查找树-bst"}},[v._v("#")]),v._v(" 二叉查找树（BST）")]),v._v(" "),_("p",[v._v("二叉查找树（Binary Search Tree）是"),_("strong",[v._v("一种基于二叉树的数据结构")]),v._v("，它具有以下特点：")]),v._v(" "),_("ol",[_("li",[v._v("左子树所有节点的值均小于根节点的值。（左 < 根 < 右）")]),v._v(" "),_("li",[v._v("右子树所有节点的值均大于根节点的值。")]),v._v(" "),_("li",[v._v("左右子树也分别为二叉查找树。")])]),v._v(" "),_("ul",[_("li",[v._v("当二叉查找树是平衡的时候，也就是树的每个节点的左右子树深度相差不超过 1 的时候，查询的时间复杂度为 "),_("strong",[v._v("O(log2(N))")]),v._v("，具有比较高的效率。")]),v._v(" "),_("li",[v._v("然而，当二叉查找树不平衡时，例如在最坏情况下（有序插入节点），树会退化成线性链表（也被称为斜树），导致查询效率急剧下降，时间复杂退化为 "),_("strong",[v._v("O(N)")]),v._v("。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/MySQL/image.6yi1f0q7il00.webp",alt:"image"}})]),v._v(" "),_("p",[v._v("也就是说，"),_("strong",[v._v("二叉查找树的性能非常依赖于它的平衡程度，这就导致其不适合作为 MySQL 底层索引的数据结构。")])]),v._v(" "),_("p",[v._v("为了解决这个问题，并提高查询效率，人们发明了多种在二叉查找树基础上的改进型数据结构，如平衡二叉树、B-Tree、B+Tree 等")]),v._v(" "),_("h3",{attrs:{id:"alv-树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#alv-树"}},[v._v("#")]),v._v(" ALV 树")]),v._v(" "),_("p",[v._v("ALV 树是计算机科学中最早被发明的"),_("strong",[v._v("自平衡二叉查找树")]),v._v("。")]),v._v(" "),_("p",[v._v("特点是：保证任何节点的左右子树高度之差不超过 1，因此也被称为"),_("strong",[v._v("高度平衡二叉树")]),v._v("，它的查找、插入和删除在平均和最坏情况下的时间复杂度都是 "),_("strong",[v._v("O(logn)")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[v._v("是节点的左右【子树高度】不超过 1")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/MySQL/image.66x4mc97bog0.webp",alt:"image"}})]),v._v(" "),_("blockquote",[_("p",[v._v("AVL 树是如何保持平衡的？")])]),v._v(" "),_("p",[v._v("AVL 树采用了"),_("strong",[v._v("旋转操作")]),v._v("来保持平衡。")]),v._v(" "),_("p",[v._v("主要有四种旋转操作：LL 旋转、RR 旋转、LR 旋转和 RL 旋转。")]),v._v(" "),_("p",[v._v("其中 LL 旋转和 RR 旋转分别用于处理左左和右右失衡，而 LR 旋转和 RL 旋转则用于处理左右和右左失衡。")]),v._v(" "),_("blockquote",[_("p",[v._v("MySQL 没有选择 ALV 树的原因？")])]),v._v(" "),_("ul",[_("li",[v._v("由于 AVL 树需要频繁地进行旋转操作来保持平衡，因此"),_("strong",[v._v("会有较大的计算开销进而降低了查询性能")]),v._v("。")]),v._v(" "),_("li",[v._v("在使用 AVL 树时，每个树节点仅存储一个数据，而每次进行磁盘 IO 时只能读取一个节点的数据，如果需要查询的数据分布在多个节点上，那么就需要进行多次磁盘 IO，这非常"),_("strong",[v._v("耗时")]),v._v("。")])]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("磁盘 IO 是一项耗时的操作，在设计数据库索引时，我们需要优先考虑如何最大限度地减少磁盘 IO 操作的次数。")])]),v._v(" "),_("p",[v._v("实际应用中，AVL 树使用的并不多。")])]),v._v(" "),_("h3",{attrs:{id:"红黑树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[v._v("#")]),v._v(" 红黑树")]),v._v(" "),_("p",[v._v("红黑树"),_("strong",[v._v("也是一种自平衡二叉查找树")]),v._v("，通过在插入和删除节点时进行颜色变换和旋转操作，使得树始终保持平衡状态，它具有以下特点：")]),v._v(" "),_("ol",[_("li",[v._v("每个节点非红即黑；")]),v._v(" "),_("li",[v._v("根节点总是黑色的；")]),v._v(" "),_("li",[_("strong",[v._v("每个叶子节点都是黑色的空节点")]),v._v("（NIL 节点）；")]),v._v(" "),_("li",[v._v("如果节点是红色的，则它的子节点必须是黑色的（反之不一定）；")]),v._v(" "),_("li",[v._v("从根节点到叶节点或空子节点的每条路径，必须包含相同数目的黑色节点（即相同的黑色高度）。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/MySQL/image.1zayp9fppzm.webp",alt:"image"}})]),v._v(" "),_("blockquote",[_("p",[v._v("MySQL 没有选择红黑树的原因?")])]),v._v(" "),_("p",[v._v("因为红黑树追求的是大致的平衡（AVL 树追求的是严格的平衡），所以红黑树的平衡性相对较弱，可能会导致树的高度较高，进而会导致一些数据需要进行多次磁盘 IO 操作才能查询到，也就意味着查询效率会稍有下降。")]),v._v(" "),_("h3",{attrs:{id:"b树和-b-树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#b树和-b-树"}},[v._v("#")]),v._v(" B树和 B+树")]),v._v(" "),_("p",[v._v("B 树和 B+树中的 B 是 "),_("code",[v._v("Balanced")]),v._v(" （平衡）的意思。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("B 树也称 B-树,全称为 "),_("strong",[v._v("多路平衡查找树")]),v._v("，")])]),v._v(" "),_("li",[_("p",[v._v("B+ 树是 B 树的一种变体。")])])]),v._v(" "),_("p",[v._v("目前大部分数据库系统及文件系统都采用【B-树】或其变种【B+树】 作为索引结构。")]),v._v(" "),_("blockquote",[_("p",[v._v("【B树】和【B+树】有何异同呢？")])]),v._v(" "),_("ol",[_("li",[v._v("存放问题\n"),_("ul",[_("li",[v._v("B 树的所有节点既存放键(key) 也存放数据(data)；")]),v._v(" "),_("li",[v._v("而 B+树只有叶子节点存放 key 和 data，其他内节点只存放 key。")])])]),v._v(" "),_("li",[v._v("叶子节点\n"),_("ul",[_("li",[v._v("B 树的叶子节点都是独立的；")]),v._v(" "),_("li",[v._v("B+树的叶子节点有一条引用链指向与它相邻的叶子节点。")])])]),v._v(" "),_("li",[v._v("检索过程\n"),_("ul",[_("li",[v._v("B 树的检索的过程相当于对范围内的每个节点的关键字"),_("strong",[v._v("做二分查找")]),v._v("，可能还没有到达叶子节点，检索就结束了。")]),v._v(" "),_("li",[v._v("而 B+树的检索效率就很稳定了，任何查找都是从根节点到叶子节点的过程，叶子节点的"),_("strong",[v._v("顺序检索")]),v._v("很明显。")])])]),v._v(" "),_("li",[v._v("范围查询\n"),_("ul",[_("li",[v._v("在 B 树中进行范围查询时，首先找到要查找的下限，然后对 B 树进行中序遍历，直到找到查找的上限；")]),v._v(" "),_("li",[v._v("而 B+树的范围查询，只需要对链表进行遍历即可。")])])])]),v._v(" "),_("p",[v._v("总结：【B+树】与【B树】相比，具备更少的 IO 次数、更稳定的查询效率和更适于范围查询的优势。")]),v._v(" "),_("blockquote",[_("p",[v._v("在 MySQL 中，MyISAM 引擎和 InnoDB 引擎都是使用 B+Tree 作为索引结构，但是，两者的实现方式不太一样。")])]),v._v(" "),_("ul",[_("li",[v._v("MyISAM 引擎中，B+Tree 叶节点的 data 域存放的是数据记录的地址。实现的是 "),_("strong",[v._v("非聚集索引")]),v._v("。")]),v._v(" "),_("li",[v._v("而 InnoDB 引擎中，其数据文件本身就是索引文件。实现的是 "),_("strong",[v._v("聚集索引")]),v._v("。")])]),v._v(" "),_("h2",{attrs:{id:"索引类型总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引类型总结"}},[v._v("#")]),v._v(" 索引类型总结")]),v._v(" "),_("blockquote",[_("p",[v._v("按照"),_("strong",[v._v("数据结构维度")]),v._v("划分")])]),v._v(" "),_("ol",[_("li",[v._v("BTree 索引：MySQL 里默认和最常用的索引类型。只有叶子节点存储 value，非叶子节点只有指针和 key。")]),v._v(" "),_("li",[v._v("哈希索引：类似键值对的形式，一次即可定位。")]),v._v(" "),_("li",[v._v("RTree 索引：一般不会使用，仅支持 geometry 数据类型，优势在于范围查找，效率较低，通常使用搜索引擎如 ElasticSearch 代替。")]),v._v(" "),_("li",[v._v("全文索引：对文本的内容进行分词，进行搜索。目前只有 "),_("code",[v._v("CHAR")]),v._v("、"),_("code",[v._v("VARCHAR")]),v._v(" ，"),_("code",[v._v("TEXT")]),v._v(" 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。")])]),v._v(" "),_("blockquote",[_("p",[v._v("按照"),_("strong",[v._v("底层存储方式角度")]),v._v("划分")])]),v._v(" "),_("ul",[_("li",[v._v("聚簇索引（聚集索引）：索引结构和数据"),_("strong",[v._v("一起存放")]),v._v("的索引，InnoDB 中的主键索引就属于聚簇索引。")]),v._v(" "),_("li",[v._v("非聚簇索引（非聚集索引）：索引结构和数据"),_("strong",[v._v("分开存放")]),v._v("的索引，"),_("strong",[v._v("二级索引")]),v._v("(辅助索引)就属于非聚簇索引。MySQL 的 MyISAM 引擎，不管主键还是非主键，使用的都是非聚簇索引。")])]),v._v(" "),_("blockquote",[_("p",[v._v("按照"),_("strong",[v._v("应用维度")]),v._v("划分")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("主键索引：加速查询 + 列值唯一（不可以有 NULL）+ 表中只有一个。")])]),v._v(" "),_("li",[_("p",[v._v("普通索引：仅加速查询。")])]),v._v(" "),_("li",[_("p",[v._v("唯一索引：加速查询 + 列值唯一（可以有 NULL）。")])]),v._v(" "),_("li",[_("p",[v._v("覆盖索引：一个索引包含（或者说覆盖）所有需要查询的字段的值。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("联合索引")]),v._v("：多列值组成一个索引，专门用于组合搜索，其效率大于索引合并。")]),v._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("ALTER")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("TABLE")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token identifier"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("`")]),v._v("cus_order"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("`")])]),v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("ADD")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("INDEX")]),v._v(" id_score_name"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("score"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" name"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])])]),v._v(" "),_("li",[_("p",[v._v("全文索引：对文本的内容进行分词，进行搜索。目前只有 "),_("code",[v._v("CHAR")]),v._v("、"),_("code",[v._v("VARCHAR")]),v._v(" ，"),_("code",[v._v("TEXT")]),v._v(" 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。")])])]),v._v(" "),_("blockquote",[_("p",[v._v("MySQL 8.x 中实现的"),_("strong",[v._v("索引新特性")])])]),v._v(" "),_("ul",[_("li",[v._v("隐藏索引：也称为不可见索引，不会被优化器使用，但是仍然需要维护，通常会在软删除和灰度发布的场景中使用。"),_("strong",[v._v("主键不能设置为隐藏")]),v._v("（包括显式设置或隐式设置）。")]),v._v(" "),_("li",[v._v("降序索引：之前的版本就支持通过 desc 来指定索引为降序，但实际上创建的仍然是常规的升序索引（不指定的情况下，"),_("strong",[v._v("默认升序")]),v._v("）。直到 MySQL 8.x 版本才开始真正支持降序索引。另外，"),_("strong",[v._v("在 MySQL 8.x 版本中，不再对 GROUP BY 语句进行隐式排序。")])]),v._v(" "),_("li",[v._v("函数索引：从 MySQL 8.0.13 版本开始支持在索引中使用函数或者表达式的值，也就是在索引中可以包含函数或者表达式")])]),v._v(" "),_("h2",{attrs:{id:"最左前缀匹配原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最左前缀匹配原则"}},[v._v("#")]),v._v(" 最左前缀匹配原则")]),v._v(" "),_("p",[v._v("最左前缀匹配原则指的是，在使用联合索引时，MySQL 会根据联合索引中的字段顺序，"),_("strong",[v._v("从左到右依次到查询条件中去匹配")]),v._v("，如果查询条件中存在与联合索引中最左侧字段相匹配的字段，则就会使用该字段过滤一批数据，"),_("strong",[v._v("直至联合索引中全部字段匹配完成")]),v._v("，或者在执行过程中遇到范围查询（如 "),_("strong",[_("code",[v._v(">")])]),v._v("、"),_("strong",[_("code",[v._v("<")])]),v._v("）才会停止匹配。对于 "),_("strong",[_("code",[v._v(">=")])]),v._v("、"),_("strong",[_("code",[v._v("<=")])]),v._v("、"),_("strong",[_("code",[v._v("BETWEEN")])]),v._v("、"),_("strong",[_("code",[v._v("like")])]),v._v(" 前缀匹配的范围查询，并不会停止匹配。")]),v._v(" "),_("p",[v._v("所以，我们在使用联合索引时，可以将区分度高的字段放在最左边，这也可以过滤更多数据。")]),v._v(" "),_("p",[v._v("举个例子，如果有一个联合索引包含两个字段 A 和 B，需要进行查询时，如果只使用字段 B 作为查询条件，那么查询时将无法充分利用索引，需要遍历整个索引才能找到匹配的记录，这样查询效率会非常低。而如果使用字段 A 作为查询条件，那么可以直接定位到索引中对应的位置，"),_("strong",[v._v("然后再在这个范围内使用 B 进行匹配")]),v._v("，从而快速找到匹配的记录，查询效率将会大大提高。")])])}),[],!1,null,null,null);_.default=a.exports}}]);