WebFontConfig={google:{families:["Lora:400,400i,700","Roboto:300,400,700"]},active:function(){fittextonlines()}},function(){function e(t,n,i){return t.call.apply(t.bind,arguments)}function o(n,i,t){if(!n)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,e),n.apply(i,t)}}return function(){return n.apply(i,arguments)}}function g(t,n,i){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?e:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function n(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var f=!!window.FontFace;function c(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function h(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function a(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function l(t,n,i){function e(){s&&o&&(s(a),s=null)}n=c(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=null,s=i||null;f?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,a=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),h(t,"head",n)}function u(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var a=c(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,i&&i(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout(function(){s||(s=!0,i&&i(Error("Script load timeout")))},e||5e3),a}return null}function p(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,s(t)}}function w(t,n){t.c=n,s(t)}function s(t){0==t.a&&t.c&&(t.c(),t.c=null)}function m(t){this.a=t||"-"}function y(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function b(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function x(t){return t.a+t.f}function j(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function _(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new m("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function k(t){if(t.g){var n=a(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),d(t.f,i,e)}T(t,"inactive")}function T(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,x(i)):t.h[n]())}function S(){this.c={}}function C(t,n){this.c=t,this.f=n,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){h(t.c,"body",t.a)}function N(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function E(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function W(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),t=N(t=new y(this.a.c+",serif",x(this.a))),this.g.a.style.cssText=t,t=N(t=new y(this.a.c+",sans-serif",x(this.a))),this.h.a.style.cssText=t,t=N(t=new y("serif",x(this.a))),this.j.a.style.cssText=t,t=N(t=new y("sans-serif",x(this.a))),this.m.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.m)}m.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},E.prototype.start=function(){var o=this.c.o.document,a=this,s=r(),t=new Promise(function(i,e){!function n(){var t;r()-s>=a.f?e():o.fonts.load((t=a.a,j(t)+" "+t.f+"00 300px "+b(t.c)),a.h).then(function(t){1<=t.length?i():setTimeout(n,25)},function(){e()})}()}),i=null,n=new Promise(function(t,n){i=setTimeout(n,a.f)});Promise.race([n,t]).then(function(){i&&(clearTimeout(i),i=null),a.g(a.a)},function(){a.j(a.a)})};var F={D:"serif",C:"sans-serif"},I=null;function O(){if(null===I){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!t&&(parseInt(t[1],10)<536||536===parseInt(t[1],10)&&parseInt(t[2],10)<=11)}return I}function P(t,n,i){for(var e in F)if(F.hasOwnProperty(e)&&n===t.f[F[e]]&&i===t.f[F[e]])return!0;return!1}function B(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=O()&&P(t,i,e)),n?r()-t.A>=t.w?O()&&P(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?L(t,t.v):L(t,t.B):setTimeout(g(function(){B(this)},t),50):L(t,t.v)}function L(t,n){setTimeout(g(function(){i(this.g.a),i(this.h.a),i(this.j.a),i(this.m.a),n(this.a)},t),0)}function D(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),B(this)};var $=null;function q(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&d(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),T(t,"active")):k(t.a))}function t(t){this.j=t,this.a=new S,this.h=0,this.f=this.g=!0}function H(t,n){this.c=t,this.a=n}function M(t,n){this.c=t,this.a=n}function R(t,n){this.c=t||"https://fonts.googleapis.com/css",this.a=[],this.f=[],this.g=n||""}D.prototype.g=function(t){var n=this.a;n.g&&d(n.f,[n.a.c("wf",t.c,x(t).toString(),"active")],[n.a.c("wf",t.c,x(t).toString(),"loading"),n.a.c("wf",t.c,x(t).toString(),"inactive")]),T(n,"fontactive",t),this.m=!0,q(this)},D.prototype.h=function(t){var n=this.a;if(n.g){var i=a(n.f,n.a.c("wf",t.c,x(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,x(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,x(t).toString(),"inactive")),d(n.f,e,o)}T(n,"fontinactive",t),q(this)},t.prototype.load=function(t){this.c=new n(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(o,t,n){var i=[],e=n.timeout;a=t,a.g&&d(a.f,[a.a.c("wf","loading")]),T(a,"loading");var a;var i=function(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var a=t.c[e];a&&o.push(a(n[e],i))}return o}(o.a,n,o.c),s=new D(o.c,t,e);for(o.h=i.length,t=0,n=i.length;t<n;t++)i[t].load(function(t,n,i){var e,c,h,l,u,p;c=s,h=t,l=n,u=i,p=0==--(e=o).h,(e.f||e.g)&&setTimeout(function(){var t=u||null,n=l||{};if(0===h.length&&p)k(c.a);else{c.f+=h.length,p&&(c.j=p);var i,e=[];for(i=0;i<h.length;i++){var o=h[i],a=n[o.c],s=c.a,r=o;if(s.g&&d(s.f,[s.a.c("wf",r.c,x(r).toString(),"loading")]),T(s,"fontloading",r),(s=null)===$)if(window.FontFace){var r=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);$=r?42<parseInt(r[1],10):!f}else $=!1;s=$?new E(g(c.g,c),g(c.h,c),c.c,o,c.s,a):new W(g(c.g,c),g(c.h,c),c.c,o,c.s,t,a),e.push(s)}for(i=0;i<e.length;i++)e[i].start()}},0)})}(this,new _(this.c,t),t)},H.prototype.load=function(s){var n=this,r=n.a.projectId,t=n.a.version;if(r){var f=n.c.o;u(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+r+".js"+(t?"?v="+t:""),function(t){t?s([]):(f["__MonotypeConfiguration__"+r]=function(){return n.a},function t(){if(f["__mti_fntLst"+r]){var n,i=f["__mti_fntLst"+r](),e=[];if(i)for(var o=0;o<i.length;o++){var a=i[o].fontfamily;null!=i[o].fontStyle&&null!=i[o].fontWeight?(n=i[o].fontStyle+i[o].fontWeight,e.push(new y(a,n))):e.push(new y(a))}s(e)}else setTimeout(function(){t()},50)}())}).id="__MonotypeAPIScript__"+r}else s([])},M.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new p;for(n=0,i=e.length;n<i;n++)l(this.c,e[n],v(s));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var f=e[1].split(","),c=0;c<f.length;c+=1)r.push(new y(e[0],f[c]));else r.push(new y(e[0]));w(s,function(){t(r,a)})};function z(t){this.f=t,this.a=[],this.c={}}var G={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},K={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},U={i:"i",italic:"i",n:"n",normal:"n"},V=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function X(t,n){this.c=t,this.a=n}var J={Arimo:!0,Cousine:!0,Tinos:!0};function Q(t,n){this.c=t,this.a=n}function Y(t,n){this.c=t,this.f=n,this.a=[]}X.prototype.load=function(t){var n=new p,i=this.c,e=new R(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(e,o);var a=new z(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s;if(s=[],r=e[1])for(var r,f=(r=r.split(",")).length,c=0;c<f;c++){var h;if((h=r[c]).match(/^[\w-]+$/))if(null==(u=V.exec(h.toLowerCase())))h="";else{if(h=null==(h=u[2])||""==h?"n":U[h],null==(u=u[1])||""==u)u="4";else var l=K[u],u=l||(isNaN(u)?"4":u.substr(0,1));h=[h,u].join("")}else h="";h&&s.push(h)}0<s.length&&(a=s),3==e.length&&(s=[],0<(e=(e=e[2])?e.split(","):s).length&&(e=G[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=G[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new y(o,a[e]))}}(a),l(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),v(n)),w(n,function(){t(a.a,a.c,J)})},Q.prototype.load=function(s){var t=this.a.id,r=this.c.o;t?u(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",function(t){if(t)s([]);else if(r.Typekit&&r.Typekit.config&&r.Typekit.config.fn){t=r.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var e=t[i],o=t[i+1],a=0;a<o.length;a++)n.push(new y(e,o[a]));try{r.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}s(n)}},2e3):s([])},Y.prototype.load=function(c){var t,n=this.f.id,i=this.c.o,h=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(t,n){for(var i=0,e=n.fonts.length;i<e;++i){var o=n.fonts[i];h.a.push(new y(o.name,(a="font-weight:"+o.weight+";font-style:"+o.style,f=r=s=void 0,s=4,r="n",f=null,a&&((f=a.match(/(normal|oblique|italic)/i))&&f[1]&&(r=f[1].substr(0,1).toLowerCase()),(f=a.match(/([1-9]00|normal|bold)/i))&&f[1]&&(/bold/i.test(f[1])?s=7:/[1-9]00/.test(f[1])&&(s=parseInt(f[1].substr(0,1),10)))),r+s)))}var a,s,r,f;c(h.a)},u(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+((t=this.c).o.location.hostname||t.a.location.hostname)+"/"+n+".js",function(t){t&&c([])})):c([])};var Z=new t(window);Z.a.c.custom=function(t,n){return new M(n,t)},Z.a.c.fontdeck=function(t,n){return new Y(n,t)},Z.a.c.monotype=function(t,n){return new H(n,t)},Z.a.c.typekit=function(t,n){return new Q(n,t)},Z.a.c.google=function(t,n){return new X(n,t)};var tt={load:g(Z.load,Z)};"function"==typeof define&&define.amd?define(function(){return tt}):"undefined"!=typeof module&&module.exports?module.exports=tt:(window.WebFont=tt,window.WebFontConfig&&Z.load(window.WebFontConfig))}();