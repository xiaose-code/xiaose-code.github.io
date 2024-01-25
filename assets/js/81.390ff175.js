(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{404:function(t,s,a){"use strict";a.r(s);var v=a(4),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-知识总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-知识总结"}},[t._v("#")]),t._v(" Git 知识总结")]),t._v(" "),s("blockquote",[s("p",[t._v("命令学习："),s("a",{attrs:{href:"https://oschina.gitee.io/learn-git-branching/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn Git Branching"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Git 命令大全："),s("a",{attrs:{href:"https://gitee.com/all-about-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 大全"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"版本控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[t._v("#")]),t._v(" 版本控制")]),t._v(" "),s("h3",{attrs:{id:"什么是版本控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是版本控制"}},[t._v("#")]),t._v(" 什么是版本控制？")]),t._v(" "),s("p",[t._v("版本控制是一种记录一个或若干个文件内容变化，"),s("strong",[t._v("以便将来查阅特定版本修订情况")]),t._v("的系统。关键时刻，可以回退版本。")]),t._v(" "),s("blockquote",[s("p",[t._v("除了项目源代码，你可以对任何类型的文件进行版本控制。")])]),t._v(" "),s("h3",{attrs:{id:"为什么需要版本控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要版本控制"}},[t._v("#")]),t._v(" 为什么需要版本控制？")]),t._v(" "),s("ul",[s("li",[t._v("版本控制可以让你将某个文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态。")]),t._v(" "),s("li",[t._v("你还可以通过提交的历史记录来比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。")])]),t._v(" "),s("h3",{attrs:{id:"三大版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三大版本控制系统"}},[t._v("#")]),t._v(" 三大版本控制系统")]),t._v(" "),s("h4",{attrs:{id:"本地版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地版本控制系统"}},[t._v("#")]),t._v(" 本地版本控制系统")]),t._v(" "),s("p",[t._v("方便个人管理项目文件。")]),t._v(" "),s("p",[t._v("大多都是采用某种简单的数据库来记录文件的历次更新差异。")]),t._v(" "),s("h4",{attrs:{id:"集中化的版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集中化的版本控制系统"}},[t._v("#")]),t._v(" 集中化的版本控制系统")]),t._v(" "),s("p",[t._v("为解决开发者协同合作问题而生。")]),t._v(" "),s("p",[t._v("都有一个"),s("strong",[t._v("单一的集中管理的服务器")]),t._v("，可以保存所有文件的修订版本，协同工作的开发者们都可以通过客户端连到这台服务器，取出最新的文件或者提交更新。")]),t._v(" "),s("p",[s("strong",[t._v("有两个问题：")])]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("单点故障：")]),t._v(" 中央服务器宕机，则其他人无法使用；如果中心数据库磁盘损坏又没有进行备份，你将丢失所有数据。本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。")]),t._v(" "),s("li",[t._v("**必须联网才能工作：**受网络状况和网络带宽影响。")])]),t._v(" "),s("h4",{attrs:{id:"分布式版本控制系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式版本控制系统"}},[t._v("#")]),t._v(" 分布式版本控制系统")]),t._v(" "),s("p",[t._v("为解决上面的问题面世，比如：Git")]),t._v(" "),s("p",[s("strong",[t._v("有以下几个优点：")])]),t._v(" "),s("ol",[s("li",[t._v("这类系统，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地克隆下来。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个克隆出来的本地仓库恢复。因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。")]),t._v(" "),s("li",[t._v("可以不用联网工作，因为每个人的电脑上都是完整的版本库。")]),t._v(" "),s("li",[t._v("强大的分支管理功能。")])]),t._v(" "),s("h2",{attrs:{id:"在开发中-常用的-git-开发操作流程是怎样的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在开发中-常用的-git-开发操作流程是怎样的"}},[t._v("#")]),t._v(" 在开发中，常用的 git 开发操作流程是怎样的？")]),t._v(" "),s("p",[t._v("在使用 Git 进行开发时，常用的操作流程包括：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("创建 Git 仓库：使用 "),s("code",[t._v("git init")]),t._v(" 命令初始化一个新的 Git 仓库。也可以使用 "),s("code",[t._v("git clone")]),t._v(" 命令克隆一个远程仓库到本地。")])]),t._v(" "),s("li",[s("p",[t._v("添加文件到暂存区：使用 "),s("code",[t._v("git add")]),t._v(" 命令将修改的文件添加到 Git 的暂存区中。")])]),t._v(" "),s("li",[s("p",[t._v("提交修改：使用 "),s("code",[t._v("git commit")]),t._v(" 命令提交修改。可以使用 "),s("code",[t._v("-m")]),t._v(" 参数指定提交的注释信息。")])]),t._v(" "),s("li",[s("p",[t._v("分支操作：使用 "),s("code",[t._v("git branch")]),t._v(" 命令创建、删除、查看分支。使用 "),s("code",[t._v("git checkout")]),t._v(" 命令切换分支。")])]),t._v(" "),s("li",[s("p",[t._v("合并分支：使用 "),s("code",[t._v("git merge")]),t._v(" 命令将一个分支合并到当前分支。")])]),t._v(" "),s("li",[s("p",[t._v("推送修改：使用 "),s("code",[t._v("git push")]),t._v(" 命令将本地修改推送到远程仓库。")])]),t._v(" "),s("li",[s("p",[t._v("拉取修改：使用 "),s("code",[t._v("git pull")]),t._v(" 命令从远程仓库拉取最新修改。")])]),t._v(" "),s("li",[s("p",[t._v("查看修改历史：使用 "),s("code",[t._v("git log")]),t._v(" 命令查看提交历史。")])]),t._v(" "),s("li",[s("p",[t._v("撤销修改：使用 "),s("code",[t._v("git reset")]),t._v(" 命令撤销某次提交。可以使用 "),s("code",[t._v("--soft")]),t._v(" 参数保留修改到暂存区，使用 "),s("code",[t._v("--mixed")]),t._v(" 参数保留修改到工作区，使用 "),s("code",[t._v("--hard")]),t._v(" 参数彻底删除修改。")])]),t._v(" "),s("li",[s("p",[t._v("标签操作：使用 "),s("code",[t._v("git tag")]),t._v(" 命令创建、删除、查看标签。标签可以用于标记某个版本，便于后续查找和发布。")])])]),t._v(" "),s("h2",{attrs:{id:"git-快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-快速入门"}},[t._v("#")]),t._v(" Git 快速入门")]),t._v(" "),s("h3",{attrs:{id:"git-有哪三种状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-有哪三种状态"}},[t._v("#")]),t._v(" Git 有哪三种状态？")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("已提交（committed）")]),t._v("：数据已经安全的保存在本地数据库中。")]),t._v(" "),s("li",[s("strong",[t._v("已修改（modified）")]),t._v("：已修改表示修改了文件，但还没保存到数据库中。")]),t._v(" "),s("li",[s("strong",[t._v("已暂存（staged）")]),t._v("：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。")])]),t._v(" "),s("h3",{attrs:{id:"git-关联-idea-文件颜色的意思"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-关联-idea-文件颜色的意思"}},[t._v("#")]),t._v(" Git 关联 idea 文件颜色的意思？")]),t._v(" "),s("ol",[s("li",[t._v("红色（red），"),s("strong",[t._v("未加入")]),t._v("版本控制")]),t._v(" "),s("li",[t._v("绿色（green），已经加入版本控制暂"),s("strong",[t._v("未提交")])]),t._v(" "),s("li",[t._v("蓝色（blue），加入版本控制，已提交，"),s("strong",[t._v("有改动")])]),t._v(" "),s("li",[t._v("白色（white），加入版本控制，已提交，"),s("strong",[t._v("无改动")])]),t._v(" "),s("li",[t._v("灰色（grey）：版本控制"),s("strong",[t._v("已忽略")]),t._v("文件")])]),t._v(" "),s("h3",{attrs:{id:"git-项目的三个工作区域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-项目的三个工作区域"}},[t._v("#")]),t._v(" Git 项目的三个工作区域")]),t._v(" "),s("ol",[s("li",[t._v("工作目录(working)")]),t._v(" "),s("li",[t._v("暂存区域(index)")]),t._v(" "),s("li",[t._v("Git 仓库(HEAD)")])]),t._v(" "),s("p",[t._v("working "),s("code",[t._v("=add=>")]),t._v(" index "),s("code",[t._v("=commit=>")]),t._v(" HEAD "),s("code",[t._v("=push=>")]),t._v(" 远程仓库")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/cmty256/imgs-blog@main/images/image.y5jbgb7v2e8.jpg",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"基本的-git-工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本的-git-工作流程"}},[t._v("#")]),t._v(" 基本的 Git 工作流程")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("准备仓库")]),t._v("：创建或从服务端克隆一个仓库。")]),t._v(" "),s("li",[s("strong",[t._v("搬砖")]),t._v("：在工作目录中添加、修改代码。")]),t._v(" "),s("li",[s("strong",[t._v("暂存")]),t._v("（git add）：将需要进行版本管理的文件放入暂存区域。")]),t._v(" "),s("li",[s("strong",[t._v("提交")]),t._v("（git commit）：将暂存区域的文件提交到Git仓库。")]),t._v(" "),s("li",[s("strong",[t._v("推送")]),t._v("（git push）：将本地仓库推送到远程仓库，同步版本库。")]),t._v(" "),s("li",[s("strong",[t._v("获取更新")]),t._v("（fetch/pull）：从服务端更新到本地，获取他人推送的更新，与他人协作、共享")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在工作目录中"),s("strong",[t._v("修改文件")]),t._v("。 -- 即写代码")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("暂存文件")]),t._v("，将文件的快照放入暂存区域。 -- 即表示已修改，文件变蓝色")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("提交更新")]),t._v("，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录中。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("文件的快照：就是指 文件的数据。是 Git 版本控制的核心。")])]),t._v(" "),s("h3",{attrs:{id:"查看-git-版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-git-版本号"}},[t._v("#")]),t._v(" 查看 Git 版本号")]),t._v(" "),s("p",[t._v("指令："),s("code",[t._v("git -- version")])]),t._v(" "),s("h3",{attrs:{id:"git的配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git的配置文件"}},[t._v("#")]),t._v(" Git的配置文件")]),t._v(" "),s("p",[t._v("Git有三个主要的配置文件：")]),t._v(" "),s("p",[t._v("三个配置文件的优先级是 "),s("strong",[t._v("① < ② < ③")])]),t._v(" "),s("p",[s("strong",[t._v("① 系统全局配置")]),t._v("(--system)：包含了适用于系统所有用户和所有仓库（项目）的配置信息，"),s("strong",[t._v("存放在 Git 安装目录下：")]),s("code",[t._v("C:\\Program Files\\Git\\etc\\gitconfig")])]),t._v(" "),s("p",[s("strong",[t._v("② 用户全局配置")]),t._v("(--global)：当前系统用户的全局配置，"),s("strong",[t._v("存放用户目录：")]),s("code",[t._v("C:\\Users\\[系统用户名]\\.gitconfig")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("③ 仓库/项目配置")]),t._v("(--local)：仓库（项目）的特定配置，"),s("strong",[t._v("存放在项目目录下：")]),s("code",[t._v(".git/config")])]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看git配置")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("list\ngit config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("l\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看系统配置")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("list\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看当前用户（global）全局配置")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("list "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("global\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看当前仓库配置信息")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("local  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("list\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"什么是-git-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-git-flow"}},[t._v("#")]),t._v(" 什么是 Git Flow")]),t._v(" "),s("p",[t._v("Git Flow 是一种基于 Git 版本控制工具的"),s("strong",[t._v("分支管理")]),t._v("工作流程，它定义了一套完整的分支模型，包括主分支、开发分支、功能分支、修复分支等，旨在优化团队协作、版本发布和代码质量等方面的工作流程。")]),t._v(" "),s("h3",{attrs:{id:"常用操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[t._v("#")]),t._v(" 常用操作")]),t._v(" "),s("h4",{attrs:{id:"获取-git-仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-git-仓库"}},[t._v("#")]),t._v(" 获取 Git 仓库")]),t._v(" "),s("p",[t._v("有两种方法：")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("在当前项目目录中初始化仓库：")])]),t._v(" "),s("p",[t._v("右键点击 "),s("code",[t._v("Git Bash Here")]),t._v(" 进入窗口运行 "),s("code",[t._v("git init")]),t._v(" 命令，该命令将创建一个名为 "),s("code",[t._v(".git")]),t._v(" 的子目录，代表已经加入版本控制。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("从一个服务器（远程仓库）克隆一个现有的 Git 仓库：")])]),t._v(" "),s("p",[t._v("进入希望项目存放的目录地址，运行 "),s("code",[t._v("git clone [url] 自定义文件夹名称")]),t._v(" 命令。")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("，使用"),s("code",[t._v("Git")]),t._v("命令克隆的方式可以和 原项目 随时保持更新同步。")])]),t._v(" "),s("li",[s("p",[t._v("克隆本地仓库")]),t._v(" "),s("p",[s("code",[t._v("git clone /path/to/repository")])])])]),t._v(" "),s("h4",{attrs:{id:"添加和提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加和提交"}},[t._v("#")]),t._v(" 添加和提交")]),t._v(" "),s("p",[t._v("添加、删除、改名：")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定文件到暂存区，包括被修改的文件")]),t._v("\n$ git add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加当前目录的所有文件到暂存区")]),t._v("\n$ git add .\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除工作区文件，并且将这次删除放入暂存区")]),t._v("\n$ git rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改名文件，并且将这个改名放入暂存区")]),t._v("\n$ git mv "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("original"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("renamed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("提交：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('git commit -m "代码提交信息"')]),t._v("  -- 此时已提交到了本地仓库中")])]),t._v(" "),s("h4",{attrs:{id:"初始化一个-readme文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个-readme文件"}},[t._v("#")]),t._v(" 初始化一个 Readme文件")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("touch README.md\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"切换分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),s("p",[s("code",[t._v("git checkout <branch>")])]),t._v(" "),s("h4",{attrs:{id:"推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送"}},[t._v("#")]),t._v(" 推送")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("查看本地 Git 仓库已经关联的远程仓库："),s("code",[t._v("git remote -v")])])]),t._v(" "),s("li",[s("p",[t._v("关联远程仓库："),s("code",[t._v("git remote add origin <server>")])])]),t._v(" "),s("li",[s("p",[t._v("推送分支："),s("code",[t._v("git push origin master[分支名称]")])])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("origin")]),t._v(" 是远程仓库的名称，"),s("code",[t._v("<server>")]),t._v(" 是远程仓库的 URL。")])]),t._v(" "),s("h2",{attrs:{id:"idea-使用更新项目操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea-使用更新项目操作"}},[t._v("#")]),t._v(" IDEA 使用更新项目操作")]),t._v(" "),s("p",[t._v("在使用 IntelliJ IDEA 进行 Git 操作时，更新项目时会出现如下两个选项：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Update Project")]),t._v(" 使用的是普通合并（merge）的方式，"),s("strong",[t._v("它会将远程分支上的最新代码拉取到本地，然后将本地分支上的代码与远程分支上的代码合并")]),t._v("。如果有冲突，需要手动解决冲突并提交代码。这种方式会生成一个新的合并提交，保留了本地分支和远程分支的所有提交历史。")]),t._v(" "),s("li",[s("code",[t._v("Update Project with Rebase")]),t._v(" 使用的是变基（rebase）的方式，"),s("strong",[t._v("它会将本地分支上的所有提交临时保存，然后将远程分支上的最新代码拉取到本地，并用变基的方式将本地分支上的所有提交重新基于远程分支的最新提交")]),t._v("。如果有冲突，需要手动解决冲突并提交代码。这种方式会生成一系列新的提交，覆盖了本地分支的所有提交历史。")])]),t._v(" "),s("p",[t._v("需要注意的是，使用变基操作会改变提交历史，可能会影响其他人的开发分支。因此，在多人协作开发中，"),s("strong",[t._v("建议使用普通合并（merge）操作")]),t._v("，只在特定情况下使用变基操作，例如在开发分支上进行调整和整理提交历史。")]),t._v(" "),s("p",[t._v("在选择更新方式时，可以根据实际情况选择合适的选项。如果当前分支与远程分支的差异较小，可以使用普通合并；如果差异较大，或者需要整理提交历史，可以使用变基操作。无论选择哪种方式，都需要谨慎处理未提交的修改，以免造成代码冲突和数据丢失。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[t._v("git - 简明指南："),s("a",{attrs:{href:"https://rogerdudler.github.io/git-guide/index.zh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git - the simple guide - no deep shit! (rogerdudler.github.io)"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=_.exports}}]);