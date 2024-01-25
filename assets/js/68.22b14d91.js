(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{392:function(_,v,t){"use strict";t.r(v);var e=t(4),a=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"数据库基础知识小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据库基础知识小结"}},[_._v("#")]),_._v(" 数据库基础知识小结")]),_._v(" "),v("h2",{attrs:{id:"什么是数据库-数据库管理员-数据库管理员-数据库系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库-数据库管理员-数据库管理员-数据库系统"}},[_._v("#")]),_._v(" 什么是数据库，数据库管理员，数据库管理员，数据库系统？")]),_._v(" "),v("p",[v("strong",[_._v("数据库")]),_._v(": 数据库(DataBase 简称 DB)就是信息的集合或者说数据库是由数据库管理系统管理的数据的集合。")]),_._v(" "),v("p",[v("strong",[_._v("数据库管理系统")]),_._v(": 数据库管理系统(DataBase Management System 简称 DBMS)是一种操纵和管理数据库的大型软件，通常用于建立、使用和维护数据库。")]),_._v(" "),v("p",[v("strong",[_._v("数据库管理员")]),_._v(": 数据库管理员(DataBase Administrator, 简称 DBA)负责全面管理和控制数据库系统。")]),_._v(" "),v("p",[v("strong",[_._v("数据库系统")]),_._v(": 数据库系统(DataBase System，简称 DBS)通常由软件、数据库和数据管理员(DBA)组成。")]),_._v(" "),v("h2",{attrs:{id:"什么是元组-码-候选码-主码-外码-主属性-非主属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是元组-码-候选码-主码-外码-主属性-非主属性"}},[_._v("#")]),_._v(" 什么是元组，码，候选码，主码，外码，主属性，非主属性？")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("元组")]),_._v("：元组（tuple）是关系数据库中的基本概念，关系是一张表，表中的每行（即"),v("strong",[_._v("数据库中的每条记录")]),_._v("）就是一个元组，每列就是一个属性。在二维表里，元组也称为行。")]),_._v(" "),v("li",[v("strong",[_._v("码")]),_._v("：码就是能唯一标识实体的属性，对应表中的"),v("strong",[_._v("列")]),_._v("。")]),_._v(" "),v("li",[v("strong",[_._v("候选码")]),_._v("：若关系中的"),v("strong",[_._v("某一属性或属性组")]),_._v("的值能唯一的标识一个元组，而其任何子集都不能再标识，则称该属性组为候选码。例如：在学生实体中，“学号”是能唯一的区分学生实体的，同时又假设“姓名”、“班级”的属性组合足以区分学生实体，那么{学号}和{姓名，班级}都是候选码。")]),_._v(" "),v("li",[v("strong",[_._v("主码")]),_._v(": 主码也叫主键。主码是从候选码中选出来的。一个实体集中只能有一个主码，但可以有多个候选码。")]),_._v(" "),v("li",[v("strong",[_._v("外码")]),_._v(": 外码也叫外键。如果一个关系中的一个属性是另外一个关系中的主码则这个属性为外码。")]),_._v(" "),v("li",[v("strong",[_._v("主属性")]),_._v("：候选码中出现过的属性称为主属性。比如工人表（工号，身份证号，姓名，性别，部门），显然工号和身份证号都能够唯一标示这个关系，所以都是候选码。工号、身份证号这两个属性就是主属性。如果主码是一个属性组，那么属性组中的属性都是主属性。")]),_._v(" "),v("li",[v("strong",[_._v("非主属性")]),_._v("：不包含在任何一个候选码中的属性称为非主属性。比如在关系——学生（学号，姓名，年龄，性别，班级）中，主码是“学号”，那么其他的“姓名”、“年龄”、“性别”、“班级”就都可以称为非主属性。")])]),_._v(" "),v("p",[_._v("关系 -- 表，行 -- 行，属性 -- 列")]),_._v(" "),v("h2",{attrs:{id:"什么是-er-图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-er-图"}},[_._v("#")]),_._v(" 什么是 ER 图？")]),_._v(" "),v("p",[v("strong",[_._v("ER 图")]),_._v(" 全称是 Entity Relationship Diagram（实体联系图），提供了表示实体类型、属性和联系的方法。")]),_._v(" "),v("p",[_._v("ER 图由下面 3 个要素组成：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("实体")]),_._v("：通常是现实世界的业务对象，当然使用一些逻辑对象也可以。比如对于一个校园管理系统，会涉及学生、教师、课程、班级等等实体。在 ER 图中，实体使用"),v("strong",[_._v("矩形框")]),_._v("表示。")]),_._v(" "),v("li",[v("strong",[_._v("属性")]),_._v("：即某个实体拥有的属性，属性用来描述组成实体的要素，对于产品设计来说可以理解为字段。在 ER 图中，属性使用"),v("strong",[_._v("椭圆形")]),_._v("表示。")]),_._v(" "),v("li",[v("strong",[_._v("联系")]),_._v("：即实体与实体之间的关系，在 ER 图中用"),v("strong",[_._v("菱形")]),_._v("表示，这个关系不仅有业务关联关系，还能通过数字表示实体之间的数量对照关系。例如，一个班级会有多个学生就是一种实体间的联系。（一对多关系）")])]),_._v(" "),v("p",[_._v("ER 图示例：学生选课")]),_._v(" "),v("p",[_._v("每个学生可以选若干门课程，同一门课程也可以被若干人选择，所以它们之间的关系是多对多（M: N）。另外，还有其他两种实体之间的关系是：1 对 1（1:1）、1 对多（1:N）。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/basics/image.3ecwhfagog80.webp",alt:"image"}})]),_._v(" "),v("h2",{attrs:{id:"讲讲数据库范式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#讲讲数据库范式"}},[_._v("#")]),_._v(" 讲讲数据库范式")]),_._v(" "),v("p",[_._v("数据库范式是用于规范化数据库设计的一组规则，旨在消除数据冗余、提高数据存储效率和数据完整性。")]),_._v(" "),v("p",[_._v("数据库范式有 3 种：")]),_._v(" "),v("ul",[v("li",[_._v("1NF(第一范式)：属性不可再分。")]),_._v(" "),v("li",[_._v("2NF(第二范式)：1NF 的基础之上，消除了非主属性对于码的部分函数依赖。")]),_._v(" "),v("li",[_._v("3NF(第三范式)：3NF 在 2NF 的基础之上，消除了非主属性对于码的传递函数依赖。")])]),_._v(" "),v("p",[_._v("重要概念详解：")]),_._v(" "),v("blockquote",[v("p",[_._v("函数依赖（Functional Dependency）：")])]),_._v(" "),v("p",[_._v("函数依赖是指在一个关系（表）中，一个或多个属性的值可以唯一确定其他属性的值。在关系中，一个属性（或属性组合）称为决定因素（Determinant），其他属性称为依赖因素（Dependent）。如果在关系 R 中，X 是决定因素，Y 是依赖因素，并且对于任意两个元组 t1 和 t2，如果 t1 的 X 值相等于 t2 的 X 值，则它们的 Y 值也必须相等，那么我们可以说 "),v("strong",[_._v("Y 函数依赖于 X")]),_._v("，用符号表示为 X -> Y。")]),_._v(" "),v("blockquote",[v("p",[_._v("部分函数依赖（Partial Functional Dependency）：")])]),_._v(" "),v("p",[_._v("部分函数依赖是指在一个关系中，一个属性（或属性组合）依赖于另一个属性（或属性组合），但是该属性（或属性组合）只依赖于决定因素的一部分而不是全部。换句话说，存在非主属性依赖于候选码的一部分。")]),_._v(" "),v("p",[_._v("例如，考虑一个关系 R (学号, 姓名, 班级, 年龄)，假设学号是主属性（候选码），姓名和班级依赖于学号，但是年龄只依赖于班级，而不是学号，那么年龄对于班级是部分函数依赖。")]),_._v(" "),v("blockquote",[v("p",[_._v("完全函数依赖（Full Functional Dependency）：")])]),_._v(" "),v("p",[_._v("完全函数依赖是指在一个关系中，一个属性（或属性组合）依赖于另一个属性（或属性组合），且该属性（或属性组合）对于决定因素是完全依赖的，没有部分依赖。换句话说，所有的非主属性都完全依赖于候选码。")]),_._v(" "),v("p",[_._v("继续上述例子，如果年龄只依赖于学号，而不依赖于班级，那么年龄对于学号就是完全函数依赖。")]),_._v(" "),v("blockquote",[v("p",[_._v("传递函数依赖（Transitive Functional Dependency）：")])]),_._v(" "),v("p",[_._v("传递函数依赖是指在一个关系中，如果 X -> Y 且 Y -> Z，则可以推导出 X -> Z。换句话说，如果存在函数依赖 X -> Y 和 Y -> Z，那么就存在传递函数依赖 X -> Z。")]),_._v(" "),v("p",[_._v("例如，考虑一个关系 R (学号, 姓名, 班级, 学校)，假设学号决定了姓名，姓名决定了班级，那么就存在传递函数依赖 学号 -> 班级。")]),_._v(" "),v("h2",{attrs:{id:"主键和外键有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主键和外键有什么区别"}},[_._v("#")]),_._v(" 主键和外键有什么区别?")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("主键(主码)")]),_._v("：主键用于唯一标识一个元组，不能有重复，不允许为空。一个表只能有一个主键。")]),_._v(" "),v("li",[v("strong",[_._v("外键(外码)")]),_._v("：外键用来和其他表建立联系用，外键是另一表的主键，外键是可以有重复的，可以是空值。一个表可以有多个外键。")])]),_._v(" "),v("h2",{attrs:{id:"为什么不推荐使用外键与级联"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么不推荐使用外键与级联"}},[_._v("#")]),_._v(" 为什么不推荐使用外键与级联？")]),_._v(" "),v("p",[_._v("阿里巴巴开发手册：")]),_._v(" "),v("blockquote",[v("p",[_._v("【强制】不得使用外键与级联，一切外键概念必须在应用层解决。")]),_._v(" "),v("p",[_._v("说明: 以学生和成绩的关系为例，学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，即为级联更新。"),v("strong",[_._v("外键与级联更新适用于单机低并发，不适合分布式、高并发集群;")]),_._v(" 级联更新是强阻塞，存在数据库更新风暴的风险; 外键影响数据库的插入速度")])]),_._v(" "),v("p",[_._v("原因：")]),_._v(" "),v("ol",[v("li",[_._v("数据库性能：使用外键和级联操作可能"),v("strong",[_._v("会导致数据库性能下降")]),_._v("。级联操作会引起多表之间的复杂关联和更新操作，可能增加数据库的负担，特别是在大规模数据库和高并发情况下。")]),_._v(" "),v("li",[_._v("数据库复杂性：外键和级联操作会"),v("strong",[_._v("增加数据库的复杂性")]),_._v("。当数据库结构涉及多个表之间的关联关系时，外键和级联操作可能增加数据管理和维护的复杂性，不适用于简单的数据库结构。")]),_._v(" "),v("li",[_._v("数据库死锁：使用级联操作时，可能"),v("strong",[_._v("会引发数据库死锁问题")]),_._v("。如果多个表之间存在循环级联更新或删除操作，可能导致死锁情况，影响数据库的正常运行。")]),_._v(" "),v("li",[_._v("数据一致性：级联操作可能导致数据一致性问题。当使用级联操作时，"),v("strong",[_._v("可能会导致意外删除或更新关联的数据")]),_._v("，从而影响数据库的数据一致性。")]),_._v(" "),v("li",[v("strong",[_._v("增加了复杂性（每次做 DELETE 或者 UPDATE 都必须考虑外键约束）")])]),_._v(" "),v("li",[v("strong",[_._v("对分库分表不友好（因为分库分表下外键是无法生效的）")])])]),_._v(" "),v("p",[_._v("使用外键的好处：")]),_._v(" "),v("ul",[v("li",[_._v("数据完整性：外键"),v("strong",[_._v("可以确保数据库中的数据完整性")]),_._v("。通过在一个表中引用另一个表的主键作为外键，可以确保两个表之间的关联关系是有效的。这样可以防止数据不一致和无效数据的插入，保持数据库的一致性。")]),_._v(" "),v("li",[_._v("数据一致性：外键"),v("strong",[_._v("可以帮助维护数据库中的数据一致性")]),_._v("。当对主表的数据进行更新或删除操作时，有了外键约束，数据库会自动检查关联的从表是否有相应的数据，并执行相应的操作，避免了数据的不一致性。")]),_._v(" "),v("li",[_._v("数据查询和连接：使用外键可以更方便地进行数据查询和连接操作。通过外键，"),v("strong",[_._v("可以简化多表之间的数据查询")]),_._v("，避免了复杂的嵌套查询和多表连接操作，提高查询效率。")]),_._v(" "),v("li",[_._v("数据库性能：外键"),v("strong",[_._v("可以提高数据库的性能")]),_._v("。通过外键，数据库优化器可以更好地理解表之间的关联关系，从而优化查询计划，提高查询效率。")]),_._v(" "),v("li",[_._v("索引使用：外键通常"),v("strong",[_._v("会自动创建索引，提高数据查询的速度")]),_._v("。通过在外键字段上创建索引，可以加速表之间的关联查询。")]),_._v(" "),v("li",[_._v("约束管理：使用外键可以更好地管理数据库中的约束。通过外键，"),v("strong",[_._v("可以明确定义表之间的关系，简化数据管理，减少数据错误和异常情况的发生")]),_._v("。")])]),_._v(" "),v("h2",{attrs:{id:"什么是存储过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是存储过程"}},[_._v("#")]),_._v(" 什么是存储过程？")]),_._v(" "),v("p",[_._v("存储过程（Stored Procedure）是一种预先编译的数据库操作代码块，它包含了一系列的 SQL 语句和逻辑，可以在数据库中被保存并多次重复调用。")]),_._v(" "),v("p",[_._v("特点：")]),_._v(" "),v("ol",[v("li",[_._v("预编译：存储过程在第一次被创建时会被编译，而不是在每次调用时解析和编译。这样可以提高存储过程的执行效率。")]),_._v(" "),v("li",[_._v("可重用：存储过程可以在数据库中被保存并多次调用，提供了代码的复用性，减少了重复编写相同功能的SQL语句。")]),_._v(" "),v("li",[_._v("安全性：存储过程可以定义权限，只有具有足够权限的用户才能调用和执行存储过程，增加了数据库的安全性。")]),_._v(" "),v("li",[_._v("事务控制：存储过程可以包含多个SQL语句，可以在一个事务中执行，保证数据库操作的原子性和一致性。")]),_._v(" "),v("li",[_._v("提高性能：存储过程的预编译和缓存机制可以减少数据库服务器的负载，提高数据库的性能。")])]),_._v(" "),v("p",[_._v("使用场景：")]),_._v(" "),v("ol",[v("li",[_._v("复杂业务逻辑：存储过程适用于包含复杂业务逻辑的操作，可以将复杂的数据处理和计算交给数据库服务器处理，减轻应用程序的负担。")]),_._v(" "),v("li",[_._v("数据校验和约束：存储过程可以用于数据校验和约束的实现，确保数据的有效性和完整性。")]),_._v(" "),v("li",[_._v("数据库维护：存储过程可以用于数据库维护和数据迁移操作，提供数据库的管理和维护能力。")]),_._v(" "),v("li",[_._v("批处理操作：存储过程适用于批量数据处理和操作，可以提高数据处理的效率。")])]),_._v(" "),v("h2",{attrs:{id:"drop、delete-与-truncate-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#drop、delete-与-truncate-区别"}},[_._v("#")]),_._v(" drop、delete 与 truncate 区别？")]),_._v(" "),v("blockquote",[v("p",[_._v("用法不同")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("DROP")]),_._v(" 用于删除整个表，包括结构和数据，是最彻底的删除操作。")]),_._v(" "),v("li",[v("code",[_._v("DELETE")]),_._v(" 用于删除表中的数据，但保留表的结构，可以指定条件删除部分数据。（可以回滚事务和记录日志）")]),_._v(" "),v("li",[v("code",[_._v("TRUNCATE")]),_._v(" 用于删除表中的数据，但保留表的结构，删除整个表的数据，效率比 "),v("code",[_._v("DELETE")]),_._v(" 高。")])]),_._v(" "),v("blockquote",[v("p",[_._v("属于不同的数据库语言")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("truncate")]),_._v(" 和 "),v("code",[_._v("drop")]),_._v(" 属于 DDL(数据定义语言)语句，操作立即生效，原数据不放到 rollback segment 中，不能回滚，操作不触发 trigger。")]),_._v(" "),v("li",[_._v("而 "),v("code",[_._v("delete")]),_._v(" 语句是 DML (数据库操作语言)语句，这个操作会放到 rollback segment 中，事务提交之后才生效。")])]),_._v(" "),v("p",[v("strong",[_._v("DML 语句和 DDL 语句区别：")])]),_._v(" "),v("ul",[v("li",[_._v("DML 是数据库操作语言（Data Manipulation Language）的缩写，是指对数据库中表记录的操作，主要包括表记录的插入、更新、删除和查询，是开发人员日常使用最频繁的操作。")]),_._v(" "),v("li",[_._v("DDL （Data Definition Language）是数据定义语言的缩写，简单来说，就是对数据库内部的对象进行创建、删除、修改的操作语言。它和 DML 语言的最大区别是 DML 只是对表内部数据的操作，而不涉及到表的定义、结构的修改，更不会涉及到其他对象。DDL 语句更多的被数据库管理员（DBA）所使用，一般的开发人员很少使用。")])]),_._v(" "),v("p",[_._v("另外，由于 "),v("code",[_._v("select")]),_._v(" 不会对表进行破坏，所以有的地方也会把 "),v("code",[_._v("select")]),_._v(" 单独区分开叫做数据库查询语言 DQL（Data Query Language）。")]),_._v(" "),v("blockquote",[v("p",[_._v("执行速度不同")])]),_._v(" "),v("p",[v("code",[_._v("drop")]),_._v(" > "),v("code",[_._v("truncate")]),_._v(" > "),v("code",[_._v("delete")])]),_._v(" "),v("p",[_._v("原因：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("delete")]),_._v(" 命令执行的时候会产生数据库的 "),v("code",[_._v("binlog")]),_._v(" 日志，而日志记录是需要消耗时间的，但是也有个好处方便数据回滚恢复。")]),_._v(" "),v("li",[v("code",[_._v("truncate")]),_._v(" 命令执行的时候不会产生数据库日志，因此比 "),v("code",[_._v("delete")]),_._v(" 要快。除此之外，还会把表的自增值重置和索引恢复到初始大小等。")]),_._v(" "),v("li",[v("code",[_._v("drop")]),_._v(" 命令会把表占用的空间全部释放掉。")])]),_._v(" "),v("p",[_._v("总结：")]),_._v(" "),v("ul",[v("li",[_._v("如果需要删除整个表的数据并且不需要记录日志和触发触发器，"),v("code",[_._v("TRUNCATE")]),_._v(" 是最快的选择。")]),_._v(" "),v("li",[_._v("如果需要按条件逐行删除数据并且需要记录日志和触发触发器，使用 "),v("code",[_._v("DELETE")]),_._v("。")]),_._v(" "),v("li",[_._v("如果需要彻底删除整个表及其数据，可以使用 "),v("code",[_._v("DROP")]),_._v("。")])]),_._v(" "),v("h2",{attrs:{id:"数据库设计通常分为哪几步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计通常分为哪几步"}},[_._v("#")]),_._v(" 数据库设计通常分为哪几步？")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("需求分析")]),_._v(" : 分析用户的需求，包括数据、功能和性能需求。")]),_._v(" "),v("li",[v("strong",[_._v("概念结构设计")]),_._v(" : 主要采用 E-R 模型进行设计，包括画 E-R 图。")]),_._v(" "),v("li",[v("strong",[_._v("逻辑结构设计")]),_._v(" : 通过将 E-R 图转换成表，实现从 E-R 模型到关系模型的转换。")]),_._v(" "),v("li",[v("strong",[_._v("物理结构设计")]),_._v(" : 主要是为所设计的数据库选择合适的存储结构和存取路径。")]),_._v(" "),v("li",[v("strong",[_._v("数据库实施")]),_._v(" : 包括编程、测试和试运行。")]),_._v(" "),v("li",[v("strong",[_._v("数据库的运行和维护")]),_._v(" : 系统的运行与数据库的日常维护。")])]),_._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[_._v("#")]),_._v(" 参考")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://javaguide.cn/database/basis.html#%E6%89%A7%E8%A1%8C%E9%80%9F%E5%BA%A6%E4%B8%8D%E5%90%8C",target:"_blank",rel:"noopener noreferrer"}},[_._v("数据库基础知识总结"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=a.exports}}]);