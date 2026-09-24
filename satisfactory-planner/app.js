import{browserMode as e,browserRequest as t}from"./browser-api.js";import{GUIDED_TOPUP_RATE as n,blankCounts as r,blankExtraction as i,clockChoices as a,distributions as o,droneFuels as s,extractionLimits as c,guidedQuestions as l,guidedStandingQuestion as u,guidedTopupItems as d,helpText as f,knownWorld as p,matchingPreset as m,minedResources as h,minerMarks as ee,nodePresets as g,nodeYield as _,powerOptions as v,presetPurities as te,presetSurvey as ne,purities as re,purities3 as ie,resourceDefaults as ae,resourcePool as oe,richShape as se,startingSurvey as ce,storageOptions as le,storageRateFor as ue,tutorialKeys as de,wantsStorage as fe,wellYield as pe}from"./preferences.js";import{adaEncore as me,adaFault as he,adaRemarks as ge}from"./ada.js";import{progression as _e}from"./progression.js";import{bayCapacity as ve,bayOfSlot as ye,carryOptions as be,pickedRecipeUnlocks as xe,slotPosition as Se}from"./state.js";var Ce=new URL(`.`,``+import.meta.url),we=class extends String{},y=e=>e instanceof we?e:new we(e??``),Te=new WeakMap;function Ee(e){let t=Te.get(e);return t||(t=e.join(`\0`).replace(/\s*\n\s*(\/?>)/g,`$1`).replace(/(<(?:textarea|pre)\b[^>]*>)[ \t]*\n/g,`$1`).replace(/^\s*\n\s*|\s*\n\s*$/g,``).replace(/\s*\n\s*/g,` `).split(`\0`),Te.set(e,t)),t}function De(e){return e==null||e===!1?``:e instanceof we?e.toString():Array.isArray(e)?e.map(De).join(``):Oe(e)}function b(e,...t){let n=Ee(e),r=n[0];for(let e=0;e<t.length;e++)r+=De(t[e])+n[e+1];return new we(r)}var x=e=>document.querySelector(e),Oe=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),S=e=>Number(e||0).toLocaleString(void 0,{maximumFractionDigits:2}),ke=e=>Number(e||0).toLocaleString(void 0,{maximumFractionDigits:3}),Ae=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``),je=(e,t)=>S(e)+` `+t+(e===1?``:`s`);function C(e,t,n){return b`<div class="stat">
    <span class="eyebrow">${e}</span><strong>${t}</strong><small>${n}</small>
  </div>`}var w=e=>e?b`<img
        class="item-icon"
        src="./icons/${Ae(String(e).replace(/\s*\([^)]*\)\s*$/,``))}.png"
        width="42"
        height="42"
        loading="lazy"
        alt=""
      />`:``;function Me(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var T={},Ne=[],Pe=()=>{},Fe=()=>!1,Ie=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Le=e=>e.startsWith(`onUpdate:`),E=Object.assign,Re=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},ze=Object.prototype.hasOwnProperty,D=(e,t)=>ze.call(e,t),O=Array.isArray,Be=e=>Ke(e)===`[object Map]`,Ve=e=>Ke(e)===`[object Set]`,He=e=>Ke(e)===`[object Date]`,k=e=>typeof e==`function`,A=e=>typeof e==`string`,Ue=e=>typeof e==`symbol`,j=e=>typeof e==`object`&&!!e,We=e=>(j(e)||k(e))&&k(e.then)&&k(e.catch),Ge=Object.prototype.toString,Ke=e=>Ge.call(e),qe=e=>Ke(e).slice(8,-1),Je=e=>Ke(e)===`[object Object]`,Ye=e=>A(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,Xe=Me(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),Ze=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Qe=/-\w/g,$e=Ze(e=>e.replace(Qe,e=>e.slice(1).toUpperCase())),et=/\B([A-Z])/g,tt=Ze(e=>e.replace(et,`-$1`).toLowerCase()),nt=Ze(e=>e.charAt(0).toUpperCase()+e.slice(1)),rt=Ze(e=>e?`on${nt(e)}`:``),it=(e,t)=>!Object.is(e,t),at=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ot=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},st=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ct,lt=()=>ct||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ut(e){if(O(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=A(r)?mt(r):ut(r);if(i)for(let e in i)t[e]=i[e]}return t}if(A(e)||j(e))return e}var dt=/;(?![^(]*\))/g,ft=/:([^]+)/,pt=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function mt(e){let t={};return e.replace(pt,e=>e.startsWith(`/*`)?``:e).split(dt).forEach(e=>{if(e){let n=e.split(ft);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ht(e){let t=``;if(A(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){let r=ht(e[n]);r&&(t+=r+` `)}else if(j(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var gt=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,_t=Me(gt);gt+``;function vt(e){return!!e||e===``}function yt(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=Ct(e[i],t[i],n);return r}function bt(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&Ct(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function xt(e,t,n){let r=Be(e),i=Be(t);if(r||i||(r=Ve(e),i=Ve(t),r||i))return r&&i?bt(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!Ct(e[r],t[r],n))return!1}return String(e)===String(t)}function St(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function Ct(e,t,n){if(e===t)return!0;let r=He(e),i=He(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=Ue(e),i=Ue(t),r||i?e===t:(r=O(e),i=O(t),r||i?r&&i?St(e,t,n,yt):!1:(r=j(e),i=j(t),r||i?!r||!i?!1:St(e,t,n,xt):String(e)===String(t))))}var wt=e=>!!(e&&e.__v_isRef===!0),Tt=e=>A(e)?e:e==null?``:O(e)||j(e)&&(e.toString===Ge||!k(e.toString))?wt(e)?Tt(e.value):JSON.stringify(e,Et,2):String(e),Et=(e,t)=>wt(t)?Et(e,t.value):Be(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Dt(t,r)+` =>`]=n,e),{})}:Ve(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Dt(e))}:Ue(t)?Dt(t):j(t)&&!O(t)&&!Je(t)?String(t):t,Dt=(e,t=``)=>Ue(e)?`Symbol(${e.description??t})`:e,M,Ot=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&M&&(M.active?(this.parent=M,this.index=(M.scopes||(M.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=M;try{return M=this,e()}finally{M=t}}}on(){++this._on===1&&(this.prevScope=M,M=this)}off(){if(this._on>0&&--this._on===0){if(M===this)M=this.prevScope;else{let e=M;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function kt(){return M}var N,At=new WeakSet,jt=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,M&&(M.active?M.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,At.has(this)&&(At.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ft(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jt(this),Rt(this);let e=N,t=Wt;N=this,Wt=!0;try{return this.fn()}finally{zt(this),N=e,Wt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ht(e);this.deps=this.depsTail=void 0,Jt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?At.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bt(this)&&this.run()}get dirty(){return Bt(this)}},Mt=0,Nt,Pt;function Ft(e,t=!1){if(e.flags|=8,t){e.next=Pt,Pt=e;return}e.next=Nt,Nt=e}function It(){Mt++}function Lt(){if(--Mt>0)return;if(Pt){let e=Pt;for(Pt=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Nt;){let t=Nt;for(Nt=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Rt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zt(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ht(r),Ut(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Bt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vt(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vt(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Yt)||(e.globalVersion=Yt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Bt(e))))return;e.flags|=2;let t=e.dep,n=N,r=Wt;N=e,Wt=!0;try{Rt(e);let n=e.fn(e._value);(t.version===0||it(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{N=n,Wt=r,zt(e),e.flags&=-3}}function Ht(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ht(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ut(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Wt=!0,Gt=[];function Kt(){Gt.push(Wt),Wt=!1}function qt(){let e=Gt.pop();Wt=e===void 0||e}function Jt(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=N;N=void 0;try{t()}finally{N=e}}}var Yt=0,Xt=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Zt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!N||!Wt||N===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==N)t=this.activeLink=new Xt(N,this),N.deps?(t.prevDep=N.depsTail,N.depsTail.nextDep=t,N.depsTail=t):N.deps=N.depsTail=t,Qt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=N.depsTail,t.nextDep=void 0,N.depsTail.nextDep=t,N.depsTail=t,N.deps===t&&(N.deps=e)}return t}trigger(e){this.version++,Yt++,this.notify(e)}notify(e){It();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Lt()}}};function Qt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Qt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var $t=new WeakMap,en=Symbol(``),tn=Symbol(``),nn=Symbol(``);function P(e,t,n){if(Wt&&N){let t=$t.get(e);t||$t.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Zt),r.map=t,r.key=n),r.track()}}function rn(e,t,n,r,i,a){let o=$t.get(e);if(!o){Yt++;return}let s=e=>{e&&e.trigger()};if(It(),t===`clear`)o.forEach(s);else{let i=O(e),a=i&&Ye(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===nn||!Ue(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(nn)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(en)),Be(e)&&s(o.get(tn)));break;case`delete`:i||(s(o.get(en)),Be(e)&&s(o.get(tn)));break;case`set`:Be(e)&&s(o.get(en))}}Lt()}function an(e){let t=F(e);return t===e||(P(t,`iterate`,nn),Wn(e))?t:Un(e)?Hn(e)?t.map(e=>Jn(qn(e))):t.map(Jn):t.map(qn)}function on(e){return P(e=F(e),`iterate`,nn),e}function sn(e,t){return Un(e)?Jn(Hn(e)?qn(t):t):qn(t)}var cn={__proto__:null,[Symbol.iterator](){return ln(this,Symbol.iterator,e=>sn(this,e))},concat(...e){return an(this).concat(...e.map(e=>O(e)?an(e):e))},entries(){return ln(this,`entries`,e=>(e[1]=sn(this,e[1]),e))},every(e,t){return dn(this,`every`,e,t,void 0,arguments)},filter(e,t){return dn(this,`filter`,e,t,e=>e.map(e=>sn(this,e)),arguments)},find(e,t){return dn(this,`find`,e,t,e=>sn(this,e),arguments)},findIndex(e,t){return dn(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return dn(this,`findLast`,e,t,e=>sn(this,e),arguments)},findLastIndex(e,t){return dn(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return dn(this,`forEach`,e,t,void 0,arguments)},includes(...e){return pn(this,`includes`,e)},indexOf(...e){return pn(this,`indexOf`,e)},join(e){return an(this).join(e)},lastIndexOf(...e){return pn(this,`lastIndexOf`,e)},map(e,t){return dn(this,`map`,e,t,void 0,arguments)},pop(){return mn(this,`pop`)},push(...e){return mn(this,`push`,e)},reduce(e,...t){return fn(this,`reduce`,e,t)},reduceRight(e,...t){return fn(this,`reduceRight`,e,t)},shift(){return mn(this,`shift`)},some(e,t){return dn(this,`some`,e,t,void 0,arguments)},splice(...e){return mn(this,`splice`,e)},toReversed(){return an(this).toReversed()},toSorted(e){return an(this).toSorted(e)},toSpliced(...e){return an(this).toSpliced(...e)},unshift(...e){return mn(this,`unshift`,e)},values(){return ln(this,`values`,e=>sn(this,e))}};function ln(e,t,n){let r=on(e),i=r[t]();return r!==e&&!Wn(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var un=Array.prototype;function dn(e,t,n,r,i,a){let o=on(e),s=o!==e&&!Wn(e),c=o[t];if(c!==un[t]){let t=c.apply(e,a);return s?qn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,sn(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function fn(e,t,n,r){let i=on(e),a=i!==e&&!Wn(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=sn(e,t)),n.call(this,t,sn(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?sn(e,c):c}function pn(e,t,n){let r=F(e);P(r,`iterate`,nn);let i=r[t](...n);return(i===-1||i===!1)&&Gn(n[0])?(n[0]=F(n[0]),r[t](...n)):i}function mn(e,t,n=[]){Kt(),It();let r=F(e)[t].apply(e,n);return Lt(),qt(),r}var hn=Me(`__proto__,__v_isRef,__isVue`),gn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(Ue));function _n(e){Ue(e)||(e=String(e));let t=F(this);return P(t,`has`,e),t.hasOwnProperty(e)}var vn=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?In:Fn:i?Pn:Nn).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=O(e);if(!r){let e;if(a&&(e=cn[t]))return e;if(t===`hasOwnProperty`)return _n}let o=Reflect.get(e,t,I(e)?e:n);if((Ue(t)?gn.has(t):hn(t))||(r||P(e,`get`,t),i))return o;if(I(o)){let e=a&&Ye(t)?o:o.value;return r&&j(e)?Bn(e):e}return j(o)?r?Bn(o):Rn(o):o}},yn=class extends vn{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=O(e)&&Ye(t);if(!this._isShallow){let e=Un(i);if(!Wn(n)&&!Un(n)&&(i=F(i),n=F(n)),!a&&I(i)&&!I(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:D(e,t),s=Reflect.set(e,t,n,I(e)?e:r);return e===F(r)&&s&&(o?it(n,i)&&rn(e,`set`,t,n,i):rn(e,`add`,t,n)),s}deleteProperty(e,t){let n=D(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&rn(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!Ue(t)||!gn.has(t))&&P(e,`has`,t),n}ownKeys(e){return P(e,`iterate`,O(e)?`length`:en),Reflect.ownKeys(e)}},bn=class extends vn{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},xn=new yn,Sn=new bn,Cn=new yn(!0),wn=e=>e,Tn=e=>Reflect.getPrototypeOf(e);function En(e,t,n){return function(...r){let i=this.__v_raw,a=F(i),o=Be(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?wn:t?Jn:qn;return!t&&P(a,`iterate`,c?tn:en),E(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function Dn(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function On(e,t){let n={get(n){let r=this.__v_raw,i=F(r),a=F(n);e||(it(n,a)&&P(i,`get`,n),P(i,`get`,a));let{has:o}=Tn(i),s=t?wn:e?Jn:qn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&P(F(t),`iterate`,en),t.size},has(t){let n=this.__v_raw,r=F(n),i=F(t);return e||(it(t,i)&&P(r,`has`,t),P(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=F(a),s=t?wn:e?Jn:qn;return!e&&P(o,`iterate`,en),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return E(n,e?{add:Dn(`add`),set:Dn(`set`),delete:Dn(`delete`),clear:Dn(`clear`)}:{add(e){let n=F(this),r=Tn(n),i=F(e),a=!t&&!Wn(e)&&!Un(e)?i:e;return r.has.call(n,a)||it(e,a)&&r.has.call(n,e)||it(i,a)&&r.has.call(n,i)||(n.add(a),rn(n,`add`,a,a)),this},set(e,n){!t&&!Wn(n)&&!Un(n)&&(n=F(n));let r=F(this),{has:i,get:a}=Tn(r),o=i.call(r,e);o||=(e=F(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?it(n,s)&&rn(r,`set`,e,n,s):rn(r,`add`,e,n),this},delete(e){let t=F(this),{has:n,get:r}=Tn(t),i=n.call(t,e);i||=(e=F(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&rn(t,`delete`,e,void 0,a),o},clear(){let e=F(this),t=e.size!==0,n=e.clear();return t&&rn(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=En(r,e,t)}),n}function kn(e,t){let n=On(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(D(n,r)&&r in t?n:t,r,i)}var An={get:kn(!1,!1)},jn={get:kn(!1,!0)},Mn={get:kn(!0,!1)},Nn=new WeakMap,Pn=new WeakMap,Fn=new WeakMap,In=new WeakMap;function Ln(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Rn(e){return Un(e)?e:Vn(e,!1,xn,An,Nn)}function zn(e){return Vn(e,!1,Cn,jn,Pn)}function Bn(e){return Vn(e,!0,Sn,Mn,Fn)}function Vn(e,t,n,r,i){if(!j(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Ln(qe(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Hn(e){return Un(e)?Hn(e.__v_raw):!!(e&&e.__v_isReactive)}function Un(e){return!!(e&&e.__v_isReadonly)}function Wn(e){return!!(e&&e.__v_isShallow)}function Gn(e){return e?!!e.__v_raw:!1}function F(e){let t=e&&e.__v_raw;return t?F(t):e}function Kn(e){return!D(e,`__v_skip`)&&Object.isExtensible(e)&&ot(e,`__v_skip`,!0),e}var qn=e=>j(e)?Rn(e):e,Jn=e=>j(e)?Bn(e):e;function I(e){return e?e.__v_isRef===!0:!1}function Yn(e){return Xn(e,!1)}function Xn(e,t){return I(e)?e:new Zn(e,t)}var Zn=class{constructor(e,t){this.dep=new Zt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:F(e),this._value=t?e:qn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Wn(e)||Un(e);e=n?e:F(e),it(e,t)&&(this._rawValue=e,this._value=n?e:qn(e),this.dep.trigger())}};function Qn(e){return I(e)?e.value:e}var $n={get:(e,t,n)=>t===`__v_raw`?e:Qn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return I(i)&&!I(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function er(e){return Hn(e)?e:new Proxy(e,$n)}var tr=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&N!==this)return Ft(this,!0),!0}get value(){let e=this.dep.track();return Vt(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function nr(e,t,n=!1){let r,i;return k(e)?r=e:(r=e.get,i=e.set),new tr(r,i,n)}var rr={},ir=new WeakMap,ar=void 0;function or(e,t=!1,n=ar){if(n){let t=ir.get(n);t||ir.set(n,t=[]),t.push(e)}}function sr(e,t,n=T){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:Wn(e)||i===!1||i===0?cr(e,1):cr(e),u,d,f,p,m=!1,h=!1;if(I(e)?(d=()=>e.value,m=Wn(e)):Hn(e)?(d=()=>l(e),m=!0):O(e)?(h=!0,m=e.some(e=>Hn(e)||Wn(e)),d=()=>e.map(e=>{if(I(e))return e.value;if(Hn(e))return l(e);if(k(e))return c?c(e,2):e()})):d=k(e)?t?c?()=>c(e,2):e:()=>{if(f){Kt();try{f()}finally{qt()}}let t=ar;ar=u;try{return c?c(e,3,[p]):e(p)}finally{ar=t}}:Pe,t&&i){let e=d,t=i===!0?1/0:i;d=()=>cr(e(),t)}let ee=kt(),g=()=>{u.stop(),ee&&ee.active&&Re(ee.effects,u)};if(a&&t){let e=t;t=(...t)=>{let n=e(...t);return g(),n}}let _=h?Array(e.length).fill(rr):rr,v=e=>{if(u.flags&1&&(u.dirty||e)){if(t){let n=u.run();if(e||i||m||(h?n.some((e,t)=>it(e,_[t])):it(n,_))){f&&f();let e=ar;ar=u;try{let e=[n,_===rr?void 0:h&&_[0]===rr?[]:_,p];_=n,c?c(t,3,e):t(...e)}finally{ar=e}}}else u.run()}};return s&&s(v),u=new jt(d),u.scheduler=o?()=>o(v,!1):v,p=e=>or(e,!1,u),f=u.onStop=()=>{let e=ir.get(u);if(e){if(c)c(e,4);else for(let t of e)t();ir.delete(u)}},t?r?v(!0):_=u.run():o?o(v.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function cr(e,t=1/0,n){if(t<=0||!j(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,I(e))cr(e.value,t,n);else if(O(e))for(let r=0;r<e.length;r++)cr(e[r],t,n);else if(Ve(e)||Be(e))e.forEach(e=>{cr(e,t,n)});else if(Je(e)){for(let r in e)cr(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&cr(e[r],t,n)}return e}function lr(e,t,n,r){try{return r?e(...r):e()}catch(e){dr(e,t,n)}}function ur(e,t,n,r){if(k(e)){let i=lr(e,t,n,r);return i&&We(i)&&i.catch(e=>{dr(e,t,n)}),i}if(O(e)){let i=[];for(let a=0;a<e.length;a++)i.push(ur(e[a],t,n,r));return i}}function dr(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||T;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){Kt(),lr(a,null,10,[e,i,o]),qt();return}}fr(e,n,i,r,o)}function fr(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var pr=[],mr=-1,hr=[],gr=null,_r=0,vr=Promise.resolve(),yr=null;function br(e){let t=yr||vr;return e?t.then(this?e.bind(this):e):t}function xr(e){let t=mr+1,n=pr.length;for(;t<n;){let r=t+n>>>1,i=pr[r],a=Dr(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Sr(e){if(!(e.flags&1)){let t=Dr(e),n=pr[pr.length-1];!n||!(e.flags&2)&&t>=Dr(n)?pr.push(e):pr.splice(xr(t),0,e),e.flags|=1,Cr()}}function Cr(){yr||=vr.then(Or)}function wr(e){if(!O(e))gr&&e.id===-1?gr.splice(_r+1,0,e):e.flags&1||(hr.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)hr.push(e[t]);Cr()}function Tr(e,t,n=mr+1){for(;n<pr.length;n++){let t=pr[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;pr.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Er(e){if(hr.length){let e=[...new Set(hr)].sort((e,t)=>Dr(e)-Dr(t));if(hr.length=0,gr){for(let t=0;t<e.length;t++)gr.push(e[t]);return}for(gr=e,_r=0;_r<gr.length;_r++){let e=gr[_r];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}gr=null,_r=0}}var Dr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Or(e){try{for(mr=0;mr<pr.length;mr++){let e=pr[mr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),lr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mr<pr.length;mr++){let e=pr[mr];e&&(e.flags&=-2)}mr=-1,pr.length=0,Er(e),yr=null,(pr.length||hr.length)&&Or(e)}}var kr=null,Ar=null;function jr(e){let t=kr;return kr=e,Ar=e&&e.type.__scopeId||null,t}function Mr(e,t=kr,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Va(-1);let i=jr(t),a=Ia.length,o;try{o=e(...n)}finally{for(let e=Ia.length;e>a;e--)za();jr(i),r._d&&Va(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Nr(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Kt(),ur(c,n,8,[e.el,s,e,t]),qt())}}function Pr(e,t){if(lo){let n=lo.provides,r=lo.parent&&lo.parent.provides;r===n&&(n=lo.provides=Object.create(r)),n[e]=t}}function Fr(e,t,n=!1){let r=uo();if(r||Hi){let i=Hi?Hi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&k(t)?t.call(r&&r.proxy):t}}var Ir=Symbol.for(`v-scx`),Lr=()=>Fr(Ir);function Rr(e,t,n){return zr(e,t,n)}function zr(e,t,n=T){let{immediate:r,deep:i,flush:a,once:o}=n,s=E({},n),c=t&&r||!t&&a!==`post`,l;if(_o){if(a===`sync`){let e=Lr();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=Pe,e.resume=Pe,e.pause=Pe,e}}let u=lo;s.call=(e,t,n)=>ur(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{ya(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():Sr(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=sr(e,t,s);return _o&&(l?l.push(f):c&&f()),f}function Br(e,t,n){let r=this.proxy,i=A(e)?e.includes(`.`)?Vr(r,e):()=>r[e]:e.bind(r,r),a;k(t)?a=t:(a=t.handler,n=t);let o=mo(this),s=zr(i,a.bind(r),n);return o(),s}function Vr(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Hr=Symbol(`_vte`),Ur=e=>e.__isTeleport,Wr=Symbol(`_leaveCb`);function Gr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Pa){t=n;break}}return t}function Kr(e){if(!ei(e))return Ur(e.type)&&e.children?Gr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&k(n.default))return n.default()}}function qr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;qr(Ur(n.type)&&Kr(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Jr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Yr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Xr=new WeakMap;function Zr(e,t,n,r,i=!1){if(O(e)){e.forEach((e,a)=>Zr(e,t&&(O(t)?t[a]:t),n,r,i));return}if($r(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zr(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?wo(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===T?s.refs={}:s.refs,d=s.setupState,f=F(d),p=d===T?Fe:e=>!Yr(u,e)&&D(f,e),m=(e,t)=>!(t&&Yr(u,t));if(l!=null&&l!==c){if(Qr(t),A(l))u[l]=null,p(l)&&(d[l]=null);else if(I(l)){let e=t;m(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(k(c))lr(c,s,12,[o,u]);else{let t=A(c),r=I(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:m(c)||!e.k?c.value:u[e.k];if(i)O(n)&&Re(n,a);else if(O(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];m(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(m(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),Xr.delete(e)};t.id=-1,Xr.set(e,t),ya(t,n)}else Qr(e),s()}}}function Qr(e){let t=Xr.get(e);t&&(t.flags|=8,Xr.delete(e))}lt().requestIdleCallback,lt().cancelIdleCallback;var $r=e=>!!e.type.__asyncLoader,ei=e=>e.type.__isKeepAlive;function ti(e,t){ri(e,`a`,t)}function ni(e,t){ri(e,`da`,t)}function ri(e,t,n=lo){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(ai(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ei(e.parent.vnode)&&ii(r,t,n,e),e=e.parent}}function ii(e,t,n,r){let i=ai(t,e,r,!0);fi(()=>{Re(r[t],i)},n)}function ai(e,t,n=lo,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Kt();let i=mo(n),a=ur(t,n,e,r);return i(),qt(),a};return r?i.unshift(a):i.push(a),a}}var oi=e=>(t,n=lo)=>{(!_o||e===`sp`)&&ai(e,(...e)=>t(...e),n)},si=oi(`bm`),ci=oi(`m`),li=oi(`bu`),ui=oi(`u`),di=oi(`bum`),fi=oi(`um`),pi=oi(`sp`),mi=oi(`rtg`),hi=oi(`rtc`);function gi(e,t=lo){ai(`ec`,e,t)}var _i=Symbol.for(`v-ndc`);function vi(e,t,n,r){let i,a=n&&n[r],o=O(e);if(o||A(e)){let n=o&&Hn(e),r=!1,s=!1;n&&(r=!Wn(e),s=Un(e),e=on(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Jn(qn(e[n])):qn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(j(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}var yi=e=>e?go(e)?wo(e):yi(e.parent):null,bi=E(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yi(e.parent),$root:e=>yi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ki(e),$forceUpdate:e=>e.f||=()=>{Sr(e.update)},$nextTick:e=>e.n||=br.bind(e.proxy),$watch:e=>Br.bind(e)}),xi=(e,t)=>e!==T&&!e.__isScriptSetup&&D(e,t),Si={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(xi(r,t))return o[t]=1,r[t];else if(i!==T&&D(i,t))return o[t]=2,i[t];else if(D(a,t))return o[t]=3,a[t];else if(n!==T&&D(n,t))return o[t]=4,n[t];else wi&&(o[t]=0)}let l=bi[t],u,d;if(l)return t===`$attrs`&&P(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==T&&D(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,D(d,t))return d[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return xi(i,t)?(i[t]=n,!0):r!==T&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==T&&s[0]!==`$`&&D(e,s)||xi(t,s)||D(a,s)||D(r,s)||D(bi,s)||D(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?D(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Ci(e){return O(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var wi=!0;function Ti(e){let t=ki(e),n=e.proxy,r=e.ctx;wi=!1,t.beforeCreate&&Di(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:ee,beforeDestroy:g,beforeUnmount:_,destroyed:v,unmounted:te,render:ne,renderTracked:re,renderTriggered:ie,errorCaptured:ae,serverPrefetch:oe,expose:se,inheritAttrs:ce,components:le,directives:ue,filters:de}=t;if(l&&Ei(l,r,null),o)for(let e in o){let t=o[e];k(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);j(t)&&(e.data=Rn(t))}if(wi=!0,a)for(let e in a){let t=a[e],i=Eo({get:k(t)?t.bind(n,n):k(t.get)?t.get.bind(n,n):Pe,set:!k(t)&&k(t.set)?t.set.bind(n):Pe});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)Oi(s[e],r,n,e);if(c){let e=k(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Pr(t,e[t])})}u&&Di(u,e,`c`);function fe(e,t){O(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(fe(si,d),fe(ci,f),fe(li,p),fe(ui,m),fe(ti,h),fe(ni,ee),fe(gi,ae),fe(hi,re),fe(mi,ie),fe(di,_),fe(fi,te),fe(pi,oe),O(se)){if(se.length){let t=e.exposed||={};se.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}ne&&e.render===Pe&&(e.render=ne),ce!=null&&(e.inheritAttrs=ce),le&&(e.components=le),ue&&(e.directives=ue),oe&&Jr(e)}function Ei(e,t,n=Pe){O(e)&&(e=Pi(e));for(let n in e){let r=e[n],i;i=j(r)?`default`in r?Fr(r.from||n,r.default,!0):Fr(r.from||n):Fr(r),I(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Di(e,t,n){ur(O(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oi(e,t,n,r){let i=r.includes(`.`)?Vr(n,r):()=>n[r];if(A(e)){let n=t[e];k(n)&&Rr(i,n)}else if(k(e))Rr(i,e.bind(n));else if(j(e)){if(O(e))e.forEach(e=>Oi(e,t,n,r));else{let r=k(e.handler)?e.handler.bind(n):t[e.handler];k(r)&&Rr(i,r,e)}}}function ki(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Ai(c,e,o,!0)),Ai(c,t,o)),j(t)&&a.set(t,c),c}function Ai(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Ai(e,a,n,!0),i&&i.forEach(t=>Ai(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=ji[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var ji={data:Mi,props:Li,emits:Li,methods:Ii,computed:Ii,beforeCreate:Fi,created:Fi,beforeMount:Fi,mounted:Fi,beforeUpdate:Fi,updated:Fi,beforeDestroy:Fi,beforeUnmount:Fi,destroyed:Fi,unmounted:Fi,activated:Fi,deactivated:Fi,errorCaptured:Fi,serverPrefetch:Fi,components:Ii,directives:Ii,watch:Ri,provide:Mi,inject:Ni};function Mi(e,t){return t?e?function(){return E(k(e)?e.call(this,this):e,k(t)?t.call(this,this):t)}:t:e}function Ni(e,t){return Ii(Pi(e),Pi(t))}function Pi(e){if(O(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Fi(e,t){return e?[...new Set([].concat(e,t))]:t}function Ii(e,t){return e?E(Object.create(null),e,t):t}function Li(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:E(Object.create(null),Ci(e),Ci(t??{})):t}function Ri(e,t){if(!e)return t;if(!t)return e;let n=E(Object.create(null),e);for(let r in t)n[r]=Fi(e[r],t[r]);return n}function zi(){return{app:null,config:{isNativeTag:Fe,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Bi=0;function Vi(e,t){return function(n,r=null){k(n)||(n=E({},n)),r!=null&&!j(r)&&(r=null);let i=zi(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Bi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Do,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&k(e.install)?(a.add(e),e.install(c,...t)):k(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||Ya(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,wo(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(ur(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Hi;Hi=c;try{return e()}finally{Hi=t}}};return c}}var Hi=null,Ui=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${$e(t)}Modifiers`]||e[`${tt(t)}Modifiers`];function Wi(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||T,i=n,a=t.startsWith(`update:`),o=a&&Ui(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>A(e)?e.trim():e)),o.number&&(i=i.map(st)));let s,c=r[s=rt(t)]||r[s=rt($e(t))];!c&&a&&(c=r[s=rt(tt(t))]),c&&ur(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ur(l,e,6,i)}}var Gi=new WeakMap;function Ki(e,t,n=!1){let r=n?Gi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!k(e)){let r=e=>{let n=Ki(e,t,!0);n&&(s=!0,E(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(j(e)&&r.set(e,null),null):(O(a)?a.forEach(e=>o[e]=null):E(o,a),j(e)&&r.set(e,o),o)}function qi(e,t){return!e||!Ie(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),D(e,t[0].toLowerCase()+t.slice(1))||D(e,tt(t))||D(e,t))}function Ji(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,ee=jr(e),g,_;try{if(n.shapeFlag&4){let e=i||r,t=e;g=to(l.call(t,e,u,d,p,f,m)),_=s}else{let e=t;g=to(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),_=t.props?s:Yi(s)}}catch(t){Ia.length=0,dr(t,e,1),g=Ya(Pa)}let v=g;if(_&&h!==!1){let e=Object.keys(_),{shapeFlag:t}=v;e.length&&t&7&&(a&&e.some(Le)&&(_=Xi(_,a)),v=Qa(v,_,!1,!0))}return n.dirs&&(v=Qa(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&qr(Ur(v.type)&&Kr(v)||v,n.transition),g=v,jr(ee),g}var Yi=e=>{let t;for(let n in e)(n===`class`||n===`style`||Ie(n))&&((t||={})[n]=e[n]);return t},Xi=(e,t)=>{let n={};for(let r in e)(!Le(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Zi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if($i(o,r,n)&&!qi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Qi(r,o,l):!!o;return!1}function Qi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if($i(t,e,a)&&!qi(n,a))return!0}return!1}function $i(e,t,n){let r=e[n],i=t[n];return n===`style`&&j(r)&&j(i)?!Ct(r,i):r!==i}function ea({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var ta={},na=()=>Object.create(ta),ra=e=>Object.getPrototypeOf(e)===ta;function ia(e,t,n,r=!1){let i={},a=na();e.propsDefaults=Object.create(null),oa(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:zn(i):e.type.props?i:a,e.attrs=a}function aa(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=F(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(qi(e.emitsOptions,o))continue;let u=t[o];if(c){if(D(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=$e(o);i[t]=sa(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{oa(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!D(t,a)&&((r=tt(a))===a||!D(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=sa(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!D(t,e))&&(delete a[e],l=!0)}l&&rn(e.attrs,`set`,``)}function oa(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(Xe(c))continue;let l=t[c],u;i&&D(i,u=$e(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:qi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=F(n),r=s||T;for(let o=0;o<a.length;o++){let s=a[o];n[s]=sa(i,t,s,r[s],e,!D(r,s))}}return o}function sa(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=D(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&k(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=mo(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===tt(n))&&(r=!0))}return r}var ca=new WeakMap;function la(e,t,n=!1){let r=n?ca:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!k(e)){let r=e=>{c=!0;let[n,r]=la(e,t,!0);E(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return j(e)&&r.set(e,Ne),Ne;if(O(a))for(let e=0;e<a.length;e++){let t=$e(a[e]);ua(t)&&(o[t]=T)}else if(a)for(let e in a){let t=$e(e);if(ua(t)){let n=a[e],r=o[t]=O(n)||k(n)?{type:n}:E({},n),i=r.type,c=!1,l=!0;if(O(i))for(let e=0;e<i.length;++e){let t=i[e],n=k(t)&&t.name;if(n===`Boolean`){c=!0;break}n===`String`&&(l=!1)}else c=k(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||D(r,`default`))&&s.push(t)}}let l=[o,s];return j(e)&&r.set(e,l),l}function ua(e){return e[0]!==`$`&&!Xe(e)}var da=e=>e===`_`||e===`_ctx`||e===`$stable`,fa=e=>O(e)?e.map(to):[to(e)],pa=(e,t,n)=>{if(t._n)return t;let r=Mr((...e)=>fa(t(...e)),n);return r._c=!1,r},ma=(e,t,n)=>{let r=e._ctx;for(let n in e){if(da(n))continue;let i=e[n];if(k(i))t[n]=pa(n,i,r);else if(i!=null){let e=fa(i);t[n]=()=>e}}},ha=(e,t)=>{let n=fa(t);e.slots.default=()=>n},ga=(e,t,n)=>{for(let r in t)(n||!da(r))&&(e[r]=t[r])},_a=(e,t,n)=>{let r=e.slots=na();if(e.vnode.shapeFlag&32){let e=t._;e?(ga(r,t,n),n&&ot(r,`_`,e,!0)):ma(t,r)}else t&&ha(e,t)},va=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=T;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:ga(i,t,n):(a=!t.$stable,ma(t,i)),o=t}else t&&(ha(e,t),o={default:1});if(a)for(let e in i)!da(e)&&o[e]==null&&delete i[e]},ya=ja;function ba(e){return xa(e)}function xa(e,t){let n=lt();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Pe,insertStaticContent:m}=e,h=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ka(e,t)&&(r=we(e),ye(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===Ne&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Na:ee(e,t,n,r);break;case Pa:g(e,t,n,r);break;case Fa:e??_(t,n,r,o);break;case Ma:le(e,t,n,r,i,a,o,s,c);break;default:d&1?ne(e,t,n,r,i,a,o,s,c):d&6?ue(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Ee)}u!=null&&i?Zr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Zr(e.ref,null,a,e,!0)},ee=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},g=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},v=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},te=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},ne=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)re(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),oe(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},re=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:ee,dirs:g}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&ae(e.children,f,null,i,s,Sa(e,c),l,d),g&&Nr(e,null,i,`created`),ie(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!Xe(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&ao(p,i,e)}g&&Nr(e,null,i,`beforeMount`);let _=wa(s,ee);_&&ee.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||_||g)&&ya(()=>{try{p&&ao(p,i,e),_&&ee.enter(f),g&&Nr(e,null,i,`mounted`)}finally{}},s)},ie=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||Aa(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ie(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ae=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?no(e[l]):to(e[l]);h(null,c,t,n,r,i,a,o,s)}},oe=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||T,m=t.props||T,h;if(n&&Ca(n,!1),(h=m.onVnodeBeforeUpdate)&&ao(h,n,t,e),f&&Nr(t,e,n,`beforeUpdate`),n&&Ca(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(l=0,s=!1,d=null),(p.innerHTML&&m.innerHTML==null||p.textContent&&m.textContent==null)&&u(c,``),d?se(e.dynamicChildren,d,c,n,r,Sa(t,i),o):s||he(e,t,c,null,n,r,Sa(t,i),o,!1),l>0){if(l&16)ce(c,p,m,n,i);else if(l&2&&p.class!==m.class&&a(c,`class`,null,m.class,i),l&4&&a(c,`style`,p.style,m.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=m[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else!s&&d==null&&ce(c,p,m,n,i);((h=m.onVnodeUpdated)||f)&&ya(()=>{h&&ao(h,n,t,e),f&&Nr(t,e,n,`updated`)},r)},se=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===Ma||!Ka(c,l)||c.shapeFlag&198)?d(c.el):n;h(c,l,u,null,r,i,a,o,!0)}},ce=(e,t,n,r,i)=>{if(t!==n){if(t!==T)for(let o in t)!Xe(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(Xe(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},le=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),ae(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(se(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Ta(e,t,!0)):he(e,t,n,f,a,o,c,l,u)},ue=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):de(t,n,r,i,a,o,c):fe(e,t,c)},de=(e,t,n,r,i,a,o)=>{let s=e.component=co(e,r,i);if(ei(e)&&(s.ctx.renderer=Ee),vo(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,pe,o),!e.el){let r=s.subTree=Ya(Pa);g(null,r,t,n),e.placeholder=r.el}}else pe(s,e,t,n,i,a,o)},fe=(e,t,n)=>{let r=t.component=e.component;if(Zi(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,me(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},pe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Da(e);if(n){t&&(t.el=c.el,me(e,t,o)),n.asyncDep.then(()=>{ya(()=>{e.isUnmounted||l()},i)});return}}let u=t,f;Ca(e,!1),t?(t.el=c.el,me(e,t,o)):t=c,n&&at(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&ao(f,s,t,c),Ca(e,!0);let p=Ji(e),m=e.subTree;e.subTree=p,h(m,p,d(m.el),we(m),e,i,a),t.el=p.el,u===null&&ea(e,p.el),r&&ya(r,i),(f=t.props&&t.props.onVnodeUpdated)&&ya(()=>ao(f,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=$r(t);if(Ca(e,!1),l&&at(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ao(o,d,t),Ca(e,!0),s&&b){let t=()=>{e.subTree=Ji(e),b(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Ji(e);h(null,o,n,r,e,i,a),t.el=o.el}if(u&&ya(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;ya(()=>ao(o,d,e),i)}(t.shapeFlag&256||d&&$r(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&ya(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new jt(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Sr(u),Ca(e,!0),l()},me=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,aa(e,t.props,r,n),va(e,t.children,n),Kt(),Tr(e),qt()},he=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){_e(l,f,n,r,i,a,o,s,c);return}if(p&256){ge(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&Ce(l,i,a),f!==l&&u(n,f)):d&16?m&16?_e(l,f,n,r,i,a,o,s,c):Ce(l,i,a,!0):(d&8&&u(n,``),m&16&&ae(f,n,r,i,a,o,s,c))},ge=(e,t,n,r,i,a,o,s,c)=>{e||=Ne,t||=Ne;let l=e.length,u=t.length,d=Math.min(l,u),f=0;for(;f<d;f++){let r=t[f]=c?no(t[f]):to(t[f]);h(e[f],r,n,null,i,a,o,s,c)}l>u?Ce(e,i,a,!0,!1,d):ae(t,n,r,i,a,o,s,c,d)},_e=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?no(t[l]):to(t[l]);if(Ka(r,u))h(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?no(t[f]):to(t[f]);if(Ka(r,l))h(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)h(null,t[l]=c?no(t[l]):to(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)ye(e[l],i,a,!0),l++;else{let p=l,m=l,ee=new Map;for(l=m;l<=f;l++){let e=t[l]=c?no(t[l]):to(t[l]);e.key!=null&&ee.set(e.key,l)}let g,_=0,v=f-m+1,te=!1,ne=0,re=Array(v);for(l=0;l<v;l++)re[l]=0;for(l=p;l<=d;l++){let r=e[l];if(_>=v){ye(r,i,a,!0);continue}let u;if(r.key!=null)u=ee.get(r.key);else for(g=m;g<=f;g++)if(re[g-m]===0&&Ka(r,t[g])){u=g;break}u===void 0?ye(r,i,a,!0):(re[u-m]=l+1,u>=ne?ne=u:te=!0,h(r,t[u],n,null,i,a,o,s,c),_++)}let ie=te?Ea(re):Ne;for(g=ie.length-1,l=v-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||ka(f):r;re[l]===0?h(null,d,n,p,i,a,o,s,c):te&&(g<0||l!==ie[g]?ve(d,n,p,2):g--)}}},ve=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ve(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,Ee);return}if(c===Ma){r(s,t,n);for(let e=0;e<u.length;e++)ve(u[e],t,n,a);r(e.anchor,t,n);return}if(c===Fa){v(e,t,n);return}if(a!==2&&d&1&&l){if(a===0)l.persisted&&!s[Wr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),ya(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[Wr];s._isLeaving&&s[Wr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}}else r(s,t,n)},ye=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(Kt(),Zr(s,null,n,e,!0),qt()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,ee=!$r(e),g;if(ee&&(g=o&&o.onVnodeBeforeUnmount)&&ao(g,t,e),u&6)Se(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Nr(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Ee,r):l&&!l.hasOnce&&(a!==Ma||d>0&&d&64)?Ce(l,t,n,!1,!0):(a===Ma&&d&384||!i&&u&16)&&Ce(c,t,n),r&&be(e)}let _=m!=null&&p==null;(ee&&(g=o&&o.onVnodeUnmounted)||h||_)&&ya(()=>{g&&ao(g,t,e),h&&Nr(e,null,t,`unmounted`),_&&(e.el=null)},n)},be=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===Ma){xe(n,r);return}if(t===Fa){te(e),a&&!a.persisted&&a.afterLeave&&a.afterLeave();return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},xe=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},Se=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Oa(c),Oa(l),r&&at(r),i.stop(),a?(a.flags|=8,ye(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,ye(o,e,t,n)),s&&ya(s,t),ya(()=>{e.isUnmounted=!0},t)},Ce=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ye(e[o],t,n,r,i)},we=e=>{if(e.shapeFlag&6)return we(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[Hr];return n?f(n):t},y=!1,Te=(e,t,n)=>{let r;e==null?t._vnode&&(ye(t._vnode,null,null,!0),r=t._vnode.component):h(t._vnode||null,e,t,null,null,null,n),t._vnode=e,y||=(y=!0,Tr(r),Er(),!1)},Ee={p:h,um:ye,m:ve,r:be,mt:de,mc:ae,pc:he,pbc:se,n:we,o:e},De,b;return t&&([De,b]=t(Ee)),{render:Te,hydrate:De,createApp:Vi(Te,De)}}function Sa({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ca({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function wa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ta(e,t,n=!1){let r=e.children,i=t.children;if(O(r)&&O(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=no(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Ta(t,a)),a.type===Na&&(a.patchFlag===-1&&(a=i[e]=no(a)),a.el=t.el),a.type===Pa&&!a.el&&(a.el=t.el)}}function Ea(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Da(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Da(t)}function Oa(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ka(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?ka(t.subTree):null}var Aa=e=>e.__isSuspense;function ja(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):wr(e)}var Ma=Symbol.for(`v-fgt`),Na=Symbol.for(`v-txt`),Pa=Symbol.for(`v-cmt`),Fa=Symbol.for(`v-stc`),Ia=[],La=null;function Ra(e=!1){Ia.push(La=e?null:[])}function za(){Ia.pop(),La=Ia[Ia.length-1]||null}var Ba=1;function Va(e,t=!1){Ba+=e,e<0&&La&&t&&(La.hasOnce=!0)}function Ha(e){return e.dynamicChildren=Ba>0?La||Ne:null,za(),Ba>0&&La&&La.push(e),e}function Ua(e,t,n,r,i,a){return Ha(L(e,t,n,r,i,a,!0))}function Wa(e,t,n,r,i){return Ha(Ya(e,t,n,r,i,!0))}function Ga(e){return e?e.__v_isVNode===!0:!1}function Ka(e,t){return e.type===t.type&&e.key===t.key}var qa=({key:e})=>e??null,Ja=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:A(e)||I(e)||k(e)?{i:kr,r:e,k:t,f:!!n}:e);function L(e,t=null,n=null,r=0,i=null,a=e===Ma?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qa(t),ref:t&&Ja(t),scopeId:Ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kr};return s?(ro(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=A(n)?8:16),Ba>0&&!o&&La&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&La.push(c),c}var Ya=Xa;function Xa(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===_i)&&(e=Pa),Ga(e)){let r=Qa(e,t,!0);return n&&ro(r,n),Ba>0&&!a&&La&&(r.shapeFlag&6?La[La.indexOf(e)]=r:La.push(r)),r.patchFlag=-2,r}if(To(e)&&(e=e.__vccOpts),t){t=Za(t);let{class:e,style:n}=t;e&&!A(e)&&(t.class=ht(e)),j(n)&&(Gn(n)&&!O(n)&&(n=E({},n)),t.style=ut(n))}let o=A(e)?1:Aa(e)?128:Ur(e)?64:j(e)?4:k(e)?2:0;return L(e,t,n,r,i,o,a,!0)}function Za(e){return e?Gn(e)||ra(e)?E({},e):e:null}function Qa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?io(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&qa(l),ref:t&&t.ref?n&&a?O(a)?a.concat(Ja(t)):[a,Ja(t)]:Ja(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ma?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qa(e.ssContent),ssFallback:e.ssFallback&&Qa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&qr(u,c.clone(u)),u}function $a(e=` `,t=0){return Ya(Na,null,e,t)}function eo(e=``,t=!1){return t?(Ra(),Wa(Pa,null,e)):Ya(Pa,null,e)}function to(e){return e==null||typeof e==`boolean`?Ya(Pa):O(e)?Ya(Ma,null,e.slice()):Ga(e)?no(e):Ya(Na,null,String(e))}function no(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qa(e)}function ro(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ro(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!ra(t)?t._ctx=kr:r===3&&kr&&(kr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(k(t)){if(r&65){ro(e,{default:t});return}t={default:t,_ctx:kr},n=32}else t=String(t),r&64?(n=16,t=[$a(t)]):n=8;e.children=t,e.shapeFlag|=n}function io(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=ht([t.class,r.class]));else if(e===`style`)t.style=ut([t.style,r.style]);else if(Ie(e)){let n=t[e],i=r[e];i&&n!==i&&!(O(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!Le(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ao(e,t,n,r=null){ur(e,t,7,[n,r])}var oo=zi(),so=0;function co(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||oo,a={uid:so++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ot(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:la(r,i),emitsOptions:Ki(r,i),emit:null,emitted:null,propsDefaults:T,inheritAttrs:r.inheritAttrs,ctx:T,data:T,props:T,attrs:T,slots:T,refs:T,setupState:T,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Wi.bind(null,a),e.ce&&e.ce(a),a}var lo=null,uo=()=>lo||kr,fo,po;{let e=lt(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};fo=t(`__VUE_INSTANCE_SETTERS__`,e=>lo=e),po=t(`__VUE_SSR_SETTERS__`,e=>_o=e)}var mo=e=>{let t=lo;return fo(e),e.scope.on(),()=>{e.scope.off(),fo(t)}},ho=()=>{lo&&lo.scope.off(),fo(null)};function go(e){return e.vnode.shapeFlag&4}var _o=!1;function vo(e,t=!1,n=!1){t&&po(t);let{props:r,children:i}=e.vnode,a=go(e);ia(e,r,a,t),_a(e,i,n||t);let o=a?yo(e,t):void 0;return t&&po(!1),o}function yo(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Si);let{setup:r}=n;if(r){Kt();let n=e.setupContext=r.length>1?Co(e):null,i=mo(e),a=lr(r,e,0,[e.props,n]),o=We(a);if(qt(),i(),(o||e.sp)&&!$r(e)&&Jr(e),o){if(a.then(ho,ho),t)return a.then(n=>{po(!0);try{bo(e,n,t)}finally{po(!1)}}).catch(t=>{dr(t,e,0)});e.asyncDep=a}else bo(e,a,t)}else xo(e,t)}function bo(e,t,n){k(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:j(t)&&(e.setupState=er(t)),xo(e,n)}function xo(e,t,n){let r=e.type;e.render||=r.render||Pe;{let t=mo(e);Kt();try{Ti(e)}finally{qt(),t()}}}var So={get(e,t){return P(e,`get`,``),e[t]}};function Co(e){return{attrs:new Proxy(e.attrs,So),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function wo(e){return e.exposed?e.exposeProxy||=new Proxy(er(Kn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bi)return bi[n](e)},has(e,t){return t in e||t in bi}}):e.proxy}function To(e){return k(e)&&`__vccOpts`in e}var Eo=(e,t)=>nr(e,t,_o),Do=`3.5.43`,Oo=void 0,ko=typeof window<`u`&&window.trustedTypes;if(ko)try{Oo=ko.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ao=Oo?e=>Oo.createHTML(e):e=>e,jo=`http://www.w3.org/2000/svg`,Mo=`http://www.w3.org/1998/Math/MathML`,No=typeof document<`u`?document:null,Po=No&&No.createElement(`template`),Fo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?No.createElementNS(jo,e):t===`mathml`?No.createElementNS(Mo,e):n?No.createElement(e,{is:n}):No.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>No.createTextNode(e),createComment:e=>No.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>No.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Po.innerHTML=Ao(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Po.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Io=Symbol(`_vtc`);function Lo(e,t,n){let r=e[Io];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ro=Symbol(`_vod`),zo=Symbol(`_vsh`),Bo=Symbol(``),Vo=/(?:^|;)\s*display\s*:/;function Ho(e,t,n){let r=e.style,i=A(n),a=!1;if(n&&!i){if(t){if(A(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Wo(r,t,``)}else for(let e in t)n[e]??Wo(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Wo(r,i,``):Jo(e,i,!A(t)&&t?t[i]:void 0,o)||Wo(r,i,o)}}else if(i){if(t!==n){let e=r[Bo];e&&(n+=`;`+e),r.cssText=n,a=Vo.test(n)}}else t&&e.removeAttribute(`style`);Ro in e&&(e[Ro]=a?r.display:``,e[zo]&&(r.display=`none`))}var Uo=/\s*!important$/;function Wo(e,t,n){if(O(n))n.forEach(n=>Wo(e,t,n));else if(n??=``,t.startsWith(`--`))Uo.test(n)?e.setProperty(t,n.replace(Uo,``),`important`):e.setProperty(t,n);else{let r=qo(e,t);Uo.test(n)?e.setProperty(tt(r),n.replace(Uo,``),`important`):e[r]=n}}var Go=[`Webkit`,`Moz`,`ms`],Ko={};function qo(e,t){let n=Ko[t];if(n)return n;let r=$e(t);if(r!==`filter`&&r in e)return Ko[t]=r;r=nt(r);for(let n=0;n<Go.length;n++){let i=Go[n]+r;if(i in e)return Ko[t]=i}return t}function Jo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&A(r)&&n===r}var Yo=`http://www.w3.org/1999/xlink`;function Xo(e,t,n,r,i,a=_t(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Yo,t.slice(6,t.length)):e.setAttributeNS(Yo,t,n):n==null||a&&!vt(n)?e.removeAttribute(t):e.setAttribute(t,a?``:Ue(n)?String(n):n)}function Zo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ao(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=vt(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Qo(e,t,n,r){e.addEventListener(t,n,r)}function $o(e,t,n,r){e.removeEventListener(t,n,r)}var es=Symbol(`_vei`);function ts(e,t,n,r,i=null){let a=e[es]||(e[es]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=is(t);r?Qo(e,n,a[t]=cs(r,i),s):o&&($o(e,n,o,s),a[t]=void 0)}}var ns=/(Once|Passive|Capture)$/,rs=/^on:?(?:Once|Passive|Capture)$/;function is(e){let t,n;for(;(n=e.match(ns))&&!rs.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):tt(e.slice(2)),t]}var as=0,os=Promise.resolve(),ss=()=>as||=(os.then(()=>as=0),Date.now());function cs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(O(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&ur(e,t,5,a)}}else ur(r,t,5,[e])};return n.value=e,n.attached=ss(),n}var ls=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,us=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Lo(e,r,o):t===`style`?Ho(e,n,r):Ie(t)?Le(t)||ts(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):ds(e,t,r,o))?(Zo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Xo(e,t,r,o,a,t!==`value`)):e._isVueCE&&(fs(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!A(r)))?Zo(e,$e(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Xo(e,t,r,o))};function ds(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&ls(t)&&k(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return ls(t)&&A(n)?!1:t in e}function fs(e,t){let n=e._def.props;if(!n)return!1;let r=$e(t);return Array.isArray(n)?n.some(e=>$e(e)===r):Object.keys(n).some(e=>$e(e)===r)}var ps=E({patchProp:us},Fo),ms;function hs(){return ms||=ba(ps)}var gs=((...e)=>{let t=hs().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=vs(e);if(!r)return;let i=t._component;!k(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,_s(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function _s(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function vs(e){return A(e)?document.querySelector(e):e}var ys=Yn(0),bs=()=>ys.value++;function xs(e){return ys.value,e()}var Ss=(e,t,n)=>b`<option value="${e}" ${e===String(n)&&y(`selected`)}>${t}</option>`;function Cs(e){return f[e]?b`<span class="setting-help" tabindex="0" aria-label="${f[e]}"
        >ⓘ<span role="tooltip">${f[e]}</span></span
      >`:``}var R=e=>S(e>1e3?e/1e3:e)+(e>1e3?` GW`:` MW`);function ws(e,t,n,r=`number`,i=``){return b`<label class="field"
    >${e} ${Cs(t)}<input name="${t}" type="${r}" value="${n}" ${y(i)}
  /></label>`}function z(e,t,n,r){return b`<label class="field"
    >${e} ${Cs(t)}<select name="${t}">
      ${n.map(([e,t])=>Ss(e,t,r))}
    </select></label
  >`}var Ts=new Set([`Fuel`,`Rocket Fuel`,`Nitric Acid`,`Turbofuel`,`Ionized Fuel`,`Dark Matter Residue`,`Excited Photonic Matter`,`Heavy Oil Residue`,`Alumina Solution`,`Sulfuric Acid`,`Dissolved Silica`,`Nitrogen Gas`,`Water`,`Crude Oil`,`Liquid Biofuel`]),Es=[{mark:`Mk.1`,cap:60,entry:`Schematic_1-2_C`},{mark:`Mk.2`,cap:120,entry:`Schematic_3-2_C`},{mark:`Mk.3`,cap:270,entry:`Schematic_5-3_C`},{mark:`Mk.4`,cap:480,entry:`Schematic_6-1_C`},{mark:`Mk.5`,cap:780,entry:`Schematic_7-2_C`},{mark:`Mk.6`,cap:1200,entry:`Schematic_9-5_C`}],Ds=[{mark:`Mk.1`,cap:300,entry:`Schematic_3-1_C`},{mark:`Mk.2`,cap:600,entry:`Schematic_6-5_C`}],Os={Plastic:{in:{"Crude Oil":30},out:{Plastic:20,"Heavy Oil Residue":10}},Rubber:{in:{"Crude Oil":30},out:{Rubber:20,"Heavy Oil Residue":20}},"Residual Fuel":{in:{"Heavy Oil Residue":60},out:{Fuel:40}},"Residual Rubber":{in:{"Polymer Resin":40,Water:40},out:{Rubber:20}},"Alternate: Heavy Oil Residue":{in:{"Crude Oil":30},out:{"Heavy Oil Residue":40,"Polymer Resin":20}},"Alternate: Diluted Fuel":{in:{"Heavy Oil Residue":50,Water:100},out:{Fuel:100}},"Alternate: Recycled Plastic":{in:{Rubber:30,Fuel:30},out:{Plastic:60}},"Alternate: Recycled Rubber":{in:{Plastic:30,Fuel:30},out:{Rubber:60}}},ks=e=>e<=2?1:e<=4?2:e<=6?3:e<=8?4:5;function As(e){let t=Cd?.entries.find(t=>t.id===e.entry);return t?{name:t.name,tier:t.tier,phase:ks(t.tier),marked:$(`unlock-`+t.id)}:null}function js(e,t){let n=e?Ds:Es,r=Number(t??Q()),i=n[0],a=As(n[0]);for(let e of n){let t=As(e);(!t||t.marked||t.phase<=r)&&(i=e,a=t)}let o=n[n.indexOf(i)+1];return{...i,fluid:e,unit:e?` m³/min`:`/min`,milestone:a,next:o?{...o,milestone:As(o)}:null}}function Ms(e,t,n){let r=js(t,n),i=Math.max(1,Math.ceil(e/r.cap-1e-9)),a=e-(i-1)*r.cap;return{lane:r,count:i,last:a,full:i-+(a<r.cap-1e-9),spare:i*r.cap-e,word:t?`pipe`:`belt`}}var Ns=(e,t)=>e>1?`1 of the ${S(e)} ${t.replace(/y$/,`ie`)}s`:`1 × ${t}`;function Ps([e,t,n],r){let i=b`${e!==`MW`&&w(e)}<span class="rail-main"
      ><b>${ke(t)}${Ts.has(e)?` m³`:e===`MW`?` MW`:``}</b
      ><small>${e===`MW`?`Power generation`:e}</small></span
    >`;return n?b`<button class="rail-cell${r?` out`:``}" ${n}>${i}</button>`:b`<div class="rail-cell${r?` out`:``}">${i}</div>`}function Fs(e){let t=e.recipe;return t?b`<div class="rail-recipe">
    <div class="rail-recipe-head">
      <span>Recipe · ${t.name}</span
      ><span>what ${Ns(e.machineCount,t.machine)} makes @ 100% · per minute</span>
    </div>
    <div class="rail-recipe-body">
      <div class="rail-recipe-ins">
        ${t.ins.length?t.ins.map(e=>Ps(e)):b`<div class="rail-cell">
              <span class="rail-main"><small>No belt or pipe inputs</small></span>
            </div>`}
      </div>
      <span class="rail-recipe-arrow">→</span>
      <div class="rail-recipe-outs">${t.outs.map(e=>Ps(e,!0))}</div>
    </div>
  </div>`:``}function Is(e){if(!e||!e.inputs.length&&!e.outputs.length)return``;let t=e=>{let t=e.plan,n=Math.round(e.rate/(t.count*t.lane.cap)*100),r=b`${w(e.name)}<span class="rail-main"
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
      ${e.outputs.length>0&&b`<div class="rail-arrow">↓</div>`}`;return b`<h3>Flow at ${Qd(e.stage)}</h3>
    ${Fs(e)}
    ${e.inputs.length>0&&b`<div class="rail-cap">
        Inputs · ${e.inputs.length} line${e.inputs.length>1&&`s`} in
      </div>
      <div class="rail-grid">${e.inputs.map(t)}</div>`}
    ${r}
    ${e.outputs.length>0&&b`<div class="rail-caps">
        <span class="rail-cap">Delivers · ${Qd(e.stage)}</span>${e.outputs.some(e=>e.mach!==void 0)&&b`<span class="rail-cap">Machines per delivery · ${S(e.machineCount)} total</span>`}
      </div>
      <div class="rail-rows">${e.outputs.map(n)}</div>
      ${e.bankNote}`}`}function Ls(e,t=`/min`){if(e.length<=10)return e;let n=e.slice(9),r=n.reduce((e,t)=>e+(t.rate||0),0);return[...e.slice(0,9),{kind:`more`,label:`+ ${n.length} more destinations`,rate:r,unit:t}]}function Rs(e){if(!e||!e.inputs.length)return``;let t=js(!1,e.stage),n=js(!0,e.stage),r=t.next?.milestone?` ${t.next.mark} belts (${S(t.next.cap)}/min) unlock at Tier ${t.next.milestone.tier} · ${t.next.milestone.name} in Phase ${t.next.milestone.phase}.`:``;return b`<h3>Belts &amp; pipes</h3>
    <p class="small muted">
      ${Qd(e.stage)} milestones give ${t.mark} belts (${S(t.cap)}/min) and
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
    </div>`})}</div>`}function zs(e,t,n,r,i=!1){let a=Ts.has(e.name),o=a?` m³/min`:`/min`,s=Math.max(n.machines-1+(n.lastClock??100)/100,.01),c=n.output/s,l=e=>`${e.count} × ${e.lane.mark} ${e.word}${e.count>1?`s`:``}`,u=e=>i?void 0:e/c,d=Y.factories.filter(n=>n.id!==e.id&&n.stages[t]?.inputs?.[e.name]).map(n=>{let r=n.stages[t].inputs[e.name];return{kind:`consumer`,label:n.name,icon:n.name,link:b`data-factory="${n.id}"`,rate:r,unit:o,mach:u(r),beltTxt:e.local?`made on site`:l(Ms(r,a,t))}}).sort((e,t)=>t.rate-e.rate),f=[...d];e.nuclear&&!d.length&&f.push({kind:`ship`,label:`Nuclear power fleet`,shipSub:`planned in Power & resources`,icon:e.name,rateTxt:``}),n.storage&&f.push({kind:`store`,label:`Storage refill`,icon:e.name,rate:n.storage,unit:o,mach:u(n.storage)}),n.delivery&&f.push({kind:`ship`,label:`Space Elevator delivery`,icon:e.name,rate:n.delivery,unit:o,mach:u(n.delivery)});let p=Math.max(0,n.output-(n.demand??n.output));p>.002&&f.push({kind:`sink`,label:`AWESOME Sink`,icon:e.name,rate:p,unit:o});let m=i?[]:Object.entries(n.inputs||{}).map(([e,n])=>{let i=r(e),a=i||Y.factories.find(n=>n.name===e&&n.stages[t]);return{name:e,rate:n,link:a?b`data-factory="${a.id}"`:``,plan:Ms(n,Ts.has(e),t),local:i?b`<button class="btn quiet" data-factory="${i.id}">
                Local: ≈ ${S(Math.ceil(n/i.stages[t].rate))} × ${i.stages[t].machine} at
                this site ↗
              </button>`:``}}),h=Ls(f,o),ee=h.filter(e=>e.mach!==void 0&&e.kind!==`sink`),g=ee.length>1?` · split ≈ ${ee.map(e=>S(Math.ceil(e.mach-1e-9))).join(` / `)} across the deliveries below`:``,_=(n.lastClock??100)<100?`@ 100% except the last at ${S(n.lastClock)}%`:`@ 100%`;return{stage:t,inputs:m,outputs:h,equivalent:s,machineCount:n.machines,machineName:n.machine,local:!!e.local,recipe:i?null:{name:String(n.recipe||``).replace(`Alternate: `,``),machine:n.machine,ins:m.map(e=>[e.name,e.rate/s,e.link]),outs:[[e.name,c]]},bar:i?null:{sub:`${String(n.recipe||``).replace(`Alternate: `,``)} · ${_} · ${ke(c)} ${e.name}/min out per machine${g}${e.local?` · built beside the consumers`:``}`,outTxt:b`${S(n.output)}<small>${o}</small>`,outSub:e.local?`out · distributed`:`out · `+l(Ms(n.output,a,t))},sameItemConsumers:n=>Y.factories.filter(r=>r.id!==e.id&&r.stages[t]?.inputs?.[n]).map(e=>({label:e.name,rate:e.stages[t].inputs[n],attr:b`data-factory="${e.id}"`}))}}function Bs(e){let t=tf(),n=Q(),r=Object.keys(e.outputs||{}).length>1,i=Math.max(e.equivalent||e.machines-1+(e.lastClock??100)/100||1,.01),a=e=>`${e.count} × ${e.lane.mark} ${e.word}${e.count>1?`s`:``}`,o=[];for(let s of Object.keys(e.outputs||{})){let c=Ts.has(s),l=c?` m³/min`:`/min`,u=r?s:``,d=e.outputs[s]/i,f=e=>r?void 0:e/d;for(let r of(t.rows||[]).filter(t=>t.id!==e.id&&t.inputs?.[s]))o.push({kind:`consumer`,label:r.name,icon:Object.keys(r.outputs||{})[0]||s,link:b`data-calc-factory="${r.id}"`,rate:r.inputs[s],unit:l,pre:u,mach:f(r.inputs[s]),beltTxt:a(Ms(r.inputs[s],c,n))});t.storage?.[s]&&o.push({kind:`store`,label:`Protected storage`,icon:s,rate:t.storage[s],unit:l,pre:u,mach:f(t.storage[s])}),t.delivery?.[s]?.rate&&o.push({kind:`ship`,label:`Space Elevator delivery`,icon:s,rate:t.delivery[s].rate,unit:l,pre:u,mach:f(t.delivery[s].rate)}),t.drone?.[s]&&o.push({kind:`drone`,label:`Drone fuel contract`,icon:s,rate:t.drone[s],unit:l,pre:u,mach:f(t.drone[s])}),n===`5`&&s===`Alien Power Matrix`&&t.matrixRate&&o.push({kind:`ship`,label:`Alien Power Augmenter fuel`,shipSub:S(q.settings.fueledAugmenters)+` fueled augmenter`+(q.settings.fueledAugmenters>1?`s`:``),icon:s,rate:t.matrixRate,unit:l,pre:u,mach:f(t.matrixRate)}),n===`5`&&s===`Singularity Cell`&&q.settings.cellsPerMinute&&o.push({kind:`ship`,label:`Extra Singularity Cells`,shipSub:`configured portal supply`,icon:s,rate:q.settings.cellsPerMinute,unit:l,pre:u,mach:f(q.settings.cellsPerMinute)}),s===`Plutonium Fuel Rod`&&t.plutoniumSink&&o.push({kind:`sink`,label:`AWESOME Sink`,subTxt:`waste strategy — sink these rods`,icon:s,rate:t.plutoniumSink,unit:l,pre:u}),t.surplus?.[s]>.002&&o.push({kind:`sink`,label:`AWESOME Sink`,icon:s,rate:t.surplus[s],unit:l,pre:u})}o.sort((e,t)=>(t.rate||0)-(e.rate||0)),!o.length&&e.generationMW&&o.push({kind:`ship`,label:`Power grid`,shipSub:`generation`,rateTxt:R(e.generationMW)});let s=Object.entries(e.inputs||{}).map(([r,i])=>{let a=(t.rows||[]).find(t=>t.id!==e.id&&t.outputs?.[r]);return{name:r,rate:i,link:a?b`data-calc-factory="${a.id}"`:``,plan:Ms(i,Ts.has(r),n)}}),c=Object.keys(e.outputs||{})[0],l=Ls(o),u=l.filter(e=>e.mach!==void 0&&e.kind!==`sink`),d=u.length>1?` · split ≈ ${u.map(e=>S(Math.ceil(e.mach-1e-9))).join(` / `)} across the deliveries below`:``,f=e.machines-i>1e-7?`@ 100% + 1 adjustable`:`@ 100%`,p=Object.keys(e.outputs||{}).some(n=>(t.rows||[]).some(t=>t.id!==e.id&&t.outputs?.[n]));return{stage:n,inputs:s,outputs:l,equivalent:i,machineCount:e.machines,machineName:e.machine,local:!1,recipe:{name:e.name,machine:e.machine,ins:s.map(e=>[e.name,e.rate/i,e.link]),outs:c?Object.entries(e.outputs).map(([e,t])=>[e,t/i]):[[`MW`,e.generationMW/i]]},bar:{sub:`${e.name} · ${f}${c&&!r?` · ${ke(e.outputs[c]/i)} ${c}/min out per machine`:``}${d}`,outTxt:c?b`${S(e.outputs[c])}<small>${Ts.has(c)?` m³/min`:`/min`}</small>`:R(e.generationMW),outSub:c?r?`out · `+c+` + byproducts`:`out · `+a(Ms(e.outputs[c],Ts.has(c),n)):`generation`},bankNote:o.length?b`<p class="small muted">
          Demand for the item across this phase's whole
          plan${p?`, supplied together with the other recipes producing it`:``}.
        </p>`:``,sameItemConsumers:n=>(t.rows||[]).filter(t=>t.id!==e.id&&t.inputs?.[n]).map(e=>({label:e.name,rate:e.inputs[n],attr:b`data-calc-factory="${e.id}"`}))}}function Vs(e){return Object.entries(e).filter(([,e])=>e).map(([e,t])=>e+` `+S(t)+`/min`).join(` · `)}function Hs(){let e=X?.storageEdits||{};return{floors:e.floors||[],floorNames:e.floorNames||{},bays:e.bays||[],bayNames:e.bayNames||{},slots:e.slots||{},clearedSlots:e.clearedSlots||[]}}function Us(){let e=Hs();return[...[[`ground`,`Ground floor`],[`upper`,`Upper floor`],[`workshop`,`Workshop`]].map(([t,n])=>({id:t,label:e.floorNames[t]||n,builtin:!0})),...e.floors.map(t=>({id:t.id,label:e.floorNames[t.id]||t.label,builtin:!1}))]}function Ws(){let e=new Set([...Y.storage.map(e=>e.id),...Hs().bays.map(e=>e.id)]);for(let t of`STUVXYZABCDEFGHIJKLMNOPQRW`)if(!e.has(t))return t;for(let t of`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)for(let n of`ABCDEFGHIJKLMNOPQRSTUVWXYZ`)if(!e.has(t+n))return t+n;return null}function Gs(){let e=Hs(),t=new Set(e.clearedSlots),n=q?new Set(Object.values(q.stages).flatMap(e=>Object.keys(e.storage||{}))):null,r=q?q.settings.collectables??q.settings.storage===`all`:!0,i=(n,r)=>t.has(r)?null:e.slots[r]??n,a=t=>Object.keys(e.slots).reduce((e,n)=>ye(n)===t?Math.max(e,Se(n)):e,8),o=(e,t)=>Array.from({length:Math.max(0,a(e)-t)},(n,r)=>{let a=e+String(t+r+1).padStart(2,`0`);return{id:a,name:i(null,a)}}),s=Y.storage.map(t=>({...t,name:e.bayNames[t.id]||t.name,items:[...t.items.map(e=>{let a=n?e.name&&(n.has(e.name)||[`Q`,`R`].includes(t.id)&&r)?e.name:null:e.name;return{...e,name:i(a,e.id)}}),...o(t.id,t.items.length)]})),c=e.bays.map(t=>({id:t.id,name:e.bayNames[t.id]||t.name,floor:t.floor,custom:!0,items:o(t.id,0)}));return[...s,...c].filter(e=>e.custom||!n||e.items.some(e=>e.name))}var Ks=[`built`,`labelled`,`connected`,`verified`],qs=e=>Ks.map(t=>`slot-`+e+`-`+t),Js=e=>qs(e).every($);function Ys(){let e=Us();e.some(e=>e.id===Od)||Vd(e[0].id);let t=e.find(e=>e.id===Od),n=Gs().filter(e=>e.floor===Od),r=n.filter(e=>!Dd||e.items.some(e=>e.name&&(e.id+` `+e.name).toLowerCase().includes(Dd.toLowerCase()))),i=[...r].sort((e,t)=>Math.floor((t.id.charCodeAt(0)-65)/2)-Math.floor((e.id.charCodeAt(0)-65)/2)||e.id.localeCompare(t.id)).map(e=>e.id),a=[...r].sort((e,t)=>e.id.localeCompare(t.id)),o=Array.from({length:Math.floor(i.length/2)},(e,t)=>b`<div class="aisle" style="--aisle-row:${t+1}">MAIN AISLE</div>`),s=b`<div class="tabs">
    ${e.map(e=>b`<button class="tab ${Od===e.id?`active`:``}" data-floor="${e.id}">
          ${e.label}
        </button>`)}
  </div>`,c=jd&&b`<section class="panel edit-panel">
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
    </section>`,l=b`${Od===`ground`?K.id===`original`?b`<div class="notice blue">
            <b>Ground floor is built.</b> The shell is marked complete. Move Gas Filters G08 → H02
            and Nobelisks H02 → H08; assign Medicinal Inhalers to G08. H01 stays Iodine-Infused
            Filter.
          </div>`:b`<div class="notice blue">
            Optional storage template. Each position has its own checklist; nothing is assumed
            built.
          </div>`:Od===`upper`&&b`<div class="notice blue">
          Q sits behind O; R sits behind P. Packaged fluids only. Nuclear items and unpackaged
          fluids stay outside this room.
        </div>`}
    ${Dd&&b`<p class="small muted">
      Filtered view: showing matching bays only. Clear search to see the full floor arrangement.
    </p>`}${a.length>0&&b`<p class="eyebrow floor-marker">REAR OF HALL ↑</p>`}
    <div class="floor-grid">
      ${o.length||a.length?b`${o}${a.map(e=>Xs(e,i.indexOf(e.id)))}`:Od!==`workshop`&&b`<div class="empty-state">
            ${n.length?`No matching item on this floor. Try another floor.`:`No bays on this floor yet. Use Edit layout to add one.`}
          </div>`}
    </div>
    ${a.length>0&&b`<div class="entry floor-marker">↓ ENTRANCE / STAIRS</div>
      <div class="small muted">
        Within each bay, 01–04 are the rear bank; 05–08 are the front bank. Read left to right on
        both banks. Grey positions remain unassigned. Positions from 09 are containers added beyond
        the printed bay.
      </div>`}`,u=q?[{id:`calc-storage-layout`,title:`Build and label the selected storage positions`,body:`Use one container per selected item. Reserve its refill supply and route sinkable overflow to the AWESOME Sink; gathered items need manual replenishment.`}]:Y.storageTasks;return String(b`${B(`ONE ITEM · ONE ADDRESS`,`Storage room`,q?`Showing your selected storage supply across all phases. Unselected positions are reserved; addresses stay stable.`:`Mark containers Done here, or complete a room after placing, labelling, connecting and checking its containers. Click an item for details. Positions match your printed storage plan.`)}
      <div class="toolbar">
        ${s}<input
          id="storage-search"
          class="search"
          aria-label="Find storage on this floor"
          placeholder="Find an item or address on this floor…"
          value="${Dd}"
        /><button class="btn ${jd?`primary`:``}" data-toggle-layout>
          ${jd?`Done editing`:`Edit layout`}
        </button>
      </div>
      ${c}${Od===`workshop`&&Zs()}${l}
      <section style="margin-top:28px">
        <h2>Storage build checklist</h2>
        <div class="checklist">${u.map(qc)}</div>
      </section>`)}function Xs(e,t=0){let n=e.items.filter(e=>e.name),r=n.filter(e=>Js(e.id)).length,i=jd?b`<input
        id="bay-name-${e.id}"
        class="bay-rename"
        data-bay-rename="${e.id}"
        value="${e.name}"
        maxlength="80"
        aria-label="Rename bay ${e.id}"
      />`:b`<h3>${e.name}</h3>`,a=jd&&e.custom&&b`<button class="btn danger" data-remove-bay="${e.id}">Remove bay</button>`,o=jd&&e.items.length<ve&&b`<form class="inline-form add-container" data-bay="${e.id}">
      <input
        id="bay-draft-${e.id}"
        name="name"
        maxlength="120"
        required
        placeholder="${n.length<e.items.length?`Add container: item name…`:`Add a position beyond `+e.items.at(-1).id+`…`}"
        aria-label="Add container to bay ${e.id}"
      /><button class="btn" type="submit">+ Add</button>
    </form>`,s=e=>Dd&&(e.id+` `+e.name).toLowerCase().includes(Dd.toLowerCase()),c=e=>e.name?b`<div class="slot ${Js(e.id)?`done`:``} ${s(e)?`match`:``}">
          ${jd&&b`<button
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
              ${Js(e.id)&&y(`checked`)}
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
  </section>`}function Zs(){return b`<div class="panel">
    <span class="eyebrow">GROUND-FLOOR REAR EXTENSION</span>
    <h2 style="margin-top:10px">Workshop beneath Q/R</h2>
    <p>
      The upper floor gets the new storage bays; the space underneath becomes your crafting area. No
      existing production-container addresses change.
    </p>
    <div class="checklist">
      ${[[`bench`,`Craft Bench and Equipment Workshop`,`Side by side near the entrance.`],[`tools`,`Tools and mobility equipment`,`Personal boxes on the left wall.`],[`weapons`,`Weapons and spare wearables`,`Personal boxes on the right wall. Ammo and filters stay in G/H.`],[`mam`,`MAM and inventory drop`,`Rear wall, with collected items routed to Q/R. Finish the sorter at a recovery chest.`]].map(([e,t,n])=>qc({id:`workshop-`+e,title:t,body:n}))}
    </div>
  </div>`}var Qs=[[`built`,`Container placed`],[`labelled`,`Sign and address labelled`],[`connected`,`Correct supply connected`],[`verified`,`Flow and overflow verified`]];function $s(e){let t=Gs().find(t=>t.items.some(t=>t.id===e)),n=t?.items.find(t=>t.id===e);if(!n?.name)return;let r=q?tf().rows?.find(e=>e.outputs[n.name]):Y.factories.find(e=>e.name===n.name),i=Number(e.slice(t.id.length));pc(n.name,`${e} · ${Us().find(e=>e.id===t.floor)?.label||t.floor} · Bay ${t.id}`,b`<p>
        <b>${t.name}</b><br />${i<=4?`Rear`:`Front`} bank, position
        ${(i-1)%4+1} from the left on the floor plan.
      </p>
      <div class="check-columns">
        ${Qs.map(([t,n])=>b`<label class="check-row"
              ><input
                type="checkbox"
                data-check="slot-${e}-${t}"
                ${y(Zd(`slot-`+e+`-`+t))}
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
      </div>`,n.name)}var ec=e=>[`Plastic`,`Rubber`].includes(e.name)?`oil`:e.nuclear?`nuclear`:null;function tc(){let e=X?.factoryGroups||{};return{groups:e.groups||[],assignments:e.assignments||{}}}var nc=e=>tc().assignments[e]||[];function rc(e,t,n,r,i=`/min`){let a=nc(e),o=a.find(e=>e.group===t);if(!o||a.length===1&&o.rate==null)return``;let s=o.rate==null?Math.max(0,n-a.reduce((e,t)=>e+(t.rate||0),0)):o.rate,c=n>0?Math.min(1,s/n):0;return b`<div class="small allocation">
    ${o.rate==null?`Remaining here: `:`Here: `}${S(s)}${i} of
    ${S(n)}${i}${r>0&&c<1&&` · ≈ ${S(r*c)} of ${S(r)} machines`}
  </div>`}function ic(e){let t=tc();if(!t.groups.length)return b`<p class="small muted">Create a group above to place this factory.</p>`;let n=nc(e),r=t.groups.filter(e=>!n.some(t=>t.group===e.id)),i=e=>t.groups.find(t=>t.id===e.group)?.name;return b`<div class="assign-editor">
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
  </div>`}function ac(){return b`<section class="panel edit-panel">
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
  </section>`}function oc(e,t,n){return b`${tc().groups.map(r=>{let i=e.filter(e=>nc(t(e)).some(e=>e.group===r.id));return!i.length&&!Pd?``:b`<section class="site-group user-group">
      <header class="site-head">
        <div>
          <span class="eyebrow"
            >FACTORY GROUP · ${i.length}
            ${i.length===1?`FACTORY`:`FACTORIES`}</span
          >${Pd?b`<input
                class="bay-rename"
                data-group-rename="${r.id}"
                value="${r.name}"
                maxlength="80"
                aria-label="Rename group ${r.name}"
              />`:b`<h2>${r.name}</h2>`}
        </div>
        ${Pd?b`<button class="btn danger" data-remove-group="${r.id}">Remove group</button>`:i.length>1&&b`<button class="btn" data-group-chain="${r.id}">Build order ↗</button>`}
      </header>
      <div class="cards">
        ${i.length?i.map(e=>n(e,r.id)):b`<div class="empty-state">
              Empty group. Add factories with the group selector on their cards.
            </div>`}
      </div>
    </section>`})}`}function sc(){return b`<button class="btn ${Pd?`primary`:``}" data-toggle-factory-edit>
    ${Pd?`Done editing`:`Edit groups`}
  </button>`}function cc(e,t=null){let n=e.stages[Q()],r=`factory-`+Q()+`-`+e.id;return b`<article class="factory-card ${$(r)?`done`:``}">
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
    ${t&&rc(e.id,t,n.output,n.machines)}
    <footer>
      <label class="check-row"
        ><input type="checkbox" data-check="${r}" ${y(Zd(r))} />Running</label
      ><button class="btn quiet" data-factory="${e.id}">Details ↗</button>
    </footer>
    ${Pd&&ic(e.id)}
  </article>`}function lc(e,t){if(!t.length)return``;let n=Y.plans[Q()],r=e===`oil`?`Oil campus`:`Nuclear site`,i=e===`oil`?`One shared machine set produces these outputs together: ${S(n.oil.reduce((e,t)=>e+t.machines,0))} buildings · crude ${S(n.oilTotals.crude)}/min · water ${S(n.oilTotals.water)}/min. Open a card for the shared recipe table.`:`Build and balance this radioactive chain as one site at the power plants. Process buffers stay here; the general storage surplus does not apply.`;return b`<section class="site-group">
    <header class="site-head">
      <div>
        <span class="eyebrow">SHARED SITE · ${t.length} OUTPUTS</span>
        <h2>${r}</h2>
      </div>
      <p class="small muted">${i}</p>
    </header>
    <div class="cards">${t.map(e=>cc(e))}</div>
  </section>`}var uc=[[`all`,`All factories`],[`todo`,`Not running yet`],[`done`,`Running`],[`local`,`Made beside consumers`]];function dc(){let e=Y.factories.filter(e=>e.stages[Q()]).filter(e=>(e.name+` `+e.stages[Q()].recipe).toLowerCase().includes(Dd.toLowerCase())).filter(e=>kd===`all`||kd===`todo`&&!$(`factory-`+Q()+`-`+e.id)||kd===`done`&&$(`factory-`+Q()+`-`+e.id)||kd===`local`&&e.local),t=e.filter(e=>!nc(e.id).length),n=t.filter(e=>!ec(e)),r=t.filter(e=>ec(e)===`oil`),i=t.filter(e=>ec(e)===`nuclear`),a=oc(e,e=>e.id,(e,t)=>cc(e,t));return String(b`${B(`PRODUCTION LIBRARY`,`Factory targets`,`Outputs include downstream supply, protected storage and elevator exports. Click a factory for its inputs and expansion history.`)}
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
          value="${Dd}"
        /><select id="factory-filter" aria-label="Factory status">
          ${uc.map(([e,t])=>b`<option value="${e}" ${kd===e&&y(`selected`)}>${t}</option>`)}</select
        ><span class="small muted">${e.length} targets</span>${sc()}
      </div>
      ${Pd&&ac()} ${a}
      ${lc(`oil`,r)}${lc(`nuclear`,i)}
      ${(a.length>0||r.length>0||i.length>0)&&n.length>0&&b`<p class="eyebrow">UNGROUPED FACTORIES</p>`}
      <div class="cards">
        ${n.length?n.map(e=>cc(e)):!e.length&&b`<div class="empty-state">No factories match this filter.</div>`}
      </div>
      ${Z()===`post`&&fc()}`)}function fc(){return b`<section style="margin-top:32px">
    <h2>Additional completion modules</h2>
    <div class="notice">
      These recipe inputs are additional to the main resource budget. Allocate their supply first.
      Gathered feedstock and byproducts still need handling.
    </div>
    <div class="completion-grid">
      ${Y.completion.filter(e=>e.name.toLowerCase().includes(Dd.toLowerCase())).map(e=>b`<article class="completion-item">
              <label class="check-row"
                ><input
                  type="checkbox"
                  data-check="completion-${e.id}"
                  ${y(Zd(`completion-`+e.id))}
                /><strong>${e.name}</strong></label
              >
              <p>
                ${S(e.output)}/min · ${S(e.machines)} ${e.machine} · last at
                ${S(e.lastClock)}%<br />${e.recipe}
              </p>
              <p>
                <b>Inputs:</b> ${Vs(e.inputs)}${Object.keys(e.byproducts).length>0&&b`<br /><b>Byproducts:</b> ${Vs(e.byproducts)}`}
              </p>
            </article>`)}
    </div>
  </section>`}function pc(e,t,n,r=``){let i=x(`#detail`);i.innerHTML=String(b`<header class="dialog-head">
        <div class="dialog-title">
          ${r&&b`<span class="dialog-icon">${w(r)}</span>`}
          <div>
            <div class="eyebrow">${t}</div>
            <h2>${e}</h2>
          </div>
        </div>
        <button class="close" aria-label="Close details" data-close>×</button>
      </header>
      <div class="dialog-body">${n}</div>`),i.open||i.showModal()}function mc(e){let t=Y.factories.find(t=>t.id===e);if(!t)return;let n=t.stages[Q()]||Object.values(t.stages)[0],r=[`Plastic`,`Rubber`].includes(t.name),i={},a=Object.entries(t.stages).map(([e,t])=>{let n=r?(Y.plans[e]?.oil||[]).reduce((e,t)=>e+t.machines,0):0,a=r?n:t.machines,o=r?`shared campus buildings`:t.machine,s=i[o]||0,c=Math.max(0,a-s);return i[o]=Math.max(s,a),b`<tr>
      <td>${e}</td>
      <td>${S(t.output)}</td>
      <td>${S(t.storage)}</td>
      <td>${S(a)} ${o}</td>
      <td>${c?`+${S(c)}`:`Keep capacity`}</td>
    </tr>`}),o=t.stages[Q()]?Q():Object.keys(t.stages)[0],s=e=>Y.factories.find(t=>t.local&&t.name===e&&t.stages[o]),c=zs(t,o,n,s,r),l=`factory-`+o+`-`+t.id;pc(t.name,`${Qd(o)} · Handbook page ${t.page}`,b`<span class="badge orange">${n.recipe}</span>
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
      ${Is(c)}${hc(t,o)}
      ${t.nuclear&&b`<div class="notice">
        Process buffer at the nuclear site. Keep radioactive recycling flows balanced; do not apply
        a generic storage surplus.
      </div>`}
      ${r?_c(o):b`${Rs(c)}
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
          ><input type="checkbox" data-check="${l}" ${y(Zd(l))} />Running at Phase
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
      </div>`,t.name)}function hc(e,t){let n=e.stages[t],r=Y.factories.some(n=>n.id!==e.id&&n.stages[t]?.inputs?.[e.name]),i=Z()===`post`?Y.completion.filter(t=>t.inputs?.[e.name]):[];return b`${r||n.delivery?``:e.nuclear?b`<p class="small muted">
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
  </p>`}`}var gc=(e,t)=>e.flatMap((e,n)=>n?[t,e]:[e]);function _c(e){let t=Y.plans[e],n=t.oil.map(e=>({...e,rc:Os[e.recipe]||{in:{},out:{}}})),r=t=>{let n=Ms(t,!0,e);return`${n.count} × ${n.lane.mark} pipe${n.count>1?`s`:``}`},i=Y.factories.find(t=>![`plastic`,`rubber`].includes(t.id)&&t.stages[e]?.inputs?.Fuel),a=b`<div class="rail-cap">Campus inputs</div>
    <div class="rail-grid">
      ${[[`Crude Oil`,t.oilTotals.crude],[`Water`,t.oilTotals.water]].filter(([,e])=>e>.01).map(([e,t])=>b`<div class="rail-tile">
              ${w(e)}<span class="rail-main"><b>${e}</b><small>${r(t)}</small></span
              ><span class="rail-rate">${S(t)}<small> m³/min</small></span>
            </div>`)}
    </div>`,o=n.map(e=>{let r=t=>Object.entries(e.rc[t]).map(([t,n])=>`${S(n*e.equivalent)}${Ts.has(t)?` m³`:``} ${t}`).join(` + `),a=Object.keys(e.rc.out).map(r=>{let a=n.filter(t=>t!==e&&t.rc.in[r]).map(e=>`the ${e.recipe.replace(`Alternate: `,``)} ${e.machine.replace(/y$/,`ie`)}s`);return(r===`Plastic`||r===`Rubber`)&&a.push(`campus export`),r===`Fuel`&&(Number(t.oilTotals.generators)>0?a.push(`${S(t.oilTotals.generators)} Fuel Generators (${S(t.oilTotals.grossGW)} GW gross)`):t.oilTotals.fuel>.01&&a.push(b`export
              ${S(t.oilTotals.fuel)}/min${i&&b` to
                <button class="btn quiet" data-factory="${i.id}">
                  ${i.name} ↗
                </button>`}`)),a.length?b`${r} → ${gc(a,` + `)}`:``}).filter(e=>e.length),o=Math.floor(e.equivalent+1e-7),s=e.equivalent-o,c=s>1e-7?`${S(o)} at 100% + 1 at ≈ ${S(s*100)}%`:`all at 100%`;return b`<div class="rail-arrow">↓</div>
      <div class="rail-machine">
        <div class="rail-machine-main">
          <b>${S(e.machines)} × ${e.machine}</b
          ><small>${e.recipe} · ${c} · in ${r(`in`)||`—`} · out ${r(`out`)}</small>
        </div>
      </div>
      <div class="rail-recipe">
        <div class="rail-recipe-head">
          <span>Recipe · ${e.recipe.replace(`Alternate: `,``)}</span
          ><span>what ${Ns(e.machines,e.machine)} makes @ 100% · per minute</span>
        </div>
        <div class="rail-recipe-body">
          <div class="rail-recipe-ins">${Object.entries(e.rc.in).map(e=>Ps(e))}</div>
          <span class="rail-recipe-arrow">→</span>
          <div class="rail-recipe-outs">
            ${Object.entries(e.rc.out).map(e=>Ps(e,!0))}
          </div>
        </div>
      </div>
      ${a.length>0&&b`<p class="small muted">${gc(a,b`<br />`)}</p>`}`});return b`<h3>Shared oil campus · ${Qd(e)}</h3>
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
    </p>`}function vc(e){if(q)return(tf().rows||[]).filter(t=>nc(t.id).some(t=>t.group===e)).map(e=>({id:e.id,attr:b`data-calc-factory="${e.id}"`,name:e.name,machine:e.machine,machines:e.machines,inputs:e.inputs||{},outputs:e.outputs||{},mw:e.generationMW}));let t=Q();return Y.factories.filter(n=>n.stages[t]&&nc(n.id).some(t=>t.group===e)).map(e=>{let n=e.stages[t];return{id:e.id,attr:b`data-factory="${e.id}"`,name:e.name,machine:n.machine,machines:n.machines,inputs:n.inputs||{},outputs:{[e.name]:n.output},recipe:n.recipe}})}function yc(e){let t=tc().groups.find(t=>t.id===e);if(!t)return;let n=vc(e);if(!n.length)return pc(t.name,`Factory group · build order`,b`<p class="small muted">
        No factories from this group produce anything in the current phase.
      </p>`);let r=e=>n.filter(t=>t.outputs[e]),i=[],a=new Set,o=new Map,s=[...n];for(;s.length;){let e=s.findIndex(e=>Object.keys(e.inputs).every(t=>r(t).every(t=>a.has(t.id)||t===e))),t=!1;if(e<0){let n=1/0;e=0,s.forEach((t,i)=>{let o=Object.keys(t.inputs).filter(e=>r(e).some(e=>!a.has(e.id)&&e!==t)).length;o<n&&(n=o,e=i)}),t=!0}let n=s.splice(e,1)[0];t&&o.set(n.id,Object.keys(n.inputs).filter(e=>r(e).some(e=>!a.has(e.id)&&e!==n))),i.push(n),a.add(n.id)}let c=new Map(i.map((e,t)=>[e.id,t+1])),l=q?tf().rows||[]:Y.factories.filter(e=>e.stages[Q()]).map(e=>({id:e.id,name:e.name,inputs:e.stages[Q()].inputs||{}})),u=i.map((e,t)=>{let i=o.get(e.id)||[],a=Object.entries(e.inputs).map(([t,n])=>{let a=r(t).filter(t=>t!==e),o=i.includes(t)?b`<b class="chain-loop">loop — seed a starter batch</b>`:a.length?`stage `+Math.min(...a.map(e=>c.get(e.id))):`outside the group`;return b`${t} ${S(n)}${Ts.has(t)?` m³`:``}/min
        <span class="muted">· ${o}</span>`}),s=Object.keys(e.outputs).map(t=>{let r=n.filter(n=>n!==e&&n.inputs[t]).map(e=>`stage ${c.get(e.id)} · ${e.name}`),i=l.filter(r=>r.id!==e.id&&r.inputs?.[t]&&!n.some(e=>e.id===r.id)).length,a=[...r];return i&&a.push(`${i} ${i===1?`factory`:`factories`} outside the group`),`${t} → ${a.join(` · `)||`storage, export or sink`}`});return b`<div class="chain-stage">
      <span class="chain-no">${String(t+1).padStart(2,`0`)}</span>
      <div class="chain-body">
        <div class="chain-title">
          <button class="rail-link" ${e.attr}>${e.name} ↗</button
          ><span class="muted">${S(e.machines)} × ${e.machine}</span>
        </div>
        ${a.length?b`<p class="small"><b>Needs</b><br />${gc(a,b`<br />`)}</p>`:b`<p class="small muted">No belt or pipe inputs.</p>`}
        <p class="small">
          <b>Feeds</b><br />${s.length?gc(s,b`<br />`):e.mw?`Power grid`:`—`}
        </p>
      </div>
    </div>`}),d=n.some(t=>nc(t.id).some(t=>t.group===e&&t.rate!=null));pc(t.name,`Factory group · build order · ${Qd(Q())}`,b`<p class="small muted">
        Stages are ordered so suppliers come before their consumers. An input marked <b>loop</b> is
        produced by a later stage: run that stage from a starter batch first, then close the loop.
      </p>
      <div class="chain">${u}</div>
      ${d&&b`<p class="small muted">
        Rates are the whole plan’s totals; this group’s production split is shown on the factory
        cards.
      </p>`}`)}function bc(){let e=Lc(),t=e.filter(e=>$(e.id)).length,n=e.find(e=>!$(e.id)),r=e.length?Math.round(t/e.length*100):100,i=Y.factories.filter(e=>e.stages[Q()]),a=i.filter(e=>$(`factory-`+Q()+`-`+e.id)).length,o=Gs().flatMap(e=>e.items).filter(e=>e.name),s=o.filter(e=>$(`slot-`+e.id+`-verified`)).length,c=(e,t)=>b`${e} <span class="fraction">/ ${t}</span>`;return String(b`${B(`THE NEXT BUILD`,Qd(Z())+` field plan`,Z()===`post`?`Storage first. Keep the network running, then finish the remaining items.`:`Build the supply chain in order. Check off each step when it is verified in your save.`,`YOUR SAVE · YOUR PACE`)}
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
              ><span class="small muted">${r}% complete</span> ${Jc()}</span
            >
          </div>
          <div class="progress-track"><span style="width:${r}%"></span></div>
          ${Xc(e)}${Zc()}
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
                  <a class="btn" href="#factories">Completion modules →</a>`:Y.deliveries.filter(e=>e.phase===Z()).map(xc)}
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
      </div>`)}function xc(e){let t=X.deliveries[e.id]??(K.id===`original`?e.initial:0);return b`<div class="delivery">
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
  </div>`}function Sc(e){let t=Object.entries(tf().delivery||{}).find(([t])=>e===Q()+`-`+Ae(t));return t?{id:e,name:t[0],...t[1],initial:0}:null}function Cc(){let e=tf(),t=_e(q,X,Cd,Z());return[...Q()===`1`?[t.baseTasks[0],...t.powerTasks.slice(0,2),...t.baseTasks.slice(1,5),...t.milestoneTasks,...t.powerTasks.slice(2),...t.baseTasks.slice(5)]:[...t.powerTasks,...t.milestoneTasks],...t.hardDrives,...(e.rows||[]).map(e=>({id:`calc-`+Q()+`-`+e.id,title:e.name,body:`${kc(e).summary} ${kc(e).partial?`Adjustable machine: ≈ `+S(kc(e).clock)+`% → ≈ `+kc(e).lastOutput+`. Open factory details for an easier rounded option.`:`Each machine: `+kc(e).fullOutput+`.`} ${e.amplified?`Insert ${e.slots} somersloop${e.slots>1?`s`:``} in each machine — ${e.sloops} in total — for double output from the same inputs at four times the power. `:``}Inputs /min: ${Object.entries(e.inputs).map(([e,t])=>e+` `+S(t)).join(`, `)||`none`}. Outputs /min: ${Object.entries(e.outputs).map(([e,t])=>e+` `+S(t)).join(`, `)||R(e.generationMW)}.`})),{id:`calc-`+Q()+`-storage`,title:`Connect protected storage and overflow`,body:`Reserve the listed storage refill rates before elevator exports. Handle every liquid byproduct; send surplus sinkable solids to the AWESOME Sink after unlocking it.`},...t.retire||[]]}function wc(e,t){let n=[];return e.shortfalls?.length&&n.push(`Raise the short budget${e.shortfalls.length>1?`s`:``} (Resources): ${e.shortfalls.map(e=>`${e.name} to about ${S(e.needed)}/min (entered: ${S(e.budget)}/min)`).join(`; `)}.`),e.wholeMachinesOnly&&n.push(`Keep these budgets instead: untick “Run solid-part machines at 100%” (Goals). Precise balancing fits, with one adjustable machine per production line.`),e.minHours?n.push(t?.goal===`timed`?`Raise “Hours per phase” (Goals) to at least ${S(e.minHours)} h.`:`Switch the goal (Goals) to “Target completion time” with at least ${S(e.minHours)} hours per phase.`):e.shortfalls?.length&&!e.wholeMachinesOnly&&n.push(t?.goal===`maximum`?`Lower the protected storage refill rate, drone-fuel supply or extra Singularity Cells (Preferences).`:`More time alone will not fit: lower the protected storage refill rate, drone-fuel supply or extra Singularity Cells (Preferences)${t?.roundRates?`, or untick delivery-rate rounding (Goals)`:``}.`),e.shortfalls?.length&&t?.recipes===`standard`&&n.push(`Allow alternate recipes (Preferences) to cut raw resource use.`),e.shortfalls?.length&&t?.sam===`avoid`&&n.push(`Allow SAM resource conversion (Preferences) to turn plentiful resources into the short ones.`),n.length?b`<p><b>Options</b></p>
        <ul>
          ${n.map(e=>b`<li>${e}</li>`)}
        </ul>`:``}function Tc(){let e=tf(),t=e.feasible?``:wc(e,q?.settings);return b`${!e.feasible&&b`<div class="notice">
    <b>Planning draft — resource budget exceeded or recipe combination unavailable.</b>
    ${e.reason}${t&&b`${t}
      <p class="small">
        Profiles are calculated snapshots: create a new profile with adjusted settings to apply an
        option.
      </p>`}
  </div>`}${e.additionalHeadroomMW>.01&&b`<div class="notice">
    Allow another ${R(e.additionalHeadroomMW)} for whole-building power headroom. Phase 1 needs
    biomass or existing generation.
  </div>`}`}function Ec(){let e=tf(),t=Lc(),n=t.filter(e=>$(e.id)).length;return String(b`${B(`CALCULATED BUILD SEQUENCE`,Qd(Z()),K.name)}
      ${Tc()}
      <div class="stats">
        ${C(`Progress`,n+`/`+t.length,`Checklist steps`)}
        ${C(`Delivery time`,S(e.hours)+` h`,`At steady state; excludes construction`)}
        ${C(`Buildings`,S(e.rows?.reduce((e,t)=>e+t.machines,0)),`Includes new power generation`)}
        ${C(`New power`,R(e.generationMW),`Existing spare power is separate`)}
      </div>
      ${Z()===`post`&&b`<div class="notice blue">
        Retain these Phase 5 capacities. Prioritize storage and teleporter supply; reduce former
        elevator exports as needed and sink spare parts.
      </div>`}
      <div class="split">
        <section>
          <div class="section-head">
            <h2>Build sequence</h2>
            ${Jc()}
          </div>
          <p class="small muted">
            Start with construction stock and currently available power. Mark HUB, MAM and recipe
            unlocks as you complete them; these carry across phases. Milestone cost guidance updates
            from factories marked running. Full-phase factory targets follow the startup and unlock
            steps.
          </p>
          ${Xc(t)}${Zc()}
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
            ${Object.entries(e.delivery||{}).map(([e,t])=>xc({id:Q()+`-`+Ae(e),name:e,...t,initial:0}))}
          </section>
          <section class="panel">
            <h2>Profile assumptions</h2>
            ${q.warnings.map(e=>b`<p class="small">${e}</p>`)}
          </section>
        </aside>
      </div>`)}function Dc(e,t=null){let n=Object.values(e.outputs||{})[0]||0,r=Object.entries(e.outputs).map(([e,t])=>`${e}: ${S(t)}/min`),i=`calc-`+Q()+`-`+e.id;return b`<article class="factory-card">
    <div class="card-top">
      <span class="card-icon">${w(Object.keys(e.outputs)[0])}</span>
      <div class="card-main">
        <button class="name" data-calc-factory="${e.id}">${e.name}</button>
        <div class="output">${S(e.machines)} <span>${e.machine}</span></div>
      </div>
    </div>
    <p>
      ${r.length?r.flatMap((e,t)=>t?[b`<br />`,e]:[e]):R(e.generationMW)}
    </p>
    ${t&&rc(e.id,t,n||e.generationMW,e.machines,n?`/min`:` MW`)}
    <footer>
      <label class="check-row"
        ><input type="checkbox" data-check="${i}" ${y(Zd(i))} />Running</label
      ><button class="btn quiet" data-calc-factory="${e.id}">Details ↗</button>
    </footer>
    ${Pd&&ic(e.id)}
  </article>`}function Oc(){let e=(tf().rows||[]).filter(e=>(e.name+` `+Object.keys(e.outputs).join(` `)).toLowerCase().includes(Dd.toLowerCase())),t=e.filter(e=>!nc(e.id).length),n=oc(e,e=>e.id,(e,t)=>Dc(e,t));return String(b`${B(`CALCULATED PRODUCTION`,`Factory targets`,`Each recipe line includes its inputs, whole buildings and later expansion. Multiple recipes for a part can share one site.`)}
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
      ${Tc()}
      <div class="toolbar">
        <input
          id="factory-search"
          class="search"
          aria-label="Find a factory"
          placeholder="Find a part or recipe…"
          value="${Dd}"
        /><span>${e.length} production lines</span>${sc()}
      </div>
      ${Pd&&ac()}${n}${n.length>0&&t.length>0&&b`<p class="eyebrow">UNGROUPED PRODUCTION LINES</p>`}
      <div class="cards">${t.map(e=>Dc(e))}</div>`)}function kc(e){let t=e.equivalent||e.machines-1+e.lastClock/100,n=Math.floor(t+1e-7),r=Math.max(0,t-n),i=r>1e-7,a=Object.fromEntries(Object.entries(e.outputs||{}).map(([e,n])=>[e,n/t])),o=Object.entries(a).map(([e,t])=>`${S(t)} ${e}/min`).join(` · `)||`${S(e.generationMW/t)} MW`,s=Object.entries(a).map(([e,t])=>`${S(t*r)} ${e}/min`).join(` · `)||`${S(e.generationMW/t*r)} MW`,c=`${e.machines} ${e.machine} total: ${i?(n?n+` at 100% + `:``)+`1 adjustable machine`:n+` at 100% (no underclock needed)`}.`,l=/uranium|plutonium|ficsonium|waste|non-fissile/i.test([e.name,...Object.keys(e.inputs||{}),...Object.keys(e.outputs||{})].join(` `)),u=null;if(i&&!l){let n=Math.ceil(r*100-1e-7),i=Object.entries(a)[0];if(i){let e=Math.ceil(i[1]*r-1e-7)/i[1]*100;e<=100&&Math.abs(e-Math.round(e))<1e-7&&(n=Math.max(n,Math.round(e)))}let o=n/100-r;o>1e-7&&(u={clock:n,output:Object.fromEntries(Object.entries(a).map(([e,t])=>[e,t*n/100])),inputs:Object.fromEntries(Object.entries(e.inputs||{}).map(([e,n])=>[e,n/t*o])),extraOutputs:Object.fromEntries(Object.entries(a).map(([e,t])=>[e,t*o]))})}return{summary:c,whole:n,partial:i,fullOutput:o,lastOutput:s,clock:r*100,easy:u}}function Ac(e){let t=kc(e);return b`<h3>Machine setup</h3>
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
        ${Vs(t.easy.output)||S(e.generationMW/(e.equivalent||1)*t.easy.clock/100)+` MW`}.
      </p>
      <p>
        Extra inputs needed: ${Vs(t.easy.inputs)}.<br />Extra outputs/byproducts:
        ${Vs(t.easy.extraOutputs)||`Additional generation`}.
      </p>
      <p>
        This is extra capacity, not a recalculated balanced plan. Supply the extra inputs and handle
        every extra output before using it. The totals below remain the original calculated targets.
      </p>
    </div>`}
    ${t.partial&&b`<p class="small muted">
      Calculated percentages and outputs are displayed rounded. Keep the calculated setting for
      tightly balanced recycling; do not round nuclear or waste-processing lines independently.
    </p>`}`}function jc(e){let t=0;return b`${Xd(q.stages).map(([n,r])=>{let i=r.rows?.find(t=>t.id===e)?.machines||0,a=Math.max(0,i-t);return t=Math.max(t,i),b`<tr>
      <td>${n}</td>
      <td>${i||`—`}</td>
      <td>${a?`+`+a:`—`}</td>
    </tr>`})}`}function Mc(e){let t=tf().rows?.find(t=>t.id===e);if(!t)return;let n=Bs(t),r=Object.keys(t.outputs||{})[0]||``;pc(t.name,Qd(Z()),b`${Is(n)}${Ac(t)}${Rs(n)}
      <h3>Outputs per minute</h3>
      <p>${Vs(t.outputs)||R(t.generationMW)}</p>
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
          ${jc(e)}
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
      </button>`,r)}function Nc(){let e=tf(),t=q.settings,n=e.conversions||[];return String(b`${B(`CHECK BEFORE EXPANDING`,`Power & resources`,`New production and new generator fuel are included. Existing fuel consumption must already be deducted from your entered budgets.`)}
      ${Tc()}
      <div class="stats">
        ${C(`New generation`,R(e.generationMW),`Fuel and recycling included`)}
        ${C(`Whole-machine peak`,R(e.peakMW),`At selected consumption multiplier`)}
        ${C(`With utility allowance`,R(e.requiredMW),(t.utilityPercent??20)+`% for transport and utilities; verify actual load`)}
        ${C(`Existing spare power`,R(t.availablePowerGW*1e3),`Not total installed generation`)}
        ${e.sloopsUsed>0&&C(`Somersloops in production`,S(e.sloopsUsed),`Amplified machines: double output, four times the power`)}
        ${e.augmenters>0&&C(`With augmenter boost`,R(e.availableMW),S(e.augmenters)+` augmenter`+(e.augmenters>1?`s`:``)+` · `+S(e.augmenterMW)+` MW plus `+Math.round(e.boost*100)+`% of base production`)}
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
            ${W.catalog.raw.map(n=>b`<tr>
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
          <p>${Vs(e.drone||{})||`No dedicated drone fuel in this phase.`}</p>
          <h2>Protected storage /min</h2>
          <p>${Vs(e.storage||{})||`No storage production requested.`}</p>
          <h2>From production you already run</h2>
          <p>${Vs(e.supplied||{})||`None credited in this phase.`}</p>
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
          <p>Surplus solids: ${Vs(e.surplus||{})||`None`}</p>
          <p class="small muted">
            Liquid and radioactive material balances are enforced. Do not let storage or overflow
            block recycling.
          </p>
        </section>
      </div>`)}function Pc(){let e=X?.taskEdits||{};return{order:e.order||{},removed:e.removed||[],titles:e.titles||{},bodies:e.bodies||{},links:e.links||{}}}function Fc(e){let t=Pc(),n=new Set(t.removed),r=e.filter(e=>!n.has(e.id)).map(e=>({...e,title:t.titles[e.id]||e.title,body:t.bodies[e.id]||e.body})),i=t.order[Z()];if(!i?.length)return r;let a=new Map(i.map((e,t)=>[e,t]));return[...r.filter(e=>a.has(e.id)).sort((e,t)=>a.get(e.id)-a.get(t.id)),...r.filter(e=>!a.has(e.id))]}function Ic(){return q?[...Cc(),...X.customTasks.filter(e=>e.phase===Z())]:Qc()}function Lc(){return Fc(Ic())}var Rc=e=>e.match(/^calc-(?:[1-5]|post)-(.+)$/)?.[1]||``;function zc(e){let t=Pc().links[e.id]||Rc(e.id);if(!t)return``;if(q){let e=(tf().rows||[]).find(e=>e.id===t);return e?b`<button class="btn quiet task-link" data-calc-factory="${e.id}">
          Open factory: ${e.name} ↗
        </button>`:``}let n=Y.factories.find(e=>e.id===t&&e.stages[Q()]);return n?b`<button class="btn quiet task-link" data-factory="${n.id}">
        Open factory: ${n.name} ↗
      </button>`:``}function Bc(e){let t=q?(tf().rows||[]).map(e=>[e.id,e.name]):Y.factories.filter(e=>e.stages[Q()]).map(e=>[e.id,e.name]),n=Pc().links[e.id]||Rc(e.id);return b`<form class="task task-edit" data-task-edit="${e.id}">
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
  </form>`}var Vc={production:`<path d="M3 20.5h18M5.5 20.5v-9l4 2.6v-2.6l4 2.6v-2.6l4 2.6v6.4M17.5 9.2V4h2.2v5.2"/>`,build:`<path d="M3.5 3.5h17v17h-17zM3.5 9.2h17M3.5 14.8h17M9.2 3.5v17M14.8 3.5v17"/>`,power:`<path d="M13.4 2.5 4.8 13.6h5.3l-.9 7.9 8.6-11.1h-5.3z"/>`,biomass:`<path d="M20.5 3.5C9.5 3.5 4 8.8 4 14.8a5.2 5.2 0 0 0 5.2 5.2c6 0 11.3-5.5 11.3-16.5Z"/><path d="M5.5 19C9 13 13.2 9.7 18.5 7.4"/>`,nuclear:`<circle cx="12" cy="12" r="1.9"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(120 12 12)"/>`,fluid:`<path d="M12 3.2c4 5 6.4 8.1 6.4 11a6.4 6.4 0 1 1-12.8 0c0-2.9 2.4-6 6.4-11Z"/>`,milestone:`<rect x="4" y="10.4" width="16" height="10.6" rx="1.4"/><path d="M8.2 10.4V7.2A3.9 3.9 0 0 1 16 6.6"/><path d="M12 14.3v3"/>`,research:`<path d="M9.4 3.2v6.4l-4.8 8.6A2 2 0 0 0 6.3 21.2h11.4a2 2 0 0 0 1.7-3L14.6 9.6V3.2"/><path d="M7.9 3.2h8.2M7.3 15.2h9.4"/>`,harddrive:`<rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="12" cy="12" r="3.3"/><circle cx="12" cy="12" r=".5"/>`,storage:`<rect x="3.2" y="5.6" width="17.6" height="13.4" rx="1.2"/><path d="M3.2 10.4h17.6M12 10.4V19M7.6 5.6v4.8M16.4 5.6v4.8"/>`,delivery:`<path d="M12 2.4c3 2.7 4.7 6.4 4.7 10.5v3H7.3v-3C7.3 8.8 9 5.1 12 2.4Z"/><path d="M7.3 12.8 4 15.6v3.6l3.3-1.7M16.7 12.8 20 15.6v3.6l-3.3-1.7M10.4 21.3h3.2"/><circle cx="12" cy="9.4" r="1.6"/>`,logistics:`<path d="M3.5 17.5h5.2a4.2 4.2 0 0 0 4.2-4.2v-2.6a4.2 4.2 0 0 1 4.2-4.2h3.4"/><path d="m17.4 3.4 3.1 3.1-3.1 3.1"/>`,portal:`<circle cx="12" cy="12" r="8.8"/><circle cx="12" cy="12" r="4.4"/><path d="M12 3.2v2.6M12 18.2v2.6M3.2 12h2.6M18.2 12h2.6"/>`,survey:`<circle cx="10.6" cy="10.6" r="6.6"/><path d="m15.4 15.4 5.1 5.1"/>`,retire:`<circle cx="12" cy="12" r="8.8"/><path d="m5.8 5.8 12.4 12.4"/>`,note:`<path d="m4 20.2.9-4.2L16 4.9l3.3 3.3L8.2 19.3z"/><path d="m14.4 6.5 3.3 3.3"/>`},Hc=[[/^custom-/,`note`],[/^recipe-unlock-|^hard-drives-/,`harddrive`],[/^retire-/,`retire`],[/^portal-supply/,`portal`],[/^drone-fuel-/,`logistics`],[/^startup-(?:biomass|solid-biofuel|burner-bank)/,`biomass`],[/^startup-nuclear-/,`nuclear`],[/^startup-aluminum-/,`fluid`],[/^startup-\d+-power-review$|^startup-coal-unlock$|^startup-fuel-|^preferred-power-/,`power`],[/^early-base-hub$/,`build`],[/^early-base-logistics$/,`logistics`],[/^early-base-reserves$/,`storage`],[/^early-base-/,`production`]],Uc=[[/retire|dismantle|decommission/,`retire`],[/portal/,`portal`],[/nuclear|uranium|plutonium|ficsonium|radioactive/,`nuclear`],[/drone/,`logistics`],[/deliver|elevator/,`delivery`],[/survey|verify|resilience|review|\btest\b/,`survey`],[/power|generator|fuel|coal/,`power`],[/storage|container/,`storage`],[/unlock|milestone|research/,`milestone`],[/logistic|belt|train|sorter|collectable/,`logistics`],[/aluminum|water/,`fluid`],[/concrete|construction|foundation|workshop|hub/,`build`]];function Wc(e){let t=e.id||``;if(t.startsWith(`unlock-`))return/^mam:/i.test(e.title||``)?`research`:`milestone`;for(let[e,n]of Hc)if(e.test(t))return n;let n=(t+` `+(e.title||``)).toLowerCase();for(let[e,t]of Uc)if(e.test(n))return t;return`production`}function Gc(e){let t=Pc().links[e.id]||Rc(e.id);if(!t)return``;if(q){let e=(tf().rows||[]).find(e=>e.id===t);return e&&Object.keys(e.outputs||{})[0]||``}let n=Y.factories.find(e=>e.id===t&&e.stages[Q()]);return n?n.name:``}function Kc(e){let t=Gc(e);if(t)return b`<span class="task-icon" data-kind="item" aria-hidden="true"
      >${w(t)}</span
    >`;let n=Wc(e);return b`<span class="task-icon" data-kind="${n}" aria-hidden="true"
    ><svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${y(Vc[n])}
    </svg></span
  >`}function qc(e){if(Md&&Nd===e.id)return Bc(e);let t=Md&&b`<span class="task-tools"
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
    >`;return b`<article class="task ${Md?`is-editing`:``}">
    <input
      type="checkbox"
      data-check="${e.id}"
      aria-label="Complete: ${e.title}"
      ${y(Zd(e.id))}
    />${Kc(e)}
    <details data-task="${e.id}">
      <summary>${e.title}</summary>
      <p>${e.body||`Your own task for this phase.`}</p>
      ${zc(e)}${e.id.startsWith(`custom-`)&&!Md&&b`<button class="delete-task" data-remove="${e.id}">Delete personal task</button>`}
    </details>
    ${t}
  </article>`}function Jc(){return b`<button class="btn ${Md?`primary`:``}" data-toggle-plan-edit>
    ${Md?`Done editing`:`Edit steps`}
  </button>`}function Yc(e){let t=Dd.trim().toLowerCase();return e.filter(e=>(!Ad||!$(e.id))&&(!t||(e.title+` `+(e.body||``)).toLowerCase().includes(t)))}function Xc(e){let t=Yc(e),n=e.length?Dd.trim()?`No steps match this search.`:`Every step of this phase is completed. Untick “Hide completed” to review them.`:`Every step of this phase is removed. Use Removed steps below to restore them.`;return b`${e.length>0&&b`<div class="checklist-tools">
      <input
        id="plan-search"
        class="search"
        placeholder="Find a step…"
        aria-label="Find a step"
        value="${Dd}"
      /><label class="check-row small"
        ><input type="checkbox" id="hide-done" ${Ad&&y(`checked`)} />Hide completed</label
      ><span class="small muted"
        >${t.length!==e.length&&t.length+` of `+e.length+` steps`}</span
      >
    </div>`}
    <div class="checklist">
      ${t.length?t.map(qc):b`<div class="empty-state">${n}</div>`}
    </div>`}function Zc(){if(!Md)return``;let e=new Set(Pc().removed),t=Ic().filter(t=>e.has(t.id));return t.length?b`<details class="panel removed-steps">
    <summary>Removed steps in this phase (${t.length})</summary>
    ${t.map(e=>b`<div class="removed-step">
          <span>${Kc(e)}${e.title}</span
          ><button class="btn quiet" data-restore-task="${e.id}">Restore</button>
        </div>`)}
  </details>`:``}function Qc(){return[...Y.phases[Z()],...X.customTasks.filter(e=>e.phase===Z())]}function $c(){return e?nl():q?rl():String(b`${tl()}
      ${B(`YOUR PROGRESS`,`Backup & notes`,`Progress is stored on the server, so the same Docker instance works across your devices.`)}
      <div class="backup-grid">
        <section class="panel">
          <h2>Download a backup</h2>
          <p>Save a copy of your checkmarks, delivery counts, personal tasks and notes.</p>
          <a
            class="btn primary"
            href="/api/export?save=${G.id}&profile=${K.id}"
            download
            >Download progress JSON ↓</a
          >
          <p class="small muted">
            The Docker volume keeps progress through container updates. This download gives you a
            separate copy.
          </p>
        </section>
        <section class="panel">
          <h2>Restore a backup</h2>
          <p>
            Import a backup from this planner. It replaces current progress after confirmation;
            factory-plan data stays unchanged.
          </p>
          <label class="btn"
            >Choose backup file<input
              id="import-file"
              type="file"
              accept="application/json,.json"
              hidden
          /></label>
          <p class="small muted">
            Up to 2 MB. The previous state is also retained as workspace.json.bak on the server. The
            original progress file is kept during migration.
          </p>
        </section>
      </div>
      <section class="panel" style="margin-top:24px">
        <h2>Save-wide notes</h2>
        <textarea id="global-note" class="notes" maxlength="6000" aria-label="Save-wide notes">
${X.notes.global||``}</textarea
        >
        <div class="note-save">
          <span class="small muted">Seed, locations, routes and decisions.</span
          ><button class="btn" data-save-note="global" data-input="global-note">Save notes</button>
        </div>
      </section>
      <section class="panel">
        <h2>Plan assumptions</h2>
        <p class="small">
          All tiers through 6 unlocked. Phase 3 Versatile Frameworks delivered. Pure nodes, 50×
          elevator costs, half consumption. Retire coal and temporary fuel; retain turbofuel. Phase
          5 resource conversion and extra Reanimated SAM are included. Ground-floor storage shell is
          already built; individual containers are not assumed connected.
        </p>
        <p class="small">
          The final extra storage modules need additional input allocations. After Phase 5, storage
          takes priority over maintaining full elevator-export rates for sinking. Gathered items
          require collection; equipment and inhalers are manually crafted.
        </p>
        <div class="list-links">
          ${Y.sources.map(e=>b`<a href="${e.url}" target="_blank" rel="noreferrer">${e.title} ↗</a>`)}
        </div>
      </section>`)}function el(){return b`<div class="notice blue">
    Your saves stay in this browser on this device. Clearing site data or using private browsing can
    remove them. Export a full backup before switching devices or website addresses.
    <a href="#backup">Backups & transfer</a>
  </div>`}function tl(){return b`<section class="panel">
    <h2>Full saves & transfer</h2>
    <p>
      Export all your saves, profile calculations, checkmarks and notes. Account passwords and
      sessions are excluded. Import adds copies without replacing existing saves.
    </p>
    <button class="btn primary" data-export-saves>Export all saves</button>
    <label class="btn"
      >Import saves<input id="import-saves" type="file" accept="application/json,.json" hidden
    /></label>
  </section>`}function nl(){return String(b`${B(`SAVED ON THIS DEVICE`,`Backups & transfer`,`No account or server is needed. Saves do not sync automatically between browsers.`)}
      ${el()} ${tl()}
      <section class="panel">
        <h2>Keep a backup</h2>
        <p>
          ${W.lastBackup?`Last export: `+new Date(W.lastBackup).toLocaleString():`No full backup has been exported from this browser yet.`}
          Export after major changes and before clearing browser data.
        </p>
        <button class="btn" data-persist-storage>Request persistent browser storage</button>
        <p class="small">
          This reduces automatic eviction when supported. It cannot protect against manually
          clearing site data.
        </p>
        <p>
          To move from Docker, update the Docker app and use Backup & notes → Export all saves, then
          import that file here. A legacy progress-only export is not a full save.
        </p>
        <h2>Self-hosted edition</h2>
        <p>
          The Docker edition keeps server storage and user accounts for access across devices.
          Browser storage remains local to each visitor.
        </p>
      </section>`)}function rl(){return e?nl():String(b`${tl()}
      ${B(`THIS PROFILE`,`Backup & notes`,`Checkmarks, deliveries and notes belong to `+G.name+` / `+K.name)}
      <div class="backup-grid">
        <section class="panel">
          <h2>Download progress</h2>
          <a
            class="btn primary"
            href="/api/export?save=${G.id}&profile=${K.id}"
            download
            >Download progress JSON</a
          >
          <p class="small muted">
            For all accounts, profiles and calculation snapshots, back up the Docker data volume.
            This download contains only this profile’s progress.
          </p>
        </section>
        <section class="panel">
          <h2>Restore this profile</h2>
          <p>Restore replaces only this profile’s progress, after confirmation.</p>
          <label class="btn"
            >Choose backup<input
              id="import-file"
              type="file"
              accept="application/json,.json"
              hidden
          /></label>
        </section>
      </div>
      <section class="panel">
        <h2>Save-wide notes for this profile</h2>
        <textarea id="global-note" class="notes" maxlength="6000">
${X.notes.global||``}</textarea
        >
        <button class="btn" data-save-note="global" data-input="global-note">Save notes</button>
      </section>
      <section class="panel">
        <h2>Calculation assumptions</h2>
        ${q.warnings.map(e=>b`<p>${e}</p>`)}
        <a href="https://github.com/greeny/SatisfactoryTools" target="_blank" rel="noreferrer"
          >Recipe data source</a
        >
      </section>`)}var il=[`How you mine`,`Ore nodes`,`Resource wells`,`Your budgets`],al=`https://satisfactory-calculator.com/en/interactive-map`;function ol(e){return e.extraction||=e.settings.extraction?structuredClone(e.settings.extraction):ce(e.settings),e.extraction}var sl=(e,t,n)=>ie.map(([r,i])=>b`<label class="field count-cell"
        ><span>${i}</span
        ><input
          name="${e}:${t}:${r}"
          type="number"
          min="0"
          max="10000"
          step="1"
          value="${n[r]||0}"
          aria-label="${i} ${t} ${e===`well`?`well satellites`:`nodes`}"
      /></label>`);function cl(e,t,n){let i=e===`well`?n.wells:n.nodes;return b`<div class="count-table">
    ${t.map(t=>{let a={...r(),...i[t]||{}},o=e===`well`?ie.reduce((e,[t])=>e+(Number(a[t])||0)*pe(t,n),0):ie.reduce((e,[r])=>e+(Number(a[r])||0)*_(t,r,n),0);return b`<div class="count-row">
        <span class="count-name">${w(t)}<span>${t}</span></span>
        ${sl(e,t,a)}
        <span class="count-total">${o?S(Math.round(o))+`/min`:`—`}</span>
      </div>`})}
  </div>`}var ll=()=>{let e=J.settings,t=ol(J),n=p(e.purity,e.distribution),r=e.distribution===`randomized`&&!n&&te.includes(e.purity),i=m(t),a=(g.find(([e])=>e===i)||[,``])[1],s=e.distribution===`randomized`?` Random moves nodes around the map; as far as the community has established, it does not change how many of each resource there are. Nitrogen wells are left for you: a well is randomized whole and the map’s wells hold different numbers of satellites, so a shuffle can still leave you more or less nitrogen than the default map.`:``,c;return c=n&&i===e.purity?b`<p class="small">
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
    <span class="eyebrow">Your world settings ${Cs(`nodePresets`)}</span>
    <div class="form-grid">
      ${z(`Resource node randomization`,`distribution`,o,e.distribution)}
      ${z(`Resource node purity`,`purity`,re,e.purity)}
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
  </div>`};function ul(){let e=ol(J);J.extractionUndo=JSON.parse(JSON.stringify(e)),J.extraction={...i(),mark:e.mark,clock:e.clock}}function dl(){J.extractionUndo&&(J.extraction=J.extractionUndo,J.extractionUndo=null)}function fl(){let t=J,n=ol(t),r=t.extractionStep,i=[pl,ml,hl,gl][r-1]?.(t,n),a=r>=il.length;return String(b`${e&&el()}
      ${B(`YOUR WORLD`,`Work out your resource budgets`,`Count what your world holds; the planner turns it into the rates it plans against.`)}
      <div class="wizard-progress">
        ${il.map((e,t)=>b`<button
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
      </form>`)}function pl(e,t){let n=(e,n)=>S(Math.round(_(e,n,t)));return b`<h2>Where your numbers come from</h2>
    <div class="notice blue">
      <b>You do not have to count nodes by hand.</b> Open the
      <a href="${al}" target="_blank" rel="noreferrer"
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
      ${z(`Miner`,`mark`,ee.map(([e,t])=>[String(e),t]),String(t.mark))}
      ${z(`Clock speed`,`clock`,a.map(([e,t])=>[String(e),t]),String(t.clock))}
    </div>
    <div class="notice">
      <b>At these settings</b> one iron node gives ${n(`Iron Ore`,`impure`)}/min impure,
      ${n(`Iron Ore`,`normal`)}/min normal and ${n(`Iron Ore`,`pure`)}/min pure. A crude
      oil node gives ${n(`Crude Oil`,`normal`)}/min normal, and one resource-well satellite
      ${S(Math.round(pe(`normal`,t)))}/min.
    </div>`}function ml(e,t){return b`<h2>Your ore nodes</h2>
    ${ll()}
    <p>
      How many nodes of each purity your world holds for each ore. ${Cs(`extractionNodes`)} Zero
      means zero: a purity your world has none of, or an ore you have not found. Whatever you leave
      at zero, the plan cannot mine — so enter everything you intend to work.
    </p>
    ${cl(`node`,h,t)}`}function hl(e,t){return b`<h2>Resource wells</h2>
    ${ll()}
    <p>
      Crude oil comes from ordinary nodes and from resource wells; nitrogen only from wells.
      ${Cs(`extractionWells`)}
    </p>
    <h3>Crude oil nodes</h3>
    ${cl(`node`,[`Crude Oil`],t)}
    <h3>Resource well satellites</h3>
    ${cl(`well`,[`Crude Oil`,`Nitrogen Gas`],t)}
    <div class="notice blue">
      ${w(`Water`)} <b>Water is not counted.</b> Extractors sit on any lake or ocean and
      there is far more coastline than a factory can draw on, so a node count would be a fiction.
      The planner keeps its standing water allowance of ${S(e.settings.limits.Water)}/min, which
      you can still change in All settings if you want to model a genuinely constrained site.
    </div>`}function gl(e,t){let n=[...h,`Crude Oil`,`Nitrogen Gas`],r=n.filter(e=>oe(t,e)<=0);return b`<h2>Your budgets</h2>
    <p>
      What those nodes yield, less anything already committed to factories this plan does not
      include. That deduction is what makes a budget mean <em>free for this plan to use</em>.
      ${Cs(`extractionUsed`)}
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
    </p>`}function _l(e){let t=J,n=ol(t),i=new FormData(e),a=new Set(W.catalog.raw||[]);for(let[e,o]of i)if(e===`purity`||e===`distribution`)t.settings[e]=String(o);else if(e===`mark`)n.mark=Number(o);else if(e===`clock`)n.clock=Number(o);else if(e.startsWith(`node:`)||e.startsWith(`well:`)){let[t,i,s]=e.split(`:`);if(!a.has(i)||!ie.some(([e])=>e===s))continue;let c=t===`well`?n.wells??={}:n.nodes??={},l=c[i]||r();l[s]=Math.max(0,Math.floor(Number(o)||0)),l.impure||l.normal||l.pure?c[i]=l:delete c[i]}else if(e.startsWith(`used:`)){let t=e.slice(5);if(!a.has(t))continue;let r=Number(o);String(o).trim()!==``&&Number.isFinite(r)&&r>0?(n.used??={})[t]=r:delete n.used?.[t]}}async function vl(e){let t=J,n=x(`#wizard-form`);if(!Rl&&t&&e!==t.extractionStep&&!(n&&e>t.extractionStep&&!n.reportValidity())){if(n&&_l(n),e<1){yl();return}if(e<=il.length){t.extractionStep=e,V();return}t.settings.limits=c(t.extraction,t.settings.limits),t.settings.extraction=structuredClone(t.extraction),t.settings.limitsConfirmed=!0,t.preview=null,yl(),H(`Resource budgets set from your nodes. You can still edit any of them in All settings.`)}}function yl(){let e=J;e.mode=e.extractionReturn?.mode||`advanced`,e.step=e.extractionReturn?.step||4,e.extractionReturn?.guidedStep&&(e.guidedStep=e.extractionReturn.guidedStep),e.extractionReturn=null,e.extractionUndo=null,V()}function bl(){let e=J,t=x(`#wizard-form`);t&&(e.mode===`guided`?du(t):Ll(t)),e.extractionReturn={mode:e.mode,step:e.step,guidedStep:e.guidedStep},e.mode=`extraction`,e.extractionStep=1,V()}function xl(e){let t=new Set(e.alternateRecipes||[]),n=new Set(e.preferredRecipes||[]),r=W.catalog.alternates||[];return b`<div class="alt-picker">
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
  </div>`}var Sl=e=>{let t=new Set((W?.catalog?.alternates||[]).map(e=>e.id));return[...new Set(Object.values(e?.stages||{}).flatMap(e=>(e.rows||[]).filter(e=>e.alternate||t.has(e.id)).map(e=>e.id)))].sort()};function Cl(e){let t=(W.catalog.alternates||[]).find(t=>t.id===e);if(!t)return;let n=Object.keys(t.outputs)[0],r=(W.catalog.standardRecipes||[]).filter(e=>e.outputs[n]),i=e=>Fs({machineCount:1,recipe:{name:e.name.replace(`Alternate: `,``),machine:e.machine,ins:Object.entries(e.inputs||{}),outs:Object.entries(e.outputs||{})}});pc(t.name,t.mam?`MAM research · unlocked in the MAM, not from hard drives · ${t.machine}`:`Alternate recipe · available from Phase ${t.phase} · ${t.machine}`,b`${i(t)}
      ${r.length?b`<h3>Standard ${r.length>1?`recipes`:`recipe`} for ${n}</h3>
            ${r.map(i)}`:b`<p class="small muted">No standard recipe produces ${n}.</p>`}
      <p class="small muted">
        Rates are per machine at 100%, per minute. Alternates are unlocked with hard drives in game;
        ticking a recipe is a planning allowance, not an in-game unlock.
      </p>`,n)}function wl(e){let t=W.catalog.sloopUses||[],n=e.sloopReserved||[],r=10*(e.augmenters||0)+n.length+(e.amplifySloops||0),i=e.somersloops||0,a=Math.round((.1*((e.augmenters||0)-(e.fueledAugmenters||0))+.3*(e.fueledAugmenters||0))*100),o=e.augmenters||0,s=e.fueledAugmenters||0;return b`<div class="notice blue">
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
    </p>`}function Tl(e){let t=e.settings?.existingSupply||{};if(!Object.keys(t).length)return``;let n=Number(e.settings.phase||1),r={};for(let[t,i]of Object.entries(e.stages))if(Number(t)>=n)for(let[e,t]of Object.entries(i.supplied||{}))r[e]=Math.max(r[e]||0,t);let i=Object.entries(e.stages).filter(([e,t])=>t.supplyDropped&&Number(e)>=n).map(([e])=>e);return b`<div class="notice blue supply-notice">
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
  </div>`}function El(e){let t=e.stages?.[5]?.fuelVerdict;if(!t)return``;if(!t.unfueledFeasible)return b`<div class="notice blue">
      <b>Fueled augmenters are carrying this plan.</b> Phase 5 does not fit its budgets without
      them, so the ${S(t.matrixRate)} Alien Power Matrix/min is doing real work.
    </div>`;let n=t.worthIt,r=t.buildings-t.buildingsUnfueled;return b`<div class="notice ${n?`blue`:``}">
    <b
      >${n?`Fueling these augmenters pays off.`:`Fueling these augmenters costs more than it returns.`}</b
    >
    Producing ${S(t.matrixRate)} Alien Power Matrix/min takes Phase 5 from
    ${S(t.buildingsUnfueled)} buildings to ${S(t.buildings)}
    (${r>0?`+`:``}${S(r)}) and from ${R(t.requiredMWUnfueled)} to
    ${R(t.requiredMW)} of demand, while the boost raises available power from
    ${R(t.availableMWUnfueled)} to ${R(t.availableMW)}.
    ${n?`The extra 20% is worth more than the fuel line costs at this scale.`:`At this scale the fuel line costs more than the extra 20% returns. Build the augmenter${e.settings.augmenters>1?`s`:``} unfueled, or put 4 somersloops in the Alien Power Matrix encoder — that halves the whole chain behind it and moves the break-even down.`}
  </div>`}function Dl(e){let t=W.saves.find(t=>t.id===e.saveId);if(!t?.profiles.length)return``;let n=t.profiles.find(t=>t.id===e.carryFrom)||t.profiles[0],r=e.carry||{},i=xe(e.preview).length;return b`<section class="panel carry-panel">
    <h3>Continue the progress in this save</h3>
    <p>
      A new profile is a new plan for the same world, so it can start from what you have already
      done. Nothing is moved — the profile you carry from keeps all of it.
    </p>
    <label class="field"
      >Carry progress from
      <select name="carryFrom">
        ${t.profiles.map(e=>Ss(e.id,e.name,n.id))}
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
  </section>`}function Ol(e){let t=(W.catalog.storageItems||[]).filter(t=>fe(t.name,e.storage));if(!t.length)return``;let n=e.storageOverrides||{},r=t.filter(e=>n[e.name]!==void 0).length;return b`<details class="panel rate-picker" ${r>0&&y(`open`)}>
    <summary>
      Per-item storage rates${r>0&&` · `+S(r)+` set`} ${Cs(`storageOverrides`)}
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
  </details>`}function kl(e,t){let n=J;if(!e?.querySelector(`.carry-list`))return;let r=t||new FormData(e),i=new Set(r.getAll(`carry`).map(String));n.carryFrom=r.get(`carryFrom`)||null,n.carry=Object.fromEntries(be.map(([e])=>[e,i.has(e)]))}function Al(t=null){if(!xd())return;let r=W.saves.find(e=>e.id===t),i=r?.profiles.find(e=>e.id===r.activeProfile),a=i?.settings||(i?.kind===`original`?{phase:`3`,purity:`pure`,distribution:`randomized`,multiplier:50,powerFactor:.5,availablePowerGW:0,recipes:`all`,pureIngots:!0,sam:`needed`,nuclear:`recycle`,uraniumReactors:1,storage:`all`,storageRate:1,cellsPerMinute:20,goal:`timed`,hours:8,roundRates:!0,wholeMachines:!0,limitsConfirmed:!1,limits:{...W.catalog.pureLimits}}:null);Id({step:1,saveId:t,saveName:r?.name||``,name:``,settings:a?structuredClone(a):{phase:`3`,purity:`vanilla`,distribution:`original`,multiplier:1,powerFactor:1,availablePowerGW:0,recipes:`standard`,pureIngots:!1,sam:`needed`,nuclear:`none`,uraniumReactors:1,storage:`construction`,storageRate:1,cellsPerMinute:0,goal:`balanced`,hours:8,roundRates:!0,wholeMachines:!0,limitsConfirmed:!1,limits:{...W.catalog.limits}},preview:null,carryFrom:r?.activeProfile||null,carry:Object.fromEntries(be.map(([e])=>[e,!0])),mode:`guided`,guidedStep:1,guidedAsk:null,usedGuided:!1,tutorial:`doing`}),a||(J.settings.storageOverrides={Concrete:n}),e&&!a&&(J.settings.phase=`1`),yd(`wizard`)}function jl(){if(!J)return String(b`${B(`NEW PROFILE`,`Choose a save first`)}
        <button class="btn primary" data-new-save>Create a save</button
        ><a class="btn" href="#profiles">Existing saves</a>`);let t=J;if(t.mode===`extraction`)return fl();if(t.mode===`guided`&&t.guidedStep<=tu().length)return lu();let n=[Ml,Nl,Pl,Fl,Il][t.step-1];return String(b`${e&&el()}
      ${B(`SAVE → SETTINGS → GOALS → PLAN`,t.saveId?`Add a profile to `+t.saveName:`Create your factory plan`)}
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
      </form>`)}function Ml(e,t){return b`<h2>Your save and game settings</h2>
    <p>Use the settings shown in your game. Values are multipliers: half consumption is 0.5.</p>
    <div class="form-grid">
      ${ws(`Save name`,`saveName`,e.saveName,`text`,`required maxlength="80" `+(e.saveId?`readonly`:``))}
      ${z(`Currently working on`,`phase`,[`1`,`2`,`3`,`4`,`5`].map(e=>[e,`Phase `+e]),t.phase)}
      ${z(`Resource purity`,`purity`,re,t.purity)}
      ${z(`Node distribution`,`distribution`,o,t.distribution)}
      ${ws(`World seed (optional)`,`worldSeed`,t.worldSeed||``,`number`,`min="-2147483648" max="2147483647" step="1"`)}
      ${ws(`Elevator requirement multiplier`,`multiplier`,t.multiplier,`number`,`min="0.1" max="1000" step="0.1" required`)}
      ${ws(`Power consumption multiplier`,`powerFactor`,t.powerFactor,`number`,`min="0" max="10" step="0.1" required`)}
      ${ws(`Spare existing power (MW)`,`availablePowerMW`,t.availablePowerGW*1e3,`number`,`min="0" max="10000000" step="1" required`)}
      ${ws(`Total installed power (MW)`,`installedPowerMW`,(t.installedPowerGW??t.availablePowerGW)*1e3,`number`,`min="0" max="10000000" step="1" required`)}
      ${ws(`Other settings / mod notes`,`modNotes`,t.modNotes||``,`text`,`maxlength="500"`)}
    </div>
    <h3>Production you already run ${Cs(`existingSupply`)}</h3>
    ${Kl(t)}
    <p class="small muted">
      Other settings are notes only. Modified recipes, production boosts and modded items are not
      simulated. Phase plans assume the necessary milestones and MAM research are unlocked by
      commissioning.
    </p>`}function Nl(e,t){let n=(e,t,n,r)=>ws(e,t,n,`number`,r+` required`);return b`<h2>How do you want to build?</h2>
    <div class="form-grid">
      ${z(`Recipe access`,`recipes`,[[`standard`,`Standard recipes`],[`all`,`Allow all alternate recipes as they become available`],[`custom`,`Pick specific alternate recipes`]],t.recipes)}
      ${z(`Ingot factories`,`pureIngots`,[[`false`,`Let the planner choose`],[`true`,`Require pure ingot recipes when unlocked`]],String(t.pureIngots))}
      ${z(`SAM resource conversion`,`sam`,[[`avoid`,`Avoid ore / gas conversion`],[`needed`,`Only to meet resource limits or improve maximum output`],[`allow`,`Allow whenever useful`]],t.sam)}
      ${n(`Extra utilities power (%)`,`utilityPercent`,t.utilityPercent??20,`min="0" max="200" step="1"`)}
      ${z(`Drone fuel`,`droneFuel`,s.map(e=>[e,e===`none`?`No dedicated drone fuel`:e]),t.droneFuel||`none`)}
      ${n(`Drone fuel supply (items/min, entire fleet)`,`droneFuelRate`,t.droneFuelRate??10,`min="0.01" max="10000" step="any"`)}
      ${n(`Phase 4 battery bridge /min (ionized fuel only)`,`droneBridgeRate`,t.droneBridgeRate??10,`min="0.01" max="10000" step="any"`)}
      ${z(`Preferred main power`,`mainPower`,v,t.mainPower||`auto`)}
      ${z(`Nuclear goal`,`nuclear`,[[`none`,`No nuclear power`],[`sink`,`Uranium power; sink plutonium fuel rods`],[`recycle`,`Full waste recycling in Phase 5`]],t.nuclear)}
      ${n(`Minimum uranium reactors from Phase 4`,`uraniumReactors`,t.uraniumReactors,`min="1" max="1000" step="1"`)}
      ${z(`Storage supply`,`storage`,le,t.storage)}
      ${z(`Collectables storage`,`collectables`,[[`false`,`No collectables bays`],[`true`,`Include leaves, wood, slugs, food, protein and DNA`]],String(t.collectables??t.storage===`all`))}
      ${n(`Construction materials refill /min`,`buildRate`,t.buildRate??t.storageRate,`min="0" max="300" step="0.1"`)}
      ${n(`Other items refill /min`,`storageRate`,t.storageRate,`min="0.1" max="300" step="0.1"`)}
      ${n(`Extra Singularity Cells /min in Phase 5`,`cellsPerMinute`,t.cellsPerMinute,`min="0" max="1000" step="0.1"`)}
      ${n(`Somersloops available to spend`,`somersloops`,t.somersloops??0,`min="0" max="106" step="1"`)}
      ${n(`Alien Power Augmenters in Phase 5`,`augmenters`,t.augmenters??0,`min="0" max="10" step="1"`)}
      ${n(`Of those, fueled with Alien Power Matrix`,`fueledAugmenters`,t.fueledAugmenters??0,`min="0" max="10" step="1"`)}
      ${n(`Somersloops for production amplification`,`amplifySloops`,t.amplifySloops??0,`min="0" max="106" step="1"`)}
    </div>
    ${wl(t)}${Ol(t)}${t.recipes===`custom`&&xl(t)}
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
    </p>`}function Pl(e,t){let n=t.multiplier>5?`timed`:`balanced`;return b`<h2>Choose your production goal</h2>
    <p>
      ${t.multiplier>5?`Your elevator multiplier makes completion time a useful starting point.`:`Balanced progression is a practical starting point for these settings.`}
      Storage and your selected preferences apply to every option.
    </p>
    <div class="goal-grid">
      ${W.catalog.goals.map(e=>b`<label class="goal-card"
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
      ${ws(`Profile name`,`profileName`,e.name||W.catalog.goals.find(e=>e.id===t.goal).name,`text`,`required maxlength="80"`)}
      ${ws(`Hours per phase (target-time option)`,`hours`,t.hours,`number`,`min="0.25" max="2000" step="0.25" required`)}
      ${z(`Target time applies to`,`phaseTime`,[[`every`,`Every phase`],[`final`,`The final phase; earlier phases run as fast as their kept buildings allow`]],t.phaseTime||`every`)}
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
    </p>`}function Fl(e,t){return b`<h2>Available resource budgets</h2>
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
      ${W.catalog.raw.map(e=>ws(e,`limit:`+e,t.limits[e],`number`,`min="0" max="10000000" step="any" required`))}
    </div>
    <label class="check-row"
      ><input name="limitsConfirmed" type="checkbox" ${t.limitsConfirmed&&y(`checked`)} />I have
      checked these budgets for my save (required for maximum output)</label
    >`}function Il(e){let t=e.preview,n=Number(t.settings.phase||1),r=Object.entries(t.stages).filter(([e])=>Number(e)>=n);return b`<h2>Review ${e.name}</h2>
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
                <td>${t.generationMW===void 0?`—`:R(t.generationMW)}</td>
                <td>${t.feasible?`Within entered limits`:`Needs adjustment`}</td>
              </tr>`)}
        </tbody>
      </table>
    </div>
    ${Tl(t)}${El(t)}
    ${r.filter(([,e])=>!e.feasible).map(([e,n])=>b`<div class="notice">
            <b>Phase ${e}:</b> ${n.reason}${wc(n,t.settings)}
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
    ${Dl(e)}`}function Ll(e){let t=new FormData(e),n=J,r=n.settings,i=r.purity+`|`+r.distribution;for(let[e,i]of t)e===`availablePowerMW`&&(r.availablePowerGW=Number(i)/1e3),e===`installedPowerMW`&&(r.installedPowerGW=Number(i)/1e3),e===`saveName`&&(n.saveName=i),e===`profileName`?n.name=i:e.startsWith(`limit:`)?r.limits[e.slice(6)]=Number(i):[`utilityPercent`,`droneFuelRate`,`droneBridgeRate`,`multiplier`,`powerFactor`,`availablePowerGW`,`uraniumReactors`,`storageRate`,`buildRate`,`cellsPerMinute`,`somersloops`,`augmenters`,`fueledAugmenters`,`amplifySloops`,`hours`].includes(e)?r[e]=Number(i):e===`collectables`?r.collectables=i===`true`:e===`pureIngots`?r[e]=i===`true`:[`phase`,`purity`,`distribution`,`recipes`,`sam`,`nuclear`,`storage`,`goal`,`phaseTime`,`modNotes`,`mainPower`,`worldSeed`,`droneFuel`].includes(e)&&(r[e]=i);e.querySelector(`[name=sloop]`)&&(r.sloopReserved=t.getAll(`sloop`).map(String)),e.querySelector(`.alt-list`)&&(r.alternateRecipes=t.getAll(`alt`).map(String),r.preferredRecipes=t.getAll(`altpref`).map(String).filter(e=>r.alternateRecipes.includes(e)));{let n=ql(e,t);n&&(r.existingSupply=n)}if(e.querySelector(`.rate-list`)){let e={};for(let[n,r]of t)n.startsWith(`rate:`)&&String(r).trim()!==``&&Number.isFinite(Number(r))&&(e[n.slice(5)]=Number(r));r.storageOverrides=e}n.step===3&&(r.roundRates=t.has(`roundRates`),r.wholeMachines=t.has(`wholeMachines`)),n.step===4&&(r.limitsConfirmed=t.has(`limitsConfirmed`)),kl(e,t),n.step===1&&i!==r.purity+`|`+r.distribution&&(r.limits=ae(r.purity,r.distribution).limits,r.limitsConfirmed=!1),n.preview=null}var Rl=!1,zl=(e,t)=>(e&&(e.textContent=t),{onProgress:n=>{e&&(e.textContent=`${t} Phase ${n} of 5…`)}});function Bl(e,t){let n=e?.querySelector(`.form-error`);if(!n){H(t.message,!0);return}/timed out/i.test(t.message)?n.innerHTML=String(b`${t.message}<span class="error-options"
          ><b>Ways to get a plan:</b
          ><span>Try again — speed varies with your device and other open tabs.</span
          ><span
            >In the recipe picker, use <b>Planner’s choice</b> or untick alternates you don’t need;
            many recipes for the same product slow the search the most.</span
          ><span
            >In Goals, turn off whole-machine production — exact balancing calculates much
            faster.</span
          ><span>Lower the elevator multiplier or allow more hours per phase.</span></span
        >`):n.textContent=t.message}async function Vl(e){if(Rl||!J||e===J.step||e<1||e>5)return;let t=x(`#wizard-form`);if(!(e>J.step&&!t.reportValidity())){if(Ll(t),e!==5){J.step=e,V();return}await Hl(t)}}async function Hl(e){Rl=!0;let t=document.querySelectorAll(`[data-wizard-step],[data-guided-advanced],#wizard-form button`);t.forEach(e=>e.disabled=!0);let n=e?.querySelector(`button[type="submit"]`),r=n?.textContent;try{J.name=J.name.trim()||W.catalog.goals.find(e=>e.id===J.settings.goal).name,J.preview=await vd(`/api/preview`,{settings:J.settings},!0,zl(n,`Calculating…`)),J.step=5,J.guidedStep=tu().length+1,V()}catch(t){Bl(e,t),n&&(n.textContent=r)}finally{Rl=!1,t.forEach(e=>e.disabled=!1)}}var Ul=8;function Wl(e){let t=String(e||``).trim().toLowerCase();if(!t)return[];let n=[],r=[];for(let e of W.catalog.supplyItems||[]){let i=e.toLowerCase();i.startsWith(t)?n.push(e):i.includes(t)&&r.push(e)}return[...n,...r].slice(0,Ul)}function Gl(e){return Array.isArray(e.supplyRows)||(e.supplyRows=Object.entries(e.settings.existingSupply||{}).map(([e,t])=>({name:e,rate:String(t)}))),e.supplyRows}function Kl(e){let t=[...Gl(J),{name:``,rate:``}],n=new Set(W.catalog.supplyItems||[]),r=e=>e.name.trim()?n.has(e.name.trim())?String(e.rate).trim()?``:b`<span class="supply-hint"
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
  </div>`}function ql(e,t){if(!e?.querySelector?.(`.supply-list`))return null;let n=new Set(W.catalog.supplyItems||[]),r=t.getAll(`supplyItem`).map(e=>String(e)),i=t.getAll(`supplyRate`).map(e=>String(e)),a=r.map((e,t)=>({name:e,rate:i[t]??``})).filter(e=>e.name.trim()||String(e.rate).trim());J.supplyRows=a;let o={};for(let e of a){let t=e.name.trim(),r=Number(e.rate);n.has(t)&&String(e.rate).trim()!==``&&Number.isFinite(r)&&r>0&&(o[t]=r)}return o}function Jl(e){let t=e.closest(`.supply-field`);if(!t)return;let n=t.querySelector(`.supply-options`);if(!n)return;let r=Wl(e.value).filter(t=>t.toLowerCase()!==e.value.trim().toLowerCase());if(!r.length){Xl(e);return}n.innerHTML=String(b`${r.map(e=>b`<button
          type="button"
          role="option"
          aria-selected="false"
          class="supply-option"
          data-supply-pick="${e}"
        >
          ${w(e)}<span>${e}</span>
        </button>`)}`),n.hidden=!1,e.setAttribute(`aria-expanded`,`true`)}function Yl(e){let t=e.closest(`.supply-input`);if(!t)return;let n=e.value.trim(),r=(W.catalog.supplyItems||[]).includes(n)?n:``;t.dataset.icon!==r&&(t.dataset.icon=r,t.querySelector(`.item-icon`)?.remove(),t.classList.toggle(`has-icon`,!!r),r&&t.insertAdjacentHTML(`afterbegin`,w(r)))}function Xl(e){let t=e?.closest(`.supply-field`)?.querySelector(`.supply-options`);t&&(t.hidden=!0,t.innerHTML=``),e?.setAttribute(`aria-expanded`,`false`)}function Zl(e){let t=e.closest(`.supply-field`)?.querySelector(`input[name=supplyItem]`);if(!t)return;let n=Number(e.closest(`.supply-row`)?.dataset.supplyRow??-1);t.value=e.dataset.supplyPick,Xl(t);let r=x(`#wizard-form`);r&&(J.mode===`guided`?du(r):Ll(r)),V(),[...document.querySelectorAll(`.supply-row`)][n]?.querySelector(`input[name=supplyRate]`)?.focus()}var Ql={minimal:`<path d="M4 20h4v-6H4zM10 20h4v-9h-4z"/><path d="M17 5v9M17 14l-2.5-3M17 14l2.5-3"/>`,balanced:`<path d="M12 4v16M6 20h12"/><path d="M3 9h18"/><path d="M6 9l-3 5h6zM18 9l-3 5h6z"/>`,timed:`<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 3h6"/>`,maximum:`<path d="M4 18a8 8 0 0 1 16 0"/><path d="M12 18l5-6"/><path d="M12 18h.01"/>`,standard:`<rect x="4" y="5" width="16" height="14" rx="1"/><path d="M8 10h8M8 14h5"/>`,alternates:`<path d="M5 19V9a3 3 0 0 1 3-3h11"/><path d="M16 3l3 3-3 3"/><path d="M5 19h6a3 3 0 0 0 3-3v-1"/>`,custom:`<path d="M4 7h9M4 12h9M4 17h6"/><path d="M15 15l2.5 2.5L22 13"/>`,"stock-none":`<path d="M4 8h16v11H4z"/><path d="M4 8l2-3h12l2 3"/><path d="M9 12h6" opacity=".35"/>`,"stock-build":`<path d="M4 8h16v11H4z"/><path d="M4 8l2-3h12l2 3"/><path d="M8 12h8M8 15h8"/>`,"stock-all":`<path d="M3 13h8v7H3zM13 13h8v7h-8z"/><path d="M8 4h8v7H8z"/>`,whole:`<rect x="3" y="7" width="5" height="11"/><rect x="9.5" y="7" width="5" height="11"/><rect x="16" y="7" width="5" height="11"/><path d="M3 4h18"/>`,precise:`<circle cx="12" cy="12" r="8"/><path d="M12 12l4-3"/><path d="M12 4v2M20 12h-2M12 20v-2M4 12h2"/>`,tutorial:`<path d="M6 4v16"/><path d="M6 5h11l-2.5 3.5L17 12H6z"/>`,"tutorial-done":`<path d="M6 4v16"/><path d="M6 5h11l-2.5 3.5L17 12H6z"/><path d="M13 18l2 2 4-4"/>`},$l=e=>b`<span class="guided-art" aria-hidden="true"
    ><svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${y(Ql[e]||Ql.balanced)}
    </svg></span
  >`,eu=e=>b`<span class="guided-art items" aria-hidden="true"
    >${e.slice(0,4).map(e=>w(e))}</span
  >`;function tu(){let e=J,t=[];for(let n of l)t.push(n),n.id===`phase`&&!e.saveId&&t.push(u(String(e.settings.phase||`3`)));return e.guidedAsk?t.filter(t=>e.guidedAsk.includes(t.id)):t}var nu=e=>{let t=J,n=t.settings;return e.id===`tutorial`?t.tutorial||`doing`:e.id===`standing`?t.standing||`none`:e.id===`exact`?n.wholeMachines===!1?`precise`:`whole`:e.id===`stock`?e.options.some(e=>e.value===n.storage)?n.storage:`construction`:String(n[e.id]??``)};function ru(e){let t=nu(e);return b`<div class="guided-grid">
    ${e.options.map(n=>b`<label class="guided-card${n.value===t?` is-picked`:``}">
          <input
            type="radio"
            name="guided:${e.id}"
            value="${n.value}"
            aria-label="${n.label+`. `+n.detail}"
            ${n.value===t&&y(`checked`)}
          />
          ${n.items?eu(n.items):$l(n.glyph)}
          <strong>${n.label}</strong>
          <p>${n.detail}</p>
          ${n.handoff&&b`<span class="badge">Opens All settings</span>`}
        </label>`)}
  </div>`}function iu(e){if(e.storage===`none`)return``;let t=e.storageOverrides||{};return b`<fieldset class="guided-topup">
    <legend>Which of these do you keep running out of? ${Cs(`guidedTopup`)}</legend>
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
  </fieldset>`}function au(){let e=J,t=e.settings,n=W.saves.find(t=>t.id===e.saveId),r=n?.profiles.find(t=>t.id===(e.carryFrom||n.activeProfile))||n?.profiles[0],i=[[`Phase`,`Phase `+(t.phase||`3`)],[`Goal`,(W.catalog.goals.find(e=>e.id===t.goal)||{}).name||t.goal],[`Recipes`,t.recipes===`all`?`All alternates`:t.recipes===`custom`?S((t.alternateRecipes||[]).length)+` picked`:`Standard only`],[`Stocked`,(le.find(([e])=>e===t.storage)||[,t.storage])[1]],[`Machines`,t.wholeMachines===!1?`Exact ratios`:`Whole machines`]];return b`<h2>What is different this time?</h2>
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
    </p>`}function ou(e){return e.tutorial===`done`?[...de]:[]}function su(e){let t=J,r=t.settings,i=new FormData(e);if(e.querySelector?.(`.guided-topics`)){let e=i.getAll(`topic`).map(String);t.guidedAsk=l.filter(t=>e.includes(t.id)).map(e=>e.id)}for(let e of tu()){if(!e.options)continue;let n=i.get(`guided:`+e.id);if(n===null)continue;let a=e.options.find(e=>e.value===String(n));a&&(e.id===`tutorial`&&(t.tutorial=a.value),Object.assign(r,a.set))}{let t=ql(e,i);t&&(r.existingSupply=t)}if(i.has(`hours`)&&(r.hours=Number(i.get(`hours`))),e.querySelector?.(`.guided-topup`)){r.storageRate=1,r.buildRate=1;let e=i.getAll(`topup`).map(String).filter(e=>d.includes(e)),t={};for(let r of e)t[r]=n;r.storageOverrides=t}r.goal!==`timed`&&(r.phaseTime=`every`),r.storage===`none`&&(r.storageOverrides={}),t.preview=null}function cu(e,t){return b`<div class="guided-progress" role="list">
    ${e.map((e,n)=>b`<span
          role="listitem"
          class="${n===t?`current`:n<t?`done`:``}"
          ${n===t&&y(`aria-current="step"`)}
          ><i></i>${e.short||e.title.replace(/\?$/,``)}</span
        >`)}
  </div>`}function lu(){let t=J,n=t.settings,r=tu(),i=t.saveId&&t.guidedAsk===null,a=i?-1:Math.min(t.guidedStep-1,r.length-1),o=i?null:r[a],s;s=i?au():o?b`<h2>${o.title}</h2>
      <p>${o.lead}</p>
      ${o.kind===`supply`?Kl(n):ru(o)}
      ${o.id===`goal`&&n.goal===`timed`&&b`<div class="form-grid guided-follow">
        ${ws(`Hours per phase`,`hours`,n.hours??8,`number`,`min="0.25" max="2000" step="0.25" required`)}
      </div>`}
      ${o.id===`stock`&&iu(n)}`:b`<h2>Ready to calculate</h2>`;let c=!i&&a>=r.length-1,l=o?.step||1,u=i||t.guidedStep<=1;return String(b`${e&&el()}
      ${B(`A FEW QUESTIONS`,t.saveId?`Add a profile to `+t.saveName:`Create your factory plan`,`Answer what matters and the planner fills in the rest. Every setting is still there under All settings.`)}
      ${!i&&cu(r,a)}
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
      </form>`)}async function uu(e){let t=J,n=x(`#wizard-form`);if(Rl||!t||e>t.guidedStep&&n&&!n.reportValidity())return;let r=!!t.saveId&&t.guidedAsk===null;n&&du(n);let i=tu();if(r&&i.length){t.guidedStep=1,V();return}if(e<1){t.guidedStep=1,V();return}let a=i[Math.min(t.guidedStep-1,i.length-1)],o=a?.options?.find(e=>e.value===nu(a))?.handoff;if(o&&e>t.guidedStep){fu(o);return}if(e<=i.length){t.guidedStep=e,V();return}await Hl(n)}function du(e){let t=J,n=new FormData(e);n.has(`saveName`)&&(t.saveName=String(n.get(`saveName`))),n.has(`profileName`)&&(t.name=String(n.get(`profileName`))),su(e)}function fu(e){let t=J,n=x(`#wizard-form`);n&&t.mode===`guided`&&du(n),t.mode=`advanced`,t.usedGuided=!0,t.step=Math.min(Math.max(e||1,1),4),V()}function pu(){let e=J,t=x(`#wizard-form`);t&&e.mode!==`guided`&&Ll(t),e.mode=`guided`;let n=tu();e.guidedStep>=1||(e.guidedStep=1),e.guidedStep=Math.min(e.guidedStep,Math.max(n.length,1)),V()}var mu=`planner-ada`,hu=0,gu=``,_u=wu();function vu(e){hu=e}function yu(e){_u=e}var bu=null,xu,Su=0,Cu=0;function wu(){try{return localStorage.getItem(mu)===`muted`}catch{return!1}}function Tu(){try{localStorage.setItem(mu,_u?`muted`:`on`)}catch{}}function Eu(){let t=G.id?Lc():[],n=t.find(e=>!$(e.id)),r=q?tf():null,i=q?r.rows||[]:Y.factories.filter(e=>e.stages[Q()]),a=q?e=>`calc-`+Q()+`-`+e.id:e=>`factory-`+Q()+`-`+e.id,o=Gs().flatMap(e=>e.items).filter(e=>e.name),s=q?Object.entries(r.delivery||{}).map(([e,t])=>({id:Q()+`-`+Ae(e),target:t.target,initial:0})):Y.deliveries.filter(e=>e.phase===Z()),c=e=>X.deliveries[e.id]??(K.id===`original`?e.initial:0),l=q?(q.settings.availablePowerGW||0)*1e3:0,u=q&&r.additionalHeadroomMW||0;return{view:Ed,phaseLabel:Qd(Z()),browserMode:e,planEditing:Md,guided:J?.mode===`guided`,guidedStep:J?.guidedStep||0,guidedTotal:J?tu().length:0,tutorialDone:J?.tutorial===`done`,supplyDeclared:Object.keys(J?.settings?.existingSupply||{}).length,kind:G.id?K?.kind||`original`:`none`,save:G.name||`this save`,profile:K?.name||`Pioneer`,steps:{done:t.filter(e=>$(e.id)).length,total:t.length},next:n?.title||``,retireOpen:t.filter(e=>e.id.startsWith(`retire-`)&&!$(e.id)).length,factories:{done:i.filter(e=>$(a(e))).length,total:i.length},storage:{done:o.filter(e=>$(`slot-`+e.id+`-verified`)).length,total:o.length},deliveries:{open:s.filter(e=>c(e)<e.target).length,total:s.length},hasPhaseNote:!!X.notes[`phase-`+Z()],customTasks:X.customTasks.filter(e=>e.phase===Z()).length,removedSteps:Pc().removed.length,groups:tc().groups.length,feasible:!q||r.feasible!==!1,reason:q&&r.reason||``,short:q?(W.catalog?.raw||[]).filter(e=>(r.raw?.[e]||0)>(q.settings.limits?.[e]??1/0)):[],power:u>.01?{required:R(r.requiredMW||0),spare:R(l),headroom:R(u),tight:!0}:null,hours:q&&r.hours?S(r.hours)+` h`:``,profiles:W.saves.find(e=>e.id===G.id)?.profiles.length||0,backupDays:W.lastBackup?Math.max(0,Math.floor((Date.now()-new Date(W.lastBackup).getTime())/864e5)):null,post:Z()===`post`,startPhase:Jd(),assumptions:q?(q.warnings||[]).length:0}}function Du(){if(bu)return bu;let e=Eu(),t=ge(e);if(!t.length)return null;let n=t.map(e=>e.id).join(`|`);n!==gu&&(gu=n,hu=0);let r=Math.floor(hu/t.length),i=hu%t.length;return r>0&&!i?me(r,e):t[i]}function Ou(){clearTimeout(xu),bu=null,Su=0}function ku(){clearTimeout(xu),Su=Date.now()-Cu>2500?1:Su+1,Cu=Date.now(),!(Su<5)&&(bu=he(Su-4),xu=setTimeout(()=>{Ou(),V()},12e3),V())}function Au(){try{if(_u)return{muted:!0};let e=Du();return e?{tone:e.tone,name:e.name||``,text:e.text}:null}catch{return null}}var ju={key:0,class:`ada is-muted`},Mu=[`data-tone`],Nu={class:`ada-head`},Pu={class:`eyebrow`},Fu={class:`ada-line`,id:`ada-line`,role:`status`,"aria-live":`polite`},Iu={class:`ada-tools`},Lu={__name:`AdaPanel`,setup(e){let t=Eo(()=>xs(Au));function n(){bu?Ou():vu(hu+1),bs()}function r(e){yu(e),Tu(),Ou(),bs()}function i(){_u||ku()}return(e,a)=>t.value?.muted?(Ra(),Ua(`div`,ju,[a[2]||=L(`span`,{class:`ada-mark`,"aria-hidden":`true`},`◈`,-1),a[3]||=L(`span`,null,`ADA muted`,-1),L(`button`,{class:`btn quiet`,type:`button`,"data-ada-mute":`off`,onClick:a[0]||=e=>r(!1)},` Unmute `)])):t.value?(Ra(),Ua(`section`,{key:1,class:`ada`,"data-tone":t.value.tone,"aria-label":`ADA`},[L(`div`,Nu,[L(`span`,{class:`ada-mark`,"aria-hidden":`true`,onClick:i},`◈`),L(`div`,null,[L(`b`,null,Tt(t.value.name||`ADA`),1),L(`div`,Pu,Tt(t.value.name?`Transmission fault`:`Artificial Directory and Assistant`),1)])]),L(`p`,Fu,Tt(t.value.text),1),L(`div`,Iu,[L(`button`,{class:`btn quiet`,type:`button`,id:`ada-next`,"data-ada-next":``,onClick:n},` Another remark`),L(`button`,{class:`btn quiet`,type:`button`,"data-ada-mute":`on`,onClick:a[1]||=e=>r(!0)},`Mute`)])],8,Mu)):eo(``,!0)}},Ru={class:`layout`},zu={class:`sidebar`},Bu={class:`nav`,"aria-label":`Main navigation`},Vu=[`href`,`aria-current`],Hu={class:`navicon`,"aria-hidden":`true`},Uu={class:`save-status`},Wu={id:`saved`},Gu={class:`sidebar-foot`},Ku={key:0},qu={class:`topbar`},Ju={class:`breadcrumbs`},Yu={href:`#profiles`},Xu={class:`small`},Zu=[`disabled`,`value`],Qu=[`value`],$u={__name:`Shell`,setup(t){let n=[[`plan`,`◫`,`Build plan`],[`factories`,`▥`,`Factories`],[`storage`,`▦`,`Storage room`],[`resources`,`↗`,`Power & resources`],[`backup`,`⇅`,`Backup & notes`]],r=Eo(()=>xs(()=>({view:Ed,saveName:G.name,canPickPhase:!!G.id,phase:Z(),phases:Yd().map(e=>[e,Qd(e)]),saved:fd?`Saving…`:e?`Saved in this browser`:`Saved on server`,footer:i()})));function i(){if(q){let e=q.settings,t=new Date(q.createdAt),n=re.find(([t])=>t===e.purity)?.[1]||e.purity;return[K.name,`${n} purity · ${S(e.multiplier)}× elevator parts`,`${S(e.powerFactor)}× power consumption`,...Number.isNaN(t.getTime())?[]:[`Plan created `+t.toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})]]}return K?.kind===`original`?[K.name,`Pure nodes · 50× elevator parts`,`Half power consumption`,`Plan revised 13 September 2026`]:[`Create or select a profile`]}async function a(e){let t=e.target;t.disabled=!0;try{await U({type:`phase`,value:t.value}),Bd(``),V()}catch{t.value=Z()}finally{t.disabled=!1}}return(e,t)=>(Ra(),Ua(`div`,Ru,[L(`aside`,zu,[t[1]||=L(`div`,{class:`brand`},[L(`img`,{src:`./favicon.svg`,alt:``}),L(`div`,null,[$a(` Project Assembly `),L(`div`,{class:`eyebrow`},`FICSIT compliance terminal`)])],-1),L(`nav`,Bu,[(Ra(),Ua(Ma,null,vi(n,([e,t,n])=>L(`a`,{key:e,href:`#`+e,class:ht(r.value.view===e?`active`:``),"aria-current":r.value.view===e?`page`:null},[L(`span`,Hu,Tt(t),1),$a(Tt(n),1)],10,Vu)),64))]),Ya(Lu),L(`div`,Uu,[t[0]||=L(`span`,{class:`dot`},null,-1),L(`span`,Wu,Tt(r.value.saved),1)]),L(`div`,Gu,[(Ra(!0),Ua(Ma,null,vi(r.value.footer,(e,t)=>(Ra(),Ua(Ma,{key:t},[t?(Ra(),Ua(`br`,Ku)):eo(``,!0),$a(Tt(e),1)],64))),128))])]),L(`div`,null,[L(`header`,qu,[L(`div`,Ju,[L(`a`,Yu,Tt(r.value.saveName),1),t[2]||=$a(),t[3]||=L(`span`,{"aria-hidden":`true`},` / `,-1),$a(` `+Tt(Qn(Qd)(r.value.phase)),1)]),L(`label`,Xu,[t[4]||=$a(`Working on `,-1),L(`select`,{id:`phase-picker`,"aria-label":`Working phase`,disabled:!r.value.canPickPhase,value:r.value.phase,onChange:a},[(Ra(!0),Ua(Ma,null,vi(r.value.phases,([e,t])=>(Ra(),Ua(`option`,{key:e,value:e},Tt(t),9,Qu))),128))],40,Zu)])]),t[5]||=L(`main`,{id:`main`,class:`workspace`,tabindex:`-1`},null,-1)])]))}},ed=null,td=null;function nd(e){ed&&td?.isConnected||(rd(),e.textContent=``,ed=gs($u),ed.mount(e),td=e.firstElementChild)}function rd(){ed?.unmount(),ed=null,td=null}function id(e){let t=e===`setup`;return b`<form id="auth-form" class="panel auth-panel">
    <h2>
      ${t?`Secure your existing save`:e===`register`?`Create your account`:`Sign in`}
    </h2>
    ${t&&b`<p>
        Your existing save and progress will belong to this account. Once enabled, visitors must
        sign in.
      </p>
      <label class="field"
        >Server setup token<input name="setupToken" required autocomplete="off"
      /></label>
      <p class="small muted">
        Read account-setup-token.txt in the server data folder. With Docker: docker compose exec
        planner cat /data/account-setup-token.txt
      </p>`}
    ${ws(`Username`,`username`,``,`text`,`required minlength="3" maxlength="32" pattern="[a-zA-Z0-9_-]+" autocomplete="username"`)}
    ${ws(`Password (12–128 characters)`,`password`,``,`password`,`required minlength="12" maxlength="128" autocomplete="`+(e===`login`?`current-password`:`new-password`)+`"`)}
    ${t&&b`<label class="check-row"
      ><input type="checkbox" name="registration" />Allow other people to register their own
      accounts</label
    >`}
    <button class="btn primary">
      ${t?`Enable accounts`:e===`register`?`Create account`:`Sign in`}
    </button>
    <p id="auth-error" class="form-error" role="alert"></p>
  </form>`}function ad(){return e?nl():String(b`${B(`YOUR ACCOUNT`,W.accountsEnabled?W.user.username:`User accounts`,W.accountsEnabled?`Your saves are visible only to your account.`:`Local mode currently shares one workspace. Enable accounts before sharing this server.`)}
    ${W.accountsEnabled?b`<section class="panel">
          <p>Each account has its own named saves, profiles and progress.</p>
          <button class="btn" data-logout>Sign out</button>
          <p class="small muted">
            Use HTTPS when serving this app beyond localhost. Your host manages account access and
            backups.
          </p>
        </section>`:id(`setup`)}`)}function od(){Rd(null),rd(),x(`#app`).innerHTML=String(b`<main class="signin">
      <div class="brand"><img src="./favicon.svg" alt="" />Project Assembly</div>
      <h1>Your factory notebook</h1>
      ${id(wd)}
      ${W.registration&&b`<button
        class="btn quiet"
        data-auth-mode="${wd===`login`?`register`:`login`}"
      >
        ${wd===`login`?`Create an account`:`Back to sign in`}
      </button>`}
    </main>`)}function sd(){return String(b`${e&&el()}
      ${B(`YOUR FACTORY WORLDS`,`Saves & profiles`,`Each save keeps separate progress for every profile. Switching back restores its checklist, deliveries and notes.`)}
      <div class="toolbar">
        <button class="btn primary" data-new-save>Create a save</button>
        ${e?b`<a class="btn" href="#backup">Backups & transfer</a>`:b`<a class="btn" href="#account"
              >${W.accountsEnabled?`Your account`:`Set up user accounts`}</a
            >`}
      </div>
      ${W.saves.map(e=>b`<section class="panel save-panel">
            <div class="section-head">
              <h2>${e.name}</h2>
              <button class="btn" data-new-profile="${e.id}">Try another profile</button>
            </div>
            <div class="profile-cards">${e.profiles.map(t=>cd(e,t))}</div>
          </section>`)}
      <p class="small muted">
        Duplicate copies a profile with its progress so you can try changes without touching the
        original. Share downloads a file with the plan, storage layout, factory groups and step
        edits — without your checkmarks or notes — that anyone can import under Backup → Import
        saves.
      </p>
      <section class="panel">
        <h2>Rename the current save or profile</h2>
        <form id="rename-form" class="inline-form">
          <select name="target" aria-label="What to rename">
            <option value="save">Save</option>
            <option value="profile">Profile</option></select
          ><input
            name="name"
            required
            maxlength="80"
            aria-label="New name"
            placeholder="New name"
          /><button class="btn">Rename</button>
        </form>
        <p class="small muted">
          Renaming does not change progress. Profiles keep a frozen calculation so later planner
          updates cannot silently change your targets.
        </p>
      </section>`)}function cd(e,t){let n=e.id===G.id&&t.id===K.id;return b`<article class="profile-card ${n?`selected`:``}">
    <div class="eyebrow">
      ${t.kind===`original`?`PRESERVED HANDBOOK`:`CALCULATED PROFILE`}
    </div>
    <h3>${t.name}</h3>
    <p>
      ${t.settings?`${t.settings.purity} purity · ${S(t.settings.multiplier)}× elevator · ${S(t.settings.powerFactor)}× power`:`50× elevator · pure ingots · nuclear recycling`}
    </p>
    <p class="small">${t.completed} checks complete · ${Qd(t.phase)}</p>
    <button
      class="btn ${n?``:`primary`}"
      data-open-save="${e.id}"
      data-open-profile="${t.id}"
    >
      ${n?`Continue current profile`:`Open profile`}
    </button>
    <button class="btn" data-duplicate-profile="${t.id}" data-duplicate-save="${e.id}">
      Duplicate
    </button>
    <button class="btn" data-share-profile="${t.id}" data-share-save="${e.id}">Share</button>
    <button class="btn" data-remove-profile="${t.id}" data-remove-save="${e.id}">
      Remove profile
    </button>
  </article>`}var ld=[[`power-retained`,`Retained turbofuel: 44.425 GW`],[`power-rocket-1`,`Rocket-fuel block 1: +72 GW`],[`power-rocket-2`,`Rocket-fuel block 2: +72 GW`],[`power-u4`,`Phase 4 uranium: +125 GW`],...Array.from({length:4},(e,t)=>[`power-rocket-`+(t+3),`Rocket-fuel block `+(t+3)+`: +72 GW`]),[`power-nuclear-final`,`Complete nuclear fleet: 437.5 GW total`]];function ud(){let e=Y.resources[Q()],t=Y.plans[Q()];return String(b`${B(`CAPACITY BEFORE CONSTRUCTION`,`Power & resources`,`These are planned full-stage requirements, not live readings from your save. Mining totals already include retained turbofuel, trucks and all new power.`)}
      <div class="stats">
        ${C(`Gross generation`,S(Y.power[Q()])+` GW`,`At this stage’s completion`)}
        ${C(`Production peak`,S(t.manufacturingPeakGW)+` GW`,`Before the utility allowance`)}
        ${C(`Production average`,S(t.manufacturingAvgGW)+` GW`,`Half-consumption setting`)}
        ${C(`Coal remaining`,S(74400-e.Coal)+`/min`,`Against all-pure mining limit`)}
      </div>
      <div class="notice">
        Verify your randomized nitrogen wells can supply
        <b>${S(e[`Nitrogen Gas`]||0)}/min</b> at this stage. The all-pure resource
        limits assume fully developed extraction and logistics. Additional completion modules are
        not included.
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Fresh resource</th>
              <th>Required /min</th>
              <th>Available /min</th>
              <th>Remaining /min</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>dd(e,t))}
          </tbody>
        </table>
      </div>
      <p class="small muted">
        Crude availability counts 30 ordinary pure nodes; oil wells are additional. Water includes a
        2,000/min reserve for retained turbofuel and resin processing.
      </p>
      <div class="backup-grid" style="margin-top:24px">
        <section class="panel">
          <h2>Power commissioning</h2>
          <div class="checklist">
            ${ld.map(([e,t])=>b`<label class="check-row"
                  ><input type="checkbox" data-check="${e}" ${y(Zd(e))} />${t}</label
                >`)}
          </div>
        </section>
        <section class="panel">
          <h2>One 72 GW rocket-fuel block</h2>
          <p><b>Inputs/min:</b> 300 Crude, 800 Sulfur, 400 Coal, 600 Nitrogen and 1,000 Water.</p>
          <p>
            10 Heavy Oil Residue refineries → 8 Diluted Fuel blenders → 8 Nitro Rocket Fuel
            blenders. Add 5 Residual Rubber refineries and 288 Fuel Generators at 100%.
          </p>
          <p class="small muted">
            Produces 1,200 Rocket Fuel, 200 Compacted Coal and 100 Rubber/min. These byproducts are
            not credited against other factory contracts.
          </p>
          <div class="notice blue">
            At Phase 5: (579.231 × 1.2 + 20) ÷ 0.8 ≈ <b>894 GW</b> preliminary requirement. Planned
            gross capacity: <b>913.925 GW</b>. Replace the 20 GW existing-load allowance with your
            measured load.
          </div>
        </section>
      </div>
      <section class="panel" style="margin-top:24px">
        <h2>Nuclear sequence</h2>
        <p>
          Phase 4: 50 uranium reactors generate 500 waste/min. Process it into 2.5 Plutonium Fuel
          Rods/min and sink those rods.
        </p>
        <p>
          Phase 5: 100 uranium reactors → 1,000 Uranium Waste/min → 5 Plutonium Fuel Rods/min → 50
          plutonium reactors → 50 Plutonium Waste/min → 25 Ficsonium Fuel Rods/min → 25 Ficsonium
          reactors.
        </p>
        <p class="small muted">
          Build downstream processing and burning capacity first. Final reactor cooling needs 42,000
          Water/min, already included in the resource table. Keep radioactive buffers at the nuclear
          site.
        </p>
      </section>`)}function dd(e,t){let n=Y.capacities[e],r=n?t/n:0;return b`<tr>
    <td class="resource-name">${w(e)}<span>${e}</span></td>
    <td class="number">${S(t)}</td>
    <td class="number">
      ${n?S(n):e===`Water`?`Extraction limited`:`Verify wells`}
    </td>
    <td class="number ${n&&r>.9?`warn`:``}">${n?S(n-t):`—`}</td>
    <td>
      ${n?b`${S(r*100)}%
            <div class="resource-bar ${r>.9?`tight`:``}">
              <span style="width:${Math.min(100,r*100)}%"></span>
            </div>`:`—`}
    </td>
  </tr>`}function B(e,t,n=``,r=``){return b`<div class="heading-row">
    <div>
      <div class="eyebrow">${e}</div>
      <h1>${t}</h1>
      ${n&&b`<div class="subtitle">${n}</div>`}
    </div>
    ${r&&b`<span class="badge orange">${r}</span>`}
  </div>`}function V(){let e=[...document.querySelectorAll(`details[open][data-task]`)].map(e=>e.dataset.task),t=document.activeElement?.id,n=document.activeElement?.selectionStart;nd(x(`#app`)),bs();let r={profiles:sd,wizard:jl,account:ad,plan:q?Ec:bc,factories:q?Oc:dc,storage:Ys,resources:q?Nc:ud,backup:$c};if(x(`#main`).innerHTML=r[Ed](),e.forEach(e=>document.querySelector(`details[data-task="${e}"]`)?.setAttribute(`open`,``)),t&&document.getElementById(t)){let e=document.getElementById(t);e.focus({preventScroll:!0}),typeof n==`number`&&e.setSelectionRange&&e.setSelectionRange(n,n)}}var fd=0,pd;function H(e,t=!1){let n=x(`#toast`);n.textContent=e,n.className=`show`+(t?` error`:``),clearTimeout(pd),pd=setTimeout(()=>n.className=``,t?9e3:3500)}async function md(n,r={}){if(e&&n.startsWith(`/api/`))return t(n,r);let i=await fetch(e?new URL(`.`+n,Ce):n,{cache:`no-store`,...r}),a;try{a=await i.json()}catch{throw Error(`The server returned an unreadable response.`)}if(!i.ok)throw Error(a.error||`Request failed.`);return a}var hd=Promise.resolve();function U(e){let t={..._d()};fd++,gd();let n=hd.then(async()=>{let n=await md(`/api/update`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Planner-Request":`1`,...t},body:JSON.stringify(e)});return t[`X-Save-Id`]===G.id&&t[`X-Profile-Id`]===K.id&&Rd(n),n});return hd=n.catch(()=>{}),n.catch(e=>{throw H(e.message,!0),e}).finally(()=>{fd--,gd()})}function gd(){bs()}function _d(){return{"X-Save-Id":G?.id||``,"X-Profile-Id":K?.id||``}}async function vd(e,t,n=!0,r={}){return md(e,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Planner-Request":`1`,...n?_d():{}},body:JSON.stringify(t),...r})}function yd(e){zd(e),location.hash===`#`+e?V():location.hash=e}function bd(){return[...document.querySelectorAll(`textarea.notes`)].some(e=>{let t=document.querySelector(`[data-input="${e.id}"]`);return t&&e.value!==(X.notes[t.dataset.saveNote]||``)})}function xd(){return!bd()||confirm(`You have notes that have not been saved. Leave without saving those edits?`)}function Sd(e,t){let n=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:`application/json`})),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}var Cd,W,G,K,q=null,J=null,wd=`login`,Td,Y,X,Ed=`plan`,Dd=``,Od=`ground`,kd=`all`,Ad=!1,jd=!1,Md=!1,Nd=null,Pd=!1;function Fd(e){W=e}function Id(e){J=e}function Ld(e){wd=e}function Rd(e){X=e}function zd(e){Ed=e}function Bd(e){Dd=e}function Vd(e){Od=e}function Hd(e){kd=e}function Ud(e){Ad=e}function Wd(e){jd=e}function Gd(e){Md=e}function Kd(e){Nd=e}function qd(e){Pd=e}var Jd=()=>q?String(q.settings?.phase||`1`):`3`,Z=()=>{let e=X.settings.phase;return e!==`post`&&Number(e)<Number(Jd())?Jd():e},Q=()=>Z()===`post`?`5`:Z(),Yd=()=>G.id?[...[`1`,`2`,`3`,`4`,`5`].filter(e=>Number(e)>=Number(Jd())),`post`]:[`1`,`2`,`3`,`4`,`5`,`post`],Xd=e=>Object.entries(e||{}).filter(([e])=>Number(e)>=Number(Jd())),$=e=>!!X.checks[e],Zd=e=>$(e)?`checked`:``,Qd=e=>e===`post`?`Post Phase 5`:`Phase `+e;async function $d(e,t){await hd,ef(await md(`/api/context?save=`+encodeURIComponent(e)+`&profile=`+encodeURIComponent(t))),x(`#detail`).close()}function ef(e){G=e.save,K=e.profile,X=e.state,q=e.plan,Y=e.handbook||Td||Y,Dd=``,Md=!1,Nd=null,Pd=!1,jd=!1}var tf=()=>q.stages[Q()];async function nf(){try{if(W=await md(`/api/workspace`),!W.user){wd=`login`,od();return}[Y,Cd]=await Promise.all([md(`/plan.json`),md(`/progression.json`)]),Td=Y;let t=W.saves.find(e=>e.id===W.activeSave)||W.saves[0];t?(await $d(t.id,t.activeProfile),Ed=[`plan`,`factories`,`storage`,`resources`,`backup`,`profiles`,`wizard`,`account`].includes(location.hash.slice(1))?location.hash.slice(1):`plan`,Ed===`wizard`&&!J&&(Ed=`profiles`),V()):(G={id:``,name:`New save`},K={id:``,name:`Choose a profile`},X={settings:{phase:e?`1`:`3`},checks:{},notes:{},deliveries:{},customTasks:[]},q=null,Al())}catch(e){rd(),x(`#app`).innerHTML=String(b`<section class="loading">
        <h1>Could not open the planner</h1>
        <p>${e.message}</p>
        <button class="btn" id="retry">Try again</button>
      </section>`),x(`#retry`).onclick=nf}}document.addEventListener(`click`,async e=>{let t=e.target.closest(`button,a`);if(t){if(t.hasAttribute(`data-close`)&&x(`#detail`).close(),t.dataset.factory&&mc(t.dataset.factory),t.dataset.slot&&$s(t.dataset.slot),t.dataset.completeBay){let e=Gs().find(e=>e.id===t.dataset.completeBay);if(e){t.disabled=!0;try{await U({type:`checks`,keys:e.items.filter(e=>e.name).flatMap(e=>qs(e.id)),value:!0}),V(),H(`Room `+e.id+` completed. You can uncheck individual containers if needed.`)}catch{}finally{t.disabled=!1}}}if(t.dataset.floor&&(Vd(t.dataset.floor),Bd(``),V()),t.hasAttribute(`data-toggle-layout`)&&(Wd(!jd),V()),t.hasAttribute(`data-toggle-plan-edit`)&&(Gd(!Md),Kd(null),V()),t.hasAttribute(`data-toggle-factory-edit`)&&(qd(!Pd),V()),t.dataset.moveTask){let e=Lc().map(e=>e.id),n=e.indexOf(t.dataset.moveTask),r=n+Number(t.dataset.dir);if(n>=0&&r>=0&&r<e.length){[e[n],e[r]]=[e[r],e[n]];try{await U({type:`taskOrder`,phase:Z(),ids:e}),V()}catch{}}}if(t.dataset.editTask&&(Kd(t.dataset.editTask),V()),t.hasAttribute(`data-cancel-task-edit`)&&(Kd(null),V()),t.dataset.removeStep){let e=t.dataset.removeStep;if(e.startsWith(`custom-`)){if(confirm(`Delete this personal task?`))try{await U({type:`removeTask`,id:e}),V()}catch{}}else if(confirm(`Remove this step from your build plan? Its checkmark is kept and you can restore the step while editing.`))try{await U({type:`taskRemove`,id:e}),V()}catch{}}if(t.dataset.restoreTask)try{await U({type:`taskRestore`,id:t.dataset.restoreTask}),V()}catch{}if(t.dataset.removeGroup&&confirm(`Remove this group? The factories stay in the list and keep their progress.`))try{await U({type:`factoryGroupRemove`,id:t.dataset.removeGroup}),V()}catch{}if(t.dataset.unassign){let e=t.dataset.unassign,n=nc(e).filter(e=>e.group!==t.dataset.group).map(e=>({group:e.group,rate:e.rate}));try{await U({type:`factoryAssign`,key:e,groups:n}),V()}catch{}}if(t.dataset.clearSlot){t.disabled=!0;try{await U({type:`storageSlotClear`,key:t.dataset.clearSlot}),V(),H(`Container cleared. Its saved checkmarks are kept with the address.`)}catch{t.disabled=!1}}if(t.dataset.removeBay&&confirm(`Remove this added bay? Saved checkmarks for its addresses are kept.`)){t.disabled=!0;try{await U({type:`storageBayRemove`,id:t.dataset.removeBay}),V()}catch{t.disabled=!1}}if(t.dataset.removeFloor&&confirm(`Remove this added floor?`)){t.disabled=!0;try{await U({type:`storageFloorRemove`,id:t.dataset.removeFloor}),Vd(`ground`),V()}catch{t.disabled=!1}}if(t.dataset.saveNote){let e=t.closest(`dialog`);t.disabled=!0;try{await U({type:`note`,key:t.dataset.saveNote,value:document.getElementById(t.dataset.input).value}),e?.open&&e.contains(t)&&e.close(),H(`Notes saved.`)}catch{}finally{t.disabled=!1}}if(t.dataset.remove&&confirm(`Delete this personal task?`))try{await U({type:`removeTask`,id:t.dataset.remove}),V()}catch{}}}),document.addEventListener(`change`,async e=>{let t=e.target;if(t.dataset.completeSlot){let e=t.checked;t.disabled=!0;try{await U({type:`checks`,keys:qs(t.dataset.completeSlot),value:e}),V()}catch{t.checked=!e}finally{t.disabled=!1}}if(t.dataset.check){let e=t.checked;t.disabled=!0;try{await U({type:`check`,key:t.dataset.check,value:e}),V()}catch{t.checked=!e}finally{t.disabled=!1}}if(t.id===`factory-filter`&&(Hd(t.value),V()),t.id===`hide-done`&&(Ud(t.checked),V()),[`recipes`,`mainPower`,`pureIngots`].includes(t.name)&&J&&x(`#wizard-form`)&&(Ll(x(`#wizard-form`)),V()),J?.mode===`guided`&&x(`#wizard-form`)&&(String(t.name).startsWith(`guided:`)||t.name===`topup`||t.name===`topic`)&&(du(x(`#wizard-form`)),V()),J?.mode===`extraction`&&x(`#wizard-form`)&&/^(mark|clock|purity|distribution|node:|well:|used:)/.test(String(t.name))){if(_l(x(`#wizard-form`)),[`purity`,`distribution`].includes(t.name)){let e=J.settings;p(e.purity,e.distribution)&&(J.extraction=ne(e.purity,ol(J),e.distribution))}V()}if([`supplyItem`,`supplyRate`].includes(t.name)&&J&&x(`#wizard-form`)&&(Xl(t),J.mode===`guided`?du(x(`#wizard-form`)):Ll(x(`#wizard-form`)),V()),t.name===`alt`){let e=t.closest(`.alt-picker`),n=e?.querySelector(`.alt-picker-head b`);n&&(n.textContent=`Alternate recipes · ${e.querySelectorAll(`input[name=alt]:checked`).length} selected`);let r=t.closest(`.alt-row`)?.querySelector(`input[name=altpref]`);r&&(r.disabled=!t.checked,t.checked||(r.checked=!1))}if(t.dataset.bayRename){t.disabled=!0;try{await U({type:`storageBayRename`,id:t.dataset.bayRename,name:t.value})}catch{}finally{t.disabled=!1,V()}}if(t.dataset.groupRename){t.disabled=!0;try{await U({type:`factoryGroupRename`,id:t.dataset.groupRename,name:t.value})}catch{}finally{t.disabled=!1,V()}}if(t.dataset.assignAdd&&t.value){let e=t.dataset.assignAdd,n=[...nc(e).map(e=>({group:e.group,rate:e.rate})),{group:t.value,rate:null}];t.disabled=!0;try{await U({type:`factoryAssign`,key:e,groups:n})}catch{}finally{t.disabled=!1,V()}}if(t.dataset.assignRate){let e=t.dataset.assignRate,n=t.value.trim(),r=null;if(n!==``&&(r=Number(n),!Number.isFinite(r)||r<=0)){H(`Enter a rate above 0, or leave the field empty for the whole output or the remainder.`,!0),V();return}let i=nc(e).map(e=>e.group===t.dataset.group?{group:e.group,rate:r}:{group:e.group,rate:e.rate});t.disabled=!0;try{await U({type:`factoryAssign`,key:e,groups:i})}catch{}finally{t.disabled=!1,V()}}if(t.dataset.delivery){let e=q?Sc(t.dataset.delivery):Y.deliveries.find(e=>e.id===t.dataset.delivery),n=Number(t.value);if(!Number.isInteger(n)||n<0||n>e.target){H(`Enter a whole number between 0 and `+S(e.target)+`.`,!0),t.value=X.deliveries[e.id]??(K.id===`original`?e.initial:0);return}try{await U({type:`delivery`,key:e.id,value:n}),V()}catch{t.value=X.deliveries[e.id]??(K.id===`original`?e.initial:0)}}if(t.id===`import-file`&&t.files[0]){let e=t.files[0];try{if(e.size>2097152)throw Error(`Choose a backup smaller than 2 MB.`);let n=JSON.parse(await e.text());if(!confirm(`Replace current progress with this backup?`)){t.value=``;return}await hd,Rd(await md(`/api/import`,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Planner-Request":`1`,..._d()},body:JSON.stringify(n)})),V(),H(`Backup restored.`)}catch(e){H(e.message||`Could not restore backup.`,!0),t.value=``}}}),document.addEventListener(`input`,e=>{if([`factory-search`,`storage-search`,`plan-search`].includes(e.target.id)&&(Bd(e.target.value),V()),e.target.id===`alt-filter`){let t=e.target.value.trim().toLowerCase();for(let e of document.querySelectorAll(`.alt-row`))e.hidden=t!==``&&!e.dataset.altText.includes(t)}if(e.target.id===`rate-filter`){let t=e.target.value.trim().toLowerCase();for(let e of document.querySelectorAll(`.rate-row`))e.hidden=t!==``&&!e.dataset.rateText.includes(t)}[`buildRate`,`storageRate`].includes(e.target.name)&&rf()});function rf(){let e=document.querySelectorAll(`.rate-row`);if(!e.length)return;let t=e=>{let t=document.querySelector(`[name=`+e+`]`)?.value;return t!==void 0&&t!==``&&Number.isFinite(Number(t))?Number(t):null},n=t(`storageRate`),r=t(`buildRate`)??n;for(let t of e){let e=t.dataset.rateGroup===`delivered`?0:t.dataset.rateGroup===`build`?r:n,i=t.querySelector(`input`);i&&e!==null&&(i.placeholder=S(e))}}document.addEventListener(`input`,e=>{e.target?.name===`supplyItem`&&J&&(Yl(e.target),Jl(e.target))}),document.addEventListener(`keydown`,e=>{let t=e.target;if(t?.name!==`supplyItem`||!J)return;let n=t.closest(`.supply-field`)?.querySelector(`.supply-options`),r=n&&!n.hidden?[...n.querySelectorAll(`.supply-option`)]:[];if(e.key===`Escape`){r.length&&(e.preventDefault(),Xl(t));return}if(e.key===`ArrowDown`&&!r.length){Jl(t),e.preventDefault();return}if(!r.length)return;let i=r.findIndex(e=>e.getAttribute(`aria-selected`)===`true`);if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=e.key===`ArrowDown`?(i+1)%r.length:i<=0?r.length-1:i-1;r.forEach((e,n)=>e.setAttribute(`aria-selected`,String(n===t))),r[t].scrollIntoView({block:`nearest`})}else e.key===`Enter`&&(e.preventDefault(),Zl(r[i>=0?i:0]))}),document.addEventListener(`focusout`,e=>{let t=e.target;if(t?.name!==`supplyItem`)return;let n=t.closest(`.supply-field`);n&&!n.contains(e.relatedTarget)&&Xl(t)}),document.addEventListener(`submit`,async e=>{if(e.target.id===`add-task`){e.preventDefault();let t=new FormData(e.target).get(`title`).trim();if(!t)return;let n=e.target.querySelector(`button`);n.disabled=!0;try{await U({type:`addTask`,id:`custom-`+Array.from(crypto.getRandomValues(new Uint8Array(16)),e=>e.toString(16).padStart(2,`0`)).join(``),phase:Z(),title:t}),V()}catch{n.disabled=!1}}}),document.addEventListener(`submit`,async e=>{let t=e.target,n=()=>String(new FormData(t).get(`name`)||``).trim();if(t.id===`add-floor`){e.preventDefault();let t=n();if(!t)return;try{await U({type:`storageFloorAdd`,id:`cf-`+Array.from(crypto.getRandomValues(new Uint8Array(6)),e=>e.toString(16).padStart(2,`0`)).join(``),label:t}),V()}catch{}}if(t.id===`rename-floor`){e.preventDefault();let t=n();if(!t)return;try{await U({type:`storageFloorRename`,id:Od,label:t}),V()}catch{}}if(t.id===`add-bay`){e.preventDefault();let t=n();if(!t)return;let r=Ws();if(!r){H(`No free bay letters left.`,!0);return}try{await U({type:`storageBayAdd`,id:r,name:t,floor:Od}),V()}catch{}}if(t.classList.contains(`add-container`)){e.preventDefault();let r=n();if(!r)return;let i=Gs().find(e=>e.id===t.dataset.bay);if(!i)return;let a=i.items.find(e=>!e.name)?.id||(i.items.length<ve?i.id+String(i.items.length+1).padStart(2,`0`):null);if(!a){H(`This bay holds the most addresses it can. Add another bay.`,!0);return}try{await U({type:`storageSlotAssign`,key:a,name:r}),V()}catch{}}if(t.id===`add-group`){e.preventDefault();let t=n();if(!t)return;try{await U({type:`factoryGroupAdd`,id:`fg-`+Array.from(crypto.getRandomValues(new Uint8Array(6)),e=>e.toString(16).padStart(2,`0`)).join(``),name:t}),V()}catch{}}if(t.dataset.taskEdit){e.preventDefault();let n=t.dataset.taskEdit,r=new FormData(t),i=Ic().find(e=>e.id===n),a=String(r.get(`title`)||``).trim(),o=String(r.get(`body`)||``).trim(),s=String(r.get(`link`)||``);if(!a)return;try{await U({type:`taskEdit`,id:n,title:i&&a===i.title?``:a,body:i&&o===String(i.body||``).trim()?``:o,link:s===Rc(n)?``:s}),Kd(null),V()}catch{}}}),document.addEventListener(`error`,e=>{let t=e.target;t?.tagName===`IMG`&&t.classList?.contains(`item-icon`)&&(t.style.visibility=`hidden`)},!0),window.addEventListener(`hashchange`,()=>{zd([`plan`,`factories`,`storage`,`resources`,`backup`,`profiles`,`wizard`,`account`].includes(location.hash.slice(1))?location.hash.slice(1):`plan`),Bd(``),X&&V(),window.scrollTo(0,0)}),x(`#detail`).addEventListener(`click`,e=>{e.target===x(`#detail`)&&x(`#detail`).close()}),window.addEventListener(`beforeunload`,e=>{fd&&(e.preventDefault(),e.returnValue=``)}),document.addEventListener(`click`,async e=>{let t=e.target.closest(`button`);if(t){if(t.hasAttribute(`data-new-save`)&&Al(),t.dataset.newProfile&&Al(t.dataset.newProfile),t.dataset.calcFactory&&Mc(t.dataset.calcFactory),t.dataset.groupChain&&yc(t.dataset.groupChain),t.dataset.altInfo&&Cl(t.dataset.altInfo),t.hasAttribute(`data-alt-all`)||t.hasAttribute(`data-alt-none`)){let e=t.hasAttribute(`data-alt-all`),n=t.closest(`.alt-picker`);for(let t of n.querySelectorAll(`.alt-row:not([hidden]) input[name=alt]`)){t.checked=e;let n=t.closest(`.alt-row`).querySelector(`input[name=altpref]`);n&&(n.disabled=!e,e||(n.checked=!1))}n.querySelector(`.alt-picker-head b`).textContent=`Alternate recipes · ${n.querySelectorAll(`input[name=alt]:checked`).length} selected`}if(t.hasAttribute(`data-alt-best`)&&J&&!t.disabled){t.disabled=!0;let e=t.textContent;try{Ll(x(`#wizard-form`));let e=await vd(`/api/preview`,{settings:{...J.settings,recipes:`all`}},!0,zl(t,`Calculating…`));J.settings.alternateRecipes=Sl(e),V(),H(`Selected ${J.settings.alternateRecipes.length} alternate recipes the planner uses with your current settings.`)}catch(n){Bl(x(`#wizard-form`),n),t.disabled=!1,t.textContent=e}}if(t.hasAttribute(`data-round-up`)){if(!xd())return;t.disabled=!0;try{await hd;let e=await vd(`/api/round-up`,{},!0,zl(t,`Recalculating…`));Fd(e.workspace),await $d(e.saveId,e.profileId),V(),H(`Created rounded profile. `+e.reviewCount+` completed factory checks need review; previous progress is preserved.`)}catch(e){H(e.message,!0),t.disabled=!1,t.textContent=`Round up production`}}if(t.dataset.duplicateProfile){if(!xd())return;t.disabled=!0,t.textContent=`Copying…`;try{await hd;let e=await vd(`/api/duplicate-profile`,{saveId:t.dataset.duplicateSave,profileId:t.dataset.duplicateProfile});Fd(e.workspace),await $d(e.saveId,e.profileId),yd(`plan`),H(`Copy created and opened. Changes here leave the original profile untouched.`)}catch(e){H(e.message,!0),t.disabled=!1,t.textContent=`Duplicate`}}if(t.dataset.shareProfile){t.disabled=!0;try{await hd;let e=W.saves.find(e=>e.id===t.dataset.shareSave)?.profiles.find(e=>e.id===t.dataset.shareProfile);Sd(await md(`/api/export-saves?save=`+encodeURIComponent(t.dataset.shareSave)+`&profile=`+encodeURIComponent(t.dataset.shareProfile)+`&share=1`),(Ae(e?.name||`profile`)||`profile`)+`-share.json`),H(`Share file downloaded: the plan without your progress. Others import it under Backup → Import saves.`)}catch(e){H(e.message,!0)}finally{t.disabled=!1}}if(t.dataset.removeProfile){if(!xd())return;let e=W.saves.find(e=>e.id===t.dataset.removeSave),n=e?.profiles.find(e=>e.id===t.dataset.removeProfile);if(!n||!confirm(`Are you sure? Remove "`+n.name+`" and its progress and notes?`+(e.profiles.length===1?` This also removes the empty save.`:` Other profiles keep their progress.`)))return;t.disabled=!0;try{await hd,await vd(`/api/remove-profile`,{saveId:e.id,profileId:n.id,confirmed:!0}),await nf(),W.saves.length&&yd(`profiles`),H(`Profile removed.`)}catch(e){H(e.message,!0),t.disabled=!1}}if(t.dataset.openSave){if(!xd())return;t.disabled=!0;try{await hd,Fd(await vd(`/api/select`,{saveId:t.dataset.openSave,profileId:t.dataset.openProfile})),await $d(t.dataset.openSave,t.dataset.openProfile),yd(`plan`)}catch(e){H(e.message,!0),t.disabled=!1}}if(t.dataset.wizardStep&&await Vl(Number(t.dataset.wizardStep)),t.hasAttribute(`data-wizard-back`)&&await Vl(J.step-1),t.hasAttribute(`data-guided-back`)&&await uu(J.guidedStep-1),t.dataset.guidedAdvanced&&fu(Number(t.dataset.guidedAdvanced)),t.hasAttribute(`data-guided-start`)&&pu(),t.hasAttribute(`data-open-extraction`)&&bl(),t.dataset.nodePreset&&J){let e=x(`#wizard-form`);e&&_l(e),J.extraction=ne(t.dataset.nodePreset,ol(J),J.settings.distribution),J.extractionUndo=null,J.settings.purity=t.dataset.nodePreset,V(),H(`Filled in the default world at `+(g.find(([e])=>e===t.dataset.nodePreset)?.[1]||`that purity`)+`. Change any count that does not match your save.`)}if(t.hasAttribute(`data-node-reset`)&&J){let e=x(`#wizard-form`);e&&_l(e),ul(),V(),H(`Cleared. Every count is zero, your miner mark and clock are kept — and Undo reset puts it all back.`)}if(t.hasAttribute(`data-node-undo`)&&J&&(dl(),V(),H(`Put back the counts you had before the reset.`)),t.dataset.extractionStep&&await vl(Number(t.dataset.extractionStep)),t.hasAttribute(`data-extraction-back`)&&await vl(J.extractionStep-1),t.hasAttribute(`data-extraction-cancel`)&&yl(),t.dataset.supplyPick){Zl(t);return}if(t.dataset.supplyRemove&&J){let e=x(`#wizard-form`);e&&(J.mode===`guided`?du(e):Ll(e));let n=Gl(J);n.splice(Number(t.dataset.supplyRemove),1),J.settings.existingSupply=Object.fromEntries(n.filter(e=>Number(e.rate)>0).map(e=>[e.name.trim(),Number(e.rate)]).filter(([e])=>(W.catalog.supplyItems||[]).includes(e))),J.preview=null,V()}if(t.hasAttribute(`data-cancel-wizard`)&&(Id(null),yd(`profiles`)),t.dataset.authMode&&(Ld(t.dataset.authMode),od()),t.hasAttribute(`data-logout`)){if(!xd())return;await hd,await vd(`/api/logout`,{}),Ld(`login`),await nf()}}}),document.addEventListener(`submit`,async e=>{let t=e.target;if(![`wizard-form`,`auth-form`,`rename-form`].includes(t.id))return;e.preventDefault();let n=t.querySelector(`button[type="submit"]`)||t.querySelector(`button`);n.disabled=!0;try{if(t.id===`wizard-form`){let e=J;if(e.mode===`extraction`){n.disabled=!1,await vl(e.extractionStep+1);return}if(e.mode===`guided`&&e.guidedStep<=tu().length){n.disabled=!1,await uu(e.guidedStep+1);return}if(e.step<5){n.disabled=!1,await Vl(e.step+1);return}if(e.step===5){kl(t);let r=await vd(`/api/profiles`,{saveId:e.saveId,saveName:e.saveName,name:e.name,settings:e.settings,carryFrom:e.saveId?e.carryFrom:null,carry:e.carry,built:ou(e,t)},!0,zl(n,`Saving profile…`));Fd(r.workspace),await $d(r.saveId,r.profileId),Id(null),yd(`plan`);let i=[r.carriedChecks?je(r.carriedChecks,`step`)+` carried over`:``,r.reviewCount?je(r.reviewCount,`expanded production line`)+` left for review`:``].filter(Boolean).join(`; `);H(`Profile created`+(i?`: `+i+`. `:`. `)+`Your other progress is unchanged.`);return}}else if(t.id===`auth-form`){let e=Object.fromEntries(new FormData(t));e.registration=new FormData(t).has(`registration`),await vd(`/api/`+(W.accountsEnabled?wd:`setup`),e,!1),await nf()}else{Fd(await vd(`/api/rename`,Object.fromEntries(new FormData(t))));let e=W.saves.find(e=>e.id===G.id);G.name=e.name,K.name=e.profiles.find(e=>e.id===K.id).name,V()}}catch(e){if(t.id===`wizard-form`)Bl(t,e);else{let n=t.querySelector(`.form-error`);n?n.textContent=e.message:H(e.message,!0)}n.disabled=!1,t.id===`wizard-form`&&(n.textContent=J.mode===`guided`&&J.guidedStep<=tu().length?J.guidedStep>=tu().length?`Calculate plan`:`Continue →`:J.step===5?`Create profile`:J.step===4?`Calculate plan`:`Continue →`)}}),document.addEventListener(`click`,async e=>{let t=e.target.closest(`button`);if(t){if(t.hasAttribute(`data-export-saves`)){t.disabled=!0;try{await hd,Sd(await md(`/api/export-saves`),`satisfactory-full-saves.json`),Fd(await md(`/api/workspace`)),H(`Full save backup downloaded.`)}catch(e){H(e.message,!0)}finally{t.disabled=!1}}if(t.hasAttribute(`data-persist-storage`))try{H(await navigator.storage?.persist?.()?`Persistent browser storage enabled.`:`Browser did not grant persistence. Keep downloaded backups.`)}catch(e){H(e.message,!0)}}}),document.addEventListener(`change`,async e=>{if(e.target.id!==`import-saves`||!e.target.files[0])return;let t=e.target.files[0];try{if(t.size>52428800)throw Error(`Choose a save export smaller than 50 MB.`);let e=JSON.parse(await t.text());if(!confirm(`Import these saves as new copies? Existing saves will be kept.`))return;await hd,await vd(`/api/import-saves`,e,!1),await nf(),yd(`profiles`),H(`Imported saves. Existing progress was kept.`)}catch(e){H(e.message,!0)}finally{e.target.value=``}}),nf();