(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{450:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"kylinv10-将项目上传至-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kylinv10-将项目上传至-github"}},[s._v("#")]),s._v(" KylinV10 将项目上传至 Github")]),s._v(" "),t("blockquote",[t("p",[s._v("银河麒麟操作系统 V10 是在 Ubuntu 的基础上开发的，所以适用于 Ubuntu 的也适用于 KylinV10")])]),s._v(" "),t("p",[s._v("一般上传至 GitHub，有两种方式，一种是 HTTPS，一种是 SSH，但是在 KylinV10 操作系统 HTTPS 的上传方式一般都会被拦截，所以笔者推荐大家直接用 SSH 上传至 Github ，少走弯路。")]),s._v(" "),t("p",[t("strong",[s._v("没有下载 Git 的记得要先下载 Git")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_1、先配置-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、先配置-ssh"}},[s._v("#")]),s._v(" 1、先配置 SSH")]),s._v(" "),t("h3",{attrs:{id:"第一种-已被弃用-提一下-不要用这种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种-已被弃用-提一下-不要用这种"}},[s._v("#")]),s._v(" 第一种（已被弃用，提一下）==不要用这种！==")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱地址"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如：")]),s._v("\nssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cliviableak@outlook.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这个 SSH 密钥算法是 SHA-1，而 GitHub 现在不再接受使用 SHA-1 算法的密钥。需要更新 SSH 密钥并使用支持更强安全性的算法。")]),s._v(" "),t("h3",{attrs:{id:"第二种-ed25519密钥-推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种-ed25519密钥-推荐"}},[s._v("#")]),s._v(" "),t("strong",[s._v("第二种：==ED25519密钥==")]),s._v("(推荐)")]),s._v(" "),t("p",[s._v("为了更好的安全性，建议生成一个ED25519密钥。使用以下命令生成新密钥：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ed25519 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如：")]),s._v("\nssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ed25519 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cliviableak@outlook.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1702544504143.webp",alt:"1702544504143"}})]),s._v(" "),t("p",[t("strong",[s._v("将新SSH密钥添加到ssh-agent：")]),s._v(" 执行以下命令将新生成的SSH密钥添加到ssh-agent中：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\nssh-add ~/.ssh/id_ed25519\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("将新SSH公钥添加到GitHub帐户：")]),s._v(" 复制新生成的SSH公钥的内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gedit id_ed25519.pub\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果显示未知命令，那就执行先执行下面这句")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gedit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_2、在-github-配置-ssh-密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、在-github-配置-ssh-密钥"}},[s._v("#")]),s._v(" 2、在 GitHub 配置 SSH 密钥")]),s._v(" "),t("p",[s._v("在 GitHub 中依次点击 Settings -> SSH and GPG keys -> New SSH key，将 id_ed25519.pub 文件中的字符串复制进去；")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1702544371012.webp",alt:"1702544371012"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1702544633279.webp",alt:"1702544633279"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1702544770612.webp",alt:"1702544770612"}})]),s._v(" "),t("p",[s._v("添加完成就可以检查关联情况")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" git@github.com\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出 欢迎，说明配置成功")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1702544820367.webp",alt:"1702544820367"}})]),s._v(" "),t("h2",{attrs:{id:"_3、上传项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、上传项目"}},[s._v("#")]),s._v(" 3、上传项目")]),s._v(" "),t("p",[s._v("先在 Github 建立好仓库，然在在终端命令行进行操作")]),s._v(" "),t("p",[s._v("如果第一次创建仓库，啥都没有，先进入到你要上传的项目里，然后初始化")]),s._v(" "),t("p",[s._v("比如，笔者这里想把 net_wipe 项目目录全部上传上去，那就进入 net_wipe 目录")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1702545136136.webp",alt:"1702545136136"}})]),s._v(" "),t("p",[s._v("然后就可以照搬命令，改改信息就行了。")]),s._v(" "),t("p",[s._v("笔者设置用户名和邮箱这里没有使用全局 global，因为这个环境不是我私人的，所以没有配全局变量，因此终端对话关掉以后就得重新配置，想要一劳永逸的可以将命令改为如下（其他不用变）：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you@example.com"')]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你的 Github 的用户名")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your Name"')]),s._v("\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你的 Github 绑定的邮箱")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ./\t\t\t\t\t\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前目录整个文件夹内容都添加进去")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xiaose-code"')]),s._v("\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你的 Github 的用户名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cliviableak@outlook.com"')]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你的 Github 绑定的邮箱")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你自己的注释，比如，first commit"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-M")]),s._v(" main \t\t\t\t\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改变分支命名")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git remote add origin https://github.com/你的 Github 昵称/仓库名字.git")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如，笔者这里是：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git remote add origin https://github.com/xiaose-code/Net_wipe.git")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果用 https 连接，大概率显示连接失败4 43，尽量直接配置 SSH，用 SSH 连接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git remote add origin git@github.com:你的 Github 昵称/仓库名字.git")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如，笔者这里是：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@github.com:xiaose-code/Net_wipe.git\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin main\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"_3-1-更新远程仓库地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-更新远程仓库地址"}},[s._v("#")]),s._v(" 3.1 更新远程仓库地址：")]),s._v(" "),t("p",[t("strong",[s._v("如果你之前已经添加了一个"),t("code",[s._v("origin")]),s._v("远程仓库，请确保它指向新的SSH地址：")])]),s._v(" "),t("p",[s._v("比如，你之前使用了：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/你的 Github 昵称/仓库名字.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("那就需要使用下面这行命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin git@github.com:你的 Github 昵称/仓库名字.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-2-如果输入commit指令后-出现错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-如果输入commit指令后-出现错误"}},[s._v("#")]),s._v(" 3.2 如果输入commit指令后，出现错误：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("** Please tell me "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v(" you are.\nRun\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you@example.com"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your Name"')]),s._v("\n\nto "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" your account"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s default identity.\nOmit --global to set the identity only in this repository.\n\nfatal: unable to auto-detect email address (got '")]),s._v("XXX@YYY."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这时候的解决办法是，在进行"),t("code",[s._v("git add ./")]),s._v("操作的路径中，实际上已经生成了一个隐藏的.git文件夹。在该路径下输入指令"),t("code",[s._v("cd ./.git")]),s._v("便进入.git文件夹，使用gedit或vim打开文件config，在文件末尾加入内容：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[user]\n email = your email\t\t# 你的 Github 的用户名\n name = your name\t\t# 你的 Github 绑定的邮箱\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这时候再进行commit指令，应该就可以成功了。完成后就可以等待提交了。")]),s._v(" "),t("h3",{attrs:{id:"_3-3-完结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-完结"}},[s._v("#")]),s._v(" 3.3 完结")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xiaose-code/Pictures@main/img/1702546019123.webp",alt:"1702546019123"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);