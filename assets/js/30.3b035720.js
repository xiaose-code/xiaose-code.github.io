(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{291:function(t,e,s){},318:function(t,e,s){"use strict";s(291)},340:function(t,e,s){"use strict";s.r(e);var a={data:()=>({headers:[],hashText:""}),mounted(){this.getHeadersData(),this.getHashText()},watch:{$route(){this.headers=this.$page.headers,this.getHashText()}},methods:{getHeadersData(){this.headers=this.$page.headers},getHashText(){this.hashText=decodeURIComponent(window.location.hash.slice(1))}}},i=(s(318),s(4)),h=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"right-menu-wrapper"},[e("div",{staticClass:"right-menu-margin"},[e("div",{staticClass:"right-menu-title"},[t._v("目录")]),t._v(" "),e("div",{staticClass:"right-menu-content"},t._l(t.headers,(function(s,a){return e("div",{key:a,class:["right-menu-item","level"+s.level,{active:s.slug===t.hashText}]},[e("a",{attrs:{href:"#"+s.slug}},[t._v(t._s(s.title))])])})),0)])])}),[],!1,null,null,null);e.default=h.exports}}]);