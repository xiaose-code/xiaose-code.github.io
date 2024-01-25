(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{413:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"个人博客代码推送教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个人博客代码推送教程"}},[s._v("#")]),s._v(" 个人博客代码推送教程")]),s._v(" "),a("p",[s._v("生成静态文件 , yarn docs:build")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/blog/dist/*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将 build 生成的 dist 目录拷贝至上一层目录中")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" docs/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/blog/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入生成的文件夹")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/blog/dist\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("前面都一样，只有后面有没有设置远程库才有一点不一样")]),s._v(" "),a("p",[s._v("git 初始化，每次初始化不影响推送")]),s._v(" "),a("h2",{attrs:{id:"第一种-没有设置远程库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种-没有设置远程库"}},[s._v("#")]),s._v(" 第一种，没有设置远程库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git add 文件名，例如")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" SCY_BLOG\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-M")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:USERNAME/USERNAME.github.io.git main")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SSH 传输")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" git@github.com:xiaose-code/xiaose-code.github.io.git main\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HTTPS 传输")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://github.com/xiaose-code/xiaose-code.github.io.git main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"第二种-设置远程库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种-设置远程库"}},[s._v("#")]),s._v(" 第二种，设置远程库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git add 文件名，例如")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" SCY_BLOG\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加远程库的方式, SCY_origin 远程仓库名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" SCY_origin git@github.com:xiaose-code/SCY_BLOG.git\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-M")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后就是 git push 的提交，因此设置了远程库，所以可以直接用下面这行命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" SCY_origin main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"后续更改继续提交的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续更改继续提交的方式"}},[s._v("#")]),s._v(" 后续更改继续提交的方式")]),s._v(" "),a("p",[s._v("如果在本地仓库中进行了更改，并希望将这些更改推送到远程仓库")]),s._v(" "),a("p",[s._v("可以按照以下步骤操作：")]),s._v(" "),a("ol",[a("li",[s._v("首先，确保更改已经提交到本地仓库。如果没有提交，请使用以下命令提交更改："),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('git add .\ngit commit -m "提交信息"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),s._v('请将 "提交信息" 替换为您想要使用的提交信息。')]),s._v(" "),a("li",[s._v("推送更改到远程仓库："),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v("这条命令会将本地的更改推送到与本地分支关联的远程仓库。如果已经设置了默认的远程仓库（在本例中是 "),a("code",[s._v("SCY_origin")]),s._v("），则只需要执行 "),a("code",[s._v("git push")]),s._v(" 命令。如果您有多个远程仓库，需要指定远程仓库名称，如 "),a("code",[s._v("git push SCY_origin")]),s._v("。")]),s._v(" "),a("li",[s._v("如果您想要推送指定分支的更改，可以执行以下命令："),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git push <远程仓库名称> <分支名称>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v("例如，要将更改推送到 "),a("code",[s._v("SCY_origin")]),s._v(" 远程仓库的 "),a("code",[s._v("main")]),s._v(" 分支，可以使用以下命令："),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git push SCY_origin main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v("这样，您本地的更改就会被推送到远程仓库，其他人可以从中获取这些更改。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);