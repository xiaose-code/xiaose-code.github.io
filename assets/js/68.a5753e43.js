(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{400:function(v,_,t){"use strict";t.r(_);var r=t(4),s=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"tcp-传输可靠性问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-传输可靠性问题"}},[v._v("#")]),v._v(" TCP 传输可靠性问题")]),v._v(" "),_("h2",{attrs:{id:"tcp-如何保证传输的可靠性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-如何保证传输的可靠性"}},[v._v("#")]),v._v(" TCP 如何保证传输的可靠性？")]),v._v(" "),_("p",[v._v("TCP 通过一些机制来保证传输的可靠性：")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("建立连接时的三次握手")]),v._v("：客户端和服务器在开始数据传输之前进行三次握手，以确保双方都能正常接收和发送数据。")]),v._v(" "),_("li",[_("strong",[v._v("数据包的确认和重传")]),v._v("：每个数据包都包含一个序号，接收方收到数据包后会回复一个确认报文，确认已经收到该数据包。如果发送方没有收到确认报文，就会重传该数据包。接收方需要缓存已经收到的数据包，以便在需要重传时使用。")]),v._v(" "),_("li",[_("strong",[v._v("滑动窗口机制")]),v._v("：TCP 协议采用滑动窗口机制，"),_("strong",[v._v("控制数据包的发送速率和流量")]),v._v("。发送方和接收方都维护一个窗口，窗口的大小取决于网络的拥塞情况和接收方的处理能力。发送方只有在接收到接收方的确认报文后，才能发送下一个数据包。")]),v._v(" "),_("li",[_("strong",[v._v("累积确认机制")]),v._v("：接收方可以一次性确认多个数据包，以"),_("strong",[v._v("提高数据传输的效率")]),v._v("。")]),v._v(" "),_("li",[_("strong",[v._v("超时重传机制")]),v._v("：如果发送方没有在一定时间内收到确认报文，就会重传数据包。重传的时间间隔会逐渐加大，以"),_("strong",[v._v("避免网络拥塞")]),v._v("。")]),v._v(" "),_("li",[_("strong",[v._v("流量控制和拥塞控制")]),v._v("：TCP 协议通过流量控制和拥塞控制来"),_("strong",[v._v("避免网络拥塞和丢包")]),v._v("。\n"),_("ul",[_("li",[v._v("流量控制是指：发送方根据接收方的处理能力和网络拥塞情况，"),_("strong",[v._v("调整数据包的发送速率")]),v._v("；")]),v._v(" "),_("li",[v._v("拥塞控制是指：发送方根据网络拥塞情况，"),_("strong",[v._v("调整数据包的发送速率和窗口大小")]),v._v("。")])])])]),v._v(" "),_("h2",{attrs:{id:"tcp-如何实现流量控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-如何实现流量控制"}},[v._v("#")]),v._v(" TCP 如何实现流量控制？")]),v._v(" "),_("p",[v._v("TCP 协议通过以下机制实现流量控制：")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("接收方发送窗口")]),v._v("（rwnd）：接收方通过在 TCP 头部中的确认报文中返回一个接收窗口的值，来告诉发送方自己的接收缓存还有多少可用空间。发送方根据这个值来控制数据包的发送速率，以确保接收方能够及时接收数据，避免数据包丢失或拥塞。")]),v._v(" "),_("li",[_("strong",[v._v("发送方发送窗口")]),v._v("（cwnd）：发送方维护一个拥塞窗口的值，该值用来控制发送方可以发送的数据包数量。当网络拥塞时，发送方会根据网络传输的拥塞情况，调整拥塞窗口的大小，以控制发送速率，防止网络拥塞和数据包丢失。")]),v._v(" "),_("li",[_("strong",[v._v("慢启动算法")]),v._v("：在连接建立时，发送方会初始化拥塞窗口的大小，然后逐渐增大窗口的大小，以控制发送速率。慢启动算法会根据网络的带宽和延迟，逐渐增大拥塞窗口的大小，直到出现网络拥塞或达到最大窗口值。")]),v._v(" "),_("li",[_("strong",[v._v("拥塞避免算法")]),v._v("：在发送方发现网络拥塞时，会采用拥塞避免算法，逐渐减小拥塞窗口的大小，以降低发送速率。拥塞避免算法会根据数据包的丢失率和延迟时间，动态调整拥塞窗口的大小，以避免网络拥塞和数据包丢失。")])]),v._v(" "),_("p",[v._v("总结：")]),v._v(" "),_("p",[v._v("TCP 主要是通过调整接收方发送窗口和发送方窗口的大小，以及利用慢启动算法和拥塞算法机制来实现流量控制的。")]),v._v(" "),_("h2",{attrs:{id:"tcp-的拥塞控制是怎么实现的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的拥塞控制是怎么实现的"}},[v._v("#")]),v._v(" TCP 的拥塞控制是怎么实现的？")]),v._v(" "),_("p",[v._v("TCP 协议的拥塞控制"),_("strong",[v._v("主要是通过慢启动算法、拥塞避免算法、快速重传和快速恢复机制以及拥塞状态机等多个机制来实现的")]),v._v("。")]),v._v(" "),_("p",[v._v("其中：")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("慢启动算法")]),v._v("通过逐渐增大拥塞窗口的大小来控制发送速率，")]),v._v(" "),_("li",[_("strong",[v._v("拥塞避免算法")]),v._v("通过动态调整拥塞窗口的大小来避免网络拥塞和数据包丢失，")]),v._v(" "),_("li",[_("strong",[v._v("快速重传和快速恢复机制")]),v._v("可以减少拥塞窗口的大小，避免网络拥塞和数据包丢失，")]),v._v(" "),_("li",[_("strong",[v._v("拥塞状态机")]),v._v("则通过不同的状态和事件来实现拥塞控制。")])]),v._v(" "),_("h2",{attrs:{id:"什么是-arq-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-arq-协议"}},[v._v("#")]),v._v(" 什么是 ARQ 协议？")]),v._v(" "),_("p",[v._v("ARQ 全称为 Automatic Repeat Request，即自动重传请求，是一种数据传输协议，主要用于在不可靠的通信信道中保证数据传输的可靠性（通过使用确认和超时这两个机制）。")]),v._v(" "),_("p",[v._v("ARQ 包括停止等待 ARQ 协议和连续 ARQ 协议。")])])}),[],!1,null,null,null);_.default=s.exports}}]);