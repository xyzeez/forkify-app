function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i,o,a,c,u,s,l,f,p,v,d,g,b,h=globalThis,y={},m={},_=h.parcelRequire3a11;null==_&&((_=function(e){if(e in y)return y[e].exports;if(e in m){var t=m[e];delete m[e];var r={id:e,exports:{}};return y[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){m[e]=t},h.parcelRequire3a11=_),(0,_.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),_("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.66e27d18.js","hfd23","icons.c14567a0.svg"]'));var w={},S=function(e){return e&&e.Math===Math&&e};w=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof h&&h)||S("object"==typeof w&&w)||function(){return this}()||Function("return this")();var O={},j={};j=w;var E={},M={},k={},T={};k=!(T=function(e){try{return!!e()}catch(e){return!0}})(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype,$=P.call,L=k&&P.bind.bind($,$);M=k?L:function(e){return function(){return $.apply(e,arguments)}};var I={},D={},F={};F=function(e){return null==e};var x=TypeError;D=function(e){if(F(e))throw new x("Can't call method on "+e);return e};var H=Object;I=function(e){return H(D(e))};var C=M({}.hasOwnProperty);E=Object.hasOwn||function(e,t){return C(I(e),t)};var A={},R={},N={};N=!1;var q={},U={},z=Object.defineProperty;U=function(e,t){try{z(w,e,{value:t,configurable:!0,writable:!0})}catch(r){w[e]=t}return t};var B="__core-js_shared__";q=w[B]||U(B,{}),(R=function(e,t){return q[e]||(q[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.3",mode:N?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",source:"https://github.com/zloirock/core-js"});var W={},V=0,G=Math.random(),J=M(1..toString);W=function(e){return"Symbol("+(void 0===e?"":e)+")_"+J(++V+G,36)};var K={},Y={},Q={};Q="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var X=w.process,Z=w.Deno,ee=X&&X.versions||Z&&Z.version,et=ee&&ee.v8;et&&(i=(n=et.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&Q&&(!(n=Q.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Q.match(/Chrome\/(\d+)/))&&(i=+n[1]),Y=i;var er=w.String;K=!!Object.getOwnPropertySymbols&&!T(function(){var e=Symbol("symbol detection");return!er(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Y&&Y<41});var en={};en=K&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ei=w.Symbol,eo=R("wks"),ea=en?ei.for||ei:ei&&ei.withoutSetter||W;r=A=function(e){return E(eo,e)||(eo[e]=K&&E(ei,e)?ei[e]:ea("Symbol."+e)),eo[e]};var ec={};ec=!T(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var eu={},es={},el={},ef={},ep={},ev="object"==typeof document&&document.all,ed=(ep={all:ev,IS_HTMLDDA:void 0===ev&&void 0!==ev}).all;ef=ep.IS_HTMLDDA?function(e){return"function"==typeof e||e===ed}:function(e){return"function"==typeof e};var eg=ep.all;el=ep.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:ef(e)||e===eg}:function(e){return"object"==typeof e?null!==e:ef(e)};var eb=w.document,eh=el(eb)&&el(eb.createElement);es=function(e){return eh?eb.createElement(e):{}},eu=!ec&&!T(function(){return 7!==Object.defineProperty(es("div"),"a",{get:function(){return 7}}).a});var ey={};ey=ec&&T(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var em={},e_=String,ew=TypeError;em=function(e){if(el(e))return e;throw new ew(e_(e)+" is not an object")};var eS={},eO={},ej={},eE=Function.prototype.call;ej=k?eE.bind(eE):function(){return eE.apply(eE,arguments)};var eM={},ek={};ek=function(e,t){var r;return arguments.length<2?(r=w[e],ef(r)?r:void 0):w[e]&&w[e][t]};var eT={};eT=M({}.isPrototypeOf);var eP=Object;eM=en?function(e){return"symbol"==typeof e}:function(e){var t=ek("Symbol");return ef(t)&&eT(t.prototype,eP(e))};var e$={},eL={},eI={},eD=String;eI=function(e){try{return eD(e)}catch(e){return"Object"}};var eF=TypeError;eL=function(e){if(ef(e))return e;throw new eF(eI(e)+" is not a function")},e$=function(e,t){var r=e[t];return F(r)?void 0:eL(r)};var ex={},eH=TypeError;ex=function(e,t){var r,n;if("string"===t&&ef(r=e.toString)&&!el(n=ej(r,e))||ef(r=e.valueOf)&&!el(n=ej(r,e))||"string"!==t&&ef(r=e.toString)&&!el(n=ej(r,e)))return n;throw new eH("Can't convert object to primitive value")};var eC=TypeError,eA=A("toPrimitive");eO=function(e,t){if(!el(e)||eM(e))return e;var r,n=e$(e,eA);if(n){if(void 0===t&&(t="default"),r=ej(n,e,t),!el(r)||eM(r))return r;throw new eC("Can't convert object to primitive value")}return void 0===t&&(t="number"),ex(e,t)},eS=function(e){var t=eO(e,"string");return eM(t)?t:t+""};var eR=TypeError,eN=Object.defineProperty,eq=Object.getOwnPropertyDescriptor,eU="enumerable",ez="configurable",eB="writable";o=ec?ey?function(e,t,r){if(em(e),t=eS(t),em(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eB in r&&!r[eB]){var n=eq(e,t);n&&n[eB]&&(e[t]=r.value,r={configurable:ez in r?r[ez]:n[ez],enumerable:eU in r?r[eU]:n[eU],writable:!1})}return eN(e,t,r)}:eN:function(e,t,r){if(em(e),t=eS(t),em(r),eu)try{return eN(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eR("Accessors not supported");return"value"in r&&(e[t]=r.value),e},O=function(e){var t=j.Symbol||(j.Symbol={});E(t,e)||o(t,e,{value:r(e)})};var eW={}.propertyIsEnumerable,eV=Object.getOwnPropertyDescriptor;c=eV&&!eW.call({1:2},1)?function(e){var t=eV(this,e);return!!t&&t.enumerable}:eW;var eG={};eG=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var eJ={},eK={},eY={},eQ=M({}.toString),eX=M("".slice);eY=function(e){return eX(eQ(e),8,-1)};var eZ=Object,e0=M("".split);eK=T(function(){return!eZ("z").propertyIsEnumerable(0)})?function(e){return"String"===eY(e)?e0(e,""):eZ(e)}:eZ,eJ=function(e){return eK(D(e))};var e1=Object.getOwnPropertyDescriptor;a=ec?e1:function(e,t){if(e=eJ(e),t=eS(t),eu)try{return e1(e,t)}catch(e){}if(E(e,t))return eG(!ej(c,e,t),e[t])};var e2=w.Symbol;if(O("dispose"),e2){var e3=a(e2,"dispose");e3.enumerable&&e3.configurable&&e3.writable&&o(e2,"dispose",{value:e3.value,enumerable:!1,configurable:!1,writable:!1})}var e4={},e7={};e7=ec?function(e,t,r){return o(e,t,eG(1,r))}:function(e,t,r){return e[t]=r,e};var e9={},e8={},e5=Function.prototype,e6=ec&&Object.getOwnPropertyDescriptor,te=E(e5,"name")&&(!ec||ec&&e6(e5,"name").configurable),tt={},tr=M(Function.toString);ef(q.inspectSource)||(q.inspectSource=function(e){return tr(e)}),tt=q.inspectSource;var tn={},ti={},to=w.WeakMap;ti=ef(to)&&/native code/.test(String(to));var ta={},tc=R("keys");ta=function(e){return tc[e]||(tc[e]=W(e))};var tu={};tu={};var ts="Object already initialized",tl=w.TypeError,tf=w.WeakMap;if(ti||q.state){var tp=q.state||(q.state=new tf);tp.get=tp.get,tp.has=tp.has,tp.set=tp.set,u=function(e,t){if(tp.has(e))throw new tl(ts);return t.facade=e,tp.set(e,t),t},s=function(e){return tp.get(e)||{}},l=function(e){return tp.has(e)}}else{var tv=ta("state");tu[tv]=!0,u=function(e,t){if(E(e,tv))throw new tl(ts);return t.facade=e,e7(e,tv,t),t},s=function(e){return E(e,tv)?e[tv]:{}},l=function(e){return E(e,tv)}}var td=(tn={set:u,get:s,has:l,enforce:function(e){return l(e)?s(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!el(t)||(r=s(t)).type!==e)throw new tl("Incompatible receiver, "+e+" required");return r}}}).enforce,tg=tn.get,tb=String,th=Object.defineProperty,ty=M("".slice),tm=M("".replace),t_=M([].join),tw=ec&&!T(function(){return 8!==th(function(){},"length",{value:8}).length}),tS=String(String).split("String"),tO=e8=function(e,t,r){"Symbol("===ty(tb(t),0,7)&&(t="["+tm(tb(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!E(e,"name")||te&&e.name!==t)&&(ec?th(e,"name",{value:t,configurable:!0}):e.name=t),tw&&r&&E(r,"arity")&&e.length!==r.arity&&th(e,"length",{value:r.arity});try{r&&E(r,"constructor")&&r.constructor?ec&&th(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=td(e);return E(n,"source")||(n.source=t_(tS,"string"==typeof t?t:"")),e};Function.prototype.toString=tO(function(){return ef(this)&&tg(this).source||tt(this)},"toString"),e9=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(ef(r)&&e8(r,a,n),n.global)i?e[t]=r:U(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tj={},tE={},tM={},tk={},tT={},tP={},t$=Math.ceil,tL=Math.floor;tP=Math.trunc||function(e){var t=+e;return(t>0?tL:t$)(t)},tT=function(e){var t=+e;return t!=t||0===t?0:tP(t)};var tI=Math.max,tD=Math.min;tk=function(e,t){var r=tT(e);return r<0?tI(r+t,0):tD(r,t)};var tF={},tx={},tH=Math.min;tx=function(e){return e>0?tH(tT(e),9007199254740991):0},tF=function(e){return tx(e.length)};var tC=function(e){return function(t,r,n){var i,o=eJ(t),a=tF(o),c=tk(n,a);if(e&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},tA={includes:tC(!0),indexOf:tC(!1)}.indexOf,tR=M([].push);tM=function(e,t){var r,n=eJ(e),i=0,o=[];for(r in n)!E(tu,r)&&E(n,r)&&tR(o,r);for(;t.length>i;)E(n,r=t[i++])&&(~tA(o,r)||tR(o,r));return o};var tN=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tM(e,tN)},p=Object.getOwnPropertySymbols;var tq=M([].concat);tE=ek("Reflect","ownKeys")||function(e){var t=f(em(e));return p?tq(t,p(e)):t},tj=function(e,t,r){for(var n=tE(t),i=0;i<n.length;i++){var c=n[i];E(e,c)||r&&E(r,c)||o(e,c,a(t,c))}};var tU={},tz=/#|\.prototype\./,tB=function(e,t){var r=tV[tW(e)];return r===tJ||r!==tG&&(ef(t)?T(t):!!t)},tW=tB.normalize=function(e){return String(e).replace(tz,".").toLowerCase()},tV=tB.data={},tG=tB.NATIVE="N",tJ=tB.POLYFILL="P";tU=tB,e4=function(e,t){var r,n,i,o,c,u=e.target,s=e.global,l=e.stat;if(r=s?w:l?w[u]||U(u,{}):(w[u]||{}).prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(c=a(r,n))&&c.value:r[n],!tU(s?n:u+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;tj(o,i)}(e.sham||i&&i.sham)&&e7(o,"sham",!0),e9(r,n,o,e)}};var tK={},tY={},tQ=Function.prototype,tX=tQ.apply,tZ=tQ.call;tY="object"==typeof Reflect&&Reflect.apply||(k?tZ.bind(tX):function(){return tZ.apply(tX,arguments)});var t0={},t1={},t2=(t1=function(e){if("Function"===eY(e))return M(e)})(t1.bind);t0=function(e,t){return eL(e),void 0===t?e:k?t2(e,t):function(){return e.apply(t,arguments)}};var t3={};t3=ek("document","documentElement");var t4={};t4=M([].slice);var t7={},t9=TypeError;t7=function(e,t){if(e<t)throw new t9("Not enough arguments");return e};var t8={};t8=/(?:ipad|iphone|ipod).*applewebkit/i.test(Q);var t5={};t5="process"===eY(w.process);var t6=w.setImmediate,re=w.clearImmediate,rt=w.process,rr=w.Dispatch,rn=w.Function,ri=w.MessageChannel,ro=w.String,ra=0,rc={},ru="onreadystatechange";T(function(){v=w.location});var rs=function(e){if(E(rc,e)){var t=rc[e];delete rc[e],t()}},rl=function(e){return function(){rs(e)}},rf=function(e){rs(e.data)},rp=function(e){w.postMessage(ro(e),v.protocol+"//"+v.host)};t6&&re||(t6=function(e){t7(arguments.length,1);var t=ef(e)?e:rn(e),r=t4(arguments,1);return rc[++ra]=function(){tY(t,void 0,r)},d(ra),ra},re=function(e){delete rc[e]},t5?d=function(e){rt.nextTick(rl(e))}:rr&&rr.now?d=function(e){rr.now(rl(e))}:ri&&!t8?(b=(g=new ri).port2,g.port1.onmessage=rf,d=t0(b.postMessage,b)):w.addEventListener&&ef(w.postMessage)&&!w.importScripts&&v&&"file:"!==v.protocol&&!T(rp)?(d=rp,w.addEventListener("message",rf,!1)):d=ru in es("script")?function(e){t3.appendChild(es("script"))[ru]=function(){t3.removeChild(this),rs(e)}}:function(e){setTimeout(rl(e),0)});var rv=(tK={set:t6,clear:re}).clear;e4({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==rv},{clearImmediate:rv});var rd=tK.set,rg={},rb={};rb="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rh=w.Function,ry=/MSIE .\./.test(Q)||rb&&((t=w.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rg=function(e,t){var r=t?2:1;return ry?function(n,i){var o=t7(arguments.length,1)>r,a=ef(n)?n:rh(n),c=o?t4(arguments,r):[],u=o?function(){tY(a,this,c)}:a;return t?e(u,i):e(u)}:e};var rm=w.setImmediate?rg(rd,!1):rd;e4({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rm},{setImmediate:rm});var r_={};r_=new URL("icons.c14567a0.svg",import.meta.url).toString();const rw=document.querySelector(".recipe"),rS=t=>{let r=`
      <div class="spinner">
        <svg>
          <use href="${e(r_)}#icon-loader"></use>
        </svg>
      </div>
  `;t.innerHTML="",t.insertAdjacentHTML("afterbegin",r)};!async function(){try{rS(rw);let t=await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"),r=await t.json();if(!t.ok)throw Error(`${r.message}`);let{recipe:n}=r.data;n={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients},console.log(n);let i=`
    <figure class="recipe__fig">
      <img src="${n.image}" alt="${n.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${n.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(r_)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${n.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(r_)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${n.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(r_)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(r_)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${e(r_)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${e(r_)}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${n.ingredients.map(t=>`        
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${e(r_)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${t.quantity?t.quantity:""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${t.unit}</span>
                ${t.description}
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
          <use href="${e(r_)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;rw.innerHTML="",rw.insertAdjacentHTML("afterbegin",i)}catch(e){alert(e)}}();
//# sourceMappingURL=index.66e27d18.js.map
