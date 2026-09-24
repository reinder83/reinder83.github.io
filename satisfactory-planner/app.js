import{browserMode as e,browserRequest as t}from"./browser-api.js";import{GUIDED_TOPUP_RATE as n,blankCounts as r,blankExtraction as i,clockChoices as a,distributions as o,droneFuels as s,extractionLimits as c,guidedQuestions as l,guidedStandingQuestion as u,guidedTopupItems as d,helpText as f,knownWorld as p,matchingPreset as m,minedResources as h,minerMarks as ee,nodePresets as g,nodeYield as _,powerOptions as v,presetPurities as te,presetSurvey as ne,purities as re,purities3 as ie,resourceDefaults as ae,resourcePool as oe,richShape as se,startingSurvey as ce,storageOptions as le,storageRateFor as ue,tutorialKeys as de,wantsStorage as fe,wellYield as pe}from"./preferences.js";import{adaEncore as me,adaFault as he,adaRemarks as ge}from"./ada.js";import{progression as _e}from"./progression.js";import{bayCapacity as ve,bayOfSlot as ye,carryOptions as be,pickedRecipeUnlocks as xe,slotPosition as Se}from"./state.js";var Ce=new URL(`.`,``+import.meta.url),we=class extends String{},y=e=>e instanceof we?e:new we(e??``),Te=new WeakMap;function Ee(e){let t=Te.get(e);return t||(t=e.join(`\0`).replace(/\s*\n\s*(\/?>)/g,`$1`).replace(/(<(?:textarea|pre)\b[^>]*>)[ \t]*\n/g,`$1`).replace(/^\s*\n\s*|\s*\n\s*$/g,``).replace(/\s*\n\s*/g,` `).split(`\0`),Te.set(e,t)),t}function De(e){return e==null||e===!1?``:e instanceof we?e.toString():Array.isArray(e)?e.map(De).join(``):Oe(e)}function b(e,...t){let n=Ee(e),r=n[0];for(let e=0;e<t.length;e++)r+=De(t[e])+n[e+1];return new we(r)}var x=e=>document.querySelector(e),Oe=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),S=e=>Number(e||0).toLocaleString(void 0,{maximumFractionDigits:2}),ke=e=>Number(e||0).toLocaleString(void 0,{maximumFractionDigits:3}),Ae=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``),je=(e,t)=>S(e)+` `+t+(e===1?``:`s`);function C(e,t,n){return b`<div class="stat">
    <span class="eyebrow">${e}</span><strong>${t}</strong><small>${n}</small>
  </div>`}var w=e=>e?b`<img
        class="item-icon"
        src="./icons/${Ae(String(e).replace(/\s*\([^)]*\)\s*$/,``))}.png"
        width="42"
        height="42"
        loading="lazy"
        alt=""
      />`:``;function Me(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var T={},Ne=[],Pe=()=>{},Fe=()=>!1,Ie=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Le=e=>e.startsWith(`onUpdate:`),Re=Object.assign,ze=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},Be=Object.prototype.hasOwnProperty,E=(e,t)=>Be.call(e,t),D=Array.isArray,Ve=e=>qe(e)===`[object Map]`,He=e=>qe(e)===`[object Set]`,Ue=e=>qe(e)===`[object Date]`,O=e=>typeof e==`function`,k=e=>typeof e==`string`,We=e=>typeof e==`symbol`,A=e=>typeof e==`object`&&!!e,Ge=e=>(A(e)||O(e))&&O(e.then)&&O(e.catch),Ke=Object.prototype.toString,qe=e=>Ke.call(e),Je=e=>qe(e).slice(8,-1),Ye=e=>qe(e)===`[object Object]`,Xe=e=>k(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,Ze=Me(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),Qe=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},$e=/-\w/g,et=Qe(e=>e.replace($e,e=>e.slice(1).toUpperCase())),tt=/\B([A-Z])/g,nt=Qe(e=>e.replace(tt,`-$1`).toLowerCase()),rt=Qe(e=>e.charAt(0).toUpperCase()+e.slice(1)),it=Qe(e=>e?`on${rt(e)}`:``),at=(e,t)=>!Object.is(e,t),ot=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},st=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ct=e=>{let t=parseFloat(e);return isNaN(t)?e:t},lt,ut=()=>lt||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function dt(e){if(D(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=k(r)?ht(r):dt(r);if(i)for(let e in i)t[e]=i[e]}return t}if(k(e)||A(e))return e}var ft=/;(?![^(]*\))/g,pt=/:([^]+)/,mt=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ht(e){let t={};return e.replace(mt,e=>e.startsWith(`/*`)?``:e).split(ft).forEach(e=>{if(e){let n=e.split(pt);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function gt(e){let t=``;if(k(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){let r=gt(e[n]);r&&(t+=r+` `)}else if(A(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var _t=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,vt=Me(_t);_t+``;function yt(e){return!!e||e===``}function bt(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=wt(e[i],t[i],n);return r}function xt(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&wt(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function St(e,t,n){let r=Ve(e),i=Ve(t);if(r||i||(r=He(e),i=He(t),r||i))return r&&i?xt(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!wt(e[r],t[r],n))return!1}return String(e)===String(t)}function Ct(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function wt(e,t,n){if(e===t)return!0;let r=Ue(e),i=Ue(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=We(e),i=We(t),r||i?e===t:(r=D(e),i=D(t),r||i?r&&i?Ct(e,t,n,bt):!1:(r=A(e),i=A(t),r||i?!r||!i?!1:Ct(e,t,n,St):String(e)===String(t))))}var Tt=e=>!!(e&&e.__v_isRef===!0),j=e=>k(e)?e:e==null?``:D(e)||A(e)&&(e.toString===Ke||!O(e.toString))?Tt(e)?j(e.value):JSON.stringify(e,Et,2):String(e),Et=(e,t)=>Tt(t)?Et(e,t.value):Ve(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Dt(t,r)+` =>`]=n,e),{})}:He(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Dt(e))}:We(t)?Dt(t):A(t)&&!D(t)&&!Ye(t)?String(t):t,Dt=(e,t=``)=>We(e)?`Symbol(${e.description??t})`:e,M,Ot=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&M&&(M.active?(this.parent=M,this.index=(M.scopes||(M.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=M;try{return M=this,e()}finally{M=t}}}on(){++this._on===1&&(this.prevScope=M,M=this)}off(){if(this._on>0&&--this._on===0){if(M===this)M=this.prevScope;else{let e=M;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function kt(){return M}var N,At=new WeakSet,jt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,M&&(M.active?M.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,At.has(this)&&(At.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ft(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jt(this),Rt(this);let e=N,t=Wt;N=this,Wt=!0;try{return this.fn()}finally{zt(this),N=e,Wt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ht(e);this.deps=this.depsTail=void 0,Jt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?At.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bt(this)&&this.run()}get dirty(){return Bt(this)}},Mt=0,Nt,Pt;function Ft(e,t=!1){if(e.flags|=8,t){e.next=Pt,Pt=e;return}e.next=Nt,Nt=e}function It(){Mt++}function Lt(){if(--Mt>0)return;if(Pt){let e=Pt;for(Pt=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Nt;){let t=Nt;for(Nt=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Rt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zt(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ht(r),Ut(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Bt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vt(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vt(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Yt)||(e.globalVersion=Yt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Bt(e))))return;e.flags|=2;let t=e.dep,n=N,r=Wt;N=e,Wt=!0;try{Rt(e);let n=e.fn(e._value);(t.version===0||at(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{N=n,Wt=r,zt(e),e.flags&=-3}}function Ht(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ht(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ut(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Wt=!0,Gt=[];function Kt(){Gt.push(Wt),Wt=!1}function qt(){let e=Gt.pop();Wt=e===void 0||e}function Jt(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=N;N=void 0;try{t()}finally{N=e}}}var Yt=0,Xt=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Zt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!N||!Wt||N===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==N)t=this.activeLink=new Xt(N,this),N.deps?(t.prevDep=N.depsTail,N.depsTail.nextDep=t,N.depsTail=t):N.deps=N.depsTail=t,Qt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=N.depsTail,t.nextDep=void 0,N.depsTail.nextDep=t,N.depsTail=t,N.deps===t&&(N.deps=e)}return t}trigger(e){this.version++,Yt++,this.notify(e)}notify(e){It();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Lt()}}};function Qt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Qt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var $t=new WeakMap,en=Symbol(``),tn=Symbol(``),nn=Symbol(``);function rn(e,t,n){if(Wt&&N){let t=$t.get(e);t||$t.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Zt),r.map=t,r.key=n),r.track()}}function an(e,t,n,r,i,a){let o=$t.get(e);if(!o){Yt++;return}let s=e=>{e&&e.trigger()};if(It(),t===`clear`)o.forEach(s);else{let i=D(e),a=i&&Xe(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===nn||!We(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(nn)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(en)),Ve(e)&&s(o.get(tn)));break;case`delete`:i||(s(o.get(en)),Ve(e)&&s(o.get(tn)));break;case`set`:Ve(e)&&s(o.get(en))}}Lt()}function on(e){let t=P(e);return t===e||(rn(t,`iterate`,nn),Gn(e))?t:Wn(e)?Un(e)?t.map(e=>Yn(Jn(e))):t.map(Yn):t.map(Jn)}function sn(e){return rn(e=P(e),`iterate`,nn),e}function cn(e,t){return Wn(e)?Yn(Un(e)?Jn(t):t):Jn(t)}var ln={__proto__:null,[Symbol.iterator](){return un(this,Symbol.iterator,e=>cn(this,e))},concat(...e){return on(this).concat(...e.map(e=>D(e)?on(e):e))},entries(){return un(this,`entries`,e=>(e[1]=cn(this,e[1]),e))},every(e,t){return fn(this,`every`,e,t,void 0,arguments)},filter(e,t){return fn(this,`filter`,e,t,e=>e.map(e=>cn(this,e)),arguments)},find(e,t){return fn(this,`find`,e,t,e=>cn(this,e),arguments)},findIndex(e,t){return fn(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return fn(this,`findLast`,e,t,e=>cn(this,e),arguments)},findLastIndex(e,t){return fn(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return fn(this,`forEach`,e,t,void 0,arguments)},includes(...e){return mn(this,`includes`,e)},indexOf(...e){return mn(this,`indexOf`,e)},join(e){return on(this).join(e)},lastIndexOf(...e){return mn(this,`lastIndexOf`,e)},map(e,t){return fn(this,`map`,e,t,void 0,arguments)},pop(){return hn(this,`pop`)},push(...e){return hn(this,`push`,e)},reduce(e,...t){return pn(this,`reduce`,e,t)},reduceRight(e,...t){return pn(this,`reduceRight`,e,t)},shift(){return hn(this,`shift`)},some(e,t){return fn(this,`some`,e,t,void 0,arguments)},splice(...e){return hn(this,`splice`,e)},toReversed(){return on(this).toReversed()},toSorted(e){return on(this).toSorted(e)},toSpliced(...e){return on(this).toSpliced(...e)},unshift(...e){return hn(this,`unshift`,e)},values(){return un(this,`values`,e=>cn(this,e))}};function un(e,t,n){let r=sn(e),i=r[t]();return r!==e&&!Gn(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var dn=Array.prototype;function fn(e,t,n,r,i,a){let o=sn(e),s=o!==e&&!Gn(e),c=o[t];if(c!==dn[t]){let t=c.apply(e,a);return s?Jn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,cn(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function pn(e,t,n,r){let i=sn(e),a=i!==e&&!Gn(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=cn(e,t)),n.call(this,t,cn(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?cn(e,c):c}function mn(e,t,n){let r=P(e);rn(r,`iterate`,nn);let i=r[t](...n);return(i===-1||i===!1)&&Kn(n[0])?(n[0]=P(n[0]),r[t](...n)):i}function hn(e,t,n=[]){Kt(),It();let r=P(e)[t].apply(e,n);return Lt(),qt(),r}var gn=Me(`__proto__,__v_isRef,__isVue`),_n=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(We));function vn(e){We(e)||(e=String(e));let t=P(this);return rn(t,`has`,e),t.hasOwnProperty(e)}var yn=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ln:In:i?Fn:Pn).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=D(e);if(!r){let e;if(a&&(e=ln[t]))return e;if(t===`hasOwnProperty`)return vn}let o=Reflect.get(e,t,Xn(e)?e:n);if((We(t)?_n.has(t):gn(t))||(r||rn(e,`get`,t),i))return o;if(Xn(o)){let e=a&&Xe(t)?o:o.value;return r&&A(e)?Vn(e):e}return A(o)?r?Vn(o):zn(o):o}},bn=class extends yn{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=D(e)&&Xe(t);if(!this._isShallow){let e=Wn(i);if(!Gn(n)&&!Wn(n)&&(i=P(i),n=P(n)),!a&&Xn(i)&&!Xn(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:E(e,t),s=Reflect.set(e,t,n,Xn(e)?e:r);return e===P(r)&&s&&(o?at(n,i)&&an(e,`set`,t,n,i):an(e,`add`,t,n)),s}deleteProperty(e,t){let n=E(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&an(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!We(t)||!_n.has(t))&&rn(e,`has`,t),n}ownKeys(e){return rn(e,`iterate`,D(e)?`length`:en),Reflect.ownKeys(e)}},xn=class extends yn{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Sn=new bn,Cn=new xn,wn=new bn(!0),Tn=e=>e,En=e=>Reflect.getPrototypeOf(e);function Dn(e,t,n){return function(...r){let i=this.__v_raw,a=P(i),o=Ve(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?Tn:t?Yn:Jn;return!t&&rn(a,`iterate`,c?tn:en),Re(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function On(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function kn(e,t){let n={get(n){let r=this.__v_raw,i=P(r),a=P(n);e||(at(n,a)&&rn(i,`get`,n),rn(i,`get`,a));let{has:o}=En(i),s=t?Tn:e?Yn:Jn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&rn(P(t),`iterate`,en),t.size},has(t){let n=this.__v_raw,r=P(n),i=P(t);return e||(at(t,i)&&rn(r,`has`,t),rn(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=P(a),s=t?Tn:e?Yn:Jn;return!e&&rn(o,`iterate`,en),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return Re(n,e?{add:On(`add`),set:On(`set`),delete:On(`delete`),clear:On(`clear`)}:{add(e){let n=P(this),r=En(n),i=P(e),a=!t&&!Gn(e)&&!Wn(e)?i:e;return r.has.call(n,a)||at(e,a)&&r.has.call(n,e)||at(i,a)&&r.has.call(n,i)||(n.add(a),an(n,`add`,a,a)),this},set(e,n){!t&&!Gn(n)&&!Wn(n)&&(n=P(n));let r=P(this),{has:i,get:a}=En(r),o=i.call(r,e);o||=(e=P(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?at(n,s)&&an(r,`set`,e,n,s):an(r,`add`,e,n),this},delete(e){let t=P(this),{has:n,get:r}=En(t),i=n.call(t,e);i||=(e=P(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&an(t,`delete`,e,void 0,a),o},clear(){let e=P(this),t=e.size!==0,n=e.clear();return t&&an(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Dn(r,e,t)}),n}function An(e,t){let n=kn(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(E(n,r)&&r in t?n:t,r,i)}var jn={get:An(!1,!1)},Mn={get:An(!1,!0)},Nn={get:An(!0,!1)},Pn=new WeakMap,Fn=new WeakMap,In=new WeakMap,Ln=new WeakMap;function Rn(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function zn(e){return Wn(e)?e:Hn(e,!1,Sn,jn,Pn)}function Bn(e){return Hn(e,!1,wn,Mn,Fn)}function Vn(e){return Hn(e,!0,Cn,Nn,In)}function Hn(e,t,n,r,i){if(!A(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Rn(Je(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Un(e){return Wn(e)?Un(e.__v_raw):!!(e&&e.__v_isReactive)}function Wn(e){return!!(e&&e.__v_isReadonly)}function Gn(e){return!!(e&&e.__v_isShallow)}function Kn(e){return e?!!e.__v_raw:!1}function P(e){let t=e&&e.__v_raw;return t?P(t):e}function qn(e){return!E(e,`__v_skip`)&&Object.isExtensible(e)&&st(e,`__v_skip`,!0),e}var Jn=e=>A(e)?zn(e):e,Yn=e=>A(e)?Vn(e):e;function Xn(e){return e?e.__v_isRef===!0:!1}function Zn(e){return Qn(e,!1)}function Qn(e,t){return Xn(e)?e:new $n(e,t)}var $n=class{constructor(e,t){this.dep=new Zt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:P(e),this._value=t?e:Jn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Gn(e)||Wn(e);e=n?e:P(e),at(e,t)&&(this._rawValue=e,this._value=n?e:Jn(e),this.dep.trigger())}};function er(e){return Xn(e)?e.value:e}var tr={get:(e,t,n)=>t===`__v_raw`?e:er(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Xn(i)&&!Xn(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function nr(e){return Un(e)?e:new Proxy(e,tr)}var rr=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&N!==this)return Ft(this,!0),!0}get value(){let e=this.dep.track();return Vt(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function ir(e,t,n=!1){let r,i;return O(e)?r=e:(r=e.get,i=e.set),new rr(r,i,n)}var ar={},or=new WeakMap,sr=void 0;function cr(e,t=!1,n=sr){if(n){let t=or.get(n);t||or.set(n,t=[]),t.push(e)}}function lr(e,t,n=T){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:Gn(e)||i===!1||i===0?ur(e,1):ur(e),u,d,f,p,m=!1,h=!1;if(Xn(e)?(d=()=>e.value,m=Gn(e)):Un(e)?(d=()=>l(e),m=!0):D(e)?(h=!0,m=e.some(e=>Un(e)||Gn(e)),d=()=>e.map(e=>{if(Xn(e))return e.value;if(Un(e))return l(e);if(O(e))return c?c(e,2):e()})):d=O(e)?t?c?()=>c(e,2):e:()=>{if(f){Kt();try{f()}finally{qt()}}let t=sr;sr=u;try{return c?c(e,3,[p]):e(p)}finally{sr=t}}:Pe,t&&i){let e=d,t=i===!0?1/0:i;d=()=>ur(e(),t)}let ee=kt(),g=()=>{u.stop(),ee&&ee.active&&ze(ee.effects,u)};if(a&&t){let e=t;t=(...t)=>{let n=e(...t);return g(),n}}let _=h?Array(e.length).fill(ar):ar,v=e=>{if(u.flags&1&&(u.dirty||e)){if(t){let n=u.run();if(e||i||m||(h?n.some((e,t)=>at(e,_[t])):at(n,_))){f&&f();let e=sr;sr=u;try{let e=[n,_===ar?void 0:h&&_[0]===ar?[]:_,p];_=n,c?c(t,3,e):t(...e)}finally{sr=e}}}else u.run()}};return s&&s(v),u=new jt(d),u.scheduler=o?()=>o(v,!1):v,p=e=>cr(e,!1,u),f=u.onStop=()=>{let e=or.get(u);if(e){if(c)c(e,4);else for(let t of e)t();or.delete(u)}},t?r?v(!0):_=u.run():o?o(v.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function ur(e,t=1/0,n){if(t<=0||!A(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Xn(e))ur(e.value,t,n);else if(D(e))for(let r=0;r<e.length;r++)ur(e[r],t,n);else if(He(e)||Ve(e))e.forEach(e=>{ur(e,t,n)});else if(Ye(e)){for(let r in e)ur(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ur(e[r],t,n)}return e}function dr(e,t,n,r){try{return r?e(...r):e()}catch(e){pr(e,t,n)}}function fr(e,t,n,r){if(O(e)){let i=dr(e,t,n,r);return i&&Ge(i)&&i.catch(e=>{pr(e,t,n)}),i}if(D(e)){let i=[];for(let a=0;a<e.length;a++)i.push(fr(e[a],t,n,r));return i}}function pr(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||T;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){Kt(),dr(a,null,10,[e,i,o]),qt();return}}mr(e,n,i,r,o)}function mr(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var hr=[],gr=-1,_r=[],vr=null,yr=0,br=Promise.resolve(),xr=null;function Sr(e){let t=xr||br;return e?t.then(this?e.bind(this):e):t}function Cr(e){let t=gr+1,n=hr.length;for(;t<n;){let r=t+n>>>1,i=hr[r],a=kr(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function wr(e){if(!(e.flags&1)){let t=kr(e),n=hr[hr.length-1];!n||!(e.flags&2)&&t>=kr(n)?hr.push(e):hr.splice(Cr(t),0,e),e.flags|=1,Tr()}}function Tr(){xr||=br.then(Ar)}function Er(e){if(!D(e))vr&&e.id===-1?vr.splice(yr+1,0,e):e.flags&1||(_r.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)_r.push(e[t]);Tr()}function Dr(e,t,n=gr+1){for(;n<hr.length;n++){let t=hr[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;hr.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Or(e){if(_r.length){let e=[...new Set(_r)].sort((e,t)=>kr(e)-kr(t));if(_r.length=0,vr){for(let t=0;t<e.length;t++)vr.push(e[t]);return}for(vr=e,yr=0;yr<vr.length;yr++){let e=vr[yr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}vr=null,yr=0}}var kr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ar(e){try{for(gr=0;gr<hr.length;gr++){let e=hr[gr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),dr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gr<hr.length;gr++){let e=hr[gr];e&&(e.flags&=-2)}gr=-1,hr.length=0,Or(e),xr=null,(hr.length||_r.length)&&Ar(e)}}var jr=null,Mr=null;function Nr(e){let t=jr;return jr=e,Mr=e&&e.type.__scopeId||null,t}function Pr(e,t=jr,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ua(-1);let i=Nr(t),a=za.length,o;try{o=e(...n)}finally{for(let e=za.length;e>a;e--)Va();Nr(i),r._d&&Ua(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fr(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Kt(),fr(c,n,8,[e.el,s,e,t]),qt())}}function Ir(e,t){if(lo){let n=lo.provides,r=lo.parent&&lo.parent.provides;r===n&&(n=lo.provides=Object.create(r)),n[e]=t}}function Lr(e,t,n=!1){let r=uo();if(r||Ki){let i=Ki?Ki._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&O(t)?t.call(r&&r.proxy):t}}var Rr=Symbol.for(`v-scx`),zr=()=>Lr(Rr);function Br(e,t,n){return Vr(e,t,n)}function Vr(e,t,n=T){let{immediate:r,deep:i,flush:a,once:o}=n,s=Re({},n),c=t&&r||!t&&a!==`post`,l;if(_o){if(a===`sync`){let e=zr();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=Pe,e.resume=Pe,e.pause=Pe,e}}let u=lo;s.call=(e,t,n)=>fr(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{Ca(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():wr(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=lr(e,t,s);return _o&&(l?l.push(f):c&&f()),f}function Hr(e,t,n){let r=this.proxy,i=k(e)?e.includes(`.`)?Ur(r,e):()=>r[e]:e.bind(r,r),a;O(t)?a=t:(a=t.handler,n=t);let o=mo(this),s=Vr(i,a.bind(r),n);return o(),s}function Ur(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Wr=Symbol(`_vte`),Gr=e=>e.__isTeleport,Kr=Symbol(`_leaveCb`);function qr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==La){t=n;break}}return t}function Jr(e){if(!ni(e))return Gr(e.type)&&e.children?qr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&O(n.default))return n.default()}}function Yr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Yr(Gr(n.type)&&Jr(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Xr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Zr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Qr=new WeakMap;function $r(e,t,n,r,i=!1){if(D(e)){e.forEach((e,a)=>$r(e,t&&(D(t)?t[a]:t),n,r,i));return}if(ti(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&$r(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?wo(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===T?s.refs={}:s.refs,d=s.setupState,f=P(d),p=d===T?Fe:e=>!Zr(u,e)&&E(f,e),m=(e,t)=>!(t&&Zr(u,t));if(l!=null&&l!==c){if(ei(t),k(l))u[l]=null,p(l)&&(d[l]=null);else if(Xn(l)){let e=t;m(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(O(c))dr(c,s,12,[o,u]);else{let t=k(c),r=Xn(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:m(c)||!e.k?c.value:u[e.k];if(i)D(n)&&ze(n,a);else if(D(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];m(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(m(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),Qr.delete(e)};t.id=-1,Qr.set(e,t),Ca(t,n)}else ei(e),s()}}}function ei(e){let t=Qr.get(e);t&&(t.flags|=8,Qr.delete(e))}ut().requestIdleCallback,ut().cancelIdleCallback;var ti=e=>!!e.type.__asyncLoader,ni=e=>e.type.__isKeepAlive;function ri(e,t){ai(e,`a`,t)}function ii(e,t){ai(e,`da`,t)}function ai(e,t,n=lo){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(si(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ni(e.parent.vnode)&&oi(r,t,n,e),e=e.parent}}function oi(e,t,n,r){let i=si(t,e,r,!0);mi(()=>{ze(r[t],i)},n)}function si(e,t,n=lo,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Kt();let i=mo(n),a=fr(t,n,e,r);return i(),qt(),a};return r?i.unshift(a):i.push(a),a}}var ci=e=>(t,n=lo)=>{(!_o||e===`sp`)&&si(e,(...e)=>t(...e),n)},li=ci(`bm`),ui=ci(`m`),di=ci(`bu`),fi=ci(`u`),pi=ci(`bum`),mi=ci(`um`),hi=ci(`sp`),gi=ci(`rtg`),_i=ci(`rtc`);function vi(e,t=lo){si(`ec`,e,t)}var yi=Symbol.for(`v-ndc`);function bi(e,t,n,r){let i,a=n&&n[r],o=D(e);if(o||k(e)){let n=o&&Un(e),r=!1,s=!1;n&&(r=!Gn(e),s=Wn(e),e=sn(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Yn(Jn(e[n])):Jn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(A(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function xi(e,t,n,r,i,a){if(n??={},jr.ce||jr.parent&&ti(jr.parent)&&jr.parent.ce){let e=a!=null&&n.key==null?Re({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),I(),Ga(F,null,[z(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let s=za.length;I();let c;try{let i=o&&Si(o(n)),s=n.key||a||i&&i.key;c=Ga(F,{key:(s&&!We(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=za.length;e>s;e--)Va();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),c}function Si(e){return e.some(e=>!Ka(e)||!(e.type===La||e.type===F&&!Si(e.children)))?e:null}var Ci=e=>e?go(e)?wo(e):Ci(e.parent):null,wi=Re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ci(e.parent),$root:e=>Ci(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ni(e),$forceUpdate:e=>e.f||=()=>{wr(e.update)},$nextTick:e=>e.n||=Sr.bind(e.proxy),$watch:e=>Hr.bind(e)}),Ti=(e,t)=>e!==T&&!e.__isScriptSetup&&E(e,t),Ei={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Ti(r,t))return o[t]=1,r[t];else if(i!==T&&E(i,t))return o[t]=2,i[t];else if(E(a,t))return o[t]=3,a[t];else if(n!==T&&E(n,t))return o[t]=4,n[t];else Oi&&(o[t]=0)}let l=wi[t],u,d;if(l)return t===`$attrs`&&rn(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==T&&E(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,E(d,t))return d[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Ti(i,t)?(i[t]=n,!0):r!==T&&E(r,t)?(r[t]=n,!0):E(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==T&&s[0]!==`$`&&E(e,s)||Ti(t,s)||E(a,s)||E(r,s)||E(wi,s)||E(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?E(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Di(e){return D(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Oi=!0;function ki(e){let t=Ni(e),n=e.proxy,r=e.ctx;Oi=!1,t.beforeCreate&&ji(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:ee,beforeDestroy:g,beforeUnmount:_,destroyed:v,unmounted:te,render:ne,renderTracked:re,renderTriggered:ie,errorCaptured:ae,serverPrefetch:oe,expose:se,inheritAttrs:ce,components:le,directives:ue,filters:de}=t;if(l&&Ai(l,r,null),o)for(let e in o){let t=o[e];O(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);A(t)&&(e.data=zn(t))}if(Oi=!0,a)for(let e in a){let t=a[e],i=Eo({get:O(t)?t.bind(n,n):O(t.get)?t.get.bind(n,n):Pe,set:!O(t)&&O(t.set)?t.set.bind(n):Pe});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)Mi(s[e],r,n,e);if(c){let e=O(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Ir(t,e[t])})}u&&ji(u,e,`c`);function fe(e,t){D(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(fe(li,d),fe(ui,f),fe(di,p),fe(fi,m),fe(ri,h),fe(ii,ee),fe(vi,ae),fe(_i,re),fe(gi,ie),fe(pi,_),fe(mi,te),fe(hi,oe),D(se)){if(se.length){let t=e.exposed||={};se.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}ne&&e.render===Pe&&(e.render=ne),ce!=null&&(e.inheritAttrs=ce),le&&(e.components=le),ue&&(e.directives=ue),oe&&Xr(e)}function Ai(e,t,n=Pe){D(e)&&(e=Ri(e));for(let n in e){let r=e[n],i;i=A(r)?`default`in r?Lr(r.from||n,r.default,!0):Lr(r.from||n):Lr(r),Xn(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function ji(e,t,n){fr(D(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mi(e,t,n,r){let i=r.includes(`.`)?Ur(n,r):()=>n[r];if(k(e)){let n=t[e];O(n)&&Br(i,n)}else if(O(e))Br(i,e.bind(n));else if(A(e)){if(D(e))e.forEach(e=>Mi(e,t,n,r));else{let r=O(e.handler)?e.handler.bind(n):t[e.handler];O(r)&&Br(i,r,e)}}}function Ni(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Pi(c,e,o,!0)),Pi(c,t,o)),A(t)&&a.set(t,c),c}function Pi(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Pi(e,a,n,!0),i&&i.forEach(t=>Pi(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Fi[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Fi={data:Ii,props:Vi,emits:Vi,methods:Bi,computed:Bi,beforeCreate:zi,created:zi,beforeMount:zi,mounted:zi,beforeUpdate:zi,updated:zi,beforeDestroy:zi,beforeUnmount:zi,destroyed:zi,unmounted:zi,activated:zi,deactivated:zi,errorCaptured:zi,serverPrefetch:zi,components:Bi,directives:Bi,watch:Hi,provide:Ii,inject:Li};function Ii(e,t){return t?e?function(){return Re(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Li(e,t){return Bi(Ri(e),Ri(t))}function Ri(e){if(D(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function zi(e,t){return e?[...new Set([].concat(e,t))]:t}function Bi(e,t){return e?Re(Object.create(null),e,t):t}function Vi(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:Re(Object.create(null),Di(e),Di(t??{})):t}function Hi(e,t){if(!e)return t;if(!t)return e;let n=Re(Object.create(null),e);for(let r in t)n[r]=zi(e[r],t[r]);return n}function Ui(){return{app:null,config:{isNativeTag:Fe,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Wi=0;function Gi(e,t){return function(n,r=null){O(n)||(n=Re({},n)),r!=null&&!A(r)&&(r=null);let i=Ui(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Wi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Do,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&O(e.install)?(a.add(e),e.install(c,...t)):O(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||z(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,wo(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(fr(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Ki;Ki=c;try{return e()}finally{Ki=t}}};return c}}var Ki=null,qi=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${et(t)}Modifiers`]||e[`${nt(t)}Modifiers`];function Ji(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||T,i=n,a=t.startsWith(`update:`),o=a&&qi(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>k(e)?e.trim():e)),o.number&&(i=i.map(ct)));let s,c=r[s=it(t)]||r[s=it(et(t))];!c&&a&&(c=r[s=it(nt(t))]),c&&fr(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,fr(l,e,6,i)}}var Yi=new WeakMap;function Xi(e,t,n=!1){let r=n?Yi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!O(e)){let r=e=>{let n=Xi(e,t,!0);n&&(s=!0,Re(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(A(e)&&r.set(e,null),null):(D(a)?a.forEach(e=>o[e]=null):Re(o,a),A(e)&&r.set(e,o),o)}function Zi(e,t){return!e||!Ie(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),E(e,t[0].toLowerCase()+t.slice(1))||E(e,nt(t))||E(e,t))}function Qi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,ee=Nr(e),g,_;try{if(n.shapeFlag&4){let e=i||r,t=e;g=to(l.call(t,e,u,d,p,f,m)),_=s}else{let e=t;g=to(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),_=t.props?s:$i(s)}}catch(t){za.length=0,pr(t,e,1),g=z(La)}let v=g;if(_&&h!==!1){let e=Object.keys(_),{shapeFlag:t}=v;e.length&&t&7&&(a&&e.some(Le)&&(_=ea(_,a)),v=Qa(v,_,!1,!0))}return n.dirs&&(v=Qa(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Yr(Gr(v.type)&&Jr(v)||v,n.transition),g=v,Nr(ee),g}var $i=e=>{let t;for(let n in e)(n===`class`||n===`style`||Ie(n))&&((t||={})[n]=e[n]);return t},ea=(e,t)=>{let n={};for(let r in e)(!Le(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ta(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?na(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(ra(o,r,n)&&!Zi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||na(r,o,l):!!o;return!1}function na(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(ra(t,e,a)&&!Zi(n,a))return!0}return!1}function ra(e,t,n){let r=e[n],i=t[n];return n===`style`&&A(r)&&A(i)?!wt(r,i):r!==i}function ia({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var aa={},oa=()=>Object.create(aa),sa=e=>Object.getPrototypeOf(e)===aa;function ca(e,t,n,r=!1){let i={},a=oa();e.propsDefaults=Object.create(null),ua(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Bn(i):e.type.props?i:a,e.attrs=a}function la(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=P(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Zi(e.emitsOptions,o))continue;let u=t[o];if(c){if(E(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=et(o);i[t]=da(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{ua(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!E(t,a)&&((r=nt(a))===a||!E(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=da(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!E(t,e))&&(delete a[e],l=!0)}l&&an(e.attrs,`set`,``)}function ua(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(Ze(c))continue;let l=t[c],u;i&&E(i,u=et(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:Zi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=P(n),r=s||T;for(let o=0;o<a.length;o++){let s=a[o];n[s]=da(i,t,s,r[s],e,!E(r,s))}}return o}function da(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=E(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&O(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=mo(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===nt(n))&&(r=!0))}return r}var fa=new WeakMap;function pa(e,t,n=!1){let r=n?fa:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!O(e)){let r=e=>{c=!0;let[n,r]=pa(e,t,!0);Re(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return A(e)&&r.set(e,Ne),Ne;if(D(a))for(let e=0;e<a.length;e++){let t=et(a[e]);ma(t)&&(o[t]=T)}else if(a)for(let e in a){let t=et(e);if(ma(t)){let n=a[e],r=o[t]=D(n)||O(n)?{type:n}:Re({},n),i=r.type,c=!1,l=!0;if(D(i))for(let e=0;e<i.length;++e){let t=i[e],n=O(t)&&t.name;if(n===`Boolean`){c=!0;break}n===`String`&&(l=!1)}else c=O(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||E(r,`default`))&&s.push(t)}}let l=[o,s];return A(e)&&r.set(e,l),l}function ma(e){return e[0]!==`$`&&!Ze(e)}var ha=e=>e===`_`||e===`_ctx`||e===`$stable`,ga=e=>D(e)?e.map(to):[to(e)],_a=(e,t,n)=>{if(t._n)return t;let r=Pr((...e)=>ga(t(...e)),n);return r._c=!1,r},va=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ha(n))continue;let i=e[n];if(O(i))t[n]=_a(n,i,r);else if(i!=null){let e=ga(i);t[n]=()=>e}}},ya=(e,t)=>{let n=ga(t);e.slots.default=()=>n},ba=(e,t,n)=>{for(let r in t)(n||!ha(r))&&(e[r]=t[r])},xa=(e,t,n)=>{let r=e.slots=oa();if(e.vnode.shapeFlag&32){let e=t._;e?(ba(r,t,n),n&&st(r,`_`,e,!0)):va(t,r)}else t&&ya(e,t)},Sa=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=T;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:ba(i,t,n):(a=!t.$stable,va(t,i)),o=t}else t&&(ya(e,t),o={default:1});if(a)for(let e in i)!ha(e)&&o[e]==null&&delete i[e]},Ca=Fa;function wa(e){return Ta(e)}function Ta(e,t){let n=ut();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Pe,insertStaticContent:m}=e,h=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!qa(e,t)&&(r=we(e),ye(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===Ne&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ia:ee(e,t,n,r);break;case La:g(e,t,n,r);break;case Ra:e??_(t,n,r,o);break;case F:le(e,t,n,r,i,a,o,s,c);break;default:d&1?ne(e,t,n,r,i,a,o,s,c):d&6?ue(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Ee)}u!=null&&i?$r(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&$r(e.ref,null,a,e,!0)},ee=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},g=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},v=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},te=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},ne=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)re(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),oe(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},re=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:ee,dirs:g}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&ae(e.children,f,null,i,s,Ea(e,c),l,d),g&&Fr(e,null,i,`created`),ie(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!Ze(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&ao(p,i,e)}g&&Fr(e,null,i,`beforeMount`);let _=Oa(s,ee);_&&ee.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||_||g)&&Ca(()=>{try{p&&ao(p,i,e),_&&ee.enter(f),g&&Fr(e,null,i,`mounted`)}finally{}},s)},ie=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||Pa(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ie(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ae=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?no(e[l]):to(e[l]);h(null,c,t,n,r,i,a,o,s)}},oe=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||T,m=t.props||T,h;if(n&&Da(n,!1),(h=m.onVnodeBeforeUpdate)&&ao(h,n,t,e),f&&Fr(t,e,n,`beforeUpdate`),n&&Da(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(l=0,s=!1,d=null),(p.innerHTML&&m.innerHTML==null||p.textContent&&m.textContent==null)&&u(c,``),d?se(e.dynamicChildren,d,c,n,r,Ea(t,i),o):s||he(e,t,c,null,n,r,Ea(t,i),o,!1),l>0){if(l&16)ce(c,p,m,n,i);else if(l&2&&p.class!==m.class&&a(c,`class`,null,m.class,i),l&4&&a(c,`style`,p.style,m.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=m[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else!s&&d==null&&ce(c,p,m,n,i);((h=m.onVnodeUpdated)||f)&&Ca(()=>{h&&ao(h,n,t,e),f&&Fr(t,e,n,`updated`)},r)},se=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===F||!qa(c,l)||c.shapeFlag&198)?d(c.el):n;h(c,l,u,null,r,i,a,o,!0)}},ce=(e,t,n,r,i)=>{if(t!==n){if(t!==T)for(let o in t)!Ze(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(Ze(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},le=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),ae(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(se(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&ka(e,t,!0)):he(e,t,n,f,a,o,c,l,u)},ue=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):de(t,n,r,i,a,o,c):fe(e,t,c)},de=(e,t,n,r,i,a,o)=>{let s=e.component=co(e,r,i);if(ni(e)&&(s.ctx.renderer=Ee),vo(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,pe,o),!e.el){let r=s.subTree=z(La);g(null,r,t,n),e.placeholder=r.el}}else pe(s,e,t,n,i,a,o)},fe=(e,t,n)=>{let r=t.component=e.component;if(ta(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,me(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},pe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=ja(e);if(n){t&&(t.el=c.el,me(e,t,o)),n.asyncDep.then(()=>{Ca(()=>{e.isUnmounted||l()},i)});return}}let u=t,f;Da(e,!1),t?(t.el=c.el,me(e,t,o)):t=c,n&&ot(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&ao(f,s,t,c),Da(e,!0);let p=Qi(e),m=e.subTree;e.subTree=p,h(m,p,d(m.el),we(m),e,i,a),t.el=p.el,u===null&&ia(e,p.el),r&&Ca(r,i),(f=t.props&&t.props.onVnodeUpdated)&&Ca(()=>ao(f,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=ti(t);if(Da(e,!1),l&&ot(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ao(o,d,t),Da(e,!0),s&&b){let t=()=>{e.subTree=Qi(e),b(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Qi(e);h(null,o,n,r,e,i,a),t.el=o.el}if(u&&Ca(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Ca(()=>ao(o,d,e),i)}(t.shapeFlag&256||d&&ti(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Ca(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new jt(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>wr(u),Da(e,!0),l()},me=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,la(e,t.props,r,n),Sa(e,t.children,n),Kt(),Dr(e),qt()},he=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){_e(l,f,n,r,i,a,o,s,c);return}if(p&256){ge(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&Ce(l,i,a),f!==l&&u(n,f)):d&16?m&16?_e(l,f,n,r,i,a,o,s,c):Ce(l,i,a,!0):(d&8&&u(n,``),m&16&&ae(f,n,r,i,a,o,s,c))},ge=(e,t,n,r,i,a,o,s,c)=>{e||=Ne,t||=Ne;let l=e.length,u=t.length,d=Math.min(l,u),f=0;for(;f<d;f++){let r=t[f]=c?no(t[f]):to(t[f]);h(e[f],r,n,null,i,a,o,s,c)}l>u?Ce(e,i,a,!0,!1,d):ae(t,n,r,i,a,o,s,c,d)},_e=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?no(t[l]):to(t[l]);if(qa(r,u))h(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?no(t[f]):to(t[f]);if(qa(r,l))h(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)h(null,t[l]=c?no(t[l]):to(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)ye(e[l],i,a,!0),l++;else{let p=l,m=l,ee=new Map;for(l=m;l<=f;l++){let e=t[l]=c?no(t[l]):to(t[l]);e.key!=null&&ee.set(e.key,l)}let g,_=0,v=f-m+1,te=!1,ne=0,re=Array(v);for(l=0;l<v;l++)re[l]=0;for(l=p;l<=d;l++){let r=e[l];if(_>=v){ye(r,i,a,!0);continue}let u;if(r.key!=null)u=ee.get(r.key);else for(g=m;g<=f;g++)if(re[g-m]===0&&qa(r,t[g])){u=g;break}u===void 0?ye(r,i,a,!0):(re[u-m]=l+1,u>=ne?ne=u:te=!0,h(r,t[u],n,null,i,a,o,s,c),_++)}let ie=te?Aa(re):Ne;for(g=ie.length-1,l=v-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||Na(f):r;re[l]===0?h(null,d,n,p,i,a,o,s,c):te&&(g<0||l!==ie[g]?ve(d,n,p,2):g--)}}},ve=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ve(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,Ee);return}if(c===F){r(s,t,n);for(let e=0;e<u.length;e++)ve(u[e],t,n,a);r(e.anchor,t,n);return}if(c===Ra){v(e,t,n);return}if(a!==2&&d&1&&l){if(a===0)l.persisted&&!s[Kr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),Ca(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[Kr];s._isLeaving&&s[Kr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}}else r(s,t,n)},ye=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(Kt(),$r(s,null,n,e,!0),qt()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,ee=!ti(e),g;if(ee&&(g=o&&o.onVnodeBeforeUnmount)&&ao(g,t,e),u&6)Se(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Fr(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ee,r):l&&!l.hasOnce&&(a!==F||d>0&&d&64)?Ce(l,t,n,!1,!0):(a===F&&d&384||!i&&u&16)&&Ce(c,t,n),r&&be(e)}let _=m!=null&&p==null;(ee&&(g=o&&o.onVnodeUnmounted)||h||_)&&Ca(()=>{g&&ao(g,t,e),h&&Fr(e,null,t,`unmounted`),_&&(e.el=null)},n)},be=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===F){xe(n,r);return}if(t===Ra){te(e),a&&!a.persisted&&a.afterLeave&&a.afterLeave();return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},xe=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},Se=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ma(c),Ma(l),r&&ot(r),i.stop(),a?(a.flags|=8,ye(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,ye(o,e,t,n)),s&&Ca(s,t),Ca(()=>{e.isUnmounted=!0},t)},Ce=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ye(e[o],t,n,r,i)},we=e=>{if(e.shapeFlag&6)return we(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[Wr];return n?f(n):t},y=!1,Te=(e,t,n)=>{let r;e==null?t._vnode&&(ye(t._vnode,null,null,!0),r=t._vnode.component):h(t._vnode||null,e,t,null,null,null,n),t._vnode=e,y||=(y=!0,Dr(r),Or(),!1)},Ee={p:h,um:ye,m:ve,r:be,mt:de,mc:ae,pc:he,pbc:se,n:we,o:e},De,b;return t&&([De,b]=t(Ee)),{render:Te,hydrate:De,createApp:Gi(Te,De)}}function Ea({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Da({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Oa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ka(e,t,n=!1){let r=e.children,i=t.children;if(D(r)&&D(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=no(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&ka(t,a)),a.type===Ia&&(a.patchFlag===-1&&(a=i[e]=no(a)),a.el=t.el),a.type===La&&!a.el&&(a.el=t.el)}}function Aa(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function ja(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ja(t)}function Ma(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Na(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Na(t.subTree):null}var Pa=e=>e.__isSuspense;function Fa(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Er(e)}var F=Symbol.for(`v-fgt`),Ia=Symbol.for(`v-txt`),La=Symbol.for(`v-cmt`),Ra=Symbol.for(`v-stc`),za=[],Ba=null;function I(e=!1){za.push(Ba=e?null:[])}function Va(){za.pop(),Ba=za[za.length-1]||null}var Ha=1;function Ua(e,t=!1){Ha+=e,e<0&&Ba&&t&&(Ba.hasOnce=!0)}function Wa(e){return e.dynamicChildren=Ha>0?Ba||Ne:null,Va(),Ha>0&&Ba&&Ba.push(e),e}function L(e,t,n,r,i,a){return Wa(R(e,t,n,r,i,a,!0))}function Ga(e,t,n,r,i){return Wa(z(e,t,n,r,i,!0))}function Ka(e){return e?e.__v_isVNode===!0:!1}function qa(e,t){return e.type===t.type&&e.key===t.key}var Ja=({key:e})=>e??null,Ya=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:k(e)||Xn(e)||O(e)?{i:jr,r:e,k:t,f:!!n}:e);function R(e,t=null,n=null,r=0,i=null,a=e===F?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ja(t),ref:t&&Ya(t),scopeId:Mr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:jr};return s?(ro(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=k(n)?8:16),Ha>0&&!o&&Ba&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ba.push(c),c}var z=Xa;function Xa(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===yi)&&(e=La),Ka(e)){let r=Qa(e,t,!0);return n&&ro(r,n),Ha>0&&!a&&Ba&&(r.shapeFlag&6?Ba[Ba.indexOf(e)]=r:Ba.push(r)),r.patchFlag=-2,r}if(To(e)&&(e=e.__vccOpts),t){t=Za(t);let{class:e,style:n}=t;e&&!k(e)&&(t.class=gt(e)),A(n)&&(Kn(n)&&!D(n)&&(n=Re({},n)),t.style=dt(n))}let o=k(e)?1:Pa(e)?128:Gr(e)?64:A(e)?4:O(e)?2:0;return R(e,t,n,r,i,o,a,!0)}function Za(e){return e?Kn(e)||sa(e)?Re({},e):e:null}function Qa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?io(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ja(l),ref:t&&t.ref?n&&a?D(a)?a.concat(Ya(t)):[a,Ya(t)]:Ya(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==F?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qa(e.ssContent),ssFallback:e.ssFallback&&Qa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&Yr(u,c.clone(u)),u}function B(e=` `,t=0){return z(Ia,null,e,t)}function $a(e,t){let n=z(Ra,null,e);return n.staticCount=t,n}function eo(e=``,t=!1){return t?(I(),Ga(La,null,e)):z(La,null,e)}function to(e){return e==null||typeof e==`boolean`?z(La):D(e)?z(F,null,e.slice()):Ka(e)?no(e):z(Ia,null,String(e))}function no(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qa(e)}function ro(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ro(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!sa(t)?t._ctx=jr:r===3&&jr&&(jr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(O(t)){if(r&65){ro(e,{default:t});return}t={default:t,_ctx:jr},n=32}else t=String(t),r&64?(n=16,t=[B(t)]):n=8;e.children=t,e.shapeFlag|=n}function io(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=gt([t.class,r.class]));else if(e===`style`)t.style=dt([t.style,r.style]);else if(Ie(e)){let n=t[e],i=r[e];i&&n!==i&&!(D(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!Le(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ao(e,t,n,r=null){fr(e,t,7,[n,r])}var oo=Ui(),so=0;function co(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||oo,a={uid:so++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ot(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pa(r,i),emitsOptions:Xi(r,i),emit:null,emitted:null,propsDefaults:T,inheritAttrs:r.inheritAttrs,ctx:T,data:T,props:T,attrs:T,slots:T,refs:T,setupState:T,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ji.bind(null,a),e.ce&&e.ce(a),a}var lo=null,uo=()=>lo||jr,fo,po;{let e=ut(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};fo=t(`__VUE_INSTANCE_SETTERS__`,e=>lo=e),po=t(`__VUE_SSR_SETTERS__`,e=>_o=e)}var mo=e=>{let t=lo;return fo(e),e.scope.on(),()=>{e.scope.off(),fo(t)}},ho=()=>{lo&&lo.scope.off(),fo(null)};function go(e){return e.vnode.shapeFlag&4}var _o=!1;function vo(e,t=!1,n=!1){t&&po(t);let{props:r,children:i}=e.vnode,a=go(e);ca(e,r,a,t),xa(e,i,n||t);let o=a?yo(e,t):void 0;return t&&po(!1),o}function yo(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ei);let{setup:r}=n;if(r){Kt();let n=e.setupContext=r.length>1?Co(e):null,i=mo(e),a=dr(r,e,0,[e.props,n]),o=Ge(a);if(qt(),i(),(o||e.sp)&&!ti(e)&&Xr(e),o){if(a.then(ho,ho),t)return a.then(n=>{po(!0);try{bo(e,n,t)}finally{po(!1)}}).catch(t=>{pr(t,e,0)});e.asyncDep=a}else bo(e,a,t)}else xo(e,t)}function bo(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:A(t)&&(e.setupState=nr(t)),xo(e,n)}function xo(e,t,n){let r=e.type;e.render||=r.render||Pe;{let t=mo(e);Kt();try{ki(e)}finally{qt(),t()}}}var So={get(e,t){return rn(e,`get`,``),e[t]}};function Co(e){return{attrs:new Proxy(e.attrs,So),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function wo(e){return e.exposed?e.exposeProxy||=new Proxy(nr(qn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wi)return wi[n](e)},has(e,t){return t in e||t in wi}}):e.proxy}function To(e){return O(e)&&`__vccOpts`in e}var Eo=(e,t)=>ir(e,t,_o),Do=`3.5.43`,Oo=void 0,ko=typeof window<`u`&&window.trustedTypes;if(ko)try{Oo=ko.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ao=Oo?e=>Oo.createHTML(e):e=>e,jo=`http://www.w3.org/2000/svg`,Mo=`http://www.w3.org/1998/Math/MathML`,No=typeof document<`u`?document:null,Po=No&&No.createElement(`template`),Fo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?No.createElementNS(jo,e):t===`mathml`?No.createElementNS(Mo,e):n?No.createElement(e,{is:n}):No.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>No.createTextNode(e),createComment:e=>No.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>No.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Po.innerHTML=Ao(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Po.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Io=Symbol(`_vtc`);function Lo(e,t,n){let r=e[Io];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ro=Symbol(`_vod`),zo=Symbol(`_vsh`),Bo=Symbol(``),Vo=/(?:^|;)\s*display\s*:/;function Ho(e,t,n){let r=e.style,i=k(n),a=!1;if(n&&!i){if(t){if(k(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Wo(r,t,``)}else for(let e in t)n[e]??Wo(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Wo(r,i,``):Jo(e,i,!k(t)&&t?t[i]:void 0,o)||Wo(r,i,o)}}else if(i){if(t!==n){let e=r[Bo];e&&(n+=`;`+e),r.cssText=n,a=Vo.test(n)}}else t&&e.removeAttribute(`style`);Ro in e&&(e[Ro]=a?r.display:``,e[zo]&&(r.display=`none`))}var Uo=/\s*!important$/;function Wo(e,t,n){if(D(n))n.forEach(n=>Wo(e,t,n));else if(n??=``,t.startsWith(`--`))Uo.test(n)?e.setProperty(t,n.replace(Uo,``),`important`):e.setProperty(t,n);else{let r=qo(e,t);Uo.test(n)?e.setProperty(nt(r),n.replace(Uo,``),`important`):e[r]=n}}var Go=[`Webkit`,`Moz`,`ms`],Ko={};function qo(e,t){let n=Ko[t];if(n)return n;let r=et(t);if(r!==`filter`&&r in e)return Ko[t]=r;r=rt(r);for(let n=0;n<Go.length;n++){let i=Go[n]+r;if(i in e)return Ko[t]=i}return t}function Jo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&k(r)&&n===r}var Yo=`http://www.w3.org/1999/xlink`;function Xo(e,t,n,r,i,a=vt(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Yo,t.slice(6,t.length)):e.setAttributeNS(Yo,t,n):n==null||a&&!yt(n)?e.removeAttribute(t):e.setAttribute(t,a?``:We(n)?String(n):n)}function Zo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ao(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=yt(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Qo(e,t,n,r){e.addEventListener(t,n,r)}function $o(e,t,n,r){e.removeEventListener(t,n,r)}var es=Symbol(`_vei`);function ts(e,t,n,r,i=null){let a=e[es]||(e[es]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=is(t);r?Qo(e,n,a[t]=cs(r,i),s):o&&($o(e,n,o,s),a[t]=void 0)}}var ns=/(Once|Passive|Capture)$/,rs=/^on:?(?:Once|Passive|Capture)$/;function is(e){let t,n;for(;(n=e.match(ns))&&!rs.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):nt(e.slice(2)),t]}var as=0,os=Promise.resolve(),ss=()=>as||=(os.then(()=>as=0),Date.now());function cs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(D(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&fr(e,t,5,a)}}else fr(r,t,5,[e])};return n.value=e,n.attached=ss(),n}var ls=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,us=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Lo(e,r,o):t===`style`?Ho(e,n,r):Ie(t)?Le(t)||ts(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):ds(e,t,r,o))?(Zo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Xo(e,t,r,o,a,t!==`value`)):e._isVueCE&&(fs(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!k(r)))?Zo(e,et(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Xo(e,t,r,o))};function ds(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&ls(t)&&O(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return ls(t)&&k(n)?!1:t in e}function fs(e,t){let n=e._def.props;if(!n)return!1;let r=et(t);return Array.isArray(n)?n.some(e=>et(e)===r):Object.keys(n).some(e=>et(e)===r)}var ps=[`ctrl`,`shift`,`alt`,`meta`],ms={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>ps.some(n=>e[`${n}Key`]&&!t.includes(n))},hs=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=ms[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},gs=Re({patchProp:us},Fo),_s;function vs(){return _s||=wa(gs)}var ys=((...e)=>{let t=vs().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=xs(e);if(!r)return;let i=t._component;!O(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,bs(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function bs(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function xs(e){return k(e)?document.querySelector(e):e}var Ss=Zn(0),Cs=()=>Ss.value++;function ws(e){return Ss.value,e()}var Ts=(e,t,n)=>b`<option value="${e}" ${e===String(n)&&y(`selected`)}>${t}</option>`;function Es(e){return f[e]?b`<span class="setting-help" tabindex="0" aria-label="${f[e]}"
        >ⓘ<span role="tooltip">${f[e]}</span></span
      >`:``}var V=e=>S(e>1e3?e/1e3:e)+(e>1e3?` GW`:` MW`);function Ds(e,t,n,r=`number`,i=``){return b`<label class="field"
    >${e} ${Es(t)}<input name="${t}" type="${r}" value="${n}" ${y(i)}
  /></label>`}function Os(e,t,n,r){return b`<label class="field"
    >${e} ${Es(t)}<select name="${t}">
      ${n.map(([e,t])=>Ts(e,t,r))}
    </select></label
  >`}var ks=new Set([`Fuel`,`Rocket Fuel`,`Nitric Acid`,`Turbofuel`,`Ionized Fuel`,`Dark Matter Residue`,`Excited Photonic Matter`,`Heavy Oil Residue`,`Alumina Solution`,`Sulfuric Acid`,`Dissolved Silica`,`Nitrogen Gas`,`Water`,`Crude Oil`,`Liquid Biofuel`]),As=[{mark:`Mk.1`,cap:60,entry:`Schematic_1-2_C`},{mark:`Mk.2`,cap:120,entry:`Schematic_3-2_C`},{mark:`Mk.3`,cap:270,entry:`Schematic_5-3_C`},{mark:`Mk.4`,cap:480,entry:`Schematic_6-1_C`},{mark:`Mk.5`,cap:780,entry:`Schematic_7-2_C`},{mark:`Mk.6`,cap:1200,entry:`Schematic_9-5_C`}],js=[{mark:`Mk.1`,cap:300,entry:`Schematic_3-1_C`},{mark:`Mk.2`,cap:600,entry:`Schematic_6-5_C`}],Ms={Plastic:{in:{"Crude Oil":30},out:{Plastic:20,"Heavy Oil Residue":10}},Rubber:{in:{"Crude Oil":30},out:{Rubber:20,"Heavy Oil Residue":20}},"Residual Fuel":{in:{"Heavy Oil Residue":60},out:{Fuel:40}},"Residual Rubber":{in:{"Polymer Resin":40,Water:40},out:{Rubber:20}},"Alternate: Heavy Oil Residue":{in:{"Crude Oil":30},out:{"Heavy Oil Residue":40,"Polymer Resin":20}},"Alternate: Diluted Fuel":{in:{"Heavy Oil Residue":50,Water:100},out:{Fuel:100}},"Alternate: Recycled Plastic":{in:{Rubber:30,Fuel:30},out:{Plastic:60}},"Alternate: Recycled Rubber":{in:{Plastic:30,Fuel:30},out:{Rubber:60}}},Ns=e=>e<=2?1:e<=4?2:e<=6?3:e<=8?4:5;function Ps(e){let t=Wf?.entries.find(t=>t.id===e.entry);return t?{name:t.name,tier:t.tier,phase:Ns(t.tier),marked:$(`unlock-`+t.id)}:null}function Fs(e,t){let n=e?js:As,r=Number(t??Q()),i=n[0],a=Ps(n[0]);for(let e of n){let t=Ps(e);(!t||t.marked||t.phase<=r)&&(i=e,a=t)}let o=n[n.indexOf(i)+1];return{...i,fluid:e,unit:e?` m³/min`:`/min`,milestone:a,next:o?{...o,milestone:Ps(o)}:null}}function Is(e,t,n){let r=Fs(t,n),i=Math.max(1,Math.ceil(e/r.cap-1e-9)),a=e-(i-1)*r.cap;return{lane:r,count:i,last:a,full:i-+(a<r.cap-1e-9),spare:i*r.cap-e,word:t?`pipe`:`belt`}}var Ls=(e,t)=>e>1?`1 of the ${S(e)} ${t.replace(/y$/,`ie`)}s`:`1 × ${t}`;function Rs([e,t,n],r){let i=b`${e!==`MW`&&w(e)}<span class="rail-main"
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
  </div>`:``}function Bs(e){if(!e||!e.inputs.length&&!e.outputs.length)return``;let t=e=>{let t=e.plan,n=Math.round(e.rate/(t.count*t.lane.cap)*100),r=b`${w(e.name)}<span class="rail-main"
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
      ${t.icon?w(t.icon):b`<span class="rail-noicon"></span>`}<span class="rail-main"
        >${r}<small>${t.pre&&t.pre+` · `}${n[t.kind]||``}</small></span
      >${i}<span class="rail-rate">${a}</span>
    </div>`},r=e.bar&&b`${e.inputs.length>0&&b`<div class="rail-arrow">↓</div>`}
      <div class="rail-machine">
        <div class="rail-machine-main">
          <b>${S(e.machineCount)} × ${e.machineName}</b><small>${e.bar.sub}</small>
        </div>
        <div class="rail-machine-out"><b>${e.bar.outTxt}</b><small>${e.bar.outSub}</small></div>
      </div>
      ${e.outputs.length>0&&b`<div class="rail-arrow">↓</div>`}`;return b`<h3>Flow at ${bp(e.stage)}</h3>
    ${zs(e)}
    ${e.inputs.length>0&&b`<div class="rail-cap">
        Inputs · ${e.inputs.length} line${e.inputs.length>1&&`s`} in
      </div>
      <div class="rail-grid">${e.inputs.map(t)}</div>`}
    ${r}
    ${e.outputs.length>0&&b`<div class="rail-caps">
        <span class="rail-cap">Delivers · ${bp(e.stage)}</span>${e.outputs.some(e=>e.mach!==void 0)&&b`<span class="rail-cap">Machines per delivery · ${S(e.machineCount)} total</span>`}
      </div>
      <div class="rail-rows">${e.outputs.map(n)}</div>
      ${e.bankNote}`}`}function Vs(e,t=`/min`){if(e.length<=10)return e;let n=e.slice(9),r=n.reduce((e,t)=>e+(t.rate||0),0);return[...e.slice(0,9),{kind:`more`,label:`+ ${n.length} more destinations`,rate:r,unit:t}]}function Hs(e){if(!e||!e.inputs.length)return``;let t=Fs(!1,e.stage),n=Fs(!0,e.stage),r=t.next?.milestone?` ${t.next.mark} belts (${S(t.next.cap)}/min) unlock at Tier ${t.next.milestone.tier} · ${t.next.milestone.name} in Phase ${t.next.milestone.phase}.`:``;return b`<h3>Belts &amp; pipes</h3>
    <p class="small muted">
      ${bp(e.stage)} milestones give ${t.mark} belts (${S(t.cap)}/min) and
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
      ${w(t.name)}
      <div><b>${t.name}</b>${s.map(e=>b`<p>${e}</p>`)}</div>
    </div>`})}</div>`}function Us(e,t,n,r,i=!1){let a=ks.has(e.name),o=a?` m³/min`:`/min`,s=Math.max(n.machines-1+(n.lastClock??100)/100,.01),c=n.output/s,l=e=>`${e.count} × ${e.lane.mark} ${e.word}${e.count>1?`s`:``}`,u=e=>i?void 0:e/c,d=Y.factories.filter(n=>n.id!==e.id&&n.stages[t]?.inputs?.[e.name]).map(n=>{let r=n.stages[t].inputs[e.name];return{kind:`consumer`,label:n.name,icon:n.name,link:b`data-factory="${n.id}"`,rate:r,unit:o,mach:u(r),beltTxt:e.local?`made on site`:l(Is(r,a,t))}}).sort((e,t)=>t.rate-e.rate),f=[...d];e.nuclear&&!d.length&&f.push({kind:`ship`,label:`Nuclear power fleet`,shipSub:`planned in Power & resources`,icon:e.name,rateTxt:``}),n.storage&&f.push({kind:`store`,label:`Storage refill`,icon:e.name,rate:n.storage,unit:o,mach:u(n.storage)}),n.delivery&&f.push({kind:`ship`,label:`Space Elevator delivery`,icon:e.name,rate:n.delivery,unit:o,mach:u(n.delivery)});let p=Math.max(0,n.output-(n.demand??n.output));p>.002&&f.push({kind:`sink`,label:`AWESOME Sink`,icon:e.name,rate:p,unit:o});let m=i?[]:Object.entries(n.inputs||{}).map(([e,n])=>{let i=r(e),a=i||Y.factories.find(n=>n.name===e&&n.stages[t]);return{name:e,rate:n,link:a?b`data-factory="${a.id}"`:``,plan:Is(n,ks.has(e),t),local:i?b`<button class="btn quiet" data-factory="${i.id}">
                Local: ≈ ${S(Math.ceil(n/i.stages[t].rate))} × ${i.stages[t].machine} at
                this site ↗
              </button>`:``}}),h=Vs(f,o),ee=h.filter(e=>e.mach!==void 0&&e.kind!==`sink`),g=ee.length>1?` · split ≈ ${ee.map(e=>S(Math.ceil(e.mach-1e-9))).join(` / `)} across the deliveries below`:``,_=(n.lastClock??100)<100?`@ 100% except the last at ${S(n.lastClock)}%`:`@ 100%`;return{stage:t,inputs:m,outputs:h,equivalent:s,machineCount:n.machines,machineName:n.machine,local:!!e.local,recipe:i?null:{name:String(n.recipe||``).replace(`Alternate: `,``),machine:n.machine,ins:m.map(e=>[e.name,e.rate/s,e.link]),outs:[[e.name,c]]},bar:i?null:{sub:`${String(n.recipe||``).replace(`Alternate: `,``)} · ${_} · ${ke(c)} ${e.name}/min out per machine${g}${e.local?` · built beside the consumers`:``}`,outTxt:b`${S(n.output)}<small>${o}</small>`,outSub:e.local?`out · distributed`:`out · `+l(Is(n.output,a,t))},sameItemConsumers:n=>Y.factories.filter(r=>r.id!==e.id&&r.stages[t]?.inputs?.[n]).map(e=>({label:e.name,rate:e.stages[t].inputs[n],attr:b`data-factory="${e.id}"`}))}}function Ws(e){let t=Cp(),n=Q(),r=Object.keys(e.outputs||{}).length>1,i=Math.max(e.equivalent||e.machines-1+(e.lastClock??100)/100||1,.01),a=e=>`${e.count} × ${e.lane.mark} ${e.word}${e.count>1?`s`:``}`,o=[];for(let s of Object.keys(e.outputs||{})){let c=ks.has(s),l=c?` m³/min`:`/min`,u=r?s:``,d=e.outputs[s]/i,f=e=>r?void 0:e/d;for(let r of(t.rows||[]).filter(t=>t.id!==e.id&&t.inputs?.[s]))o.push({kind:`consumer`,label:r.name,icon:Object.keys(r.outputs||{})[0]||s,link:b`data-calc-factory="${r.id}"`,rate:r.inputs[s],unit:l,pre:u,mach:f(r.inputs[s]),beltTxt:a(Is(r.inputs[s],c,n))});t.storage?.[s]&&o.push({kind:`store`,label:`Protected storage`,icon:s,rate:t.storage[s],unit:l,pre:u,mach:f(t.storage[s])}),t.delivery?.[s]?.rate&&o.push({kind:`ship`,label:`Space Elevator delivery`,icon:s,rate:t.delivery[s].rate,unit:l,pre:u,mach:f(t.delivery[s].rate)}),t.drone?.[s]&&o.push({kind:`drone`,label:`Drone fuel contract`,icon:s,rate:t.drone[s],unit:l,pre:u,mach:f(t.drone[s])}),n===`5`&&s===`Alien Power Matrix`&&t.matrixRate&&o.push({kind:`ship`,label:`Alien Power Augmenter fuel`,shipSub:S(q.settings.fueledAugmenters)+` fueled augmenter`+(q.settings.fueledAugmenters>1?`s`:``),icon:s,rate:t.matrixRate,unit:l,pre:u,mach:f(t.matrixRate)}),n===`5`&&s===`Singularity Cell`&&q.settings.cellsPerMinute&&o.push({kind:`ship`,label:`Extra Singularity Cells`,shipSub:`configured portal supply`,icon:s,rate:q.settings.cellsPerMinute,unit:l,pre:u,mach:f(q.settings.cellsPerMinute)}),s===`Plutonium Fuel Rod`&&t.plutoniumSink&&o.push({kind:`sink`,label:`AWESOME Sink`,subTxt:`waste strategy — sink these rods`,icon:s,rate:t.plutoniumSink,unit:l,pre:u}),t.surplus?.[s]>.002&&o.push({kind:`sink`,label:`AWESOME Sink`,icon:s,rate:t.surplus[s],unit:l,pre:u})}o.sort((e,t)=>(t.rate||0)-(e.rate||0)),!o.length&&e.generationMW&&o.push({kind:`ship`,label:`Power grid`,shipSub:`generation`,rateTxt:V(e.generationMW)});let s=Object.entries(e.inputs||{}).map(([r,i])=>{let a=(t.rows||[]).find(t=>t.id!==e.id&&t.outputs?.[r]);return{name:r,rate:i,link:a?b`data-calc-factory="${a.id}"`:``,plan:Is(i,ks.has(r),n)}}),c=Object.keys(e.outputs||{})[0],l=Vs(o),u=l.filter(e=>e.mach!==void 0&&e.kind!==`sink`),d=u.length>1?` · split ≈ ${u.map(e=>S(Math.ceil(e.mach-1e-9))).join(` / `)} across the deliveries below`:``,f=e.machines-i>1e-7?`@ 100% + 1 adjustable`:`@ 100%`,p=Object.keys(e.outputs||{}).some(n=>(t.rows||[]).some(t=>t.id!==e.id&&t.outputs?.[n]));return{stage:n,inputs:s,outputs:l,equivalent:i,machineCount:e.machines,machineName:e.machine,local:!1,recipe:{name:e.name,machine:e.machine,ins:s.map(e=>[e.name,e.rate/i,e.link]),outs:c?Object.entries(e.outputs).map(([e,t])=>[e,t/i]):[[`MW`,e.generationMW/i]]},bar:{sub:`${e.name} · ${f}${c&&!r?` · ${ke(e.outputs[c]/i)} ${c}/min out per machine`:``}${d}`,outTxt:c?b`${S(e.outputs[c])}<small>${ks.has(c)?` m³/min`:`/min`}</small>`:V(e.generationMW),outSub:c?r?`out · `+c+` + byproducts`:`out · `+a(Is(e.outputs[c],ks.has(c),n)):`generation`},bankNote:o.length?b`<p class="small muted">
          Demand for the item across this phase's whole
          plan${p?`, supplied together with the other recipes producing it`:``}.
        </p>`:``,sameItemConsumers:n=>(t.rows||[]).filter(t=>t.id!==e.id&&t.inputs?.[n]).map(e=>({label:e.name,rate:e.inputs[n],attr:b`data-calc-factory="${e.id}"`}))}}function Gs(e){return Object.entries(e).filter(([,e])=>e).map(([e,t])=>e+` `+S(t)+`/min`).join(` · `)}function Ks(){let e=X?.storageEdits||{};return{floors:e.floors||[],floorNames:e.floorNames||{},bays:e.bays||[],bayNames:e.bayNames||{},slots:e.slots||{},clearedSlots:e.clearedSlots||[]}}function qs(){let e=Ks();return[...[[`ground`,`Ground floor`],[`upper`,`Upper floor`],[`workshop`,`Workshop`]].map(([t,n])=>({id:t,label:e.floorNames[t]||n,builtin:!0})),...e.floors.map(t=>({id:t.id,label:e.floorNames[t.id]||t.label,builtin:!1}))]}function Js(){let e=new Set([...Y.storage.map(e=>e.id),...Ks().bays.map(e=>e.id)]);for(let t of`STUVXYZABCDEFGHIJKLMNOPQRW`)if(!e.has(t))return t;for(let t of`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)for(let n of`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)if(!e.has(t+n))return t+n;return null}function Ys(){let e=Ks(),t=new Set(e.clearedSlots),n=q?new Set(Object.values(q.stages).flatMap(e=>Object.keys(e.storage||{}))):null,r=q?q.settings.collectables??q.settings.storage===`all`:!0,i=(n,r)=>t.has(r)?null:e.slots[r]??n,a=t=>Object.keys(e.slots).reduce((e,n)=>ye(n)===t?Math.max(e,Se(n)):e,8),o=(e,t)=>Array.from({length:Math.max(0,a(e)-t)},(n,r)=>{let a=e+String(t+r+1).padStart(2,`0`);return{id:a,name:i(null,a)}}),s=Y.storage.map(t=>({...t,name:e.bayNames[t.id]||t.name,items:[...t.items.map(e=>{let a=n?e.name&&(n.has(e.name)||[`Q`,`R`].includes(t.id)&&r)?e.name:null:e.name;return{...e,name:i(a,e.id)}}),...o(t.id,t.items.length)]})),c=e.bays.map(t=>({id:t.id,name:e.bayNames[t.id]||t.name,floor:t.floor,custom:!0,items:o(t.id,0)}));return[...s,...c].filter(e=>e.custom||!n||e.items.some(e=>e.name))}var Xs=[`built`,`labelled`,`connected`,`verified`],Zs=e=>Xs.map(t=>`slot-`+e+`-`+t),Qs=e=>Zs(e).every($);function $s(){let e=qs();e.some(e=>e.id===Xf)||lp(e[0].id);let t=e.find(e=>e.id===Xf),n=Ys().filter(e=>e.floor===Xf),r=n.filter(e=>!Yf||e.items.some(e=>e.name&&(e.id+` `+e.name).toLowerCase().includes(Yf.toLowerCase()))),i=[...r].sort((e,t)=>Math.floor((t.id.charCodeAt(0)-65)/2)-Math.floor((e.id.charCodeAt(0)-65)/2)||e.id.localeCompare(t.id)).map(e=>e.id),a=[...r].sort((e,t)=>e.id.localeCompare(t.id)),o=Array.from({length:Math.floor(i.length/2)},(e,t)=>b`<div class="aisle" style="--aisle-row:${t+1}">MAIN AISLE</div>`),s=b`<div class="tabs">
    ${e.map(e=>b`<button class="tab ${Xf===e.id?`active`:``}" data-floor="${e.id}">
          ${e.label}
        </button>`)}
  </div>`,c=$f&&b`<section class="panel edit-panel">
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
    </section>`,l=b`${Xf===`ground`?K.id===`original`?b`<div class="notice blue">
            <b>Ground floor is built.</b> The shell is marked complete. Move Gas Filters G08 → H02
            and Nobelisks H02 → H08; assign Medicinal Inhalers to G08. H01 stays Iodine-Infused
            Filter.
          </div>`:b`<div class="notice blue">
            Optional storage template. Each position has its own checklist; nothing is assumed
            built.
          </div>`:Xf===`upper`&&b`<div class="notice blue">
          Q sits behind O; R sits behind P. Packaged fluids only. Nuclear items and unpackaged
          fluids stay outside this room.
        </div>`}
    ${Yf&&b`<p class="small muted">
      Filtered view: showing matching bays only. Clear search to see the full floor arrangement.
    </p>`}${a.length>0&&b`<p class="eyebrow floor-marker">REAR OF HALL ↑</p>`}
    <div class="floor-grid">
      ${o.length||a.length?b`${o}${a.map(e=>ec(e,i.indexOf(e.id)))}`:Xf!==`workshop`&&b`<div class="empty-state">
            ${n.length?`No matching item on this floor. Try another floor.`:`No bays on this floor yet. Use Edit layout to add one.`}
          </div>`}
    </div>
    ${a.length>0&&b`<div class="entry floor-marker">↓ ENTRANCE / STAIRS</div>
      <div class="small muted">
        Within each bay, 01–04 are the rear bank; 05–08 are the front bank. Read left to right on
        both banks. Grey positions remain unassigned. Positions from 09 are containers added beyond
        the printed bay.
      </div>`}`,u=q?[{id:`calc-storage-layout`,title:`Build and label the selected storage positions`,body:`Use one container per selected item. Reserve its refill supply and route sinkable overflow to the AWESOME Sink; gathered items need manual replenishment.`}]:Y.storageTasks;return String(b`${Af(`ONE ITEM · ONE ADDRESS`,`Storage room`,q?`Showing your selected storage supply across all phases. Unselected positions are reserved; addresses stay stable.`:`Mark containers Done here, or complete a room after placing, labelling, connecting and checking its containers. Click an item for details. Positions match your printed storage plan.`)}
      <div class="toolbar">
        ${s}<input
          id="storage-search"
          class="search"
          aria-label="Find storage on this floor"
          placeholder="Find an item or address on this floor…"
          value="${Yf}"
        /><button class="btn ${$f?`primary`:``}" data-toggle-layout>
          ${$f?`Done editing`:`Edit layout`}
        </button>
      </div>
      ${c}${Xf===`workshop`&&tc()}${l}
      <section style="margin-top:28px">
        <h2>Storage build checklist</h2>
        <div class="checklist">${u.map(Zc)}</div>
      </section>`)}function ec(e,t=0){let n=e.items.filter(e=>e.name),r=n.filter(e=>Qs(e.id)).length,i=$f?b`<input
        id="bay-name-${e.id}"
        class="bay-rename"
        data-bay-rename="${e.id}"
        value="${e.name}"
        maxlength="80"
        aria-label="Rename bay ${e.id}"
      />`:b`<h3>${e.name}</h3>`,a=$f&&e.custom&&b`<button class="btn danger" data-remove-bay="${e.id}">Remove bay</button>`,o=$f&&e.items.length<ve&&b`<form class="inline-form add-container" data-bay="${e.id}">
      <input
        id="bay-draft-${e.id}"
        name="name"
        maxlength="120"
        required
        placeholder="${n.length<e.items.length?`Add container: item name…`:`Add a position beyond `+e.items.at(-1).id+`…`}"
        aria-label="Add container to bay ${e.id}"
      /><button class="btn" type="submit">+ Add</button>
    </form>`,s=e=>Yf&&(e.id+` `+e.name).toLowerCase().includes(Yf.toLowerCase()),c=e=>e.name?b`<div class="slot ${Qs(e.id)?`done`:``} ${s(e)?`match`:``}">
          ${$f&&b`<button
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
      ${[[`bench`,`Craft Bench and Equipment Workshop`,`Side by side near the entrance.`],[`tools`,`Tools and mobility equipment`,`Personal boxes on the left wall.`],[`weapons`,`Weapons and spare wearables`,`Personal boxes on the right wall. Ammo and filters stay in G/H.`],[`mam`,`MAM and inventory drop`,`Rear wall, with collected items routed to Q/R. Finish the sorter at a recovery chest.`]].map(([e,t,n])=>Zc({id:`workshop-`+e,title:t,body:n}))}
    </div>
  </div>`}var nc=[[`built`,`Container placed`],[`labelled`,`Sign and address labelled`],[`connected`,`Correct supply connected`],[`verified`,`Flow and overflow verified`]];function rc(e){let t=Ys().find(t=>t.items.some(t=>t.id===e)),n=t?.items.find(t=>t.id===e);if(!n?.name)return;let r=q?Cp().rows?.find(e=>e.outputs[n.name]):Y.factories.find(e=>e.name===n.name),i=Number(e.slice(t.id.length));_c(n.name,`${e} · ${qs().find(e=>e.id===t.floor)?.label||t.floor} · Bay ${t.id}`,b`<p>
        <b>${t.name}</b><br />${i<=4?`Rear`:`Front`} bank, position
        ${(i-1)%4+1} from the left on the floor plan.
      </p>
      <div class="check-columns">
        ${nc.map(([t,n])=>b`<label class="check-row"
              ><input
                type="checkbox"
                data-check="slot-${e}-${t}"
                ${y(yp(`slot-`+e+`-`+t))}
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
  </section>`}function uc(e,t,n){return b`${ac().groups.map(r=>{let i=e.filter(e=>oc(t(e)).some(e=>e.group===r.id));return!i.length&&!np?``:b`<section class="site-group user-group">
      <header class="site-head">
        <div>
          <span class="eyebrow"
            >FACTORY GROUP · ${i.length}
            ${i.length===1?`FACTORY`:`FACTORIES`}</span
          >${np?b`<input
                class="bay-rename"
                data-group-rename="${r.id}"
                value="${r.name}"
                maxlength="80"
                aria-label="Rename group ${r.name}"
              />`:b`<h2>${r.name}</h2>`}
        </div>
        ${np?b`<button class="btn danger" data-remove-group="${r.id}">Remove group</button>`:i.length>1&&b`<button class="btn" data-group-chain="${r.id}">Build order ↗</button>`}
      </header>
      <div class="cards">
        ${i.length?i.map(e=>n(e,r.id)):b`<div class="empty-state">
              Empty group. Add factories with the group selector on their cards.
            </div>`}
      </div>
    </section>`})}`}function dc(){return b`<button class="btn ${np?`primary`:``}" data-toggle-factory-edit>
    ${np?`Done editing`:`Edit groups`}
  </button>`}function fc(e,t=null){let n=e.stages[Q()],r=`factory-`+Q()+`-`+e.id;return b`<article class="factory-card ${$(r)?`done`:``}">
    <div class="card-top">
      <span class="card-icon">${w(e.name)}</span>
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
        ><input type="checkbox" data-check="${r}" ${y(yp(r))} />Running</label
      ><button class="btn quiet" data-factory="${e.id}">Details ↗</button>
    </footer>
    ${np&&cc(e.id)}
  </article>`}function pc(e,t){if(!t.length)return``;let n=Y.plans[Q()],r=e===`oil`?`Oil campus`:`Nuclear site`,i=e===`oil`?`One shared machine set produces these outputs together: ${S(n.oil.reduce((e,t)=>e+t.machines,0))} buildings · crude ${S(n.oilTotals.crude)}/min · water ${S(n.oilTotals.water)}/min. Open a card for the shared recipe table.`:`Build and balance this radioactive chain as one site at the power plants. Process buffers stay here; the general storage surplus does not apply.`;return b`<section class="site-group">
    <header class="site-head">
      <div>
        <span class="eyebrow">SHARED SITE · ${t.length} OUTPUTS</span>
        <h2>${r}</h2>
      </div>
      <p class="small muted">${i}</p>
    </header>
    <div class="cards">${t.map(e=>fc(e))}</div>
  </section>`}var mc=[[`all`,`All factories`],[`todo`,`Not running yet`],[`done`,`Running`],[`local`,`Made beside consumers`]];function hc(){let e=Y.factories.filter(e=>e.stages[Q()]).filter(e=>(e.name+` `+e.stages[Q()].recipe).toLowerCase().includes(Yf.toLowerCase())).filter(e=>Zf===`all`||Zf===`todo`&&!$(`factory-`+Q()+`-`+e.id)||Zf===`done`&&$(`factory-`+Q()+`-`+e.id)||Zf===`local`&&e.local),t=e.filter(e=>!oc(e.id).length),n=t.filter(e=>!ic(e)),r=t.filter(e=>ic(e)===`oil`),i=t.filter(e=>ic(e)===`nuclear`),a=uc(e,e=>e.id,(e,t)=>fc(e,t));return String(b`${Af(`PRODUCTION LIBRARY`,`Factory targets`,`Outputs include downstream supply, protected storage and elevator exports. Click a factory for its inputs and expansion history.`)}
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
          value="${Yf}"
        /><select id="factory-filter" aria-label="Factory status">
          ${mc.map(([e,t])=>b`<option value="${e}" ${Zf===e&&y(`selected`)}>${t}</option>`)}</select
        ><span class="small muted">${e.length} targets</span>${dc()}
      </div>
      ${np&&lc()} ${a}
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
      ${Y.completion.filter(e=>e.name.toLowerCase().includes(Yf.toLowerCase())).map(e=>b`<article class="completion-item">
              <label class="check-row"
                ><input
                  type="checkbox"
                  data-check="completion-${e.id}"
                  ${y(yp(`completion-`+e.id))}
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
          ${r&&b`<span class="dialog-icon">${w(r)}</span>`}
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
    </tr>`}),o=t.stages[Q()]?Q():Object.keys(t.stages)[0],s=e=>Y.factories.find(t=>t.local&&t.name===e&&t.stages[o]),c=Us(t,o,n,s,r),l=`factory-`+o+`-`+t.id;_c(t.name,`${bp(o)} · Handbook page ${t.page}`,b`<span class="badge orange">${n.recipe}</span>
      <div class="stats">
        ${C(`Output`,S(n.output)+`/min`,`Total production`)}
        ${C(`Storage`,S(n.storage)+`/min`,`Protected allowance`)}
        ${C(`Machines`,r?`Campus`:S(n.machines),r?`Shared oil processes`:n.machine)}
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
          ><input type="checkbox" data-check="${l}" ${y(yp(l))} />Running at Phase
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
              ${w(e)}<span class="rail-main"><b>${e}</b><small>${r(t)}</small></span
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
      ${a.length>0&&b`<p class="small muted">${bc(a,b`<br />`)}</p>`}`});return b`<h3>Shared oil campus · ${bp(e)}</h3>
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
    </p>`}function Sc(e){if(q)return(Cp().rows||[]).filter(t=>oc(t.id).some(t=>t.group===e)).map(e=>({id:e.id,attr:b`data-calc-factory="${e.id}"`,name:e.name,machine:e.machine,machines:e.machines,inputs:e.inputs||{},outputs:e.outputs||{},mw:e.generationMW}));let t=Q();return Y.factories.filter(n=>n.stages[t]&&oc(n.id).some(t=>t.group===e)).map(e=>{let n=e.stages[t];return{id:e.id,attr:b`data-factory="${e.id}"`,name:e.name,machine:n.machine,machines:n.machines,inputs:n.inputs||{},outputs:{[e.name]:n.output},recipe:n.recipe}})}function Cc(e){let t=ac().groups.find(t=>t.id===e);if(!t)return;let n=Sc(e);if(!n.length)return _c(t.name,`Factory group · build order`,b`<p class="small muted">
        No factories from this group produce anything in the current phase.
      </p>`);let r=e=>n.filter(t=>t.outputs[e]),i=[],a=new Set,o=new Map,s=[...n];for(;s.length;){let e=s.findIndex(e=>Object.keys(e.inputs).every(t=>r(t).every(t=>a.has(t.id)||t===e))),t=!1;if(e<0){let n=1/0;e=0,s.forEach((t,i)=>{let o=Object.keys(t.inputs).filter(e=>r(e).some(e=>!a.has(e.id)&&e!==t)).length;o<n&&(n=o,e=i)}),t=!0}let n=s.splice(e,1)[0];t&&o.set(n.id,Object.keys(n.inputs).filter(e=>r(e).some(e=>!a.has(e.id)&&e!==n))),i.push(n),a.add(n.id)}let c=new Map(i.map((e,t)=>[e.id,t+1])),l=q?Cp().rows||[]:Y.factories.filter(e=>e.stages[Q()]).map(e=>({id:e.id,name:e.name,inputs:e.stages[Q()].inputs||{}})),u=i.map((e,t)=>{let i=o.get(e.id)||[],a=Object.entries(e.inputs).map(([t,n])=>{let a=r(t).filter(t=>t!==e),o=i.includes(t)?b`<b class="chain-loop">loop — seed a starter batch</b>`:a.length?`stage `+Math.min(...a.map(e=>c.get(e.id))):`outside the group`;return b`${t} ${S(n)}${ks.has(t)?` m³`:``}/min
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
    </div>`}),d=n.some(t=>oc(t.id).some(t=>t.group===e&&t.rate!=null));_c(t.name,`Factory group · build order · ${bp(Q())}`,b`<p class="small muted">
        Stages are ordered so suppliers come before their consumers. An input marked <b>loop</b> is
        produced by a later stage: run that stage from a starter batch first, then close the loop.
      </p>
      <div class="chain">${u}</div>
      ${d&&b`<p class="small muted">
        Rates are the whole plan’s totals; this group’s production split is shown on the factory
        cards.
      </p>`}`)}function wc(){let e=Vc(),t=e.filter(e=>$(e.id)).length,n=e.find(e=>!$(e.id)),r=e.length?Math.round(t/e.length*100):100,i=Y.factories.filter(e=>e.stages[Q()]),a=i.filter(e=>$(`factory-`+Q()+`-`+e.id)).length,o=Ys().flatMap(e=>e.items).filter(e=>e.name),s=o.filter(e=>$(`slot-`+e.id+`-verified`)).length,c=(e,t)=>b`${e} <span class="fraction">/ ${t}</span>`;return String(b`${Af(`THE NEXT BUILD`,bp(Z())+` field plan`,Z()===`post`?`Storage first. Keep the network running, then finish the remaining items.`:`Build the supply chain in order. Check off each step when it is verified in your save.`,`YOUR SAVE · YOUR PACE`)}
      <div class="stats">
        ${C(`Phase checklist`,c(t,e.length),`Steps completed`)}
        ${C(`Factory targets`,c(a,i.length),`Marked running at this phase`)}
        ${C(`Storage ready`,c(s,o.length),`Item positions verified`)}
        ${C(`Planned power`,b`${S(Y.power[Q()])} <span class="fraction">GW</span>`,`Gross capacity at this stage`)}
      </div>
      <div class="split">
        <section>
          <div class="section-head">
            <h2>Build sequence</h2>
            <span class="head-tools"
              ><span class="small muted">${r}% complete</span> ${Qc()}</span
            >
          </div>
          <div class="progress-track"><span style="width:${r}%"></span></div>
          ${el(e)}${tl()}
          <form id="add-task" class="inline-form">
            <input
              name="title"
              maxlength="240"
              required
              placeholder="Add a task for this phase…"
              aria-label="Personal task"
            /><button class="btn" type="submit">Add task</button>
          </form>
          <section class="panel">
            <h2>Phase notes</h2>
            <p class="small muted">
              Locations, train routes, things to check on your next session.
            </p>
            <textarea id="phase-note" class="notes" maxlength="6000" aria-label="Phase notes">
${X.notes[`phase-`+Z()]||``}</textarea
            >
            <div class="note-save">
              <span class="small muted">Saved only when you click Save notes.</span
              ><button class="btn" data-save-note="phase-${Z()}" data-input="phase-note">
                Save notes
              </button>
            </div>
          </section>
        </section>
        <aside class="side-panels">
          <section class="panel next-card">
            <div class="step-no">${n?`NEXT UNFINISHED STEP`:`PHASE CHECKLIST COMPLETE`}</div>
            <h2>${n?.title||`Ready for the next phase`}</h2>
            <p>
              ${n?.body||`Verify the delivery, then choose your next phase using the selector above.`}
            </p>
            <a class="btn primary full" href="#factories">Open factory targets →</a>
          </section>
          <section class="panel">
            <h2>${Z()===`post`?`Post-game priority`:`Elevator delivery`}</h2>
            ${Z()===`post`?b`<p>
                    Protect the storage allowances. Reduce former elevator exports when the new
                    completion factories need those resources. Sink the remaining surplus.
                  </p>
                  <a class="btn" href="#factories">Completion modules →</a>`:Y.deliveries.filter(e=>e.phase===Z()).map(Tc)}
          </section>
          <section class="panel accent">
            <h3>Keep the corrections together</h3>
            <p class="small">
              Resource conversion is included. The old coal and temporary fuel plants retire; 44.425
              GW of turbofuel stays. Storage includes collectables Q/R and the workshop underneath.
            </p>
            <a class="btn quiet" href="#resources">Review the resource gate →</a>
          </section>
        </aside>
      </div>`)}function Tc(e){let t=X.deliveries[e.id]??(K.id===`original`?e.initial:0);return b`<div class="delivery">
    <label for="delivery-${e.id}">${e.name}</label>
    <div>
      <input
        id="delivery-${e.id}"
        data-delivery="${e.id}"
        type="number"
        min="0"
        max="${e.target}"
        step="1"
        value="${t}"
      /><small>/ ${S(e.target)}</small>
    </div>
    <div class="progress-track">
      <span style="width:${Math.min(100,t/e.target*100)}%"></span>
    </div>
    <span class="small muted"
      >${e.rate?`${S(e.rate)}/min net · ${S(Math.max(0,e.target-t)/e.rate)} minutes remaining`:`Phase 3 delivery already complete`}</span
    >
  </div>`}function Ec(e){let t=Object.entries(Cp().delivery||{}).find(([t])=>e===Q()+`-`+Ae(t));return t?{id:e,name:t[0],...t[1],initial:0}:null}function Dc(){let e=Cp(),t=_e(q,X,Wf,Z());return[...Q()===`1`?[t.baseTasks[0],...t.powerTasks.slice(0,2),...t.baseTasks.slice(1,5),...t.milestoneTasks,...t.powerTasks.slice(2),...t.baseTasks.slice(5)]:[...t.powerTasks,...t.milestoneTasks],...t.hardDrives,...(e.rows||[]).map(e=>({id:`calc-`+Q()+`-`+e.id,title:e.name,body:`${Nc(e).summary} ${Nc(e).partial?`Adjustable machine: ≈ `+S(Nc(e).clock)+`% → ≈ `+Nc(e).lastOutput+`. Open factory details for an easier rounded option.`:`Each machine: `+Nc(e).fullOutput+`.`} ${e.amplified?`Insert ${e.slots} somersloop${e.slots>1?`s`:``} in each machine — ${e.sloops} in total — for double output from the same inputs at four times the power. `:``}Inputs /min: ${Object.entries(e.inputs).map(([e,t])=>e+` `+S(t)).join(`, `)||`none`}. Outputs /min: ${Object.entries(e.outputs).map(([e,t])=>e+` `+S(t)).join(`, `)||V(e.generationMW)}.`})),{id:`calc-`+Q()+`-storage`,title:`Connect protected storage and overflow`,body:`Reserve the listed storage refill rates before elevator exports. Handle every liquid byproduct; send surplus sinkable solids to the AWESOME Sink after unlocking it.`},...t.retire||[]]}function Oc(e,t){let n=[];return e.shortfalls?.length&&n.push(`Raise the short budget${e.shortfalls.length>1?`s`:``} (Resources): ${e.shortfalls.map(e=>`${e.name} to about ${S(e.needed)}/min (entered: ${S(e.budget)}/min)`).join(`; `)}.`),e.wholeMachinesOnly&&n.push(`Keep these budgets instead: untick “Run solid-part machines at 100%” (Goals). Precise balancing fits, with one adjustable machine per production line.`),e.minHours?n.push(t?.goal===`timed`?`Raise “Hours per phase” (Goals) to at least ${S(e.minHours)} h.`:`Switch the goal (Goals) to “Target completion time” with at least ${S(e.minHours)} hours per phase.`):e.shortfalls?.length&&!e.wholeMachinesOnly&&n.push(t?.goal===`maximum`?`Lower the protected storage refill rate, drone-fuel supply or extra Singularity Cells (Preferences).`:`More time alone will not fit: lower the protected storage refill rate, drone-fuel supply or extra Singularity Cells (Preferences)${t?.roundRates?`, or untick delivery-rate rounding (Goals)`:``}.`),e.shortfalls?.length&&t?.recipes===`standard`&&n.push(`Allow alternate recipes (Preferences) to cut raw resource use.`),e.shortfalls?.length&&t?.sam===`avoid`&&n.push(`Allow SAM resource conversion (Preferences) to turn plentiful resources into the short ones.`),n.length?b`<p><b>Options</b></p>
        <ul>
          ${n.map(e=>b`<li>${e}</li>`)}
        </ul>`:``}function kc(){let e=Cp(),t=e.feasible?``:Oc(e,q?.settings);return b`${!e.feasible&&b`<div class="notice">
    <b>Planning draft — resource budget exceeded or recipe combination unavailable.</b>
    ${e.reason}${t&&b`${t}
      <p class="small">
        Profiles are calculated snapshots: create a new profile with adjusted settings to apply an
        option.
      </p>`}
  </div>`}${e.additionalHeadroomMW>.01&&b`<div class="notice">
    Allow another ${V(e.additionalHeadroomMW)} for whole-building power headroom. Phase 1 needs
    biomass or existing generation.
  </div>`}`}function Ac(){let e=Cp(),t=Vc(),n=t.filter(e=>$(e.id)).length;return String(b`${Af(`CALCULATED BUILD SEQUENCE`,bp(Z()),K.name)}
      ${kc()}
      <div class="stats">
        ${C(`Progress`,n+`/`+t.length,`Checklist steps`)}
        ${C(`Delivery time`,S(e.hours)+` h`,`At steady state; excludes construction`)}
        ${C(`Buildings`,S(e.rows?.reduce((e,t)=>e+t.machines,0)),`Includes new power generation`)}
        ${C(`New power`,V(e.generationMW),`Existing spare power is separate`)}
      </div>
      ${Z()===`post`&&b`<div class="notice blue">
        Retain these Phase 5 capacities. Prioritize storage and teleporter supply; reduce former
        elevator exports as needed and sink spare parts.
      </div>`}
      <div class="split">
        <section>
          <div class="section-head">
            <h2>Build sequence</h2>
            ${Qc()}
          </div>
          <p class="small muted">
            Start with construction stock and currently available power. Mark HUB, MAM and recipe
            unlocks as you complete them; these carry across phases. Milestone cost guidance updates
            from factories marked running. Full-phase factory targets follow the startup and unlock
            steps.
          </p>
          ${el(t)}${tl()}
          <form id="add-task" class="inline-form">
            <input
              name="title"
              maxlength="240"
              required
              placeholder="Add a task…"
              aria-label="Personal task"
            /><button class="btn">Add task</button>
          </form>
          <h2>Phase notes</h2>
          <textarea id="phase-note" class="notes" maxlength="6000">
${X.notes[`phase-`+Z()]||``}</textarea
          >
          <button class="btn" data-save-note="phase-${Z()}" data-input="phase-note">
            Save notes
          </button>
        </section>
        <aside>
          <section class="panel">
            <h2>Elevator delivery</h2>
            ${Object.entries(e.delivery||{}).map(([e,t])=>Tc({id:Q()+`-`+Ae(e),name:e,...t,initial:0}))}
          </section>
          <section class="panel">
            <h2>Profile assumptions</h2>
            ${q.warnings.map(e=>b`<p class="small">${e}</p>`)}
          </section>
        </aside>
      </div>`)}function jc(e,t=null){let n=Object.values(e.outputs||{})[0]||0,r=Object.entries(e.outputs).map(([e,t])=>`${e}: ${S(t)}/min`),i=`calc-`+Q()+`-`+e.id;return b`<article class="factory-card">
    <div class="card-top">
      <span class="card-icon">${w(Object.keys(e.outputs)[0])}</span>
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
        ><input type="checkbox" data-check="${i}" ${y(yp(i))} />Running</label
      ><button class="btn quiet" data-calc-factory="${e.id}">Details ↗</button>
    </footer>
    ${np&&cc(e.id)}
  </article>`}function Mc(){let e=(Cp().rows||[]).filter(e=>(e.name+` `+Object.keys(e.outputs).join(` `)).toLowerCase().includes(Yf.toLowerCase())),t=e.filter(e=>!oc(e.id).length),n=uc(e,e=>e.id,(e,t)=>jc(e,t));return String(b`${Af(`CALCULATED PRODUCTION`,`Factory targets`,`Each recipe line includes its inputs, whole buildings and later expansion. Multiple recipes for a part can share one site.`)}
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
      ${kc()}
      <div class="toolbar">
        <input
          id="factory-search"
          class="search"
          aria-label="Find a factory"
          placeholder="Find a part or recipe…"
          value="${Yf}"
        /><span>${e.length} production lines</span>${dc()}
      </div>
      ${np&&lc()}${n}${n.length>0&&t.length>0&&b`<p class="eyebrow">UNGROUPED PRODUCTION LINES</p>`}
      <div class="cards">${t.map(e=>jc(e))}</div>`)}function Nc(e){let t=e.equivalent||e.machines-1+e.lastClock/100,n=Math.floor(t+1e-7),r=Math.max(0,t-n),i=r>1e-7,a=Object.fromEntries(Object.entries(e.outputs||{}).map(([e,n])=>[e,n/t])),o=Object.entries(a).map(([e,t])=>`${S(t)} ${e}/min`).join(` · `)||`${S(e.generationMW/t)} MW`,s=Object.entries(a).map(([e,t])=>`${S(t*r)} ${e}/min`).join(` · `)||`${S(e.generationMW/t*r)} MW`,c=`${e.machines} ${e.machine} total: ${i?(n?n+` at 100% + `:``)+`1 adjustable machine`:n+` at 100% (no underclock needed)`}.`,l=/uranium|plutonium|ficsonium|waste|non-fissile/i.test([e.name,...Object.keys(e.inputs||{}),...Object.keys(e.outputs||{})].join(` `)),u=null;if(i&&!l){let n=Math.ceil(r*100-1e-7),i=Object.entries(a)[0];if(i){let e=Math.ceil(i[1]*r-1e-7)/i[1]*100;e<=100&&Math.abs(e-Math.round(e))<1e-7&&(n=Math.max(n,Math.round(e)))}let o=n/100-r;o>1e-7&&(u={clock:n,output:Object.fromEntries(Object.entries(a).map(([e,t])=>[e,t*n/100])),inputs:Object.fromEntries(Object.entries(e.inputs||{}).map(([e,n])=>[e,n/t*o])),extraOutputs:Object.fromEntries(Object.entries(a).map(([e,t])=>[e,t*o]))})}return{summary:c,whole:n,partial:i,fullOutput:o,lastOutput:s,clock:r*100,easy:u}}function Pc(e){let t=Nc(e);return b`<h3>Machine setup</h3>
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
    </p>`}`}function Fc(e){let t=0;return b`${vp(q.stages).map(([n,r])=>{let i=r.rows?.find(t=>t.id===e)?.machines||0,a=Math.max(0,i-t);return t=Math.max(t,i),b`<tr>
      <td>${n}</td>
      <td>${i||`—`}</td>
      <td>${a?`+`+a:`—`}</td>
    </tr>`})}`}function Ic(e){let t=Cp().rows?.find(t=>t.id===e);if(!t)return;let n=Ws(t),r=Object.keys(t.outputs||{})[0]||``;_c(t.name,bp(Z()),b`${Bs(n)}${Pc(t)}${Hs(n)}
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
          ${Fc(e)}
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
      </button>`,r)}function Lc(){let e=Cp(),t=q.settings,n=e.conversions||[];return String(b`${Af(`CHECK BEFORE EXPANDING`,`Power & resources`,`New production and new generator fuel are included. Existing fuel consumption must already be deducted from your entered budgets.`)}
      ${kc()}
      <div class="stats">
        ${C(`New generation`,V(e.generationMW),`Fuel and recycling included`)}
        ${C(`Whole-machine peak`,V(e.peakMW),`At selected consumption multiplier`)}
        ${C(`With utility allowance`,V(e.requiredMW),(t.utilityPercent??20)+`% for transport and utilities; verify actual load`)}
        ${C(`Existing spare power`,V(t.availablePowerGW*1e3),`Not total installed generation`)}
        ${e.sloopsUsed>0&&C(`Somersloops in production`,S(e.sloopsUsed),`Amplified machines: double output, four times the power`)}
        ${e.augmenters>0&&C(`With augmenter boost`,V(e.availableMW),S(e.augmenters)+` augmenter`+(e.augmenters>1?`s`:``)+` · `+S(e.augmenterMW)+` MW plus `+Math.round(e.boost*100)+`% of base production`)}
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
                  <td class="resource-name">${w(n)}<span>${n}</span></td>
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
      </div>`)}function Rc(){let e=X?.taskEdits||{};return{order:e.order||{},removed:e.removed||[],titles:e.titles||{},bodies:e.bodies||{},links:e.links||{}}}function zc(e){let t=Rc(),n=new Set(t.removed),r=e.filter(e=>!n.has(e.id)).map(e=>({...e,title:t.titles[e.id]||e.title,body:t.bodies[e.id]||e.body})),i=t.order[Z()];if(!i?.length)return r;let a=new Map(i.map((e,t)=>[e,t]));return[...r.filter(e=>a.has(e.id)).sort((e,t)=>a.get(e.id)-a.get(t.id)),...r.filter(e=>!a.has(e.id))]}function Bc(){return q?[...Dc(),...X.customTasks.filter(e=>e.phase===Z())]:nl()}function Vc(){return zc(Bc())}var Hc=e=>e.match(/^calc-(?:[1-5]|post)-(.+)$/)?.[1]||``;function Uc(e){let t=Rc().links[e.id]||Hc(e.id);if(!t)return``;if(q){let e=(Cp().rows||[]).find(e=>e.id===t);return e?b`<button class="btn quiet task-link" data-calc-factory="${e.id}">
          Open factory: ${e.name} ↗
        </button>`:``}let n=Y.factories.find(e=>e.id===t&&e.stages[Q()]);return n?b`<button class="btn quiet task-link" data-factory="${n.id}">
        Open factory: ${n.name} ↗
      </button>`:``}function Wc(e){let t=q?(Cp().rows||[]).map(e=>[e.id,e.name]):Y.factories.filter(e=>e.stages[Q()]).map(e=>[e.id,e.name]),n=Rc().links[e.id]||Hc(e.id);return b`<form class="task task-edit" data-task-edit="${e.id}">
    <label class="field"
      >Step title<input name="title" maxlength="240" required value="${e.title}"
    /></label>
    <label class="field"
      >Details<textarea name="body" class="notes" maxlength="6000">${e.body||``}</textarea>
    </label>
    <label class="field"
      >Linked factory<select name="link">
        <option value="">No linked factory</option>
        ${t.map(([e,t])=>b`<option value="${e}" ${e===n&&y(`selected`)}>${t}</option>`)}
      </select></label
    >
    <div class="task-edit-actions">
      <button class="btn primary" type="submit">Save step</button>
      <button class="btn" type="button" data-cancel-task-edit>Cancel</button>
    </div>
    <p class="small muted">
      Restore the original text by clearing a field. The step keeps its checkmark either way.
    </p>
  </form>`}var Gc={production:`<path d="M3 20.5h18M5.5 20.5v-9l4 2.6v-2.6l4 2.6v-2.6l4 2.6v6.4M17.5 9.2V4h2.2v5.2"/>`,build:`<path d="M3.5 3.5h17v17h-17zM3.5 9.2h17M3.5 14.8h17M9.2 3.5v17M14.8 3.5v17"/>`,power:`<path d="M13.4 2.5 4.8 13.6h5.3l-.9 7.9 8.6-11.1h-5.3z"/>`,biomass:`<path d="M20.5 3.5C9.5 3.5 4 8.8 4 14.8a5.2 5.2 0 0 0 5.2 5.2c6 0 11.3-5.5 11.3-16.5Z"/><path d="M5.5 19C9 13 13.2 9.7 18.5 7.4"/>`,nuclear:`<circle cx="12" cy="12" r="1.9"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(120 12 12)"/>`,fluid:`<path d="M12 3.2c4 5 6.4 8.1 6.4 11a6.4 6.4 0 1 1-12.8 0c0-2.9 2.4-6 6.4-11Z"/>`,milestone:`<rect x="4" y="10.4" width="16" height="10.6" rx="1.4"/><path d="M8.2 10.4V7.2A3.9 3.9 0 0 1 16 6.6"/><path d="M12 14.3v3"/>`,research:`<path d="M9.4 3.2v6.4l-4.8 8.6A2 2 0 0 0 6.3 21.2h11.4a2 2 0 0 0 1.7-3L14.6 9.6V3.2"/><path d="M7.9 3.2h8.2M7.3 15.2h9.4"/>`,harddrive:`<rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="12" cy="12" r="3.3"/><circle cx="12" cy="12" r=".5"/>`,storage:`<rect x="3.2" y="5.6" width="17.6" height="13.4" rx="1.2"/><path d="M3.2 10.4h17.6M12 10.4V19M7.6 5.6v4.8M16.4 5.6v4.8"/>`,delivery:`<path d="M12 2.4c3 2.7 4.7 6.4 4.7 10.5v3H7.3v-3C7.3 8.8 9 5.1 12 2.4Z"/><path d="M7.3 12.8 4 15.6v3.6l3.3-1.7M16.7 12.8 20 15.6v3.6l-3.3-1.7M10.4 21.3h3.2"/><circle cx="12" cy="9.4" r="1.6"/>`,logistics:`<path d="M3.5 17.5h5.2a4.2 4.2 0 0 0 4.2-4.2v-2.6a4.2 4.2 0 0 1 4.2-4.2h3.4"/><path d="m17.4 3.4 3.1 3.1-3.1 3.1"/>`,portal:`<circle cx="12" cy="12" r="8.8"/><circle cx="12" cy="12" r="4.4"/><path d="M12 3.2v2.6M12 18.2v2.6M3.2 12h2.6M18.2 12h2.6"/>`,survey:`<circle cx="10.6" cy="10.6" r="6.6"/><path d="m15.4 15.4 5.1 5.1"/>`,retire:`<circle cx="12" cy="12" r="8.8"/><path d="m5.8 5.8 12.4 12.4"/>`,note:`<path d="m4 20.2.9-4.2L16 4.9l3.3 3.3L8.2 19.3z"/><path d="m14.4 6.5 3.3 3.3"/>`},Kc=[[/^custom-/,`note`],[/^recipe-unlock-|^hard-drives-/,`harddrive`],[/^retire-/,`retire`],[/^portal-supply/,`portal`],[/^drone-fuel-/,`logistics`],[/^startup-(?:biomass|solid-biofuel|burner-bank)/,`biomass`],[/^startup-nuclear-/,`nuclear`],[/^startup-aluminum-/,`fluid`],[/^startup-\d+-power-review$|^startup-coal-unlock$|^startup-fuel-|^preferred-power-/,`power`],[/^early-base-hub$/,`build`],[/^early-base-logistics$/,`logistics`],[/^early-base-reserves$/,`storage`],[/^early-base-/,`production`]],qc=[[/retire|dismantle|decommission/,`retire`],[/portal/,`portal`],[/nuclear|uranium|plutonium|ficsonium|radioactive/,`nuclear`],[/drone/,`logistics`],[/deliver|elevator/,`delivery`],[/survey|verify|resilience|review|\btest\b/,`survey`],[/power|generator|fuel|coal/,`power`],[/storage|container/,`storage`],[/unlock|milestone|research/,`milestone`],[/logistic|belt|train|sorter|collectable/,`logistics`],[/aluminum|water/,`fluid`],[/concrete|construction|foundation|workshop|hub/,`build`]];function Jc(e){let t=e.id||``;if(t.startsWith(`unlock-`))return/^mam:/i.test(e.title||``)?`research`:`milestone`;for(let[e,n]of Kc)if(e.test(t))return n;let n=(t+` `+(e.title||``)).toLowerCase();for(let[e,t]of qc)if(e.test(n))return t;return`production`}function Yc(e){let t=Rc().links[e.id]||Hc(e.id);if(!t)return``;if(q){let e=(Cp().rows||[]).find(e=>e.id===t);return e&&Object.keys(e.outputs||{})[0]||``}let n=Y.factories.find(e=>e.id===t&&e.stages[Q()]);return n?n.name:``}function Xc(e){let t=Yc(e);if(t)return b`<span class="task-icon" data-kind="item" aria-hidden="true"
      >${w(t)}</span
    >`;let n=Jc(e);return b`<span class="task-icon" data-kind="${n}" aria-hidden="true"
    ><svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${y(Gc[n])}
    </svg></span
  >`}function Zc(e){if(ep&&tp===e.id)return Wc(e);let t=ep&&b`<span class="task-tools"
      ><button
        class="btn quiet"
        data-move-task="${e.id}"
        data-dir="-1"
        aria-label="Move up: ${e.title}"
      >
        ↑</button
      ><button
        class="btn quiet"
        data-move-task="${e.id}"
        data-dir="1"
        aria-label="Move down: ${e.title}"
      >
        ↓</button
      ><button class="btn quiet" data-edit-task="${e.id}">Edit</button
      ><button class="btn quiet danger" data-remove-step="${e.id}">Remove</button></span
    >`;return b`<article class="task ${ep?`is-editing`:``}">
    <input
      type="checkbox"
      data-check="${e.id}"
      aria-label="Complete: ${e.title}"
      ${y(yp(e.id))}
    />${Xc(e)}
    <details data-task="${e.id}">
      <summary>${e.title}</summary>
      <p>${e.body||`Your own task for this phase.`}</p>
      ${Uc(e)}${e.id.startsWith(`custom-`)&&!ep&&b`<button class="delete-task" data-remove="${e.id}">Delete personal task</button>`}
    </details>
    ${t}
  </article>`}function Qc(){return b`<button class="btn ${ep?`primary`:``}" data-toggle-plan-edit>
    ${ep?`Done editing`:`Edit steps`}
  </button>`}function $c(e){let t=Yf.trim().toLowerCase();return e.filter(e=>(!Qf||!$(e.id))&&(!t||(e.title+` `+(e.body||``)).toLowerCase().includes(t)))}function el(e){let t=$c(e),n=e.length?Yf.trim()?`No steps match this search.`:`Every step of this phase is completed. Untick “Hide completed” to review them.`:`Every step of this phase is removed. Use Removed steps below to restore them.`;return b`${e.length>0&&b`<div class="checklist-tools">
      <input
        id="plan-search"
        class="search"
        placeholder="Find a step…"
        aria-label="Find a step"
        value="${Yf}"
      /><label class="check-row small"
        ><input type="checkbox" id="hide-done" ${Qf&&y(`checked`)} />Hide completed</label
      ><span class="small muted"
        >${t.length!==e.length&&t.length+` of `+e.length+` steps`}</span
      >
    </div>`}
    <div class="checklist">
      ${t.length?t.map(Zc):b`<div class="empty-state">${n}</div>`}
    </div>`}function tl(){if(!ep)return``;let e=new Set(Rc().removed),t=Bc().filter(t=>e.has(t.id));return t.length?b`<details class="panel removed-steps">
    <summary>Removed steps in this phase (${t.length})</summary>
    ${t.map(e=>b`<div class="removed-step">
          <span>${Xc(e)}${e.title}</span
          ><button class="btn quiet" data-restore-task="${e.id}">Restore</button>
        </div>`)}
  </details>`:``}function nl(){return[...Y.phases[Z()],...X.customTasks.filter(e=>e.phase===Z())]}var rl=[`How you mine`,`Ore nodes`,`Resource wells`,`Your budgets`],il=`https://satisfactory-calculator.com/en/interactive-map`;function al(e){return e.extraction||=e.settings.extraction?structuredClone(e.settings.extraction):ce(e.settings),e.extraction}var ol=(e,t,n)=>ie.map(([r,i])=>b`<label class="field count-cell"
        ><span>${i}</span
        ><input
          name="${e}:${t}:${r}"
          type="number"
          min="0"
          max="10000"
          step="1"
          value="${n[r]||0}"
          aria-label="${i} ${t} ${e===`well`?`well satellites`:`nodes`}"
      /></label>`);function sl(e,t,n){let i=e===`well`?n.wells:n.nodes;return b`<div class="count-table">
    ${t.map(t=>{let a={...r(),...i[t]||{}},o=e===`well`?ie.reduce((e,[t])=>e+(Number(a[t])||0)*pe(t,n),0):ie.reduce((e,[r])=>e+(Number(a[r])||0)*_(t,r,n),0);return b`<div class="count-row">
        <span class="count-name">${w(t)}<span>${t}</span></span>
        ${ol(e,t,a)}
        <span class="count-total">${o?S(Math.round(o))+`/min`:`—`}</span>
      </div>`})}
  </div>`}var cl=()=>{let e=J.settings,t=al(J),n=p(e.purity,e.distribution),r=e.distribution===`randomized`&&!n&&te.includes(e.purity),i=m(t),a=(g.find(([e])=>e===i)||[,``])[1],s=e.distribution===`randomized`?` Random moves nodes around the map; as far as the community has established, it does not change how many of each resource there are. Nitrogen wells are left for you: a well is randomized whole and the map’s wells hold different numbers of satellites, so a shuffle can still leave you more or less nitrogen than the default map.`:``,c;return c=n&&i===e.purity?b`<p class="small">
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
  </div>`};function ll(){let e=al(J);J.extractionUndo=JSON.parse(JSON.stringify(e)),J.extraction={...i(),mark:e.mark,clock:e.clock}}function ul(){J.extractionUndo&&(J.extraction=J.extractionUndo,J.extractionUndo=null)}function dl(){let t=J,n=al(t),r=t.extractionStep,i=[fl,pl,ml,hl][r-1]?.(t,n),a=r>=rl.length;return String(b`${e&&jf()}
      ${Af(`YOUR WORLD`,`Work out your resource budgets`,`Count what your world holds; the planner turns it into the rates it plans against.`)}
      <div class="wizard-progress">
        ${rl.map((e,t)=>b`<button
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
      </form>`)}function fl(e,t){let n=(e,n)=>S(Math.round(_(e,n,t)));return b`<h2>Where your numbers come from</h2>
    <div class="notice blue">
      <b>You do not have to count nodes by hand.</b> Open the
      <a href="${il}" target="_blank" rel="noreferrer"
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
    </div>`}function pl(e,t){return b`<h2>Your ore nodes</h2>
    ${cl()}
    <p>
      How many nodes of each purity your world holds for each ore. ${Es(`extractionNodes`)} Zero
      means zero: a purity your world has none of, or an ore you have not found. Whatever you leave
      at zero, the plan cannot mine — so enter everything you intend to work.
    </p>
    ${sl(`node`,h,t)}`}function ml(e,t){return b`<h2>Resource wells</h2>
    ${cl()}
    <p>
      Crude oil comes from ordinary nodes and from resource wells; nitrogen only from wells.
      ${Es(`extractionWells`)}
    </p>
    <h3>Crude oil nodes</h3>
    ${sl(`node`,[`Crude Oil`],t)}
    <h3>Resource well satellites</h3>
    ${sl(`well`,[`Crude Oil`,`Nitrogen Gas`],t)}
    <div class="notice blue">
      ${w(`Water`)} <b>Water is not counted.</b> Extractors sit on any lake or ocean and
      there is far more coastline than a factory can draw on, so a node count would be a fiction.
      The planner keeps its standing water allowance of ${S(e.settings.limits.Water)}/min, which
      you can still change in All settings if you want to model a genuinely constrained site.
    </div>`}function hl(e,t){let n=[...h,`Crude Oil`,`Nitrogen Gas`],r=n.filter(e=>oe(t,e)<=0);return b`<h2>Your budgets</h2>
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
              <td class="resource-name">${w(e)}<span>${e}</span></td>
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
    </p>`}function gl(e){let t=J,n=al(t),i=new FormData(e),a=new Set(G.catalog.raw||[]);for(let[e,o]of i)if(e===`purity`||e===`distribution`)t.settings[e]=String(o);else if(e===`mark`)n.mark=Number(o);else if(e===`clock`)n.clock=Number(o);else if(e.startsWith(`node:`)||e.startsWith(`well:`)){let[t,i,s]=e.split(`:`);if(!a.has(i)||!ie.some(([e])=>e===s))continue;let c=t===`well`?n.wells??={}:n.nodes??={},l=c[i]||r();l[s]=Math.max(0,Math.floor(Number(o)||0)),l.impure||l.normal||l.pure?c[i]=l:delete c[i]}else if(e.startsWith(`used:`)){let t=e.slice(5);if(!a.has(t))continue;let r=Number(o);String(o).trim()!==``&&Number.isFinite(r)&&r>0?(n.used??={})[t]=r:delete n.used?.[t]}}async function _l(e){let t=J,n=x(`#wizard-form`);if(!Ll&&t&&e!==t.extractionStep&&!(n&&e>t.extractionStep&&!n.reportValidity())){if(n&&gl(n),e<1){vl();return}if(e<=rl.length){t.extractionStep=e,H();return}t.settings.limits=c(t.extraction,t.settings.limits),t.settings.extraction=structuredClone(t.extraction),t.settings.limitsConfirmed=!0,t.preview=null,vl(),U(`Resource budgets set from your nodes. You can still edit any of them in All settings.`)}}function vl(){let e=J;e.mode=e.extractionReturn?.mode||`advanced`,e.step=e.extractionReturn?.step||4,e.extractionReturn?.guidedStep&&(e.guidedStep=e.extractionReturn.guidedStep),e.extractionReturn=null,e.extractionUndo=null,H()}function yl(){let e=J,t=x(`#wizard-form`);t&&(e.mode===`guided`?uu(t):Il(t)),e.extractionReturn={mode:e.mode,step:e.step,guidedStep:e.guidedStep},e.mode=`extraction`,e.extractionStep=1,H()}function bl(e){let t=new Set(e.alternateRecipes||[]),n=new Set(e.preferredRecipes||[]),r=G.catalog.alternates||[];return b`<div class="alt-picker">
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
  </div>`}var xl=e=>{let t=new Set((G?.catalog?.alternates||[]).map(e=>e.id));return[...new Set(Object.values(e?.stages||{}).flatMap(e=>(e.rows||[]).filter(e=>e.alternate||t.has(e.id)).map(e=>e.id)))].sort()};function Sl(e){let t=(G.catalog.alternates||[]).find(t=>t.id===e);if(!t)return;let n=Object.keys(t.outputs)[0],r=(G.catalog.standardRecipes||[]).filter(e=>e.outputs[n]),i=e=>zs({machineCount:1,recipe:{name:e.name.replace(`Alternate: `,``),machine:e.machine,ins:Object.entries(e.inputs||{}),outs:Object.entries(e.outputs||{})}});_c(t.name,t.mam?`MAM research · unlocked in the MAM, not from hard drives · ${t.machine}`:`Alternate recipe · available from Phase ${t.phase} · ${t.machine}`,b`${i(t)}
      ${r.length?b`<h3>Standard ${r.length>1?`recipes`:`recipe`} for ${n}</h3>
            ${r.map(i)}`:b`<p class="small muted">No standard recipe produces ${n}.</p>`}
      <p class="small muted">
        Rates are per machine at 100%, per minute. Alternates are unlocked with hard drives in game;
        ticking a recipe is a planning allowance, not an in-game unlock.
      </p>`,n)}function Cl(e){let t=G.catalog.sloopUses||[],n=e.sloopReserved||[],r=10*(e.augmenters||0)+n.length+(e.amplifySloops||0),i=e.somersloops||0,a=Math.round((.1*((e.augmenters||0)-(e.fueledAugmenters||0))+.3*(e.fueledAugmenters||0))*100),o=e.augmenters||0,s=e.fueledAugmenters||0;return b`<div class="notice blue">
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
    </p>`}function wl(e){let t=e.settings?.existingSupply||{};if(!Object.keys(t).length)return``;let n=Number(e.settings.phase||1),r={};for(let[t,i]of Object.entries(e.stages))if(Number(t)>=n)for(let[e,t]of Object.entries(i.supplied||{}))r[e]=Math.max(r[e]||0,t);let i=Object.entries(e.stages).filter(([e,t])=>t.supplyDropped&&Number(e)>=n).map(([e])=>e);return b`<div class="notice blue supply-notice">
    <b>Crediting production you already run.</b> These lines are not planned again, and neither is
    the chain behind them.
    <ul class="supply-summary">
      ${Object.entries(t).map(([e,t])=>{let n=r[e]||0;return b`<li>
      ${w(e)}<span
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
  </div>`}function Tl(e){let t=e.stages?.[5]?.fuelVerdict;if(!t)return``;if(!t.unfueledFeasible)return b`<div class="notice blue">
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
  </div>`}function El(e){let t=G.saves.find(t=>t.id===e.saveId);if(!t?.profiles.length)return``;let n=t.profiles.find(t=>t.id===e.carryFrom)||t.profiles[0],r=e.carry||{},i=xe(e.preview).length;return b`<section class="panel carry-panel">
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
  </section>`}function Dl(e){let t=(G.catalog.storageItems||[]).filter(t=>fe(t.name,e.storage));if(!t.length)return``;let n=e.storageOverrides||{},r=t.filter(e=>n[e.name]!==void 0).length;return b`<details class="panel rate-picker" ${r>0&&y(`open`)}>
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
  </details>`}function Ol(e,t){let n=J;if(!e?.querySelector(`.carry-list`))return;let r=t||new FormData(e),i=new Set(r.getAll(`carry`).map(String));n.carryFrom=r.get(`carryFrom`)||null,n.carry=Object.fromEntries(be.map(([e])=>[e,i.has(e)]))}function kl(t=null){if(!Hf())return;let r=G.saves.find(e=>e.id===t),i=r?.profiles.find(e=>e.id===r.activeProfile),a=i?.settings||(i?.kind===`original`?{phase:`3`,purity:`pure`,distribution:`randomized`,multiplier:50,powerFactor:.5,availablePowerGW:0,recipes:`all`,pureIngots:!0,sam:`needed`,nuclear:`recycle`,uraniumReactors:1,storage:`all`,storageRate:1,cellsPerMinute:20,goal:`timed`,hours:8,roundRates:!0,wholeMachines:!0,limitsConfirmed:!1,limits:{...G.catalog.pureLimits}}:null);ip({step:1,saveId:t,saveName:r?.name||``,name:``,settings:a?structuredClone(a):{phase:`3`,purity:`vanilla`,distribution:`original`,multiplier:1,powerFactor:1,availablePowerGW:0,recipes:`standard`,pureIngots:!1,sam:`needed`,nuclear:`none`,uraniumReactors:1,storage:`construction`,storageRate:1,cellsPerMinute:0,goal:`balanced`,hours:8,roundRates:!0,wholeMachines:!0,limitsConfirmed:!1,limits:{...G.catalog.limits}},preview:null,carryFrom:r?.activeProfile||null,carry:Object.fromEntries(be.map(([e])=>[e,!0])),mode:`guided`,guidedStep:1,guidedAsk:null,usedGuided:!1,tutorial:`doing`}),a||(J.settings.storageOverrides={Concrete:n}),e&&!a&&(J.settings.phase=`1`),Bf(`wizard`)}function Al(){if(!J)return String(b`${Af(`NEW PROFILE`,`Choose a save first`)}
        <button class="btn primary" data-new-save>Create a save</button
        ><a class="btn" href="#profiles">Existing saves</a>`);let t=J;if(t.mode===`extraction`)return dl();if(t.mode===`guided`&&t.guidedStep<=eu().length)return cu();let n=[jl,Ml,Nl,Pl,Fl][t.step-1];return String(b`${e&&jf()}
      ${Af(`SAVE → SETTINGS → GOALS → PLAN`,t.saveId?`Add a profile to `+t.saveName:`Create your factory plan`)}
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
      </form>`)}function jl(e,t){return b`<h2>Your save and game settings</h2>
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
    ${Gl(t)}
    <p class="small muted">
      Other settings are notes only. Modified recipes, production boosts and modded items are not
      simulated. Phase plans assume the necessary milestones and MAM research are unlocked by
      commissioning.
    </p>`}function Ml(e,t){let n=(e,t,n,r)=>Ds(e,t,n,`number`,r+` required`);return b`<h2>How do you want to build?</h2>
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
    ${Cl(t)}${Dl(t)}${t.recipes===`custom`&&bl(t)}
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
    </p>`}function Nl(e,t){let n=t.multiplier>5?`timed`:`balanced`;return b`<h2>Choose your production goal</h2>
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
    </p>`}function Pl(e,t){return b`<h2>Available resource budgets</h2>
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
    >`}function Fl(e){let t=e.preview,n=Number(t.settings.phase||1),r=Object.entries(t.stages).filter(([e])=>Number(e)>=n);return b`<h2>Review ${e.name}</h2>
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
    ${wl(t)}${Tl(t)}
    ${r.filter(([,e])=>!e.feasible).map(([e,n])=>b`<div class="notice">
            <b>Phase ${e}:</b> ${n.reason}${Oc(n,t.settings)}
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
    ${El(e)}`}function Il(e){let t=new FormData(e),n=J,r=n.settings,i=r.purity+`|`+r.distribution;for(let[e,i]of t)e===`availablePowerMW`&&(r.availablePowerGW=Number(i)/1e3),e===`installedPowerMW`&&(r.installedPowerGW=Number(i)/1e3),e===`saveName`&&(n.saveName=i),e===`profileName`?n.name=i:e.startsWith(`limit:`)?r.limits[e.slice(6)]=Number(i):[`utilityPercent`,`droneFuelRate`,`droneBridgeRate`,`multiplier`,`powerFactor`,`availablePowerGW`,`uraniumReactors`,`storageRate`,`buildRate`,`cellsPerMinute`,`somersloops`,`augmenters`,`fueledAugmenters`,`amplifySloops`,`hours`].includes(e)?r[e]=Number(i):e===`collectables`?r.collectables=i===`true`:e===`pureIngots`?r[e]=i===`true`:[`phase`,`purity`,`distribution`,`recipes`,`sam`,`nuclear`,`storage`,`goal`,`phaseTime`,`modNotes`,`mainPower`,`worldSeed`,`droneFuel`].includes(e)&&(r[e]=i);e.querySelector(`[name=sloop]`)&&(r.sloopReserved=t.getAll(`sloop`).map(String)),e.querySelector(`.alt-list`)&&(r.alternateRecipes=t.getAll(`alt`).map(String),r.preferredRecipes=t.getAll(`altpref`).map(String).filter(e=>r.alternateRecipes.includes(e)));{let n=Kl(e,t);n&&(r.existingSupply=n)}if(e.querySelector(`.rate-list`)){let e={};for(let[n,r]of t)n.startsWith(`rate:`)&&String(r).trim()!==``&&Number.isFinite(Number(r))&&(e[n.slice(5)]=Number(r));r.storageOverrides=e}n.step===3&&(r.roundRates=t.has(`roundRates`),r.wholeMachines=t.has(`wholeMachines`)),n.step===4&&(r.limitsConfirmed=t.has(`limitsConfirmed`)),Ol(e,t),n.step===1&&i!==r.purity+`|`+r.distribution&&(r.limits=ae(r.purity,r.distribution).limits,r.limitsConfirmed=!1),n.preview=null}var Ll=!1,Rl=(e,t)=>(e&&(e.textContent=t),{onProgress:n=>{e&&(e.textContent=`${t} Phase ${n} of 5…`)}});function zl(e,t){let n=e?.querySelector(`.form-error`);if(!n){U(t.message,!0);return}/timed out/i.test(t.message)?n.innerHTML=String(b`${t.message}<span class="error-options"
          ><b>Ways to get a plan:</b
          ><span>Try again — speed varies with your device and other open tabs.</span
          ><span
            >In the recipe picker, use <b>Planner’s choice</b> or untick alternates you don’t need;
            many recipes for the same product slow the search the most.</span
          ><span
            >In Goals, turn off whole-machine production — exact balancing calculates much
            faster.</span
          ><span>Lower the elevator multiplier or allow more hours per phase.</span></span
        >`):n.textContent=t.message}async function Bl(e){if(Ll||!J||e===J.step||e<1||e>5)return;let t=x(`#wizard-form`);if(!(e>J.step&&!t.reportValidity())){if(Il(t),e!==5){J.step=e,H();return}await Vl(t)}}async function Vl(e){Ll=!0;let t=document.querySelectorAll(`[data-wizard-step],[data-guided-advanced],#wizard-form button`);t.forEach(e=>e.disabled=!0);let n=e?.querySelector(`button[type="submit"]`),r=n?.textContent;try{J.name=J.name.trim()||G.catalog.goals.find(e=>e.id===J.settings.goal).name,J.preview=await zf(`/api/preview`,{settings:J.settings},!0,Rl(n,`Calculating…`)),J.step=5,J.guidedStep=eu().length+1,H()}catch(t){zl(e,t),n&&(n.textContent=r)}finally{Ll=!1,t.forEach(e=>e.disabled=!1)}}var Hl=8;function Ul(e){let t=String(e||``).trim().toLowerCase();if(!t)return[];let n=[],r=[];for(let e of G.catalog.supplyItems||[]){let i=e.toLowerCase();i.startsWith(t)?n.push(e):i.includes(t)&&r.push(e)}return[...n,...r].slice(0,Hl)}function Wl(e){return Array.isArray(e.supplyRows)||(e.supplyRows=Object.entries(e.settings.existingSupply||{}).map(([e,t])=>({name:e,rate:String(t)}))),e.supplyRows}function Gl(e){let t=[...Wl(J),{name:``,rate:``}],n=new Set(G.catalog.supplyItems||[]),r=e=>e.name.trim()?n.has(e.name.trim())?String(e.rate).trim()?``:b`<span class="supply-hint"
              >Add a rate and this line is credited; leave it blank and it is not.</span
            >`:b`<span class="supply-hint warn">No item of that name — pick one from the list.</span>`:``;return b`<div class="supply-picker">
    <div class="supply-list">${t.map((e,t)=>{let i=e.name.trim(),a=n.has(i);return b`<div class="supply-row" data-supply-row="${t}">
      <div class="supply-field">
        <label class="field"
          >Item<span
            class="supply-input${a?` has-icon`:``}"
            data-icon="${a?i:``}"
            >${a&&w(i)}<input
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
  </div>`}function Kl(e,t){if(!e?.querySelector?.(`.supply-list`))return null;let n=new Set(G.catalog.supplyItems||[]),r=t.getAll(`supplyItem`).map(e=>String(e)),i=t.getAll(`supplyRate`).map(e=>String(e)),a=r.map((e,t)=>({name:e,rate:i[t]??``})).filter(e=>e.name.trim()||String(e.rate).trim());J.supplyRows=a;let o={};for(let e of a){let t=e.name.trim(),r=Number(e.rate);n.has(t)&&String(e.rate).trim()!==``&&Number.isFinite(r)&&r>0&&(o[t]=r)}return o}function ql(e){let t=e.closest(`.supply-field`);if(!t)return;let n=t.querySelector(`.supply-options`);if(!n)return;let r=Ul(e.value).filter(t=>t.toLowerCase()!==e.value.trim().toLowerCase());if(!r.length){Yl(e);return}n.innerHTML=String(b`${r.map(e=>b`<button
          type="button"
          role="option"
          aria-selected="false"
          class="supply-option"
          data-supply-pick="${e}"
        >
          ${w(e)}<span>${e}</span>
        </button>`)}`),n.hidden=!1,e.setAttribute(`aria-expanded`,`true`)}function Jl(e){let t=e.closest(`.supply-input`);if(!t)return;let n=e.value.trim(),r=(G.catalog.supplyItems||[]).includes(n)?n:``;t.dataset.icon!==r&&(t.dataset.icon=r,t.querySelector(`.item-icon`)?.remove(),t.classList.toggle(`has-icon`,!!r),r&&t.insertAdjacentHTML(`afterbegin`,w(r)))}function Yl(e){let t=e?.closest(`.supply-field`)?.querySelector(`.supply-options`);t&&(t.hidden=!0,t.innerHTML=``),e?.setAttribute(`aria-expanded`,`false`)}function Xl(e){let t=e.closest(`.supply-field`)?.querySelector(`input[name=supplyItem]`);if(!t)return;let n=Number(e.closest(`.supply-row`)?.dataset.supplyRow??-1);t.value=e.dataset.supplyPick,Yl(t);let r=x(`#wizard-form`);r&&(J.mode===`guided`?uu(r):Il(r)),H(),[...document.querySelectorAll(`.supply-row`)][n]?.querySelector(`input[name=supplyRate]`)?.focus()}var Zl={minimal:`<path d="M4 20h4v-6H4zM10 20h4v-9h-4z"/><path d="M17 5v9M17 14l-2.5-3M17 14l2.5-3"/>`,balanced:`<path d="M12 4v16M6 20h12"/><path d="M3 9h18"/><path d="M6 9l-3 5h6zM18 9l-3 5h6z"/>`,timed:`<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 3h6"/>`,maximum:`<path d="M4 18a8 8 0 0 1 16 0"/><path d="M12 18l5-6"/><path d="M12 18h.01"/>`,standard:`<rect x="4" y="5" width="16" height="14" rx="1"/><path d="M8 10h8M8 14h5"/>`,alternates:`<path d="M5 19V9a3 3 0 0 1 3-3h11"/><path d="M16 3l3 3-3 3"/><path d="M5 19h6a3 3 0 0 0 3-3v-1"/>`,custom:`<path d="M4 7h9M4 12h9M4 17h6"/><path d="M15 15l2.5 2.5L22 13"/>`,"stock-none":`<path d="M4 8h16v11H4z"/><path d="M4 8l2-3h12l2 3"/><path d="M9 12h6" opacity=".35"/>`,"stock-build":`<path d="M4 8h16v11H4z"/><path d="M4 8l2-3h12l2 3"/><path d="M8 12h8M8 15h8"/>`,"stock-all":`<path d="M3 13h8v7H3zM13 13h8v7h-8z"/><path d="M8 4h8v7H8z"/>`,whole:`<rect x="3" y="7" width="5" height="11"/><rect x="9.5" y="7" width="5" height="11"/><rect x="16" y="7" width="5" height="11"/><path d="M3 4h18"/>`,precise:`<circle cx="12" cy="12" r="8"/><path d="M12 12l4-3"/><path d="M12 4v2M20 12h-2M12 20v-2M4 12h2"/>`,tutorial:`<path d="M6 4v16"/><path d="M6 5h11l-2.5 3.5L17 12H6z"/>`,"tutorial-done":`<path d="M6 4v16"/><path d="M6 5h11l-2.5 3.5L17 12H6z"/><path d="M13 18l2 2 4-4"/>`},Ql=e=>b`<span class="guided-art" aria-hidden="true"
    ><svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${y(Zl[e]||Zl.balanced)}
    </svg></span
  >`,$l=e=>b`<span class="guided-art items" aria-hidden="true"
    >${e.slice(0,4).map(e=>w(e))}</span
  >`;function eu(){let e=J,t=[];for(let n of l)t.push(n),n.id===`phase`&&!e.saveId&&t.push(u(String(e.settings.phase||`3`)));return e.guidedAsk?t.filter(t=>e.guidedAsk.includes(t.id)):t}var tu=e=>{let t=J,n=t.settings;return e.id===`tutorial`?t.tutorial||`doing`:e.id===`standing`?t.standing||`none`:e.id===`exact`?n.wholeMachines===!1?`precise`:`whole`:e.id===`stock`?e.options.some(e=>e.value===n.storage)?n.storage:`construction`:String(n[e.id]??``)};function nu(e){let t=tu(e);return b`<div class="guided-grid">
    ${e.options.map(n=>b`<label class="guided-card${n.value===t?` is-picked`:``}">
          <input
            type="radio"
            name="guided:${e.id}"
            value="${n.value}"
            aria-label="${n.label+`. `+n.detail}"
            ${n.value===t&&y(`checked`)}
          />
          ${n.items?$l(n.items):Ql(n.glyph)}
          <strong>${n.label}</strong>
          <p>${n.detail}</p>
          ${n.handoff&&b`<span class="badge">Opens All settings</span>`}
        </label>`)}
  </div>`}function ru(e){if(e.storage===`none`)return``;let t=e.storageOverrides||{};return b`<fieldset class="guided-topup">
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
            />${w(e)}<span>${e}</span></label
          >`)}
    </div>
  </fieldset>`}function iu(){let e=J,t=e.settings,n=G.saves.find(t=>t.id===e.saveId),r=n?.profiles.find(t=>t.id===(e.carryFrom||n.activeProfile))||n?.profiles[0],i=[[`Phase`,`Phase `+(t.phase||`3`)],[`Goal`,(G.catalog.goals.find(e=>e.id===t.goal)||{}).name||t.goal],[`Recipes`,t.recipes===`all`?`All alternates`:t.recipes===`custom`?S((t.alternateRecipes||[]).length)+` picked`:`Standard only`],[`Stocked`,(le.find(([e])=>e===t.storage)||[,t.storage])[1]],[`Machines`,t.wholeMachines===!1?`Exact ratios`:`Whole machines`]];return b`<h2>What is different this time?</h2>
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
    </p>`}function au(e){return e.tutorial===`done`?[...de]:[]}function ou(e){let t=J,r=t.settings,i=new FormData(e);if(e.querySelector?.(`.guided-topics`)){let e=i.getAll(`topic`).map(String);t.guidedAsk=l.filter(t=>e.includes(t.id)).map(e=>e.id)}for(let e of eu()){if(!e.options)continue;let n=i.get(`guided:`+e.id);if(n===null)continue;let a=e.options.find(e=>e.value===String(n));a&&(e.id===`tutorial`&&(t.tutorial=a.value),Object.assign(r,a.set))}{let t=Kl(e,i);t&&(r.existingSupply=t)}if(i.has(`hours`)&&(r.hours=Number(i.get(`hours`))),e.querySelector?.(`.guided-topup`)){r.storageRate=1,r.buildRate=1;let e=i.getAll(`topup`).map(String).filter(e=>d.includes(e)),t={};for(let r of e)t[r]=n;r.storageOverrides=t}r.goal!==`timed`&&(r.phaseTime=`every`),r.storage===`none`&&(r.storageOverrides={}),t.preview=null}function su(e,t){return b`<div class="guided-progress" role="list">
    ${e.map((e,n)=>b`<span
          role="listitem"
          class="${n===t?`current`:n<t?`done`:``}"
          ${n===t&&y(`aria-current="step"`)}
          ><i></i>${e.short||e.title.replace(/\?$/,``)}</span
        >`)}
  </div>`}function cu(){let t=J,n=t.settings,r=eu(),i=t.saveId&&t.guidedAsk===null,a=i?-1:Math.min(t.guidedStep-1,r.length-1),o=i?null:r[a],s;s=i?iu():o?b`<h2>${o.title}</h2>
      <p>${o.lead}</p>
      ${o.kind===`supply`?Gl(n):nu(o)}
      ${o.id===`goal`&&n.goal===`timed`&&b`<div class="form-grid guided-follow">
        ${Ds(`Hours per phase`,`hours`,n.hours??8,`number`,`min="0.25" max="2000" step="0.25" required`)}
      </div>`}
      ${o.id===`stock`&&ru(n)}`:b`<h2>Ready to calculate</h2>`;let c=!i&&a>=r.length-1,l=o?.step||1,u=i||t.guidedStep<=1;return String(b`${e&&jf()}
      ${Af(`A FEW QUESTIONS`,t.saveId?`Add a profile to `+t.saveName:`Create your factory plan`,`Answer what matters and the planner fills in the rest. Every setting is still there under All settings.`)}
      ${!i&&su(r,a)}
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
      </form>`)}async function lu(e){let t=J,n=x(`#wizard-form`);if(Ll||!t||e>t.guidedStep&&n&&!n.reportValidity())return;let r=!!t.saveId&&t.guidedAsk===null;n&&uu(n);let i=eu();if(r&&i.length){t.guidedStep=1,H();return}if(e<1){t.guidedStep=1,H();return}let a=i[Math.min(t.guidedStep-1,i.length-1)],o=a?.options?.find(e=>e.value===tu(a))?.handoff;if(o&&e>t.guidedStep){du(o);return}if(e<=i.length){t.guidedStep=e,H();return}await Vl(n)}function uu(e){let t=J,n=new FormData(e);n.has(`saveName`)&&(t.saveName=String(n.get(`saveName`))),n.has(`profileName`)&&(t.name=String(n.get(`profileName`))),ou(e)}function du(e){let t=J,n=x(`#wizard-form`);n&&t.mode===`guided`&&uu(n),t.mode=`advanced`,t.usedGuided=!0,t.step=Math.min(Math.max(e||1,1),4),H()}function fu(){let e=J,t=x(`#wizard-form`);t&&e.mode!==`guided`&&Il(t),e.mode=`guided`;let n=eu();e.guidedStep>=1||(e.guidedStep=1),e.guidedStep=Math.min(e.guidedStep,Math.max(n.length,1)),H()}var pu=`planner-ada`,mu=0,hu=``,gu=Cu();function _u(e){mu=e}function vu(e){gu=e}var yu=null,bu,xu=0,Su=0;function Cu(){try{return localStorage.getItem(pu)===`muted`}catch{return!1}}function wu(){try{localStorage.setItem(pu,gu?`muted`:`on`)}catch{}}function Tu(){let t=Gf.id?Vc():[],n=t.find(e=>!$(e.id)),r=q?Cp():null,i=q?r.rows||[]:Y.factories.filter(e=>e.stages[Q()]),a=q?e=>`calc-`+Q()+`-`+e.id:e=>`factory-`+Q()+`-`+e.id,o=Ys().flatMap(e=>e.items).filter(e=>e.name),s=q?Object.entries(r.delivery||{}).map(([e,t])=>({id:Q()+`-`+Ae(e),target:t.target,initial:0})):Y.deliveries.filter(e=>e.phase===Z()),c=e=>X.deliveries[e.id]??(K.id===`original`?e.initial:0),l=q?(q.settings.availablePowerGW||0)*1e3:0,u=q&&r.additionalHeadroomMW||0;return{view:Jf,phaseLabel:bp(Z()),browserMode:e,planEditing:ep,guided:J?.mode===`guided`,guidedStep:J?.guidedStep||0,guidedTotal:J?eu().length:0,tutorialDone:J?.tutorial===`done`,supplyDeclared:Object.keys(J?.settings?.existingSupply||{}).length,kind:Gf.id?K?.kind||`original`:`none`,save:Gf.name||`this save`,profile:K?.name||`Pioneer`,steps:{done:t.filter(e=>$(e.id)).length,total:t.length},next:n?.title||``,retireOpen:t.filter(e=>e.id.startsWith(`retire-`)&&!$(e.id)).length,factories:{done:i.filter(e=>$(a(e))).length,total:i.length},storage:{done:o.filter(e=>$(`slot-`+e.id+`-verified`)).length,total:o.length},deliveries:{open:s.filter(e=>c(e)<e.target).length,total:s.length},hasPhaseNote:!!X.notes[`phase-`+Z()],customTasks:X.customTasks.filter(e=>e.phase===Z()).length,removedSteps:Rc().removed.length,groups:ac().groups.length,feasible:!q||r.feasible!==!1,reason:q&&r.reason||``,short:q?(G.catalog?.raw||[]).filter(e=>(r.raw?.[e]||0)>(q.settings.limits?.[e]??1/0)):[],power:u>.01?{required:V(r.requiredMW||0),spare:V(l),headroom:V(u),tight:!0}:null,hours:q&&r.hours?S(r.hours)+` h`:``,profiles:G.saves.find(e=>e.id===Gf.id)?.profiles.length||0,backupDays:G.lastBackup?Math.max(0,Math.floor((Date.now()-new Date(G.lastBackup).getTime())/864e5)):null,post:Z()===`post`,startPhase:gp(),assumptions:q?(q.warnings||[]).length:0}}function Eu(){if(yu)return yu;let e=Tu(),t=ge(e);if(!t.length)return null;let n=t.map(e=>e.id).join(`|`);n!==hu&&(hu=n,mu=0);let r=Math.floor(mu/t.length),i=mu%t.length;return r>0&&!i?me(r,e):t[i]}function Du(){clearTimeout(bu),yu=null,xu=0}function Ou(){clearTimeout(bu),xu=Date.now()-Su>2500?1:xu+1,Su=Date.now(),!(xu<5)&&(yu=he(xu-4),bu=setTimeout(()=>{Du(),H()},12e3),H())}function ku(){try{if(gu)return{muted:!0};let e=Eu();return e?{tone:e.tone,name:e.name||``,text:e.text}:null}catch{return null}}var Au={key:0,class:`ada is-muted`},ju=[`data-tone`],Mu={class:`ada-head`},Nu={class:`eyebrow`},Pu={class:`ada-line`,id:`ada-line`,role:`status`,"aria-live":`polite`},Fu={class:`ada-tools`},Iu={__name:`AdaPanel`,setup(e){let t=Eo(()=>ws(ku));function n(){yu?Du():_u(mu+1),Cs()}function r(e){vu(e),wu(),Du(),Cs()}function i(){gu||Ou()}return(e,a)=>t.value?.muted?(I(),L(`div`,Au,[a[2]||=R(`span`,{class:`ada-mark`,"aria-hidden":`true`},`◈`,-1),a[3]||=R(`span`,null,`ADA muted`,-1),R(`button`,{class:`btn quiet`,type:`button`,"data-ada-mute":`off`,onClick:a[0]||=e=>r(!1)},`
      Unmute
    `)])):t.value?(I(),L(`section`,{key:1,class:`ada`,"data-tone":t.value.tone,"aria-label":`ADA`},[R(`div`,Mu,[R(`span`,{class:`ada-mark`,"aria-hidden":`true`,onClick:i},`◈`),a[5]||=B(),R(`div`,null,[R(`b`,null,j(t.value.name||`ADA`),1),a[4]||=B(),R(`div`,Nu,j(t.value.name?`Transmission fault`:`Artificial Directory and Assistant`),1)])]),a[6]||=B(),R(`p`,Pu,j(t.value.text),1),a[7]||=B(),R(`div`,Fu,[R(`button`,{class:`btn quiet`,type:`button`,id:`ada-next`,"data-ada-next":``,onClick:n},`
        Another remark`),R(`button`,{class:`btn quiet`,type:`button`,"data-ada-mute":`on`,onClick:a[1]||=e=>r(!0)},`Mute`)])],8,ju)):eo(``,!0)}},Lu={class:`layout`},Ru={class:`sidebar`},zu={class:`nav`,"aria-label":`Main navigation`},Bu=[`href`,`aria-current`],Vu={class:`navicon`,"aria-hidden":`true`},Hu={class:`save-status`},Uu={id:`saved`},Wu={class:`sidebar-foot`},Gu={key:0},Ku={class:`topbar`},qu={class:`breadcrumbs`},Ju={href:`#profiles`},Yu={class:`small`},Xu=[`disabled`,`value`],Zu=[`value`],Qu={__name:`Shell`,setup(t){let n=[[`plan`,`◫`,`Build plan`],[`factories`,`▥`,`Factories`],[`storage`,`▦`,`Storage room`],[`resources`,`↗`,`Power & resources`],[`backup`,`⇅`,`Backup & notes`]],r=Eo(()=>ws(()=>({view:Jf,saveName:Gf.name,canPickPhase:!!Gf.id,phase:Z(),phases:_p().map(e=>[e,bp(e)]),saved:Nf?`Saving…`:e?`Saved in this browser`:`Saved on server`,footer:i()})));function i(){if(q){let e=q.settings,t=new Date(q.createdAt),n=re.find(([t])=>t===e.purity)?.[1]||e.purity;return[K.name,`${n} purity · ${S(e.multiplier)}× elevator parts`,`${S(e.powerFactor)}× power consumption`,...Number.isNaN(t.getTime())?[]:[`Plan created `+t.toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})]]}return K?.kind===`original`?[K.name,`Pure nodes · 50× elevator parts`,`Half power consumption`,`Plan revised 13 September 2026`]:[`Create or select a profile`]}async function a(e){let t=e.target;t.disabled=!0;try{await W({type:`phase`,value:t.value}),cp(``),H()}catch{t.value=Z()}finally{t.disabled=!1}}return(e,t)=>(I(),L(`div`,Lu,[R(`aside`,Ru,[t[1]||=R(`div`,{class:`brand`},[R(`img`,{src:`./favicon.svg`,alt:``}),B(),R(`div`,null,[B(`
          Project Assembly
          `),R(`div`,{class:`eyebrow`},`FICSIT compliance terminal`)])],-1),t[2]||=B(),R(`nav`,zu,[(I(),L(F,null,bi(n,([e,t,n])=>R(`a`,{key:e,href:`#`+e,class:gt(r.value.view===e?`active`:``),"aria-current":r.value.view===e?`page`:null},[R(`span`,Vu,j(t),1),B(j(n),1)],10,Bu)),64))]),t[3]||=B(),z(Iu),t[4]||=B(),R(`div`,Hu,[t[0]||=R(`span`,{class:`dot`},null,-1),R(`span`,Uu,j(r.value.saved),1)]),t[5]||=B(),R(`div`,Wu,[(I(!0),L(F,null,bi(r.value.footer,(e,t)=>(I(),L(F,{key:t},[t?(I(),L(`br`,Gu)):eo(``,!0),B(j(e),1)],64))),128))])]),t[12]||=B(),R(`div`,null,[R(`header`,Ku,[R(`div`,qu,[R(`a`,Ju,j(r.value.saveName),1),t[6]||=B(),t[7]||=R(`span`,{"aria-hidden":`true`},` / `,-1),B(` `+j(er(bp)(r.value.phase)),1)]),t[9]||=B(),R(`label`,Yu,[t[8]||=B(`Working on
          `,-1),R(`select`,{id:`phase-picker`,"aria-label":`Working phase`,disabled:!r.value.canPickPhase,value:r.value.phase,onChange:a},[(I(!0),L(F,null,bi(r.value.phases,([e,t])=>(I(),L(`option`,{key:e,value:e},j(t),9,Zu))),128))],40,Xu)])]),t[10]||=B(),t[11]||=R(`main`,{id:`main`,class:`workspace`,tabindex:`-1`},null,-1)])]))}},$u={class:`field`},ed=[`autocomplete`],td={key:1,class:`check-row`},nd=[`disabled`],rd={id:`auth-error`,class:`form-error`,role:`alert`},id={__name:`AuthForm`,props:{mode:{type:String,required:!0}},setup(e){let t=e,n=Zn(!1),r=Zn(``);async function i(e){let t=Object.fromEntries(new FormData(e.target));t.registration=new FormData(e.target).has(`registration`),n.value=!0,r.value=``;try{await zf(`/api/`+(G.accountsEnabled?Kf:`setup`),t,!1),await wp()}catch(e){r.value=e.message,n.value=!1}}return(e,a)=>(I(),L(`form`,{id:`auth-form`,class:`panel auth-panel`,onSubmit:hs(i,[`prevent`])},[R(`h2`,null,j(t.mode===`setup`?`Secure your existing save`:t.mode===`register`?`Create your account`:`Sign in`),1),a[7]||=B(),t.mode===`setup`?(I(),L(F,{key:0},[a[0]||=R(`p`,null,`
        Your existing save and progress will belong to this account. Once enabled, visitors must
        sign in.
      `,-1),a[1]||=B(),a[2]||=R(`label`,{class:`field`},[B(`Server setup token`),R(`input`,{name:`setupToken`,required:``,autocomplete:`off`})],-1),a[3]||=B(),a[4]||=R(`p`,{class:`small muted`},`
        Read account-setup-token.txt in the server data folder. With Docker: docker compose exec
        planner cat /data/account-setup-token.txt
      `,-1)],64)):eo(``,!0),a[8]||=B(),a[9]||=R(`label`,{class:`field`},[B(`Username
      `),R(`input`,{name:`username`,type:`text`,value:``,required:``,minlength:`3`,maxlength:`32`,pattern:`[a-zA-Z0-9_-]+`,autocomplete:`username`})],-1),a[10]||=B(),R(`label`,$u,[a[5]||=B(`Password (12–128 characters)
      `,-1),R(`input`,{name:`password`,type:`password`,value:``,required:``,minlength:`12`,maxlength:`128`,autocomplete:t.mode===`login`?`current-password`:`new-password`},null,8,ed)]),a[11]||=B(),t.mode===`setup`?(I(),L(`label`,td,[...a[6]||=[R(`input`,{type:`checkbox`,name:`registration`},null,-1),B(`Allow other people to register their own
      accounts`,-1)]])):eo(``,!0),a[12]||=B(),R(`button`,{class:`btn primary`,disabled:n.value},j(t.mode===`setup`?`Enable accounts`:t.mode===`register`?`Create account`:`Sign in`),9,nd),a[13]||=B(),R(`p`,rd,j(r.value),1)],32))}},ad={class:`signin`},od=[`data-auth-mode`],sd={__name:`SignedOut`,setup(e){let t=Zn(Kf);function n(){t.value=t.value===`login`?`register`:`login`,ap(t.value)}return(e,r)=>(I(),L(`main`,ad,[r[0]||=R(`div`,{class:`brand`},[R(`img`,{src:`./favicon.svg`,alt:``}),B(`Project Assembly`)],-1),r[1]||=B(),r[2]||=R(`h1`,null,`Your factory notebook`,-1),r[3]||=B(),(I(),Ga(id,{key:t.value,mode:t.value},null,8,[`mode`])),r[4]||=B(),er(G).registration?(I(),L(`button`,{key:0,class:`btn quiet`,"data-auth-mode":t.value===`login`?`register`:`login`,onClick:n},j(t.value===`login`?`Create an account`:`Back to sign in`),9,od)):eo(``,!0)]))}},cd=null,ld=null,ud=null;function dd(e){if(cd?.el.isConnected)return;fd(),e.textContent=``;let t=ys(Qu);t.mount(e),cd={app:t,el:e.firstElementChild}}function fd(){md(),ud?.unmount(),ud=null,cd?.app.unmount(),cd=null}function pd(e,t){if(ld?.component===t&&ld.host===e&&e.isConnected)return;md();let n=ys(t);n.mount(e),ld={app:n,component:t,host:e}}function md(){ld?.app.unmount(),ld=null}function hd(e){fd(),e.textContent=``,ud=ys(sd),ud.mount(e)}var gd={class:`heading-row`},_d={class:`eyebrow`},vd={key:0,class:`subtitle`},yd={key:0,class:`badge orange`},bd={__name:`PageHeader`,props:{eyebrow:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,default:``},badge:{type:String,default:``}},setup(e){return(t,n)=>(I(),L(`div`,gd,[R(`div`,null,[R(`div`,_d,j(e.eyebrow),1),n[0]||=B(),R(`h1`,null,j(e.title),1),n[1]||=B(),e.subtitle?(I(),L(`div`,vd,j(e.subtitle),1)):eo(``,!0)]),n[2]||=B(),e.badge?(I(),L(`span`,yd,j(e.badge),1)):eo(``,!0)]))}},xd=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Sd={},Cd={class:`notice blue`};function wd(e,t){return I(),L(`div`,Cd,[...t[0]||=[B(`
    Your saves stay in this browser on this device. Clearing site data or using private browsing can
    remove them. Export a full backup before switching devices or website addresses.
    `,-1),R(`a`,{href:`#backup`},`Backups & transfer`,-1)]])}var Td=xd(Sd,[[`render`,wd]]),Ed={class:`panel`},Dd=[`disabled`],Od={class:`btn`},kd={key:1,class:`panel`},Ad={class:`backup-grid`},jd={class:`panel`},Md=[`href`],Nd={class:`panel`},Pd={class:`btn`},Fd={class:`panel`},Id=[`value`],Ld={class:`panel`},Rd={class:`backup-grid`},zd={class:`panel`},Bd=[`href`],Vd={class:`panel`},Hd={class:`btn`},Ud={class:`panel`,style:{"margin-top":`24px`}},Wd=[`value`],Gd={class:`panel`},Kd={class:`list-links`},qd=[`href`],Jd={__name:`BackupPage`,setup(t){let n=Eo(()=>ws(()=>({kind:e?`browser`:q?`calculated`:`handbook`,saveName:Gf.name,profileName:K.name,exportUrl:`/api/export?save=${Gf.id}&profile=${K.id}`,note:X.notes.global||``,warnings:q?.warnings||[],sources:Y?.sources||[],lastBackup:G.lastBackup?`Last export: `+new Date(G.lastBackup).toLocaleString():`No full backup has been exported from this browser yet.`}))),r=Zn(!1);async function i(){r.value=!0;try{await If,Uf(await Ff(`/api/export-saves`),`satisfactory-full-saves.json`),rp(await Ff(`/api/workspace`)),Cs(),U(`Full save backup downloaded.`)}catch(e){U(e.message,!0)}finally{r.value=!1}}async function a(e){let t=e.target.files[0];if(t)try{if(t.size>52428800)throw Error(`Choose a save export smaller than 50 MB.`);let e=JSON.parse(await t.text());if(!confirm(`Import these saves as new copies? Existing saves will be kept.`))return;await If,await zf(`/api/import-saves`,e,!1),await wp(),Bf(`profiles`),U(`Imported saves. Existing progress was kept.`)}catch(e){U(e.message,!0)}finally{e.target.value=``}}async function o(e){let t=e.target,n=t.files[0];if(n)try{if(n.size>2097152)throw Error(`Choose a backup smaller than 2 MB.`);let e=JSON.parse(await n.text());if(!confirm(`Replace current progress with this backup?`)){t.value=``;return}await If,op(await Ff(`/api/import`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Planner-Request":`1`,...Rf()},body:JSON.stringify(e)})),H(),U(`Backup restored.`)}catch(e){U(e.message||`Could not restore backup.`,!0),t.value=``}}async function s(){try{U(await navigator.storage?.persist?.()?`Persistent browser storage enabled.`:`Browser did not grant persistence. Keep downloaded backups.`)}catch(e){U(e.message,!0)}}return(e,t)=>(I(),L(F,null,[n.value.kind===`browser`?(I(),L(F,{key:0},[z(bd,{eyebrow:`SAVED ON THIS DEVICE`,title:`Backups & transfer`,subtitle:`No account or server is needed. Saves do not sync automatically between browsers.`}),t[0]||=B(),z(Td)],64)):eo(``,!0),t[66]||=B(),R(`section`,Ed,[t[2]||=R(`h2`,null,`Full saves & transfer`,-1),t[3]||=B(),t[4]||=R(`p`,null,`
      Export all your saves, profile calculations, checkmarks and notes. Account passwords and
      sessions are excluded. Import adds copies without replacing existing saves.
    `,-1),t[5]||=B(),R(`button`,{class:`btn primary`,"data-export-saves":``,disabled:r.value,onClick:i},`
      Export all saves
    `,8,Dd),t[6]||=B(),R(`label`,Od,[t[1]||=B(`Import saves`,-1),R(`input`,{id:`import-saves`,type:`file`,accept:`application/json,.json`,hidden:``,onChange:a},null,32)])]),t[67]||=B(),n.value.kind===`browser`?(I(),L(`section`,kd,[t[7]||=R(`h2`,null,`Keep a backup`,-1),t[8]||=B(),R(`p`,null,j(n.value.lastBackup)+`
      Export after major changes and before clearing browser data.
    `,1),t[9]||=B(),R(`button`,{class:`btn`,"data-persist-storage":``,onClick:s},`
      Request persistent browser storage
    `),t[10]||=B(),t[11]||=R(`p`,{class:`small`},`
      This reduces automatic eviction when supported. It cannot protect against manually clearing
      site data.
    `,-1),t[12]||=B(),t[13]||=R(`p`,null,`
      To move from Docker, update the Docker app and use Backup & notes → Export all saves, then
      import that file here. A legacy progress-only export is not a full save.
    `,-1),t[14]||=B(),t[15]||=R(`h2`,null,`Self-hosted edition`,-1),t[16]||=B(),t[17]||=R(`p`,null,`
      The Docker edition keeps server storage and user accounts for access across devices. Browser
      storage remains local to each visitor.
    `,-1)])):n.value.kind===`calculated`?(I(),L(F,{key:2},[z(bd,{eyebrow:`THIS PROFILE`,title:`Backup & notes`,subtitle:`Checkmarks, deliveries and notes belong to `+n.value.saveName+` / `+n.value.profileName},null,8,[`subtitle`]),t[36]||=B(),R(`div`,Ad,[R(`section`,jd,[t[18]||=R(`h2`,null,`Download progress`,-1),t[19]||=B(),R(`a`,{class:`btn primary`,href:n.value.exportUrl,download:``},`Download progress JSON`,8,Md),t[20]||=B(),t[21]||=R(`p`,{class:`small muted`},`
          For all accounts, profiles and calculation snapshots, back up the Docker data volume. This
          download contains only this profile’s progress.
        `,-1)]),t[27]||=B(),R(`section`,Nd,[t[23]||=R(`h2`,null,`Restore this profile`,-1),t[24]||=B(),t[25]||=R(`p`,null,`Restore replaces only this profile’s progress, after confirmation.`,-1),t[26]||=B(),R(`label`,Pd,[t[22]||=B(`Choose backup`,-1),R(`input`,{id:`import-file`,type:`file`,accept:`application/json,.json`,hidden:``,onChange:o},null,32)])])]),t[37]||=B(),R(`section`,Fd,[t[28]||=R(`h2`,null,`Save-wide notes for this profile`,-1),t[29]||=B(),R(`textarea`,{id:`global-note`,class:`notes`,maxlength:`6000`,value:n.value.note},null,8,Id),t[30]||=B(),t[31]||=R(`button`,{class:`btn`,"data-save-note":`global`,"data-input":`global-note`},`Save notes`,-1)]),t[38]||=B(),R(`section`,Ld,[t[32]||=R(`h2`,null,`Calculation assumptions`,-1),t[33]||=B(),(I(!0),L(F,null,bi(n.value.warnings,(e,t)=>(I(),L(`p`,{key:t},j(e),1))),128)),t[34]||=B(),t[35]||=R(`a`,{href:`https://github.com/greeny/SatisfactoryTools`,target:`_blank`,rel:`noreferrer`},`Recipe data source`,-1)])],64)):(I(),L(F,{key:3},[z(bd,{eyebrow:`YOUR PROGRESS`,title:`Backup & notes`,subtitle:`Progress is stored on the server, so the same Docker instance works across your devices.`}),t[63]||=B(),R(`div`,Rd,[R(`section`,zd,[t[39]||=R(`h2`,null,`Download a backup`,-1),t[40]||=B(),t[41]||=R(`p`,null,`Save a copy of your checkmarks, delivery counts, personal tasks and notes.`,-1),t[42]||=B(),R(`a`,{class:`btn primary`,href:n.value.exportUrl,download:``},`Download progress JSON ↓`,8,Bd),t[43]||=B(),t[44]||=R(`p`,{class:`small muted`},`
          The Docker volume keeps progress through container updates. This download gives you a
          separate copy.
        `,-1)]),t[52]||=B(),R(`section`,Vd,[t[46]||=R(`h2`,null,`Restore a backup`,-1),t[47]||=B(),t[48]||=R(`p`,null,`
          Import a backup from this planner. It replaces current progress after confirmation;
          factory-plan data stays unchanged.
        `,-1),t[49]||=B(),R(`label`,Hd,[t[45]||=B(`Choose backup file`,-1),R(`input`,{id:`import-file`,type:`file`,accept:`application/json,.json`,hidden:``,onChange:o},null,32)]),t[50]||=B(),t[51]||=R(`p`,{class:`small muted`},`
          Up to 2 MB. The previous state is also retained as workspace.json.bak on the server. The
          original progress file is kept during migration.
        `,-1)])]),t[64]||=B(),R(`section`,Ud,[t[53]||=R(`h2`,null,`Save-wide notes`,-1),t[54]||=B(),R(`textarea`,{id:`global-note`,class:`notes`,maxlength:`6000`,"aria-label":`Save-wide notes`,value:n.value.note},null,8,Wd),t[55]||=B(),t[56]||=R(`div`,{class:`note-save`},[R(`span`,{class:`small muted`},`Seed, locations, routes and decisions.`),R(`button`,{class:`btn`,"data-save-note":`global`,"data-input":`global-note`},`Save notes`)],-1)]),t[65]||=B(),R(`section`,Gd,[t[57]||=R(`h2`,null,`Plan assumptions`,-1),t[58]||=B(),t[59]||=R(`p`,{class:`small`},`
        All tiers through 6 unlocked. Phase 3 Versatile Frameworks delivered. Pure nodes, 50×
        elevator costs, half consumption. Retire coal and temporary fuel; retain turbofuel. Phase 5
        resource conversion and extra Reanimated SAM are included. Ground-floor storage shell is
        already built; individual containers are not assumed connected.
      `,-1),t[60]||=B(),t[61]||=R(`p`,{class:`small`},`
        The final extra storage modules need additional input allocations. After Phase 5, storage
        takes priority over maintaining full elevator-export rates for sinking. Gathered items
        require collection; equipment and inhalers are manually crafted.
      `,-1),t[62]||=B(),R(`div`,Kd,[(I(!0),L(F,null,bi(n.value.sources,e=>(I(),L(`a`,{key:e.url,href:e.url,target:`_blank`,rel:`noreferrer`},j(e.title)+` ↗`,9,qd))),128))])])],64))],64))}},Yd={key:0,class:`panel`},Xd={__name:`AccountPage`,setup(t){let n=Eo(()=>ws(()=>({enabled:G.accountsEnabled,username:G.user?.username})));async function r(){Hf()&&(await If,await zf(`/api/logout`,{}),ap(`login`),await wp())}return(t,i)=>er(e)?(I(),Ga(Jd,{key:0})):(I(),L(F,{key:1},[z(bd,{eyebrow:`YOUR ACCOUNT`,title:n.value.enabled?n.value.username:`User accounts`,subtitle:n.value.enabled?`Your saves are visible only to your account.`:`Local mode currently shares one workspace. Enable accounts before sharing this server.`},null,8,[`title`,`subtitle`]),i[4]||=B(),n.value.enabled?(I(),L(`section`,Yd,[i[0]||=R(`p`,null,`Each account has its own named saves, profiles and progress.`,-1),i[1]||=B(),R(`button`,{class:`btn`,"data-logout":``,onClick:r},`Sign out`),i[2]||=B(),i[3]||=R(`p`,{class:`small muted`},`
        Use HTTPS when serving this app beyond localhost. Your host manages account access and
        backups.
      `,-1)])):(I(),Ga(id,{key:1,mode:`setup`}))],64))}},Zd={class:`toolbar`},Qd={key:0,class:`btn`,href:`#backup`},$d={key:1,class:`btn`,href:`#account`},ef={class:`section-head`},tf=[`data-new-profile`,`onClick`],nf={class:`profile-cards`},rf={class:`eyebrow`},af={class:`small`},of=[`data-open-save`,`data-open-profile`,`disabled`,`onClick`],sf=[`data-duplicate-profile`,`data-duplicate-save`,`disabled`,`onClick`],cf=[`data-share-profile`,`data-share-save`,`disabled`,`onClick`],lf=[`data-remove-profile`,`data-remove-save`,`disabled`,`onClick`],uf={class:`panel`},df=[`disabled`],ff={__name:`ProfilesPage`,setup(t){let n=Eo(()=>ws(()=>({accountsEnabled:G.accountsEnabled,saves:G.saves.map(e=>({id:e.id,name:e.name,profiles:e.profiles.map(t=>({id:t.id,name:t.name,open:e.id===Gf.id&&t.id===K.id,kind:t.kind===`original`?`PRESERVED HANDBOOK`:`CALCULATED PROFILE`,summary:t.settings?`${t.settings.purity} purity · ${S(t.settings.multiplier)}× elevator · ${S(t.settings.powerFactor)}× power`:`50× elevator · pure ingots · nuclear recycling`,progress:`${t.completed} checks complete · ${bp(t.phase)}`}))}))}))),r=Zn(``),i=(e,t,n)=>`${e}:${t.id}:${n.id}`,a=Zn(!1);async function o(e,t){if(Hf()){r.value=i(`duplicate`,e,t);try{await If;let n=await zf(`/api/duplicate-profile`,{saveId:e.id,profileId:t.id});rp(n.workspace),await xp(n.saveId,n.profileId),Bf(`plan`),U(`Copy created and opened. Changes here leave the original profile untouched.`)}catch(e){U(e.message,!0)}finally{r.value=``}}}async function s(e,t){r.value=i(`share`,e,t);try{await If,Uf(await Ff(`/api/export-saves?save=`+encodeURIComponent(e.id)+`&profile=`+encodeURIComponent(t.id)+`&share=1`),(Ae(t.name||`profile`)||`profile`)+`-share.json`),U(`Share file downloaded: the plan without your progress. Others import it under Backup → Import saves.`)}catch(e){U(e.message,!0)}finally{r.value=``}}async function c(e,t){if(Hf()&&confirm(`Are you sure? Remove "`+t.name+`" and its progress and notes?`+(e.profiles.length===1?` This also removes the empty save.`:` Other profiles keep their progress.`))){r.value=i(`remove`,e,t);try{await If,await zf(`/api/remove-profile`,{saveId:e.id,profileId:t.id,confirmed:!0}),await wp(),G.saves.length&&Bf(`profiles`),U(`Profile removed.`)}catch(e){U(e.message,!0)}finally{r.value=``}}}async function l(e,t){if(Hf()){r.value=i(`open`,e,t);try{await If,rp(await zf(`/api/select`,{saveId:e.id,profileId:t.id})),await xp(e.id,t.id),Bf(`plan`)}catch(e){U(e.message,!0)}finally{r.value=``}}}async function u(e){a.value=!0;try{rp(await zf(`/api/rename`,Object.fromEntries(new FormData(e.target))));let t=G.saves.find(e=>e.id===Gf.id);Gf.name=t.name,K.name=t.profiles.find(e=>e.id===K.id).name,H()}catch(e){U(e.message,!0)}finally{a.value=!1}}return(t,d)=>(I(),L(F,null,[er(e)?(I(),Ga(Td,{key:0})):eo(``,!0),d[17]||=B(),z(bd,{eyebrow:`YOUR FACTORY WORLDS`,title:`Saves & profiles`,subtitle:`Each save keeps separate progress for every profile. Switching back restores its checklist, deliveries and notes.`}),d[18]||=B(),R(`div`,Zd,[d[0]||=R(`button`,{class:`btn primary`,"data-new-save":``},`Create a save`,-1),d[1]||=B(),er(e)?(I(),L(`a`,Qd,`Backups & transfer`)):(I(),L(`a`,$d,j(n.value.accountsEnabled?`Your account`:`Set up user accounts`),1))]),d[19]||=B(),(I(!0),L(F,null,bi(n.value.saves,e=>(I(),L(`section`,{key:e.id,class:`panel save-panel`},[R(`div`,ef,[R(`h2`,null,j(e.name),1),d[2]||=B(),R(`button`,{class:`btn`,"data-new-profile":e.id,onClick:t=>er(kl)(e.id)},`
        Try another profile
      `,8,tf)]),d[10]||=B(),R(`div`,nf,[(I(!0),L(F,null,bi(e.profiles,t=>(I(),L(`article`,{key:t.id,class:gt([`profile-card`,t.open?`selected`:``])},[R(`div`,rf,j(t.kind),1),d[3]||=B(),R(`h3`,null,j(t.name),1),d[4]||=B(),R(`p`,null,j(t.summary),1),d[5]||=B(),R(`p`,af,j(t.progress),1),d[6]||=B(),R(`button`,{class:gt([`btn`,t.open?``:`primary`]),"data-open-save":e.id,"data-open-profile":t.id,disabled:r.value===i(`open`,e,t),onClick:n=>l(e,t)},j(t.open?`Continue current profile`:`Open profile`),11,of),d[7]||=B(),R(`button`,{class:`btn`,"data-duplicate-profile":t.id,"data-duplicate-save":e.id,disabled:r.value===i(`duplicate`,e,t),onClick:n=>o(e,t)},j(r.value===i(`duplicate`,e,t)?`Copying…`:`Duplicate`),9,sf),d[8]||=B(),R(`button`,{class:`btn`,"data-share-profile":t.id,"data-share-save":e.id,disabled:r.value===i(`share`,e,t),onClick:n=>s(e,t)},`
          Share
        `,8,cf),d[9]||=B(),R(`button`,{class:`btn`,"data-remove-profile":t.id,"data-remove-save":e.id,disabled:r.value===i(`remove`,e,t),onClick:n=>c(e,t)},`
          Remove profile
        `,8,lf)],2))),128))])]))),128)),d[20]||=B(),d[21]||=R(`p`,{class:`small muted`},`
    Duplicate copies a profile with its progress so you can try changes without touching the
    original. Share downloads a file with the plan, storage layout, factory groups and step edits —
    without your checkmarks or notes — that anyone can import under Backup → Import saves.
  `,-1),d[22]||=B(),R(`section`,uf,[d[13]||=R(`h2`,null,`Rename the current save or profile`,-1),d[14]||=B(),R(`form`,{id:`rename-form`,class:`inline-form`,onSubmit:hs(u,[`prevent`])},[d[11]||=R(`select`,{name:`target`,"aria-label":`What to rename`},[R(`option`,{value:`save`},`Save`),B(),R(`option`,{value:`profile`},`Profile`)],-1),d[12]||=R(`input`,{name:`name`,required:``,maxlength:`80`,"aria-label":`New name`,placeholder:`New name`},null,-1),R(`button`,{class:`btn`,disabled:a.value},`Rename`,8,df)],32),d[15]||=B(),d[16]||=R(`p`,{class:`small muted`},`
      Renaming does not change progress. Profiles keep a frozen calculation so later planner updates
      cannot silently change your targets.
    `,-1)])],64))}},pf=[`src`],mf={__name:`ItemIcon`,props:{name:{type:String,required:!0}},setup(e){let t=e,n=Eo(()=>`./icons/${Ae(String(t.name).replace(/\s*\([^)]*\)\s*$/,``))}.png`);return(e,t)=>(I(),L(`img`,{class:`item-icon`,src:n.value,width:`42`,height:`42`,loading:`lazy`,alt:``},null,8,pf))}},hf={class:`stat`},gf={class:`eyebrow`},_f={__name:`StatTile`,props:{label:{type:String,required:!0},value:{type:[String,Number],default:``},caption:{type:String,default:``}},setup(e){return(t,n)=>(I(),L(`div`,hf,[R(`span`,gf,j(e.label),1),R(`strong`,null,[xi(t.$slots,`default`,{},()=>[B(j(e.value),1)])]),R(`small`,null,j(e.caption),1)]))}},vf={class:`stats`},yf={class:`notice`},bf={class:`table-wrap`},xf={class:`resource-name`},Sf={class:`number`},Cf={class:`number`},wf={class:`backup-grid`,style:{"margin-top":`24px`}},Tf={class:`panel`},Ef={class:`checklist`},Df=[`data-check`,`checked`],Of={__name:`ResourcesPage`,setup(e){let t=[[`power-retained`,`Retained turbofuel: 44.425 GW`],[`power-rocket-1`,`Rocket-fuel block 1: +72 GW`],[`power-rocket-2`,`Rocket-fuel block 2: +72 GW`],[`power-u4`,`Phase 4 uranium: +125 GW`],...Array.from({length:4},(e,t)=>[`power-rocket-`+(t+3),`Rocket-fuel block `+(t+3)+`: +72 GW`]),[`power-nuclear-final`,`Complete nuclear fleet: 437.5 GW total`]],n=Eo(()=>ws(()=>{let e=Y.resources[Q()],n=Y.plans[Q()];return{power:S(Y.power[Q()])+` GW`,peak:S(n.manufacturingPeakGW)+` GW`,average:S(n.manufacturingAvgGW)+` GW`,coal:S(74400-e.Coal)+`/min`,nitrogen:S(e[`Nitrogen Gas`]||0),rows:Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>{let n=Y.capacities[e],r=n?t/n:0;return{name:e,required:S(t),available:n?S(n):e===`Water`?`Extraction limited`:`Verify wells`,remaining:n?S(n-t):`—`,tight:n&&r>.9,use:n?S(r*100)+`%`:null,bar:Math.min(100,r*100)}}),steps:t.map(([e,t])=>({id:e,title:t,done:$(e)}))}}));return(e,t)=>(I(),L(F,null,[z(bd,{eyebrow:`CAPACITY BEFORE CONSTRUCTION`,title:`Power & resources`,subtitle:`These are planned full-stage requirements, not live readings from your save. Mining totals already include retained turbofuel, trucks and all new power.`}),t[14]||=B(),R(`div`,vf,[z(_f,{label:`Gross generation`,value:n.value.power,caption:`At this stage’s completion`},null,8,[`value`]),t[0]||=B(),z(_f,{label:`Production peak`,value:n.value.peak,caption:`Before the utility allowance`},null,8,[`value`]),t[1]||=B(),z(_f,{label:`Production average`,value:n.value.average,caption:`Half-consumption setting`},null,8,[`value`]),t[2]||=B(),z(_f,{label:`Coal remaining`,value:n.value.coal,caption:`Against all-pure mining limit`},null,8,[`value`])]),t[15]||=B(),R(`div`,yf,[t[3]||=B(`
    Verify your randomized nitrogen wells can supply `,-1),R(`b`,null,j(n.value.nitrogen)+`/min`,1),t[4]||=B(` at this stage.
    The all-pure resource limits assume fully developed extraction and logistics. Additional
    completion modules are not included.
  `,-1)]),t[16]||=B(),R(`div`,bf,[R(`table`,null,[t[9]||=R(`thead`,null,[R(`tr`,null,[R(`th`,null,`Fresh resource`),B(),R(`th`,null,`Required /min`),B(),R(`th`,null,`Available /min`),B(),R(`th`,null,`Remaining /min`),B(),R(`th`,null,`Use`)])],-1),t[10]||=B(),R(`tbody`,null,[(I(!0),L(F,null,bi(n.value.rows,e=>(I(),L(`tr`,{key:e.name},[R(`td`,xf,[z(mf,{name:e.name},null,8,[`name`]),R(`span`,null,j(e.name),1)]),t[5]||=B(),R(`td`,Sf,j(e.required),1),t[6]||=B(),R(`td`,Cf,j(e.available),1),t[7]||=B(),R(`td`,{class:gt([`number`,e.tight?`warn`:``])},j(e.remaining),3),t[8]||=B(),R(`td`,null,[e.use?(I(),L(F,{key:0},[B(j(e.use)+` `,1),R(`div`,{class:gt([`resource-bar`,e.tight?`tight`:``])},[R(`span`,{style:dt({width:e.bar+`%`})},null,4)],2)],64)):(I(),L(F,{key:1},[B(`—`)],64))])]))),128))])])]),t[17]||=B(),t[18]||=R(`p`,{class:`small muted`},`
    Crude availability counts 30 ordinary pure nodes; oil wells are additional. Water includes a
    2,000/min reserve for retained turbofuel and resin processing.
  `,-1),t[19]||=B(),R(`div`,wf,[R(`section`,Tf,[t[11]||=R(`h2`,null,`Power commissioning`,-1),t[12]||=B(),R(`div`,Ef,[(I(!0),L(F,null,bi(n.value.steps,e=>(I(),L(`label`,{key:e.id,class:`check-row`},[R(`input`,{type:`checkbox`,"data-check":e.id,checked:e.done},null,8,Df),B(j(e.title),1)]))),128))])]),t[13]||=$a(` <section class="panel"><h2>One 72 GW rocket-fuel block</h2> <p><b>Inputs/min:</b> 300 Crude, 800 Sulfur, 400 Coal, 600 Nitrogen and 1,000 Water.</p> <p>
        10 Heavy Oil Residue refineries → 8 Diluted Fuel blenders → 8 Nitro Rocket Fuel blenders.
        Add 5 Residual Rubber refineries and 288 Fuel Generators at 100%.
      </p> <p class="small muted">
        Produces 1,200 Rocket Fuel, 200 Compacted Coal and 100 Rubber/min. These byproducts are not
        credited against other factory contracts.
      </p> <div class="notice blue">
        At Phase 5: (579.231 × 1.2 + 20) ÷ 0.8 ≈ <b>894 GW</b> preliminary requirement. Planned
        gross capacity: <b>913.925 GW</b>. Replace the 20 GW existing-load allowance with your
        measured load.
      </div></section>`,2)]),t[20]||=B(),t[21]||=R(`section`,{class:`panel`,style:{"margin-top":`24px`}},[R(`h2`,null,`Nuclear sequence`),B(),R(`p`,null,`
      Phase 4: 50 uranium reactors generate 500 waste/min. Process it into 2.5 Plutonium Fuel
      Rods/min and sink those rods.
    `),B(),R(`p`,null,`
      Phase 5: 100 uranium reactors → 1,000 Uranium Waste/min → 5 Plutonium Fuel Rods/min → 50
      plutonium reactors → 50 Plutonium Waste/min → 25 Ficsonium Fuel Rods/min → 25 Ficsonium
      reactors.
    `),B(),R(`p`,{class:`small muted`},`
      Build downstream processing and burning capacity first. Final reactor cooling needs 42,000
      Water/min, already included in the resource table. Keep radioactive buffers at the nuclear
      site.
    `)],-1)],64))}};function kf(e,t){return e===`profiles`?ff:e===`account`?Xd:e===`backup`?Jd:e===`resources`&&!t?Of:null}function Af(e,t,n=``,r=``){return b`<div class="heading-row">
    <div>
      <div class="eyebrow">${e}</div>
      <h1>${t}</h1>
      ${n&&b`<div class="subtitle">${n}</div>`}
    </div>
    ${r&&b`<span class="badge orange">${r}</span>`}
  </div>`}function jf(){return b`<div class="notice blue">
    Your saves stay in this browser on this device. Clearing site data or using private browsing can
    remove them. Export a full backup before switching devices or website addresses.
    <a href="#backup">Backups & transfer</a>
  </div>`}var Mf=()=>({wizard:Al,plan:q?Ac:wc,factories:q?Mc:hc,storage:$s,resources:q?Lc:null});function H(){let e=[...document.querySelectorAll(`details[open][data-task]`)].map(e=>e.dataset.task),t=document.activeElement?.id,n=document.activeElement?.selectionStart;dd(x(`#app`)),Cs();let r=kf(Jf,q);if(r){pd(x(`#main`),r);return}if(md(),x(`#main`).innerHTML=Mf()[Jf]?.()??``,e.forEach(e=>document.querySelector(`details[data-task="${e}"]`)?.setAttribute(`open`,``)),t&&document.getElementById(t)){let e=document.getElementById(t);e.focus({preventScroll:!0}),typeof n==`number`&&e.setSelectionRange&&e.setSelectionRange(n,n)}}var Nf=0,Pf;function U(e,t=!1){let n=x(`#toast`);n.textContent=e,n.className=`show`+(t?` error`:``),clearTimeout(Pf),Pf=setTimeout(()=>n.className=``,t?9e3:3500)}async function Ff(n,r={}){if(e&&n.startsWith(`/api/`))return t(n,r);let i=await fetch(e?new URL(`.`+n,Ce):n,{cache:`no-store`,...r}),a;try{a=await i.json()}catch{throw Error(`The server returned an unreadable response.`)}if(!i.ok)throw Error(a.error||`Request failed.`);return a}var If=Promise.resolve();function W(e){let t={...Rf()};Nf++,Lf();let n=If.then(async()=>{let n=await Ff(`/api/update`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Planner-Request":`1`,...t},body:JSON.stringify(e)});return t[`X-Save-Id`]===Gf.id&&t[`X-Profile-Id`]===K.id&&op(n),n});return If=n.catch(()=>{}),n.catch(e=>{throw U(e.message,!0),e}).finally(()=>{Nf--,Lf()})}function Lf(){Cs()}function Rf(){return{"X-Save-Id":Gf?.id||``,"X-Profile-Id":K?.id||``}}async function zf(e,t,n=!0,r={}){return Ff(e,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Planner-Request":`1`,...n?Rf():{}},body:JSON.stringify(t),...r})}function Bf(e){sp(e),location.hash===`#`+e?H():location.hash=e}function Vf(){return[...document.querySelectorAll(`textarea.notes`)].some(e=>{let t=document.querySelector(`[data-input="${e.id}"]`);return t&&e.value!==(X.notes[t.dataset.saveNote]||``)})}function Hf(){return!Vf()||confirm(`You have notes that have not been saved. Leave without saving those edits?`)}function Uf(e,t){let n=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:`application/json`})),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}var Wf,G,Gf,K,q=null,J=null,Kf=`login`,qf,Y,X,Jf=`plan`,Yf=``,Xf=`ground`,Zf=`all`,Qf=!1,$f=!1,ep=!1,tp=null,np=!1;function rp(e){G=e}function ip(e){J=e}function ap(e){Kf=e}function op(e){X=e}function sp(e){Jf=e}function cp(e){Yf=e}function lp(e){Xf=e}function up(e){Zf=e}function dp(e){Qf=e}function fp(e){$f=e}function pp(e){ep=e}function mp(e){tp=e}function hp(e){np=e}var gp=()=>q?String(q.settings?.phase||`1`):`3`,Z=()=>{let e=X.settings.phase;return e!==`post`&&Number(e)<Number(gp())?gp():e},Q=()=>Z()===`post`?`5`:Z(),_p=()=>Gf.id?[...[`1`,`2`,`3`,`4`,`5`].filter(e=>Number(e)>=Number(gp())),`post`]:[`1`,`2`,`3`,`4`,`5`,`post`],vp=e=>Object.entries(e||{}).filter(([e])=>Number(e)>=Number(gp())),$=e=>!!X.checks[e],yp=e=>$(e)?`checked`:``,bp=e=>e===`post`?`Post Phase 5`:`Phase `+e;async function xp(e,t){await If,Sp(await Ff(`/api/context?save=`+encodeURIComponent(e)+`&profile=`+encodeURIComponent(t))),x(`#detail`).close()}function Sp(e){Gf=e.save,K=e.profile,X=e.state,q=e.plan,Y=e.handbook||qf||Y,Yf=``,ep=!1,tp=null,np=!1,$f=!1}var Cp=()=>q.stages[Q()];async function wp(){try{if(G=await Ff(`/api/workspace`),!G.user){Kf=`login`,X=null,hd(x(`#app`));return}[Y,Wf]=await Promise.all([Ff(`/plan.json`),Ff(`/progression.json`)]),qf=Y;let t=G.saves.find(e=>e.id===G.activeSave)||G.saves[0];t?(await xp(t.id,t.activeProfile),Jf=[`plan`,`factories`,`storage`,`resources`,`backup`,`profiles`,`wizard`,`account`].includes(location.hash.slice(1))?location.hash.slice(1):`plan`,Jf===`wizard`&&!J&&(Jf=`profiles`),H()):(Gf={id:``,name:`New save`},K={id:``,name:`Choose a profile`},X={settings:{phase:e?`1`:`3`},checks:{},notes:{},deliveries:{},customTasks:[]},q=null,kl())}catch(e){fd(),x(`#app`).innerHTML=String(b`<section class="loading">
        <h1>Could not open the planner</h1>
        <p>${e.message}</p>
        <button class="btn" id="retry">Try again</button>
      </section>`),x(`#retry`).onclick=wp}}document.addEventListener(`click`,async e=>{let t=e.target.closest(`button,a`);if(t){if(t.hasAttribute(`data-close`)&&x(`#detail`).close(),t.dataset.factory&&vc(t.dataset.factory),t.dataset.slot&&rc(t.dataset.slot),t.dataset.completeBay){let e=Ys().find(e=>e.id===t.dataset.completeBay);if(e){t.disabled=!0;try{await W({type:`checks`,keys:e.items.filter(e=>e.name).flatMap(e=>Zs(e.id)),value:!0}),H(),U(`Room `+e.id+` completed. You can uncheck individual containers if needed.`)}catch{}finally{t.disabled=!1}}}if(t.dataset.floor&&(lp(t.dataset.floor),cp(``),H()),t.hasAttribute(`data-toggle-layout`)&&(fp(!$f),H()),t.hasAttribute(`data-toggle-plan-edit`)&&(pp(!ep),mp(null),H()),t.hasAttribute(`data-toggle-factory-edit`)&&(hp(!np),H()),t.dataset.moveTask){let e=Vc().map(e=>e.id),n=e.indexOf(t.dataset.moveTask),r=n+Number(t.dataset.dir);if(n>=0&&r>=0&&r<e.length){[e[n],e[r]]=[e[r],e[n]];try{await W({type:`taskOrder`,phase:Z(),ids:e}),H()}catch{}}}if(t.dataset.editTask&&(mp(t.dataset.editTask),H()),t.hasAttribute(`data-cancel-task-edit`)&&(mp(null),H()),t.dataset.removeStep){let e=t.dataset.removeStep;if(e.startsWith(`custom-`)){if(confirm(`Delete this personal task?`))try{await W({type:`removeTask`,id:e}),H()}catch{}}else if(confirm(`Remove this step from your build plan? Its checkmark is kept and you can restore the step while editing.`))try{await W({type:`taskRemove`,id:e}),H()}catch{}}if(t.dataset.restoreTask)try{await W({type:`taskRestore`,id:t.dataset.restoreTask}),H()}catch{}if(t.dataset.removeGroup&&confirm(`Remove this group? The factories stay in the list and keep their progress.`))try{await W({type:`factoryGroupRemove`,id:t.dataset.removeGroup}),H()}catch{}if(t.dataset.unassign){let e=t.dataset.unassign,n=oc(e).filter(e=>e.group!==t.dataset.group).map(e=>({group:e.group,rate:e.rate}));try{await W({type:`factoryAssign`,key:e,groups:n}),H()}catch{}}if(t.dataset.clearSlot){t.disabled=!0;try{await W({type:`storageSlotClear`,key:t.dataset.clearSlot}),H(),U(`Container cleared. Its saved checkmarks are kept with the address.`)}catch{t.disabled=!1}}if(t.dataset.removeBay&&confirm(`Remove this added bay? Saved checkmarks for its addresses are kept.`)){t.disabled=!0;try{await W({type:`storageBayRemove`,id:t.dataset.removeBay}),H()}catch{t.disabled=!1}}if(t.dataset.removeFloor&&confirm(`Remove this added floor?`)){t.disabled=!0;try{await W({type:`storageFloorRemove`,id:t.dataset.removeFloor}),lp(`ground`),H()}catch{t.disabled=!1}}if(t.dataset.saveNote){let e=t.closest(`dialog`);t.disabled=!0;try{await W({type:`note`,key:t.dataset.saveNote,value:document.getElementById(t.dataset.input).value}),e?.open&&e.contains(t)&&e.close(),U(`Notes saved.`)}catch{}finally{t.disabled=!1}}if(t.dataset.remove&&confirm(`Delete this personal task?`))try{await W({type:`removeTask`,id:t.dataset.remove}),H()}catch{}}}),document.addEventListener(`change`,async e=>{let t=e.target;if(t.dataset.completeSlot){let e=t.checked;t.disabled=!0;try{await W({type:`checks`,keys:Zs(t.dataset.completeSlot),value:e}),H()}catch{t.checked=!e}finally{t.disabled=!1}}if(t.dataset.check){let e=t.checked;t.disabled=!0;try{await W({type:`check`,key:t.dataset.check,value:e}),H()}catch{t.checked=!e}finally{t.disabled=!1}}if(t.id===`factory-filter`&&(up(t.value),H()),t.id===`hide-done`&&(dp(t.checked),H()),[`recipes`,`mainPower`,`pureIngots`].includes(t.name)&&J&&x(`#wizard-form`)&&(Il(x(`#wizard-form`)),H()),J?.mode===`guided`&&x(`#wizard-form`)&&(String(t.name).startsWith(`guided:`)||t.name===`topup`||t.name===`topic`)&&(uu(x(`#wizard-form`)),H()),J?.mode===`extraction`&&x(`#wizard-form`)&&/^(mark|clock|purity|distribution|node:|well:|used:)/.test(String(t.name))){if(gl(x(`#wizard-form`)),[`purity`,`distribution`].includes(t.name)){let e=J.settings;p(e.purity,e.distribution)&&(J.extraction=ne(e.purity,al(J),e.distribution))}H()}if([`supplyItem`,`supplyRate`].includes(t.name)&&J&&x(`#wizard-form`)&&(Yl(t),J.mode===`guided`?uu(x(`#wizard-form`)):Il(x(`#wizard-form`)),H()),t.name===`alt`){let e=t.closest(`.alt-picker`),n=e?.querySelector(`.alt-picker-head b`);n&&(n.textContent=`Alternate recipes · ${e.querySelectorAll(`input[name=alt]:checked`).length} selected`);let r=t.closest(`.alt-row`)?.querySelector(`input[name=altpref]`);r&&(r.disabled=!t.checked,t.checked||(r.checked=!1))}if(t.dataset.bayRename){t.disabled=!0;try{await W({type:`storageBayRename`,id:t.dataset.bayRename,name:t.value})}catch{}finally{t.disabled=!1,H()}}if(t.dataset.groupRename){t.disabled=!0;try{await W({type:`factoryGroupRename`,id:t.dataset.groupRename,name:t.value})}catch{}finally{t.disabled=!1,H()}}if(t.dataset.assignAdd&&t.value){let e=t.dataset.assignAdd,n=[...oc(e).map(e=>({group:e.group,rate:e.rate})),{group:t.value,rate:null}];t.disabled=!0;try{await W({type:`factoryAssign`,key:e,groups:n})}catch{}finally{t.disabled=!1,H()}}if(t.dataset.assignRate){let e=t.dataset.assignRate,n=t.value.trim(),r=null;if(n!==``&&(r=Number(n),!Number.isFinite(r)||r<=0)){U(`Enter a rate above 0, or leave the field empty for the whole output or the remainder.`,!0),H();return}let i=oc(e).map(e=>e.group===t.dataset.group?{group:e.group,rate:r}:{group:e.group,rate:e.rate});t.disabled=!0;try{await W({type:`factoryAssign`,key:e,groups:i})}catch{}finally{t.disabled=!1,H()}}if(t.dataset.delivery){let e=q?Ec(t.dataset.delivery):Y.deliveries.find(e=>e.id===t.dataset.delivery),n=Number(t.value);if(!Number.isInteger(n)||n<0||n>e.target){U(`Enter a whole number between 0 and `+S(e.target)+`.`,!0),t.value=X.deliveries[e.id]??(K.id===`original`?e.initial:0);return}try{await W({type:`delivery`,key:e.id,value:n}),H()}catch{t.value=X.deliveries[e.id]??(K.id===`original`?e.initial:0)}}}),document.addEventListener(`input`,e=>{if([`factory-search`,`storage-search`,`plan-search`].includes(e.target.id)&&(cp(e.target.value),H()),e.target.id===`alt-filter`){let t=e.target.value.trim().toLowerCase();for(let e of document.querySelectorAll(`.alt-row`))e.hidden=t!==``&&!e.dataset.altText.includes(t)}if(e.target.id===`rate-filter`){let t=e.target.value.trim().toLowerCase();for(let e of document.querySelectorAll(`.rate-row`))e.hidden=t!==``&&!e.dataset.rateText.includes(t)}[`buildRate`,`storageRate`].includes(e.target.name)&&Tp()});function Tp(){let e=document.querySelectorAll(`.rate-row`);if(!e.length)return;let t=e=>{let t=document.querySelector(`[name=`+e+`]`)?.value;return t!==void 0&&t!==``&&Number.isFinite(Number(t))?Number(t):null},n=t(`storageRate`),r=t(`buildRate`)??n;for(let t of e){let e=t.dataset.rateGroup===`delivered`?0:t.dataset.rateGroup===`build`?r:n,i=t.querySelector(`input`);i&&e!==null&&(i.placeholder=S(e))}}document.addEventListener(`input`,e=>{e.target?.name===`supplyItem`&&J&&(Jl(e.target),ql(e.target))}),document.addEventListener(`keydown`,e=>{let t=e.target;if(t?.name!==`supplyItem`||!J)return;let n=t.closest(`.supply-field`)?.querySelector(`.supply-options`),r=n&&!n.hidden?[...n.querySelectorAll(`.supply-option`)]:[];if(e.key===`Escape`){r.length&&(e.preventDefault(),Yl(t));return}if(e.key===`ArrowDown`&&!r.length){ql(t),e.preventDefault();return}if(!r.length)return;let i=r.findIndex(e=>e.getAttribute(`aria-selected`)===`true`);if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?(i+1)%r.length:i<=0?r.length-1:i-1;r.forEach((e,n)=>e.setAttribute(`aria-selected`,String(n===t))),r[t].scrollIntoView({block:`nearest`})}else e.key===`Enter`&&(e.preventDefault(),Xl(r[i>=0?i:0]))}),document.addEventListener(`focusout`,e=>{let t=e.target;if(t?.name!==`supplyItem`)return;let n=t.closest(`.supply-field`);n&&!n.contains(e.relatedTarget)&&Yl(t)}),document.addEventListener(`submit`,async e=>{if(e.target.id===`add-task`){e.preventDefault();let t=new FormData(e.target).get(`title`).trim();if(!t)return;let n=e.target.querySelector(`button`);n.disabled=!0;try{await W({type:`addTask`,id:`custom-`+Array.from(crypto.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,`0`)).join(``),phase:Z(),title:t}),H()}catch{n.disabled=!1}}}),document.addEventListener(`submit`,async e=>{let t=e.target,n=()=>String(new FormData(t).get(`name`)||``).trim();if(t.id===`add-floor`){e.preventDefault();let t=n();if(!t)return;try{await W({type:`storageFloorAdd`,id:`cf-`+Array.from(crypto.getRandomValues(new Uint8Array(6)),e=>e.toString(16).padStart(2,`0`)).join(``),label:t}),H()}catch{}}if(t.id===`rename-floor`){e.preventDefault();let t=n();if(!t)return;try{await W({type:`storageFloorRename`,id:Xf,label:t}),H()}catch{}}if(t.id===`add-bay`){e.preventDefault();let t=n();if(!t)return;let r=Js();if(!r){U(`No free bay letters left.`,!0);return}try{await W({type:`storageBayAdd`,id:r,name:t,floor:Xf}),H()}catch{}}if(t.classList.contains(`add-container`)){e.preventDefault();let r=n();if(!r)return;let i=Ys().find(e=>e.id===t.dataset.bay);if(!i)return;let a=i.items.find(e=>!e.name)?.id||(i.items.length<ve?i.id+String(i.items.length+1).padStart(2,`0`):null);if(!a){U(`This bay holds the most addresses it can. Add another bay.`,!0);return}try{await W({type:`storageSlotAssign`,key:a,name:r}),H()}catch{}}if(t.id===`add-group`){e.preventDefault();let t=n();if(!t)return;try{await W({type:`factoryGroupAdd`,id:`fg-`+Array.from(crypto.getRandomValues(new Uint8Array(6)),e=>e.toString(16).padStart(2,`0`)).join(``),name:t}),H()}catch{}}if(t.dataset.taskEdit){e.preventDefault();let n=t.dataset.taskEdit,r=new FormData(t),i=Bc().find(e=>e.id===n),a=String(r.get(`title`)||``).trim(),o=String(r.get(`body`)||``).trim(),s=String(r.get(`link`)||``);if(!a)return;try{await W({type:`taskEdit`,id:n,title:i&&a===i.title?``:a,body:i&&o===String(i.body||``).trim()?``:o,link:s===Hc(n)?``:s}),mp(null),H()}catch{}}}),document.addEventListener(`error`,e=>{let t=e.target;t?.tagName===`IMG`&&t.classList?.contains(`item-icon`)&&(t.style.visibility=`hidden`)},!0),window.addEventListener(`hashchange`,()=>{sp([`plan`,`factories`,`storage`,`resources`,`backup`,`profiles`,`wizard`,`account`].includes(location.hash.slice(1))?location.hash.slice(1):`plan`),cp(``),X&&H(),window.scrollTo(0,0)}),x(`#detail`).addEventListener(`click`,e=>{e.target===x(`#detail`)&&x(`#detail`).close()}),window.addEventListener(`beforeunload`,e=>{Nf&&(e.preventDefault(),e.returnValue=``)}),document.addEventListener(`click`,async e=>{let t=e.target.closest(`button`);if(t){if(t.hasAttribute(`data-new-save`)&&kl(),t.dataset.calcFactory&&Ic(t.dataset.calcFactory),t.dataset.groupChain&&Cc(t.dataset.groupChain),t.dataset.altInfo&&Sl(t.dataset.altInfo),t.hasAttribute(`data-alt-all`)||t.hasAttribute(`data-alt-none`)){let e=t.hasAttribute(`data-alt-all`),n=t.closest(`.alt-picker`);for(let t of n.querySelectorAll(`.alt-row:not([hidden]) input[name=alt]`)){t.checked=e;let n=t.closest(`.alt-row`).querySelector(`input[name=altpref]`);n&&(n.disabled=!e,e||(n.checked=!1))}n.querySelector(`.alt-picker-head b`).textContent=`Alternate recipes · ${n.querySelectorAll(`input[name=alt]:checked`).length} selected`}if(t.hasAttribute(`data-alt-best`)&&J&&!t.disabled){t.disabled=!0;let e=t.textContent;try{Il(x(`#wizard-form`));let e=await zf(`/api/preview`,{settings:{...J.settings,recipes:`all`}},!0,Rl(t,`Calculating…`));J.settings.alternateRecipes=xl(e),H(),U(`Selected ${J.settings.alternateRecipes.length} alternate recipes the planner uses with your current settings.`)}catch(n){zl(x(`#wizard-form`),n),t.disabled=!1,t.textContent=e}}if(t.hasAttribute(`data-round-up`)){if(!Hf())return;t.disabled=!0;try{await If;let e=await zf(`/api/round-up`,{},!0,Rl(t,`Recalculating…`));rp(e.workspace),await xp(e.saveId,e.profileId),H(),U(`Created rounded profile. `+e.reviewCount+` completed factory checks need review; previous progress is preserved.`)}catch(e){U(e.message,!0),t.disabled=!1,t.textContent=`Round up production`}}if(t.dataset.wizardStep&&await Bl(Number(t.dataset.wizardStep)),t.hasAttribute(`data-wizard-back`)&&await Bl(J.step-1),t.hasAttribute(`data-guided-back`)&&await lu(J.guidedStep-1),t.dataset.guidedAdvanced&&du(Number(t.dataset.guidedAdvanced)),t.hasAttribute(`data-guided-start`)&&fu(),t.hasAttribute(`data-open-extraction`)&&yl(),t.dataset.nodePreset&&J){let e=x(`#wizard-form`);e&&gl(e),J.extraction=ne(t.dataset.nodePreset,al(J),J.settings.distribution),J.extractionUndo=null,J.settings.purity=t.dataset.nodePreset,H(),U(`Filled in the default world at `+(g.find(([e])=>e===t.dataset.nodePreset)?.[1]||`that purity`)+`. Change any count that does not match your save.`)}if(t.hasAttribute(`data-node-reset`)&&J){let e=x(`#wizard-form`);e&&gl(e),ll(),H(),U(`Cleared. Every count is zero, your miner mark and clock are kept — and Undo reset puts it all back.`)}if(t.hasAttribute(`data-node-undo`)&&J&&(ul(),H(),U(`Put back the counts you had before the reset.`)),t.dataset.extractionStep&&await _l(Number(t.dataset.extractionStep)),t.hasAttribute(`data-extraction-back`)&&await _l(J.extractionStep-1),t.hasAttribute(`data-extraction-cancel`)&&vl(),t.dataset.supplyPick){Xl(t);return}if(t.dataset.supplyRemove&&J){let e=x(`#wizard-form`);e&&(J.mode===`guided`?uu(e):Il(e));let n=Wl(J);n.splice(Number(t.dataset.supplyRemove),1),J.settings.existingSupply=Object.fromEntries(n.filter(e=>Number(e.rate)>0).map(e=>[e.name.trim(),Number(e.rate)]).filter(([e])=>(G.catalog.supplyItems||[]).includes(e))),J.preview=null,H()}t.hasAttribute(`data-cancel-wizard`)&&(ip(null),Bf(`profiles`))}}),document.addEventListener(`submit`,async e=>{let t=e.target;if(t.id!==`wizard-form`)return;e.preventDefault();let n=t.querySelector(`button[type="submit"]`)||t.querySelector(`button`);n.disabled=!0;try{if(t.id===`wizard-form`){let e=J;if(e.mode===`extraction`){n.disabled=!1,await _l(e.extractionStep+1);return}if(e.mode===`guided`&&e.guidedStep<=eu().length){n.disabled=!1,await lu(e.guidedStep+1);return}if(e.step<5){n.disabled=!1,await Bl(e.step+1);return}if(e.step===5){Ol(t);let r=await zf(`/api/profiles`,{saveId:e.saveId,saveName:e.saveName,name:e.name,settings:e.settings,carryFrom:e.saveId?e.carryFrom:null,carry:e.carry,built:au(e,t)},!0,Rl(n,`Saving profile…`));rp(r.workspace),await xp(r.saveId,r.profileId),ip(null),Bf(`plan`);let i=[r.carriedChecks?je(r.carriedChecks,`step`)+` carried over`:``,r.reviewCount?je(r.reviewCount,`expanded production line`)+` left for review`:``].filter(Boolean).join(`; `);U(`Profile created`+(i?`: `+i+`. `:`. `)+`Your other progress is unchanged.`);return}}}catch(e){zl(t,e),n.disabled=!1,n.textContent=J.mode===`guided`&&J.guidedStep<=eu().length?J.guidedStep>=eu().length?`Calculate plan`:`Continue →`:J.step===5?`Create profile`:J.step===4?`Calculate plan`:`Continue →`}}),wp();