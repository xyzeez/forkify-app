function t(t){return t&&t.__esModule?t.default:t}var e,r,n,o,i,a,c,u,s,l,f,p,v,h,g,d,y=globalThis,b={},m={},w=y.parcelRequire3a11;null==w&&((w=function(t){if(t in b)return b[t].exports;if(t in m){var e=m[t];delete m[t];var r={id:t,exports:{}};return b[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){m[t]=e},y.parcelRequire3a11=w),(0,w.register)("27Lyk",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>r,set:t=>r=t,enumerable:!0,configurable:!0});var r,n=new Map;r=function(t,e){for(var r=0;r<e.length-1;r+=2)n.set(e[r],{baseUrl:t,path:e[r+1]})}}),w("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.b67b011c.js","hfd23","icons.c14567a0.svg"]'));var _={},S=function(t){return t&&t.Math===Math&&t};_=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof y&&y)||S("object"==typeof _&&_)||function(){return this}()||Function("return this")();var O={},j={};j=_;var E={},L={},x={},k={};x=!(k=function(t){try{return!!t()}catch(t){return!0}})(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});var T=Function.prototype,P=T.call,M=x&&T.bind.bind(P,P);L=x?M:function(t){return function(){return P.apply(t,arguments)}};var F={},$={},I={};I=function(t){return null==t};var D=TypeError;$=function(t){if(I(t))throw new D("Can't call method on "+t);return t};var N=Object;F=function(t){return N($(t))};var H=L({}.hasOwnProperty);E=Object.hasOwn||function(t,e){return H(F(t),e)};var R={},A={},C={};C=!1;var G={},q={},U=Object.defineProperty;q=function(t,e){try{U(_,t,{value:e,configurable:!0,writable:!0})}catch(r){_[t]=e}return e};var z="__core-js_shared__";G=_[z]||q(z,{}),(A=function(t,e){return G[t]||(G[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.33.3",mode:C?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",source:"https://github.com/zloirock/core-js"});var B={},W=0,Y=Math.random(),V=L(1..toString);B=function(t){return"Symbol("+(void 0===t?"":t)+")_"+V(++W+Y,36)};var J={},K={},Q={};Q="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var X=_.process,Z=_.Deno,tt=X&&X.versions||Z&&Z.version,te=tt&&tt.v8;te&&(o=(n=te.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&Q&&(!(n=Q.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Q.match(/Chrome\/(\d+)/))&&(o=+n[1]),K=o;var tr=_.String;J=!!Object.getOwnPropertySymbols&&!k(function(){var t=Symbol("symbol detection");return!tr(t)||!(Object(t) instanceof Symbol)||!Symbol.sham&&K&&K<41});var tn={};tn=J&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var to=_.Symbol,ti=A("wks"),ta=tn?to.for||to:to&&to.withoutSetter||B;r=R=function(t){return E(ti,t)||(ti[t]=J&&E(to,t)?to[t]:ta("Symbol."+t)),ti[t]};var tc={};tc=!k(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var tu={},ts={},tl={},tf={},tp={},tv="object"==typeof document&&document.all,th=(tp={all:tv,IS_HTMLDDA:void 0===tv&&void 0!==tv}).all;tf=tp.IS_HTMLDDA?function(t){return"function"==typeof t||t===th}:function(t){return"function"==typeof t};var tg=tp.all;tl=tp.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:tf(t)||t===tg}:function(t){return"object"==typeof t?null!==t:tf(t)};var td=_.document,ty=tl(td)&&tl(td.createElement);ts=function(t){return ty?td.createElement(t):{}},tu=!tc&&!k(function(){return 7!==Object.defineProperty(ts("div"),"a",{get:function(){return 7}}).a});var tb={};tb=tc&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tm={},tw=String,t_=TypeError;tm=function(t){if(tl(t))return t;throw new t_(tw(t)+" is not an object")};var tS={},tO={},tj={},tE=Function.prototype.call;tj=x?tE.bind(tE):function(){return tE.apply(tE,arguments)};var tL={},tx={};tx=function(t,e){var r;return arguments.length<2?(r=_[t],tf(r)?r:void 0):_[t]&&_[t][e]};var tk={};tk=L({}.isPrototypeOf);var tT=Object;tL=tn?function(t){return"symbol"==typeof t}:function(t){var e=tx("Symbol");return tf(e)&&tk(e.prototype,tT(t))};var tP={},tM={},tF={},t$=String;tF=function(t){try{return t$(t)}catch(t){return"Object"}};var tI=TypeError;tM=function(t){if(tf(t))return t;throw new tI(tF(t)+" is not a function")},tP=function(t,e){var r=t[e];return I(r)?void 0:tM(r)};var tD={},tN=TypeError;tD=function(t,e){var r,n;if("string"===e&&tf(r=t.toString)&&!tl(n=tj(r,t))||tf(r=t.valueOf)&&!tl(n=tj(r,t))||"string"!==e&&tf(r=t.toString)&&!tl(n=tj(r,t)))return n;throw new tN("Can't convert object to primitive value")};var tH=TypeError,tR=R("toPrimitive");tO=function(t,e){if(!tl(t)||tL(t))return t;var r,n=tP(t,tR);if(n){if(void 0===e&&(e="default"),r=tj(n,t,e),!tl(r)||tL(r))return r;throw new tH("Can't convert object to primitive value")}return void 0===e&&(e="number"),tD(t,e)},tS=function(t){var e=tO(t,"string");return tL(e)?e:e+""};var tA=TypeError,tC=Object.defineProperty,tG=Object.getOwnPropertyDescriptor,tq="enumerable",tU="configurable",tz="writable";i=tc?tb?function(t,e,r){if(tm(t),e=tS(e),tm(r),"function"==typeof t&&"prototype"===e&&"value"in r&&tz in r&&!r[tz]){var n=tG(t,e);n&&n[tz]&&(t[e]=r.value,r={configurable:tU in r?r[tU]:n[tU],enumerable:tq in r?r[tq]:n[tq],writable:!1})}return tC(t,e,r)}:tC:function(t,e,r){if(tm(t),e=tS(e),tm(r),tu)try{return tC(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tA("Accessors not supported");return"value"in r&&(t[e]=r.value),t},O=function(t){var e=j.Symbol||(j.Symbol={});E(e,t)||i(e,t,{value:r(t)})};var tB={}.propertyIsEnumerable,tW=Object.getOwnPropertyDescriptor;c=tW&&!tB.call({1:2},1)?function(t){var e=tW(this,t);return!!e&&e.enumerable}:tB;var tY={};tY=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var tV={},tJ={},tK={},tQ=L({}.toString),tX=L("".slice);tK=function(t){return tX(tQ(t),8,-1)};var tZ=Object,t0=L("".split);tJ=k(function(){return!tZ("z").propertyIsEnumerable(0)})?function(t){return"String"===tK(t)?t0(t,""):tZ(t)}:tZ,tV=function(t){return tJ($(t))};var t1=Object.getOwnPropertyDescriptor;a=tc?t1:function(t,e){if(t=tV(t),e=tS(e),tu)try{return t1(t,e)}catch(t){}if(E(t,e))return tY(!tj(c,t,e),t[e])};var t2=_.Symbol;if(O("dispose"),t2){var t3=a(t2,"dispose");t3.enumerable&&t3.configurable&&t3.writable&&i(t2,"dispose",{value:t3.value,enumerable:!1,configurable:!1,writable:!1})}var t4={},t7={};t7=tc?function(t,e,r){return i(t,e,tY(1,r))}:function(t,e,r){return t[e]=r,t};var t9={},t8={},t5=Function.prototype,t6=tc&&Object.getOwnPropertyDescriptor,et=E(t5,"name")&&(!tc||tc&&t6(t5,"name").configurable),ee={},er=L(Function.toString);tf(G.inspectSource)||(G.inspectSource=function(t){return er(t)}),ee=G.inspectSource;var en={},eo={},ei=_.WeakMap;eo=tf(ei)&&/native code/.test(String(ei));var ea={},ec=A("keys");ea=function(t){return ec[t]||(ec[t]=B(t))};var eu={};eu={};var es="Object already initialized",el=_.TypeError,ef=_.WeakMap;if(eo||G.state){var ep=G.state||(G.state=new ef);ep.get=ep.get,ep.has=ep.has,ep.set=ep.set,u=function(t,e){if(ep.has(t))throw new el(es);return e.facade=t,ep.set(t,e),e},s=function(t){return ep.get(t)||{}},l=function(t){return ep.has(t)}}else{var ev=ea("state");eu[ev]=!0,u=function(t,e){if(E(t,ev))throw new el(es);return e.facade=t,t7(t,ev,e),e},s=function(t){return E(t,ev)?t[ev]:{}},l=function(t){return E(t,ev)}}var eh=(en={set:u,get:s,has:l,enforce:function(t){return l(t)?s(t):u(t,{})},getterFor:function(t){return function(e){var r;if(!tl(e)||(r=s(e)).type!==t)throw new el("Incompatible receiver, "+t+" required");return r}}}).enforce,eg=en.get,ed=String,ey=Object.defineProperty,eb=L("".slice),em=L("".replace),ew=L([].join),e_=tc&&!k(function(){return 8!==ey(function(){},"length",{value:8}).length}),eS=String(String).split("String"),eO=t8=function(t,e,r){"Symbol("===eb(ed(e),0,7)&&(e="["+em(ed(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!E(t,"name")||et&&t.name!==e)&&(tc?ey(t,"name",{value:e,configurable:!0}):t.name=e),e_&&r&&E(r,"arity")&&t.length!==r.arity&&ey(t,"length",{value:r.arity});try{r&&E(r,"constructor")&&r.constructor?tc&&ey(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=eh(t);return E(n,"source")||(n.source=ew(eS,"string"==typeof e?e:"")),t};Function.prototype.toString=eO(function(){return tf(this)&&eg(this).source||ee(this)},"toString"),t9=function(t,e,r,n){n||(n={});var o=n.enumerable,a=void 0!==n.name?n.name:e;if(tf(r)&&t8(r,a,n),n.global)o?t[e]=r:q(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:i(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ej={},eE={},eL={},ex={},ek={},eT={},eP=Math.ceil,eM=Math.floor;eT=Math.trunc||function(t){var e=+t;return(e>0?eM:eP)(e)},ek=function(t){var e=+t;return e!=e||0===e?0:eT(e)};var eF=Math.max,e$=Math.min;ex=function(t,e){var r=ek(t);return r<0?eF(r+e,0):e$(r,e)};var eI={},eD={},eN=Math.min;eD=function(t){return t>0?eN(ek(t),9007199254740991):0},eI=function(t){return eD(t.length)};var eH=function(t){return function(e,r,n){var o,i=tV(e),a=eI(i),c=ex(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},eR={includes:eH(!0),indexOf:eH(!1)}.indexOf,eA=L([].push);eL=function(t,e){var r,n=tV(t),o=0,i=[];for(r in n)!E(eu,r)&&E(n,r)&&eA(i,r);for(;e.length>o;)E(n,r=e[o++])&&(~eR(i,r)||eA(i,r));return i};var eC=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(t){return eL(t,eC)},p=Object.getOwnPropertySymbols;var eG=L([].concat);eE=tx("Reflect","ownKeys")||function(t){var e=f(tm(t));return p?eG(e,p(t)):e},ej=function(t,e,r){for(var n=eE(e),o=0;o<n.length;o++){var c=n[o];E(t,c)||r&&E(r,c)||i(t,c,a(e,c))}};var eq={},eU=/#|\.prototype\./,ez=function(t,e){var r=eW[eB(t)];return r===eV||r!==eY&&(tf(e)?k(e):!!e)},eB=ez.normalize=function(t){return String(t).replace(eU,".").toLowerCase()},eW=ez.data={},eY=ez.NATIVE="N",eV=ez.POLYFILL="P";eq=ez,t4=function(t,e){var r,n,o,i,c,u=t.target,s=t.global,l=t.stat;if(r=s?_:l?_[u]||q(u,{}):(_[u]||{}).prototype)for(n in e){if(i=e[n],o=t.dontCallGetSet?(c=a(r,n))&&c.value:r[n],!eq(s?n:u+(l?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ej(i,o)}(t.sham||o&&o.sham)&&t7(i,"sham",!0),t9(r,n,i,t)}};var eJ={},eK={},eQ=Function.prototype,eX=eQ.apply,eZ=eQ.call;eK="object"==typeof Reflect&&Reflect.apply||(x?eZ.bind(eX):function(){return eZ.apply(eX,arguments)});var e0={},e1={},e2=(e1=function(t){if("Function"===tK(t))return L(t)})(e1.bind);e0=function(t,e){return tM(t),void 0===e?t:x?e2(t,e):function(){return t.apply(e,arguments)}};var e3={};e3=tx("document","documentElement");var e4={};e4=L([].slice);var e7={},e9=TypeError;e7=function(t,e){if(t<e)throw new e9("Not enough arguments");return t};var e8={};e8=/(?:ipad|iphone|ipod).*applewebkit/i.test(Q);var e5={};e5="process"===tK(_.process);var e6=_.setImmediate,rt=_.clearImmediate,re=_.process,rr=_.Dispatch,rn=_.Function,ro=_.MessageChannel,ri=_.String,ra=0,rc={},ru="onreadystatechange";k(function(){v=_.location});var rs=function(t){if(E(rc,t)){var e=rc[t];delete rc[t],e()}},rl=function(t){return function(){rs(t)}},rf=function(t){rs(t.data)},rp=function(t){_.postMessage(ri(t),v.protocol+"//"+v.host)};e6&&rt||(e6=function(t){e7(arguments.length,1);var e=tf(t)?t:rn(t),r=e4(arguments,1);return rc[++ra]=function(){eK(e,void 0,r)},h(ra),ra},rt=function(t){delete rc[t]},e5?h=function(t){re.nextTick(rl(t))}:rr&&rr.now?h=function(t){rr.now(rl(t))}:ro&&!e8?(d=(g=new ro).port2,g.port1.onmessage=rf,h=e0(d.postMessage,d)):_.addEventListener&&tf(_.postMessage)&&!_.importScripts&&v&&"file:"!==v.protocol&&!k(rp)?(h=rp,_.addEventListener("message",rf,!1)):h=ru in ts("script")?function(t){e3.appendChild(ts("script"))[ru]=function(){e3.removeChild(this),rs(t)}}:function(t){setTimeout(rl(t),0)});var rv=(eJ={set:e6,clear:rt}).clear;t4({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==rv},{clearImmediate:rv});var rh=eJ.set,rg={},rd={};rd="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ry=_.Function,rb=/MSIE .\./.test(Q)||rd&&((e=_.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rg=function(t,e){var r=e?2:1;return rb?function(n,o){var i=e7(arguments.length,1)>r,a=tf(n)?n:ry(n),c=i?e4(arguments,r):[],u=i?function(){eK(a,this,c)}:a;return e?t(u,o):t(u)}:t};var rm=_.setImmediate?rg(rh,!1):rh;t4({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==rm},{setImmediate:rm});var rw=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof d?r:d).prototype);return o(u,"_invoke",{value:(a=new x(i||[]),c=p,function(r,o){if(c===v)throw Error("Generator is already running");if(c===h){if("throw"===r)throw o;return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(i,a);if(u){if(u===g)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=v;var s=f(t,n,a);if("normal"===s.type){if(c=a.done?h:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=h,a.method="throw",a.arg=s.arg)}})}),u}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",v="executing",h="completed",g={};function d(){}function y(){}function b(){}var m={};s(m,a,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w(k([])));_&&_!==r&&n.call(_,a)&&(m=_);var S=b.prototype=d.prototype=Object.create(m);function O(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){var r;o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=f(t[o],t,i);if("throw"===u.type)c(u.arg);else{var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,c)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return y.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},O(j.prototype),s(j.prototype,c,function(){return this}),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(S),s(S,u,"Generator"),s(S,a,function(){return this}),s(S,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}({});try{regeneratorRuntime=rw}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=rw:Function("r","regeneratorRuntime = r")(rw)}var r_={};r_=new URL("icons.c14567a0.svg",import.meta.url).toString();const rS=document.querySelector(".recipe"),rO=e=>{let r=`
      <div class="spinner">
        <svg>
          <use href="${t(r_)}#icon-loader"></use>
        </svg>
      </div>
  `;e.innerHTML="",e.insertAdjacentHTML("afterbegin",r)};!async function(){try{rO(rS);let e=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),r=await e.json();if(!e.ok)throw Error(`${r.message}`);let{recipe:n}=r.data;n={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},console.log(n);let o=`
    <figure class="recipe__fig">
      <img src="${n.image}" alt="${n.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${n.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${t(r_)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${n.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${t(r_)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${n.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${t(r_)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${t(r_)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${t(r_)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${t(r_)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${n.ingredients.map(e=>`        
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${t(r_)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
        `).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${n.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${n.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${t(r_)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;rS.innerHTML="",rS.insertAdjacentHTML("afterbegin",o)}catch(t){alert(t)}}();
//# sourceMappingURL=index.b67b011c.js.map
