(function(e){function t(t){for(var o,r,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)r=c[l],a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return u.p+""+({Board:"Board"}[e]||e)+"."+{Board:"3789114af150f7469a62"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={Board:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({Board:"Board"}[e]||e)+"."+{Board:"e3b05e74"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/XBoard/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3dfd":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},r=[],a={name:"App",created:function(){document.oncontextmenu=function(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}}},i=a,c=n("2877"),u=Object(c["a"])(i,o,r,!1,null,"7e9b138a",null);t["a"]=u.exports},"41cb":function(e,t,n){"use strict";var o=n("2b0e"),r=n("8c4f");o["default"].use(r["a"]),t["a"]=new r["a"]({mode:"history",base:"/XBoard/",routes:[{path:"/",name:"Board",component:function(){return n.e("Board").then(n.bind(null,"5d6d"))}}]})},"4de4":function(e,t,n){"use strict";n("6762"),n("2fdb"),n("7f7f");var o=n("2d66"),r=n("6be2"),a=n("117e"),i=n("d3b2"),c=n("4904"),u=n("6880"),s=n("f886"),l=n("de10"),d=n("dd4b"),f=n("f69c"),p=n("7d1f"),g=n("bf7a"),A=n("9e6d"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.type?n("span",{staticClass:"icon iconfont",class:[e.type?"icon-"+e.type:""]}):e._e()},m=[],b={name:"Icon",props:{type:String}},v=b,L=(n("f26a"),n("2877")),w=Object(L["a"])(v,h,m,!1,null,"134c9f88",null),y=w.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"tooltipBox",class:{"tooltip-box":!0,hover:e.isShow},on:{mouseover:e.handleMouseOver,mouseout:e.handleMouseOut}},[n("div",{ref:"tooltip",staticClass:"tooltip",style:e.tooltipStyle},[e._t("content",[e._v(e._s(e.content))])],2),n("div",{staticClass:"content"},[e._t("default")],2)])},C=[],B=(n("c5f6"),{name:"Tooltip",props:{content:[String,Number]},data:function(){return{isShow:!1,tooltipStyle:{}}},methods:{handleMouseOver:function(){this.isShow=!0},handleMouseOut:function(){this.isShow=!1}},mounted:function(){var e=this,t=e.$refs.tooltip,n=t.clientWidth?t.clientWidth/-2:0;n&&(e.tooltipStyle={"margin-left":n+"px"})}}),O=B,M=(n("b866"),Object(L["a"])(O,E,C,!1,null,"570be5aa",null)),k=M.exports,x={Menu:A["a"],MenuItem:g["a"],Tooltip:p["a"],Divider:f["a"],ColorPicker:d["a"],InputNumber:l["a"],Dropdown:s["a"],DropdownMenu:u["a"],DropdownItem:c["a"],Icon:i["a"],Message:a["a"],Modal:r["a"],Input:o["a"],XIcon:y,XTooltip:k},R={install:function(e,t){for(var n in x)n&&x[n]&&(e.component(n,x[n]),["Message","Modal"].includes(n)&&(e.prototype["$".concat(n)]=x[n]))}};t["a"]=R},"56d7":function(e,t,n){"use strict";n.r(t),function(e){n("cadf"),n("551c"),n("f751"),n("097d");var t=n("2b0e"),o=n("a78e"),r=n("5ad4"),a=n("953d"),i=n.n(a),c=n("2a19"),u=n("f318"),s=n.n(u),l=n("3dfd"),d=n("9225"),f=n("41cb"),p=n("c0d6"),g=(n("ddb8"),n("bee9")),A=n("4de4"),h=n("f121"),m=(n("dcad"),n("a753"),n("8096"),n("14e1"),n("dbaa"),e&&!1);t["default"].config.debug=m,t["default"].config.devtools=m,t["default"].config.productionTip=m,t["default"].config.performance=m,t["default"].prototype.$X={isDev:m,utils:g["a"],config:h["a"],Cookies:o};var b=Object(d["a"])(t["default"],"en-us");t["default"].use(r["a"]),t["default"].use(i.a),a["Quill"].register("modules/imageDrop",c["a"]),a["Quill"].register("modules/imageResize",s.a),t["default"].use(A["a"]),new t["default"]({i18n:b,router:f["a"],store:p["a"],render:function(e){return e(l["a"])}}).$mount("#app")}.call(this,n("f28c"))},"594e":function(e,t,n){},9225:function(e,t,n){"use strict";n("ac6a"),n("456d");var o=n("a925"),r=n("cebc"),a=n("69c5"),i=n.n(a),c=n("9ef8"),u=n.n(c),s={L10001:"移动（V）",L10002:"Marquee（M）",L10003:"铅笔（P）",L10004:"Line（L）",L10005:"文字（T）",L10006:"橡皮擦（E）",L10007:"撤消（Ctrl + Z）",L10008:"重做（Ctrl + Shift + Z）",L10009:"上传图片（U）",L10010:"清除（C）",L10011:"下载（Ctrl + S）",L10012:"全屏",L10013:"铅笔颜色",L10014:"画布颜色",L10015:"铅笔大小",L10016:"语言",L10017:"Github",L10018:"预览（Ctrl + P）",L10019:"反馈",L10101:"提示",L10102:"确认清空当前画板吗？",L10103:"切换背景色将清空当前画板，确认切换？",L10104:"数据为空，导出失败！",L10105:"确认删除该便签吗？"},l={L10001:"Move (V)",L10002:"Marquee (M)",L10003:"Pencil (P)",L10004:"Line (L)",L10005:"Text (T)",L10006:"Eraser (E)",L10007:"Undo (Ctrl + Z)",L10008:"Redo (Ctrl + Shift + Z)",L10009:"Upload Image (U)",L10010:"Clear (C)",L10011:"Download (Ctrl + S)",L10012:"Full Screen",L10013:"Pencil color",L10014:"Canvas Color",L10015:"Pencil size",L10016:"Language",L10017:"Github",L10018:"Preview (Ctrl + P)",L10019:"Feedback",L10101:"Hint",L10102:"Are you sure to clear the current artboard? ",L10103:"Switching the background color will clear the current artboard, confirm the switch? ",L10104:"Data is empty, export failed!",L10105:"Are you sure to delete the note? "},d={label:{"zh-cn":"简体中文","en-us":"English"},icon:{"zh-cn":n("984f"),"en-us":n("d3ea")},data:{"zh-cn":Object(r["a"])({},u.a,s),"en-us":Object(r["a"])({},i.a,l)}},f=n("c3fc");t["a"]=function(e,t){var n=e.prototype.$X,r=n.config,a=n.Cookies,i=r.cookie.getItem("locale"),c=a.get(i);if(!t){var u=Object.keys(d.label);t=c||u[0]}e.use(o["a"]),e.locale=function(){},e.prototype.$X.langs=d,e.prototype.$X.locale=t;var s=new o["a"]({locale:t,messages:d.data});return f["a"].i18n(function(e,t){return s.t(e,t)}),s}},"984f":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAElBMVEXWTCTVRSXcYR/gchrokhL3zAVCW9qcAAAAWElEQVQoz62QCwrAIAxDmzS9/5WnwmDDRfYrCOJLHmrEPwMsMek42LqZDlPqAZm+qoTuMO6qaEUGrjHGzZ18nDJXTwMTr74F08ZHnsKjG3Fe9+xzDB8S+2y66AB9oQlI7gAAAABJRU5ErkJggg=="},"9a15":function(e,t,n){},"9d64":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACjElEQVRoQ+1ZPW/TUBQ994WqC819EVJVsaRJGICFr50BCTGyMDAxlN/Al8o3CJXyExAdOjHwByomZgSCBZAgSbOgCgnFL2FAQHyRIyc4rZNi14kd6XlL/D7Oufdc2/c8wpRfNOX4YQmknUGbgcxmoNFuH3Vd94LruipNkEopVyn1ojg39yEMxw4JNRyn0AGeAFgCMlPkAmAtB1wpat0MEhkg8F0k7xjzloBKmlEftrcAVc188gBRqzdmgEDdmNsici+L4PuAie6UmO+HEqg5zkcAh/2bW4poqZjPbxCRmwYpEVGNVuucK7IGYMHH8Kms9ZEdBESE6sZ0eroXYLWi9bU0gG/fs+o4jwm46v8vJeYcEXl18a9IP4vM5oz5GZi8XNb6URYI1BxnGcDDHpYS8ywR/YpEwCtwY8xFETk4TlJE9JWZnwcLNRECtWbzHYiOjRN8f22R9+VC4Xjv954JiEiubsyfiYD3Nykx7yMiryaRBIGZujFdzU3qKjHPEFE3aJaAiNgMRJWelRCA/ovMSiiqfgBYCVkJxZBNcIqVkJWQlZD9mBv5Jn69n/nMPNGPUUqptdun0em8iqOmpJ9Cgw0N0a0yc79HHQbQNwpiORqJNjTdpiLQUnreUaVQuLtbZGN/QyXdUnpAg029ItpaZH5GRL9HkdhsNk90gPO7EQ3eH1tTHwVE0mP/q6UMMbZWKlrfSBpMnPWqjrNCQM9kCze2/Oa5by0K8E0RXVrM51+maS1utlpnXZF1AuZ98uHWYpeAMTch8iBOlCY2Z9sTMMxef0PAoYkBirCRAF8086mh9rq3ln/AsQrgcsYOOJ7mgOsjDziCwZjaI6YIGc3EUHvMmnYabAZsBvYYgb9su4ZP7eojSwAAAABJRU5ErkJggg=="},b866:function(e,t,n){"use strict";var o=n("9a15"),r=n.n(o);r.a},bee9:function(e,t,n){"use strict";var o=n("2b0e"),r=new o["default"],a=r,i=(n("3b2b"),n("a481"),{formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm";e instanceof Date||(e=new Date(e));var n=function(e){return("00"+e).substr(e.length)},o=function(e,t){/(Y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var o={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in o)if(new RegExp("(".concat(r,")")).test(t)){var a=o[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?a:n(a))}return t};return o(e,t)}}),c={sortByNumber:function(e,t,n){return"desc"===n?parseInt(e)<parseInt(t)?1:-1:parseInt(e)>parseInt(t)?1:-1}},u=(n("34ef"),n("28a5"),{base642Blob:function(e){for(var t=e.split(";base64,"),n=t[0].split(":")[1],o=window.atob(t[1]),r=o.length,a=new Uint8Array(r),i=0;i<r;i++)a[i]=o.charCodeAt(i);return new Blob([a],{type:n})},downloadFile:function(e,t){var n=this.base642Blob(t),o=URL.createObjectURL(n),r=document.createElement("a");r.textContent="download image",r.href=o,r.download=e,r.click(),URL.revokeObjectURL(o)}});t["a"]={bus:a,filters:i,sort:c,file:u}},c0d6:function(e,t,n){"use strict";var o=n("2b0e"),r=n("2f62");o["default"].use(r["a"]),t["a"]=new r["a"].Store({state:{},mutations:{},actions:{}})},d3ea:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAPFBMVEUtQGbakJrIWmnNZXP///+xEijdmaK6L0IlOmCuCiDXiJMaL1dFU3TNaHa+O031///dmaPANEa3UWOmHTOgdo66AAAAdklEQVQoz4XP2Q6AIAxE0RFQ0HGJ/v/HyiJRqaknJDw03CpAhGoUEJClK0wCmJ6hFDbXut6VgN/9/pZW51lM8LCmgTgvZXD+iLN0036uQh7Vjz+MiBO3r3hcy5B/j8ba5mB+8AKcCosKXvUX71ToVX/xQYVRdQIA1g5aJxB67QAAAABJRU5ErkJggg=="},dbaa:function(e,t,n){},ddb8:function(e,t,n){"use strict";var o=n("9483");Object(o["a"])("".concat("/XBoard/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})},f121:function(e,t,n){"use strict";var o={version:"1.0.0",name:"XBoard",title:"XBoard",subtitle:"XBoard",minTitle:"XBoard",logo:n("9d64"),github:"https://github.com/OXOYO/XBoard",githubPages:"https://oxoyo.github.io/XBoard/",feedback:"https://github.com/OXOYO/XBoard/issues/new",copyright:"© 2019 OXOYO All Rights Reserved."},r={prefix:"x-board-",path:"/",items:{account:"a",token:"t",locale:"l"},unless:["locale"],getItem:function(e){return e?this.prefix+this.items[e]:""}};t["a"]={system:o,cookie:r}},f26a:function(e,t,n){"use strict";var o=n("594e"),r=n.n(o);r.a}});