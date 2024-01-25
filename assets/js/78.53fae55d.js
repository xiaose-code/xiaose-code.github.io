(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{402:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jwt-基础小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt-基础小结"}},[s._v("#")]),s._v(" JWT 基础小结")]),s._v(" "),t("h2",{attrs:{id:"什么是-jwt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jwt"}},[s._v("#")]),s._v(" 什么是 JWT？")]),s._v(" "),t("p",[s._v("JWT （JSON Web Token） 是目前最流行的跨域认证解决方案，是"),t("strong",[s._v("一种基于 Token 的认证授权机制")]),s._v("。")]),s._v(" "),t("p",[s._v("从 JWT 的全称可以看出，JWT 本身也是 Token，一种规范化之后的 JSON 结构的 Token。")]),s._v(" "),t("p",[s._v("通过数字签名的方式，以 JSON 对象为载体，在不同的服务终端之间安全的传输信息。")]),s._v(" "),t("blockquote",[t("p",[s._v("JWT "),t("strong",[s._v("自身包含了身份验证所需要的所有信息")]),s._v("，因此，我们的"),t("strong",[s._v("服务器不需要存储 Session 信息")]),s._v("。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。(JWT 存储在【客户端】)")]),s._v(" "),t("p",[s._v("并且， 使用 JWT 认证可以有效避免 CSRF 攻击，因为 JWT 一般是存在在 localStorage 中，使用 JWT 进行身份验证的过程中是不会涉及到 Cookie 的。")])]),s._v(" "),t("h2",{attrs:{id:"jwt-有什么用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt-有什么用"}},[s._v("#")]),s._v(" JWT 有什么用？")]),s._v(" "),t("p",[s._v("JWT 最常见的场景就是授权认证，一旦用户登录，后续每个请求都将包含JWT，系统在每次处理用户请求的之前，都要先进行 JWT 安全校验，通过之后再进行处理。")]),s._v(" "),t("h2",{attrs:{id:"jwt-的组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt-的组成"}},[s._v("#")]),s._v(" JWT 的组成")]),s._v(" "),t("p",[s._v("JWT 由 3 部分组成，用 "),t("code",[s._v(".")]),s._v(" 拼接")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eyJ1c2VybmFtZSI6IlRvbSIsInJvbGUiOiJhZG1pbiIsInN1YiI6ImFkbWluLXRlc3QiLCJleHAiOjE2MjMyMjM2NzUsImp0aSI6ImQ2MTJjZjcxLWI5ZmUtNGMwNy04MzQwLTViOWViZmMyNjExNyJ9\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("FOS9Y7rYNdc2AOidnSPrgg2XTYePU0yGZ598h2gtabE")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("可以在 "),t("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jwt.io"),t("OutboundLink")],1),s._v(" 这个网站上对 JWT 进行解码，解码之后得到的就是 Header、Payload、Signature 这三部分。")]),s._v(" "),t("p",[s._v("这三部分分别是：")]),s._v(" "),t("h3",{attrs:{id:"header"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[s._v("#")]),s._v(" Header")]),s._v(" "),t("p",[s._v("Header 通常由两部分组成：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("typ")]),s._v("（Type）：令牌类型，也就是 JWT。")]),s._v(" "),t("li",[t("code",[s._v("alg")]),s._v("（Algorithm）：签名算法，比如 HS256。")])]),s._v(" "),t("blockquote",[t("p",[s._v("JSON 形式的 Header 被转换成 Base64 编码，成为 JWT 的第一部分。")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token char"}},[s._v("'typ'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token char"}},[s._v("'JWT'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token char"}},[s._v("'alg'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token char"}},[s._v("'HS256'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"payload-声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#payload-声明"}},[s._v("#")]),s._v(" Payload 声明")]),s._v(" "),t("p",[s._v("Payload 也是 JSON 格式数据，其中包含了 Claims(声明，包含 JWT 的相关信息)。")]),s._v(" "),t("blockquote",[t("p",[s._v("Payload 部分默认是不加密的，"),t("strong",[s._v("一定不要将隐私信息存放在 Payload 当中！！！")])]),s._v(" "),t("p",[s._v("JSON 形式的 Payload 被转换成 Base64 编码，成为 JWT 的第二部分")])]),s._v(" "),t("p",[s._v("Claims 分为三种类型：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Registered Claims（注册声明）")]),s._v("：预定义的一些声明，建议使用，但不是强制性的。")]),s._v(" "),t("li",[t("strong",[s._v("Public Claims（公有声明）")]),s._v("：JWT 签发方可以自定义的声明，但是为了避免冲突，应该在 "),t("a",{attrs:{href:"https://www.iana.org/assignments/jwt/jwt.xhtml",target:"_blank",rel:"noopener noreferrer"}},[s._v("IANA JSON Web Token Registry"),t("OutboundLink")],1),s._v(" 中定义它们。")]),s._v(" "),t("li",[t("strong",[s._v("Private Claims（私有声明）")]),s._v("：JWT 签发方因为项目需要而自定义的声明，更符合实际项目场景使用。")])]),s._v(" "),t("p",[s._v("下面是一些常见的注册声明：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("iss")]),s._v("（issuer）：JWT 签发方。")]),s._v(" "),t("li",[t("code",[s._v("iat")]),s._v("（issued at time）：JWT 签发时间。")]),s._v(" "),t("li",[t("code",[s._v("sub")]),s._v("（subject）：JWT 主题。")]),s._v(" "),t("li",[t("code",[s._v("aud")]),s._v("（audience）：JWT 接收方。")]),s._v(" "),t("li",[t("code",[s._v("exp")]),s._v("（expiration time）：JWT 的过期时间。")]),s._v(" "),t("li",[t("code",[s._v("nbf")]),s._v("（not before time）：JWT 生效时间，早于该定义的时间的 JWT 不能被接受处理。")]),s._v(" "),t("li",[t("code",[s._v("jti")]),s._v("（JWT ID）：JWT 唯一标识。")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"uid"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ff1212f5-d8d1-4496-bf41-d2dda73de19a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sub"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1234567890"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John Doe"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exp"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15323232")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"iat"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1516239022")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scope"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sub"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234567890")]),s._v("'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token char"}},[s._v("'john'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"signature-签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signature-签名"}},[s._v("#")]),s._v(" Signature 签名")]),s._v(" "),t("p",[s._v("Signature 部分是对前两部分的签名，"),t("strong",[s._v("作用是防止 JWT（主要是 payload）被篡改")]),s._v("。")]),s._v(" "),t("p",[s._v("这个签名的生成需要用到：")]),s._v(" "),t("ul",[t("li",[s._v("Header + Payload。")]),s._v(" "),t("li",[s._v("存放在服务端的密钥(一定不要泄露出去)。 -- "),t("code",[s._v("secret")])]),s._v(" "),t("li",[s._v("签名算法。 -- "),t("code",[s._v("HMACSHA256")])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一种方式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" encodedString "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("base64UrlEncode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("header"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("base64UrlEncode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" signature "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HMACSHA256")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodedString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'secret'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第二种方式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HMACSHA256")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("base64UrlEncode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("header"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("base64UrlEncode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  secret"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("blockquote",[t("p",[s._v('算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（'),t("code",[s._v(".")]),s._v("）分隔，这个字符串就是 JWT 。")])]),s._v(" "),t("h2",{attrs:{id:"相关依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关依赖"}},[s._v("#")]),s._v(" 相关依赖")]),s._v(" "),t("p",[t("code",[s._v("pom.xml")]),s._v(" 文件")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("io.jsonwebtoken"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jjwt"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("0.9.1"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("javax.xml.bind"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jaxb-api"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.3.0"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.sun.xml.bind"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jaxb-impl"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.3.0"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.sun.xml.bind"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("jaxb-core"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("2.3.0"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("javax.activation"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("activation"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("1.1.1"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h2",{attrs:{id:"如何基于-jwt-进行身份验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何基于-jwt-进行身份验证"}},[s._v("#")]),s._v(" 如何基于 JWT 进行身份验证？")]),s._v(" "),t("p",[s._v("在基于 JWT 进行身份验证的的应用程序中，")]),s._v(" "),t("p",[s._v("服务器通过 Payload、Header 和 Secret(密钥)创建 JWT 并将 JWT 发送给客户端。")]),s._v(" "),t("p",[s._v("客户端接收到 JWT 之后，会将其保存在 Cookie 或者 localStorage 里面，以后客户端发出的所有请求都会携带这个令牌。")]),s._v(" "),t("p",[t("strong",[s._v("从用户的角度来分析：")])]),s._v(" "),t("ol",[t("li",[s._v("用户向服务器发送用户名、密码以及验证码用于登陆系统。")]),s._v(" "),t("li",[s._v("如果用户用户名、密码以及验证码校验正确的话，服务端会返回已经签名的 Token，也就是 JWT。")]),s._v(" "),t("li",[s._v("用户以后每次向后端发请求都在 Header 中带上这个 JWT 。")]),s._v(" "),t("li",[s._v("服务端检查 JWT 并从中获取用户相关信息。")])]),s._v(" "),t("h2",{attrs:{id:"为什么用-jwt-代替-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-jwt-代替-session"}},[s._v("#")]),s._v(" 为什么用 JWT 代替 Session")]),s._v(" "),t("p",[s._v("JWT (JSON Web Token) 被用于代替传统的基于 Session 的身份认证和授权机制的主要原因有以下几点：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("无需服务器存储：")]),s._v(" 在传统的 Session 机制中，服务器需要维护每个用户的会话状态，通常是存储在内存或数据库中。而使用 JWT，所有的用户信息和权限信息都被编码到了 token 中，服务器无需存储任何状态信息，这样可以减轻服务器的负担。")]),s._v(" "),t("li",[t("strong",[s._v("跨域支持：")]),s._v(" JWT 可以轻松地在多个域之间进行传递和使用，这使得跨域通信和微服务架构变得更加简单。")]),s._v(" "),t("li",[t("strong",[s._v("扩展性：")]),s._v(" JWT 是一种开放标准，可以支持自定义的声明和数据结构。这使得 JWT 非常灵活，可以根据实际需求添加额外的信息。")]),s._v(" "),t("li",[t("strong",[s._v("无状态性：")]),s._v(" 传统的基于 Session 的认证机制需要服务器保存会话状态，而 JWT 是无状态的。每个请求都包含了认证信息，服务器不需要再去查询数据库或存储中心来验证用户的身份。")]),s._v(" "),t("li",[t("strong",[s._v("安全性：")]),s._v(" JWT 内置了签名机制，可以验证 token 的真实性和完整性。这样即使 token 被篡改，服务器也能识别出来并拒绝该 token。")]),s._v(" "),t("li",[t("strong",[s._v("适用于分布式系统：")]),s._v(" JWT 适用于分布式系统和微服务架构，可以跨多个服务进行认证和授权。")])]),s._v(" "),t("p",[s._v("总的来说，JWT 是一种轻量级、可扩展、无状态和安全的认证机制，相较于传统的基于 Session 的认证机制，JWT 具有更多优势，特别适合于现代的分布式、跨域和无状态的应用场景。")]),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://javaguide.cn/system-design/security/jwt-intro.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("JWT 基础概念详解"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/108999941",target:"_blank",rel:"noopener noreferrer"}},[s._v("用户认证：基于jwt和session的区别和优缺点"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);