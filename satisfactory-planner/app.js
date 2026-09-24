import{browserMode as e,browserRequest as t}from"./browser-api.js";import{GUIDED_TOPUP_RATE as n,blankCounts as r,blankExtraction as i,clockChoices as a,distributions as o,droneFuels as s,extractionLimits as c,guidedQuestions as l,guidedStandingQuestion as u,guidedTopupItems as d,helpText as f,knownWorld as p,matchingPreset as m,minedResources as h,minerMarks as ee,nodePresets as g,nodeYield as _,powerOptions as v,presetPurities as te,presetSurvey as ne,purities as re,purities3 as ie,resourceDefaults as ae,resourcePool as oe,richShape as se,startingSurvey as ce,storageOptions as le,storageRateFor as ue,tutorialKeys as de,wantsStorage as fe,wellYield as pe}from"./preferences.js";import{adaEncore as me,adaFault as he,adaRemarks as ge}from"./ada.js";import{progression as _e}from"./progression.js";import{bayCapacity as ve,bayOfSlot as ye,carryOptions as be,pickedRecipeUnlocks as xe,slotPosition as Se}from"./state.js";var Ce=new URL(`.`,``+import.meta.url),we=class extends String{},y=e=>e instanceof we?e:new we(e??``),Te=new WeakMap;function Ee(e){let t=Te.get(e);return t||(t=e.join(`\0`).replace(/\s*\n\s*(\/?>)/g,`$1`).replace(/(<(?:textarea|pre)\b[^>]*>)[ \t]*\n/g,`$1`).replace(/^\s*\n\s*|\s*\n\s*$/g,``).replace(/\s*\n\s*/g,` `).split(`\0`),Te.set(e,t)),t}function De(e){return e==null||e===!1?``:e instanceof we?e.toString():Array.isArray(e)?e.map(De).join(``):Oe(e)}function b(e,...t){let n=Ee(e),r=n[0];for(let e=0;e<t.length;e++)r+=De(t[e])+n[e+1];return new we(r)}var x=e=>document.querySelector(e),Oe=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),S=e=>Number(e||0).toLocaleString(void 0,{maximumFractionDigits:2}),ke=e=>Number(e||0).toLocaleString(void 0,{maximumFractionDigits:3}),Ae=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``),je=(e,t)=>S(e)+` `+t+(e===1?``:`s`);function Me(e,t,n){return b`<div class="stat">
    <span class="eyebrow">${e}</span><strong>${t}</strong><small>${n}</small>
  </div>`}var C=e=>e?b`<img
        class="item-icon"
        src="./icons/${Ae(String(e).replace(/\s*\([^)]*\)\s*$/,``))}.png"
        width="42"
        height="42"
        loading="lazy"
        alt=""
      />`:``;function Ne(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var w={},Pe=[],Fe=()=>{},Ie=()=>!1,Le=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Re=e=>e.startsWith(`onUpdate:`),ze=Object.assign,Be=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},Ve=Object.prototype.hasOwnProperty,T=(e,t)=>Ve.call(e,t),E=Array.isArray,He=e=>Je(e)===`[object Map]`,Ue=e=>Je(e)===`[object Set]`,We=e=>Je(e)===`[object Date]`,D=e=>typeof e==`function`,O=e=>typeof e==`string`,Ge=e=>typeof e==`symbol`,k=e=>typeof e==`object`&&!!e,Ke=e=>(k(e)||D(e))&&D(e.then)&&D(e.catch),qe=Object.prototype.toString,Je=e=>qe.call(e),Ye=e=>Je(e).slice(8,-1),Xe=e=>Je(e)===`[object Object]`,Ze=e=>O(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,Qe=Ne(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),$e=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},et=/-\w/g,tt=$e(e=>e.replace(et,e=>e.slice(1).toUpperCase())),nt=/\B([A-Z])/g,rt=$e(e=>e.replace(nt,`-$1`).toLowerCase()),it=$e(e=>e.charAt(0).toUpperCase()+e.slice(1)),at=$e(e=>e?`on${it(e)}`:``),ot=(e,t)=>!Object.is(e,t),st=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ct=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},lt=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ut,dt=()=>ut||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ft(e){if(E(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=O(r)?gt(r):ft(r);if(i)for(let e in i)t[e]=i[e]}return t}if(O(e)||k(e))return e}var pt=/;(?![^(]*\))/g,mt=/:([^]+)/,ht=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function gt(e){let t={};return e.replace(ht,e=>e.startsWith(`/*`)?``:e).split(pt).forEach(e=>{if(e){let n=e.split(mt);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function _t(e){let t=``;if(O(e))t=e;else if(E(e))for(let n=0;n<e.length;n++){let r=_t(e[n]);r&&(t+=r+` `)}else if(k(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var vt=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,yt=Ne(vt);vt+``;function bt(e){return!!e||e===``}function xt(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=Tt(e[i],t[i],n);return r}function St(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&Tt(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function Ct(e,t,n){let r=He(e),i=He(t);if(r||i||(r=Ue(e),i=Ue(t),r||i))return r&&i?St(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!Tt(e[r],t[r],n))return!1}return String(e)===String(t)}function wt(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function Tt(e,t,n){if(e===t)return!0;let r=We(e),i=We(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=Ge(e),i=Ge(t),r||i?e===t:(r=E(e),i=E(t),r||i?r&&i?wt(e,t,n,xt):!1:(r=k(e),i=k(t),r||i?!r||!i?!1:wt(e,t,n,Ct):String(e)===String(t))))}var Et=e=>!!(e&&e.__v_isRef===!0),A=e=>O(e)?e:e==null?``:E(e)||k(e)&&(e.toString===qe||!D(e.toString))?Et(e)?A(e.value):JSON.stringify(e,Dt,2):String(e),Dt=(e,t)=>Et(t)?Dt(e,t.value):He(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ot(t,r)+` =>`]=n,e),{})}:Ue(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ot(e))}:Ge(t)?Ot(t):k(t)&&!E(t)&&!Xe(t)?String(t):t,Ot=(e,t=``)=>Ge(e)?`Symbol(${e.description??t})`:e,j,kt=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&j&&(j.active?(this.parent=j,this.index=(j.scopes||(j.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=j;try{return j=this,e()}finally{j=t}}}on(){++this._on===1&&(this.prevScope=j,j=this)}off(){if(this._on>0&&--this._on===0){if(j===this)j=this.prevScope;else{let e=j;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function At(){return j}var M,jt=new WeakSet,Mt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,j&&(j.active?j.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jt.has(this)&&(jt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||It(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yt(this),zt(this);let e=M,t=Gt;M=this,Gt=!0;try{return this.fn()}finally{Bt(this),M=e,Gt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ut(e);this.deps=this.depsTail=void 0,Yt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vt(this)&&this.run()}get dirty(){return Vt(this)}},Nt=0,Pt,Ft;function It(e,t=!1){if(e.flags|=8,t){e.next=Ft,Ft=e;return}e.next=Pt,Pt=e}function Lt(){Nt++}function Rt(){if(--Nt>0)return;if(Ft){let e=Ft;for(Ft=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Pt;){let t=Pt;for(Pt=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function zt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Bt(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ut(r),Wt(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Vt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ht(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ht(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Xt)||(e.globalVersion=Xt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Vt(e))))return;e.flags|=2;let t=e.dep,n=M,r=Gt;M=e,Gt=!0;try{zt(e);let n=e.fn(e._value);(t.version===0||ot(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,Gt=r,Bt(e),e.flags&=-3}}function Ut(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ut(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wt(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Gt=!0,Kt=[];function qt(){Kt.push(Gt),Gt=!1}function Jt(){let e=Kt.pop();Gt=e===void 0||e}function Yt(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var Xt=0,Zt=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Qt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!Gt||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new Zt(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,$t(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,Xt++,this.notify(e)}notify(e){Lt();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Rt()}}};function $t(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)$t(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var en=new WeakMap,tn=Symbol(``),nn=Symbol(``),rn=Symbol(``);function an(e,t,n){if(Gt&&M){let t=en.get(e);t||en.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Qt),r.map=t,r.key=n),r.track()}}function on(e,t,n,r,i,a){let o=en.get(e);if(!o){Xt++;return}let s=e=>{e&&e.trigger()};if(Lt(),t===`clear`)o.forEach(s);else{let i=E(e),a=i&&Ze(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===rn||!Ge(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(rn)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(tn)),He(e)&&s(o.get(nn)));break;case`delete`:i||(s(o.get(tn)),He(e)&&s(o.get(nn)));break;case`set`:He(e)&&s(o.get(tn))}}Rt()}function sn(e){let t=N(e);return t===e||(an(t,`iterate`,rn),Kn(e))?t:Gn(e)?Wn(e)?t.map(e=>Xn(Yn(e))):t.map(Xn):t.map(Yn)}function cn(e){return an(e=N(e),`iterate`,rn),e}function ln(e,t){return Gn(e)?Xn(Wn(e)?Yn(t):t):Yn(t)}var un={__proto__:null,[Symbol.iterator](){return dn(this,Symbol.iterator,e=>ln(this,e))},concat(...e){return sn(this).concat(...e.map(e=>E(e)?sn(e):e))},entries(){return dn(this,`entries`,e=>(e[1]=ln(this,e[1]),e))},every(e,t){return pn(this,`every`,e,t,void 0,arguments)},filter(e,t){return pn(this,`filter`,e,t,e=>e.map(e=>ln(this,e)),arguments)},find(e,t){return pn(this,`find`,e,t,e=>ln(this,e),arguments)},findIndex(e,t){return pn(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return pn(this,`findLast`,e,t,e=>ln(this,e),arguments)},findLastIndex(e,t){return pn(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return pn(this,`forEach`,e,t,void 0,arguments)},includes(...e){return hn(this,`includes`,e)},indexOf(...e){return hn(this,`indexOf`,e)},join(e){return sn(this).join(e)},lastIndexOf(...e){return hn(this,`lastIndexOf`,e)},map(e,t){return pn(this,`map`,e,t,void 0,arguments)},pop(){return gn(this,`pop`)},push(...e){return gn(this,`push`,e)},reduce(e,...t){return mn(this,`reduce`,e,t)},reduceRight(e,...t){return mn(this,`reduceRight`,e,t)},shift(){return gn(this,`shift`)},some(e,t){return pn(this,`some`,e,t,void 0,arguments)},splice(...e){return gn(this,`splice`,e)},toReversed(){return sn(this).toReversed()},toSorted(e){return sn(this).toSorted(e)},toSpliced(...e){return sn(this).toSpliced(...e)},unshift(...e){return gn(this,`unshift`,e)},values(){return dn(this,`values`,e=>ln(this,e))}};function dn(e,t,n){let r=cn(e),i=r[t]();return r!==e&&!Kn(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var fn=Array.prototype;function pn(e,t,n,r,i,a){let o=cn(e),s=o!==e&&!Kn(e),c=o[t];if(c!==fn[t]){let t=c.apply(e,a);return s?Yn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,ln(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function mn(e,t,n,r){let i=cn(e),a=i!==e&&!Kn(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=ln(e,t)),n.call(this,t,ln(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?ln(e,c):c}function hn(e,t,n){let r=N(e);an(r,`iterate`,rn);let i=r[t](...n);return(i===-1||i===!1)&&qn(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function gn(e,t,n=[]){qt(),Lt();let r=N(e)[t].apply(e,n);return Rt(),Jt(),r}var _n=Ne(`__proto__,__v_isRef,__isVue`),vn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(Ge));function yn(e){Ge(e)||(e=String(e));let t=N(this);return an(t,`has`,e),t.hasOwnProperty(e)}var bn=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Rn:Ln:i?In:Fn).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=E(e);if(!r){let e;if(a&&(e=un[t]))return e;if(t===`hasOwnProperty`)return yn}let o=Reflect.get(e,t,Zn(e)?e:n);if((Ge(t)?vn.has(t):_n(t))||(r||an(e,`get`,t),i))return o;if(Zn(o)){let e=a&&Ze(t)?o:o.value;return r&&k(e)?Hn(e):e}return k(o)?r?Hn(o):Bn(o):o}},xn=class extends bn{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=E(e)&&Ze(t);if(!this._isShallow){let e=Gn(i);if(!Kn(n)&&!Gn(n)&&(i=N(i),n=N(n)),!a&&Zn(i)&&!Zn(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:T(e,t),s=Reflect.set(e,t,n,Zn(e)?e:r);return e===N(r)&&s&&(o?ot(n,i)&&on(e,`set`,t,n,i):on(e,`add`,t,n)),s}deleteProperty(e,t){let n=T(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&on(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!Ge(t)||!vn.has(t))&&an(e,`has`,t),n}ownKeys(e){return an(e,`iterate`,E(e)?`length`:tn),Reflect.ownKeys(e)}},Sn=class extends bn{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Cn=new xn,wn=new Sn,Tn=new xn(!0),En=e=>e,Dn=e=>Reflect.getPrototypeOf(e);function On(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=He(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?En:t?Xn:Yn;return!t&&an(a,`iterate`,c?nn:tn),ze(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function kn(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function An(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(ot(n,a)&&an(i,`get`,n),an(i,`get`,a));let{has:o}=Dn(i),s=t?En:e?Xn:Yn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&an(N(t),`iterate`,tn),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(ot(t,i)&&an(r,`has`,t),an(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?En:e?Xn:Yn;return!e&&an(o,`iterate`,tn),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return ze(n,e?{add:kn(`add`),set:kn(`set`),delete:kn(`delete`),clear:kn(`clear`)}:{add(e){let n=N(this),r=Dn(n),i=N(e),a=!t&&!Kn(e)&&!Gn(e)?i:e;return r.has.call(n,a)||ot(e,a)&&r.has.call(n,e)||ot(i,a)&&r.has.call(n,i)||(n.add(a),on(n,`add`,a,a)),this},set(e,n){!t&&!Kn(n)&&!Gn(n)&&(n=N(n));let r=N(this),{has:i,get:a}=Dn(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?ot(n,s)&&on(r,`set`,e,n,s):on(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=Dn(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&on(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&on(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=On(r,e,t)}),n}function jn(e,t){let n=An(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(T(n,r)&&r in t?n:t,r,i)}var Mn={get:jn(!1,!1)},Nn={get:jn(!1,!0)},Pn={get:jn(!0,!1)},Fn=new WeakMap,In=new WeakMap,Ln=new WeakMap,Rn=new WeakMap;function zn(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Bn(e){return Gn(e)?e:Un(e,!1,Cn,Mn,Fn)}function Vn(e){return Un(e,!1,Tn,Nn,In)}function Hn(e){return Un(e,!0,wn,Pn,Ln)}function Un(e,t,n,r,i){if(!k(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=zn(Ye(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Wn(e){return Gn(e)?Wn(e.__v_raw):!!(e&&e.__v_isReactive)}function Gn(e){return!!(e&&e.__v_isReadonly)}function Kn(e){return!!(e&&e.__v_isShallow)}function qn(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function Jn(e){return!T(e,`__v_skip`)&&Object.isExtensible(e)&&ct(e,`__v_skip`,!0),e}var Yn=e=>k(e)?Bn(e):e,Xn=e=>k(e)?Hn(e):e;function Zn(e){return e?e.__v_isRef===!0:!1}function Qn(e){return $n(e,!1)}function $n(e,t){return Zn(e)?e:new er(e,t)}var er=class{constructor(e,t){this.dep=new Qt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:Yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Kn(e)||Gn(e);e=n?e:N(e),ot(e,t)&&(this._rawValue=e,this._value=n?e:Yn(e),this.dep.trigger())}};function tr(e){return Zn(e)?e.value:e}var nr={get:(e,t,n)=>t===`__v_raw`?e:tr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Zn(i)&&!Zn(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function rr(e){return Wn(e)?e:new Proxy(e,nr)}var ir=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Qt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return It(this,!0),!0}get value(){let e=this.dep.track();return Ht(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function ar(e,t,n=!1){let r,i;return D(e)?r=e:(r=e.get,i=e.set),new ir(r,i,n)}var or={},sr=new WeakMap,cr=void 0;function lr(e,t=!1,n=cr){if(n){let t=sr.get(n);t||sr.set(n,t=[]),t.push(e)}}function ur(e,t,n=w){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:Kn(e)||i===!1||i===0?dr(e,1):dr(e),u,d,f,p,m=!1,h=!1;if(Zn(e)?(d=()=>e.value,m=Kn(e)):Wn(e)?(d=()=>l(e),m=!0):E(e)?(h=!0,m=e.some(e=>Wn(e)||Kn(e)),d=()=>e.map(e=>{if(Zn(e))return e.value;if(Wn(e))return l(e);if(D(e))return c?c(e,2):e()})):d=D(e)?t?c?()=>c(e,2):e:()=>{if(f){qt();try{f()}finally{Jt()}}let t=cr;cr=u;try{return c?c(e,3,[p]):e(p)}finally{cr=t}}:Fe,t&&i){let e=d,t=i===!0?1/0:i;d=()=>dr(e(),t)}let ee=At(),g=()=>{u.stop(),ee&&ee.active&&Be(ee.effects,u)};if(a&&t){let e=t;t=(...t)=>{let n=e(...t);return g(),n}}let _=h?Array(e.length).fill(or):or,v=e=>{if(u.flags&1&&(u.dirty||e)){if(t){let n=u.run();if(e||i||m||(h?n.some((e,t)=>ot(e,_[t])):ot(n,_))){f&&f();let e=cr;cr=u;try{let e=[n,_===or?void 0:h&&_[0]===or?[]:_,p];_=n,c?c(t,3,e):t(...e)}finally{cr=e}}}else u.run()}};return s&&s(v),u=new Mt(d),u.scheduler=o?()=>o(v,!1):v,p=e=>lr(e,!1,u),f=u.onStop=()=>{let e=sr.get(u);if(e){if(c)c(e,4);else for(let t of e)t();sr.delete(u)}},t?r?v(!0):_=u.run():o?o(v.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function dr(e,t=1/0,n){if(t<=0||!k(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Zn(e))dr(e.value,t,n);else if(E(e))for(let r=0;r<e.length;r++)dr(e[r],t,n);else if(Ue(e)||He(e))e.forEach(e=>{dr(e,t,n)});else if(Xe(e)){for(let r in e)dr(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&dr(e[r],t,n)}return e}function fr(e,t,n,r){try{return r?e(...r):e()}catch(e){mr(e,t,n)}}function pr(e,t,n,r){if(D(e)){let i=fr(e,t,n,r);return i&&Ke(i)&&i.catch(e=>{mr(e,t,n)}),i}if(E(e)){let i=[];for(let a=0;a<e.length;a++)i.push(pr(e[a],t,n,r));return i}}function mr(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||w;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){qt(),fr(a,null,10,[e,i,o]),Jt();return}}hr(e,n,i,r,o)}function hr(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var gr=[],_r=-1,vr=[],yr=null,br=0,xr=Promise.resolve(),Sr=null;function Cr(e){let t=Sr||xr;return e?t.then(this?e.bind(this):e):t}function wr(e){let t=_r+1,n=gr.length;for(;t<n;){let r=t+n>>>1,i=gr[r],a=Ar(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Tr(e){if(!(e.flags&1)){let t=Ar(e),n=gr[gr.length-1];!n||!(e.flags&2)&&t>=Ar(n)?gr.push(e):gr.splice(wr(t),0,e),e.flags|=1,Er()}}function Er(){Sr||=xr.then(jr)}function Dr(e){if(!E(e))yr&&e.id===-1?yr.splice(br+1,0,e):e.flags&1||(vr.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)vr.push(e[t]);Er()}function Or(e,t,n=_r+1){for(;n<gr.length;n++){let t=gr[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;gr.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function kr(e){if(vr.length){let e=[...new Set(vr)].sort((e,t)=>Ar(e)-Ar(t));if(vr.length=0,yr){for(let t=0;t<e.length;t++)yr.push(e[t]);return}for(yr=e,br=0;br<yr.length;br++){let e=yr[br];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}yr=null,br=0}}var Ar=e=>e.id==null?e.flags&2?-1:1/0:e.id;function jr(e){try{for(_r=0;_r<gr.length;_r++){let e=gr[_r];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_r<gr.length;_r++){let e=gr[_r];e&&(e.flags&=-2)}_r=-1,gr.length=0,kr(e),Sr=null,(gr.length||vr.length)&&jr(e)}}var Mr=null,Nr=null;function Pr(e){let t=Mr;return Mr=e,Nr=e&&e.type.__scopeId||null,t}function Fr(e,t=Mr,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Wa(-1);let i=Pr(t),a=Ba.length,o;try{o=e(...n)}finally{for(let e=Ba.length;e>a;e--)Ha();Pr(i),r._d&&Wa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ir(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(qt(),pr(c,n,8,[e.el,s,e,t]),Jt())}}function Lr(e,t){if(lo){let n=lo.provides,r=lo.parent&&lo.parent.provides;r===n&&(n=lo.provides=Object.create(r)),n[e]=t}}function Rr(e,t,n=!1){let r=uo();if(r||qi){let i=qi?qi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&D(t)?t.call(r&&r.proxy):t}}var zr=Symbol.for(`v-scx`),Br=()=>Rr(zr);function Vr(e,t,n){return Hr(e,t,n)}function Hr(e,t,n=w){let{immediate:r,deep:i,flush:a,once:o}=n,s=ze({},n),c=t&&r||!t&&a!==`post`,l;if(_o){if(a===`sync`){let e=Br();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=Fe,e.resume=Fe,e.pause=Fe,e}}let u=lo;s.call=(e,t,n)=>pr(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{wa(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():Tr(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=ur(e,t,s);return _o&&(l?l.push(f):c&&f()),f}function Ur(e,t,n){let r=this.proxy,i=O(e)?e.includes(`.`)?Wr(r,e):()=>r[e]:e.bind(r,r),a;D(t)?a=t:(a=t.handler,n=t);let o=mo(this),s=Hr(i,a.bind(r),n);return o(),s}function Wr(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Gr=Symbol(`_vte`),Kr=e=>e.__isTeleport,qr=Symbol(`_leaveCb`);function Jr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Ra){t=n;break}}return t}function Yr(e){if(!ri(e))return Kr(e.type)&&e.children?Jr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&D(n.default))return n.default()}}function Xr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Xr(Kr(n.type)&&Yr(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Zr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Qr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var $r=new WeakMap;function ei(e,t,n,r,i=!1){if(E(e)){e.forEach((e,a)=>ei(e,t&&(E(t)?t[a]:t),n,r,i));return}if(ni(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ei(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?wo(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===w?s.refs={}:s.refs,d=s.setupState,f=N(d),p=d===w?Ie:e=>!Qr(u,e)&&T(f,e),m=(e,t)=>!(t&&Qr(u,t));if(l!=null&&l!==c){if(ti(t),O(l))u[l]=null,p(l)&&(d[l]=null);else if(Zn(l)){let e=t;m(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(D(c))fr(c,s,12,[o,u]);else{let t=O(c),r=Zn(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:m(c)||!e.k?c.value:u[e.k];if(i)E(n)&&Be(n,a);else if(E(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];m(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(m(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),$r.delete(e)};t.id=-1,$r.set(e,t),wa(t,n)}else ti(e),s()}}}function ti(e){let t=$r.get(e);t&&(t.flags|=8,$r.delete(e))}dt().requestIdleCallback,dt().cancelIdleCallback;var ni=e=>!!e.type.__asyncLoader,ri=e=>e.type.__isKeepAlive;function ii(e,t){oi(e,`a`,t)}function ai(e,t){oi(e,`da`,t)}function oi(e,t,n=lo){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(ci(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ri(e.parent.vnode)&&si(r,t,n,e),e=e.parent}}function si(e,t,n,r){let i=ci(t,e,r,!0);hi(()=>{Be(r[t],i)},n)}function ci(e,t,n=lo,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{qt();let i=mo(n),a=pr(t,n,e,r);return i(),Jt(),a};return r?i.unshift(a):i.push(a),a}}var li=e=>(t,n=lo)=>{(!_o||e===`sp`)&&ci(e,(...e)=>t(...e),n)},ui=li(`bm`),di=li(`m`),fi=li(`bu`),pi=li(`u`),mi=li(`bum`),hi=li(`um`),gi=li(`sp`),_i=li(`rtg`),vi=li(`rtc`);function yi(e,t=lo){ci(`ec`,e,t)}var bi=Symbol.for(`v-ndc`);function xi(e,t,n,r){let i,a=n&&n[r],o=E(e);if(o||O(e)){let n=o&&Wn(e),r=!1,s=!1;n&&(r=!Kn(e),s=Gn(e),e=cn(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Xn(Yn(e[n])):Yn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(k(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Si(e,t,n,r,i,a){if(n??={},Mr.ce||Mr.parent&&ni(Mr.parent)&&Mr.parent.ce){let e=a!=null&&n.key==null?ze({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),F(),Ka(P,null,[R(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let s=Ba.length;F();let c;try{let i=o&&Ci(o(n)),s=n.key||a||i&&i.key;c=Ka(P,{key:(s&&!Ge(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=Ba.length;e>s;e--)Ha();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),c}function Ci(e){return e.some(e=>!qa(e)||!(e.type===Ra||e.type===P&&!Ci(e.children)))?e:null}var wi=e=>e?go(e)?wo(e):wi(e.parent):null,Ti=ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wi(e.parent),$root:e=>wi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Pi(e),$forceUpdate:e=>e.f||=()=>{Tr(e.update)},$nextTick:e=>e.n||=Cr.bind(e.proxy),$watch:e=>Ur.bind(e)}),Ei=(e,t)=>e!==w&&!e.__isScriptSetup&&T(e,t),Di={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Ei(r,t))return o[t]=1,r[t];else if(i!==w&&T(i,t))return o[t]=2,i[t];else if(T(a,t))return o[t]=3,a[t];else if(n!==w&&T(n,t))return o[t]=4,n[t];else ki&&(o[t]=0)}let l=Ti[t],u,d;if(l)return t===`$attrs`&&an(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==w&&T(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,T(d,t))return d[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Ei(i,t)?(i[t]=n,!0):r!==w&&T(r,t)?(r[t]=n,!0):T(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==w&&s[0]!==`$`&&T(e,s)||Ei(t,s)||T(a,s)||T(r,s)||T(Ti,s)||T(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?T(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Oi(e){return E(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var ki=!0;function Ai(e){let t=Pi(e),n=e.proxy,r=e.ctx;ki=!1,t.beforeCreate&&Mi(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:ee,beforeDestroy:g,beforeUnmount:_,destroyed:v,unmounted:te,render:ne,renderTracked:re,renderTriggered:ie,errorCaptured:ae,serverPrefetch:oe,expose:se,inheritAttrs:ce,components:le,directives:ue,filters:de}=t;if(l&&ji(l,r,null),o)for(let e in o){let t=o[e];D(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);k(t)&&(e.data=Bn(t))}if(ki=!0,a)for(let e in a){let t=a[e],i=Eo({get:D(t)?t.bind(n,n):D(t.get)?t.get.bind(n,n):Fe,set:!D(t)&&D(t.set)?t.set.bind(n):Fe});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)Ni(s[e],r,n,e);if(c){let e=D(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Lr(t,e[t])})}u&&Mi(u,e,`c`);function fe(e,t){E(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(fe(ui,d),fe(di,f),fe(fi,p),fe(pi,m),fe(ii,h),fe(ai,ee),fe(yi,ae),fe(vi,re),fe(_i,ie),fe(mi,_),fe(hi,te),fe(gi,oe),E(se)){if(se.length){let t=e.exposed||={};se.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}ne&&e.render===Fe&&(e.render=ne),ce!=null&&(e.inheritAttrs=ce),le&&(e.components=le),ue&&(e.directives=ue),oe&&Zr(e)}function ji(e,t,n=Fe){E(e)&&(e=zi(e));for(let n in e){let r=e[n],i;i=k(r)?`default`in r?Rr(r.from||n,r.default,!0):Rr(r.from||n):Rr(r),Zn(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Mi(e,t,n){pr(E(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ni(e,t,n,r){let i=r.includes(`.`)?Wr(n,r):()=>n[r];if(O(e)){let n=t[e];D(n)&&Vr(i,n)}else if(D(e))Vr(i,e.bind(n));else if(k(e)){if(E(e))e.forEach(e=>Ni(e,t,n,r));else{let r=D(e.handler)?e.handler.bind(n):t[e.handler];D(r)&&Vr(i,r,e)}}}function Pi(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Fi(c,e,o,!0)),Fi(c,t,o)),k(t)&&a.set(t,c),c}function Fi(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Fi(e,a,n,!0),i&&i.forEach(t=>Fi(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Ii[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Ii={data:Li,props:Hi,emits:Hi,methods:Vi,computed:Vi,beforeCreate:Bi,created:Bi,beforeMount:Bi,mounted:Bi,beforeUpdate:Bi,updated:Bi,beforeDestroy:Bi,beforeUnmount:Bi,destroyed:Bi,unmounted:Bi,activated:Bi,deactivated:Bi,errorCaptured:Bi,serverPrefetch:Bi,components:Vi,directives:Vi,watch:Ui,provide:Li,inject:Ri};function Li(e,t){return t?e?function(){return ze(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function Ri(e,t){return Vi(zi(e),zi(t))}function zi(e){if(E(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Bi(e,t){return e?[...new Set([].concat(e,t))]:t}function Vi(e,t){return e?ze(Object.create(null),e,t):t}function Hi(e,t){return e?E(e)&&E(t)?[...new Set([...e,...t])]:ze(Object.create(null),Oi(e),Oi(t??{})):t}function Ui(e,t){if(!e)return t;if(!t)return e;let n=ze(Object.create(null),e);for(let r in t)n[r]=Bi(e[r],t[r]);return n}function Wi(){return{app:null,config:{isNativeTag:Ie,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Gi=0;function Ki(e,t){return function(n,r=null){D(n)||(n=ze({},n)),r!=null&&!k(r)&&(r=null);let i=Wi(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Gi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Do,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&D(e.install)?(a.add(e),e.install(c,...t)):D(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||R(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,wo(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(pr(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=qi;qi=c;try{return e()}finally{qi=t}}};return c}}var qi=null,Ji=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${rt(t)}Modifiers`];function Yi(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||w,i=n,a=t.startsWith(`update:`),o=a&&Ji(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>O(e)?e.trim():e)),o.number&&(i=i.map(lt)));let s,c=r[s=at(t)]||r[s=at(tt(t))];!c&&a&&(c=r[s=at(rt(t))]),c&&pr(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,pr(l,e,6,i)}}var Xi=new WeakMap;function Zi(e,t,n=!1){let r=n?Xi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!D(e)){let r=e=>{let n=Zi(e,t,!0);n&&(s=!0,ze(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(k(e)&&r.set(e,null),null):(E(a)?a.forEach(e=>o[e]=null):ze(o,a),k(e)&&r.set(e,o),o)}function Qi(e,t){return!e||!Le(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),T(e,t[0].toLowerCase()+t.slice(1))||T(e,rt(t))||T(e,t))}function $i(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,ee=Pr(e),g,_;try{if(n.shapeFlag&4){let e=i||r,t=e;g=to(l.call(t,e,u,d,p,f,m)),_=s}else{let e=t;g=to(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),_=t.props?s:ea(s)}}catch(t){Ba.length=0,mr(t,e,1),g=R(Ra)}let v=g;if(_&&h!==!1){let e=Object.keys(_),{shapeFlag:t}=v;e.length&&t&7&&(a&&e.some(Re)&&(_=ta(_,a)),v=$a(v,_,!1,!0))}return n.dirs&&(v=$a(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Xr(Kr(v.type)&&Yr(v)||v,n.transition),g=v,Pr(ee),g}var ea=e=>{let t;for(let n in e)(n===`class`||n===`style`||Le(n))&&((t||={})[n]=e[n]);return t},ta=(e,t)=>{let n={};for(let r in e)(!Re(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function na(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ra(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(ia(o,r,n)&&!Qi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||ra(r,o,l):!!o;return!1}function ra(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(ia(t,e,a)&&!Qi(n,a))return!0}return!1}function ia(e,t,n){let r=e[n],i=t[n];return n===`style`&&k(r)&&k(i)?!Tt(r,i):r!==i}function aa({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var oa={},sa=()=>Object.create(oa),ca=e=>Object.getPrototypeOf(e)===oa;function la(e,t,n,r=!1){let i={},a=sa();e.propsDefaults=Object.create(null),da(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Vn(i):e.type.props?i:a,e.attrs=a}function ua(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Qi(e.emitsOptions,o))continue;let u=t[o];if(c){if(T(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=tt(o);i[t]=fa(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{da(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!T(t,a)&&((r=rt(a))===a||!T(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=fa(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!T(t,e))&&(delete a[e],l=!0)}l&&on(e.attrs,`set`,``)}function da(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(Qe(c))continue;let l=t[c],u;i&&T(i,u=tt(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:Qi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=N(n),r=s||w;for(let o=0;o<a.length;o++){let s=a[o];n[s]=fa(i,t,s,r[s],e,!T(r,s))}}return o}function fa(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=T(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&D(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=mo(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===rt(n))&&(r=!0))}return r}var pa=new WeakMap;function ma(e,t,n=!1){let r=n?pa:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!D(e)){let r=e=>{c=!0;let[n,r]=ma(e,t,!0);ze(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return k(e)&&r.set(e,Pe),Pe;if(E(a))for(let e=0;e<a.length;e++){let t=tt(a[e]);ha(t)&&(o[t]=w)}else if(a)for(let e in a){let t=tt(e);if(ha(t)){let n=a[e],r=o[t]=E(n)||D(n)?{type:n}:ze({},n),i=r.type,c=!1,l=!0;if(E(i))for(let e=0;e<i.length;++e){let t=i[e],n=D(t)&&t.name;if(n===`Boolean`){c=!0;break}n===`String`&&(l=!1)}else c=D(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||T(r,`default`))&&s.push(t)}}let l=[o,s];return k(e)&&r.set(e,l),l}function ha(e){return e[0]!==`$`&&!Qe(e)}var ga=e=>e===`_`||e===`_ctx`||e===`$stable`,_a=e=>E(e)?e.map(to):[to(e)],va=(e,t,n)=>{if(t._n)return t;let r=Fr((...e)=>_a(t(...e)),n);return r._c=!1,r},ya=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ga(n))continue;let i=e[n];if(D(i))t[n]=va(n,i,r);else if(i!=null){let e=_a(i);t[n]=()=>e}}},ba=(e,t)=>{let n=_a(t);e.slots.default=()=>n},xa=(e,t,n)=>{for(let r in t)(n||!ga(r))&&(e[r]=t[r])},Sa=(e,t,n)=>{let r=e.slots=sa();if(e.vnode.shapeFlag&32){let e=t._;e?(xa(r,t,n),n&&ct(r,`_`,e,!0)):ya(t,r)}else t&&ba(e,t)},Ca=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=w;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:xa(i,t,n):(a=!t.$stable,ya(t,i)),o=t}else t&&(ba(e,t),o={default:1});if(a)for(let e in i)!ga(e)&&o[e]==null&&delete i[e]},wa=Ia;function Ta(e){return Ea(e)}function Ea(e,t){let n=dt();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Fe,insertStaticContent:m}=e,h=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ja(e,t)&&(r=we(e),ye(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===Pe&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case La:ee(e,t,n,r);break;case Ra:g(e,t,n,r);break;case za:e??_(t,n,r,o);break;case P:le(e,t,n,r,i,a,o,s,c);break;default:d&1?ne(e,t,n,r,i,a,o,s,c):d&6?ue(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Ee)}u!=null&&i?ei(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&ei(e.ref,null,a,e,!0)},ee=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},g=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},v=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},te=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},ne=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)re(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),oe(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},re=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:ee,dirs:g}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&ae(e.children,f,null,i,s,Da(e,c),l,d),g&&Ir(e,null,i,`created`),ie(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!Qe(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&ao(p,i,e)}g&&Ir(e,null,i,`beforeMount`);let _=ka(s,ee);_&&ee.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||_||g)&&wa(()=>{try{p&&ao(p,i,e),_&&ee.enter(f),g&&Ir(e,null,i,`mounted`)}finally{}},s)},ie=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||Fa(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ie(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ae=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?no(e[l]):to(e[l]);h(null,c,t,n,r,i,a,o,s)}},oe=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||w,m=t.props||w,h;if(n&&Oa(n,!1),(h=m.onVnodeBeforeUpdate)&&ao(h,n,t,e),f&&Ir(t,e,n,`beforeUpdate`),n&&Oa(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(l=0,s=!1,d=null),(p.innerHTML&&m.innerHTML==null||p.textContent&&m.textContent==null)&&u(c,``),d?se(e.dynamicChildren,d,c,n,r,Da(t,i),o):s||he(e,t,c,null,n,r,Da(t,i),o,!1),l>0){if(l&16)ce(c,p,m,n,i);else if(l&2&&p.class!==m.class&&a(c,`class`,null,m.class,i),l&4&&a(c,`style`,p.style,m.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=m[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else!s&&d==null&&ce(c,p,m,n,i);((h=m.onVnodeUpdated)||f)&&wa(()=>{h&&ao(h,n,t,e),f&&Ir(t,e,n,`updated`)},r)},se=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===P||!Ja(c,l)||c.shapeFlag&198)?d(c.el):n;h(c,l,u,null,r,i,a,o,!0)}},ce=(e,t,n,r,i)=>{if(t!==n){if(t!==w)for(let o in t)!Qe(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(Qe(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},le=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),ae(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(se(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Aa(e,t,!0)):he(e,t,n,f,a,o,c,l,u)},ue=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):de(t,n,r,i,a,o,c):fe(e,t,c)},de=(e,t,n,r,i,a,o)=>{let s=e.component=co(e,r,i);if(ri(e)&&(s.ctx.renderer=Ee),vo(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,pe,o),!e.el){let r=s.subTree=R(Ra);g(null,r,t,n),e.placeholder=r.el}}else pe(s,e,t,n,i,a,o)},fe=(e,t,n)=>{let r=t.component=e.component;if(na(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,me(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},pe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ma(e);if(n){t&&(t.el=c.el,me(e,t,o)),n.asyncDep.then(()=>{wa(()=>{e.isUnmounted||l()},i)});return}}let u=t,f;Oa(e,!1),t?(t.el=c.el,me(e,t,o)):t=c,n&&st(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&ao(f,s,t,c),Oa(e,!0);let p=$i(e),m=e.subTree;e.subTree=p,h(m,p,d(m.el),we(m),e,i,a),t.el=p.el,u===null&&aa(e,p.el),r&&wa(r,i),(f=t.props&&t.props.onVnodeUpdated)&&wa(()=>ao(f,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=ni(t);if(Oa(e,!1),l&&st(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ao(o,d,t),Oa(e,!0),s&&b){let t=()=>{e.subTree=$i(e),b(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=$i(e);h(null,o,n,r,e,i,a),t.el=o.el}if(u&&wa(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;wa(()=>ao(o,d,e),i)}(t.shapeFlag&256||d&&ni(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&wa(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Mt(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Tr(u),Oa(e,!0),l()},me=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ua(e,t.props,r,n),Ca(e,t.children,n),qt(),Or(e),Jt()},he=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){_e(l,f,n,r,i,a,o,s,c);return}if(p&256){ge(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&Ce(l,i,a),f!==l&&u(n,f)):d&16?m&16?_e(l,f,n,r,i,a,o,s,c):Ce(l,i,a,!0):(d&8&&u(n,``),m&16&&ae(f,n,r,i,a,o,s,c))},ge=(e,t,n,r,i,a,o,s,c)=>{e||=Pe,t||=Pe;let l=e.length,u=t.length,d=Math.min(l,u),f=0;for(;f<d;f++){let r=t[f]=c?no(t[f]):to(t[f]);h(e[f],r,n,null,i,a,o,s,c)}l>u?Ce(e,i,a,!0,!1,d):ae(t,n,r,i,a,o,s,c,d)},_e=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?no(t[l]):to(t[l]);if(Ja(r,u))h(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?no(t[f]):to(t[f]);if(Ja(r,l))h(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)h(null,t[l]=c?no(t[l]):to(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)ye(e[l],i,a,!0),l++;else{let p=l,m=l,ee=new Map;for(l=m;l<=f;l++){let e=t[l]=c?no(t[l]):to(t[l]);e.key!=null&&ee.set(e.key,l)}let g,_=0,v=f-m+1,te=!1,ne=0,re=Array(v);for(l=0;l<v;l++)re[l]=0;for(l=p;l<=d;l++){let r=e[l];if(_>=v){ye(r,i,a,!0);continue}let u;if(r.key!=null)u=ee.get(r.key);else for(g=m;g<=f;g++)if(re[g-m]===0&&Ja(r,t[g])){u=g;break}u===void 0?ye(r,i,a,!0):(re[u-m]=l+1,u>=ne?ne=u:te=!0,h(r,t[u],n,null,i,a,o,s,c),_++)}let ie=te?ja(re):Pe;for(g=ie.length-1,l=v-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||Pa(f):r;re[l]===0?h(null,d,n,p,i,a,o,s,c):te&&(g<0||l!==ie[g]?ve(d,n,p,2):g--)}}},ve=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ve(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,Ee);return}if(c===P){r(s,t,n);for(let e=0;e<u.length;e++)ve(u[e],t,n,a);r(e.anchor,t,n);return}if(c===za){v(e,t,n);return}if(a!==2&&d&1&&l){if(a===0)l.persisted&&!s[qr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),wa(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[qr];s._isLeaving&&s[qr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}}else r(s,t,n)},ye=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(qt(),ei(s,null,n,e,!0),Jt()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,ee=!ni(e),g;if(ee&&(g=o&&o.onVnodeBeforeUnmount)&&ao(g,t,e),u&6)Se(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Ir(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ee,r):l&&!l.hasOnce&&(a!==P||d>0&&d&64)?Ce(l,t,n,!1,!0):(a===P&&d&384||!i&&u&16)&&Ce(c,t,n),r&&be(e)}let _=m!=null&&p==null;(ee&&(g=o&&o.onVnodeUnmounted)||h||_)&&wa(()=>{g&&ao(g,t,e),h&&Ir(e,null,t,`unmounted`),_&&(e.el=null)},n)},be=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===P){xe(n,r);return}if(t===za){te(e),a&&!a.persisted&&a.afterLeave&&a.afterLeave();return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},xe=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},Se=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Na(c),Na(l),r&&st(r),i.stop(),a?(a.flags|=8,ye(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,ye(o,e,t,n)),s&&wa(s,t),wa(()=>{e.isUnmounted=!0},t)},Ce=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ye(e[o],t,n,r,i)},we=e=>{if(e.shapeFlag&6)return we(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[Gr];return n?f(n):t},y=!1,Te=(e,t,n)=>{let r;e==null?t._vnode&&(ye(t._vnode,null,null,!0),r=t._vnode.component):h(t._vnode||null,e,t,null,null,null,n),t._vnode=e,y||=(y=!0,Or(r),kr(),!1)},Ee={p:h,um:ye,m:ve,r:be,mt:de,mc:ae,pc:he,pbc:se,n:we,o:e},De,b;return t&&([De,b]=t(Ee)),{render:Te,hydrate:De,createApp:Ki(Te,De)}}function Da({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Oa({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ka(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Aa(e,t,n=!1){let r=e.children,i=t.children;if(E(r)&&E(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=no(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Aa(t,a)),a.type===La&&(a.patchFlag===-1&&(a=i[e]=no(a)),a.el=t.el),a.type===Ra&&!a.el&&(a.el=t.el)}}function ja(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Ma(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ma(t)}function Na(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Pa(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Pa(t.subTree):null}var Fa=e=>e.__isSuspense;function Ia(e,t){t&&t.pendingBranch?E(e)?t.effects.push(...e):t.effects.push(e):Dr(e)}var P=Symbol.for(`v-fgt`),La=Symbol.for(`v-txt`),Ra=Symbol.for(`v-cmt`),za=Symbol.for(`v-stc`),Ba=[],Va=null;function F(e=!1){Ba.push(Va=e?null:[])}function Ha(){Ba.pop(),Va=Ba[Ba.length-1]||null}var Ua=1;function Wa(e,t=!1){Ua+=e,e<0&&Va&&t&&(Va.hasOnce=!0)}function Ga(e){return e.dynamicChildren=Ua>0?Va||Pe:null,Ha(),Ua>0&&Va&&Va.push(e),e}function I(e,t,n,r,i,a){return Ga(L(e,t,n,r,i,a,!0))}function Ka(e,t,n,r,i){return Ga(R(e,t,n,r,i,!0))}function qa(e){return e?e.__v_isVNode===!0:!1}function Ja(e,t){return e.type===t.type&&e.key===t.key}var Ya=({key:e})=>e??null,Xa=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:O(e)||Zn(e)||D(e)?{i:Mr,r:e,k:t,f:!!n}:e);function L(e,t=null,n=null,r=0,i=null,a=e===P?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ya(t),ref:t&&Xa(t),scopeId:Nr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Mr};return s?(ro(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=O(n)?8:16),Ua>0&&!o&&Va&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Va.push(c),c}var R=Za;function Za(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===bi)&&(e=Ra),qa(e)){let r=$a(e,t,!0);return n&&ro(r,n),Ua>0&&!a&&Va&&(r.shapeFlag&6?Va[Va.indexOf(e)]=r:Va.push(r)),r.patchFlag=-2,r}if(To(e)&&(e=e.__vccOpts),t){t=Qa(t);let{class:e,style:n}=t;e&&!O(e)&&(t.class=_t(e)),k(n)&&(qn(n)&&!E(n)&&(n=ze({},n)),t.style=ft(n))}let o=O(e)?1:Fa(e)?128:Kr(e)?64:k(e)?4:D(e)?2:0;return L(e,t,n,r,i,o,a,!0)}function Qa(e){return e?qn(e)||ca(e)?ze({},e):e:null}function $a(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?io(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ya(l),ref:t&&t.ref?n&&a?E(a)?a.concat(Xa(t)):[a,Xa(t)]:Xa(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==P?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$a(e.ssContent),ssFallback:e.ssFallback&&$a(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&Xr(u,c.clone(u)),u}function z(e=` `,t=0){return R(La,null,e,t)}function eo(e,t){let n=R(za,null,e);return n.staticCount=t,n}function B(e=``,t=!1){return t?(F(),Ka(Ra,null,e)):R(Ra,null,e)}function to(e){return e==null||typeof e==`boolean`?R(Ra):E(e)?R(P,null,e.slice()):qa(e)?no(e):R(La,null,String(e))}function no(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$a(e)}function ro(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(E(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ro(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!ca(t)?t._ctx=Mr:r===3&&Mr&&(Mr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(D(t)){if(r&65){ro(e,{default:t});return}t={default:t,_ctx:Mr},n=32}else t=String(t),r&64?(n=16,t=[z(t)]):n=8;e.children=t,e.shapeFlag|=n}function io(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=_t([t.class,r.class]));else if(e===`style`)t.style=ft([t.style,r.style]);else if(Le(e)){let n=t[e],i=r[e];i&&n!==i&&!(E(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!Re(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ao(e,t,n,r=null){pr(e,t,7,[n,r])}var oo=Wi(),so=0;function co(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||oo,a={uid:so++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ma(r,i),emitsOptions:Zi(r,i),emit:null,emitted:null,propsDefaults:w,inheritAttrs:r.inheritAttrs,ctx:w,data:w,props:w,attrs:w,slots:w,refs:w,setupState:w,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Yi.bind(null,a),e.ce&&e.ce(a),a}var lo=null,uo=()=>lo||Mr,fo,po;{let e=dt(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};fo=t(`__VUE_INSTANCE_SETTERS__`,e=>lo=e),po=t(`__VUE_SSR_SETTERS__`,e=>_o=e)}var mo=e=>{let t=lo;return fo(e),e.scope.on(),()=>{e.scope.off(),fo(t)}},ho=()=>{lo&&lo.scope.off(),fo(null)};function go(e){return e.vnode.shapeFlag&4}var _o=!1;function vo(e,t=!1,n=!1){t&&po(t);let{props:r,children:i}=e.vnode,a=go(e);la(e,r,a,t),Sa(e,i,n||t);let o=a?yo(e,t):void 0;return t&&po(!1),o}function yo(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Di);let{setup:r}=n;if(r){qt();let n=e.setupContext=r.length>1?Co(e):null,i=mo(e),a=fr(r,e,0,[e.props,n]),o=Ke(a);if(Jt(),i(),(o||e.sp)&&!ni(e)&&Zr(e),o){if(a.then(ho,ho),t)return a.then(n=>{po(!0);try{bo(e,n,t)}finally{po(!1)}}).catch(t=>{mr(t,e,0)});e.asyncDep=a}else bo(e,a,t)}else xo(e,t)}function bo(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:k(t)&&(e.setupState=rr(t)),xo(e,n)}function xo(e,t,n){let r=e.type;e.render||=r.render||Fe;{let t=mo(e);qt();try{Ai(e)}finally{Jt(),t()}}}var So={get(e,t){return an(e,`get`,``),e[t]}};function Co(e){return{attrs:new Proxy(e.attrs,So),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function wo(e){return e.exposed?e.exposeProxy||=new Proxy(rr(Jn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ti)return Ti[n](e)},has(e,t){return t in e||t in Ti}}):e.proxy}function To(e){return D(e)&&`__vccOpts`in e}var Eo=(e,t)=>ar(e,t,_o),Do=`3.5.43`,Oo=void 0,ko=typeof window<`u`&&window.trustedTypes;if(ko)try{Oo=ko.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ao=Oo?e=>Oo.createHTML(e):e=>e,jo=`http://www.w3.org/2000/svg`,Mo=`http://www.w3.org/1998/Math/MathML`,No=typeof document<`u`?document:null,Po=No&&No.createElement(`template`),Fo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?No.createElementNS(jo,e):t===`mathml`?No.createElementNS(Mo,e):n?No.createElement(e,{is:n}):No.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>No.createTextNode(e),createComment:e=>No.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>No.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Po.innerHTML=Ao(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Po.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Io=Symbol(`_vtc`);function Lo(e,t,n){let r=e[Io];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ro=Symbol(`_vod`),zo=Symbol(`_vsh`),Bo=Symbol(``),Vo=/(?:^|;)\s*display\s*:/;function Ho(e,t,n){let r=e.style,i=O(n),a=!1;if(n&&!i){if(t){if(O(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Wo(r,t,``)}else for(let e in t)n[e]??Wo(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Wo(r,i,``):Jo(e,i,!O(t)&&t?t[i]:void 0,o)||Wo(r,i,o)}}else if(i){if(t!==n){let e=r[Bo];e&&(n+=`;`+e),r.cssText=n,a=Vo.test(n)}}else t&&e.removeAttribute(`style`);Ro in e&&(e[Ro]=a?r.display:``,e[zo]&&(r.display=`none`))}var Uo=/\s*!important$/;function Wo(e,t,n){if(E(n))n.forEach(n=>Wo(e,t,n));else if(n??=``,t.startsWith(`--`))Uo.test(n)?e.setProperty(t,n.replace(Uo,``),`important`):e.setProperty(t,n);else{let r=qo(e,t);Uo.test(n)?e.setProperty(rt(r),n.replace(Uo,``),`important`):e[r]=n}}var Go=[`Webkit`,`Moz`,`ms`],Ko={};function qo(e,t){let n=Ko[t];if(n)return n;let r=tt(t);if(r!==`filter`&&r in e)return Ko[t]=r;r=it(r);for(let n=0;n<Go.length;n++){let i=Go[n]+r;if(i in e)return Ko[t]=i}return t}function Jo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&O(r)&&n===r}var Yo=`http://www.w3.org/1999/xlink`;function Xo(e,t,n,r,i,a=yt(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Yo,t.slice(6,t.length)):e.setAttributeNS(Yo,t,n):n==null||a&&!bt(n)?e.removeAttribute(t):e.setAttribute(t,a?``:Ge(n)?String(n):n)}function Zo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ao(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=bt(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Qo(e,t,n,r){e.addEventListener(t,n,r)}function $o(e,t,n,r){e.removeEventListener(t,n,r)}var es=Symbol(`_vei`);function ts(e,t,n,r,i=null){let a=e[es]||(e[es]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=is(t);r?Qo(e,n,a[t]=cs(r,i),s):o&&($o(e,n,o,s),a[t]=void 0)}}var ns=/(Once|Passive|Capture)$/,rs=/^on:?(?:Once|Passive|Capture)$/;function is(e){let t,n;for(;(n=e.match(ns))&&!rs.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):rt(e.slice(2)),t]}var as=0,os=Promise.resolve(),ss=()=>as||=(os.then(()=>as=0),Date.now());function cs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(E(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&pr(e,t,5,a)}}else pr(r,t,5,[e])};return n.value=e,n.attached=ss(),n}var ls=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,us=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Lo(e,r,o):t===`style`?Ho(e,n,r):Le(t)?Re(t)||ts(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):ds(e,t,r,o))?(Zo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Xo(e,t,r,o,a,t!==`value`)):e._isVueCE&&(fs(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!O(r)))?Zo(e,tt(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Xo(e,t,r,o))};function ds(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&ls(t)&&D(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return ls(t)&&O(n)?!1:t in e}function fs(e,t){let n=e._def.props;if(!n)return!1;let r=tt(t);return Array.isArray(n)?n.some(e=>tt(e)===r):Object.keys(n).some(e=>tt(e)===r)}var ps=[`ctrl`,`shift`,`alt`,`meta`],ms={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>ps.some(n=>e[`${n}Key`]&&!t.includes(n))},hs=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=ms[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},gs=ze({patchProp:us},Fo),_s;function vs(){return _s||=Ta(gs)}var ys=((...e)=>{let t=vs().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=xs(e);if(!r)return;let i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,bs(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function bs(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function xs(e){return O(e)?document.querySelector(e):e}var Ss=Qn(0),Cs=()=>Ss.value++;function ws(e){return Ss.value,e()}var Ts=(e,t,n)=>b`<option value="${e}" ${e===String(n)&&y(`selected`)}>${t}</option>`;function Es(e){return f[e]?b`<span class="setting-help" tabindex="0" aria-label="${f[e]}"
        >ⓘ<span role="tooltip">${f[e]}</span></span
      >`:``}var V=e=>S(e>1e3?e/1e3:e)+(e>1e3?` GW`:` MW`);function Ds(e,t,n,r=`number`,i=``){return b`<label class="field"
    >${e} ${Es(t)}<input name="${t}" type="${r}" value="${n}" ${y(i)}
  /></label>`}function Os(e,t,n,r){return b`<label class="field"
    >${e} ${Es(t)}<select name="${t}">
      ${n.map(([e,t])=>Ts(e,t,r))}
    </select></label
  >`}var ks=new Set([`Fuel`,`Rocket Fuel`,`Nitric Acid`,`Turbofuel`,`Ionized Fuel`,`Dark Matter Residue`,`Excited Photonic Matter`,`Heavy Oil Residue`,`Alumina Solution`,`Sulfuric Acid`,`Dissolved Silica`,`Nitrogen Gas`,`Water`,`Crude Oil`,`Liquid Biofuel`]),As=[{mark:`Mk.1`,cap:60,entry:`Schematic_1-2_C`},{mark:`Mk.2`,cap:120,entry:`Schematic_3-2_C`},{mark:`Mk.3`,cap:270,entry:`Schematic_5-3_C`},{mark:`Mk.4`,cap:480,entry:`Schematic_6-1_C`},{mark:`Mk.5`,cap:780,entry:`Schematic_7-2_C`},{mark:`Mk.6`,cap:1200,entry:`Schematic_9-5_C`}],js=[{mark:`Mk.1`,cap:300,entry:`Schematic_3-1_C`},{mark:`Mk.2`,cap:600,entry:`Schematic_6-5_C`}],Ms={Plastic:{in:{"Crude Oil":30},out:{Plastic:20,"Heavy Oil Residue":10}},Rubber:{in:{"Crude Oil":30},out:{Rubber:20,"Heavy Oil Residue":20}},"Residual Fuel":{in:{"Heavy Oil Residue":60},out:{Fuel:40}},"Residual Rubber":{in:{"Polymer Resin":40,Water:40},out:{Rubber:20}},"Alternate: Heavy Oil Residue":{in:{"Crude Oil":30},out:{"Heavy Oil Residue":40,"Polymer Resin":20}},"Alternate: Diluted Fuel":{in:{"Heavy Oil Residue":50,Water:100},out:{Fuel:100}},"Alternate: Recycled Plastic":{in:{Rubber:30,Fuel:30},out:{Plastic:60}},"Alternate: Recycled Rubber":{in:{Plastic:30,Fuel:30},out:{Rubber:60}}},Ns=e=>e<=2?1:e<=4?2:e<=6?3:e<=8?4:5;function Ps(e){let t=am?.entries.find(t=>t.id===e.entry);return t?{name:t.name,tier:t.tier,phase:Ns(t.tier),marked:$(`unlock-`+t.id)}:null}function Fs(e,t){let n=e?js:As,r=Number(t??Q()),i=n[0],a=Ps(n[0]);for(let e of n){let t=Ps(e);(!t||t.marked||t.phase<=r)&&(i=e,a=t)}let o=n[n.indexOf(i)+1];return{...i,fluid:e,unit:e?` m³/min`:`/min`,milestone:a,next:o?{...o,milestone:Ps(o)}:null}}function Is(e,t,n){let r=Fs(t,n),i=Math.max(1,Math.ceil(e/r.cap-1e-9)),a=e-(i-1)*r.cap;return{lane:r,count:i,last:a,full:i-+(a<r.cap-1e-9),spare:i*r.cap-e,word:t?`pipe`:`belt`}}var Ls=(e,t)=>e>1?`1 of the ${S(e)} ${t.replace(/y$/,`ie`)}s`:`1 × ${t}`;function Rs([e,t,n],r){let i=b`${e!==`MW`&&C(e)}<span class="rail-main"
      ><b>${ke(t)}${ks.has(e)?` m³`:e===`MW`?` MW`:``}</b
      ><small>${e===`MW`?`Power generation`:e}</small></span
    >`;return n?b`<button class="rail-cell${r?` out`:``}" ${n}>${i}</button>`:b`<div class="rail-cell${r?` out`:``}">${i}</div>`}function zs(e){let t=e.recipe;return t?b`<div class="rail-recipe">
    <div class="rail-recipe-head">
      <span>Recipe · ${t.name}</span
      ><span>what ${Ls(e.machineCount,t.machine)} makes @ 100% · per minute</span>
    </div>
    <div class="rail-recipe-body">
      <div class="rail-recipe-ins">
        ${t.ins.length?t.ins.map(e=>Rs(e)):b`<div class="rail-cell">
              <span class="rail-main"><small>No belt or pipe inputs</small></span>
            </div>`}
      </div>
      <span class="rail-recipe-arrow">→</span>
      <div class="rail-recipe-outs">${t.outs.map(e=>Rs(e,!0))}</div>
    </div>
  </div>`:``}function Bs(e){if(!e||!e.inputs.length&&!e.outputs.length)return``;let t=e=>{let t=e.plan,n=Math.round(e.rate/(t.count*t.lane.cap)*100),r=b`${C(e.name)}<span class="rail-main"
        ><b>${e.name}</b
        ><small ${n>=70&&y(`class="hot"`)}
          >${t.count} × ${t.lane.mark} ${t.word}${t.count>1&&`s`} · ${n}% load</small
        ></span
      ><span class="rail-rate">${S(e.rate)}<small>${t.lane.unit}</small></span>`;return e.link?b`<button class="rail-tile" ${e.link}>${r}</button>`:b`<div class="rail-tile">${r}</div>`},n=t=>{let n={consumer:`consumer${t.beltTxt?` · `+t.beltTxt:``}`,store:`protected module`,ship:t.shipSub||`delivery`,drone:`protected supply contract`,sink:t.subTxt||`whole-machine rounding surplus`,more:`combined smaller destinations`},r=t.link?b`<button class="rail-link" ${t.link}>${t.label} ↗</button>`:b`<b class="${t.kind===`sink`||t.kind===`more`?`dim`:``}">${t.label}</b>`,i=t.mach===void 0?b`<span class="rail-mach"></span>`:b`<span class="rail-mach"
            ><b>≈ ${t.mach<.5?`<1`:S(Math.ceil(t.mach-1e-9))}</b> ×
            ${e.machineName}<small
              >${S(t.mach)} at 100% · ${e.local?`build beside it`:`round up`}</small
            ></span
          >`,a=t.rateTxt??(t.rate===void 0?``:b`${S(t.rate)}<small>${t.unit||`/min`}</small>`);return b`<div class="rail-row ${t.kind}">
      ${t.icon?C(t.icon):b`<span class="rail-noicon"></span>`}<span class="rail-main"
        >${r}<small>${t.pre&&t.pre+` · `}${n[t.kind]||``}</small></span
      >${i}<span class="rail-rate">${a}</span>
    </div>`},r=e.bar&&b`${e.inputs.length>0&&b`<div class="rail-arrow">↓</div>`}
      <div class="rail-machine">
        <div class="rail-machine-main">
          <b>${S(e.machineCount)} × ${e.machineName}</b><small>${e.bar.sub}</small>
        </div>
        <div class="rail-machine-out"><b>${e.bar.outTxt}</b><small>${e.bar.outSub}</small></div>
      </div>
      ${e.outputs.length>0&&b`<div class="rail-arrow">↓</div>`}`;return b`<h3>Flow at ${Fm(e.stage)}</h3>
    ${zs(e)}
    ${e.inputs.length>0&&b`<div class="rail-cap">
        Inputs · ${e.inputs.length} line${e.inputs.length>1&&`s`} in
      </div>
      <div class="rail-grid">${e.inputs.map(t)}</div>`}
    ${r}
    ${e.outputs.length>0&&b`<div class="rail-caps">
        <span class="rail-cap">Delivers · ${Fm(e.stage)}</span>${e.outputs.some(e=>e.mach!==void 0)&&b`<span class="rail-cap">Machines per delivery · ${S(e.machineCount)} total</span>`}
      </div>
      <div class="rail-rows">${e.outputs.map(n)}</div>
      ${e.bankNote}`}`}function Vs(e,t=`/min`){if(e.length<=10)return e;let n=e.slice(9),r=n.reduce((e,t)=>e+(t.rate||0),0);return[...e.slice(0,9),{kind:`more`,label:`+ ${n.length} more destinations`,rate:r,unit:t}]}function Hs(e){if(!e||!e.inputs.length)return``;let t=Fs(!1,e.stage),n=Fs(!0,e.stage),r=t.next?.milestone?` ${t.next.mark} belts (${S(t.next.cap)}/min) unlock at Tier ${t.next.milestone.tier} · ${t.next.milestone.name} in Phase ${t.next.milestone.phase}.`:``;return b`<h3>Belts &amp; pipes</h3>
    <p class="small muted">
      ${Fm(e.stage)} milestones give ${t.mark} belts (${S(t.cap)}/min) and
      ${n.mark} pipes (${S(n.cap)} m³/min).${r} If a milestone is not unlocked in
      your save yet, plan with the earlier mark.
    </p>
    <div class="logi">${e.inputs.map(t=>{let n=t.plan,r=n.lane,i=t.rate/e.equivalent,a=Math.floor(r.cap/i+1e-9),o=`${n.count} × ${r.mark} ${n.word}${n.count>1?`s`:``}`,s=[b`<b>${S(t.rate)}${r.unit}</b> → <b>${o}</b>${n.count>1?` — ${n.full} full + 1 carrying ${S(n.last)}${r.unit}`:` (${Math.round(t.rate/r.cap*100)}% of ${S(r.cap)}${r.unit})`}.`];if(e.machineCount>1&&s.push(a<1?`Each machine takes ${S(i)}${r.unit} — more than one ${r.mark} ${n.word} carries, so give machines dedicated feeds.`:e.machineCount>a?b`One full ${r.mark} ${n.word} feeds
                <b>${a} of the ${S(e.machineCount)} machines</b> (${S(i)}${r.unit} each) —
                plan manifold rows of ${a}.`:`One ${r.mark} ${n.word} feeds all ${S(e.machineCount)} machines (${S(i)}${r.unit} each).`),n.count>1&&n.spare>.01){let i=e.sameItemConsumers(t.name).filter(e=>e.rate<=n.spare+.01).slice(0,2).map(e=>b`<button class="btn quiet" ${e.attr}>
              ${e.label} (${S(e.rate)}${r.unit}) ↗
            </button>`);s.push(b`The last ${n.word} has <b>${S(n.spare)}${r.unit} spare</b> —
          ${i.length?b`enough to also carry ${i.flatMap((e,t)=>t?[` or `,e]:[e])} from the
              same bus`:`keep it as expansion headroom on this manifold`}.`)}return t.local&&s.push(t.local),b`<div class="logi-row">
      ${C(t.name)}
      <div><b>${t.name}</b>${s.map(e=>b`<p>${e}</p>`)}</div>
    </div>`})}</div>`}function Us(e,t,n,r,i=!1){let a=ks.has(e.name),o=a?` m³/min`:`/min`,s=Math.max(n.machines-1+(n.lastClock??100)/100,.01),c=n.output/s,l=e=>`${e.count} × ${e.lane.mark} ${e.word}${e.count>1?`s`:``}`,u=e=>i?void 0:e/c,d=Y.factories.filter(n=>n.id!==e.id&&n.stages[t]?.inputs?.[e.name]).map(n=>{let r=n.stages[t].inputs[e.name];return{kind:`consumer`,label:n.name,icon:n.name,link:b`data-factory="${n.id}"`,rate:r,unit:o,mach:u(r),beltTxt:e.local?`made on site`:l(Is(r,a,t))}}).sort((e,t)=>t.rate-e.rate),f=[...d];e.nuclear&&!d.length&&f.push({kind:`ship`,label:`Nuclear power fleet`,shipSub:`planned in Power & resources`,icon:e.name,rateTxt:``}),n.storage&&f.push({kind:`store`,label:`Storage refill`,icon:e.name,rate:n.storage,unit:o,mach:u(n.storage)}),n.delivery&&f.push({kind:`ship`,label:`Space Elevator delivery`,icon:e.name,rate:n.delivery,unit:o,mach:u(n.delivery)});let p=Math.max(0,n.output-(n.demand??n.output));p>.002&&f.push({kind:`sink`,label:`AWESOME Sink`,icon:e.name,rate:p,unit:o});let m=i?[]:Object.entries(n.inputs||{}).map(([e,n])=>{let i=r(e),a=i||Y.factories.find(n=>n.name===e&&n.stages[t]);return{name:e,rate:n,link:a?b`data-factory="${a.id}"`:``,plan:Is(n,ks.has(e),t),local:i?b`<button class="btn quiet" data-factory="${i.id}">
                Local: ≈ ${S(Math.ceil(n/i.stages[t].rate))} × ${i.stages[t].machine} at
                this site ↗
              </button>`:``}}),h=Vs(f,o),ee=h.filter(e=>e.mach!==void 0&&e.kind!==`sink`),g=ee.length>1?` · split ≈ ${ee.map(e=>S(Math.ceil(e.mach-1e-9))).join(` / `)} across the deliveries below`:``,_=(n.lastClock??100)<100?`@ 100% except the last at ${S(n.lastClock)}%`:`@ 100%`;return{stage:t,inputs:m,outputs:h,equivalent:s,machineCount:n.machines,machineName:n.machine,local:!!e.local,recipe:i?null:{name:String(n.recipe||``).replace(`Alternate: `,``),machine:n.machine,ins:m.map(e=>[e.name,e.rate/s,e.link]),outs:[[e.name,c]]},bar:i?null:{sub:`${String(n.recipe||``).replace(`Alternate: `,``)} · ${_} · ${ke(c)} ${e.name}/min out per machine${g}${e.local?` · built beside the consumers`:``}`,outTxt:b`${S(n.output)}<small>${o}</small>`,outSub:e.local?`out · distributed`:`out · `+l(Is(n.output,a,t))},sameItemConsumers:n=>Y.factories.filter(r=>r.id!==e.id&&r.stages[t]?.inputs?.[n]).map(e=>({label:e.name,rate:e.stages[t].inputs[n],attr:b`data-factory="${e.id}"`}))}}function Ws(e){let t=Rm(),n=Q(),r=Object.keys(e.outputs||{}).length>1,i=Math.max(e.equivalent||e.machines-1+(e.lastClock??100)/100||1,.01),a=e=>`${e.count} × ${e.lane.mark} ${e.word}${e.count>1?`s`:``}`,o=[];for(let s of Object.keys(e.outputs||{})){let c=ks.has(s),l=c?` m³/min`:`/min`,u=r?s:``,d=e.outputs[s]/i,f=e=>r?void 0:e/d;for(let r of(t.rows||[]).filter(t=>t.id!==e.id&&t.inputs?.[s]))o.push({kind:`consumer`,label:r.name,icon:Object.keys(r.outputs||{})[0]||s,link:b`data-calc-factory="${r.id}"`,rate:r.inputs[s],unit:l,pre:u,mach:f(r.inputs[s]),beltTxt:a(Is(r.inputs[s],c,n))});t.storage?.[s]&&o.push({kind:`store`,label:`Protected storage`,icon:s,rate:t.storage[s],unit:l,pre:u,mach:f(t.storage[s])}),t.delivery?.[s]?.rate&&o.push({kind:`ship`,label:`Space Elevator delivery`,icon:s,rate:t.delivery[s].rate,unit:l,pre:u,mach:f(t.delivery[s].rate)}),t.drone?.[s]&&o.push({kind:`drone`,label:`Drone fuel contract`,icon:s,rate:t.drone[s],unit:l,pre:u,mach:f(t.drone[s])}),n===`5`&&s===`Alien Power Matrix`&&t.matrixRate&&o.push({kind:`ship`,label:`Alien Power Augmenter fuel`,shipSub:S(q.settings.fueledAugmenters)+` fueled augmenter`+(q.settings.fueledAugmenters>1?`s`:``),icon:s,rate:t.matrixRate,unit:l,pre:u,mach:f(t.matrixRate)}),n===`5`&&s===`Singularity Cell`&&q.settings.cellsPerMinute&&o.push({kind:`ship`,label:`Extra Singularity Cells`,shipSub:`configured portal supply`,icon:s,rate:q.settings.cellsPerMinute,unit:l,pre:u,mach:f(q.settings.cellsPerMinute)}),s===`Plutonium Fuel Rod`&&t.plutoniumSink&&o.push({kind:`sink`,label:`AWESOME Sink`,subTxt:`waste strategy — sink these rods`,icon:s,rate:t.plutoniumSink,unit:l,pre:u}),t.surplus?.[s]>.002&&o.push({kind:`sink`,label:`AWESOME Sink`,icon:s,rate:t.surplus[s],unit:l,pre:u})}o.sort((e,t)=>(t.rate||0)-(e.rate||0)),!o.length&&e.generationMW&&o.push({kind:`ship`,label:`Power grid`,shipSub:`generation`,rateTxt:V(e.generationMW)});let s=Object.entries(e.inputs||{}).map(([r,i])=>{let a=(t.rows||[]).find(t=>t.id!==e.id&&t.outputs?.[r]);return{name:r,rate:i,link:a?b`data-calc-factory="${a.id}"`:``,plan:Is(i,ks.has(r),n)}}),c=Object.keys(e.outputs||{})[0],l=Vs(o),u=l.filter(e=>e.mach!==void 0&&e.kind!==`sink`),d=u.length>1?` · split ≈ ${u.map(e=>S(Math.ceil(e.mach-1e-9))).join(` / `)} across the deliveries below`:``,f=e.machines-i>1e-7?`@ 100% + 1 adjustable`:`@ 100%`,p=Object.keys(e.outputs||{}).some(n=>(t.rows||[]).some(t=>t.id!==e.id&&t.outputs?.[n]));return{stage:n,inputs:s,outputs:l,equivalent:i,machineCount:e.machines,machineName:e.machine,local:!1,recipe:{name:e.name,machine:e.machine,ins:s.map(e=>[e.name,e.rate/i,e.link]),outs:c?Object.entries(e.outputs).map(([e,t])=>[e,t/i]):[[`MW`,e.generationMW/i]]},bar:{sub:`${e.name} · ${f}${c&&!r?` · ${ke(e.outputs[c]/i)} ${c}/min out per machine`:``}${d}`,outTxt:c?b`${S(e.outputs[c])}<small>${ks.has(c)?` m³/min`:`/min`}</small>`:V(e.generationMW),outSub:c?r?`out · `+c+` + byproducts`:`out · `+a(Is(e.outputs[c],ks.has(c),n)):`generation`},bankNote:o.length?b`<p class="small muted">
          Demand for the item across this phase's whole
          plan${p?`, supplied together with the other recipes producing it`:``}.
        </p>`:``,sameItemConsumers:n=>(t.rows||[]).filter(t=>t.id!==e.id&&t.inputs?.[n]).map(e=>({label:e.name,rate:e.inputs[n],attr:b`data-calc-factory="${e.id}"`}))}}function Gs(e){return Object.entries(e).filter(([,e])=>e).map(([e,t])=>e+` `+S(t)+`/min`).join(` · `)}function Ks(){let e=X?.storageEdits||{};return{floors:e.floors||[],floorNames:e.floorNames||{},bays:e.bays||[],bayNames:e.bayNames||{},slots:e.slots||{},clearedSlots:e.clearedSlots||[]}}function qs(){let e=Ks();return[...[[`ground`,`Ground floor`],[`upper`,`Upper floor`],[`workshop`,`Workshop`]].map(([t,n])=>({id:t,label:e.floorNames[t]||n,builtin:!0})),...e.floors.map(t=>({id:t.id,label:e.floorNames[t.id]||t.label,builtin:!1}))]}function Js(){let e=new Set([...Y.storage.map(e=>e.id),...Ks().bays.map(e=>e.id)]);for(let t of`STUVXYZABCDEFGHIJKLMNOPQRW`)if(!e.has(t))return t;for(let t of`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)for(let n of`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)if(!e.has(t+n))return t+n;return null}function Ys(){let e=Ks(),t=new Set(e.clearedSlots),n=q?new Set(Object.values(q.stages).flatMap(e=>Object.keys(e.storage||{}))):null,r=q?q.settings.collectables??q.settings.storage===`all`:!0,i=(n,r)=>t.has(r)?null:e.slots[r]??n,a=t=>Object.keys(e.slots).reduce((e,n)=>ye(n)===t?Math.max(e,Se(n)):e,8),o=(e,t)=>Array.from({length:Math.max(0,a(e)-t)},(n,r)=>{let a=e+String(t+r+1).padStart(2,`0`);return{id:a,name:i(null,a)}}),s=Y.storage.map(t=>({...t,name:e.bayNames[t.id]||t.name,items:[...t.items.map(e=>{let a=n?e.name&&(n.has(e.name)||[`Q`,`R`].includes(t.id)&&r)?e.name:null:e.name;return{...e,name:i(a,e.id)}}),...o(t.id,t.items.length)]})),c=e.bays.map(t=>({id:t.id,name:e.bayNames[t.id]||t.name,floor:t.floor,custom:!0,items:o(t.id,0)}));return[...s,...c].filter(e=>e.custom||!n||e.items.some(e=>e.name))}var Xs=[`built`,`labelled`,`connected`,`verified`],Zs=e=>Xs.map(t=>`slot-`+e+`-`+t),Qs=e=>Zs(e).every($);function $s(){let e=qs();e.some(e=>e.id===dm)||wm(e[0].id);let t=e.find(e=>e.id===dm),n=Ys().filter(e=>e.floor===dm),r=n.filter(e=>!um||e.items.some(e=>e.name&&(e.id+` `+e.name).toLowerCase().includes(um.toLowerCase()))),i=[...r].sort((e,t)=>Math.floor((t.id.charCodeAt(0)-65)/2)-Math.floor((e.id.charCodeAt(0)-65)/2)||e.id.localeCompare(t.id)).map(e=>e.id),a=[...r].sort((e,t)=>e.id.localeCompare(t.id)),o=Array.from({length:Math.floor(i.length/2)},(e,t)=>b`<div class="aisle" style="--aisle-row:${t+1}">MAIN AISLE</div>`),s=b`<div class="tabs">
    ${e.map(e=>b`<button class="tab ${dm===e.id?`active`:``}" data-floor="${e.id}">
          ${e.label}
        </button>`)}
  </div>`,c=mm&&b`<section class="panel edit-panel">
      <h2>Storage layout</h2>
      <div class="edit-grid">
        <form id="add-bay" class="inline-form">
          <input
            id="new-bay-name"
            name="name"
            maxlength="80"
            required
            placeholder="New bay on this floor…"
            aria-label="New bay name"
          /><button class="btn primary" type="submit">+ Add bay</button>
        </form>
        <form id="add-floor" class="inline-form">
          <input
            id="new-floor-name"
            name="name"
            maxlength="80"
            required
            placeholder="New floor (e.g. Basement overflow)"
            aria-label="New floor name"
          /><button class="btn" type="submit">Add floor</button>
        </form>
        <form id="rename-floor" class="inline-form">
          <input
            id="floor-rename-input"
            name="name"
            maxlength="80"
            required
            placeholder="Rename this floor…"
            aria-label="Rename this floor"
          /><button class="btn" type="submit">Rename floor</button>
        </form>
        ${!t.builtin&&b`<button
          class="btn danger"
          data-remove-floor="${t.id}"
          ${n.length>0&&y(`disabled`)}
        >
          ${n.length?`Remove its bays first`:`Remove this floor`}
        </button>`}
      </div>
      <p class="small muted">
        Handbook bays and their addresses stay put: rename them or fill reserved positions. Added
        bays get the next free letter so container addresses and progress stay stable. A bay with no
        free position takes extra containers at 09 and upwards. Removing a container keeps its saved
        checkmarks.
      </p>
    </section>`,l=b`${dm===`ground`?K.id===`original`?b`<div class="notice blue">
            <b>Ground floor is built.</b> The shell is marked complete. Move Gas Filters G08 → H02
            and Nobelisks H02 → H08; assign Medicinal Inhalers to G08. H01 stays Iodine-Infused
            Filter.
          </div>`:b`<div class="notice blue">
            Optional storage template. Each position has its own checklist; nothing is assumed
            built.
          </div>`:dm===`upper`&&b`<div class="notice blue">
          Q sits behind O; R sits behind P. Packaged fluids only. Nuclear items and unpackaged
          fluids stay outside this room.
        </div>`}
    ${um&&b`<p class="small muted">
      Filtered view: showing matching bays only. Clear search to see the full floor arrangement.
    </p>`}${a.length>0&&b`<p class="eyebrow floor-marker">REAR OF HALL ↑</p>`}
    <div class="floor-grid">
      ${o.length||a.length?b`${o}${a.map(e=>ec(e,i.indexOf(e.id)))}`:dm!==`workshop`&&b`<div class="empty-state">
            ${n.length?`No matching item on this floor. Try another floor.`:`No bays on this floor yet. Use Edit layout to add one.`}
          </div>`}
    </div>
    ${a.length>0&&b`<div class="entry floor-marker">↓ ENTRANCE / STAIRS</div>
      <div class="small muted">
        Within each bay, 01–04 are the rear bank; 05–08 are the front bank. Read left to right on
        both banks. Grey positions remain unassigned. Positions from 09 are containers added beyond
        the printed bay.
      </div>`}`,u=q?[{id:`calc-storage-layout`,title:`Build and label the selected storage positions`,body:`Use one container per selected item. Reserve its refill supply and route sinkable overflow to the AWESOME Sink; gathered items need manual replenishment.`}]:Y.storageTasks;return String(b`${Gp(`ONE ITEM · ONE ADDRESS`,`Storage room`,q?`Showing your selected storage supply across all phases. Unselected positions are reserved; addresses stay stable.`:`Mark containers Done here, or complete a room after placing, labelling, connecting and checking its containers. Click an item for details. Positions match your printed storage plan.`)}
      <div class="toolbar">
        ${s}<input
          id="storage-search"
          class="search"
          aria-label="Find storage on this floor"
          placeholder="Find an item or address on this floor…"
          value="${um}"
        /><button class="btn ${mm?`primary`:``}" data-toggle-layout>
          ${mm?`Done editing`:`Edit layout`}
        </button>
      </div>
      ${c}${dm===`workshop`&&tc()}${l}
      <section style="margin-top:28px">
        <h2>Storage build checklist</h2>
        <div class="checklist">${u.map(Yc)}</div>
      </section>`)}function ec(e,t=0){let n=e.items.filter(e=>e.name),r=n.filter(e=>Qs(e.id)).length,i=mm?b`<input
        id="bay-name-${e.id}"
        class="bay-rename"
        data-bay-rename="${e.id}"
        value="${e.name}"
        maxlength="80"
        aria-label="Rename bay ${e.id}"
      />`:b`<h3>${e.name}</h3>`,a=mm&&e.custom&&b`<button class="btn danger" data-remove-bay="${e.id}">Remove bay</button>`,o=mm&&e.items.length<ve&&b`<form class="inline-form add-container" data-bay="${e.id}">
      <input
        id="bay-draft-${e.id}"
        name="name"
        maxlength="120"
        required
        placeholder="${n.length<e.items.length?`Add container: item name…`:`Add a position beyond `+e.items.at(-1).id+`…`}"
        aria-label="Add container to bay ${e.id}"
      /><button class="btn" type="submit">+ Add</button>
    </form>`,s=e=>um&&(e.id+` `+e.name).toLowerCase().includes(um.toLowerCase()),c=e=>e.name?b`<div class="slot ${Qs(e.id)?`done`:``} ${s(e)?`match`:``}">
          ${mm&&b`<button
            class="slot-remove"
            data-clear-slot="${e.id}"
            aria-label="Clear container ${e.id}: ${e.name}"
          >
            ✕
          </button>`}<button
            class="slot-details"
            data-slot="${e.id}"
            aria-label="${e.id}: ${e.name}"
          >
            <strong>${e.id}</strong
            ><img
              class="item-icon"
              src="./icons/${Ae(e.name)}.png"
              width="48"
              height="48"
              loading="lazy"
              alt=""
            /><span>${e.name}</span></button
          ><label class="slot-complete"
            ><input
              type="checkbox"
              data-complete-slot="${e.id}"
              aria-label="Complete ${e.id}: ${e.name}"
              ${Qs(e.id)&&y(`checked`)}
            />Done</label
          >
        </div>`:b`<div class="slot empty"><strong>${e.id}</strong><span>Reserved</span></div>`;return b`<section
    class="bay"
    style="--bay-row:${Math.floor(t/2)+1};--bay-col:${t%2?3:1}"
  >
    <header class="bay-head"><span class="bay-letter">${e.id}</span>${i}</header>
    <div class="bay-actions">
      <span class="small muted">${r}/${n.length} containers done</span
      ><span
        >${a}
        <button
          class="btn quiet"
          data-complete-bay="${e.id}"
          ${(!n.length||r===n.length)&&y(`disabled`)}
        >
          Complete room ${e.id}
        </button></span
      >
    </div>
    <div class="bay-items">
      ${e.items.map((e,t)=>b`${t===4&&b`<div class="walkway">BAY WALKWAY</div>`}${t===8&&b`<div class="walkway added">ADDED POSITIONS</div>`}${c(e)}`)}
    </div>
    ${o}
  </section>`}function tc(){return b`<div class="panel">
    <span class="eyebrow">GROUND-FLOOR REAR EXTENSION</span>
    <h2 style="margin-top:10px">Workshop beneath Q/R</h2>
    <p>
      The upper floor gets the new storage bays; the space underneath becomes your crafting area. No
      existing production-container addresses change.
    </p>
    <div class="checklist">
      ${[[`bench`,`Craft Bench and Equipment Workshop`,`Side by side near the entrance.`],[`tools`,`Tools and mobility equipment`,`Personal boxes on the left wall.`],[`weapons`,`Weapons and spare wearables`,`Personal boxes on the right wall. Ammo and filters stay in G/H.`],[`mam`,`MAM and inventory drop`,`Rear wall, with collected items routed to Q/R. Finish the sorter at a recovery chest.`]].map(([e,t,n])=>Yc({id:`workshop-`+e,title:t,body:n}))}
    </div>
  </div>`}var nc=[[`built`,`Container placed`],[`labelled`,`Sign and address labelled`],[`connected`,`Correct supply connected`],[`verified`,`Flow and overflow verified`]];function rc(e){let t=Ys().find(t=>t.items.some(t=>t.id===e)),n=t?.items.find(t=>t.id===e);if(!n?.name)return;let r=q?Rm().rows?.find(e=>e.outputs[n.name]):Y.factories.find(e=>e.name===n.name),i=Number(e.slice(t.id.length));_c(n.name,`${e} · ${qs().find(e=>e.id===t.floor)?.label||t.floor} · Bay ${t.id}`,b`<p>
        <b>${t.name}</b><br />${i<=4?`Rear`:`Front`} bank, position
        ${(i-1)%4+1} from the left on the floor plan.
      </p>
      <div class="check-columns">
        ${nc.map(([t,n])=>b`<label class="check-row"
              ><input
                type="checkbox"
                data-check="slot-${e}-${t}"
                ${y(Pm(`slot-`+e+`-`+t))}
              />${n}</label
            >`)}
      </div>
      ${r?b`<div class="detail-actions">
            <button
              class="btn"
              ${y(q?`data-calc-factory`:`data-factory`)}="${r.id}"
            >
              Open production target →
            </button>
          </div>`:b`<p class="small muted">
            Collected or completion item. Reserve its own supply; this storage position does not add
            production capacity.
          </p>`}
      <h3>Container notes</h3>
      <textarea id="detail-note" class="notes" maxlength="6000" aria-label="Container notes">
${X.notes[`slot-`+e]||``}</textarea
      >
      <div class="note-save">
        <span class="small muted">Belt source, splitter setting or remaining work.</span
        ><button class="btn" data-save-note="slot-${e}" data-input="detail-note">
          Save notes
        </button>
      </div>`,n.name)}var ic=e=>[`Plastic`,`Rubber`].includes(e.name)?`oil`:e.nuclear?`nuclear`:null;function ac(){let e=X?.factoryGroups||{};return{groups:e.groups||[],assignments:e.assignments||{}}}var oc=e=>ac().assignments[e]||[];function sc(e,t,n,r,i=`/min`){let a=oc(e),o=a.find(e=>e.group===t);if(!o||a.length===1&&o.rate==null)return``;let s=o.rate==null?Math.max(0,n-a.reduce((e,t)=>e+(t.rate||0),0)):o.rate,c=n>0?Math.min(1,s/n):0;return b`<div class="small allocation">
    ${o.rate==null?`Remaining here: `:`Here: `}${S(s)}${i} of
    ${S(n)}${i}${r>0&&c<1&&` · ≈ ${S(r*c)} of ${S(r)} machines`}
  </div>`}function cc(e){let t=ac();if(!t.groups.length)return b`<p class="small muted">Create a group above to place this factory.</p>`;let n=oc(e),r=t.groups.filter(e=>!n.some(t=>t.group===e.id)),i=e=>t.groups.find(t=>t.id===e.group)?.name;return b`<div class="assign-editor">
    ${n.map(t=>b`<div class="assign-row">
          <span>${i(t)||``}</span
          ><input
            type="number"
            min="0"
            step="any"
            data-assign-rate="${e}"
            data-group="${t.group}"
            placeholder="all / remainder"
            value="${t.rate??``}"
            aria-label="Production per minute in ${i(t)||`this group`}"
          /><button
            class="btn quiet danger"
            data-unassign="${e}"
            data-group="${t.group}"
            aria-label="Remove from ${i(t)||`group`}"
          >
            ✕
          </button>
        </div>`)}${r.length>0&&n.length<12&&b`<select data-assign-add="${e}" aria-label="Add to a group">
      <option value="">+ Add to group…</option>
      ${r.map(e=>b`<option value="${e.id}">${e.name}</option>`)}
    </select>`}
  </div>`}function lc(){return b`<section class="panel edit-panel">
    <h2>Factory groups</h2>
    <form id="add-group" class="inline-form">
      <input
        id="new-group-name"
        name="name"
        maxlength="80"
        required
        placeholder="New group (e.g. Cable factory)…"
        aria-label="New group name"
      /><button class="btn primary" type="submit">+ Add group</button>
    </form>
    <p class="small muted">
      Group production into the physical sites of your world. A factory can join several groups with
      a production split — for example Wire: 300/min at the cable factory and the remainder beside
      stitched plates. Leave the rate empty for the whole output or the remainder. Removing a group
      keeps every factory and its progress.
    </p>
  </section>`}function uc(e,t,n){return b`${ac().groups.map(r=>{let i=e.filter(e=>oc(t(e)).some(e=>e.group===r.id));return!i.length&&!_m?``:b`<section class="site-group user-group">
      <header class="site-head">
        <div>
          <span class="eyebrow"
            >FACTORY GROUP · ${i.length}
            ${i.length===1?`FACTORY`:`FACTORIES`}</span
          >${_m?b`<input
                class="bay-rename"
                data-group-rename="${r.id}"
                value="${r.name}"
                maxlength="80"
                aria-label="Rename group ${r.name}"
              />`:b`<h2>${r.name}</h2>`}
        </div>
        ${_m?b`<button class="btn danger" data-remove-group="${r.id}">Remove group</button>`:i.length>1&&b`<button class="btn" data-group-chain="${r.id}">Build order ↗</button>`}
      </header>
      <div class="cards">
        ${i.length?i.map(e=>n(e,r.id)):b`<div class="empty-state">
              Empty group. Add factories with the group selector on their cards.
            </div>`}
      </div>
    </section>`})}`}function dc(){return b`<button class="btn ${_m?`primary`:``}" data-toggle-factory-edit>
    ${_m?`Done editing`:`Edit groups`}
  </button>`}function fc(e,t=null){let n=e.stages[Q()],r=`factory-`+Q()+`-`+e.id;return b`<article class="factory-card ${$(r)?`done`:``}">
    <div class="card-top">
      <span class="card-icon">${C(e.name)}</span>
      <div class="card-main">
        <button class="name" data-factory="${e.id}">${e.name}</button>
        <div class="output">${S(n.output)} <span>/min</span></div>
      </div>
      ${e.local?b`<span class="badge">Local</span>`:e.conversion&&b`<span class="badge orange">Convert</span>`}
    </div>
    <div class="recipe">${n.recipe.replace(`Alternate: `,``)}</div>
    <div class="small">
      ${n.machines?`${S(n.machines)} × ${n.machine}`:`See shared oil campus`}
      <span class="muted">· storage ${S(n.storage)}/min</span>
    </div>
    ${t&&sc(e.id,t,n.output,n.machines)}
    <footer>
      <label class="check-row"
        ><input type="checkbox" data-check="${r}" ${y(Pm(r))} />Running</label
      ><button class="btn quiet" data-factory="${e.id}">Details ↗</button>
    </footer>
    ${_m&&cc(e.id)}
  </article>`}function pc(e,t){if(!t.length)return``;let n=Y.plans[Q()],r=e===`oil`?`Oil campus`:`Nuclear site`,i=e===`oil`?`One shared machine set produces these outputs together: ${S(n.oil.reduce((e,t)=>e+t.machines,0))} buildings · crude ${S(n.oilTotals.crude)}/min · water ${S(n.oilTotals.water)}/min. Open a card for the shared recipe table.`:`Build and balance this radioactive chain as one site at the power plants. Process buffers stay here; the general storage surplus does not apply.`;return b`<section class="site-group">
    <header class="site-head">
      <div>
        <span class="eyebrow">SHARED SITE · ${t.length} OUTPUTS</span>
        <h2>${r}</h2>
      </div>
      <p class="small muted">${i}</p>
    </header>
    <div class="cards">${t.map(e=>fc(e))}</div>
  </section>`}var mc=[[`all`,`All factories`],[`todo`,`Not running yet`],[`done`,`Running`],[`local`,`Made beside consumers`]];function hc(){let e=Y.factories.filter(e=>e.stages[Q()]).filter(e=>(e.name+` `+e.stages[Q()].recipe).toLowerCase().includes(um.toLowerCase())).filter(e=>fm===`all`||fm===`todo`&&!$(`factory-`+Q()+`-`+e.id)||fm===`done`&&$(`factory-`+Q()+`-`+e.id)||fm===`local`&&e.local),t=e.filter(e=>!oc(e.id).length),n=t.filter(e=>!ic(e)),r=t.filter(e=>ic(e)===`oil`),i=t.filter(e=>ic(e)===`nuclear`),a=uc(e,e=>e.id,(e,t)=>fc(e,t));return String(b`${Gp(`PRODUCTION LIBRARY`,`Factory targets`,`Outputs include downstream supply, protected storage and elevator exports. Click a factory for its inputs and expansion history.`)}
      ${Z()===`post`&&b`<div class="notice">
        These are retained Phase 5 capacities, not mandatory post-game output rates. Give new
        storage items priority before committing all spare output to sinks.
      </div>`}
      <div class="toolbar">
        <input
          id="factory-search"
          class="search"
          placeholder="Find a part or recipe…"
          aria-label="Find a factory"
          value="${um}"
        /><select id="factory-filter" aria-label="Factory status">
          ${mc.map(([e,t])=>b`<option value="${e}" ${fm===e&&y(`selected`)}>${t}</option>`)}</select
        ><span class="small muted">${e.length} targets</span>${dc()}
      </div>
      ${_m&&lc()} ${a}
      ${pc(`oil`,r)}${pc(`nuclear`,i)}
      ${(a.length>0||r.length>0||i.length>0)&&n.length>0&&b`<p class="eyebrow">UNGROUPED FACTORIES</p>`}
      <div class="cards">
        ${n.length?n.map(e=>fc(e)):!e.length&&b`<div class="empty-state">No factories match this filter.</div>`}
      </div>
      ${Z()===`post`&&gc()}`)}function gc(){return b`<section style="margin-top:32px">
    <h2>Additional completion modules</h2>
    <div class="notice">
      These recipe inputs are additional to the main resource budget. Allocate their supply first.
      Gathered feedstock and byproducts still need handling.
    </div>
    <div class="completion-grid">
      ${Y.completion.filter(e=>e.name.toLowerCase().includes(um.toLowerCase())).map(e=>b`<article class="completion-item">
              <label class="check-row"
                ><input
                  type="checkbox"
                  data-check="completion-${e.id}"
                  ${y(Pm(`completion-`+e.id))}
                /><strong>${e.name}</strong></label
              >
              <p>
                ${S(e.output)}/min · ${S(e.machines)} ${e.machine} · last at
                ${S(e.lastClock)}%<br />${e.recipe}
              </p>
              <p>
                <b>Inputs:</b> ${Gs(e.inputs)}${Object.keys(e.byproducts).length>0&&b`<br /><b>Byproducts:</b> ${Gs(e.byproducts)}`}
              </p>
            </article>`)}
    </div>
  </section>`}function _c(e,t,n,r=``){let i=x(`#detail`);i.innerHTML=String(b`<header class="dialog-head">
        <div class="dialog-title">
          ${r&&b`<span class="dialog-icon">${C(r)}</span>`}
          <div>
            <div class="eyebrow">${t}</div>
            <h2>${e}</h2>
          </div>
        </div>
        <button class="close" aria-label="Close details" data-close>×</button>
      </header>
      <div class="dialog-body">${n}</div>`),i.open||i.showModal()}function vc(e){let t=Y.factories.find(t=>t.id===e);if(!t)return;let n=t.stages[Q()]||Object.values(t.stages)[0],r=[`Plastic`,`Rubber`].includes(t.name),i={},a=Object.entries(t.stages).map(([e,t])=>{let n=r?(Y.plans[e]?.oil||[]).reduce((e,t)=>e+t.machines,0):0,a=r?n:t.machines,o=r?`shared campus buildings`:t.machine,s=i[o]||0,c=Math.max(0,a-s);return i[o]=Math.max(s,a),b`<tr>
      <td>${e}</td>
      <td>${S(t.output)}</td>
      <td>${S(t.storage)}</td>
      <td>${S(a)} ${o}</td>
      <td>${c?`+${S(c)}`:`Keep capacity`}</td>
    </tr>`}),o=t.stages[Q()]?Q():Object.keys(t.stages)[0],s=e=>Y.factories.find(t=>t.local&&t.name===e&&t.stages[o]),c=Us(t,o,n,s,r),l=`factory-`+o+`-`+t.id;_c(t.name,`${Fm(o)} · Handbook page ${t.page}`,b`<span class="badge orange">${n.recipe}</span>
      <div class="stats">
        ${Me(`Output`,S(n.output)+`/min`,`Total production`)}
        ${Me(`Storage`,S(n.storage)+`/min`,`Protected allowance`)}
        ${Me(`Machines`,r?`Campus`:S(n.machines),r?`Shared oil processes`:n.machine)}
      </div>
      ${t.note&&b`<div class="notice blue">${t.note}</div>`}
      ${t.local&&b`<div class="notice">
        Distributed production budget: build these machines beside the consumers listed below, plus
        the storage refill module. Independent site rounding can require additional machines.
      </div>`}
      ${Bs(c)}${yc(t,o)}
      ${t.nuclear&&b`<div class="notice">
        Process buffer at the nuclear site. Keep radioactive recycling flows balanced; do not apply
        a generic storage surplus.
      </div>`}
      ${r?xc(o):b`${Hs(c)}
            <p class="small muted">
              ${S(n.machines)} whole buildings. All at 100%, except the last at
              ${S(n.lastClock)}%. Peak production load ${S(n.peakMW)} MW; upstream factories and
              logistics are
              separate.${Object.keys(n.inputs).some(s)&&` Local inputs are produced beside this factory; their machines are part of the shared distributed budget.`}
            </p>`}
      <h3>Expansion across phases</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Output/min</th>
              <th>Storage/min</th>
              <th>Required</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            ${a}
          </tbody>
        </table>
      </div>
      <p class="small muted">
        Keep larger earlier installed capacity. Recipe changes need their new input routes. Counts
        are running requirements, not a demolition
        instruction.${r&&` Campus buildings are shared with the other polymer export and produce both together; the shared oil campus stages above list machines per recipe. Phase 4 replaces the simple Phase 3 refineries with the recycled loops.`}
      </p>
      <div class="detail-actions">
        <label class="check-row"
          ><input type="checkbox" data-check="${l}" ${y(Pm(l))} />Running at Phase
          ${o} target</label
        >
      </div>
      <h3>Factory notes</h3>
      <textarea id="detail-note" class="notes" maxlength="6000" aria-label="Factory notes">
${X.notes[`factory-`+t.id]||``}</textarea
      >
      <div class="note-save">
        <span class="small muted">Location, transport, next expansion.</span
        ><button class="btn" data-save-note="factory-${t.id}" data-input="detail-note">
          Save notes
        </button>
      </div>`,t.name)}function yc(e,t){let n=e.stages[t],r=Y.factories.some(n=>n.id!==e.id&&n.stages[t]?.inputs?.[e.name]),i=Z()===`post`?Y.completion.filter(t=>t.inputs?.[e.name]):[];return b`${r||n.delivery?``:e.nuclear?b`<p class="small muted">
          ${e.name} is consumed by the nuclear power fleet, which is planned in
          <a href="#resources">Power &amp; resources</a> rather than as a factory target. Keep its
          flow inside the nuclear site.
        </p>`:n.storage?b`<p class="small muted">
            No factory in this plan consumes ${e.name} directly; this capacity only refills the
            protected storage. The refill rate is a protected maximum, not continuous consumption —
            the machines idle once the container is full and only run while you take ${e.name} out.
          </p>`:``}${i.length>0&&b`<p class="small muted">
    Additional completion modules also use ${e.name}:
    ${i.map(t=>t.name+` `+S(t.inputs[e.name])+`/min`).join(` · `)}. Allocate
    their supply on top of this factory's budget.
  </p>`}`}var bc=(e,t)=>e.flatMap((e,n)=>n?[t,e]:[e]);function xc(e){let t=Y.plans[e],n=t.oil.map(e=>({...e,rc:Ms[e.recipe]||{in:{},out:{}}})),r=t=>{let n=Is(t,!0,e);return`${n.count} × ${n.lane.mark} pipe${n.count>1?`s`:``}`},i=Y.factories.find(t=>![`plastic`,`rubber`].includes(t.id)&&t.stages[e]?.inputs?.Fuel),a=b`<div class="rail-cap">Campus inputs</div>
    <div class="rail-grid">
      ${[[`Crude Oil`,t.oilTotals.crude],[`Water`,t.oilTotals.water]].filter(([,e])=>e>.01).map(([e,t])=>b`<div class="rail-tile">
              ${C(e)}<span class="rail-main"><b>${e}</b><small>${r(t)}</small></span
              ><span class="rail-rate">${S(t)}<small> m³/min</small></span>
            </div>`)}
    </div>`,o=n.map(e=>{let r=t=>Object.entries(e.rc[t]).map(([t,n])=>`${S(n*e.equivalent)}${ks.has(t)?` m³`:``} ${t}`).join(` + `),a=Object.keys(e.rc.out).map(r=>{let a=n.filter(t=>t!==e&&t.rc.in[r]).map(e=>`the ${e.recipe.replace(`Alternate: `,``)} ${e.machine.replace(/y$/,`ie`)}s`);return(r===`Plastic`||r===`Rubber`)&&a.push(`campus export`),r===`Fuel`&&(Number(t.oilTotals.generators)>0?a.push(`${S(t.oilTotals.generators)} Fuel Generators (${S(t.oilTotals.grossGW)} GW gross)`):t.oilTotals.fuel>.01&&a.push(b`export
              ${S(t.oilTotals.fuel)}/min${i&&b` to
                <button class="btn quiet" data-factory="${i.id}">
                  ${i.name} ↗
                </button>`}`)),a.length?b`${r} → ${bc(a,` + `)}`:``}).filter(e=>e.length),o=Math.floor(e.equivalent+1e-7),s=e.equivalent-o,c=s>1e-7?`${S(o)} at 100% + 1 at ≈ ${S(s*100)}%`:`all at 100%`;return b`<div class="rail-arrow">↓</div>
      <div class="rail-machine">
        <div class="rail-machine-main">
          <b>${S(e.machines)} × ${e.machine}</b
          ><small>${e.recipe} · ${c} · in ${r(`in`)||`—`} · out ${r(`out`)}</small>
        </div>
      </div>
      <div class="rail-recipe">
        <div class="rail-recipe-head">
          <span>Recipe · ${e.recipe.replace(`Alternate: `,``)}</span
          ><span>what ${Ls(e.machines,e.machine)} makes @ 100% · per minute</span>
        </div>
        <div class="rail-recipe-body">
          <div class="rail-recipe-ins">${Object.entries(e.rc.in).map(e=>Rs(e))}</div>
          <span class="rail-recipe-arrow">→</span>
          <div class="rail-recipe-outs">
            ${Object.entries(e.rc.out).map(e=>Rs(e,!0))}
          </div>
        </div>
      </div>
      ${a.length>0&&b`<p class="small muted">${bc(a,b`<br />`)}</p>`}`});return b`<h3>Shared oil campus · ${Fm(e)}</h3>
    <p>
      One campus makes Plastic and Rubber together. Crude never feeds the polymer machines
      directly${e===`3`?`: the standard refineries turn it into the polymers plus Heavy Oil Residue, which becomes generator fuel.`:`: it becomes Heavy Oil Residue and Polymer Resin first, and the polymers come out of the fuel-driven recycled loops.`}
      Build the stages in this order; recipe cells are per machine at 100%, per minute.
    </p>
    <p class="small muted">
      Flow rates here stay exactly balanced instead of rounded up: unpackaged fluids cannot overflow
      to the AWESOME Sink, and the loops feed themselves, so surplus fluid would back the chain up.
      Machine counts are whole — only each stage's last machine runs underclocked.
    </p>
    ${a}${o}
    <p>
      ${e===`3`?`Burn all ${S(t.oilTotals.fuel)} Fuel/min in ${t.oilTotals.generators} generators (last underclocked), giving ${S(t.oilTotals.grossGW)} GW gross. This additional Phase 3 byproduct power is not counted in later capacity totals.`:b`Export ${S(t.oilTotals.fuel)} Fuel/min; remaining fuel and recycled polymers are
            internal flows. <b>Seeding the loops:</b> run the Residual Rubber Refineries from resin
            first, feed that rubber with fuel into Recycled Plastic, then bring Recycled Rubber
            online — open the campus exports only once both loops are saturated.`}
    </p>`}function Sc(e){if(q)return(Rm().rows||[]).filter(t=>oc(t.id).some(t=>t.group===e)).map(e=>({id:e.id,attr:b`data-calc-factory="${e.id}"`,name:e.name,machine:e.machine,machines:e.machines,inputs:e.inputs||{},outputs:e.outputs||{},mw:e.generationMW}));let t=Q();return Y.factories.filter(n=>n.stages[t]&&oc(n.id).some(t=>t.group===e)).map(e=>{let n=e.stages[t];return{id:e.id,attr:b`data-factory="${e.id}"`,name:e.name,machine:n.machine,machines:n.machines,inputs:n.inputs||{},outputs:{[e.name]:n.output},recipe:n.recipe}})}function Cc(e){let t=ac().groups.find(t=>t.id===e);if(!t)return;let n=Sc(e);if(!n.length)return _c(t.name,`Factory group · build order`,b`<p class="small muted">
        No factories from this group produce anything in the current phase.
      </p>`);let r=e=>n.filter(t=>t.outputs[e]),i=[],a=new Set,o=new Map,s=[...n];for(;s.length;){let e=s.findIndex(e=>Object.keys(e.inputs).every(t=>r(t).every(t=>a.has(t.id)||t===e))),t=!1;if(e<0){let n=1/0;e=0,s.forEach((t,i)=>{let o=Object.keys(t.inputs).filter(e=>r(e).some(e=>!a.has(e.id)&&e!==t)).length;o<n&&(n=o,e=i)}),t=!0}let n=s.splice(e,1)[0];t&&o.set(n.id,Object.keys(n.inputs).filter(e=>r(e).some(e=>!a.has(e.id)&&e!==n))),i.push(n),a.add(n.id)}let c=new Map(i.map((e,t)=>[e.id,t+1])),l=q?Rm().rows||[]:Y.factories.filter(e=>e.stages[Q()]).map(e=>({id:e.id,name:e.name,inputs:e.stages[Q()].inputs||{}})),u=i.map((e,t)=>{let i=o.get(e.id)||[],a=Object.entries(e.inputs).map(([t,n])=>{let a=r(t).filter(t=>t!==e),o=i.includes(t)?b`<b class="chain-loop">loop — seed a starter batch</b>`:a.length?`stage `+Math.min(...a.map(e=>c.get(e.id))):`outside the group`;return b`${t} ${S(n)}${ks.has(t)?` m³`:``}/min
        <span class="muted">· ${o}</span>`}),s=Object.keys(e.outputs).map(t=>{let r=n.filter(n=>n!==e&&n.inputs[t]).map(e=>`stage ${c.get(e.id)} · ${e.name}`),i=l.filter(r=>r.id!==e.id&&r.inputs?.[t]&&!n.some(e=>e.id===r.id)).length,a=[...r];return i&&a.push(`${i} ${i===1?`factory`:`factories`} outside the group`),`${t} → ${a.join(` · `)||`storage, export or sink`}`});return b`<div class="chain-stage">
      <span class="chain-no">${String(t+1).padStart(2,`0`)}</span>
      <div class="chain-body">
        <div class="chain-title">
          <button class="rail-link" ${e.attr}>${e.name} ↗</button
          ><span class="muted">${S(e.machines)} × ${e.machine}</span>
        </div>
        ${a.length?b`<p class="small"><b>Needs</b><br />${bc(a,b`<br />`)}</p>`:b`<p class="small muted">No belt or pipe inputs.</p>`}
        <p class="small">
          <b>Feeds</b><br />${s.length?bc(s,b`<br />`):e.mw?`Power grid`:`—`}
        </p>
      </div>
    </div>`}),d=n.some(t=>oc(t.id).some(t=>t.group===e&&t.rate!=null));_c(t.name,`Factory group · build order · ${Fm(Q())}`,b`<p class="small muted">
        Stages are ordered so suppliers come before their consumers. An input marked <b>loop</b> is
        produced by a later stage: run that stage from a starter batch first, then close the loop.
      </p>
      <div class="chain">${u}</div>
      ${d&&b`<p class="small muted">
        Rates are the whole plan’s totals; this group’s production split is shown on the factory
        cards.
      </p>`}`)}function wc(){let e=Rm(),t=_e(q,X,am,Z());return[...Q()===`1`?[t.baseTasks[0],...t.powerTasks.slice(0,2),...t.baseTasks.slice(1,5),...t.milestoneTasks,...t.powerTasks.slice(2),...t.baseTasks.slice(5)]:[...t.powerTasks,...t.milestoneTasks],...t.hardDrives,...(e.rows||[]).map(e=>({id:`calc-`+Q()+`-`+e.id,title:e.name,body:`${Ac(e).summary} ${Ac(e).partial?`Adjustable machine: ≈ `+S(Ac(e).clock)+`% → ≈ `+Ac(e).lastOutput+`. Open factory details for an easier rounded option.`:`Each machine: `+Ac(e).fullOutput+`.`} ${e.amplified?`Insert ${e.slots} somersloop${e.slots>1?`s`:``} in each machine — ${e.sloops} in total — for double output from the same inputs at four times the power. `:``}Inputs /min: ${Object.entries(e.inputs).map(([e,t])=>e+` `+S(t)).join(`, `)||`none`}. Outputs /min: ${Object.entries(e.outputs).map(([e,t])=>e+` `+S(t)).join(`, `)||V(e.generationMW)}.`})),{id:`calc-`+Q()+`-storage`,title:`Connect protected storage and overflow`,body:`Reserve the listed storage refill rates before elevator exports. Handle every liquid byproduct; send surplus sinkable solids to the AWESOME Sink after unlocking it.`},...t.retire||[]]}function Tc(e,t){let n=[];return e.shortfalls?.length&&n.push(`Raise the short budget${e.shortfalls.length>1?`s`:``} (Resources): ${e.shortfalls.map(e=>`${e.name} to about ${S(e.needed)}/min (entered: ${S(e.budget)}/min)`).join(`; `)}.`),e.wholeMachinesOnly&&n.push(`Keep these budgets instead: untick “Run solid-part machines at 100%” (Goals). Precise balancing fits, with one adjustable machine per production line.`),e.minHours?n.push(t?.goal===`timed`?`Raise “Hours per phase” (Goals) to at least ${S(e.minHours)} h.`:`Switch the goal (Goals) to “Target completion time” with at least ${S(e.minHours)} hours per phase.`):e.shortfalls?.length&&!e.wholeMachinesOnly&&n.push(t?.goal===`maximum`?`Lower the protected storage refill rate, drone-fuel supply or extra Singularity Cells (Preferences).`:`More time alone will not fit: lower the protected storage refill rate, drone-fuel supply or extra Singularity Cells (Preferences)${t?.roundRates?`, or untick delivery-rate rounding (Goals)`:``}.`),e.shortfalls?.length&&t?.recipes===`standard`&&n.push(`Allow alternate recipes (Preferences) to cut raw resource use.`),e.shortfalls?.length&&t?.sam===`avoid`&&n.push(`Allow SAM resource conversion (Preferences) to turn plentiful resources into the short ones.`),n}function Ec(e,t){let n=Tc(e,t);return n.length?b`<p><b>Options</b></p>
        <ul>
          ${n.map(e=>b`<li>${e}</li>`)}
        </ul>`:``}function Dc(){let e=Rm(),t=e.feasible?``:Ec(e,q?.settings);return b`${!e.feasible&&b`<div class="notice">
    <b>Planning draft — resource budget exceeded or recipe combination unavailable.</b>
    ${e.reason}${t&&b`${t}
      <p class="small">
        Profiles are calculated snapshots: create a new profile with adjusted settings to apply an
        option.
      </p>`}
  </div>`}${e.additionalHeadroomMW>.01&&b`<div class="notice">
    Allow another ${V(e.additionalHeadroomMW)} for whole-building power headroom. Phase 1 needs
    biomass or existing generation.
  </div>`}`}function Oc(e,t=null){let n=Object.values(e.outputs||{})[0]||0,r=Object.entries(e.outputs).map(([e,t])=>`${e}: ${S(t)}/min`),i=`calc-`+Q()+`-`+e.id;return b`<article class="factory-card">
    <div class="card-top">
      <span class="card-icon">${C(Object.keys(e.outputs)[0])}</span>
      <div class="card-main">
        <button class="name" data-calc-factory="${e.id}">${e.name}</button>
        <div class="output">${S(e.machines)} <span>${e.machine}</span></div>
      </div>
    </div>
    <p>
      ${r.length?r.flatMap((e,t)=>t?[b`<br />`,e]:[e]):V(e.generationMW)}
    </p>
    ${t&&sc(e.id,t,n||e.generationMW,e.machines,n?`/min`:` MW`)}
    <footer>
      <label class="check-row"
        ><input type="checkbox" data-check="${i}" ${y(Pm(i))} />Running</label
      ><button class="btn quiet" data-calc-factory="${e.id}">Details ↗</button>
    </footer>
    ${_m&&cc(e.id)}
  </article>`}function kc(){let e=(Rm().rows||[]).filter(e=>(e.name+` `+Object.keys(e.outputs).join(` `)).toLowerCase().includes(um.toLowerCase())),t=e.filter(e=>!oc(e.id).length),n=uc(e,e=>e.id,(e,t)=>Oc(e,t));return String(b`${Gp(`CALCULATED PRODUCTION`,`Factory targets`,`Each recipe line includes its inputs, whole buildings and later expansion. Multiple recipes for a part can share one site.`)}
      ${q.settings.wholeMachines?b`<div class="notice blue">
            Whole-machine production: protect downstream supply first, refill storage, then sink
            surplus solids. Liquid and nuclear balances remain controlled.
          </div>`:b`<div class="notice blue">
            Prefer extra production over underclocking?
            <button class="btn primary" data-round-up>Round up production</button>
            <p>
              Creates a recalculated profile revision. Your previous profile stays available;
              increased factory requirements are marked for review.
            </p>
          </div>`}
      ${Dc()}
      <div class="toolbar">
        <input
          id="factory-search"
          class="search"
          aria-label="Find a factory"
          placeholder="Find a part or recipe…"
          value="${um}"
        /><span>${e.length} production lines</span>${dc()}
      </div>
      ${_m&&lc()}${n}${n.length>0&&t.length>0&&b`<p class="eyebrow">UNGROUPED PRODUCTION LINES</p>`}
      <div class="cards">${t.map(e=>Oc(e))}</div>`)}function Ac(e){let t=e.equivalent||e.machines-1+e.lastClock/100,n=Math.floor(t+1e-7),r=Math.max(0,t-n),i=r>1e-7,a=Object.fromEntries(Object.entries(e.outputs||{}).map(([e,n])=>[e,n/t])),o=Object.entries(a).map(([e,t])=>`${S(t)} ${e}/min`).join(` · `)||`${S(e.generationMW/t)} MW`,s=Object.entries(a).map(([e,t])=>`${S(t*r)} ${e}/min`).join(` · `)||`${S(e.generationMW/t*r)} MW`,c=`${e.machines} ${e.machine} total: ${i?(n?n+` at 100% + `:``)+`1 adjustable machine`:n+` at 100% (no underclock needed)`}.`,l=/uranium|plutonium|ficsonium|waste|non-fissile/i.test([e.name,...Object.keys(e.inputs||{}),...Object.keys(e.outputs||{})].join(` `)),u=null;if(i&&!l){let n=Math.ceil(r*100-1e-7),i=Object.entries(a)[0];if(i){let e=Math.ceil(i[1]*r-1e-7)/i[1]*100;e<=100&&Math.abs(e-Math.round(e))<1e-7&&(n=Math.max(n,Math.round(e)))}let o=n/100-r;o>1e-7&&(u={clock:n,output:Object.fromEntries(Object.entries(a).map(([e,t])=>[e,t*n/100])),inputs:Object.fromEntries(Object.entries(e.inputs||{}).map(([e,n])=>[e,n/t*o])),extraOutputs:Object.fromEntries(Object.entries(a).map(([e,t])=>[e,t*o]))})}return{summary:c,whole:n,partial:i,fullOutput:o,lastOutput:s,clock:r*100,easy:u}}function jc(e){let t=Ac(e);return b`<h3>Machine setup</h3>
    <p><b>${t.summary}</b></p>
    <table>
      <thead>
        <tr>
          <th>Machines</th>
          <th>Clock each</th>
          <th>Output per machine</th>
        </tr>
      </thead>
      <tbody>
        ${t.whole>0&&b`<tr>
          <td>${t.whole} full-speed</td>
          <td>100%</td>
          <td>${t.fullOutput}</td>
        </tr>`}${t.partial&&b`<tr>
          <td>1 adjustable</td>
          <td>≈ ${S(t.clock)}%</td>
          <td>≈ ${t.lastOutput}</td>
        </tr>`}
      </tbody>
    </table>
    ${t.easy&&!q?.settings.wholeMachines&&b`<div class="notice blue">
      <b>Easier optional setting: set only the adjustable machine to ${t.easy.clock}%.</b>
      <p>
        Its output:
        ${Gs(t.easy.output)||S(e.generationMW/(e.equivalent||1)*t.easy.clock/100)+` MW`}.
      </p>
      <p>
        Extra inputs needed: ${Gs(t.easy.inputs)}.<br />Extra outputs/byproducts:
        ${Gs(t.easy.extraOutputs)||`Additional generation`}.
      </p>
      <p>
        This is extra capacity, not a recalculated balanced plan. Supply the extra inputs and handle
        every extra output before using it. The totals below remain the original calculated targets.
      </p>
    </div>`}
    ${t.partial&&b`<p class="small muted">
      Calculated percentages and outputs are displayed rounded. Keep the calculated setting for
      tightly balanced recycling; do not round nuclear or waste-processing lines independently.
    </p>`}`}function Mc(e){let t=0;return b`${Nm(q.stages).map(([n,r])=>{let i=r.rows?.find(t=>t.id===e)?.machines||0,a=Math.max(0,i-t);return t=Math.max(t,i),b`<tr>
      <td>${n}</td>
      <td>${i||`—`}</td>
      <td>${a?`+`+a:`—`}</td>
    </tr>`})}`}function Nc(e){let t=Rm().rows?.find(t=>t.id===e);if(!t)return;let n=Ws(t),r=Object.keys(t.outputs||{})[0]||``;_c(t.name,Fm(Z()),b`${Bs(n)}${jc(t)}${Hs(n)}
      <h3>Outputs per minute</h3>
      <p>${Gs(t.outputs)||V(t.generationMW)}</p>
      <h3>Expansion by phase</h3>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Machines</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          ${Mc(e)}
        </tbody>
      </table>
      <p class="small muted">
        The optimizer may choose a different recipe in another phase. Keep earlier buildings until
        the replacement chain runs. Screws and wire can be made beside consumers.
      </p>
      <textarea id="detail-note" class="notes" maxlength="6000" aria-label="Factory notes">
${X.notes[`factory-`+e]||``}</textarea
      >
      <button class="btn" data-save-note="factory-${e}" data-input="detail-note">
        Save notes
      </button>`,r)}function Pc(){let e=Rm(),t=q.settings,n=e.conversions||[];return String(b`${Gp(`CHECK BEFORE EXPANDING`,`Power & resources`,`New production and new generator fuel are included. Existing fuel consumption must already be deducted from your entered budgets.`)}
      ${Dc()}
      <div class="stats">
        ${Me(`New generation`,V(e.generationMW),`Fuel and recycling included`)}
        ${Me(`Whole-machine peak`,V(e.peakMW),`At selected consumption multiplier`)}
        ${Me(`With utility allowance`,V(e.requiredMW),(t.utilityPercent??20)+`% for transport and utilities; verify actual load`)}
        ${Me(`Existing spare power`,V(t.availablePowerGW*1e3),`Not total installed generation`)}
        ${e.sloopsUsed>0&&Me(`Somersloops in production`,S(e.sloopsUsed),`Amplified machines: double output, four times the power`)}
        ${e.augmenters>0&&Me(`With augmenter boost`,V(e.availableMW),S(e.augmenters)+` augmenter`+(e.augmenters>1?`s`:``)+` · `+S(e.augmenterMW)+` MW plus `+Math.round(e.boost*100)+`% of base production`)}
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Required /min</th>
              <th>Budget /min</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            ${G.catalog.raw.map(n=>b`<tr>
                  <td class="resource-name">${C(n)}<span>${n}</span></td>
                  <td>${S(e.raw?.[n])}</td>
                  <td>${S(t.limits[n])}</td>
                  <td class="${(e.raw?.[n]||0)>t.limits[n]?`warn`:``}">
                    ${S(t.limits[n]-(e.raw?.[n]||0))}
                  </td>
                </tr>`)}
          </tbody>
        </table>
      </div>
      <div class="backup-grid">
        <section class="panel">
          <h2>Dedicated drone fuel /min</h2>
          <p>${Gs(e.drone||{})||`No dedicated drone fuel in this phase.`}</p>
          <h2>Protected storage /min</h2>
          <p>${Gs(e.storage||{})||`No storage production requested.`}</p>
          <h2>From production you already run</h2>
          <p>${Gs(e.supplied||{})||`None credited in this phase.`}</p>
          ${Object.keys(e.supplied||{}).length>0&&b`<p class="small muted">
            The plan does not build these lines or the chain behind them. Their extraction is
            assumed to be outside the budgets above.
          </p>`}
        </section>
        <section class="panel">
          <h2>Conversion and byproducts</h2>
          <p>
            ${n.length?n.flatMap((e,t)=>t?[b`<br />`,e]:[e]):`No raw-resource conversion required.`}
          </p>
          <p>Plutonium rods to sink: ${S(e.plutoniumSink)}/min.</p>
          <p>Surplus solids: ${Gs(e.surplus||{})||`None`}</p>
          <p class="small muted">
            Liquid and radioactive material balances are enforced. Do not let storage or overflow
            block recycling.
          </p>
        </section>
      </div>`)}function Fc(){let e=X?.taskEdits||{};return{order:e.order||{},removed:e.removed||[],titles:e.titles||{},bodies:e.bodies||{},links:e.links||{}}}function Ic(e){let t=Fc(),n=new Set(t.removed),r=e.filter(e=>!n.has(e.id)).map(e=>({...e,title:t.titles[e.id]||e.title,body:t.bodies[e.id]||e.body})),i=t.order[Z()];if(!i?.length)return r;let a=new Map(i.map((e,t)=>[e,t]));return[...r.filter(e=>a.has(e.id)).sort((e,t)=>a.get(e.id)-a.get(t.id)),...r.filter(e=>!a.has(e.id))]}function Lc(){return q?[...wc(),...X.customTasks.filter(e=>e.phase===Z())]:Zc()}function Rc(){return Ic(Lc())}var zc=e=>e.match(/^calc-(?:[1-5]|post)-(.+)$/)?.[1]||``;function Bc(e){let t=Fc().links[e.id]||zc(e.id);if(!t)return null;if(q){let e=(Rm().rows||[]).find(e=>e.id===t);return e?{calc:!0,id:e.id,name:e.name}:null}let n=Y.factories.find(e=>e.id===t&&e.stages[Q()]);return n?{calc:!1,id:n.id,name:n.name}:null}function Vc(e){return{options:q?(Rm().rows||[]).map(e=>[e.id,e.name]):Y.factories.filter(e=>e.stages[Q()]).map(e=>[e.id,e.name]),current:Fc().links[e.id]||zc(e.id)}}var Hc={production:`<path d="M3 20.5h18M5.5 20.5v-9l4 2.6v-2.6l4 2.6v-2.6l4 2.6v6.4M17.5 9.2V4h2.2v5.2"/>`,build:`<path d="M3.5 3.5h17v17h-17zM3.5 9.2h17M3.5 14.8h17M9.2 3.5v17M14.8 3.5v17"/>`,power:`<path d="M13.4 2.5 4.8 13.6h5.3l-.9 7.9 8.6-11.1h-5.3z"/>`,biomass:`<path d="M20.5 3.5C9.5 3.5 4 8.8 4 14.8a5.2 5.2 0 0 0 5.2 5.2c6 0 11.3-5.5 11.3-16.5Z"/><path d="M5.5 19C9 13 13.2 9.7 18.5 7.4"/>`,nuclear:`<circle cx="12" cy="12" r="1.9"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(120 12 12)"/>`,fluid:`<path d="M12 3.2c4 5 6.4 8.1 6.4 11a6.4 6.4 0 1 1-12.8 0c0-2.9 2.4-6 6.4-11Z"/>`,milestone:`<rect x="4" y="10.4" width="16" height="10.6" rx="1.4"/><path d="M8.2 10.4V7.2A3.9 3.9 0 0 1 16 6.6"/><path d="M12 14.3v3"/>`,research:`<path d="M9.4 3.2v6.4l-4.8 8.6A2 2 0 0 0 6.3 21.2h11.4a2 2 0 0 0 1.7-3L14.6 9.6V3.2"/><path d="M7.9 3.2h8.2M7.3 15.2h9.4"/>`,harddrive:`<rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="12" cy="12" r="3.3"/><circle cx="12" cy="12" r=".5"/>`,storage:`<rect x="3.2" y="5.6" width="17.6" height="13.4" rx="1.2"/><path d="M3.2 10.4h17.6M12 10.4V19M7.6 5.6v4.8M16.4 5.6v4.8"/>`,delivery:`<path d="M12 2.4c3 2.7 4.7 6.4 4.7 10.5v3H7.3v-3C7.3 8.8 9 5.1 12 2.4Z"/><path d="M7.3 12.8 4 15.6v3.6l3.3-1.7M16.7 12.8 20 15.6v3.6l-3.3-1.7M10.4 21.3h3.2"/><circle cx="12" cy="9.4" r="1.6"/>`,logistics:`<path d="M3.5 17.5h5.2a4.2 4.2 0 0 0 4.2-4.2v-2.6a4.2 4.2 0 0 1 4.2-4.2h3.4"/><path d="m17.4 3.4 3.1 3.1-3.1 3.1"/>`,portal:`<circle cx="12" cy="12" r="8.8"/><circle cx="12" cy="12" r="4.4"/><path d="M12 3.2v2.6M12 18.2v2.6M3.2 12h2.6M18.2 12h2.6"/>`,survey:`<circle cx="10.6" cy="10.6" r="6.6"/><path d="m15.4 15.4 5.1 5.1"/>`,retire:`<circle cx="12" cy="12" r="8.8"/><path d="m5.8 5.8 12.4 12.4"/>`,note:`<path d="m4 20.2.9-4.2L16 4.9l3.3 3.3L8.2 19.3z"/><path d="m14.4 6.5 3.3 3.3"/>`},Uc=[[/^custom-/,`note`],[/^recipe-unlock-|^hard-drives-/,`harddrive`],[/^retire-/,`retire`],[/^portal-supply/,`portal`],[/^drone-fuel-/,`logistics`],[/^startup-(?:biomass|solid-biofuel|burner-bank)/,`biomass`],[/^startup-nuclear-/,`nuclear`],[/^startup-aluminum-/,`fluid`],[/^startup-\d+-power-review$|^startup-coal-unlock$|^startup-fuel-|^preferred-power-/,`power`],[/^early-base-hub$/,`build`],[/^early-base-logistics$/,`logistics`],[/^early-base-reserves$/,`storage`],[/^early-base-/,`production`]],Wc=[[/retire|dismantle|decommission/,`retire`],[/portal/,`portal`],[/nuclear|uranium|plutonium|ficsonium|radioactive/,`nuclear`],[/drone/,`logistics`],[/deliver|elevator/,`delivery`],[/survey|verify|resilience|review|\btest\b/,`survey`],[/power|generator|fuel|coal/,`power`],[/storage|container/,`storage`],[/unlock|milestone|research/,`milestone`],[/logistic|belt|train|sorter|collectable/,`logistics`],[/aluminum|water/,`fluid`],[/concrete|construction|foundation|workshop|hub/,`build`]];function Gc(e){let t=e.id||``;if(t.startsWith(`unlock-`))return/^mam:/i.test(e.title||``)?`research`:`milestone`;for(let[e,n]of Uc)if(e.test(t))return n;let n=(t+` `+(e.title||``)).toLowerCase();for(let[e,t]of Wc)if(e.test(n))return t;return`production`}function Kc(e){let t=Fc().links[e.id]||zc(e.id);if(!t)return``;if(q){let e=(Rm().rows||[]).find(e=>e.id===t);return e&&Object.keys(e.outputs||{})[0]||``}let n=Y.factories.find(e=>e.id===t&&e.stages[Q()]);return n?n.name:``}function qc(e){let t=Kc(e);return t?{item:t}:{kind:Gc(e)}}function Jc(e){let t=Kc(e);if(t)return b`<span class="task-icon" data-kind="item" aria-hidden="true"
      >${C(t)}</span
    >`;let n=Gc(e);return b`<span class="task-icon" data-kind="${n}" aria-hidden="true"
    ><svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${y(Hc[n])}
    </svg></span
  >`}function Yc(e){return b`<article class="task">
    <input
      type="checkbox"
      data-check="${e.id}"
      aria-label="Complete: ${e.title}"
      ${y(Pm(e.id))}
    />${Jc(e)}
    <details data-task="${e.id}">
      <summary>${e.title}</summary>
      <p>${e.body}</p>
    </details>
  </article>`}function Xc(e){let t=um.trim().toLowerCase();return e.filter(e=>(!pm||!$(e.id))&&(!t||(e.title+` `+(e.body||``)).toLowerCase().includes(t)))}function Zc(){return[...Y.phases[Z()],...X.customTasks.filter(e=>e.phase===Z())]}var Qc=[`How you mine`,`Ore nodes`,`Resource wells`,`Your budgets`],$c=`https://satisfactory-calculator.com/en/interactive-map`;function el(e){return e.extraction||=e.settings.extraction?structuredClone(e.settings.extraction):ce(e.settings),e.extraction}var tl=(e,t,n)=>ie.map(([r,i])=>b`<label class="field count-cell"
        ><span>${i}</span
        ><input
          name="${e}:${t}:${r}"
          type="number"
          min="0"
          max="10000"
          step="1"
          value="${n[r]||0}"
          aria-label="${i} ${t} ${e===`well`?`well satellites`:`nodes`}"
      /></label>`);function nl(e,t,n){let i=e===`well`?n.wells:n.nodes;return b`<div class="count-table">
    ${t.map(t=>{let a={...r(),...i[t]||{}},o=e===`well`?ie.reduce((e,[t])=>e+(Number(a[t])||0)*pe(t,n),0):ie.reduce((e,[r])=>e+(Number(a[r])||0)*_(t,r,n),0);return b`<div class="count-row">
        <span class="count-name">${C(t)}<span>${t}</span></span>
        ${tl(e,t,a)}
        <span class="count-total">${o?S(Math.round(o))+`/min`:`—`}</span>
      </div>`})}
  </div>`}var rl=()=>{let e=J.settings,t=el(J),n=p(e.purity,e.distribution),r=e.distribution===`randomized`&&!n&&te.includes(e.purity),i=m(t),a=(g.find(([e])=>e===i)||[,``])[1],s=e.distribution===`randomized`?` Random moves nodes around the map; as far as the community has established, it does not change how many of each resource there are. Nitrogen wells are left for you: a well is randomized whole and the map’s wells hold different numbers of satellites, so a shuffle can still leave you more or less nitrogen than the default map.`:``,c;return c=n&&i===e.purity?b`<p class="small">
      The counts below are the map's node totals at <b>${a}</b>.${s} Change any that
      do not match your save.
    </p>`:n?b`<p class="small">
      Your world's node counts are known for these settings.
      <button type="button" class="btn quiet" data-node-preset="${e.purity}">
        Fill in the counts below
      </button>
    </p>`:r?b`<div class="notice">
      <b>Only the purity split is missing.</b> Random shuffles which resource sits at each location,
      so your world holds the same number of nodes for each resource as the default map — but it
      shuffles their purities too, and
      <b>${(re.find(([t])=>t===e.purity)||[,``])[1]}</b> keeps whatever split the
      shuffle produced. How many are impure, normal and pure is therefore yours to count. If you
      actually chose All Pure, Average or All Impure, pick that above and the counts fill
      in.${i&&b` The counts below are still the map's totals at <b>${a}</b> — the totals are right,
        the split is not.`}
    </div>`:b`<div class="notice">
      <b>No preset for these settings.</b>
      ${se[e.distribution]?b`A resource-rich distribution changes how many nodes each resource has, and the
          players who have counted these worlds get answers a third apart from one seed to the next
          — so filling anything in here would be a guess wearing a number.
          ${se[e.distribution]} Which way it goes is consistent; how far is not.`:`A random or hand-set purity has no fixed split to rearrange.`}
      Count yours on the map linked on the first screen, or upload your save there and it will count
      them for
      you.${i&&b` The counts below are still the <b>map's totals at ${a}</b>, so check them against
        your save.`}
    </div>`,b`<div class="node-presets">
    <span class="eyebrow">Your world settings ${Es(`nodePresets`)}</span>
    <div class="form-grid">
      ${Os(`Resource node randomization`,`distribution`,o,e.distribution)}
      ${Os(`Resource node purity`,`purity`,re,e.purity)}
    </div>
    ${c}
    <p class="small">
      ${J.extractionUndo?b`<button type="button" class="btn quiet" data-node-undo>Undo reset</button>
            <span class="muted"
              >Every count was cleared. This puts back what was there before.</span
            >`:b`<button type="button" class="btn quiet" data-node-reset>
              Reset all counts to zero
            </button>
            <span class="muted"
              >Clears every ore, well and committed amount so you can enter your own. You can undo
              it.</span
            >`}
    </p>
    <p class="small muted">
      The purity settings do not move nodes or add any, they shift every node up or down the purity
      scale, so a known purity is the known node count rearranged. Oil wells are not in that table —
      count those yourself.
    </p>
  </div>`};function il(){let e=el(J);J.extractionUndo=JSON.parse(JSON.stringify(e)),J.extraction={...i(),mark:e.mark,clock:e.clock}}function al(){J.extractionUndo&&(J.extraction=J.extractionUndo,J.extractionUndo=null)}function ol(){let t=J,n=el(t),r=t.extractionStep,i=[sl,cl,ll,ul][r-1]?.(t,n),a=r>=Qc.length;return String(b`${e&&Kp()}
      ${Gp(`YOUR WORLD`,`Work out your resource budgets`,`Count what your world holds; the planner turns it into the rates it plans against.`)}
      <div class="wizard-progress">
        ${Qc.map((e,t)=>b`<button
              type="button"
              class="${r===t+1?`current`:``}"
              data-extraction-step="${t+1}"
              ${r===t+1&&y(`aria-current="step"`)}
            >
              ${t+1}. ${e}
            </button>`)}
      </div>
      <form id="wizard-form" class="panel wizard-panel extraction-panel">
        ${i}
        <div class="wizard-actions">
          <button type="button" class="btn" data-extraction-back>
            ${r<=1?`Cancel`:`Back`}
          </button>
          <span class="guided-escape"
            >${r>1&&b`<button type="button" class="btn quiet" data-extraction-cancel>
              Leave these budgets alone
            </button>`}
            <button class="btn primary" type="submit">
              ${a?`Use these budgets`:`Continue →`}
            </button></span
          >
        </div>
        <p id="wizard-error" class="form-error" role="alert"></p>
      </form>`)}function sl(e,t){let n=(e,n)=>S(Math.round(_(e,n,t)));return b`<h2>Where your numbers come from</h2>
    <div class="notice blue">
      <b>You do not have to count nodes by hand.</b> Open the
      <a href="${$c}" target="_blank" rel="noreferrer"
        >Satisfactory Calculator interactive map</a
      >, upload your save file there, and it lists every resource node your world holds — including
      which are impure, normal and pure, and which resource wells you have found. Copy those counts
      into the next two screens.
      <p class="small">
        Uploading a save to that site is your decision and happens entirely between you and them;
        this planner never sends your save anywhere. If you would rather not, the map also works
        without a save and shows the default world's nodes.
      </p>
    </div>
    <h2>How you will mine them</h2>
    <p>
      Extraction depends on the miner and its clock speed far more than on anything else. Plan for
      the miner this phase can build and power, not the one you happen to have running today.
    </p>
    <div class="form-grid">
      ${Os(`Miner`,`mark`,ee.map(([e,t])=>[String(e),t]),String(t.mark))}
      ${Os(`Clock speed`,`clock`,a.map(([e,t])=>[String(e),t]),String(t.clock))}
    </div>
    <div class="notice">
      <b>At these settings</b> one iron node gives ${n(`Iron Ore`,`impure`)}/min impure,
      ${n(`Iron Ore`,`normal`)}/min normal and ${n(`Iron Ore`,`pure`)}/min pure. A crude
      oil node gives ${n(`Crude Oil`,`normal`)}/min normal, and one resource-well satellite
      ${S(Math.round(pe(`normal`,t)))}/min.
    </div>`}function cl(e,t){return b`<h2>Your ore nodes</h2>
    ${rl()}
    <p>
      How many nodes of each purity your world holds for each ore. ${Es(`extractionNodes`)} Zero
      means zero: a purity your world has none of, or an ore you have not found. Whatever you leave
      at zero, the plan cannot mine — so enter everything you intend to work.
    </p>
    ${nl(`node`,h,t)}`}function ll(e,t){return b`<h2>Resource wells</h2>
    ${rl()}
    <p>
      Crude oil comes from ordinary nodes and from resource wells; nitrogen only from wells.
      ${Es(`extractionWells`)}
    </p>
    <h3>Crude oil nodes</h3>
    ${nl(`node`,[`Crude Oil`],t)}
    <h3>Resource well satellites</h3>
    ${nl(`well`,[`Crude Oil`,`Nitrogen Gas`],t)}
    <div class="notice blue">
      ${C(`Water`)} <b>Water is not counted.</b> Extractors sit on any lake or ocean and
      there is far more coastline than a factory can draw on, so a node count would be a fiction.
      The planner keeps its standing water allowance of ${S(e.settings.limits.Water)}/min, which
      you can still change in All settings if you want to model a genuinely constrained site.
    </div>`}function ul(e,t){let n=[...h,`Crude Oil`,`Nitrogen Gas`],r=n.filter(e=>oe(t,e)<=0);return b`<h2>Your budgets</h2>
    <p>
      What those nodes yield, less anything already committed to factories this plan does not
      include. That deduction is what makes a budget mean <em>free for this plan to use</em>.
      ${Es(`extractionUsed`)}
    </p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Resource</th>
            <th>Whole pool /min</th>
            <th>Already committed /min</th>
            <th>Budget /min</th>
          </tr>
        </thead>
        <tbody>
          ${n.map(e=>{let n=Math.round(oe(t,e)),r=Number(t.used?.[e])||0,i=Math.max(0,n-r);return b`<tr>
              <td class="resource-name">${C(e)}<span>${e}</span></td>
              <td class="number">${n?S(n):`—`}</td>
              <td>
                <input
                  class="used-input"
                  name="used:${e}"
                  type="number"
                  min="0"
                  max="10000000"
                  step="any"
                  value="${r||``}"
                  placeholder="0"
                  aria-label="${e} already committed per minute"
                />
              </td>
              <td class="number ${n&&r>n?`warn`:``}">${n?S(i):`—`}</td>
            </tr>`})}
        </tbody>
      </table>
    </div>
    ${r.length>0&&b`<div class="notice">
      <b
        >${r.length===1?`One resource has`:S(r.length)+` resources have`} no nodes
        entered:</b
      >
      ${r.join(`, `)}. A zero budget means this plan may not use that resource at all — a fine
      answer for something you have genuinely not found, but if you simply have not counted them
      yet, go back and fill them in or the plan will not fit.
    </div>`}
    <p class="small muted">
      Production you already run is a different question, asked separately: that one credits
      finished parts, this one takes raw extraction off the top. Use this for ore feeding factories
      the plan will not rebuild, and the other for parts the plan would otherwise make again.
    </p>`}function dl(e){let t=J,n=el(t),i=new FormData(e),a=new Set(G.catalog.raw||[]);for(let[e,o]of i)if(e===`purity`||e===`distribution`)t.settings[e]=String(o);else if(e===`mark`)n.mark=Number(o);else if(e===`clock`)n.clock=Number(o);else if(e.startsWith(`node:`)||e.startsWith(`well:`)){let[t,i,s]=e.split(`:`);if(!a.has(i)||!ie.some(([e])=>e===s))continue;let c=t===`well`?n.wells??={}:n.nodes??={},l=c[i]||r();l[s]=Math.max(0,Math.floor(Number(o)||0)),l.impure||l.normal||l.pure?c[i]=l:delete c[i]}else if(e.startsWith(`used:`)){let t=e.slice(5);if(!a.has(t))continue;let r=Number(o);String(o).trim()!==``&&Number.isFinite(r)&&r>0?(n.used??={})[t]=r:delete n.used?.[t]}}async function fl(e){let t=J,n=x(`#wizard-form`);if(!Ml&&t&&e!==t.extractionStep&&!(n&&e>t.extractionStep&&!n.reportValidity())){if(n&&dl(n),e<1){pl();return}if(e<=Qc.length){t.extractionStep=e,H();return}t.settings.limits=c(t.extraction,t.settings.limits),t.settings.extraction=structuredClone(t.extraction),t.settings.limitsConfirmed=!0,t.preview=null,pl(),U(`Resource budgets set from your nodes. You can still edit any of them in All settings.`)}}function pl(){let e=J;e.mode=e.extractionReturn?.mode||`advanced`,e.step=e.extractionReturn?.step||4,e.extractionReturn?.guidedStep&&(e.guidedStep=e.extractionReturn.guidedStep),e.extractionReturn=null,e.extractionUndo=null,H()}function ml(){let e=J,t=x(`#wizard-form`);t&&(e.mode===`guided`?au(t):jl(t)),e.extractionReturn={mode:e.mode,step:e.step,guidedStep:e.guidedStep},e.mode=`extraction`,e.extractionStep=1,H()}function hl(e){let t=new Set(e.alternateRecipes||[]),n=new Set(e.preferredRecipes||[]),r=G.catalog.alternates||[];return b`<div class="alt-picker">
    <div class="alt-picker-head">
      <b>Alternate recipes · ${t.size} selected</b
      ><span class="alt-tools"
        ><button
          type="button"
          class="btn quiet"
          data-alt-best
          title="Recalculates with every alternate allowed and ticks only the recipes the optimal plan uses"
        >
          Planner’s choice</button
        ><button type="button" class="btn quiet" data-alt-all>Select all</button
        ><button type="button" class="btn quiet" data-alt-none>Clear all</button></span
      ><input
        id="alt-filter"
        type="search"
        placeholder="Filter by recipe or product…"
        aria-label="Filter alternate recipes"
      />
    </div>
    <p class="small muted">
      Only the recipes you tick are allowed in the plan. Hard-drive alternates are unlocked from
      crash sites; Turbofuel and Compacted Coal are researched in the MAM instead. Recipes your
      other choices depend on are selected automatically: a turbofuel-based power route locks its
      MAM recipes, and requiring pure ingots locks the pure recipes. Raw-resource conversion recipes
      are not alternates — they follow the SAM conversion setting and Tier 9 unlocks. Selecting none
      plans with standard recipes only. <b>Planner’s choice</b> recalculates with every alternate
      allowed and ticks only the recipes the optimal plan actually uses — each ticked recipe costs
      one hard drive. Select all and Clear all apply to the rows currently shown by the filter.
    </p>
    <p class="alt-force-hint">
      <span class="alt-force-star">★</span
      ><span
        ><b>Force a recipe:</b> tick it, then click its star. The plan will use
        <b>no other recipe</b> for that product once the starred one is available.</span
      >
    </p>
    <div class="alt-list">${r.map(r=>{let i=Object.keys(r.outputs),a=r.mam&&![`auto`,`coal`,`fuel`].includes(e.mainPower||`auto`)?`power preference`:r.pure&&e.pureIngots===!0?`ingot preference`:``;return b`<div
      class="alt-row"
      data-alt-text="${(r.name+` `+i.join(` `)).toLowerCase()}"
    >
      <label class="check-row"
        >${a?b`<input
              type="checkbox"
              checked
              disabled
              aria-label="${r.name} is required by your ${a}"
            />`:b`<input
              type="checkbox"
              name="alt"
              value="${r.id}"
              ${t.has(r.id)&&y(`checked`)}
            />`}<span
          >${r.name}<small class="muted">
            · ${i.join(`, `)} ·
            ${r.mam?`MAM research`:`Phase `+r.phase}${a&&` · required by your `+a}</small
          ></span
        ></label
      >${!a&&b`<label
        class="alt-pref"
        title="Force this recipe: the plan will not use any other recipe for ${i[0]} once this one is available"
        ><input
          type="checkbox"
          name="altpref"
          value="${r.id}"
          ${n.has(r.id)&&y(`checked`)}
          ${!t.has(r.id)&&y(`disabled`)}
          aria-label="Force ${r.name} as the only ${i[0]} recipe"
        /><span>★</span></label
      >`}<button
        type="button"
        class="btn quiet alt-info"
        data-alt-info="${r.id}"
        aria-label="Show the ${r.name} recipe"
      >
        recipe ↗
      </button>
    </div>`})}</div>
  </div>`}var gl=e=>{let t=new Set((G?.catalog?.alternates||[]).map(e=>e.id));return[...new Set(Object.values(e?.stages||{}).flatMap(e=>(e.rows||[]).filter(e=>e.alternate||t.has(e.id)).map(e=>e.id)))].sort()};function _l(e){let t=(G.catalog.alternates||[]).find(t=>t.id===e);if(!t)return;let n=Object.keys(t.outputs)[0],r=(G.catalog.standardRecipes||[]).filter(e=>e.outputs[n]),i=e=>zs({machineCount:1,recipe:{name:e.name.replace(`Alternate: `,``),machine:e.machine,ins:Object.entries(e.inputs||{}),outs:Object.entries(e.outputs||{})}});_c(t.name,t.mam?`MAM research · unlocked in the MAM, not from hard drives · ${t.machine}`:`Alternate recipe · available from Phase ${t.phase} · ${t.machine}`,b`${i(t)}
      ${r.length?b`<h3>Standard ${r.length>1?`recipes`:`recipe`} for ${n}</h3>
            ${r.map(i)}`:b`<p class="small muted">No standard recipe produces ${n}.</p>`}
      <p class="small muted">
        Rates are per machine at 100%, per minute. Alternates are unlocked with hard drives in game;
        ticking a recipe is a planning allowance, not an in-game unlock.
      </p>`,n)}function vl(e){let t=G.catalog.sloopUses||[],n=e.sloopReserved||[],r=10*(e.augmenters||0)+n.length+(e.amplifySloops||0),i=e.somersloops||0,a=Math.round((.1*((e.augmenters||0)-(e.fueledAugmenters||0))+.3*(e.fueledAugmenters||0))*100),o=e.augmenters||0,s=e.fueledAugmenters||0;return b`<div class="notice blue">
      <b>Somersloop ledger.</b>
      ${o?b`${o} augmenter${o>1?`s`:``} cost ${10*o} sloops
          and give Phase 5 ${S(500*o)} MW plus a ${a}% multiplier on the grid's
          base production.
          ${s?`Fueling ${s} of them adds ${S(5*s)} Alien Power Matrix/min to the plan — the rate is derived here, never entered.`:`Unfueled augmenters need no Alien Power Matrix.`}`:`Enter augmenters to include their power in Phase 5.`}
      Committed: <b>${r}</b> of ${i}
      available.${r>i&&b` <span class="warn">More than you have.</span>`}
    </div>
    ${e.amplifySloops?b`<p class="small muted">
          Production amplification will place up to ${S(e.amplifySloops)} somersloops in this
          plan's own machines. An amplified machine keeps its inputs, doubles its output and draws
          four times the power, so it trades power for ore and buildings. The budget applies to each
          phase's plan rather than adding up across phases, because every phase is a self-contained
          steady state.
        </p>`:b`<p class="small muted">
          Production amplification is off. Somersloops in your production lines cut ore and
          buildings, but finding and reaching them is a hunt — leave this at 0 to plan without it,
          exactly as before.
        </p>`}
    <p class="eyebrow">SOMERSLOOPS PARKED IN HAND-FED LINES</p>
    <div>
      ${t.map(([e,t])=>b`<label class="check-row"
            ><input
              type="checkbox"
              name="sloop"
              value="${e}"
              ${n.includes(e)&&y(`checked`)}
            />${t}</label
          >`)}
    </div>
    <p class="small muted">
      These double the output of a finite, hand-gathered input, so they are usually the best sloop
      you will ever spend: the world's power slugs are worth twice as many Power Shards through an
      amplified Constructor. Their inputs are carried in by hand, so they stay out of the production
      balance and only reserve a sloop and add a checklist step. The Crafting Bench cannot be
      amplified — the constructor recipe is the one that doubles.
    </p>`}function yl(e){let t=e.settings?.existingSupply||{};if(!Object.keys(t).length)return``;let n=Number(e.settings.phase||1),r={};for(let[t,i]of Object.entries(e.stages))if(Number(t)>=n)for(let[e,t]of Object.entries(i.supplied||{}))r[e]=Math.max(r[e]||0,t);let i=Object.entries(e.stages).filter(([e,t])=>t.supplyDropped&&Number(e)>=n).map(([e])=>e);return b`<div class="notice blue supply-notice">
    <b>Crediting production you already run.</b> These lines are not planned again, and neither is
    the chain behind them.
    <ul class="supply-summary">
      ${Object.entries(t).map(([e,t])=>{let n=r[e]||0;return b`<li>
      ${C(e)}<span
        ><b>${e}</b> ${S(t)}/min
        declared${n>.002?` · the plan draws up to ${S(n)}/min of it, and builds no line for it`:` · this plan has no use for it, so nothing changes`}</span
      >
    </li>`})}
    </ul>
    <p class="small">
      Their ore and their power are already spent in your world, so the resource budgets and the
      spare-power figure should be entered net of them — the same rule that makes "spare existing
      power" spare.
    </p>
    ${i.length>0&&b`<p class="small">
      <b>Phase ${i.join(` and `)}</b> could not be fitted to whole machines while crediting
      them, so ${i.length>1?`those phases are`:`that phase is`} planned as if you built
      all of it yourself. Nothing is lost — the plan is simply the larger one. Exact ratios instead
      of whole machines usually keeps the credit.
    </p>`}
  </div>`}function bl(e){let t=e.stages?.[5]?.fuelVerdict;if(!t)return``;if(!t.unfueledFeasible)return b`<div class="notice blue">
      <b>Fueled augmenters are carrying this plan.</b> Phase 5 does not fit its budgets without
      them, so the ${S(t.matrixRate)} Alien Power Matrix/min is doing real work.
    </div>`;let n=t.worthIt,r=t.buildings-t.buildingsUnfueled;return b`<div class="notice ${n?`blue`:``}">
    <b
      >${n?`Fueling these augmenters pays off.`:`Fueling these augmenters costs more than it returns.`}</b
    >
    Producing ${S(t.matrixRate)} Alien Power Matrix/min takes Phase 5 from
    ${S(t.buildingsUnfueled)} buildings to ${S(t.buildings)}
    (${r>0?`+`:``}${S(r)}) and from ${V(t.requiredMWUnfueled)} to
    ${V(t.requiredMW)} of demand, while the boost raises available power from
    ${V(t.availableMWUnfueled)} to ${V(t.availableMW)}.
    ${n?`The extra 20% is worth more than the fuel line costs at this scale.`:`At this scale the fuel line costs more than the extra 20% returns. Build the augmenter${e.settings.augmenters>1?`s`:``} unfueled, or put 4 somersloops in the Alien Power Matrix encoder — that halves the whole chain behind it and moves the break-even down.`}
  </div>`}function xl(e){let t=G.saves.find(t=>t.id===e.saveId);if(!t?.profiles.length)return``;let n=t.profiles.find(t=>t.id===e.carryFrom)||t.profiles[0],r=e.carry||{},i=xe(e.preview).length;return b`<section class="panel carry-panel">
    <h3>Continue the progress in this save</h3>
    <p>
      A new profile is a new plan for the same world, so it can start from what you have already
      done. Nothing is moved — the profile you carry from keeps all of it.
    </p>
    <label class="field"
      >Carry progress from
      <select name="carryFrom">
        ${t.profiles.map(e=>Ts(e.id,e.name,n.id))}
      </select></label
    >
    <div class="carry-list">
      ${be.filter(([e])=>e!==`picked`||i>0).map(([e,t,n])=>b`<label class="check-row"
              ><input
                type="checkbox"
                name="carry"
                value="${e}"
                ${r[e]&&y(`checked`)}
              /><span
                ><b>${t}</b>${e===`picked`&&` (`+S(i)+`)`}<br /><small
                  class="muted"
                  >${n}</small
                ></span
              ></label
            >`)}
    </div>
    <p class="small muted">
      Production lines this plan expands are carried unticked for review. Steps this plan does not
      contain stay with the profile you carried from.
    </p>
  </section>`}function Sl(e){let t=(G.catalog.storageItems||[]).filter(t=>fe(t.name,e.storage));if(!t.length)return``;let n=e.storageOverrides||{},r=t.filter(e=>n[e.name]!==void 0).length;return b`<details class="panel rate-picker" ${r>0&&y(`open`)}>
    <summary>
      Per-item storage rates${r>0&&` · `+S(r)+` set`} ${Es(`storageOverrides`)}
    </summary>
    <p class="small muted">
      Leave a box blank to use the rate for its group. Enter <b>0</b> to keep an item’s container
      and address without reserving any production for it. Space Elevator parts start at 0:
      deliveries and later project parts already consume them, so a standing buffer would be
      production nobody draws from. ${S(t.length)} items are in your selected storage supply.
    </p>
    <input
      id="rate-filter"
      type="search"
      placeholder="Filter by item…"
      aria-label="Filter storage items"
    />
    <div class="rate-list">
      ${t.map(t=>b`<label
            class="rate-row field"
            data-rate-text="${t.name.toLowerCase()}"
            data-rate-group="${t.build?`build`:t.delivered?`delivered`:`other`}"
            ><span
              >${t.name}${t.build?b` <small class="muted">· construction</small>`:t.delivered&&b` <small class="muted">· delivered</small>`}</span
            ><input
              name="rate:${t.name}"
              type="number"
              min="0"
              max="300"
              step="0.1"
              value="${n[t.name]??``}"
              placeholder="${S(ue({...e,storageOverrides:{}},t.name))}"
              aria-label="Storage refill for ${t.name} per minute"
          /></label>`)}
    </div>
  </details>`}function Cl(e,t){let n=J;if(!e?.querySelector(`.carry-list`))return;let r=t||new FormData(e),i=new Set(r.getAll(`carry`).map(String));n.carryFrom=r.get(`carryFrom`)||null,n.carry=Object.fromEntries(be.map(([e])=>[e,i.has(e)]))}function wl(t=null){if(!rm())return;let r=G.saves.find(e=>e.id===t),i=r?.profiles.find(e=>e.id===r.activeProfile),a=i?.settings||(i?.kind===`original`?{phase:`3`,purity:`pure`,distribution:`randomized`,multiplier:50,powerFactor:.5,availablePowerGW:0,recipes:`all`,pureIngots:!0,sam:`needed`,nuclear:`recycle`,uraniumReactors:1,storage:`all`,storageRate:1,cellsPerMinute:20,goal:`timed`,hours:8,roundRates:!0,wholeMachines:!0,limitsConfirmed:!1,limits:{...G.catalog.pureLimits}}:null);ym({step:1,saveId:t,saveName:r?.name||``,name:``,settings:a?structuredClone(a):{phase:`3`,purity:`vanilla`,distribution:`original`,multiplier:1,powerFactor:1,availablePowerGW:0,recipes:`standard`,pureIngots:!1,sam:`needed`,nuclear:`none`,uraniumReactors:1,storage:`construction`,storageRate:1,cellsPerMinute:0,goal:`balanced`,hours:8,roundRates:!0,wholeMachines:!0,limitsConfirmed:!1,limits:{...G.catalog.limits}},preview:null,carryFrom:r?.activeProfile||null,carry:Object.fromEntries(be.map(([e])=>[e,!0])),mode:`guided`,guidedStep:1,guidedAsk:null,usedGuided:!1,tutorial:`doing`}),a||(J.settings.storageOverrides={Concrete:n}),e&&!a&&(J.settings.phase=`1`),tm(`wizard`)}function Tl(){if(!J)return String(b`${Gp(`NEW PROFILE`,`Choose a save first`)}
        <button class="btn primary" data-new-save>Create a save</button
        ><a class="btn" href="#profiles">Existing saves</a>`);let t=J;if(t.mode===`extraction`)return ol();if(t.mode===`guided`&&t.guidedStep<=Yl().length)return ru();let n=[El,Dl,Ol,kl,Al][t.step-1];return String(b`${e&&Kp()}
      ${Gp(`SAVE → SETTINGS → GOALS → PLAN`,t.saveId?`Add a profile to `+t.saveName:`Create your factory plan`)}
      <div class="wizard-progress">
        ${[`Game settings`,`Preferences`,`Goals`,`Resources`,`Review`].map((e,n)=>b`<button
              type="button"
              class="${t.step===n+1?`current`:``}"
              data-wizard-step="${n+1}"
              ${t.step===n+1&&y(`aria-current="step"`)}
            >
              ${n+1}. ${e}
            </button>`)}
      </div>
      <form id="wizard-form" class="panel wizard-panel">
        ${n?.(t,t.settings)}
        <div class="wizard-actions">
          <button
            type="button"
            class="btn"
            ${y(t.step===1?`data-cancel-wizard`:`data-wizard-back`)}
          >
            ${t.step===1?`Cancel`:`Back`}</button
          ><span class="guided-escape"
            >${t.step<5&&b`<button type="button" class="btn quiet" data-guided-start>
              ← Guided start
            </button>`}<button class="btn primary" type="submit">
              ${t.step===5?`Create profile`:t.step===4?`Calculate plan`:`Continue →`}
            </button></span
          >
        </div>
        <p id="wizard-error" class="form-error" role="alert"></p>
      </form>`)}function El(e,t){return b`<h2>Your save and game settings</h2>
    <p>Use the settings shown in your game. Values are multipliers: half consumption is 0.5.</p>
    <div class="form-grid">
      ${Ds(`Save name`,`saveName`,e.saveName,`text`,`required maxlength="80" `+(e.saveId?`readonly`:``))}
      ${Os(`Currently working on`,`phase`,[`1`,`2`,`3`,`4`,`5`].map(e=>[e,`Phase `+e]),t.phase)}
      ${Os(`Resource purity`,`purity`,re,t.purity)}
      ${Os(`Node distribution`,`distribution`,o,t.distribution)}
      ${Ds(`World seed (optional)`,`worldSeed`,t.worldSeed||``,`number`,`min="-2147483648" max="2147483647" step="1"`)}
      ${Ds(`Elevator requirement multiplier`,`multiplier`,t.multiplier,`number`,`min="0.1" max="1000" step="0.1" required`)}
      ${Ds(`Power consumption multiplier`,`powerFactor`,t.powerFactor,`number`,`min="0" max="10" step="0.1" required`)}
      ${Ds(`Spare existing power (MW)`,`availablePowerMW`,t.availablePowerGW*1e3,`number`,`min="0" max="10000000" step="1" required`)}
      ${Ds(`Total installed power (MW)`,`installedPowerMW`,(t.installedPowerGW??t.availablePowerGW)*1e3,`number`,`min="0" max="10000000" step="1" required`)}
      ${Ds(`Other settings / mod notes`,`modNotes`,t.modNotes||``,`text`,`maxlength="500"`)}
    </div>
    <h3>Production you already run ${Es(`existingSupply`)}</h3>
    ${Bl(t)}
    <p class="small muted">
      Other settings are notes only. Modified recipes, production boosts and modded items are not
      simulated. Phase plans assume the necessary milestones and MAM research are unlocked by
      commissioning.
    </p>`}function Dl(e,t){let n=(e,t,n,r)=>Ds(e,t,n,`number`,r+` required`);return b`<h2>How do you want to build?</h2>
    <div class="form-grid">
      ${Os(`Recipe access`,`recipes`,[[`standard`,`Standard recipes`],[`all`,`Allow all alternate recipes as they become available`],[`custom`,`Pick specific alternate recipes`]],t.recipes)}
      ${Os(`Ingot factories`,`pureIngots`,[[`false`,`Let the planner choose`],[`true`,`Require pure ingot recipes when unlocked`]],String(t.pureIngots))}
      ${Os(`SAM resource conversion`,`sam`,[[`avoid`,`Avoid ore / gas conversion`],[`needed`,`Only to meet resource limits or improve maximum output`],[`allow`,`Allow whenever useful`]],t.sam)}
      ${n(`Extra utilities power (%)`,`utilityPercent`,t.utilityPercent??20,`min="0" max="200" step="1"`)}
      ${Os(`Drone fuel`,`droneFuel`,s.map(e=>[e,e===`none`?`No dedicated drone fuel`:e]),t.droneFuel||`none`)}
      ${n(`Drone fuel supply (items/min, entire fleet)`,`droneFuelRate`,t.droneFuelRate??10,`min="0.01" max="10000" step="any"`)}
      ${n(`Phase 4 battery bridge /min (ionized fuel only)`,`droneBridgeRate`,t.droneBridgeRate??10,`min="0.01" max="10000" step="any"`)}
      ${Os(`Preferred main power`,`mainPower`,v,t.mainPower||`auto`)}
      ${Os(`Nuclear goal`,`nuclear`,[[`none`,`No nuclear power`],[`sink`,`Uranium power; sink plutonium fuel rods`],[`recycle`,`Full waste recycling in Phase 5`]],t.nuclear)}
      ${n(`Minimum uranium reactors from Phase 4`,`uraniumReactors`,t.uraniumReactors,`min="1" max="1000" step="1"`)}
      ${Os(`Storage supply`,`storage`,le,t.storage)}
      ${Os(`Collectables storage`,`collectables`,[[`false`,`No collectables bays`],[`true`,`Include leaves, wood, slugs, food, protein and DNA`]],String(t.collectables??t.storage===`all`))}
      ${n(`Construction materials refill /min`,`buildRate`,t.buildRate??t.storageRate,`min="0" max="300" step="0.1"`)}
      ${n(`Other items refill /min`,`storageRate`,t.storageRate,`min="0.1" max="300" step="0.1"`)}
      ${n(`Extra Singularity Cells /min in Phase 5`,`cellsPerMinute`,t.cellsPerMinute,`min="0" max="1000" step="0.1"`)}
      ${n(`Somersloops available to spend`,`somersloops`,t.somersloops??0,`min="0" max="106" step="1"`)}
      ${n(`Alien Power Augmenters in Phase 5`,`augmenters`,t.augmenters??0,`min="0" max="10" step="1"`)}
      ${n(`Of those, fueled with Alien Power Matrix`,`fueledAugmenters`,t.fueledAugmenters??0,`min="0" max="10" step="1"`)}
      ${n(`Somersloops for production amplification`,`amplifySloops`,t.amplifySloops??0,`min="0" max="106" step="1"`)}
    </div>
    ${vl(t)}${Sl(t)}${t.recipes===`custom`&&hl(t)}
    <div class="notice blue">
      SAM conversion controls raw resource conversion, not SAM ingredients required by late-game
      parts. Pure recipes still need unlocking. Gathered items get storage positions but cannot have
      an unlimited automatic source.
    </div>
    <p class="small muted">
      Each Main Portal consumes <b>2 Singularity Cells/min</b> to maintain its connection; the
      Satellite Portal does not consume cells. <b>10/min supplies five connections</b> (the standard
      recipe produces 10/min). Reserve portal operating power separately.
      <a href="https://satisfactory.wiki.gg/wiki/Portal" target="_blank" rel="noreferrer"
        >Portal reference</a
      >. Nuclear waste and unpackaged fluids stay outside the storage room.
    </p>`}function Ol(e,t){let n=t.multiplier>5?`timed`:`balanced`;return b`<h2>Choose your production goal</h2>
    <p>
      ${t.multiplier>5?`Your elevator multiplier makes completion time a useful starting point.`:`Balanced progression is a practical starting point for these settings.`}
      Storage and your selected preferences apply to every option.
    </p>
    <div class="goal-grid">
      ${G.catalog.goals.map(e=>b`<label class="goal-card"
            ><input
              type="radio"
              name="goal"
              value="${e.id}"
              ${t.goal===e.id&&y(`checked`)}
            /><strong>${e.name}</strong>${n===e.id&&b`<span class="badge orange">Suggested</span>`}
            <p>${e.description}</p></label
          >`)}
    </div>
    <div class="form-grid">
      ${Ds(`Profile name`,`profileName`,e.name||G.catalog.goals.find(e=>e.id===t.goal).name,`text`,`required maxlength="80"`)}
      ${Ds(`Hours per phase (target-time option)`,`hours`,t.hours,`number`,`min="0.25" max="2000" step="0.25" required`)}
      ${Os(`Target time applies to`,`phaseTime`,[[`every`,`Every phase`],[`final`,`The final phase; earlier phases run as fast as their kept buildings allow`]],t.phaseTime||`every`)}
    </div>
    <label class="check-row"
      ><input type="checkbox" name="roundRates" ${t.roundRates&&y(`checked`)} />Round delivery
      rates to convenient numbers (may change completion time)</label
    ><label class="check-row"
      ><input
        type="checkbox"
        name="wholeMachines"
        ${t.wholeMachines!==!1&&y(`checked`)}
      />Run solid-part machines at 100%; send surplus to storage, then the sink</label
    >
    <p class="small muted">
      Inputs and byproducts are recalculated. Fluid, generator and nuclear/recycling lines may still
      need balancing. Recipe choices are selected first, then whole-machine counts are fitted within
      your budgets.
    </p>
    <p class="small muted">
      Maximum output means fastest simultaneous elevator completion, within your resource budgets.
      It does not maximize sink points. Rounding is ignored for maximum output.
    </p>`}function kl(e,t){return b`<h2>Available resource budgets</h2>
    <p>
      <button type="button" class="btn primary" data-open-extraction>
        Work these out from my nodes →
      </button>
      <span class="small muted"
        >Count what your world holds and the planner turns it into these rates.</span
      >
    </p>
    <p>
      Enter the extraction you can allocate to this new plan, per minute, after existing factories
      and power fuel. Starter values are full-map estimates at endgame extraction, not resources
      already connected.
    </p>
    <div class="notice blue">
      ${ae(t.purity,t.distribution).description}
      ${t.worldSeed?`Recorded seed: `+t.worldSeed+`. `:``}<a
        href="https://satisfactoryworldseed.com/"
        target="_blank"
        rel="noreferrer"
        >Look up your seed totals</a
      >
      ·
      <a href="https://satisfactory.wiki.gg/wiki/Resource_Node" target="_blank" rel="noreferrer"
        >Node reference</a
      >. Resource-rich counts cannot be filled accurately without your seed: enter the lookup totals
      below. Oil-well extraction may be added after its unlock.
    </div>
    <div class="resource-inputs">
      ${G.catalog.raw.map(e=>Ds(e,`limit:`+e,t.limits[e],`number`,`min="0" max="10000000" step="any" required`))}
    </div>
    <label class="check-row"
      ><input name="limitsConfirmed" type="checkbox" ${t.limitsConfirmed&&y(`checked`)} />I have
      checked these budgets for my save (required for maximum output)</label
    >`}function Al(e){let t=e.preview,n=Number(t.settings.phase||1),r=Object.entries(t.stages).filter(([e])=>Number(e)>=n);return b`<h2>Review ${e.name}</h2>
    <p>Nothing has been created yet. Your other profiles and their progress stay intact.</p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Delivery time</th>
            <th>Buildings</th>
            <th>New generation</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          ${r.map(([e,t])=>b`<tr>
                <td>${e}</td>
                <td>
                  ${t.hours?S(t.hours)+` h`:`—`}${t.aheadOf!==void 0&&b` <span class="badge">was ${S(t.aheadOf)} h</span>`}
                </td>
                <td>${t.rows?S(t.rows.reduce((e,t)=>e+t.machines,0)):`—`}</td>
                <td>${t.generationMW===void 0?`—`:V(t.generationMW)}</td>
                <td>${t.feasible?`Within entered limits`:`Needs adjustment`}</td>
              </tr>`)}
        </tbody>
      </table>
    </div>
    ${yl(t)}${bl(t)}
    ${r.filter(([,e])=>!e.feasible).map(([e,n])=>b`<div class="notice">
            <b>Phase ${e}:</b> ${n.reason}${Ec(n,t.settings)}
          </div>`)}
    <details class="panel">
      <summary>Assumptions and calculation limits</summary>
      ${t.warnings.map(e=>b`<p class="small">${e}</p>`)}
    </details>
    <p class="small muted">
      You can save a plan that exceeds your budgets as a planning draft; its affected phases remain
      clearly flagged. Profiles are calculated snapshots. Create another profile to compare
      different settings.
    </p>
    ${xl(e)}`}function jl(e){let t=new FormData(e),n=J,r=n.settings,i=r.purity+`|`+r.distribution;for(let[e,i]of t)e===`availablePowerMW`&&(r.availablePowerGW=Number(i)/1e3),e===`installedPowerMW`&&(r.installedPowerGW=Number(i)/1e3),e===`saveName`&&(n.saveName=i),e===`profileName`?n.name=i:e.startsWith(`limit:`)?r.limits[e.slice(6)]=Number(i):[`utilityPercent`,`droneFuelRate`,`droneBridgeRate`,`multiplier`,`powerFactor`,`availablePowerGW`,`uraniumReactors`,`storageRate`,`buildRate`,`cellsPerMinute`,`somersloops`,`augmenters`,`fueledAugmenters`,`amplifySloops`,`hours`].includes(e)?r[e]=Number(i):e===`collectables`?r.collectables=i===`true`:e===`pureIngots`?r[e]=i===`true`:[`phase`,`purity`,`distribution`,`recipes`,`sam`,`nuclear`,`storage`,`goal`,`phaseTime`,`modNotes`,`mainPower`,`worldSeed`,`droneFuel`].includes(e)&&(r[e]=i);e.querySelector(`[name=sloop]`)&&(r.sloopReserved=t.getAll(`sloop`).map(String)),e.querySelector(`.alt-list`)&&(r.alternateRecipes=t.getAll(`alt`).map(String),r.preferredRecipes=t.getAll(`altpref`).map(String).filter(e=>r.alternateRecipes.includes(e)));{let n=Vl(e,t);n&&(r.existingSupply=n)}if(e.querySelector(`.rate-list`)){let e={};for(let[n,r]of t)n.startsWith(`rate:`)&&String(r).trim()!==``&&Number.isFinite(Number(r))&&(e[n.slice(5)]=Number(r));r.storageOverrides=e}n.step===3&&(r.roundRates=t.has(`roundRates`),r.wholeMachines=t.has(`wholeMachines`)),n.step===4&&(r.limitsConfirmed=t.has(`limitsConfirmed`)),Cl(e,t),n.step===1&&i!==r.purity+`|`+r.distribution&&(r.limits=ae(r.purity,r.distribution).limits,r.limitsConfirmed=!1),n.preview=null}var Ml=!1,Nl=(e,t)=>(e&&(e.textContent=t),{onProgress:n=>{e&&(e.textContent=`${t} Phase ${n} of 5…`)}});function Pl(e,t){let n=e?.querySelector(`.form-error`);if(!n){U(t.message,!0);return}/timed out/i.test(t.message)?n.innerHTML=String(b`${t.message}<span class="error-options"
          ><b>Ways to get a plan:</b
          ><span>Try again — speed varies with your device and other open tabs.</span
          ><span
            >In the recipe picker, use <b>Planner’s choice</b> or untick alternates you don’t need;
            many recipes for the same product slow the search the most.</span
          ><span
            >In Goals, turn off whole-machine production — exact balancing calculates much
            faster.</span
          ><span>Lower the elevator multiplier or allow more hours per phase.</span></span
        >`):n.textContent=t.message}async function Fl(e){if(Ml||!J||e===J.step||e<1||e>5)return;let t=x(`#wizard-form`);if(!(e>J.step&&!t.reportValidity())){if(jl(t),e!==5){J.step=e,H();return}await Il(t)}}async function Il(e){Ml=!0;let t=document.querySelectorAll(`[data-wizard-step],[data-guided-advanced],#wizard-form button`);t.forEach(e=>e.disabled=!0);let n=e?.querySelector(`button[type="submit"]`),r=n?.textContent;try{J.name=J.name.trim()||G.catalog.goals.find(e=>e.id===J.settings.goal).name,J.preview=await em(`/api/preview`,{settings:J.settings},!0,Nl(n,`Calculating…`)),J.step=5,J.guidedStep=Yl().length+1,H()}catch(t){Pl(e,t),n&&(n.textContent=r)}finally{Ml=!1,t.forEach(e=>e.disabled=!1)}}var Ll=8;function Rl(e){let t=String(e||``).trim().toLowerCase();if(!t)return[];let n=[],r=[];for(let e of G.catalog.supplyItems||[]){let i=e.toLowerCase();i.startsWith(t)?n.push(e):i.includes(t)&&r.push(e)}return[...n,...r].slice(0,Ll)}function zl(e){return Array.isArray(e.supplyRows)||(e.supplyRows=Object.entries(e.settings.existingSupply||{}).map(([e,t])=>({name:e,rate:String(t)}))),e.supplyRows}function Bl(e){let t=[...zl(J),{name:``,rate:``}],n=new Set(G.catalog.supplyItems||[]),r=e=>e.name.trim()?n.has(e.name.trim())?String(e.rate).trim()?``:b`<span class="supply-hint"
              >Add a rate and this line is credited; leave it blank and it is not.</span
            >`:b`<span class="supply-hint warn">No item of that name — pick one from the list.</span>`:``;return b`<div class="supply-picker">
    <div class="supply-list">${t.map((e,t)=>{let i=e.name.trim(),a=n.has(i);return b`<div class="supply-row" data-supply-row="${t}">
      <div class="supply-field">
        <label class="field"
          >Item<span
            class="supply-input${a?` has-icon`:``}"
            data-icon="${a?i:``}"
            >${a&&C(i)}<input
              name="supplyItem"
              value="${e.name}"
              maxlength="80"
              autocomplete="off"
              spellcheck="false"
              placeholder="Search item"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="list"
              aria-controls="supply-options-${t}"
              aria-label="Search for an item you already produce" /></span
        ></label>
        <div class="supply-options" id="supply-options-${t}" role="listbox" hidden></div>
      </div>
      <label class="field"
        >Per minute<input
          name="supplyRate"
          type="number"
          min="0"
          max="1000000"
          step="any"
          value="${e.rate}"
          aria-label="Rate you already produce, per minute"
      /></label>
      <button
        type="button"
        class="btn quiet supply-remove${i?``:` is-blank`}"
        data-supply-remove="${t}"
        ${i?b`aria-label="Remove ${e.name}"`:y(`tabindex="-1" aria-hidden="true"`)}
      >
        Remove
      </button>
      ${r(e)}
    </div>`})}</div>
    <p class="small muted">
      The plan credits these and builds only the remainder — and it does not build the chain behind
      them either. What you make it with is your business: the recipe and machine count do not have
      to match anything this plan would choose. Their ore and their power are already spent in your
      world, so enter your resource budgets and spare power net of them, exactly as for any other
      existing factory.
    </p>
  </div>`}function Vl(e,t){if(!e?.querySelector?.(`.supply-list`))return null;let n=new Set(G.catalog.supplyItems||[]),r=t.getAll(`supplyItem`).map(e=>String(e)),i=t.getAll(`supplyRate`).map(e=>String(e)),a=r.map((e,t)=>({name:e,rate:i[t]??``})).filter(e=>e.name.trim()||String(e.rate).trim());J.supplyRows=a;let o={};for(let e of a){let t=e.name.trim(),r=Number(e.rate);n.has(t)&&String(e.rate).trim()!==``&&Number.isFinite(r)&&r>0&&(o[t]=r)}return o}function Hl(e){let t=e.closest(`.supply-field`);if(!t)return;let n=t.querySelector(`.supply-options`);if(!n)return;let r=Rl(e.value).filter(t=>t.toLowerCase()!==e.value.trim().toLowerCase());if(!r.length){Wl(e);return}n.innerHTML=String(b`${r.map(e=>b`<button
          type="button"
          role="option"
          aria-selected="false"
          class="supply-option"
          data-supply-pick="${e}"
        >
          ${C(e)}<span>${e}</span>
        </button>`)}`),n.hidden=!1,e.setAttribute(`aria-expanded`,`true`)}function Ul(e){let t=e.closest(`.supply-input`);if(!t)return;let n=e.value.trim(),r=(G.catalog.supplyItems||[]).includes(n)?n:``;t.dataset.icon!==r&&(t.dataset.icon=r,t.querySelector(`.item-icon`)?.remove(),t.classList.toggle(`has-icon`,!!r),r&&t.insertAdjacentHTML(`afterbegin`,C(r)))}function Wl(e){let t=e?.closest(`.supply-field`)?.querySelector(`.supply-options`);t&&(t.hidden=!0,t.innerHTML=``),e?.setAttribute(`aria-expanded`,`false`)}function Gl(e){let t=e.closest(`.supply-field`)?.querySelector(`input[name=supplyItem]`);if(!t)return;let n=Number(e.closest(`.supply-row`)?.dataset.supplyRow??-1);t.value=e.dataset.supplyPick,Wl(t);let r=x(`#wizard-form`);r&&(J.mode===`guided`?au(r):jl(r)),H(),[...document.querySelectorAll(`.supply-row`)][n]?.querySelector(`input[name=supplyRate]`)?.focus()}var Kl={minimal:`<path d="M4 20h4v-6H4zM10 20h4v-9h-4z"/><path d="M17 5v9M17 14l-2.5-3M17 14l2.5-3"/>`,balanced:`<path d="M12 4v16M6 20h12"/><path d="M3 9h18"/><path d="M6 9l-3 5h6zM18 9l-3 5h6z"/>`,timed:`<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 3h6"/>`,maximum:`<path d="M4 18a8 8 0 0 1 16 0"/><path d="M12 18l5-6"/><path d="M12 18h.01"/>`,standard:`<rect x="4" y="5" width="16" height="14" rx="1"/><path d="M8 10h8M8 14h5"/>`,alternates:`<path d="M5 19V9a3 3 0 0 1 3-3h11"/><path d="M16 3l3 3-3 3"/><path d="M5 19h6a3 3 0 0 0 3-3v-1"/>`,custom:`<path d="M4 7h9M4 12h9M4 17h6"/><path d="M15 15l2.5 2.5L22 13"/>`,"stock-none":`<path d="M4 8h16v11H4z"/><path d="M4 8l2-3h12l2 3"/><path d="M9 12h6" opacity=".35"/>`,"stock-build":`<path d="M4 8h16v11H4z"/><path d="M4 8l2-3h12l2 3"/><path d="M8 12h8M8 15h8"/>`,"stock-all":`<path d="M3 13h8v7H3zM13 13h8v7h-8z"/><path d="M8 4h8v7H8z"/>`,whole:`<rect x="3" y="7" width="5" height="11"/><rect x="9.5" y="7" width="5" height="11"/><rect x="16" y="7" width="5" height="11"/><path d="M3 4h18"/>`,precise:`<circle cx="12" cy="12" r="8"/><path d="M12 12l4-3"/><path d="M12 4v2M20 12h-2M12 20v-2M4 12h2"/>`,tutorial:`<path d="M6 4v16"/><path d="M6 5h11l-2.5 3.5L17 12H6z"/>`,"tutorial-done":`<path d="M6 4v16"/><path d="M6 5h11l-2.5 3.5L17 12H6z"/><path d="M13 18l2 2 4-4"/>`},ql=e=>b`<span class="guided-art" aria-hidden="true"
    ><svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${y(Kl[e]||Kl.balanced)}
    </svg></span
  >`,Jl=e=>b`<span class="guided-art items" aria-hidden="true"
    >${e.slice(0,4).map(e=>C(e))}</span
  >`;function Yl(){let e=J,t=[];for(let n of l)t.push(n),n.id===`phase`&&!e.saveId&&t.push(u(String(e.settings.phase||`3`)));return e.guidedAsk?t.filter(t=>e.guidedAsk.includes(t.id)):t}var Xl=e=>{let t=J,n=t.settings;return e.id===`tutorial`?t.tutorial||`doing`:e.id===`standing`?t.standing||`none`:e.id===`exact`?n.wholeMachines===!1?`precise`:`whole`:e.id===`stock`?e.options.some(e=>e.value===n.storage)?n.storage:`construction`:String(n[e.id]??``)};function Zl(e){let t=Xl(e);return b`<div class="guided-grid">
    ${e.options.map(n=>b`<label class="guided-card${n.value===t?` is-picked`:``}">
          <input
            type="radio"
            name="guided:${e.id}"
            value="${n.value}"
            aria-label="${n.label+`. `+n.detail}"
            ${n.value===t&&y(`checked`)}
          />
          ${n.items?Jl(n.items):ql(n.glyph)}
          <strong>${n.label}</strong>
          <p>${n.detail}</p>
          ${n.handoff&&b`<span class="badge">Opens All settings</span>`}
        </label>`)}
  </div>`}function Ql(e){if(e.storage===`none`)return``;let t=e.storageOverrides||{};return b`<fieldset class="guided-topup">
    <legend>Which of these do you keep running out of? ${Es(`guidedTopup`)}</legend>
    <p class="small muted">
      Containers fill from surplus on their own — a default Phase 3 plan already spills 29 Wire and
      19 Iron Plate a minute into storage. These get a guaranteed ${S(n)}/min on
      top, which costs about 1% more buildings each. Concrete is picked for you because it is the
      one the plan leaves least spare.
    </p>
    <div class="guided-chips">
      ${d.map(e=>b`<label class="guided-chip${t[e]===void 0?``:` is-picked`}"
            ><input
              type="checkbox"
              name="topup"
              value="${e}"
              aria-label="Guarantee ${S(n)} ${e} a minute"
              ${t[e]!==void 0&&y(`checked`)}
            />${C(e)}<span>${e}</span></label
          >`)}
    </div>
  </fieldset>`}function $l(){let e=J,t=e.settings,n=G.saves.find(t=>t.id===e.saveId),r=n?.profiles.find(t=>t.id===(e.carryFrom||n.activeProfile))||n?.profiles[0],i=[[`Phase`,`Phase `+(t.phase||`3`)],[`Goal`,(G.catalog.goals.find(e=>e.id===t.goal)||{}).name||t.goal],[`Recipes`,t.recipes===`all`?`All alternates`:t.recipes===`custom`?S((t.alternateRecipes||[]).length)+` picked`:`Standard only`],[`Stocked`,(le.find(([e])=>e===t.storage)||[,t.storage])[1]],[`Machines`,t.wholeMachines===!1?`Exact ratios`:`Whole machines`]];return b`<h2>What is different this time?</h2>
    <p>
      Starting from the settings of <b>${r?.name||`this save`}</b>. Tick only what changes; the
      rest is kept as it is.
    </p>
    <div class="guided-known">${i.map(([e,t])=>b`<span><b>${e}</b>${t}</span>`)}</div>
    <div class="guided-topics">
      ${l.map(e=>b`<label class="check-row"
            ><input
              type="checkbox"
              name="topic"
              value="${e.id}"
              ${e.id===`phase`&&y(`checked`)}
            />${e.title}</label
          >`)}
    </div>
    <p class="small muted">
      Progress from ${r?.name||`the other profile`} can be carried over on the Review step,
      including the production lines this plan does not expand.
    </p>`}function eu(e){return e.tutorial===`done`?[...de]:[]}function tu(e){let t=J,r=t.settings,i=new FormData(e);if(e.querySelector?.(`.guided-topics`)){let e=i.getAll(`topic`).map(String);t.guidedAsk=l.filter(t=>e.includes(t.id)).map(e=>e.id)}for(let e of Yl()){if(!e.options)continue;let n=i.get(`guided:`+e.id);if(n===null)continue;let a=e.options.find(e=>e.value===String(n));a&&(e.id===`tutorial`&&(t.tutorial=a.value),Object.assign(r,a.set))}{let t=Vl(e,i);t&&(r.existingSupply=t)}if(i.has(`hours`)&&(r.hours=Number(i.get(`hours`))),e.querySelector?.(`.guided-topup`)){r.storageRate=1,r.buildRate=1;let e=i.getAll(`topup`).map(String).filter(e=>d.includes(e)),t={};for(let r of e)t[r]=n;r.storageOverrides=t}r.goal!==`timed`&&(r.phaseTime=`every`),r.storage===`none`&&(r.storageOverrides={}),t.preview=null}function nu(e,t){return b`<div class="guided-progress" role="list">
    ${e.map((e,n)=>b`<span
          role="listitem"
          class="${n===t?`current`:n<t?`done`:``}"
          ${n===t&&y(`aria-current="step"`)}
          ><i></i>${e.short||e.title.replace(/\?$/,``)}</span
        >`)}
  </div>`}function ru(){let t=J,n=t.settings,r=Yl(),i=t.saveId&&t.guidedAsk===null,a=i?-1:Math.min(t.guidedStep-1,r.length-1),o=i?null:r[a],s;s=i?$l():o?b`<h2>${o.title}</h2>
      <p>${o.lead}</p>
      ${o.kind===`supply`?Bl(n):Zl(o)}
      ${o.id===`goal`&&n.goal===`timed`&&b`<div class="form-grid guided-follow">
        ${Ds(`Hours per phase`,`hours`,n.hours??8,`number`,`min="0.25" max="2000" step="0.25" required`)}
      </div>`}
      ${o.id===`stock`&&Ql(n)}`:b`<h2>Ready to calculate</h2>`;let c=!i&&a>=r.length-1,l=o?.step||1,u=i||t.guidedStep<=1;return String(b`${e&&Kp()}
      ${Gp(`A FEW QUESTIONS`,t.saveId?`Add a profile to `+t.saveName:`Create your factory plan`,`Answer what matters and the planner fills in the rest. Every setting is still there under All settings.`)}
      ${!i&&nu(r,a)}
      <form id="wizard-form" class="panel wizard-panel guided-panel">
        ${!i&&b`<label class="field guided-name"
          >${t.saveId?`Profile name`:`Save name`}<input
            name="${t.saveId?`profileName`:`saveName`}"
            type="text"
            value="${t.saveId?t.name:t.saveName}"
            ${!t.saveId&&y(`required`)}
            maxlength="80"
            placeholder="${t.saveId?`Named after your goal if left blank`:`My Satisfactory save`}"
        /></label>`}
        ${s}
        <div class="wizard-actions">
          <button
            type="button"
            class="btn"
            ${y(u?`data-cancel-wizard`:`data-guided-back`)}
          >
            ${u?`Cancel`:`Back`}
          </button>
          <span class="guided-escape"
            ><button type="button" class="btn quiet" data-guided-advanced="${l}">
              All settings →
            </button>
            <button class="btn primary" type="submit">
              ${c?`Calculate plan`:`Continue →`}
            </button></span
          >
        </div>
        <p id="wizard-error" class="form-error" role="alert"></p>
      </form>`)}async function iu(e){let t=J,n=x(`#wizard-form`);if(Ml||!t||e>t.guidedStep&&n&&!n.reportValidity())return;let r=!!t.saveId&&t.guidedAsk===null;n&&au(n);let i=Yl();if(r&&i.length){t.guidedStep=1,H();return}if(e<1){t.guidedStep=1,H();return}let a=i[Math.min(t.guidedStep-1,i.length-1)],o=a?.options?.find(e=>e.value===Xl(a))?.handoff;if(o&&e>t.guidedStep){ou(o);return}if(e<=i.length){t.guidedStep=e,H();return}await Il(n)}function au(e){let t=J,n=new FormData(e);n.has(`saveName`)&&(t.saveName=String(n.get(`saveName`))),n.has(`profileName`)&&(t.name=String(n.get(`profileName`))),tu(e)}function ou(e){let t=J,n=x(`#wizard-form`);n&&t.mode===`guided`&&au(n),t.mode=`advanced`,t.usedGuided=!0,t.step=Math.min(Math.max(e||1,1),4),H()}function su(){let e=J,t=x(`#wizard-form`);t&&e.mode!==`guided`&&jl(t),e.mode=`guided`;let n=Yl();e.guidedStep>=1||(e.guidedStep=1),e.guidedStep=Math.min(e.guidedStep,Math.max(n.length,1)),H()}var cu=`planner-ada`,lu=0,uu=``,du=vu();function fu(e){lu=e}function pu(e){du=e}var mu=null,hu,gu=0,_u=0;function vu(){try{return localStorage.getItem(cu)===`muted`}catch{return!1}}function yu(){try{localStorage.setItem(cu,du?`muted`:`on`)}catch{}}function bu(){let t=om.id?Rc():[],n=t.find(e=>!$(e.id)),r=q?Rm():null,i=q?r.rows||[]:Y.factories.filter(e=>e.stages[Q()]),a=q?e=>`calc-`+Q()+`-`+e.id:e=>`factory-`+Q()+`-`+e.id,o=Ys().flatMap(e=>e.items).filter(e=>e.name),s=q?Object.entries(r.delivery||{}).map(([e,t])=>({id:Q()+`-`+Ae(e),target:t.target,initial:0})):Y.deliveries.filter(e=>e.phase===Z()),c=e=>X.deliveries[e.id]??(K.id===`original`?e.initial:0),l=q?(q.settings.availablePowerGW||0)*1e3:0,u=q&&r.additionalHeadroomMW||0;return{view:lm,phaseLabel:Fm(Z()),browserMode:e,planEditing:hm,guided:J?.mode===`guided`,guidedStep:J?.guidedStep||0,guidedTotal:J?Yl().length:0,tutorialDone:J?.tutorial===`done`,supplyDeclared:Object.keys(J?.settings?.existingSupply||{}).length,kind:om.id?K?.kind||`original`:`none`,save:om.name||`this save`,profile:K?.name||`Pioneer`,steps:{done:t.filter(e=>$(e.id)).length,total:t.length},next:n?.title||``,retireOpen:t.filter(e=>e.id.startsWith(`retire-`)&&!$(e.id)).length,factories:{done:i.filter(e=>$(a(e))).length,total:i.length},storage:{done:o.filter(e=>$(`slot-`+e.id+`-verified`)).length,total:o.length},deliveries:{open:s.filter(e=>c(e)<e.target).length,total:s.length},hasPhaseNote:!!X.notes[`phase-`+Z()],customTasks:X.customTasks.filter(e=>e.phase===Z()).length,removedSteps:Fc().removed.length,groups:ac().groups.length,feasible:!q||r.feasible!==!1,reason:q&&r.reason||``,short:q?(G.catalog?.raw||[]).filter(e=>(r.raw?.[e]||0)>(q.settings.limits?.[e]??1/0)):[],power:u>.01?{required:V(r.requiredMW||0),spare:V(l),headroom:V(u),tight:!0}:null,hours:q&&r.hours?S(r.hours)+` h`:``,profiles:G.saves.find(e=>e.id===om.id)?.profiles.length||0,backupDays:G.lastBackup?Math.max(0,Math.floor((Date.now()-new Date(G.lastBackup).getTime())/864e5)):null,post:Z()===`post`,startPhase:jm(),assumptions:q?(q.warnings||[]).length:0}}function xu(){if(mu)return mu;let e=bu(),t=ge(e);if(!t.length)return null;let n=t.map(e=>e.id).join(`|`);n!==uu&&(uu=n,lu=0);let r=Math.floor(lu/t.length),i=lu%t.length;return r>0&&!i?me(r,e):t[i]}function Su(){clearTimeout(hu),mu=null,gu=0}function Cu(){clearTimeout(hu),gu=Date.now()-_u>2500?1:gu+1,_u=Date.now(),!(gu<5)&&(mu=he(gu-4),hu=setTimeout(()=>{Su(),H()},12e3),H())}function wu(){try{if(du)return{muted:!0};let e=xu();return e?{tone:e.tone,name:e.name||``,text:e.text}:null}catch{return null}}var Tu={key:0,class:`ada is-muted`},Eu=[`data-tone`],Du={class:`ada-head`},Ou={class:`eyebrow`},ku={class:`ada-line`,id:`ada-line`,role:`status`,"aria-live":`polite`},Au={class:`ada-tools`},ju={__name:`AdaPanel`,setup(e){let t=Eo(()=>ws(wu));function n(){mu?Su():fu(lu+1),Cs()}function r(e){pu(e),yu(),Su(),Cs()}function i(){du||Cu()}return(e,a)=>t.value?.muted?(F(),I(`div`,Tu,[a[2]||=L(`span`,{class:`ada-mark`,"aria-hidden":`true`},`◈`,-1),a[3]||=L(`span`,null,`ADA muted`,-1),L(`button`,{class:`btn quiet`,type:`button`,"data-ada-mute":`off`,onClick:a[0]||=e=>r(!1)},`
      Unmute
    `)])):t.value?(F(),I(`section`,{key:1,class:`ada`,"data-tone":t.value.tone,"aria-label":`ADA`},[L(`div`,Du,[L(`span`,{class:`ada-mark`,"aria-hidden":`true`,onClick:i},`◈`),a[5]||=z(),L(`div`,null,[L(`b`,null,A(t.value.name||`ADA`),1),a[4]||=z(),L(`div`,Ou,A(t.value.name?`Transmission fault`:`Artificial Directory and Assistant`),1)])]),a[6]||=z(),L(`p`,ku,A(t.value.text),1),a[7]||=z(),L(`div`,Au,[L(`button`,{class:`btn quiet`,type:`button`,id:`ada-next`,"data-ada-next":``,onClick:n},`
        Another remark`),L(`button`,{class:`btn quiet`,type:`button`,"data-ada-mute":`on`,onClick:a[1]||=e=>r(!0)},`Mute`)])],8,Eu)):B(``,!0)}},Mu={class:`layout`},Nu={class:`sidebar`},Pu={class:`nav`,"aria-label":`Main navigation`},Fu=[`href`,`aria-current`],Iu={class:`navicon`,"aria-hidden":`true`},Lu={class:`save-status`},Ru={id:`saved`},zu={class:`sidebar-foot`},Bu={key:0},Vu={class:`topbar`},Hu={class:`breadcrumbs`},Uu={href:`#profiles`},Wu={class:`small`},Gu=[`disabled`,`value`],Ku=[`value`],qu={__name:`Shell`,setup(t){let n=[[`plan`,`◫`,`Build plan`],[`factories`,`▥`,`Factories`],[`storage`,`▦`,`Storage room`],[`resources`,`↗`,`Power & resources`],[`backup`,`⇅`,`Backup & notes`]],r=Eo(()=>ws(()=>({view:lm,saveName:om.name,canPickPhase:!!om.id,phase:Z(),phases:Mm().map(e=>[e,Fm(e)]),saved:Jp?`Saving…`:e?`Saved in this browser`:`Saved on server`,footer:i()})));function i(){if(q){let e=q.settings,t=new Date(q.createdAt),n=re.find(([t])=>t===e.purity)?.[1]||e.purity;return[K.name,`${n} purity · ${S(e.multiplier)}× elevator parts`,`${S(e.powerFactor)}× power consumption`,...Number.isNaN(t.getTime())?[]:[`Plan created `+t.toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})]]}return K?.kind===`original`?[K.name,`Pure nodes · 50× elevator parts`,`Half power consumption`,`Plan revised 13 September 2026`]:[`Create or select a profile`]}async function a(e){let t=e.target;t.disabled=!0;try{await W({type:`phase`,value:t.value}),Cm(``),H()}catch{t.value=Z()}finally{t.disabled=!1}}return(e,t)=>(F(),I(`div`,Mu,[L(`aside`,Nu,[t[1]||=L(`div`,{class:`brand`},[L(`img`,{src:`./favicon.svg`,alt:``}),z(),L(`div`,null,[z(`
          Project Assembly
          `),L(`div`,{class:`eyebrow`},`FICSIT compliance terminal`)])],-1),t[2]||=z(),L(`nav`,Pu,[(F(),I(P,null,xi(n,([e,t,n])=>L(`a`,{key:e,href:`#`+e,class:_t(r.value.view===e?`active`:``),"aria-current":r.value.view===e?`page`:null},[L(`span`,Iu,A(t),1),z(A(n),1)],10,Fu)),64))]),t[3]||=z(),R(ju),t[4]||=z(),L(`div`,Lu,[t[0]||=L(`span`,{class:`dot`},null,-1),L(`span`,Ru,A(r.value.saved),1)]),t[5]||=z(),L(`div`,zu,[(F(!0),I(P,null,xi(r.value.footer,(e,t)=>(F(),I(P,{key:t},[t?(F(),I(`br`,Bu)):B(``,!0),z(A(e),1)],64))),128))])]),t[12]||=z(),L(`div`,null,[L(`header`,Vu,[L(`div`,Hu,[L(`a`,Uu,A(r.value.saveName),1),t[6]||=z(),t[7]||=L(`span`,{"aria-hidden":`true`},` / `,-1),z(` `+A(tr(Fm)(r.value.phase)),1)]),t[9]||=z(),L(`label`,Wu,[t[8]||=z(`Working on
          `,-1),L(`select`,{id:`phase-picker`,"aria-label":`Working phase`,disabled:!r.value.canPickPhase,value:r.value.phase,onChange:a},[(F(!0),I(P,null,xi(r.value.phases,([e,t])=>(F(),I(`option`,{key:e,value:e},A(t),9,Ku))),128))],40,Gu)])]),t[10]||=z(),t[11]||=L(`main`,{id:`main`,class:`workspace`,tabindex:`-1`},null,-1)])]))}},Ju={class:`field`},Yu=[`autocomplete`],Xu={key:1,class:`check-row`},Zu=[`disabled`],Qu={id:`auth-error`,class:`form-error`,role:`alert`},$u={__name:`AuthForm`,props:{mode:{type:String,required:!0}},setup(e){let t=e,n=Qn(!1),r=Qn(``);async function i(e){let t=Object.fromEntries(new FormData(e.target));t.registration=new FormData(e.target).has(`registration`),n.value=!0,r.value=``;try{await em(`/api/`+(G.accountsEnabled?sm:`setup`),t,!1),await zm()}catch(e){r.value=e.message,n.value=!1}}return(e,a)=>(F(),I(`form`,{id:`auth-form`,class:`panel auth-panel`,onSubmit:hs(i,[`prevent`])},[L(`h2`,null,A(t.mode===`setup`?`Secure your existing save`:t.mode===`register`?`Create your account`:`Sign in`),1),a[7]||=z(),t.mode===`setup`?(F(),I(P,{key:0},[a[0]||=L(`p`,null,`
        Your existing save and progress will belong to this account. Once enabled, visitors must
        sign in.
      `,-1),a[1]||=z(),a[2]||=L(`label`,{class:`field`},[z(`Server setup token`),L(`input`,{name:`setupToken`,required:``,autocomplete:`off`})],-1),a[3]||=z(),a[4]||=L(`p`,{class:`small muted`},`
        Read account-setup-token.txt in the server data folder. With Docker: docker compose exec
        planner cat /data/account-setup-token.txt
      `,-1)],64)):B(``,!0),a[8]||=z(),a[9]||=L(`label`,{class:`field`},[z(`Username
      `),L(`input`,{name:`username`,type:`text`,value:``,required:``,minlength:`3`,maxlength:`32`,pattern:`[a-zA-Z0-9_-]+`,autocomplete:`username`})],-1),a[10]||=z(),L(`label`,Ju,[a[5]||=z(`Password (12–128 characters)
      `,-1),L(`input`,{name:`password`,type:`password`,value:``,required:``,minlength:`12`,maxlength:`128`,autocomplete:t.mode===`login`?`current-password`:`new-password`},null,8,Yu)]),a[11]||=z(),t.mode===`setup`?(F(),I(`label`,Xu,[...a[6]||=[L(`input`,{type:`checkbox`,name:`registration`},null,-1),z(`Allow other people to register their own
      accounts`,-1)]])):B(``,!0),a[12]||=z(),L(`button`,{class:`btn primary`,disabled:n.value},A(t.mode===`setup`?`Enable accounts`:t.mode===`register`?`Create account`:`Sign in`),9,Zu),a[13]||=z(),L(`p`,Qu,A(r.value),1)],32))}},ed={class:`signin`},td=[`data-auth-mode`],nd={__name:`SignedOut`,setup(e){let t=Qn(sm);function n(){t.value=t.value===`login`?`register`:`login`,bm(t.value)}return(e,r)=>(F(),I(`main`,ed,[r[0]||=L(`div`,{class:`brand`},[L(`img`,{src:`./favicon.svg`,alt:``}),z(`Project Assembly`)],-1),r[1]||=z(),r[2]||=L(`h1`,null,`Your factory notebook`,-1),r[3]||=z(),(F(),Ka($u,{key:t.value,mode:t.value},null,8,[`mode`])),r[4]||=z(),tr(G).registration?(F(),I(`button`,{key:0,class:`btn quiet`,"data-auth-mode":t.value===`login`?`register`:`login`,onClick:n},A(t.value===`login`?`Create an account`:`Back to sign in`),9,td)):B(``,!0)]))}},rd=null,id=null,ad=null;function od(e){if(rd?.el.isConnected)return;sd(),e.textContent=``;let t=ys(qu);t.mount(e),rd={app:t,el:e.firstElementChild}}function sd(){ld(),ad?.unmount(),ad=null,rd?.app.unmount(),rd=null}function cd(e,t){if(id?.component===t&&id.host===e&&e.isConnected)return;ld();let n=ys(t);n.mount(e),id={app:n,component:t,host:e}}function ld(){id?.app.unmount(),id=null}function ud(e){sd(),e.textContent=``,ad=ys(nd),ad.mount(e)}var dd={class:`heading-row`},fd={class:`eyebrow`},pd={key:0,class:`subtitle`},md={key:0,class:`badge orange`},hd={__name:`PageHeader`,props:{eyebrow:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,default:``},badge:{type:String,default:``}},setup(e){return(t,n)=>(F(),I(`div`,dd,[L(`div`,null,[L(`div`,fd,A(e.eyebrow),1),n[0]||=z(),L(`h1`,null,A(e.title),1),n[1]||=z(),e.subtitle?(F(),I(`div`,pd,A(e.subtitle),1)):B(``,!0)]),n[2]||=z(),e.badge?(F(),I(`span`,md,A(e.badge),1)):B(``,!0)]))}},gd=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},_d={},vd={class:`notice blue`};function yd(e,t){return F(),I(`div`,vd,[...t[0]||=[z(`
    Your saves stay in this browser on this device. Clearing site data or using private browsing can
    remove them. Export a full backup before switching devices or website addresses.
    `,-1),L(`a`,{href:`#backup`},`Backups & transfer`,-1)]])}var bd=gd(_d,[[`render`,yd]]),xd={class:`panel`},Sd=[`disabled`],Cd={class:`btn`},wd={key:1,class:`panel`},Td={class:`backup-grid`},Ed={class:`panel`},Dd=[`href`],Od={class:`panel`},kd={class:`btn`},Ad={class:`panel`},jd=[`value`],Md={class:`panel`},Nd={class:`backup-grid`},Pd={class:`panel`},Fd=[`href`],Id={class:`panel`},Ld={class:`btn`},Rd={class:`panel`,style:{"margin-top":`24px`}},zd=[`value`],Bd={class:`panel`},Vd={class:`list-links`},Hd=[`href`],Ud={__name:`BackupPage`,setup(t){let n=Eo(()=>ws(()=>({kind:e?`browser`:q?`calculated`:`handbook`,saveName:om.name,profileName:K.name,exportUrl:`/api/export?save=${om.id}&profile=${K.id}`,note:X.notes.global||``,warnings:q?.warnings||[],sources:Y?.sources||[],lastBackup:G.lastBackup?`Last export: `+new Date(G.lastBackup).toLocaleString():`No full backup has been exported from this browser yet.`}))),r=Qn(!1);async function i(){r.value=!0;try{await Zp,im(await Xp(`/api/export-saves`),`satisfactory-full-saves.json`),vm(await Xp(`/api/workspace`)),Cs(),U(`Full save backup downloaded.`)}catch(e){U(e.message,!0)}finally{r.value=!1}}async function a(e){let t=e.target.files[0];if(t)try{if(t.size>52428800)throw Error(`Choose a save export smaller than 50 MB.`);let e=JSON.parse(await t.text());if(!confirm(`Import these saves as new copies? Existing saves will be kept.`))return;await Zp,await em(`/api/import-saves`,e,!1),await zm(),tm(`profiles`),U(`Imported saves. Existing progress was kept.`)}catch(e){U(e.message,!0)}finally{e.target.value=``}}async function o(e){let t=e.target,n=t.files[0];if(n)try{if(n.size>2097152)throw Error(`Choose a backup smaller than 2 MB.`);let e=JSON.parse(await n.text());if(!confirm(`Replace current progress with this backup?`)){t.value=``;return}await Zp,xm(await Xp(`/api/import`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Planner-Request":`1`,...$p()},body:JSON.stringify(e)})),H(),U(`Backup restored.`)}catch(e){U(e.message||`Could not restore backup.`,!0),t.value=``}}async function s(){try{U(await navigator.storage?.persist?.()?`Persistent browser storage enabled.`:`Browser did not grant persistence. Keep downloaded backups.`)}catch(e){U(e.message,!0)}}return(e,t)=>(F(),I(P,null,[n.value.kind===`browser`?(F(),I(P,{key:0},[R(hd,{eyebrow:`SAVED ON THIS DEVICE`,title:`Backups & transfer`,subtitle:`No account or server is needed. Saves do not sync automatically between browsers.`}),t[0]||=z(),R(bd)],64)):B(``,!0),t[66]||=z(),L(`section`,xd,[t[2]||=L(`h2`,null,`Full saves & transfer`,-1),t[3]||=z(),t[4]||=L(`p`,null,`
      Export all your saves, profile calculations, checkmarks and notes. Account passwords and
      sessions are excluded. Import adds copies without replacing existing saves.
    `,-1),t[5]||=z(),L(`button`,{class:`btn primary`,"data-export-saves":``,disabled:r.value,onClick:i},`
      Export all saves
    `,8,Sd),t[6]||=z(),L(`label`,Cd,[t[1]||=z(`Import saves`,-1),L(`input`,{id:`import-saves`,type:`file`,accept:`application/json,.json`,hidden:``,onChange:a},null,32)])]),t[67]||=z(),n.value.kind===`browser`?(F(),I(`section`,wd,[t[7]||=L(`h2`,null,`Keep a backup`,-1),t[8]||=z(),L(`p`,null,A(n.value.lastBackup)+`
      Export after major changes and before clearing browser data.
    `,1),t[9]||=z(),L(`button`,{class:`btn`,"data-persist-storage":``,onClick:s},`
      Request persistent browser storage
    `),t[10]||=z(),t[11]||=L(`p`,{class:`small`},`
      This reduces automatic eviction when supported. It cannot protect against manually clearing
      site data.
    `,-1),t[12]||=z(),t[13]||=L(`p`,null,`
      To move from Docker, update the Docker app and use Backup & notes → Export all saves, then
      import that file here. A legacy progress-only export is not a full save.
    `,-1),t[14]||=z(),t[15]||=L(`h2`,null,`Self-hosted edition`,-1),t[16]||=z(),t[17]||=L(`p`,null,`
      The Docker edition keeps server storage and user accounts for access across devices. Browser
      storage remains local to each visitor.
    `,-1)])):n.value.kind===`calculated`?(F(),I(P,{key:2},[R(hd,{eyebrow:`THIS PROFILE`,title:`Backup & notes`,subtitle:`Checkmarks, deliveries and notes belong to `+n.value.saveName+` / `+n.value.profileName},null,8,[`subtitle`]),t[36]||=z(),L(`div`,Td,[L(`section`,Ed,[t[18]||=L(`h2`,null,`Download progress`,-1),t[19]||=z(),L(`a`,{class:`btn primary`,href:n.value.exportUrl,download:``},`Download progress JSON`,8,Dd),t[20]||=z(),t[21]||=L(`p`,{class:`small muted`},`
          For all accounts, profiles and calculation snapshots, back up the Docker data volume. This
          download contains only this profile’s progress.
        `,-1)]),t[27]||=z(),L(`section`,Od,[t[23]||=L(`h2`,null,`Restore this profile`,-1),t[24]||=z(),t[25]||=L(`p`,null,`Restore replaces only this profile’s progress, after confirmation.`,-1),t[26]||=z(),L(`label`,kd,[t[22]||=z(`Choose backup`,-1),L(`input`,{id:`import-file`,type:`file`,accept:`application/json,.json`,hidden:``,onChange:o},null,32)])])]),t[37]||=z(),L(`section`,Ad,[t[28]||=L(`h2`,null,`Save-wide notes for this profile`,-1),t[29]||=z(),L(`textarea`,{id:`global-note`,class:`notes`,maxlength:`6000`,value:n.value.note},null,8,jd),t[30]||=z(),t[31]||=L(`button`,{class:`btn`,"data-save-note":`global`,"data-input":`global-note`},`Save notes`,-1)]),t[38]||=z(),L(`section`,Md,[t[32]||=L(`h2`,null,`Calculation assumptions`,-1),t[33]||=z(),(F(!0),I(P,null,xi(n.value.warnings,(e,t)=>(F(),I(`p`,{key:t},A(e),1))),128)),t[34]||=z(),t[35]||=L(`a`,{href:`https://github.com/greeny/SatisfactoryTools`,target:`_blank`,rel:`noreferrer`},`Recipe data source`,-1)])],64)):(F(),I(P,{key:3},[R(hd,{eyebrow:`YOUR PROGRESS`,title:`Backup & notes`,subtitle:`Progress is stored on the server, so the same Docker instance works across your devices.`}),t[63]||=z(),L(`div`,Nd,[L(`section`,Pd,[t[39]||=L(`h2`,null,`Download a backup`,-1),t[40]||=z(),t[41]||=L(`p`,null,`Save a copy of your checkmarks, delivery counts, personal tasks and notes.`,-1),t[42]||=z(),L(`a`,{class:`btn primary`,href:n.value.exportUrl,download:``},`Download progress JSON ↓`,8,Fd),t[43]||=z(),t[44]||=L(`p`,{class:`small muted`},`
          The Docker volume keeps progress through container updates. This download gives you a
          separate copy.
        `,-1)]),t[52]||=z(),L(`section`,Id,[t[46]||=L(`h2`,null,`Restore a backup`,-1),t[47]||=z(),t[48]||=L(`p`,null,`
          Import a backup from this planner. It replaces current progress after confirmation;
          factory-plan data stays unchanged.
        `,-1),t[49]||=z(),L(`label`,Ld,[t[45]||=z(`Choose backup file`,-1),L(`input`,{id:`import-file`,type:`file`,accept:`application/json,.json`,hidden:``,onChange:o},null,32)]),t[50]||=z(),t[51]||=L(`p`,{class:`small muted`},`
          Up to 2 MB. The previous state is also retained as workspace.json.bak on the server. The
          original progress file is kept during migration.
        `,-1)])]),t[64]||=z(),L(`section`,Rd,[t[53]||=L(`h2`,null,`Save-wide notes`,-1),t[54]||=z(),L(`textarea`,{id:`global-note`,class:`notes`,maxlength:`6000`,"aria-label":`Save-wide notes`,value:n.value.note},null,8,zd),t[55]||=z(),t[56]||=L(`div`,{class:`note-save`},[L(`span`,{class:`small muted`},`Seed, locations, routes and decisions.`),L(`button`,{class:`btn`,"data-save-note":`global`,"data-input":`global-note`},`Save notes`)],-1)]),t[65]||=z(),L(`section`,Bd,[t[57]||=L(`h2`,null,`Plan assumptions`,-1),t[58]||=z(),t[59]||=L(`p`,{class:`small`},`
        All tiers through 6 unlocked. Phase 3 Versatile Frameworks delivered. Pure nodes, 50×
        elevator costs, half consumption. Retire coal and temporary fuel; retain turbofuel. Phase 5
        resource conversion and extra Reanimated SAM are included. Ground-floor storage shell is
        already built; individual containers are not assumed connected.
      `,-1),t[60]||=z(),t[61]||=L(`p`,{class:`small`},`
        The final extra storage modules need additional input allocations. After Phase 5, storage
        takes priority over maintaining full elevator-export rates for sinking. Gathered items
        require collection; equipment and inhalers are manually crafted.
      `,-1),t[62]||=z(),L(`div`,Vd,[(F(!0),I(P,null,xi(n.value.sources,e=>(F(),I(`a`,{key:e.url,href:e.url,target:`_blank`,rel:`noreferrer`},A(e.title)+` ↗`,9,Hd))),128))])])],64))],64))}},Wd={key:0,class:`panel`},Gd={__name:`AccountPage`,setup(t){let n=Eo(()=>ws(()=>({enabled:G.accountsEnabled,username:G.user?.username})));async function r(){rm()&&(await Zp,await em(`/api/logout`,{}),bm(`login`),await zm())}return(t,i)=>tr(e)?(F(),Ka(Ud,{key:0})):(F(),I(P,{key:1},[R(hd,{eyebrow:`YOUR ACCOUNT`,title:n.value.enabled?n.value.username:`User accounts`,subtitle:n.value.enabled?`Your saves are visible only to your account.`:`Local mode currently shares one workspace. Enable accounts before sharing this server.`},null,8,[`title`,`subtitle`]),i[4]||=z(),n.value.enabled?(F(),I(`section`,Wd,[i[0]||=L(`p`,null,`Each account has its own named saves, profiles and progress.`,-1),i[1]||=z(),L(`button`,{class:`btn`,"data-logout":``,onClick:r},`Sign out`),i[2]||=z(),i[3]||=L(`p`,{class:`small muted`},`
        Use HTTPS when serving this app beyond localhost. Your host manages account access and
        backups.
      `,-1)])):(F(),Ka($u,{key:1,mode:`setup`}))],64))}},Kd={class:`stat`},qd={class:`eyebrow`},Jd={__name:`StatTile`,props:{label:{type:String,required:!0},value:{type:[String,Number],default:``},caption:{type:String,default:``}},setup(e){return(t,n)=>(F(),I(`div`,Kd,[L(`span`,qd,A(e.label),1),L(`strong`,null,[Si(t.$slots,`default`,{},()=>[z(A(e.value),1)])]),L(`small`,null,A(e.caption),1)]))}},Yd=[`placeholder`],Xd=[`disabled`],Zd={__name:`AddTaskForm`,props:{placeholder:{type:String,required:!0}},setup(e){let t=Qn(!1);async function n(e){let n=e.target,r=String(new FormData(n).get(`title`)||``).trim();if(r){t.value=!0;try{await W({type:`addTask`,id:`custom-`+Array.from(crypto.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,`0`)).join(``),phase:Z(),title:r}),n.reset(),H()}catch{}finally{t.value=!1}}}return(r,i)=>(F(),I(`form`,{id:`add-task`,class:`inline-form`,onSubmit:hs(n,[`prevent`])},[L(`input`,{name:`title`,maxlength:`240`,required:``,placeholder:e.placeholder,"aria-label":`Personal task`},null,8,Yd),L(`button`,{class:`btn`,type:`submit`,disabled:t.value},`Add task`,8,Xd)],32))}},Qd={key:0,class:`notice`},$d={key:1,class:`notice`},ef={__name:`CalcWarnings`,setup(e){let t=Eo(()=>ws(()=>{let e=Rm();return{draft:!e.feasible&&{reason:e.reason,fixes:Tc(e,q?.settings)},headroom:e.additionalHeadroomMW>.01?V(e.additionalHeadroomMW):``}}));return(e,n)=>(F(),I(P,null,[t.value.draft?(F(),I(`div`,Qd,[n[4]||=L(`b`,null,`Planning draft — resource budget exceeded or recipe combination unavailable.`,-1),z(` `+A(t.value.draft.reason),1),t.value.draft.fixes.length?(F(),I(P,{key:0},[n[0]||=L(`p`,null,[L(`b`,null,`Options`)],-1),n[1]||=z(),L(`ul`,null,[(F(!0),I(P,null,xi(t.value.draft.fixes,e=>(F(),I(`li`,{key:e},A(e),1))),128))]),n[2]||=z(),n[3]||=L(`p`,{class:`small`},`
        Profiles are calculated snapshots: create a new profile with adjusted settings to apply an
        option.
      `,-1)],64)):B(``,!0)])):B(``,!0),n[5]||=z(),t.value.headroom?(F(),I(`div`,$d,`
    Allow another `+A(t.value.headroom)+` for whole-building power headroom. Phase 1 needs biomass or
    existing generation.
  `,1)):B(``,!0)],64))}},tf=[`src`],nf={__name:`ItemIcon`,props:{name:{type:String,required:!0}},setup(e){let t=e,n=Eo(()=>`./icons/${Ae(String(t.name).replace(/\s*\([^)]*\)\s*$/,``))}.png`);return(e,t)=>(F(),I(`img`,{class:`item-icon`,src:n.value,width:`42`,height:`42`,loading:`lazy`,alt:``},null,8,tf))}},rf={key:0,class:`task-icon`,"data-kind":`item`,"aria-hidden":`true`},af=[`data-kind`],of=[`innerHTML`],sf={__name:`StepIcon`,props:{icon:{type:Object,required:!0}},setup(e){return(t,n)=>e.icon.item?(F(),I(`span`,rf,[R(nf,{name:e.icon.item},null,8,[`name`])])):(F(),I(`span`,{key:1,class:`task-icon`,"data-kind":e.icon.kind,"aria-hidden":`true`},[(F(),I(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.7`,"stroke-linecap":`round`,"stroke-linejoin":`round`,innerHTML:tr(Hc)[e.icon.kind]},null,8,of))],8,af))}},cf=[`data-check`,`aria-label`,`checked`],lf=[`data-task`],uf=[`data-factory`,`data-calc-factory`],df=[`data-remove`],ff={key:0,class:`task-tools`},pf=[`data-move-task`,`aria-label`],mf=[`data-move-task`,`aria-label`],hf=[`data-edit-task`],gf=[`data-remove-step`],_f={__name:`PlanStep`,props:{step:{type:Object,required:!0},editing:{type:Boolean,default:!1}},setup(e){let t=e;async function n(e){let n=Rc().map(e=>e.id),r=n.indexOf(t.step.id),i=r+e;if(!(r<0||i<0||i>=n.length)){[n[r],n[i]]=[n[i],n[r]];try{await W({type:`taskOrder`,phase:Z(),ids:n}),H()}catch{}}}function r(){km(t.step.id),H()}async function i(){let e=t.step.id;if(e.startsWith(`custom-`))return a();if(confirm(`Remove this step from your build plan? Its checkmark is kept and you can restore the step while editing.`))try{await W({type:`taskRemove`,id:e}),H()}catch{}}async function a(){if(confirm(`Delete this personal task?`))try{await W({type:`removeTask`,id:t.step.id}),H()}catch{}}return(t,o)=>(F(),I(`article`,{class:_t([`task`,e.editing?`is-editing`:``])},[L(`input`,{type:`checkbox`,"data-check":e.step.id,"aria-label":`Complete: `+e.step.title,checked:e.step.done},null,8,cf),R(sf,{icon:e.step.icon},null,8,[`icon`]),o[4]||=z(),L(`details`,{"data-task":e.step.id},[L(`summary`,null,A(e.step.title),1),o[2]||=z(),L(`p`,null,A(e.step.body||`Your own task for this phase.`),1),o[3]||=z(),e.step.link?(F(),I(`button`,{key:0,class:`btn quiet task-link`,"data-factory":e.step.link.calc?null:e.step.link.id,"data-calc-factory":e.step.link.calc?e.step.link.id:null},`
        Open factory: `+A(e.step.link.name)+` ↗`,9,uf)):B(``,!0),e.step.custom&&!e.editing?(F(),I(`button`,{key:1,class:`delete-task`,"data-remove":e.step.id,onClick:a},`
        Delete personal task
      `,8,df)):B(``,!0)],8,lf),o[5]||=z(),e.editing?(F(),I(`span`,ff,[L(`button`,{class:`btn quiet`,"data-move-task":e.step.id,"data-dir":`-1`,"aria-label":`Move up: `+e.step.title,onClick:o[0]||=e=>n(-1)},`
        ↑`,8,pf),L(`button`,{class:`btn quiet`,"data-move-task":e.step.id,"data-dir":`1`,"aria-label":`Move down: `+e.step.title,onClick:o[1]||=e=>n(1)},`
        ↓`,8,mf),L(`button`,{class:`btn quiet`,"data-edit-task":e.step.id,onClick:r},`Edit`,8,hf),L(`button`,{class:`btn quiet danger`,"data-remove-step":e.step.id,onClick:i},`
        Remove
      `,8,gf)])):B(``,!0)],2))}},vf={class:`panel removed-steps`},yf=[`data-restore-task`,`onClick`],bf={__name:`RemovedSteps`,props:{steps:{type:Array,required:!0}},setup(e){async function t(e){try{await W({type:`taskRestore`,id:e}),H()}catch{}}return(n,r)=>(F(),I(`details`,vf,[L(`summary`,null,`Removed steps in this phase (`+A(e.steps.length)+`)`,1),r[0]||=z(),(F(!0),I(P,null,xi(e.steps,e=>(F(),I(`div`,{key:e.id,class:`removed-step`},[L(`span`,null,[R(sf,{icon:e.icon},null,8,[`icon`]),z(A(e.title),1)]),L(`button`,{class:`btn quiet`,"data-restore-task":e.id,onClick:n=>t(e.id)},`Restore`,8,yf)]))),128))]))}},xf=[`data-task-edit`],Sf={class:`field`},Cf=[`value`],wf={class:`field`},Tf=[`value`],Ef={class:`field`},Df={name:`link`},Of=[`value`,`selected`],kf={__name:`StepEditForm`,props:{step:{type:Object,required:!0},options:{type:Array,required:!0},current:{type:String,default:``}},setup(e){let t=e;async function n(e){let n=t.step.id,r=new FormData(e.target),i=Lc().find(e=>e.id===n),a=String(r.get(`title`)||``).trim(),o=String(r.get(`body`)||``).trim(),s=String(r.get(`link`)||``);if(a)try{await W({type:`taskEdit`,id:n,title:i&&a===i.title?``:a,body:i&&o===String(i.body||``).trim()?``:o,link:s===zc(n)?``:s}),km(null),H()}catch{}}function r(){km(null),H()}return(t,i)=>(F(),I(`form`,{class:`task task-edit`,"data-task-edit":e.step.id,onSubmit:hs(n,[`prevent`])},[L(`label`,Sf,[i[0]||=z(`Step title`,-1),L(`input`,{name:`title`,maxlength:`240`,required:``,value:e.step.title},null,8,Cf)]),i[7]||=z(),L(`label`,wf,[i[1]||=z(`Details`,-1),L(`textarea`,{name:`body`,class:`notes`,maxlength:`6000`,value:e.step.body||``},null,8,Tf)]),i[8]||=z(),L(`label`,Ef,[i[4]||=z(`Linked factory`,-1),L(`select`,Df,[i[2]||=L(`option`,{value:``},`No linked factory`,-1),i[3]||=z(),(F(!0),I(P,null,xi(e.options,([t,n])=>(F(),I(`option`,{key:t,value:t,selected:t===e.current},A(n),9,Of))),128))])]),i[9]||=z(),L(`div`,{class:`task-edit-actions`},[i[5]||=L(`button`,{class:`btn primary`,type:`submit`},`Save step`,-1),i[6]||=z(),L(`button`,{class:`btn`,type:`button`,"data-cancel-task-edit":``,onClick:r},`Cancel`)]),i[10]||=z(),i[11]||=L(`p`,{class:`small muted`},`
      Restore the original text by clearing a field. The step keeps its checkmark either way.
    `,-1)],40,xf))}},Af={key:0,class:`checklist-tools`},jf=[`value`],Mf={class:`check-row small`},Nf=[`checked`],Pf={class:`small muted`},Ff={class:`checklist`},If={key:1,class:`empty-state`},Lf={__name:`Checklist`,setup(e){let t=Eo(()=>ws(()=>{let e=Rc(),t=Xc(e),n=new Set(Fc().removed);return{total:e.length,query:um,hideDone:pm,editing:hm,count:t.length===e.length?``:t.length+` of `+e.length+` steps`,empty:e.length?um.trim()?`No steps match this search.`:`Every step of this phase is completed. Untick “Hide completed” to review them.`:`Every step of this phase is removed. Use Removed steps below to restore them.`,steps:t.map(e=>({id:e.id,title:e.title,body:e.body,done:$(e.id),icon:qc(e),link:Bc(e),custom:e.id.startsWith(`custom-`),form:hm&&gm===e.id?Vc(e):null})),removed:hm?Lc().filter(e=>n.has(e.id)).map(e=>({id:e.id,title:e.title,icon:qc(e)})):[]}}));function n(e){Cm(e.target.value),H()}function r(e){Em(e.target.checked),H()}return(e,i)=>(F(),I(P,null,[t.value.total>0?(F(),I(`div`,Af,[L(`input`,{id:`plan-search`,class:`search`,placeholder:`Find a step…`,"aria-label":`Find a step`,value:t.value.query,onInput:n},null,40,jf),L(`label`,Mf,[L(`input`,{type:`checkbox`,id:`hide-done`,checked:t.value.hideDone,onChange:r},null,40,Nf),i[0]||=z(`Hide completed`,-1)]),L(`span`,Pf,A(t.value.count),1)])):B(``,!0),i[1]||=z(),L(`div`,Ff,[t.value.steps.length?(F(!0),I(P,{key:0},xi(t.value.steps,e=>(F(),I(P,{key:e.id},[e.form?(F(),Ka(kf,{key:0,step:e,options:e.form.options,current:e.form.current},null,8,[`step`,`options`,`current`])):(F(),Ka(_f,{key:1,step:e,editing:t.value.editing},null,8,[`step`,`editing`]))],64))),128)):(F(),I(`div`,If,A(t.value.empty),1))]),i[2]||=z(),t.value.removed.length?(F(),Ka(bf,{key:1,steps:t.value.removed},null,8,[`steps`])):B(``,!0)],64))}},Rf={class:`delivery`},zf=[`for`],Bf=[`id`,`data-delivery`,`max`,`value`],Vf={class:`progress-track`},Hf={class:`small muted`},Uf={__name:`DeliveryCounter`,props:{delivery:{type:Object,required:!0}},setup(e){let t=e,n=()=>X.deliveries[t.delivery.id]??(K.id===`original`?t.delivery.initial:0),r=Eo(()=>ws(()=>{let e=t.delivery,r=n();return{value:r,width:Math.min(100,r/e.target*100),remaining:e.rate?`${S(e.rate)}/min net · ${S(Math.max(0,e.target-r)/e.rate)} minutes remaining`:`Phase 3 delivery already complete`}}));async function i(e){let r=e.target,i=t.delivery,a=Number(r.value);if(!Number.isInteger(a)||a<0||a>i.target){U(`Enter a whole number between 0 and `+S(i.target)+`.`,!0),r.value=n();return}try{await W({type:`delivery`,key:i.id,value:a}),H()}catch{r.value=n()}}return(t,n)=>(F(),I(`div`,Rf,[L(`label`,{for:`delivery-`+e.delivery.id},A(e.delivery.name),9,zf),n[0]||=z(),L(`div`,null,[L(`input`,{id:`delivery-`+e.delivery.id,"data-delivery":e.delivery.id,type:`number`,min:`0`,max:e.delivery.target,step:`1`,value:r.value.value,onChange:i},null,40,Bf),L(`small`,null,`/ `+A(tr(S)(e.delivery.target)),1)]),n[1]||=z(),L(`div`,Vf,[L(`span`,{style:ft({width:r.value.width+`%`})},null,4)]),n[2]||=z(),L(`span`,Hf,A(r.value.remaining),1)]))}},Wf={__name:`EditStepsToggle`,setup(e){let t=Eo(()=>ws(()=>hm));function n(){Om(!hm),km(null),H()}return(e,r)=>(F(),I(`button`,{class:_t([`btn`,t.value?`primary`:``]),"data-toggle-plan-edit":``,onClick:n},A(t.value?`Done editing`:`Edit steps`),3))}},Gf={class:`stats`},Kf={key:0,class:`notice blue`},qf={class:`split`},Jf={class:`section-head`},Yf=[`value`],Xf=[`data-save-note`],Zf={class:`panel`},Qf={class:`panel`},$f={__name:`CalculatedPlanPage`,setup(e){let t=Eo(()=>ws(()=>{let e=Rm(),t=Rc();return{phase:Z(),title:Fm(Z()),profileName:K.name,post:Z()===`post`,progress:t.filter(e=>$(e.id)).length+`/`+t.length,hours:S(e.hours)+` h`,buildings:S(e.rows?.reduce((e,t)=>e+t.machines,0)),power:V(e.generationMW),note:X.notes[`phase-`+Z()]||``,deliveries:Object.entries(e.delivery||{}).map(([e,t])=>({id:Q()+`-`+Ae(e),name:e,...t,initial:0})),warnings:q.warnings}}));return(e,n)=>(F(),I(P,null,[R(hd,{eyebrow:`CALCULATED BUILD SEQUENCE`,title:t.value.title,subtitle:t.value.profileName},null,8,[`title`,`subtitle`]),n[19]||=z(),R(ef),n[20]||=z(),L(`div`,Gf,[R(Jd,{label:`Progress`,value:t.value.progress,caption:`Checklist steps`},null,8,[`value`]),n[0]||=z(),R(Jd,{label:`Delivery time`,value:t.value.hours,caption:`At steady state; excludes construction`},null,8,[`value`]),n[1]||=z(),R(Jd,{label:`Buildings`,value:t.value.buildings,caption:`Includes new power generation`},null,8,[`value`]),n[2]||=z(),R(Jd,{label:`New power`,value:t.value.power,caption:`Existing spare power is separate`},null,8,[`value`])]),n[21]||=z(),t.value.post?(F(),I(`div`,Kf,`
    Retain these Phase 5 capacities. Prioritize storage and teleporter supply; reduce former
    elevator exports as needed and sink spare parts.
  `)):B(``,!0),n[22]||=z(),L(`div`,qf,[L(`section`,null,[L(`div`,Jf,[n[3]||=L(`h2`,null,`Build sequence`,-1),n[4]||=z(),R(Wf)]),n[5]||=z(),n[6]||=L(`p`,{class:`small muted`},`
        Start with construction stock and currently available power. Mark HUB, MAM and recipe
        unlocks as you complete them; these carry across phases. Milestone cost guidance updates
        from factories marked running. Full-phase factory targets follow the startup and unlock
        steps.
      `,-1),n[7]||=z(),R(Lf),n[8]||=z(),R(Zd,{placeholder:`Add a task…`}),n[9]||=z(),n[10]||=L(`h2`,null,`Phase notes`,-1),n[11]||=z(),L(`textarea`,{id:`phase-note`,class:`notes`,maxlength:`6000`,value:t.value.note},null,8,Yf),n[12]||=z(),L(`button`,{class:`btn`,"data-save-note":`phase-`+t.value.phase,"data-input":`phase-note`},`
        Save notes
      `,8,Xf)]),n[18]||=z(),L(`aside`,null,[L(`section`,Zf,[n[13]||=L(`h2`,null,`Elevator delivery`,-1),n[14]||=z(),(F(!0),I(P,null,xi(t.value.deliveries,e=>(F(),Ka(Uf,{key:e.id,delivery:e},null,8,[`delivery`]))),128))]),n[17]||=z(),L(`section`,Qf,[n[15]||=L(`h2`,null,`Profile assumptions`,-1),n[16]||=z(),(F(!0),I(P,null,xi(t.value.warnings,(e,t)=>(F(),I(`p`,{key:t,class:`small`},A(e),1))),128))])])])],64))}},ep={class:`stats`},tp={class:`fraction`},np={class:`fraction`},rp={class:`fraction`},ip={class:`split`},ap={class:`section-head`},op={class:`head-tools`},sp={class:`small muted`},cp={class:`progress-track`},lp={class:`panel`},up=[`value`],dp={class:`note-save`},fp=[`data-save-note`],pp={class:`side-panels`},mp={class:`panel next-card`},hp={class:`step-no`},gp={class:`panel`},_p={__name:`PlanPage`,setup(e){let t=Eo(()=>ws(()=>{let e=Rc(),t=e.filter(e=>$(e.id)).length,n=e.find(e=>!$(e.id)),r=Y.factories.filter(e=>e.stages[Q()]),i=Ys().flatMap(e=>e.items).filter(e=>e.name);return{phase:Z(),title:Fm(Z())+` field plan`,post:Z()===`post`,done:t,total:e.length,pct:e.length?Math.round(t/e.length*100):100,built:r.filter(e=>$(`factory-`+Q()+`-`+e.id)).length,factories:r.length,ready:i.filter(e=>$(`slot-`+e.id+`-verified`)).length,slots:i.length,power:S(Y.power[Q()]),next:n&&{title:n.title,body:n.body},note:X.notes[`phase-`+Z()]||``,deliveries:Y.deliveries.filter(e=>e.phase===Z())}}));return(e,n)=>(F(),I(P,null,[R(hd,{eyebrow:`THE NEXT BUILD`,title:t.value.title,subtitle:t.value.post?`Storage first. Keep the network running, then finish the remaining items.`:`Build the supply chain in order. Check off each step when it is verified in your save.`,badge:`YOUR SAVE · YOUR PACE`},null,8,[`title`,`subtitle`]),n[29]||=z(),L(`div`,ep,[R(Jd,{label:`Phase checklist`,caption:`Steps completed`},{default:Fr(()=>[z(A(t.value.done)+` `,1),L(`span`,tp,`/ `+A(t.value.total),1)]),_:1}),n[1]||=z(),R(Jd,{label:`Factory targets`,caption:`Marked running at this phase`},{default:Fr(()=>[z(A(t.value.built)+` `,1),L(`span`,np,`/ `+A(t.value.factories),1)]),_:1}),n[2]||=z(),R(Jd,{label:`Storage ready`,caption:`Item positions verified`},{default:Fr(()=>[z(A(t.value.ready)+` `,1),L(`span`,rp,`/ `+A(t.value.slots),1)]),_:1}),n[3]||=z(),R(Jd,{label:`Planned power`,caption:`Gross capacity at this stage`},{default:Fr(()=>[z(A(t.value.power)+` `,1),n[0]||=L(`span`,{class:`fraction`},`GW`,-1)]),_:1})]),n[30]||=z(),L(`div`,ip,[L(`section`,null,[L(`div`,ap,[n[5]||=L(`h2`,null,`Build sequence`,-1),n[6]||=z(),L(`span`,op,[L(`span`,sp,A(t.value.pct)+`% complete`,1),n[4]||=z(),R(Wf)])]),n[13]||=z(),L(`div`,cp,[L(`span`,{style:ft({width:t.value.pct+`%`})},null,4)]),n[14]||=z(),R(Lf),n[15]||=z(),R(Zd,{placeholder:`Add a task for this phase…`}),n[16]||=z(),L(`section`,lp,[n[8]||=L(`h2`,null,`Phase notes`,-1),n[9]||=z(),n[10]||=L(`p`,{class:`small muted`},`Locations, train routes, things to check on your next session.`,-1),n[11]||=z(),L(`textarea`,{id:`phase-note`,class:`notes`,maxlength:`6000`,"aria-label":`Phase notes`,value:t.value.note},null,8,up),n[12]||=z(),L(`div`,dp,[n[7]||=L(`span`,{class:`small muted`},`Saved only when you click Save notes.`,-1),L(`button`,{class:`btn`,"data-save-note":`phase-`+t.value.phase,"data-input":`phase-note`},`
            Save notes
          `,8,fp)])])]),n[28]||=z(),L(`aside`,pp,[L(`section`,mp,[L(`div`,hp,A(t.value.next?`NEXT UNFINISHED STEP`:`PHASE CHECKLIST COMPLETE`),1),n[17]||=z(),L(`h2`,null,A(t.value.next?.title||`Ready for the next phase`),1),n[18]||=z(),L(`p`,null,A(t.value.next?.body||`Verify the delivery, then choose your next phase using the selector above.`),1),n[19]||=z(),n[20]||=L(`a`,{class:`btn primary full`,href:`#factories`},`Open factory targets →`,-1)]),n[25]||=z(),L(`section`,gp,[L(`h2`,null,A(t.value.post?`Post-game priority`:`Elevator delivery`),1),n[24]||=z(),t.value.post?(F(),I(P,{key:0},[n[21]||=L(`p`,null,`
            Protect the storage allowances. Reduce former elevator exports when the new completion
            factories need those resources. Sink the remaining surplus.
          `,-1),n[22]||=z(),n[23]||=L(`a`,{class:`btn`,href:`#factories`},`Completion modules →`,-1)],64)):(F(!0),I(P,{key:1},xi(t.value.deliveries,e=>(F(),Ka(Uf,{key:e.id,delivery:e},null,8,[`delivery`]))),128))]),n[26]||=z(),n[27]||=L(`section`,{class:`panel accent`},[L(`h3`,null,`Keep the corrections together`),z(),L(`p`,{class:`small`},`
          Resource conversion is included. The old coal and temporary fuel plants retire; 44.425 GW
          of turbofuel stays. Storage includes collectables Q/R and the workshop underneath.
        `),z(),L(`a`,{class:`btn quiet`,href:`#resources`},`Review the resource gate →`)],-1)])])],64))}},vp={class:`toolbar`},yp={key:0,class:`btn`,href:`#backup`},bp={key:1,class:`btn`,href:`#account`},xp={class:`section-head`},Sp=[`data-new-profile`,`onClick`],Cp={class:`profile-cards`},wp={class:`eyebrow`},Tp={class:`small`},Ep=[`data-open-save`,`data-open-profile`,`disabled`,`onClick`],Dp=[`data-duplicate-profile`,`data-duplicate-save`,`disabled`,`onClick`],Op=[`data-share-profile`,`data-share-save`,`disabled`,`onClick`],kp=[`data-remove-profile`,`data-remove-save`,`disabled`,`onClick`],Ap={class:`panel`},jp=[`disabled`],Mp={__name:`ProfilesPage`,setup(t){let n=Eo(()=>ws(()=>({accountsEnabled:G.accountsEnabled,saves:G.saves.map(e=>({id:e.id,name:e.name,profiles:e.profiles.map(t=>({id:t.id,name:t.name,open:e.id===om.id&&t.id===K.id,kind:t.kind===`original`?`PRESERVED HANDBOOK`:`CALCULATED PROFILE`,summary:t.settings?`${t.settings.purity} purity · ${S(t.settings.multiplier)}× elevator · ${S(t.settings.powerFactor)}× power`:`50× elevator · pure ingots · nuclear recycling`,progress:`${t.completed} checks complete · ${Fm(t.phase)}`}))}))}))),r=Qn(``),i=(e,t,n)=>`${e}:${t.id}:${n.id}`,a=Qn(!1);async function o(e,t){if(rm()){r.value=i(`duplicate`,e,t);try{await Zp;let n=await em(`/api/duplicate-profile`,{saveId:e.id,profileId:t.id});vm(n.workspace),await Im(n.saveId,n.profileId),tm(`plan`),U(`Copy created and opened. Changes here leave the original profile untouched.`)}catch(e){U(e.message,!0)}finally{r.value=``}}}async function s(e,t){r.value=i(`share`,e,t);try{await Zp,im(await Xp(`/api/export-saves?save=`+encodeURIComponent(e.id)+`&profile=`+encodeURIComponent(t.id)+`&share=1`),(Ae(t.name||`profile`)||`profile`)+`-share.json`),U(`Share file downloaded: the plan without your progress. Others import it under Backup → Import saves.`)}catch(e){U(e.message,!0)}finally{r.value=``}}async function c(e,t){if(rm()&&confirm(`Are you sure? Remove "`+t.name+`" and its progress and notes?`+(e.profiles.length===1?` This also removes the empty save.`:` Other profiles keep their progress.`))){r.value=i(`remove`,e,t);try{await Zp,await em(`/api/remove-profile`,{saveId:e.id,profileId:t.id,confirmed:!0}),await zm(),G.saves.length&&tm(`profiles`),U(`Profile removed.`)}catch(e){U(e.message,!0)}finally{r.value=``}}}async function l(e,t){if(rm()){r.value=i(`open`,e,t);try{await Zp,vm(await em(`/api/select`,{saveId:e.id,profileId:t.id})),await Im(e.id,t.id),tm(`plan`)}catch(e){U(e.message,!0)}finally{r.value=``}}}async function u(e){a.value=!0;try{vm(await em(`/api/rename`,Object.fromEntries(new FormData(e.target))));let t=G.saves.find(e=>e.id===om.id);om.name=t.name,K.name=t.profiles.find(e=>e.id===K.id).name,H()}catch(e){U(e.message,!0)}finally{a.value=!1}}return(t,d)=>(F(),I(P,null,[tr(e)?(F(),Ka(bd,{key:0})):B(``,!0),d[17]||=z(),R(hd,{eyebrow:`YOUR FACTORY WORLDS`,title:`Saves & profiles`,subtitle:`Each save keeps separate progress for every profile. Switching back restores its checklist, deliveries and notes.`}),d[18]||=z(),L(`div`,vp,[d[0]||=L(`button`,{class:`btn primary`,"data-new-save":``},`Create a save`,-1),d[1]||=z(),tr(e)?(F(),I(`a`,yp,`Backups & transfer`)):(F(),I(`a`,bp,A(n.value.accountsEnabled?`Your account`:`Set up user accounts`),1))]),d[19]||=z(),(F(!0),I(P,null,xi(n.value.saves,e=>(F(),I(`section`,{key:e.id,class:`panel save-panel`},[L(`div`,xp,[L(`h2`,null,A(e.name),1),d[2]||=z(),L(`button`,{class:`btn`,"data-new-profile":e.id,onClick:t=>tr(wl)(e.id)},`
        Try another profile
      `,8,Sp)]),d[10]||=z(),L(`div`,Cp,[(F(!0),I(P,null,xi(e.profiles,t=>(F(),I(`article`,{key:t.id,class:_t([`profile-card`,t.open?`selected`:``])},[L(`div`,wp,A(t.kind),1),d[3]||=z(),L(`h3`,null,A(t.name),1),d[4]||=z(),L(`p`,null,A(t.summary),1),d[5]||=z(),L(`p`,Tp,A(t.progress),1),d[6]||=z(),L(`button`,{class:_t([`btn`,t.open?``:`primary`]),"data-open-save":e.id,"data-open-profile":t.id,disabled:r.value===i(`open`,e,t),onClick:n=>l(e,t)},A(t.open?`Continue current profile`:`Open profile`),11,Ep),d[7]||=z(),L(`button`,{class:`btn`,"data-duplicate-profile":t.id,"data-duplicate-save":e.id,disabled:r.value===i(`duplicate`,e,t),onClick:n=>o(e,t)},A(r.value===i(`duplicate`,e,t)?`Copying…`:`Duplicate`),9,Dp),d[8]||=z(),L(`button`,{class:`btn`,"data-share-profile":t.id,"data-share-save":e.id,disabled:r.value===i(`share`,e,t),onClick:n=>s(e,t)},`
          Share
        `,8,Op),d[9]||=z(),L(`button`,{class:`btn`,"data-remove-profile":t.id,"data-remove-save":e.id,disabled:r.value===i(`remove`,e,t),onClick:n=>c(e,t)},`
          Remove profile
        `,8,kp)],2))),128))])]))),128)),d[20]||=z(),d[21]||=L(`p`,{class:`small muted`},`
    Duplicate copies a profile with its progress so you can try changes without touching the
    original. Share downloads a file with the plan, storage layout, factory groups and step edits —
    without your checkmarks or notes — that anyone can import under Backup → Import saves.
  `,-1),d[22]||=z(),L(`section`,Ap,[d[13]||=L(`h2`,null,`Rename the current save or profile`,-1),d[14]||=z(),L(`form`,{id:`rename-form`,class:`inline-form`,onSubmit:hs(u,[`prevent`])},[d[11]||=L(`select`,{name:`target`,"aria-label":`What to rename`},[L(`option`,{value:`save`},`Save`),z(),L(`option`,{value:`profile`},`Profile`)],-1),d[12]||=L(`input`,{name:`name`,required:``,maxlength:`80`,"aria-label":`New name`,placeholder:`New name`},null,-1),L(`button`,{class:`btn`,disabled:a.value},`Rename`,8,jp)],32),d[15]||=z(),d[16]||=L(`p`,{class:`small muted`},`
      Renaming does not change progress. Profiles keep a frozen calculation so later planner updates
      cannot silently change your targets.
    `,-1)])],64))}},Np={class:`stats`},Pp={class:`notice`},Fp={class:`table-wrap`},Ip={class:`resource-name`},Lp={class:`number`},Rp={class:`number`},zp={class:`backup-grid`,style:{"margin-top":`24px`}},Bp={class:`panel`},Vp={class:`checklist`},Hp=[`data-check`,`checked`],Up={__name:`ResourcesPage`,setup(e){let t=[[`power-retained`,`Retained turbofuel: 44.425 GW`],[`power-rocket-1`,`Rocket-fuel block 1: +72 GW`],[`power-rocket-2`,`Rocket-fuel block 2: +72 GW`],[`power-u4`,`Phase 4 uranium: +125 GW`],...Array.from({length:4},(e,t)=>[`power-rocket-`+(t+3),`Rocket-fuel block `+(t+3)+`: +72 GW`]),[`power-nuclear-final`,`Complete nuclear fleet: 437.5 GW total`]],n=Eo(()=>ws(()=>{let e=Y.resources[Q()],n=Y.plans[Q()];return{power:S(Y.power[Q()])+` GW`,peak:S(n.manufacturingPeakGW)+` GW`,average:S(n.manufacturingAvgGW)+` GW`,coal:S(74400-e.Coal)+`/min`,nitrogen:S(e[`Nitrogen Gas`]||0),rows:Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>{let n=Y.capacities[e],r=n?t/n:0;return{name:e,required:S(t),available:n?S(n):e===`Water`?`Extraction limited`:`Verify wells`,remaining:n?S(n-t):`—`,tight:n&&r>.9,use:n?S(r*100)+`%`:null,bar:Math.min(100,r*100)}}),steps:t.map(([e,t])=>({id:e,title:t,done:$(e)}))}}));return(e,t)=>(F(),I(P,null,[R(hd,{eyebrow:`CAPACITY BEFORE CONSTRUCTION`,title:`Power & resources`,subtitle:`These are planned full-stage requirements, not live readings from your save. Mining totals already include retained turbofuel, trucks and all new power.`}),t[14]||=z(),L(`div`,Np,[R(Jd,{label:`Gross generation`,value:n.value.power,caption:`At this stage’s completion`},null,8,[`value`]),t[0]||=z(),R(Jd,{label:`Production peak`,value:n.value.peak,caption:`Before the utility allowance`},null,8,[`value`]),t[1]||=z(),R(Jd,{label:`Production average`,value:n.value.average,caption:`Half-consumption setting`},null,8,[`value`]),t[2]||=z(),R(Jd,{label:`Coal remaining`,value:n.value.coal,caption:`Against all-pure mining limit`},null,8,[`value`])]),t[15]||=z(),L(`div`,Pp,[t[3]||=z(`
    Verify your randomized nitrogen wells can supply `,-1),L(`b`,null,A(n.value.nitrogen)+`/min`,1),t[4]||=z(` at this stage.
    The all-pure resource limits assume fully developed extraction and logistics. Additional
    completion modules are not included.
  `,-1)]),t[16]||=z(),L(`div`,Fp,[L(`table`,null,[t[9]||=L(`thead`,null,[L(`tr`,null,[L(`th`,null,`Fresh resource`),z(),L(`th`,null,`Required /min`),z(),L(`th`,null,`Available /min`),z(),L(`th`,null,`Remaining /min`),z(),L(`th`,null,`Use`)])],-1),t[10]||=z(),L(`tbody`,null,[(F(!0),I(P,null,xi(n.value.rows,e=>(F(),I(`tr`,{key:e.name},[L(`td`,Ip,[R(nf,{name:e.name},null,8,[`name`]),L(`span`,null,A(e.name),1)]),t[5]||=z(),L(`td`,Lp,A(e.required),1),t[6]||=z(),L(`td`,Rp,A(e.available),1),t[7]||=z(),L(`td`,{class:_t([`number`,e.tight?`warn`:``])},A(e.remaining),3),t[8]||=z(),L(`td`,null,[e.use?(F(),I(P,{key:0},[z(A(e.use)+` `,1),L(`div`,{class:_t([`resource-bar`,e.tight?`tight`:``])},[L(`span`,{style:ft({width:e.bar+`%`})},null,4)],2)],64)):(F(),I(P,{key:1},[z(`—`)],64))])]))),128))])])]),t[17]||=z(),t[18]||=L(`p`,{class:`small muted`},`
    Crude availability counts 30 ordinary pure nodes; oil wells are additional. Water includes a
    2,000/min reserve for retained turbofuel and resin processing.
  `,-1),t[19]||=z(),L(`div`,zp,[L(`section`,Bp,[t[11]||=L(`h2`,null,`Power commissioning`,-1),t[12]||=z(),L(`div`,Vp,[(F(!0),I(P,null,xi(n.value.steps,e=>(F(),I(`label`,{key:e.id,class:`check-row`},[L(`input`,{type:`checkbox`,"data-check":e.id,checked:e.done},null,8,Hp),z(A(e.title),1)]))),128))])]),t[13]||=eo(` <section class="panel"><h2>One 72 GW rocket-fuel block</h2> <p><b>Inputs/min:</b> 300 Crude, 800 Sulfur, 400 Coal, 600 Nitrogen and 1,000 Water.</p> <p>
        10 Heavy Oil Residue refineries → 8 Diluted Fuel blenders → 8 Nitro Rocket Fuel blenders.
        Add 5 Residual Rubber refineries and 288 Fuel Generators at 100%.
      </p> <p class="small muted">
        Produces 1,200 Rocket Fuel, 200 Compacted Coal and 100 Rubber/min. These byproducts are not
        credited against other factory contracts.
      </p> <div class="notice blue">
        At Phase 5: (579.231 × 1.2 + 20) ÷ 0.8 ≈ <b>894 GW</b> preliminary requirement. Planned
        gross capacity: <b>913.925 GW</b>. Replace the 20 GW existing-load allowance with your
        measured load.
      </div></section>`,2)]),t[20]||=z(),t[21]||=L(`section`,{class:`panel`,style:{"margin-top":`24px`}},[L(`h2`,null,`Nuclear sequence`),z(),L(`p`,null,`
      Phase 4: 50 uranium reactors generate 500 waste/min. Process it into 2.5 Plutonium Fuel
      Rods/min and sink those rods.
    `),z(),L(`p`,null,`
      Phase 5: 100 uranium reactors → 1,000 Uranium Waste/min → 5 Plutonium Fuel Rods/min → 50
      plutonium reactors → 50 Plutonium Waste/min → 25 Ficsonium Fuel Rods/min → 25 Ficsonium
      reactors.
    `),z(),L(`p`,{class:`small muted`},`
      Build downstream processing and burning capacity first. Final reactor cooling needs 42,000
      Water/min, already included in the resource table. Keep radioactive buffers at the nuclear
      site.
    `)],-1)],64))}};function Wp(e,t){return e===`plan`?t?$f:_p:e===`profiles`?Mp:e===`account`?Gd:e===`backup`?Ud:e===`resources`&&!t?Up:null}function Gp(e,t,n=``,r=``){return b`<div class="heading-row">
    <div>
      <div class="eyebrow">${e}</div>
      <h1>${t}</h1>
      ${n&&b`<div class="subtitle">${n}</div>`}
    </div>
    ${r&&b`<span class="badge orange">${r}</span>`}
  </div>`}function Kp(){return b`<div class="notice blue">
    Your saves stay in this browser on this device. Clearing site data or using private browsing can
    remove them. Export a full backup before switching devices or website addresses.
    <a href="#backup">Backups & transfer</a>
  </div>`}var qp=()=>({wizard:Tl,factories:q?kc:hc,storage:$s,resources:q?Pc:null});function H(){let e=[...document.querySelectorAll(`details[open][data-task]`)].map(e=>e.dataset.task),t=document.activeElement?.id,n=document.activeElement?.selectionStart;od(x(`#app`)),Cs();let r=Wp(lm,q);if(r){cd(x(`#main`),r);return}if(ld(),x(`#main`).innerHTML=qp()[lm]?.()??``,e.forEach(e=>document.querySelector(`details[data-task="${e}"]`)?.setAttribute(`open`,``)),t&&document.getElementById(t)){let e=document.getElementById(t);e.focus({preventScroll:!0}),typeof n==`number`&&e.setSelectionRange&&e.setSelectionRange(n,n)}}var Jp=0,Yp;function U(e,t=!1){let n=x(`#toast`);n.textContent=e,n.className=`show`+(t?` error`:``),clearTimeout(Yp),Yp=setTimeout(()=>n.className=``,t?9e3:3500)}async function Xp(n,r={}){if(e&&n.startsWith(`/api/`))return t(n,r);let i=await fetch(e?new URL(`.`+n,Ce):n,{cache:`no-store`,...r}),a;try{a=await i.json()}catch{throw Error(`The server returned an unreadable response.`)}if(!i.ok)throw Error(a.error||`Request failed.`);return a}var Zp=Promise.resolve();function W(e){let t={...$p()};Jp++,Qp();let n=Zp.then(async()=>{let n=await Xp(`/api/update`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Planner-Request":`1`,...t},body:JSON.stringify(e)});return t[`X-Save-Id`]===om.id&&t[`X-Profile-Id`]===K.id&&xm(n),n});return Zp=n.catch(()=>{}),n.catch(e=>{throw U(e.message,!0),e}).finally(()=>{Jp--,Qp()})}function Qp(){Cs()}function $p(){return{"X-Save-Id":om?.id||``,"X-Profile-Id":K?.id||``}}async function em(e,t,n=!0,r={}){return Xp(e,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Planner-Request":`1`,...n?$p():{}},body:JSON.stringify(t),...r})}function tm(e){Sm(e),location.hash===`#`+e?H():location.hash=e}function nm(){return[...document.querySelectorAll(`textarea.notes`)].some(e=>{let t=document.querySelector(`[data-input="${e.id}"]`);return t&&e.value!==(X.notes[t.dataset.saveNote]||``)})}function rm(){return!nm()||confirm(`You have notes that have not been saved. Leave without saving those edits?`)}function im(e,t){let n=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:`application/json`})),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}var am,G,om,K,q=null,J=null,sm=`login`,cm,Y,X,lm=`plan`,um=``,dm=`ground`,fm=`all`,pm=!1,mm=!1,hm=!1,gm=null,_m=!1;function vm(e){G=e}function ym(e){J=e}function bm(e){sm=e}function xm(e){X=e}function Sm(e){lm=e}function Cm(e){um=e}function wm(e){dm=e}function Tm(e){fm=e}function Em(e){pm=e}function Dm(e){mm=e}function Om(e){hm=e}function km(e){gm=e}function Am(e){_m=e}var jm=()=>q?String(q.settings?.phase||`1`):`3`,Z=()=>{let e=X.settings.phase;return e!==`post`&&Number(e)<Number(jm())?jm():e},Q=()=>Z()===`post`?`5`:Z(),Mm=()=>om.id?[...[`1`,`2`,`3`,`4`,`5`].filter(e=>Number(e)>=Number(jm())),`post`]:[`1`,`2`,`3`,`4`,`5`,`post`],Nm=e=>Object.entries(e||{}).filter(([e])=>Number(e)>=Number(jm())),$=e=>!!X.checks[e],Pm=e=>$(e)?`checked`:``,Fm=e=>e===`post`?`Post Phase 5`:`Phase `+e;async function Im(e,t){await Zp,Lm(await Xp(`/api/context?save=`+encodeURIComponent(e)+`&profile=`+encodeURIComponent(t))),x(`#detail`).close()}function Lm(e){om=e.save,K=e.profile,X=e.state,q=e.plan,Y=e.handbook||cm||Y,um=``,hm=!1,gm=null,_m=!1,mm=!1}var Rm=()=>q.stages[Q()];async function zm(){try{if(G=await Xp(`/api/workspace`),!G.user){sm=`login`,X=null,ud(x(`#app`));return}[Y,am]=await Promise.all([Xp(`/plan.json`),Xp(`/progression.json`)]),cm=Y;let t=G.saves.find(e=>e.id===G.activeSave)||G.saves[0];t?(await Im(t.id,t.activeProfile),lm=[`plan`,`factories`,`storage`,`resources`,`backup`,`profiles`,`wizard`,`account`].includes(location.hash.slice(1))?location.hash.slice(1):`plan`,lm===`wizard`&&!J&&(lm=`profiles`),H()):(om={id:``,name:`New save`},K={id:``,name:`Choose a profile`},X={settings:{phase:e?`1`:`3`},checks:{},notes:{},deliveries:{},customTasks:[]},q=null,wl())}catch(e){sd(),x(`#app`).innerHTML=String(b`<section class="loading">
        <h1>Could not open the planner</h1>
        <p>${e.message}</p>
        <button class="btn" id="retry">Try again</button>
      </section>`),x(`#retry`).onclick=zm}}document.addEventListener(`click`,async e=>{let t=e.target.closest(`button,a`);if(t){if(t.hasAttribute(`data-close`)&&x(`#detail`).close(),t.dataset.factory&&vc(t.dataset.factory),t.dataset.slot&&rc(t.dataset.slot),t.dataset.completeBay){let e=Ys().find(e=>e.id===t.dataset.completeBay);if(e){t.disabled=!0;try{await W({type:`checks`,keys:e.items.filter(e=>e.name).flatMap(e=>Zs(e.id)),value:!0}),H(),U(`Room `+e.id+` completed. You can uncheck individual containers if needed.`)}catch{}finally{t.disabled=!1}}}if(t.dataset.floor&&(wm(t.dataset.floor),Cm(``),H()),t.hasAttribute(`data-toggle-layout`)&&(Dm(!mm),H()),t.hasAttribute(`data-toggle-factory-edit`)&&(Am(!_m),H()),t.dataset.removeGroup&&confirm(`Remove this group? The factories stay in the list and keep their progress.`))try{await W({type:`factoryGroupRemove`,id:t.dataset.removeGroup}),H()}catch{}if(t.dataset.unassign){let e=t.dataset.unassign,n=oc(e).filter(e=>e.group!==t.dataset.group).map(e=>({group:e.group,rate:e.rate}));try{await W({type:`factoryAssign`,key:e,groups:n}),H()}catch{}}if(t.dataset.clearSlot){t.disabled=!0;try{await W({type:`storageSlotClear`,key:t.dataset.clearSlot}),H(),U(`Container cleared. Its saved checkmarks are kept with the address.`)}catch{t.disabled=!1}}if(t.dataset.removeBay&&confirm(`Remove this added bay? Saved checkmarks for its addresses are kept.`)){t.disabled=!0;try{await W({type:`storageBayRemove`,id:t.dataset.removeBay}),H()}catch{t.disabled=!1}}if(t.dataset.removeFloor&&confirm(`Remove this added floor?`)){t.disabled=!0;try{await W({type:`storageFloorRemove`,id:t.dataset.removeFloor}),wm(`ground`),H()}catch{t.disabled=!1}}if(t.dataset.saveNote){let e=t.closest(`dialog`);t.disabled=!0;try{await W({type:`note`,key:t.dataset.saveNote,value:document.getElementById(t.dataset.input).value}),e?.open&&e.contains(t)&&e.close(),U(`Notes saved.`)}catch{}finally{t.disabled=!1}}}}),document.addEventListener(`change`,async e=>{let t=e.target;if(t.dataset.completeSlot){let e=t.checked;t.disabled=!0;try{await W({type:`checks`,keys:Zs(t.dataset.completeSlot),value:e}),H()}catch{t.checked=!e}finally{t.disabled=!1}}if(t.dataset.check){let e=t.checked;t.disabled=!0;try{await W({type:`check`,key:t.dataset.check,value:e}),H()}catch{t.checked=!e}finally{t.disabled=!1}}if(t.id===`factory-filter`&&(Tm(t.value),H()),[`recipes`,`mainPower`,`pureIngots`].includes(t.name)&&J&&x(`#wizard-form`)&&(jl(x(`#wizard-form`)),H()),J?.mode===`guided`&&x(`#wizard-form`)&&(String(t.name).startsWith(`guided:`)||t.name===`topup`||t.name===`topic`)&&(au(x(`#wizard-form`)),H()),J?.mode===`extraction`&&x(`#wizard-form`)&&/^(mark|clock|purity|distribution|node:|well:|used:)/.test(String(t.name))){if(dl(x(`#wizard-form`)),[`purity`,`distribution`].includes(t.name)){let e=J.settings;p(e.purity,e.distribution)&&(J.extraction=ne(e.purity,el(J),e.distribution))}H()}if([`supplyItem`,`supplyRate`].includes(t.name)&&J&&x(`#wizard-form`)&&(Wl(t),J.mode===`guided`?au(x(`#wizard-form`)):jl(x(`#wizard-form`)),H()),t.name===`alt`){let e=t.closest(`.alt-picker`),n=e?.querySelector(`.alt-picker-head b`);n&&(n.textContent=`Alternate recipes · ${e.querySelectorAll(`input[name=alt]:checked`).length} selected`);let r=t.closest(`.alt-row`)?.querySelector(`input[name=altpref]`);r&&(r.disabled=!t.checked,t.checked||(r.checked=!1))}if(t.dataset.bayRename){t.disabled=!0;try{await W({type:`storageBayRename`,id:t.dataset.bayRename,name:t.value})}catch{}finally{t.disabled=!1,H()}}if(t.dataset.groupRename){t.disabled=!0;try{await W({type:`factoryGroupRename`,id:t.dataset.groupRename,name:t.value})}catch{}finally{t.disabled=!1,H()}}if(t.dataset.assignAdd&&t.value){let e=t.dataset.assignAdd,n=[...oc(e).map(e=>({group:e.group,rate:e.rate})),{group:t.value,rate:null}];t.disabled=!0;try{await W({type:`factoryAssign`,key:e,groups:n})}catch{}finally{t.disabled=!1,H()}}if(t.dataset.assignRate){let e=t.dataset.assignRate,n=t.value.trim(),r=null;if(n!==``&&(r=Number(n),!Number.isFinite(r)||r<=0)){U(`Enter a rate above 0, or leave the field empty for the whole output or the remainder.`,!0),H();return}let i=oc(e).map(e=>e.group===t.dataset.group?{group:e.group,rate:r}:{group:e.group,rate:e.rate});t.disabled=!0;try{await W({type:`factoryAssign`,key:e,groups:i})}catch{}finally{t.disabled=!1,H()}}}),document.addEventListener(`input`,e=>{if([`factory-search`,`storage-search`].includes(e.target.id)&&(Cm(e.target.value),H()),e.target.id===`alt-filter`){let t=e.target.value.trim().toLowerCase();for(let e of document.querySelectorAll(`.alt-row`))e.hidden=t!==``&&!e.dataset.altText.includes(t)}if(e.target.id===`rate-filter`){let t=e.target.value.trim().toLowerCase();for(let e of document.querySelectorAll(`.rate-row`))e.hidden=t!==``&&!e.dataset.rateText.includes(t)}[`buildRate`,`storageRate`].includes(e.target.name)&&Bm()});function Bm(){let e=document.querySelectorAll(`.rate-row`);if(!e.length)return;let t=e=>{let t=document.querySelector(`[name=`+e+`]`)?.value;return t!==void 0&&t!==``&&Number.isFinite(Number(t))?Number(t):null},n=t(`storageRate`),r=t(`buildRate`)??n;for(let t of e){let e=t.dataset.rateGroup===`delivered`?0:t.dataset.rateGroup===`build`?r:n,i=t.querySelector(`input`);i&&e!==null&&(i.placeholder=S(e))}}document.addEventListener(`input`,e=>{e.target?.name===`supplyItem`&&J&&(Ul(e.target),Hl(e.target))}),document.addEventListener(`keydown`,e=>{let t=e.target;if(t?.name!==`supplyItem`||!J)return;let n=t.closest(`.supply-field`)?.querySelector(`.supply-options`),r=n&&!n.hidden?[...n.querySelectorAll(`.supply-option`)]:[];if(e.key===`Escape`){r.length&&(e.preventDefault(),Wl(t));return}if(e.key===`ArrowDown`&&!r.length){Hl(t),e.preventDefault();return}if(!r.length)return;let i=r.findIndex(e=>e.getAttribute(`aria-selected`)===`true`);if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?(i+1)%r.length:i<=0?r.length-1:i-1;r.forEach((e,n)=>e.setAttribute(`aria-selected`,String(n===t))),r[t].scrollIntoView({block:`nearest`})}else e.key===`Enter`&&(e.preventDefault(),Gl(r[i>=0?i:0]))}),document.addEventListener(`focusout`,e=>{let t=e.target;if(t?.name!==`supplyItem`)return;let n=t.closest(`.supply-field`);n&&!n.contains(e.relatedTarget)&&Wl(t)}),document.addEventListener(`submit`,async e=>{let t=e.target,n=()=>String(new FormData(t).get(`name`)||``).trim();if(t.id===`add-floor`){e.preventDefault();let t=n();if(!t)return;try{await W({type:`storageFloorAdd`,id:`cf-`+Array.from(crypto.getRandomValues(new Uint8Array(6)),e=>e.toString(16).padStart(2,`0`)).join(``),label:t}),H()}catch{}}if(t.id===`rename-floor`){e.preventDefault();let t=n();if(!t)return;try{await W({type:`storageFloorRename`,id:dm,label:t}),H()}catch{}}if(t.id===`add-bay`){e.preventDefault();let t=n();if(!t)return;let r=Js();if(!r){U(`No free bay letters left.`,!0);return}try{await W({type:`storageBayAdd`,id:r,name:t,floor:dm}),H()}catch{}}if(t.classList.contains(`add-container`)){e.preventDefault();let r=n();if(!r)return;let i=Ys().find(e=>e.id===t.dataset.bay);if(!i)return;let a=i.items.find(e=>!e.name)?.id||(i.items.length<ve?i.id+String(i.items.length+1).padStart(2,`0`):null);if(!a){U(`This bay holds the most addresses it can. Add another bay.`,!0);return}try{await W({type:`storageSlotAssign`,key:a,name:r}),H()}catch{}}if(t.id===`add-group`){e.preventDefault();let t=n();if(!t)return;try{await W({type:`factoryGroupAdd`,id:`fg-`+Array.from(crypto.getRandomValues(new Uint8Array(6)),e=>e.toString(16).padStart(2,`0`)).join(``),name:t}),H()}catch{}}}),document.addEventListener(`error`,e=>{let t=e.target;t?.tagName===`IMG`&&t.classList?.contains(`item-icon`)&&(t.style.visibility=`hidden`)},!0),window.addEventListener(`hashchange`,()=>{Sm([`plan`,`factories`,`storage`,`resources`,`backup`,`profiles`,`wizard`,`account`].includes(location.hash.slice(1))?location.hash.slice(1):`plan`),Cm(``),X&&H(),window.scrollTo(0,0)}),x(`#detail`).addEventListener(`click`,e=>{e.target===x(`#detail`)&&x(`#detail`).close()}),window.addEventListener(`beforeunload`,e=>{Jp&&(e.preventDefault(),e.returnValue=``)}),document.addEventListener(`click`,async e=>{let t=e.target.closest(`button`);if(t){if(t.hasAttribute(`data-new-save`)&&wl(),t.dataset.calcFactory&&Nc(t.dataset.calcFactory),t.dataset.groupChain&&Cc(t.dataset.groupChain),t.dataset.altInfo&&_l(t.dataset.altInfo),t.hasAttribute(`data-alt-all`)||t.hasAttribute(`data-alt-none`)){let e=t.hasAttribute(`data-alt-all`),n=t.closest(`.alt-picker`);for(let t of n.querySelectorAll(`.alt-row:not([hidden]) input[name=alt]`)){t.checked=e;let n=t.closest(`.alt-row`).querySelector(`input[name=altpref]`);n&&(n.disabled=!e,e||(n.checked=!1))}n.querySelector(`.alt-picker-head b`).textContent=`Alternate recipes · ${n.querySelectorAll(`input[name=alt]:checked`).length} selected`}if(t.hasAttribute(`data-alt-best`)&&J&&!t.disabled){t.disabled=!0;let e=t.textContent;try{jl(x(`#wizard-form`));let e=await em(`/api/preview`,{settings:{...J.settings,recipes:`all`}},!0,Nl(t,`Calculating…`));J.settings.alternateRecipes=gl(e),H(),U(`Selected ${J.settings.alternateRecipes.length} alternate recipes the planner uses with your current settings.`)}catch(n){Pl(x(`#wizard-form`),n),t.disabled=!1,t.textContent=e}}if(t.hasAttribute(`data-round-up`)){if(!rm())return;t.disabled=!0;try{await Zp;let e=await em(`/api/round-up`,{},!0,Nl(t,`Recalculating…`));vm(e.workspace),await Im(e.saveId,e.profileId),H(),U(`Created rounded profile. `+e.reviewCount+` completed factory checks need review; previous progress is preserved.`)}catch(e){U(e.message,!0),t.disabled=!1,t.textContent=`Round up production`}}if(t.dataset.wizardStep&&await Fl(Number(t.dataset.wizardStep)),t.hasAttribute(`data-wizard-back`)&&await Fl(J.step-1),t.hasAttribute(`data-guided-back`)&&await iu(J.guidedStep-1),t.dataset.guidedAdvanced&&ou(Number(t.dataset.guidedAdvanced)),t.hasAttribute(`data-guided-start`)&&su(),t.hasAttribute(`data-open-extraction`)&&ml(),t.dataset.nodePreset&&J){let e=x(`#wizard-form`);e&&dl(e),J.extraction=ne(t.dataset.nodePreset,el(J),J.settings.distribution),J.extractionUndo=null,J.settings.purity=t.dataset.nodePreset,H(),U(`Filled in the default world at `+(g.find(([e])=>e===t.dataset.nodePreset)?.[1]||`that purity`)+`. Change any count that does not match your save.`)}if(t.hasAttribute(`data-node-reset`)&&J){let e=x(`#wizard-form`);e&&dl(e),il(),H(),U(`Cleared. Every count is zero, your miner mark and clock are kept — and Undo reset puts it all back.`)}if(t.hasAttribute(`data-node-undo`)&&J&&(al(),H(),U(`Put back the counts you had before the reset.`)),t.dataset.extractionStep&&await fl(Number(t.dataset.extractionStep)),t.hasAttribute(`data-extraction-back`)&&await fl(J.extractionStep-1),t.hasAttribute(`data-extraction-cancel`)&&pl(),t.dataset.supplyPick){Gl(t);return}if(t.dataset.supplyRemove&&J){let e=x(`#wizard-form`);e&&(J.mode===`guided`?au(e):jl(e));let n=zl(J);n.splice(Number(t.dataset.supplyRemove),1),J.settings.existingSupply=Object.fromEntries(n.filter(e=>Number(e.rate)>0).map(e=>[e.name.trim(),Number(e.rate)]).filter(([e])=>(G.catalog.supplyItems||[]).includes(e))),J.preview=null,H()}t.hasAttribute(`data-cancel-wizard`)&&(ym(null),tm(`profiles`))}}),document.addEventListener(`submit`,async e=>{let t=e.target;if(t.id!==`wizard-form`)return;e.preventDefault();let n=t.querySelector(`button[type="submit"]`)||t.querySelector(`button`);n.disabled=!0;try{if(t.id===`wizard-form`){let e=J;if(e.mode===`extraction`){n.disabled=!1,await fl(e.extractionStep+1);return}if(e.mode===`guided`&&e.guidedStep<=Yl().length){n.disabled=!1,await iu(e.guidedStep+1);return}if(e.step<5){n.disabled=!1,await Fl(e.step+1);return}if(e.step===5){Cl(t);let r=await em(`/api/profiles`,{saveId:e.saveId,saveName:e.saveName,name:e.name,settings:e.settings,carryFrom:e.saveId?e.carryFrom:null,carry:e.carry,built:eu(e,t)},!0,Nl(n,`Saving profile…`));vm(r.workspace),await Im(r.saveId,r.profileId),ym(null),tm(`plan`);let i=[r.carriedChecks?je(r.carriedChecks,`step`)+` carried over`:``,r.reviewCount?je(r.reviewCount,`expanded production line`)+` left for review`:``].filter(Boolean).join(`; `);U(`Profile created`+(i?`: `+i+`. `:`. `)+`Your other progress is unchanged.`);return}}}catch(e){Pl(t,e),n.disabled=!1,n.textContent=J.mode===`guided`&&J.guidedStep<=Yl().length?J.guidedStep>=Yl().length?`Calculate plan`:`Continue →`:J.step===5?`Create profile`:J.step===4?`Calculate plan`:`Continue →`}}),zm();