module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=54)}([function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}})}return{esModule:o,exports:i,options:a}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var u=[],o=0;o<n.parts.length;o++)u.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:u}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var i=d++;r=p||(p=o()),e=u.bind(null,r,i,!1),n=u.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function u(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(86),f={},l=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var o=s(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var u=o[i],a=f[u.id];a.refs--,n.push(a)}e?(o=s(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete f[a.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){t.exports=!n(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=require("vue")},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(6),o=n(4),i=n(32),u=n(36),a=function(t,e,n){var c,s,f,l=t&a.F,p=t&a.G,d=t&a.S,v=t&a.P,h=t&a.B,m=t&a.W,x=p?o:o[e]||(o[e]={}),g=x.prototype,y=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(c in n)(s=!l&&y&&void 0!==y[c])&&c in x||(f=s?y[c]:n[c],x[c]=p&&"function"!=typeof y[c]?n[c]:h&&s?i(f,r):m&&y[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((x.virtual||(x.virtual={}))[c]=f,t&a.R&&g&&!g[c]&&u(g,c,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(29),o=n(37),i=n(49),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(11),o=n(9);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(53),o={};r.keys().forEach(function(t){"./index.js"!==t&&(o[t.replace(/(\.\/|\.js)/g,"")]=r(t).default)}),e.default=o},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r="DECREMENT_MAIN_COUNTER",o="INCREMENT_MAIN_COUNTER"},function(t,e,n){"use strict";e.__esModule=!0;var r=n(23),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){"use strict";e.a=[{path:"/",name:"landing-page",component:n(71)},{path:"*",redirect:"/"}]},function(t,e,n){n(85);var r=n(0)(n(59),n(80),null,null);t.exports=r.exports},function(t,e){t.exports=require("vue-electron")},function(t,e){t.exports=require("vue-resource")},function(t,e){t.exports=require("vue-router")},function(t,e,n){t.exports={default:n(26),__esModule:!0}},function(t,e,n){t.exports={default:n(27),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(24),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){n(51),t.exports=n(4).Object.assign},function(t,e,n){n(52);var r=n(4).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(14),o=n(47),i=n(46);t.exports=function(t){return function(e,n,u){var a,c=r(e),s=o(c.length),f=i(u,s);if(t&&n!=n){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(28);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(7),o=n(6).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(12),o=n(43);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(3)&&!n(5)(function(){return 7!=Object.defineProperty(n(33)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(41),o=n(39),i=n(42),u=n(48),a=n(11),c=Object.assign;t.exports=!c||n(5)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,s=1,f=o.f,l=i.f;c>s;)for(var p,d=a(arguments[s++]),v=f?r(d).concat(f(d)):r(d),h=v.length,m=0;h>m;)l.call(d,p=v[m++])&&(n[p]=d[p]);return n}:c},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(35),o=n(14),i=n(30)(!1),u=n(44)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,s=[];for(n in a)n!=u&&r(a,n)&&s.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(40),o=n(34);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(45)("keys"),o=n(50);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(6),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(13),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(13),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(10);r(r.S+r.F,"Object",{assign:n(38)})},function(t,e,n){var r=n(10);r(r.S+r.F*!n(3),"Object",{defineProperty:n(12).f})},function(t,e,n){function r(t){return n(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./counters.js":57,"./index.js":15};r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=53},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),o=n.n(r),i=n(8),u=n.n(i),a=n(20),c=n.n(a),s=n(21),f=n.n(s),l=n(22),p=n.n(l),d=n(19),v=n.n(d),h=n(18);u.a.use(c.a),u.a.use(f.a),u.a.use(p.a),u.a.config.debug=!0;var m=new p.a({scrollBehavior:function(){return{y:0}},routes:h.a});new u.a(o()({router:m},v.a)).$mount("#app")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16);n.d(e,"decrementMain",function(){return o}),n.d(e,"incrementMain",function(){return i});var o=function(t){(0,t.commit)(r.a)},i=function(t){(0,t.commit)(r.b)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"mainCounter",function(){return r});var r=function(t){return t.counters.main}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(25),i=n.n(o),u=n(16),a={main:0},c=(r={},i()(r,u.a,function(t){t.main--}),i()(r,u.b,function(t){t.main++}),r);e.default={state:a,mutations:c}},function(t,e,n){"use strict";var r=n(8),o=n.n(r),i=n(88),u=n.n(i),a=n(55),c=n(56),s=n(15);o.a.use(u.a),e.a=new u.a.Store({actions:a,getters:c,modules:s.default,strict:!1})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(58);e.default={store:r.a}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{time:"00:00:00"}},mounted:function(){this.startTime()},methods:{startTime:function(){var t=new Date,e=t.getHours(),n=t.getMinutes(),r=t.getSeconds();n=this.checkTime(n),r=this.checkTime(r),this.time=e+":"+n+":"+r,setTimeout(this.startTime,500)},checkTime:function(t){return t<10&&(t="0"+t),t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(72),o=n.n(r),i=n(73),u=n.n(i),a=n(74),c=n.n(a),s=n(70),f=n.n(s);e.default={components:{CurrentPage:o.a,Links:u.a,Versions:c.a,Clock:f.a},name:"landing-page"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(87),o=n.n(r);e.default={data:function(){return{platform:o.a.platform(),versions:process.versions}}}},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"code[data-v-161e3e17]{background-color:rgba(40,56,76,.5);border-radius:3px;color:#fff;font-weight:700;padding:3px 6px;margin:0 3px;vertical-align:bottom}p[data-v-161e3e17]{line-height:24px}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,".clock{color:#c03763;font-size:48px;line-height:1.1em;margin:40px 0 60px}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"img[data-v-3b25079e]{margin-top:-25px;width:450px}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"a[data-v-4e914a30]{color:#32ae6e;text-decoration:none}a[data-v-4e914a30]:hover{color:#28384c}ul[data-v-4e914a30]{list-style-type:none;margin-top:10px}li[data-v-4e914a30]{display:inline-block}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Lato:300);",""]),e.push([t.i,"*{margin:0;padding:0}body,html{height:100%}body{align-items:center;background:radial-gradient(ellipse at center,#fff 0,hsla(0,0%,90%,.85) 100%);background-position:50%;display:flex;font-family:Lato,Helvetica,sans-serif;justify-content:center;text-align:center}",""])},function(t,e,n){t.exports=n.p+"imgs/logo.png"},function(t,e,n){n(82);var r=n(0)(n(60),n(76),null,null);t.exports=r.exports},function(t,e,n){n(83);var r=n(0)(n(61),n(77),"data-v-3b25079e",null);t.exports=r.exports},function(t,e,n){n(81);var r=n(0)(n(62),n(75),"data-v-161e3e17",null);t.exports=r.exports},function(t,e,n){n(84);var r=n(0)(null,n(79),"data-v-4e914a30",null);t.exports=r.exports},function(t,e,n){var r=n(0)(n(63),n(78),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n  You are currently at "),n("code",[t._v("`"+t._s(t.$route.path)+"`")]),t._v(" on the "),n("code",[t._v("`"+t._s(t.$route.name)+"`")]),t._v(" view.\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock"},[n("h1",[t._v(t._s(t.time))])])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{src:n(69),alt:"electron-vue"}}),t._v(" "),r("h1",[t._v("Welcome.")]),t._v(" "),r("current-page"),t._v(" "),r("versions"),t._v(" "),r("links"),t._v(" "),r("clock")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v("\n  You are using electron v"+t._s(t.versions["atom-shell"])+" with node v"+t._s(t.versions.node)+" on the "+t._s(t.platform)+" platform.\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://simulatedgreg.gitbooks.io/electron-vue/content/index.html"}},[t._v("documentation")])]),t._v(" |\n  "),n("li",[n("a",{attrs:{href:"http://electron.atom.io/"}},[t._v("electron")])]),t._v(" |\n  "),n("li",[n("a",{attrs:{href:"http://vuejs.org/"}},[t._v("vue.js")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e,n){var r=n(64);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(2)("bdfae7f2",r,!0)},function(t,e,n){var r=n(65);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(2)("fd274788",r,!0)},function(t,e,n){var r=n(66);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(2)("523acbf2",r,!0)},function(t,e,n){var r=n(67);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(2)("527cfd90",r,!0)},function(t,e,n){var r=n(68);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),n(2)("29151f74",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=i[0],a=i[1],c=i[2],s=i[3],f={id:t+":"+o,css:a,media:c,sourceMap:s};r[u]?r[u].parts.push(f):n.push(r[u]={id:u,parts:[f]})}return n}},function(t,e){t.exports=require("os")},function(t,e){t.exports=require("vuex")}]);