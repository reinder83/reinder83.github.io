import{browserMode as fo}from"./browser-api.js";var ra=new URL(".",import.meta.url);import{browserMode as ta,browserRequest as mo}from"./browser-api.js";var Ae=class extends String{},$=e=>e instanceof Ae?e:new Ae(e??""),oa=new WeakMap;function Cs(e){let t=oa.get(e);return t||(t=e.join("\0").replace(/\s*\n\s*(\/?>)/g,"$1").replace(/(<(?:textarea|pre)\b[^>]*>)[ \t]*\n/g,"$1").replace(/^\s*\n\s*|\s*\n\s*$/g,"").replace(/\s*\n\s*/g," ").split("\0"),oa.set(e,t)),t}function ia(e){return e==null||e===!1?"":e instanceof Ae?e.toString():Array.isArray(e)?e.map(ia).join(""):na(e)}function i(e,...t){let a=Cs(e),s=a[0];for(let r=0;r<t.length;r++)s+=ia(t[r])+a[r+1];return new Ae(s)}var M=e=>document.querySelector(e),na=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),c=e=>Number(e||0).toLocaleString(void 0,{maximumFractionDigits:2}),Xe=e=>Number(e||0).toLocaleString(void 0,{maximumFractionDigits:3}),le=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),kt=(e,t)=>c(e)+" "+t+(e===1?"":"s");function L(e,t,a){return i`<div class="stat">
    <span class="eyebrow">${e}</span><strong>${t}</strong><small>${a}</small>
  </div>`}var T=e=>e?i`<img
        class="item-icon"
        src="./icons/${le(String(e).replace(/\s*\([^)]*\)\s*$/,""))}.png"
        width="42"
        height="42"
        loading="lazy"
        alt=""
      />`:"";import{browserMode as no}from"./browser-api.js";import{purities as lo}from"./preferences.js";import{adaEncore as Jr,adaRemarks as Xr,adaFault as Zr}from"./ada.js";import{browserMode as eo}from"./browser-api.js";import{progression as Us}from"./progression.js";import{helpText as xt}from"./preferences.js";var St=(e,t,a)=>i`<option value="${e}" ${e===String(a)&&$("selected")}>${t}</option>`;function se(e){return xt[e]?i`<span class="setting-help" tabindex="0" aria-label="${xt[e]}"
        >ⓘ<span role="tooltip">${xt[e]}</span></span
      >`:""}var q=e=>c(e>1e3?e/1e3:e)+(e>1e3?" GW":" MW");function _(e,t,a,s="number",r=""){return i`<label class="field"
    >${e} ${se(t)}<input name="${t}" type="${s}" value="${a}" ${$(r)}
  /></label>`}function U(e,t,a,s){return i`<label class="field"
    >${e} ${se(t)}<select name="${t}">
      ${a.map(([r,o])=>St(r,o,s))}
    </select></label
  >`}var ce=new Set(["Fuel","Rocket Fuel","Nitric Acid","Turbofuel","Ionized Fuel","Dark Matter Residue","Excited Photonic Matter","Heavy Oil Residue","Alumina Solution","Sulfuric Acid","Dissolved Silica","Nitrogen Gas","Water","Crude Oil","Liquid Biofuel"]),Os=[{mark:"Mk.1",cap:60,entry:"Schematic_1-2_C"},{mark:"Mk.2",cap:120,entry:"Schematic_3-2_C"},{mark:"Mk.3",cap:270,entry:"Schematic_5-3_C"},{mark:"Mk.4",cap:480,entry:"Schematic_6-1_C"},{mark:"Mk.5",cap:780,entry:"Schematic_7-2_C"},{mark:"Mk.6",cap:1200,entry:"Schematic_9-5_C"}],Es=[{mark:"Mk.1",cap:300,entry:"Schematic_3-1_C"},{mark:"Mk.2",cap:600,entry:"Schematic_6-5_C"}],la={Plastic:{in:{"Crude Oil":30},out:{Plastic:20,"Heavy Oil Residue":10}},Rubber:{in:{"Crude Oil":30},out:{Rubber:20,"Heavy Oil Residue":20}},"Residual Fuel":{in:{"Heavy Oil Residue":60},out:{Fuel:40}},"Residual Rubber":{in:{"Polymer Resin":40,Water:40},out:{Rubber:20}},"Alternate: Heavy Oil Residue":{in:{"Crude Oil":30},out:{"Heavy Oil Residue":40,"Polymer Resin":20}},"Alternate: Diluted Fuel":{in:{"Heavy Oil Residue":50,Water:100},out:{Fuel:100}},"Alternate: Recycled Plastic":{in:{Rubber:30,Fuel:30},out:{Plastic:60}},"Alternate: Recycled Rubber":{in:{Plastic:30,Fuel:30},out:{Rubber:60}}},Ts=e=>e<=2?1:e<=4?2:e<=6?3:e<=8?4:5;function Mt(e){let t=qe?.entries.find(a=>a.id===e.entry);return t?{name:t.name,tier:t.tier,phase:Ts(t.tier),marked:D("unlock-"+t.id)}:null}function Rt(e,t){let a=e?Es:Os,s=Number(t??R()),r=a[0],o=Mt(a[0]);for(let l of a){let u=Mt(l);(!u||u.marked||u.phase<=s)&&(r=l,o=u)}let n=a[a.indexOf(r)+1];return{...r,fluid:e,unit:e?" m³/min":"/min",milestone:o,next:n?{...n,milestone:Mt(n)}:null}}function be(e,t,a){let s=Rt(t,a),r=Math.max(1,Math.ceil(e/s.cap-1e-9)),o=e-(r-1)*s.cap;return{lane:s,count:r,last:o,full:r-(o<s.cap-1e-9?1:0),spare:r*s.cap-e,word:t?"pipe":"belt"}}var Pt=(e,t)=>e>1?`1 of the ${c(e)} ${t.replace(/y$/,"ie")}s`:`1 × ${t}`;function Le([e,t,a],s){let r=i`${e!=="MW"&&T(e)}<span class="rail-main"
      ><b>${Xe(t)}${ce.has(e)?" m³":e==="MW"?" MW":""}</b
      ><small>${e==="MW"?"Power generation":e}</small></span
    >`;return a?i`<button class="rail-cell${s?" out":""}" ${a}>${r}</button>`:i`<div class="rail-cell${s?" out":""}">${r}</div>`}function At(e){let t=e.recipe;return t?i`<div class="rail-recipe">
    <div class="rail-recipe-head">
      <span>Recipe · ${t.name}</span
      ><span>what ${Pt(e.machineCount,t.machine)} makes @ 100% · per minute</span>
    </div>
    <div class="rail-recipe-body">
      <div class="rail-recipe-ins">
        ${t.ins.length?t.ins.map(a=>Le(a)):i`<div class="rail-cell">
              <span class="rail-main"><small>No belt or pipe inputs</small></span>
            </div>`}
      </div>
      <span class="rail-recipe-arrow">→</span>
      <div class="rail-recipe-outs">${t.outs.map(a=>Le(a,!0))}</div>
    </div>
  </div>`:""}function Ze(e){if(!e||!e.inputs.length&&!e.outputs.length)return"";let t=r=>{let o=r.plan,n=Math.round(r.rate/(o.count*o.lane.cap)*100),l=i`${T(r.name)}<span class="rail-main"
        ><b>${r.name}</b
        ><small ${n>=70&&$('class="hot"')}
          >${o.count} × ${o.lane.mark} ${o.word}${o.count>1&&"s"} · ${n}% load</small
        ></span
      ><span class="rail-rate">${c(r.rate)}<small>${o.lane.unit}</small></span>`;return r.link?i`<button class="rail-tile" ${r.link}>${l}</button>`:i`<div class="rail-tile">${l}</div>`},a=r=>{let o={consumer:`consumer${r.beltTxt?" · "+r.beltTxt:""}`,store:"protected module",ship:r.shipSub||"delivery",drone:"protected supply contract",sink:r.subTxt||"whole-machine rounding surplus",more:"combined smaller destinations"},n=r.link?i`<button class="rail-link" ${r.link}>${r.label} ↗</button>`:i`<b class="${r.kind==="sink"||r.kind==="more"?"dim":""}">${r.label}</b>`,l=r.mach===void 0?i`<span class="rail-mach"></span>`:i`<span class="rail-mach"
            ><b>≈ ${r.mach<.5?"<1":c(Math.ceil(r.mach-1e-9))}</b> ×
            ${e.machineName}<small
              >${c(r.mach)} at 100% · ${e.local?"build beside it":"round up"}</small
            ></span
          >`,u=r.rateTxt??(r.rate!==void 0?i`${c(r.rate)}<small>${r.unit||"/min"}</small>`:"");return i`<div class="rail-row ${r.kind}">
      ${r.icon?T(r.icon):i`<span class="rail-noicon"></span>`}<span class="rail-main"
        >${n}<small>${r.pre&&r.pre+" · "}${o[r.kind]||""}</small></span
      >${l}<span class="rail-rate">${u}</span>
    </div>`},s=e.bar&&i`${e.inputs.length>0&&i`<div class="rail-arrow">↓</div>`}
      <div class="rail-machine">
        <div class="rail-machine-main">
          <b>${c(e.machineCount)} × ${e.machineName}</b><small>${e.bar.sub}</small>
        </div>
        <div class="rail-machine-out"><b>${e.bar.outTxt}</b><small>${e.bar.outSub}</small></div>
      </div>
      ${e.outputs.length>0&&i`<div class="rail-arrow">↓</div>`}`;return i`<h3>Flow at ${G(e.stage)}</h3>
    ${At(e)}
    ${e.inputs.length>0&&i`<div class="rail-cap">
        Inputs · ${e.inputs.length} line${e.inputs.length>1&&"s"} in
      </div>
      <div class="rail-grid">${e.inputs.map(t)}</div>`}
    ${s}
    ${e.outputs.length>0&&i`<div class="rail-caps">
        <span class="rail-cap">Delivers · ${G(e.stage)}</span>${e.outputs.some(r=>r.mach!==void 0)&&i`<span class="rail-cap">Machines per delivery · ${c(e.machineCount)} total</span>`}
      </div>
      <div class="rail-rows">${e.outputs.map(a)}</div>
      ${e.bankNote}`}`}function ca(e,t="/min"){if(e.length<=10)return e;let a=e.slice(9),s=a.reduce((r,o)=>r+(o.rate||0),0);return[...e.slice(0,9),{kind:"more",label:`+ ${a.length} more destinations`,rate:s,unit:t}]}function et(e){if(!e||!e.inputs.length)return"";let t=Rt(!1,e.stage),a=Rt(!0,e.stage),s=t.next?.milestone?` ${t.next.mark} belts (${c(t.next.cap)}/min) unlock at Tier ${t.next.milestone.tier} · ${t.next.milestone.name} in Phase ${t.next.milestone.phase}.`:"",r=o=>{let n=o.plan,l=n.lane,u=o.rate/e.equivalent,d=Math.floor(l.cap/u+1e-9),h=`${n.count} × ${l.mark} ${n.word}${n.count>1?"s":""}`,k=[i`<b>${c(o.rate)}${l.unit}</b> → <b>${h}</b>${n.count>1?` — ${n.full} full + 1 carrying ${c(n.last)}${l.unit}`:` (${Math.round(o.rate/l.cap*100)}% of ${c(l.cap)}${l.unit})`}.`];if(e.machineCount>1&&k.push(d<1?`Each machine takes ${c(u)}${l.unit} — more than one ${l.mark} ${n.word} carries, so give machines dedicated feeds.`:e.machineCount>d?i`One full ${l.mark} ${n.word} feeds
                <b>${d} of the ${c(e.machineCount)} machines</b> (${c(u)}${l.unit} each) —
                plan manifold rows of ${d}.`:`One ${l.mark} ${n.word} feeds all ${c(e.machineCount)} machines (${c(u)}${l.unit} each).`),n.count>1&&n.spare>.01){let y=e.sameItemConsumers(o.name).filter(g=>g.rate<=n.spare+.01).slice(0,2).map(g=>i`<button class="btn quiet" ${g.attr}>
              ${g.label} (${c(g.rate)}${l.unit}) ↗
            </button>`);k.push(i`The last ${n.word} has <b>${c(n.spare)}${l.unit} spare</b> —
          ${y.length?i`enough to also carry ${y.flatMap((g,p)=>p?[" or ",g]:[g])} from the
              same bus`:"keep it as expansion headroom on this manifold"}.`)}return o.local&&k.push(o.local),i`<div class="logi-row">
      ${T(o.name)}
      <div><b>${o.name}</b>${k.map(y=>i`<p>${y}</p>`)}</div>
    </div>`};return i`<h3>Belts &amp; pipes</h3>
    <p class="small muted">
      ${G(e.stage)} milestones give ${t.mark} belts (${c(t.cap)}/min) and
      ${a.mark} pipes (${c(a.cap)} m³/min).${s} If a milestone is not unlocked in
      your save yet, plan with the earlier mark.
    </p>
    <div class="logi">${e.inputs.map(r)}</div>`}function da(e,t,a,s,r=!1){let o=ce.has(e.name),n=o?" m³/min":"/min",l=Math.max(a.machines-1+(a.lastClock??100)/100,.01),u=a.output/l,d=x=>`${x.count} × ${x.lane.mark} ${x.word}${x.count>1?"s":""}`,h=x=>r?void 0:x/u,k=S.factories.filter(x=>x.id!==e.id&&x.stages[t]?.inputs?.[e.name]).map(x=>{let O=x.stages[t].inputs[e.name];return{kind:"consumer",label:x.name,icon:x.name,link:i`data-factory="${x.id}"`,rate:O,unit:n,mach:h(O),beltTxt:e.local?"made on site":d(be(O,o,t))}}).sort((x,O)=>O.rate-x.rate),y=[...k];e.nuclear&&!k.length&&y.push({kind:"ship",label:"Nuclear power fleet",shipSub:"planned in Power & resources",icon:e.name,rateTxt:""}),a.storage&&y.push({kind:"store",label:"Storage refill",icon:e.name,rate:a.storage,unit:n,mach:h(a.storage)}),a.delivery&&y.push({kind:"ship",label:"Space Elevator delivery",icon:e.name,rate:a.delivery,unit:n,mach:h(a.delivery)});let g=Math.max(0,a.output-(a.demand??a.output));g>.002&&y.push({kind:"sink",label:"AWESOME Sink",icon:e.name,rate:g,unit:n});let p=r?[]:Object.entries(a.inputs||{}).map(([x,O])=>{let z=s(x),Je=z||S.factories.find(sa=>sa.name===x&&sa.stages[t]);return{name:x,rate:O,link:Je?i`data-factory="${Je.id}"`:"",plan:be(O,ce.has(x),t),local:z?i`<button class="btn quiet" data-factory="${z.id}">
                Local: ≈ ${c(Math.ceil(O/z.stages[t].rate))} × ${z.stages[t].machine} at
                this site ↗
              </button>`:""}}),w=ca(y,n),F=w.filter(x=>x.mach!==void 0&&x.kind!=="sink"),N=F.length>1?` · split ≈ ${F.map(x=>c(Math.ceil(x.mach-1e-9))).join(" / ")} across the deliveries below`:"",ae=(a.lastClock??100)<100?`@ 100% except the last at ${c(a.lastClock)}%`:"@ 100%";return{stage:t,inputs:p,outputs:w,equivalent:l,machineCount:a.machines,machineName:a.machine,local:!!e.local,recipe:r?null:{name:String(a.recipe||"").replace("Alternate: ",""),machine:a.machine,ins:p.map(x=>[x.name,x.rate/l,x.link]),outs:[[e.name,u]]},bar:r?null:{sub:`${String(a.recipe||"").replace("Alternate: ","")} · ${ae} · ${Xe(u)} ${e.name}/min out per machine${N}${e.local?" · built beside the consumers":""}`,outTxt:i`${c(a.output)}<small>${n}</small>`,outSub:e.local?"out · distributed":"out · "+d(be(a.output,o,t))},sameItemConsumers:x=>S.factories.filter(O=>O.id!==e.id&&O.stages[t]?.inputs?.[x]).map(O=>({label:O.name,rate:O.stages[t].inputs[x],attr:i`data-factory="${O.id}"`}))}}function ua(e){let t=H(),a=R(),s=Object.keys(e.outputs||{}).length>1,r=Math.max(e.equivalent||e.machines-1+(e.lastClock??100)/100||1,.01),o=p=>`${p.count} × ${p.lane.mark} ${p.word}${p.count>1?"s":""}`,n=[];for(let p of Object.keys(e.outputs||{})){let w=ce.has(p),F=w?" m³/min":"/min",N=s?p:"",ae=e.outputs[p]/r,x=O=>s?void 0:O/ae;for(let O of(t.rows||[]).filter(z=>z.id!==e.id&&z.inputs?.[p]))n.push({kind:"consumer",label:O.name,icon:Object.keys(O.outputs||{})[0]||p,link:i`data-calc-factory="${O.id}"`,rate:O.inputs[p],unit:F,pre:N,mach:x(O.inputs[p]),beltTxt:o(be(O.inputs[p],w,a))});t.storage?.[p]&&n.push({kind:"store",label:"Protected storage",icon:p,rate:t.storage[p],unit:F,pre:N,mach:x(t.storage[p])}),t.delivery?.[p]?.rate&&n.push({kind:"ship",label:"Space Elevator delivery",icon:p,rate:t.delivery[p].rate,unit:F,pre:N,mach:x(t.delivery[p].rate)}),t.drone?.[p]&&n.push({kind:"drone",label:"Drone fuel contract",icon:p,rate:t.drone[p],unit:F,pre:N,mach:x(t.drone[p])}),a==="5"&&p==="Alien Power Matrix"&&t.matrixRate&&n.push({kind:"ship",label:"Alien Power Augmenter fuel",shipSub:c(b.settings.fueledAugmenters)+" fueled augmenter"+(b.settings.fueledAugmenters>1?"s":""),icon:p,rate:t.matrixRate,unit:F,pre:N,mach:x(t.matrixRate)}),a==="5"&&p==="Singularity Cell"&&b.settings.cellsPerMinute&&n.push({kind:"ship",label:"Extra Singularity Cells",shipSub:"configured portal supply",icon:p,rate:b.settings.cellsPerMinute,unit:F,pre:N,mach:x(b.settings.cellsPerMinute)}),p==="Plutonium Fuel Rod"&&t.plutoniumSink&&n.push({kind:"sink",label:"AWESOME Sink",subTxt:"waste strategy — sink these rods",icon:p,rate:t.plutoniumSink,unit:F,pre:N}),t.surplus?.[p]>.002&&n.push({kind:"sink",label:"AWESOME Sink",icon:p,rate:t.surplus[p],unit:F,pre:N})}n.sort((p,w)=>(w.rate||0)-(p.rate||0)),!n.length&&e.generationMW&&n.push({kind:"ship",label:"Power grid",shipSub:"generation",rateTxt:q(e.generationMW)});let l=Object.entries(e.inputs||{}).map(([p,w])=>{let F=(t.rows||[]).find(N=>N.id!==e.id&&N.outputs?.[p]);return{name:p,rate:w,link:F?i`data-calc-factory="${F.id}"`:"",plan:be(w,ce.has(p),a)}}),u=Object.keys(e.outputs||{})[0],d=ca(n),h=d.filter(p=>p.mach!==void 0&&p.kind!=="sink"),k=h.length>1?` · split ≈ ${h.map(p=>c(Math.ceil(p.mach-1e-9))).join(" / ")} across the deliveries below`:"",y=e.machines-r>1e-7?"@ 100% + 1 adjustable":"@ 100%",g=Object.keys(e.outputs||{}).some(p=>(t.rows||[]).some(w=>w.id!==e.id&&w.outputs?.[p]));return{stage:a,inputs:l,outputs:d,equivalent:r,machineCount:e.machines,machineName:e.machine,local:!1,recipe:{name:e.name,machine:e.machine,ins:l.map(p=>[p.name,p.rate/r,p.link]),outs:u?Object.entries(e.outputs).map(([p,w])=>[p,w/r]):[["MW",e.generationMW/r]]},bar:{sub:`${e.name} · ${y}${u&&!s?` · ${Xe(e.outputs[u]/r)} ${u}/min out per machine`:""}${k}`,outTxt:u?i`${c(e.outputs[u])}<small>${ce.has(u)?" m³/min":"/min"}</small>`:q(e.generationMW),outSub:u?s?"out · "+u+" + byproducts":"out · "+o(be(e.outputs[u],ce.has(u),a)):"generation"},bankNote:n.length?i`<p class="small muted">
          Demand for the item across this phase's whole
          plan${g?", supplied together with the other recipes producing it":""}.
        </p>`:"",sameItemConsumers:p=>(t.rows||[]).filter(w=>w.id!==e.id&&w.inputs?.[p]).map(w=>({label:w.name,rate:w.inputs[p],attr:i`data-calc-factory="${w.id}"`}))}}import{bayCapacity as Ns,bayOfSlot as Fs,slotPosition as Is}from"./state.js";function oe(e){return Object.entries(e).filter(([,t])=>t).map(([t,a])=>t+" "+c(a)+"/min").join(" · ")}function Ot(){let e=C?.storageEdits||{};return{floors:e.floors||[],floorNames:e.floorNames||{},bays:e.bays||[],bayNames:e.bayNames||{},slots:e.slots||{},clearedSlots:e.clearedSlots||[]}}function pa(){let e=Ot();return[...[["ground","Ground floor"],["upper","Upper floor"],["workshop","Workshop"]].map(([t,a])=>({id:t,label:e.floorNames[t]||a,builtin:!0})),...e.floors.map(t=>({id:t.id,label:e.floorNames[t.id]||t.label,builtin:!1}))]}function ma(){let e=new Set([...S.storage.map(t=>t.id),...Ot().bays.map(t=>t.id)]);for(let t of"STUVXYZABCDEFGHIJKLMNOPQRW")if(!e.has(t))return t;for(let t of"ABCDEFGHIJKLMNOPQRSTUVWXYZ")for(let a of"ABCDEFGHIJKLMNOPQRSTUVWXYZ")if(!e.has(t+a))return t+a;return null}function me(){let e=Ot(),t=new Set(e.clearedSlots),a=b?new Set(Object.values(b.stages).flatMap(d=>Object.keys(d.storage||{}))):null,s=b?b.settings.collectables??b.settings.storage==="all":!0,r=(d,h)=>t.has(h)?null:e.slots[h]??d,o=d=>Object.keys(e.slots).reduce((h,k)=>Fs(k)===d?Math.max(h,Is(k)):h,8),n=(d,h)=>Array.from({length:Math.max(0,o(d)-h)},(k,y)=>{let g=d+String(h+y+1).padStart(2,"0");return{id:g,name:r(null,g)}}),l=S.storage.map(d=>({...d,name:e.bayNames[d.id]||d.name,items:[...d.items.map(h=>{let k=a?h.name&&(a.has(h.name)||["Q","R"].includes(d.id)&&s)?h.name:null:h.name;return{...h,name:r(k,h.id)}}),...n(d.id,d.items.length)]})),u=e.bays.map(d=>({id:d.id,name:e.bayNames[d.id]||d.name,floor:d.floor,custom:!0,items:n(d.id,0)}));return[...l,...u].filter(d=>d.custom||!a||d.items.some(h=>h.name))}var Ws=["built","labelled","connected","verified"],tt=e=>Ws.map(t=>"slot-"+e+"-"+t),Ct=e=>tt(e).every(D);function ha(){let e=pa();e.some(g=>g.id===X)||De(e[0].id);let t=e.find(g=>g.id===X),s=me().filter(g=>g.floor===X),r=s.filter(g=>!B||g.items.some(p=>p.name&&(p.id+" "+p.name).toLowerCase().includes(B.toLowerCase()))),o=[...r].sort((g,p)=>Math.floor((p.id.charCodeAt(0)-65)/2)-Math.floor((g.id.charCodeAt(0)-65)/2)||g.id.localeCompare(p.id)).map(g=>g.id),n=[...r].sort((g,p)=>g.id.localeCompare(p.id)),l=Array.from({length:Math.floor(o.length/2)},(g,p)=>i`<div class="aisle" style="--aisle-row:${p+1}">MAIN AISLE</div>`),u=i`<div class="tabs">
    ${e.map(g=>i`<button class="tab ${X===g.id?"active":""}" data-floor="${g.id}">
          ${g.label}
        </button>`)}
  </div>`,d=re&&i`<section class="panel edit-panel">
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
        ${!t.builtin&&i`<button
          class="btn danger"
          data-remove-floor="${t.id}"
          ${s.length>0&&$("disabled")}
        >
          ${s.length?"Remove its bays first":"Remove this floor"}
        </button>`}
      </div>
      <p class="small muted">
        Handbook bays and their addresses stay put: rename them or fill reserved positions. Added
        bays get the next free letter so container addresses and progress stay stable. A bay with no
        free position takes extra containers at 09 and upwards. Removing a container keeps its saved
        checkmarks.
      </p>
    </section>`,h=X==="ground"?E.id!=="original"?i`<div class="notice blue">
            Optional storage template. Each position has its own checklist; nothing is assumed
            built.
          </div>`:i`<div class="notice blue">
            <b>Ground floor is built.</b> The shell is marked complete. Move Gas Filters G08 → H02
            and Nobelisks H02 → H08; assign Medicinal Inhalers to G08. H01 stays Iodine-Infused
            Filter.
          </div>`:X==="upper"&&i`<div class="notice blue">
          Q sits behind O; R sits behind P. Packaged fluids only. Nuclear items and unpackaged
          fluids stay outside this room.
        </div>`,k=i`${h}
    ${B&&i`<p class="small muted">
      Filtered view: showing matching bays only. Clear search to see the full floor arrangement.
    </p>`}${n.length>0&&i`<p class="eyebrow floor-marker">REAR OF HALL ↑</p>`}
    <div class="floor-grid">
      ${l.length||n.length?i`${l}${n.map(g=>Ls(g,o.indexOf(g.id)))}`:X!=="workshop"&&i`<div class="empty-state">
            ${s.length?"No matching item on this floor. Try another floor.":"No bays on this floor yet. Use Edit layout to add one."}
          </div>`}
    </div>
    ${n.length>0&&i`<div class="entry floor-marker">↓ ENTRANCE / STAIRS</div>
      <div class="small muted">
        Within each bay, 01–04 are the rear bank; 05–08 are the front bank. Read left to right on
        both banks. Grey positions remain unassigned. Positions from 09 are containers added beyond
        the printed bay.
      </div>`}`,y=b?[{id:"calc-storage-layout",title:"Build and label the selected storage positions",body:"Use one container per selected item. Reserve its refill supply and route sinkable overflow to the AWESOME Sink; gathered items need manual replenishment."}]:S.storageTasks;return String(i`${W("ONE ITEM · ONE ADDRESS","Storage room",b?"Showing your selected storage supply across all phases. Unselected positions are reserved; addresses stay stable.":"Mark containers Done here, or complete a room after placing, labelling, connecting and checking its containers. Click an item for details. Positions match your printed storage plan.")}
      <div class="toolbar">
        ${u}<input
          id="storage-search"
          class="search"
          aria-label="Find storage on this floor"
          placeholder="Find an item or address on this floor…"
          value="${B}"
        /><button class="btn ${re?"primary":""}" data-toggle-layout>
          ${re?"Done editing":"Edit layout"}
        </button>
      </div>
      ${d}${X==="workshop"&&qs()}${k}
      <section style="margin-top:28px">
        <h2>Storage build checklist</h2>
        <div class="checklist">${y.map(at)}</div>
      </section>`)}function Ls(e,t=0){let a=e.items.filter(d=>d.name),s=a.filter(d=>Ct(d.id)).length,r=re?i`<input
        id="bay-name-${e.id}"
        class="bay-rename"
        data-bay-rename="${e.id}"
        value="${e.name}"
        maxlength="80"
        aria-label="Rename bay ${e.id}"
      />`:i`<h3>${e.name}</h3>`,o=re&&e.custom&&i`<button class="btn danger" data-remove-bay="${e.id}">Remove bay</button>`,n=re&&e.items.length<Ns&&i`<form class="inline-form add-container" data-bay="${e.id}">
      <input
        id="bay-draft-${e.id}"
        name="name"
        maxlength="120"
        required
        placeholder="${a.length<e.items.length?"Add container: item name…":"Add a position beyond "+e.items.at(-1).id+"…"}"
        aria-label="Add container to bay ${e.id}"
      /><button class="btn" type="submit">+ Add</button>
    </form>`,l=d=>B&&(d.id+" "+d.name).toLowerCase().includes(B.toLowerCase()),u=d=>d.name?i`<div class="slot ${Ct(d.id)?"done":""} ${l(d)?"match":""}">
          ${re&&i`<button
            class="slot-remove"
            data-clear-slot="${d.id}"
            aria-label="Clear container ${d.id}: ${d.name}"
          >
            ✕
          </button>`}<button
            class="slot-details"
            data-slot="${d.id}"
            aria-label="${d.id}: ${d.name}"
          >
            <strong>${d.id}</strong
            ><img
              class="item-icon"
              src="./icons/${le(d.name)}.png"
              width="48"
              height="48"
              loading="lazy"
              alt=""
            /><span>${d.name}</span></button
          ><label class="slot-complete"
            ><input
              type="checkbox"
              data-complete-slot="${d.id}"
              aria-label="Complete ${d.id}: ${d.name}"
              ${Ct(d.id)&&$("checked")}
            />Done</label
          >
        </div>`:i`<div class="slot empty"><strong>${d.id}</strong><span>Reserved</span></div>`;return i`<section
    class="bay"
    style="--bay-row:${Math.floor(t/2)+1};--bay-col:${t%2?3:1}"
  >
    <header class="bay-head"><span class="bay-letter">${e.id}</span>${r}</header>
    <div class="bay-actions">
      <span class="small muted">${s}/${a.length} containers done</span
      ><span
        >${o}
        <button
          class="btn quiet"
          data-complete-bay="${e.id}"
          ${(!a.length||s===a.length)&&$("disabled")}
        >
          Complete room ${e.id}
        </button></span
      >
    </div>
    <div class="bay-items">
      ${e.items.map((d,h)=>i`${h===4&&i`<div class="walkway">BAY WALKWAY</div>`}${h===8&&i`<div class="walkway added">ADDED POSITIONS</div>`}${u(d)}`)}
    </div>
    ${n}
  </section>`}function qs(){return i`<div class="panel">
    <span class="eyebrow">GROUND-FLOOR REAR EXTENSION</span>
    <h2 style="margin-top:10px">Workshop beneath Q/R</h2>
    <p>
      The upper floor gets the new storage bays; the space underneath becomes your crafting area. No
      existing production-container addresses change.
    </p>
    <div class="checklist">
      ${[["bench","Craft Bench and Equipment Workshop","Side by side near the entrance."],["tools","Tools and mobility equipment","Personal boxes on the left wall."],["weapons","Weapons and spare wearables","Personal boxes on the right wall. Ammo and filters stay in G/H."],["mam","MAM and inventory drop","Rear wall, with collected items routed to Q/R. Finish the sorter at a recovery chest."]].map(([t,a,s])=>at({id:"workshop-"+t,title:a,body:s}))}
    </div>
  </div>`}var Ds=[["built","Container placed"],["labelled","Sign and address labelled"],["connected","Correct supply connected"],["verified","Flow and overflow verified"]];function fa(e){let t=me().find(o=>o.items.some(n=>n.id===e)),a=t?.items.find(o=>o.id===e);if(!a?.name)return;fe({type:"slot",id:e});let s=b?H().rows?.find(o=>o.outputs[a.name]):S.factories.find(o=>o.name===a.name),r=Number(e.slice(t.id.length));he(a.name,`${e} · ${pa().find(o=>o.id===t.floor)?.label||t.floor} · Bay ${t.id}`,i`<p>
        <b>${t.name}</b><br />${r<=4?"Rear":"Front"} bank, position
        ${(r-1)%4+1} from the left on the floor plan.
      </p>
      <div class="check-columns">
        ${Ds.map(([o,n])=>i`<label class="check-row"
              ><input
                type="checkbox"
                data-check="slot-${e}-${o}"
                ${$(Z("slot-"+e+"-"+o))}
              />${n}</label
            >`)}
      </div>
      ${s?i`<div class="detail-actions">
            <button
              class="btn"
              ${$(b?"data-calc-factory":"data-factory")}="${s.id}"
            >
              Open production target →
            </button>
          </div>`:i`<p class="small muted">
            Collected or completion item. Reserve its own supply; this storage position does not add
            production capacity.
          </p>`}
      <h3>Container notes</h3>
      <textarea id="detail-note" class="notes" maxlength="6000" aria-label="Container notes">
${C.notes["slot-"+e]||""}</textarea
      >
      <div class="note-save">
        <span class="small muted">Belt source, splitter setting or remaining work.</span
        ><button class="btn" data-save-note="slot-${e}" data-input="detail-note">
          Save notes
        </button>
      </div>`,a.name)}var Et=e=>["Plastic","Rubber"].includes(e.name)?"oil":e.nuclear?"nuclear":null;function xe(){let e=C?.factoryGroups||{};return{groups:e.groups||[],assignments:e.assignments||{}}}var Q=e=>xe().assignments[e]||[];function Nt(e,t,a,s,r="/min"){let o=Q(e),n=o.find(d=>d.group===t);if(!n||o.length===1&&n.rate==null)return"";let l=n.rate==null?Math.max(0,a-o.reduce((d,h)=>d+(h.rate||0),0)):n.rate,u=a>0?Math.min(1,l/a):0;return i`<div class="small allocation">
    ${n.rate==null?"Remaining here: ":"Here: "}${c(l)}${r} of
    ${c(a)}${r}${s>0&&u<1&&` · ≈ ${c(s*u)} of ${c(s)} machines`}
  </div>`}function Ft(e){let t=xe();if(!t.groups.length)return i`<p class="small muted">Create a group above to place this factory.</p>`;let a=Q(e),s=t.groups.filter(o=>!a.some(n=>n.group===o.id)),r=o=>t.groups.find(n=>n.id===o.group)?.name;return i`<div class="assign-editor">
    ${a.map(o=>i`<div class="assign-row">
          <span>${r(o)||""}</span
          ><input
            type="number"
            min="0"
            step="any"
            data-assign-rate="${e}"
            data-group="${o.group}"
            placeholder="all / remainder"
            value="${o.rate??""}"
            aria-label="Production per minute in ${r(o)||"this group"}"
          /><button
            class="btn quiet danger"
            data-unassign="${e}"
            data-group="${o.group}"
            aria-label="Remove from ${r(o)||"group"}"
          >
            ✕
          </button>
        </div>`)}${s.length>0&&a.length<12&&i`<select data-assign-add="${e}" aria-label="Add to a group">
      <option value="">+ Add to group…</option>
      ${s.map(o=>i`<option value="${o.id}">${o.name}</option>`)}
    </select>`}
  </div>`}function It(){return i`<section class="panel edit-panel">
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
  </section>`}function Wt(e,t,a){return i`${xe().groups.map(s=>{let r=e.filter(o=>Q(t(o)).some(n=>n.group===s.id));return!r.length&&!K?"":i`<section class="site-group user-group">
      <header class="site-head">
        <div>
          <span class="eyebrow"
            >FACTORY GROUP · ${r.length}
            ${r.length===1?"FACTORY":"FACTORIES"}</span
          >${K?i`<input
                class="bay-rename"
                data-group-rename="${s.id}"
                value="${s.name}"
                maxlength="80"
                aria-label="Rename group ${s.name}"
              />`:i`<h2>${s.name}</h2>`}
        </div>
        ${K?i`<button class="btn danger" data-remove-group="${s.id}">Remove group</button>`:r.length>1&&i`<button class="btn" data-group-chain="${s.id}">Build order ↗</button>`}
      </header>
      <div class="cards">
        ${r.length?r.map(o=>a(o,s.id)):i`<div class="empty-state">
              Empty group. Add factories with the group selector on their cards.
            </div>`}
      </div>
    </section>`})}`}function Lt(){return i`<button class="btn ${K?"primary":""}" data-toggle-factory-edit>
    ${K?"Done editing":"Edit groups"}
  </button>`}function Tt(e,t=null){let a=e.stages[R()],s="factory-"+R()+"-"+e.id;return i`<article class="factory-card ${D(s)?"done":""}">
    <div class="card-top">
      <span class="card-icon">${T(e.name)}</span>
      <div class="card-main">
        <button class="name" data-factory="${e.id}">${e.name}</button>
        <div class="output">${c(a.output)} <span>/min</span></div>
      </div>
      ${e.local?i`<span class="badge">Local</span>`:e.conversion&&i`<span class="badge orange">Convert</span>`}
    </div>
    <div class="recipe">${a.recipe.replace("Alternate: ","")}</div>
    <div class="small">
      ${a.machines?`${c(a.machines)} × ${a.machine}`:"See shared oil campus"}
      <span class="muted">· storage ${c(a.storage)}/min</span>
    </div>
    ${t&&Nt(e.id,t,a.output,a.machines)}
    <footer>
      <label class="check-row"
        ><input type="checkbox" data-check="${s}" ${$(Z(s))} />Running</label
      ><button class="btn quiet" data-factory="${e.id}">Details ↗</button>
    </footer>
    ${K&&Ft(e.id)}
  </article>`}function ga(e,t){if(!t.length)return"";let a=S.plans[R()],s=e==="oil"?"Oil campus":"Nuclear site",r=e==="oil"?`One shared machine set produces these outputs together: ${c(a.oil.reduce((o,n)=>o+n.machines,0))} buildings · crude ${c(a.oilTotals.crude)}/min · water ${c(a.oilTotals.water)}/min. Open a card for the shared recipe table.`:"Build and balance this radioactive chain as one site at the power plants. Process buffers stay here; the general storage surplus does not apply.";return i`<section class="site-group">
    <header class="site-head">
      <div>
        <span class="eyebrow">SHARED SITE · ${t.length} OUTPUTS</span>
        <h2>${s}</h2>
      </div>
      <p class="small muted">${r}</p>
    </header>
    <div class="cards">${t.map(o=>Tt(o))}</div>
  </section>`}var js=[["all","All factories"],["todo","Not running yet"],["done","Running"],["local","Made beside consumers"]];function ba(){let e=S.factories.filter(n=>n.stages[R()]).filter(n=>(n.name+" "+n.stages[R()].recipe).toLowerCase().includes(B.toLowerCase())).filter(n=>ke==="all"||ke==="todo"&&!D("factory-"+R()+"-"+n.id)||ke==="done"&&D("factory-"+R()+"-"+n.id)||ke==="local"&&n.local),t=e.filter(n=>!Q(n.id).length),a=t.filter(n=>!Et(n)),s=t.filter(n=>Et(n)==="oil"),r=t.filter(n=>Et(n)==="nuclear"),o=Wt(e,n=>n.id,(n,l)=>Tt(n,l));return String(i`${W("PRODUCTION LIBRARY","Factory targets","Outputs include downstream supply, protected storage and elevator exports. Click a factory for its inputs and expansion history.")}
      ${P()==="post"&&i`<div class="notice">
        These are retained Phase 5 capacities, not mandatory post-game output rates. Give new
        storage items priority before committing all spare output to sinks.
      </div>`}
      <div class="toolbar">
        <input
          id="factory-search"
          class="search"
          placeholder="Find a part or recipe…"
          aria-label="Find a factory"
          value="${B}"
        /><select id="factory-filter" aria-label="Factory status">
          ${js.map(([n,l])=>i`<option value="${n}" ${ke===n&&$("selected")}>${l}</option>`)}</select
        ><span class="small muted">${e.length} targets</span>${Lt()}
      </div>
      ${K&&It()} ${o}
      ${ga("oil",s)}${ga("nuclear",r)}
      ${(o.length>0||s.length>0||r.length>0)&&a.length>0&&i`<p class="eyebrow">UNGROUPED FACTORIES</p>`}
      <div class="cards">
        ${a.length?a.map(n=>Tt(n)):!e.length&&i`<div class="empty-state">No factories match this filter.</div>`}
      </div>
      ${P()==="post"&&zs()}`)}function zs(){return i`<section style="margin-top:32px">
    <h2>Additional completion modules</h2>
    <div class="notice">
      These recipe inputs are additional to the main resource budget. Allocate their supply first.
      Gathered feedstock and byproducts still need handling.
    </div>
    <div class="completion-grid">
      ${S.completion.filter(e=>e.name.toLowerCase().includes(B.toLowerCase())).map(e=>i`<article class="completion-item">
              <label class="check-row"
                ><input
                  type="checkbox"
                  data-check="completion-${e.id}"
                  ${$(Z("completion-"+e.id))}
                /><strong>${e.name}</strong></label
              >
              <p>
                ${c(e.output)}/min · ${c(e.machines)} ${e.machine} · last at
                ${c(e.lastClock)}%<br />${e.recipe}
              </p>
              <p>
                <b>Inputs:</b> ${oe(e.inputs)}${Object.keys(e.byproducts).length>0&&i`<br /><b>Byproducts:</b> ${oe(e.byproducts)}`}
              </p>
            </article>`)}
    </div>
  </section>`}function he(e,t,a,s=""){let r=M("#detail");r.innerHTML=String(i`<header class="dialog-head">
        <div class="dialog-title">
          ${s&&i`<span class="dialog-icon">${T(s)}</span>`}
          <div>
            <div class="eyebrow">${t}</div>
            <h2>${e}</h2>
          </div>
        </div>
        <button class="close" aria-label="Close details" data-close>×</button>
      </header>
      <div class="dialog-body">${a}</div>`),r.open||r.showModal()}function ya(e){let t=S.factories.find(h=>h.id===e);if(!t)return;fe({type:"factory",id:e});let a=t.stages[R()]||Object.values(t.stages)[0],s=["Plastic","Rubber"].includes(t.name),r={},o=Object.entries(t.stages).map(([h,k])=>{let y=s?(S.plans[h]?.oil||[]).reduce((N,ae)=>N+ae.machines,0):0,g=s?y:k.machines,p=s?"shared campus buildings":k.machine,w=r[p]||0,F=Math.max(0,g-w);return r[p]=Math.max(w,g),i`<tr>
      <td>${h}</td>
      <td>${c(k.output)}</td>
      <td>${c(k.storage)}</td>
      <td>${c(g)} ${p}</td>
      <td>${F?`+${c(F)}`:"Keep capacity"}</td>
    </tr>`}),n=t.stages[R()]?R():Object.keys(t.stages)[0],l=h=>S.factories.find(k=>k.local&&k.name===h&&k.stages[n]),u=da(t,n,a,l,s),d="factory-"+n+"-"+t.id;he(t.name,`${G(n)} · Handbook page ${t.page}`,i`<span class="badge orange">${a.recipe}</span>
      <div class="stats">
        ${L("Output",c(a.output)+"/min","Total production")}
        ${L("Storage",c(a.storage)+"/min","Protected allowance")}
        ${L("Machines",s?"Campus":c(a.machines),s?"Shared oil processes":a.machine)}
      </div>
      ${t.note&&i`<div class="notice blue">${t.note}</div>`}
      ${t.local&&i`<div class="notice">
        Distributed production budget: build these machines beside the consumers listed below, plus
        the storage refill module. Independent site rounding can require additional machines.
      </div>`}
      ${Ze(u)}${Hs(t,n)}
      ${t.nuclear&&i`<div class="notice">
        Process buffer at the nuclear site. Keep radioactive recycling flows balanced; do not apply
        a generic storage surplus.
      </div>`}
      ${s?Gs(n):i`${et(u)}
            <p class="small muted">
              ${c(a.machines)} whole buildings. All at 100%, except the last at
              ${c(a.lastClock)}%. Peak production load ${c(a.peakMW)} MW; upstream factories and
              logistics are
              separate.${Object.keys(a.inputs).some(l)&&" Local inputs are produced beside this factory; their machines are part of the shared distributed budget."}
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
            ${o}
          </tbody>
        </table>
      </div>
      <p class="small muted">
        Keep larger earlier installed capacity. Recipe changes need their new input routes. Counts
        are running requirements, not a demolition
        instruction.${s&&" Campus buildings are shared with the other polymer export and produce both together; the shared oil campus stages above list machines per recipe. Phase 4 replaces the simple Phase 3 refineries with the recycled loops."}
      </p>
      <div class="detail-actions">
        <label class="check-row"
          ><input type="checkbox" data-check="${d}" ${$(Z(d))} />Running at Phase
          ${n} target</label
        >
      </div>
      <h3>Factory notes</h3>
      <textarea id="detail-note" class="notes" maxlength="6000" aria-label="Factory notes">
${C.notes["factory-"+t.id]||""}</textarea
      >
      <div class="note-save">
        <span class="small muted">Location, transport, next expansion.</span
        ><button class="btn" data-save-note="factory-${t.id}" data-input="detail-note">
          Save notes
        </button>
      </div>`,t.name)}function Hs(e,t){let a=e.stages[t],s=S.factories.some(o=>o.id!==e.id&&o.stages[t]?.inputs?.[e.name]),r=P()==="post"?S.completion.filter(o=>o.inputs?.[e.name]):[];return i`${s||a.delivery?"":e.nuclear?i`<p class="small muted">
          ${e.name} is consumed by the nuclear power fleet, which is planned in
          <a href="#resources">Power &amp; resources</a> rather than as a factory target. Keep its
          flow inside the nuclear site.
        </p>`:a.storage?i`<p class="small muted">
            No factory in this plan consumes ${e.name} directly; this capacity only refills the
            protected storage. The refill rate is a protected maximum, not continuous consumption —
            the machines idle once the container is full and only run while you take ${e.name} out.
          </p>`:""}${r.length>0&&i`<p class="small muted">
    Additional completion modules also use ${e.name}:
    ${r.map(o=>o.name+" "+c(o.inputs[e.name])+"/min").join(" · ")}. Allocate
    their supply on top of this factory's budget.
  </p>`}`}var st=(e,t)=>e.flatMap((a,s)=>s?[t,a]:[a]);function Gs(e){let t=S.plans[e],a=t.oil.map(l=>({...l,rc:la[l.recipe]||{in:{},out:{}}})),s=l=>{let u=be(l,!0,e);return`${u.count} × ${u.lane.mark} pipe${u.count>1?"s":""}`},r=S.factories.find(l=>!["plastic","rubber"].includes(l.id)&&l.stages[e]?.inputs?.Fuel),o=i`<div class="rail-cap">Campus inputs</div>
    <div class="rail-grid">
      ${[["Crude Oil",t.oilTotals.crude],["Water",t.oilTotals.water]].filter(([,l])=>l>.01).map(([l,u])=>i`<div class="rail-tile">
              ${T(l)}<span class="rail-main"><b>${l}</b><small>${s(u)}</small></span
              ><span class="rail-rate">${c(u)}<small> m³/min</small></span>
            </div>`)}
    </div>`,n=a.map(l=>{let u=g=>Object.entries(l.rc[g]).map(([p,w])=>`${c(w*l.equivalent)}${ce.has(p)?" m³":""} ${p}`).join(" + "),d=Object.keys(l.rc.out).map(g=>{let p=a.filter(w=>w!==l&&w.rc.in[g]).map(w=>`the ${w.recipe.replace("Alternate: ","")} ${w.machine.replace(/y$/,"ie")}s`);return(g==="Plastic"||g==="Rubber")&&p.push("campus export"),g==="Fuel"&&(Number(t.oilTotals.generators)>0?p.push(`${c(t.oilTotals.generators)} Fuel Generators (${c(t.oilTotals.grossGW)} GW gross)`):t.oilTotals.fuel>.01&&p.push(i`export
              ${c(t.oilTotals.fuel)}/min${r&&i` to
                <button class="btn quiet" data-factory="${r.id}">
                  ${r.name} ↗
                </button>`}`)),p.length?i`${g} → ${st(p," + ")}`:""}).filter(g=>g.length),h=Math.floor(l.equivalent+1e-7),k=l.equivalent-h,y=k>1e-7?`${c(h)} at 100% + 1 at ≈ ${c(k*100)}%`:"all at 100%";return i`<div class="rail-arrow">↓</div>
      <div class="rail-machine">
        <div class="rail-machine-main">
          <b>${c(l.machines)} × ${l.machine}</b
          ><small>${l.recipe} · ${y} · in ${u("in")||"—"} · out ${u("out")}</small>
        </div>
      </div>
      <div class="rail-recipe">
        <div class="rail-recipe-head">
          <span>Recipe · ${l.recipe.replace("Alternate: ","")}</span
          ><span>what ${Pt(l.machines,l.machine)} makes @ 100% · per minute</span>
        </div>
        <div class="rail-recipe-body">
          <div class="rail-recipe-ins">${Object.entries(l.rc.in).map(g=>Le(g))}</div>
          <span class="rail-recipe-arrow">→</span>
          <div class="rail-recipe-outs">
            ${Object.entries(l.rc.out).map(g=>Le(g,!0))}
          </div>
        </div>
      </div>
      ${d.length>0&&i`<p class="small muted">${st(d,i`<br />`)}</p>`}`});return i`<h3>Shared oil campus · ${G(e)}</h3>
    <p>
      One campus makes Plastic and Rubber together. Crude never feeds the polymer machines
      directly${e==="3"?": the standard refineries turn it into the polymers plus Heavy Oil Residue, which becomes generator fuel.":": it becomes Heavy Oil Residue and Polymer Resin first, and the polymers come out of the fuel-driven recycled loops."}
      Build the stages in this order; recipe cells are per machine at 100%, per minute.
    </p>
    <p class="small muted">
      Flow rates here stay exactly balanced instead of rounded up: unpackaged fluids cannot overflow
      to the AWESOME Sink, and the loops feed themselves, so surplus fluid would back the chain up.
      Machine counts are whole — only each stage's last machine runs underclocked.
    </p>
    ${o}${n}
    <p>
      ${e==="3"?`Burn all ${c(t.oilTotals.fuel)} Fuel/min in ${t.oilTotals.generators} generators (last underclocked), giving ${c(t.oilTotals.grossGW)} GW gross. This additional Phase 3 byproduct power is not counted in later capacity totals.`:i`Export ${c(t.oilTotals.fuel)} Fuel/min; remaining fuel and recycled polymers are
            internal flows. <b>Seeding the loops:</b> run the Residual Rubber Refineries from resin
            first, feed that rubber with fuel into Recycled Plastic, then bring Recycled Rubber
            online — open the campus exports only once both loops are saturated.`}
    </p>`}function Bs(e){if(b)return(H().rows||[]).filter(s=>Q(s.id).some(r=>r.group===e)).map(s=>({id:s.id,attr:i`data-calc-factory="${s.id}"`,name:s.name,machine:s.machine,machines:s.machines,inputs:s.inputs||{},outputs:s.outputs||{},mw:s.generationMW}));let t=R();return S.factories.filter(a=>a.stages[t]&&Q(a.id).some(s=>s.group===e)).map(a=>{let s=a.stages[t];return{id:a.id,attr:i`data-factory="${a.id}"`,name:a.name,machine:s.machine,machines:s.machines,inputs:s.inputs||{},outputs:{[a.name]:s.output},recipe:s.recipe}})}function va(e){let t=xe().groups.find(y=>y.id===e);if(!t)return;fe({type:"group",id:e});let a=Bs(e);if(!a.length)return he(t.name,"Factory group · build order",i`<p class="small muted">
        No factories from this group produce anything in the current phase.
      </p>`);let s=y=>a.filter(g=>g.outputs[y]),r=[],o=new Set,n=new Map,l=[...a];for(;l.length;){let y=l.findIndex(w=>Object.keys(w.inputs).every(F=>s(F).every(N=>o.has(N.id)||N===w))),g=!1;if(y<0){let w=1/0;y=0,l.forEach((F,N)=>{let ae=Object.keys(F.inputs).filter(x=>s(x).some(O=>!o.has(O.id)&&O!==F)).length;ae<w&&(w=ae,y=N)}),g=!0}let p=l.splice(y,1)[0];g&&n.set(p.id,Object.keys(p.inputs).filter(w=>s(w).some(F=>!o.has(F.id)&&F!==p))),r.push(p),o.add(p.id)}let u=new Map(r.map((y,g)=>[y.id,g+1])),d=b?H().rows||[]:S.factories.filter(y=>y.stages[R()]).map(y=>({id:y.id,name:y.name,inputs:y.stages[R()].inputs||{}})),h=r.map((y,g)=>{let p=n.get(y.id)||[],w=Object.entries(y.inputs).map(([N,ae])=>{let x=s(N).filter(z=>z!==y),O=p.includes(N)?i`<b class="chain-loop">loop — seed a starter batch</b>`:x.length?"stage "+Math.min(...x.map(z=>u.get(z.id))):"outside the group";return i`${N} ${c(ae)}${ce.has(N)?" m³":""}/min
        <span class="muted">· ${O}</span>`}),F=Object.keys(y.outputs).map(N=>{let ae=a.filter(z=>z!==y&&z.inputs[N]).map(z=>`stage ${u.get(z.id)} · ${z.name}`),x=d.filter(z=>z.id!==y.id&&z.inputs?.[N]&&!a.some(Je=>Je.id===z.id)).length,O=[...ae];return x&&O.push(`${x} ${x===1?"factory":"factories"} outside the group`),`${N} → ${O.join(" · ")||"storage, export or sink"}`});return i`<div class="chain-stage">
      <span class="chain-no">${String(g+1).padStart(2,"0")}</span>
      <div class="chain-body">
        <div class="chain-title">
          <button class="rail-link" ${y.attr}>${y.name} ↗</button
          ><span class="muted">${c(y.machines)} × ${y.machine}</span>
        </div>
        ${w.length?i`<p class="small"><b>Needs</b><br />${st(w,i`<br />`)}</p>`:i`<p class="small muted">No belt or pipe inputs.</p>`}
        <p class="small">
          <b>Feeds</b><br />${F.length?st(F,i`<br />`):y.mw?"Power grid":"—"}
        </p>
      </div>
    </div>`}),k=a.some(y=>Q(y.id).some(g=>g.group===e&&g.rate!=null));he(t.name,`Factory group · build order · ${G(R())}`,i`<p class="small muted">
        Stages are ordered so suppliers come before their consumers. An input marked <b>loop</b> is
        produced by a later stage: run that stage from a starter batch first, then close the loop.
      </p>
      <div class="chain">${h}</div>
      ${k&&i`<p class="small muted">
        Rates are the whole plan’s totals; this group’s production split is shown on the factory
        cards.
      </p>`}`)}function $a(){let e=ye(),t=e.filter(d=>D(d.id)).length,a=e.find(d=>!D(d.id)),s=e.length?Math.round(t/e.length*100):100,r=S.factories.filter(d=>d.stages[R()]),o=r.filter(d=>D("factory-"+R()+"-"+d.id)).length,n=me().flatMap(d=>d.items).filter(d=>d.name),l=n.filter(d=>D("slot-"+d.id+"-verified")).length,u=(d,h)=>i`${d} <span class="fraction">/ ${h}</span>`;return String(i`${W("THE NEXT BUILD",G(P())+" field plan",P()==="post"?"Storage first. Keep the network running, then finish the remaining items.":"Build the supply chain in order. Check off each step when it is verified in your save.","YOUR SAVE · YOUR PACE")}
      <div class="stats">
        ${L("Phase checklist",u(t,e.length),"Steps completed")}
        ${L("Factory targets",u(o,r.length),"Marked running at this phase")}
        ${L("Storage ready",u(l,n.length),"Item positions verified")}
        ${L("Planned power",i`${c(S.power[R()])} <span class="fraction">GW</span>`,"Gross capacity at this stage")}
      </div>
      <div class="split">
        <section>
          <div class="section-head">
            <h2>Build sequence</h2>
            <span class="head-tools"
              ><span class="small muted">${s}% complete</span> ${rt()}</span
            >
          </div>
          <div class="progress-track"><span style="width:${s}%"></span></div>
          ${ot(e)}${it()}
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
${C.notes["phase-"+P()]||""}</textarea
            >
            <div class="note-save">
              <span class="small muted">Saved only when you click Save notes.</span
              ><button class="btn" data-save-note="phase-${P()}" data-input="phase-note">
                Save notes
              </button>
            </div>
          </section>
        </section>
        <aside class="side-panels">
          <section class="panel next-card">
            <div class="step-no">${a?"NEXT UNFINISHED STEP":"PHASE CHECKLIST COMPLETE"}</div>
            <h2>${a?.title||"Ready for the next phase"}</h2>
            <p>
              ${a?.body||"Verify the delivery, then choose your next phase using the selector above."}
            </p>
            <a class="btn primary full" href="#factories">Open factory targets →</a>
          </section>
          <section class="panel">
            <h2>${P()==="post"?"Post-game priority":"Elevator delivery"}</h2>
            ${P()==="post"?i`<p>
                    Protect the storage allowances. Reduce former elevator exports when the new
                    completion factories need those resources. Sink the remaining surplus.
                  </p>
                  <a class="btn" href="#factories">Completion modules →</a>`:S.deliveries.filter(d=>d.phase===P()).map(qt)}
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
      </div>`)}function qt(e){let t=C.deliveries[e.id]??(E.id==="original"?e.initial:0);return i`<div class="delivery">
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
      /><small>/ ${c(e.target)}</small>
    </div>
    <div class="progress-track">
      <span style="width:${Math.min(100,t/e.target*100)}%"></span>
    </div>
    <span class="small muted"
      >${e.rate?`${c(e.rate)}/min net · ${c(Math.max(0,e.target-t)/e.rate)} minutes remaining`:"Phase 3 delivery already complete"}</span
    >
  </div>`}function ka(e){let t=Object.entries(H().delivery||{}).find(([a])=>e===R()+"-"+le(a));return t?{id:e,name:t[0],...t[1],initial:0}:null}function xa(){let e=H(),t=Us(b,C,qe,P());return[...R()==="1"?[t.baseTasks[0],...t.powerTasks.slice(0,2),...t.baseTasks.slice(1,5),...t.milestoneTasks,...t.powerTasks.slice(2),...t.baseTasks.slice(5)]:[...t.powerTasks,...t.milestoneTasks],...t.hardDrives,...(e.rows||[]).map(s=>({id:"calc-"+R()+"-"+s.id,title:s.name,body:`${Ce(s).summary} ${Ce(s).partial?"Adjustable machine: ≈ "+c(Ce(s).clock)+"% → ≈ "+Ce(s).lastOutput+". Open factory details for an easier rounded option.":"Each machine: "+Ce(s).fullOutput+"."} ${s.amplified?`Insert ${s.slots} somersloop${s.slots>1?"s":""} in each machine — ${s.sloops} in total — for double output from the same inputs at four times the power. `:""}Inputs /min: ${Object.entries(s.inputs).map(([r,o])=>r+" "+c(o)).join(", ")||"none"}. Outputs /min: ${Object.entries(s.outputs).map(([r,o])=>r+" "+c(o)).join(", ")||q(s.generationMW)}.`})),{id:"calc-"+R()+"-storage",title:"Connect protected storage and overflow",body:"Reserve the listed storage refill rates before elevator exports. Handle every liquid byproduct; send surplus sinkable solids to the AWESOME Sink after unlocking it."},...t.retire||[]]}function Dt(e,t){let a=[];return e.shortfalls?.length&&a.push(`Raise the short budget${e.shortfalls.length>1?"s":""} (Resources): ${e.shortfalls.map(s=>`${s.name} to about ${c(s.needed)}/min (entered: ${c(s.budget)}/min)`).join("; ")}.`),e.wholeMachinesOnly&&a.push("Keep these budgets instead: untick “Run solid-part machines at 100%” (Goals). Precise balancing fits, with one adjustable machine per production line."),e.minHours?a.push(t?.goal==="timed"?`Raise “Hours per phase” (Goals) to at least ${c(e.minHours)} h.`:`Switch the goal (Goals) to “Target completion time” with at least ${c(e.minHours)} hours per phase.`):e.shortfalls?.length&&!e.wholeMachinesOnly&&a.push(t?.goal==="maximum"?"Lower the protected storage refill rate, drone-fuel supply or extra Singularity Cells (Preferences).":`More time alone will not fit: lower the protected storage refill rate, drone-fuel supply or extra Singularity Cells (Preferences)${t?.roundRates?", or untick delivery-rate rounding (Goals)":""}.`),e.shortfalls?.length&&t?.recipes==="standard"&&a.push("Allow alternate recipes (Preferences) to cut raw resource use."),e.shortfalls?.length&&t?.sam==="avoid"&&a.push("Allow SAM resource conversion (Preferences) to turn plentiful resources into the short ones."),a.length?i`<p><b>Options</b></p>
        <ul>
          ${a.map(s=>i`<li>${s}</li>`)}
        </ul>`:""}function jt(){let e=H(),t=e.feasible?"":Dt(e,b?.settings);return i`${!e.feasible&&i`<div class="notice">
    <b>Planning draft — resource budget exceeded or recipe combination unavailable.</b>
    ${e.reason}${t&&i`${t}
      <p class="small">
        Profiles are calculated snapshots: create a new profile with adjusted settings to apply an
        option.
      </p>`}
  </div>`}${e.additionalHeadroomMW>.01&&i`<div class="notice">
    Allow another ${q(e.additionalHeadroomMW)} for whole-building power headroom. Phase 1 needs
    biomass or existing generation.
  </div>`}`}function Sa(){let e=H(),t=ye(),a=t.filter(s=>D(s.id)).length;return String(i`${W("CALCULATED BUILD SEQUENCE",G(P()),E.name)}
      ${jt()}
      <div class="stats">
        ${L("Progress",a+"/"+t.length,"Checklist steps")}
        ${L("Delivery time",c(e.hours)+" h","At steady state; excludes construction")}
        ${L("Buildings",c(e.rows?.reduce((s,r)=>s+r.machines,0)),"Includes new power generation")}
        ${L("New power",q(e.generationMW),"Existing spare power is separate")}
      </div>
      ${P()==="post"&&i`<div class="notice blue">
        Retain these Phase 5 capacities. Prioritize storage and teleporter supply; reduce former
        elevator exports as needed and sink spare parts.
      </div>`}
      <div class="split">
        <section>
          <div class="section-head">
            <h2>Build sequence</h2>
            ${rt()}
          </div>
          <p class="small muted">
            Start with construction stock and currently available power. Mark HUB, MAM and recipe
            unlocks as you complete them; these carry across phases. Milestone cost guidance updates
            from factories marked running. Full-phase factory targets follow the startup and unlock
            steps.
          </p>
          ${ot(t)}${it()}
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
${C.notes["phase-"+P()]||""}</textarea
          >
          <button class="btn" data-save-note="phase-${P()}" data-input="phase-note">
            Save notes
          </button>
        </section>
        <aside>
          <section class="panel">
            <h2>Elevator delivery</h2>
            ${Object.entries(e.delivery||{}).map(([s,r])=>qt({id:R()+"-"+le(s),name:s,...r,initial:0}))}
          </section>
          <section class="panel">
            <h2>Profile assumptions</h2>
            ${b.warnings.map(s=>i`<p class="small">${s}</p>`)}
          </section>
        </aside>
      </div>`)}function wa(e,t=null){let a=Object.values(e.outputs||{})[0]||0,s=Object.entries(e.outputs).map(([o,n])=>`${o}: ${c(n)}/min`),r="calc-"+R()+"-"+e.id;return i`<article class="factory-card">
    <div class="card-top">
      <span class="card-icon">${T(Object.keys(e.outputs)[0])}</span>
      <div class="card-main">
        <button class="name" data-calc-factory="${e.id}">${e.name}</button>
        <div class="output">${c(e.machines)} <span>${e.machine}</span></div>
      </div>
    </div>
    <p>
      ${s.length?s.flatMap((o,n)=>n?[i`<br />`,o]:[o]):q(e.generationMW)}
    </p>
    ${t&&Nt(e.id,t,a||e.generationMW,e.machines,a?"/min":" MW")}
    <footer>
      <label class="check-row"
        ><input type="checkbox" data-check="${r}" ${$(Z(r))} />Running</label
      ><button class="btn quiet" data-calc-factory="${e.id}">Details ↗</button>
    </footer>
    ${K&&Ft(e.id)}
  </article>`}function Ma(){let e=H(),t=(e.rows||[]).filter(r=>(r.name+" "+Object.keys(r.outputs).join(" ")).toLowerCase().includes(B.toLowerCase())),a=t.filter(r=>!Q(r.id).length),s=Wt(t,r=>r.id,(r,o)=>wa(r,o));return String(i`${W("CALCULATED PRODUCTION","Factory targets","Each recipe line includes its inputs, whole buildings and later expansion. Multiple recipes for a part can share one site.")}
      ${b.settings.wholeMachines?i`<div class="notice blue">
            Whole-machine production: protect downstream supply first, refill storage, then sink
            surplus solids. Liquid and nuclear balances remain controlled.
          </div>`:i`<div class="notice blue">
            Prefer extra production over underclocking?
            <button class="btn primary" data-round-up>Round up production</button>
            <p>
              Creates a recalculated profile revision. Your previous profile stays available;
              increased factory requirements are marked for review.
            </p>
          </div>`}
      ${jt()}
      <div class="toolbar">
        <input
          id="factory-search"
          class="search"
          aria-label="Find a factory"
          placeholder="Find a part or recipe…"
          value="${B}"
        /><span>${t.length} production lines</span>${Lt()}
      </div>
      ${K&&It()}${s}${s.length>0&&a.length>0&&i`<p class="eyebrow">UNGROUPED PRODUCTION LINES</p>`}
      <div class="cards">${a.map(r=>wa(r))}</div>`)}function Ce(e){let t=e.equivalent||e.machines-1+e.lastClock/100,a=Math.floor(t+1e-7),s=Math.max(0,t-a),r=s>1e-7,o=Object.fromEntries(Object.entries(e.outputs||{}).map(([k,y])=>[k,y/t])),n=Object.entries(o).map(([k,y])=>`${c(y)} ${k}/min`).join(" · ")||`${c(e.generationMW/t)} MW`,l=Object.entries(o).map(([k,y])=>`${c(y*s)} ${k}/min`).join(" · ")||`${c(e.generationMW/t*s)} MW`,u=`${e.machines} ${e.machine} total: ${r?(a?a+" at 100% + ":"")+"1 adjustable machine":a+" at 100% (no underclock needed)"}.`,d=/uranium|plutonium|ficsonium|waste|non-fissile/i.test([e.name,...Object.keys(e.inputs||{}),...Object.keys(e.outputs||{})].join(" ")),h=null;if(r&&!d){let k=Math.ceil(s*100-1e-7),y=Object.entries(o)[0];if(y){let p=Math.ceil(y[1]*s-1e-7),w=p/y[1]*100;w<=100&&Math.abs(w-Math.round(w))<1e-7&&(k=Math.max(k,Math.round(w)))}let g=k/100-s;g>1e-7&&(h={clock:k,output:Object.fromEntries(Object.entries(o).map(([p,w])=>[p,w*k/100])),inputs:Object.fromEntries(Object.entries(e.inputs||{}).map(([p,w])=>[p,w/t*g])),extraOutputs:Object.fromEntries(Object.entries(o).map(([p,w])=>[p,w*g]))})}return{summary:u,whole:a,partial:r,fullOutput:n,lastOutput:l,clock:s*100,easy:h}}function _s(e){let t=Ce(e);return i`<h3>Machine setup</h3>
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
        ${t.whole>0&&i`<tr>
          <td>${t.whole} full-speed</td>
          <td>100%</td>
          <td>${t.fullOutput}</td>
        </tr>`}${t.partial&&i`<tr>
          <td>1 adjustable</td>
          <td>≈ ${c(t.clock)}%</td>
          <td>≈ ${t.lastOutput}</td>
        </tr>`}
      </tbody>
    </table>
    ${t.easy&&!b?.settings.wholeMachines&&i`<div class="notice blue">
      <b>Easier optional setting: set only the adjustable machine to ${t.easy.clock}%.</b>
      <p>
        Its output:
        ${oe(t.easy.output)||c(e.generationMW/(e.equivalent||1)*t.easy.clock/100)+" MW"}.
      </p>
      <p>
        Extra inputs needed: ${oe(t.easy.inputs)}.<br />Extra outputs/byproducts:
        ${oe(t.easy.extraOutputs)||"Additional generation"}.
      </p>
      <p>
        This is extra capacity, not a recalculated balanced plan. Supply the extra inputs and handle
        every extra output before using it. The totals below remain the original calculated targets.
      </p>
    </div>`}
    ${t.partial&&i`<p class="small muted">
      Calculated percentages and outputs are displayed rounded. Keep the calculated setting for
      tightly balanced recycling; do not round nuclear or waste-processing lines independently.
    </p>`}`}function Ys(e){let t=0,a=Aa(b.stages).map(([s,r])=>{let o=r.rows?.find(l=>l.id===e)?.machines||0,n=Math.max(0,o-t);return t=Math.max(t,o),i`<tr>
      <td>${s}</td>
      <td>${o||"—"}</td>
      <td>${n?"+"+n:"—"}</td>
    </tr>`});return i`${a}`}function Ra(e){let t=H().rows?.find(r=>r.id===e);if(!t)return;let a=ua(t),s=Object.keys(t.outputs||{})[0]||"";he(t.name,G(P()),i`${Ze(a)}${_s(t)}${et(a)}
      <h3>Outputs per minute</h3>
      <p>${oe(t.outputs)||q(t.generationMW)}</p>
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
          ${Ys(e)}
        </tbody>
      </table>
      <p class="small muted">
        The optimizer may choose a different recipe in another phase. Keep earlier buildings until
        the replacement chain runs. Screws and wire can be made beside consumers.
      </p>
      <textarea id="detail-note" class="notes" maxlength="6000" aria-label="Factory notes">
${C.notes["factory-"+e]||""}</textarea
      >
      <button class="btn" data-save-note="factory-${e}" data-input="detail-note">
        Save notes
      </button>`,s)}function Pa(){let e=H(),t=b.settings,a=e.conversions||[];return String(i`${W("CHECK BEFORE EXPANDING","Power & resources","New production and new generator fuel are included. Existing fuel consumption must already be deducted from your entered budgets.")}
      ${jt()}
      <div class="stats">
        ${L("New generation",q(e.generationMW),"Fuel and recycling included")}
        ${L("Whole-machine peak",q(e.peakMW),"At selected consumption multiplier")}
        ${L("With utility allowance",q(e.requiredMW),(t.utilityPercent??20)+"% for transport and utilities; verify actual load")}
        ${L("Existing spare power",q(t.availablePowerGW*1e3),"Not total installed generation")}
        ${e.sloopsUsed>0&&L("Somersloops in production",c(e.sloopsUsed),"Amplified machines: double output, four times the power")}
        ${e.augmenters>0&&L("With augmenter boost",q(e.availableMW),c(e.augmenters)+" augmenter"+(e.augmenters>1?"s":"")+" · "+c(e.augmenterMW)+" MW plus "+Math.round(e.boost*100)+"% of base production")}
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
            ${v.catalog.raw.map(s=>i`<tr>
                  <td class="resource-name">${T(s)}<span>${s}</span></td>
                  <td>${c(e.raw?.[s])}</td>
                  <td>${c(t.limits[s])}</td>
                  <td class="${(e.raw?.[s]||0)>t.limits[s]?"warn":""}">
                    ${c(t.limits[s]-(e.raw?.[s]||0))}
                  </td>
                </tr>`)}
          </tbody>
        </table>
      </div>
      <div class="backup-grid">
        <section class="panel">
          <h2>Dedicated drone fuel /min</h2>
          <p>${oe(e.drone||{})||"No dedicated drone fuel in this phase."}</p>
          <h2>Protected storage /min</h2>
          <p>${oe(e.storage||{})||"No storage production requested."}</p>
          <h2>From production you already run</h2>
          <p>${oe(e.supplied||{})||"None credited in this phase."}</p>
          ${Object.keys(e.supplied||{}).length>0&&i`<p class="small muted">
            The plan does not build these lines or the chain behind them. Their extraction is
            assumed to be outside the budgets above.
          </p>`}
        </section>
        <section class="panel">
          <h2>Conversion and byproducts</h2>
          <p>
            ${a.length?a.flatMap((s,r)=>r?[i`<br />`,s]:[s]):"No raw-resource conversion required."}
          </p>
          <p>Plutonium rods to sink: ${c(e.plutoniumSink)}/min.</p>
          <p>Surplus solids: ${oe(e.surplus||{})||"None"}</p>
          <p class="small muted">
            Liquid and radioactive material balances are enforced. Do not let storage or overflow
            block recycling.
          </p>
        </section>
      </div>`)}function Se(){let e=C?.taskEdits||{};return{order:e.order||{},removed:e.removed||[],titles:e.titles||{},bodies:e.bodies||{},links:e.links||{}}}function Ks(e){let t=Se(),a=new Set(t.removed),s=e.filter(n=>!a.has(n.id)).map(n=>({...n,title:t.titles[n.id]||n.title,body:t.bodies[n.id]||n.body})),r=t.order[P()];if(!r?.length)return s;let o=new Map(r.map((n,l)=>[n,l]));return[...s.filter(n=>o.has(n.id)).sort((n,l)=>o.get(n.id)-o.get(l.id)),...s.filter(n=>!o.has(n.id))]}function nt(){return b?[...xa(),...C.customTasks.filter(e=>e.phase===P())]:sr()}function ye(){return Ks(nt())}var je=e=>e.match(/^calc-(?:[1-5]|post)-(.+)$/)?.[1]||"";function Vs(e){let t=Se().links[e.id]||je(e.id);if(!t)return"";if(b){let s=(H().rows||[]).find(r=>r.id===t);return s?i`<button class="btn quiet task-link" data-calc-factory="${s.id}">
          Open factory: ${s.name} ↗
        </button>`:""}let a=S.factories.find(s=>s.id===t&&s.stages[R()]);return a?i`<button class="btn quiet task-link" data-factory="${a.id}">
        Open factory: ${a.name} ↗
      </button>`:""}function Qs(e){let t=b?(H().rows||[]).map(s=>[s.id,s.name]):S.factories.filter(s=>s.stages[R()]).map(s=>[s.id,s.name]),a=Se().links[e.id]||je(e.id);return i`<form class="task task-edit" data-task-edit="${e.id}">
    <label class="field"
      >Step title<input name="title" maxlength="240" required value="${e.title}"
    /></label>
    <label class="field"
      >Details<textarea name="body" class="notes" maxlength="6000">${e.body||""}</textarea>
    </label>
    <label class="field"
      >Linked factory<select name="link">
        <option value="">No linked factory</option>
        ${t.map(([s,r])=>i`<option value="${s}" ${s===a&&$("selected")}>${r}</option>`)}
      </select></label
    >
    <div class="task-edit-actions">
      <button class="btn primary" type="submit">Save step</button>
      <button class="btn" type="button" data-cancel-task-edit>Cancel</button>
    </div>
    <p class="small muted">
      Restore the original text by clearing a field. The step keeps its checkmark either way.
    </p>
  </form>`}var Js={production:'<path d="M3 20.5h18M5.5 20.5v-9l4 2.6v-2.6l4 2.6v-2.6l4 2.6v6.4M17.5 9.2V4h2.2v5.2"/>',build:'<path d="M3.5 3.5h17v17h-17zM3.5 9.2h17M3.5 14.8h17M9.2 3.5v17M14.8 3.5v17"/>',power:'<path d="M13.4 2.5 4.8 13.6h5.3l-.9 7.9 8.6-11.1h-5.3z"/>',biomass:'<path d="M20.5 3.5C9.5 3.5 4 8.8 4 14.8a5.2 5.2 0 0 0 5.2 5.2c6 0 11.3-5.5 11.3-16.5Z"/><path d="M5.5 19C9 13 13.2 9.7 18.5 7.4"/>',nuclear:'<circle cx="12" cy="12" r="1.9"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(120 12 12)"/>',fluid:'<path d="M12 3.2c4 5 6.4 8.1 6.4 11a6.4 6.4 0 1 1-12.8 0c0-2.9 2.4-6 6.4-11Z"/>',milestone:'<rect x="4" y="10.4" width="16" height="10.6" rx="1.4"/><path d="M8.2 10.4V7.2A3.9 3.9 0 0 1 16 6.6"/><path d="M12 14.3v3"/>',research:'<path d="M9.4 3.2v6.4l-4.8 8.6A2 2 0 0 0 6.3 21.2h11.4a2 2 0 0 0 1.7-3L14.6 9.6V3.2"/><path d="M7.9 3.2h8.2M7.3 15.2h9.4"/>',harddrive:'<rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="12" cy="12" r="3.3"/><circle cx="12" cy="12" r=".5"/>',storage:'<rect x="3.2" y="5.6" width="17.6" height="13.4" rx="1.2"/><path d="M3.2 10.4h17.6M12 10.4V19M7.6 5.6v4.8M16.4 5.6v4.8"/>',delivery:'<path d="M12 2.4c3 2.7 4.7 6.4 4.7 10.5v3H7.3v-3C7.3 8.8 9 5.1 12 2.4Z"/><path d="M7.3 12.8 4 15.6v3.6l3.3-1.7M16.7 12.8 20 15.6v3.6l-3.3-1.7M10.4 21.3h3.2"/><circle cx="12" cy="9.4" r="1.6"/>',logistics:'<path d="M3.5 17.5h5.2a4.2 4.2 0 0 0 4.2-4.2v-2.6a4.2 4.2 0 0 1 4.2-4.2h3.4"/><path d="m17.4 3.4 3.1 3.1-3.1 3.1"/>',portal:'<circle cx="12" cy="12" r="8.8"/><circle cx="12" cy="12" r="4.4"/><path d="M12 3.2v2.6M12 18.2v2.6M3.2 12h2.6M18.2 12h2.6"/>',survey:'<circle cx="10.6" cy="10.6" r="6.6"/><path d="m15.4 15.4 5.1 5.1"/>',retire:'<circle cx="12" cy="12" r="8.8"/><path d="m5.8 5.8 12.4 12.4"/>',note:'<path d="m4 20.2.9-4.2L16 4.9l3.3 3.3L8.2 19.3z"/><path d="m14.4 6.5 3.3 3.3"/>'},Xs=[[/^custom-/,"note"],[/^recipe-unlock-|^hard-drives-/,"harddrive"],[/^retire-/,"retire"],[/^portal-supply/,"portal"],[/^drone-fuel-/,"logistics"],[/^startup-(?:biomass|solid-biofuel|burner-bank)/,"biomass"],[/^startup-nuclear-/,"nuclear"],[/^startup-aluminum-/,"fluid"],[/^startup-\d+-power-review$|^startup-coal-unlock$|^startup-fuel-|^preferred-power-/,"power"],[/^early-base-hub$/,"build"],[/^early-base-logistics$/,"logistics"],[/^early-base-reserves$/,"storage"],[/^early-base-/,"production"]],Zs=[[/retire|dismantle|decommission/,"retire"],[/portal/,"portal"],[/nuclear|uranium|plutonium|ficsonium|radioactive/,"nuclear"],[/drone/,"logistics"],[/deliver|elevator/,"delivery"],[/survey|verify|resilience|review|\btest\b/,"survey"],[/power|generator|fuel|coal/,"power"],[/storage|container/,"storage"],[/unlock|milestone|research/,"milestone"],[/logistic|belt|train|sorter|collectable/,"logistics"],[/aluminum|water/,"fluid"],[/concrete|construction|foundation|workshop|hub/,"build"]];function er(e){let t=e.id||"";if(t.startsWith("unlock-"))return/^mam:/i.test(e.title||"")?"research":"milestone";for(let[s,r]of Xs)if(s.test(t))return r;let a=(t+" "+(e.title||"")).toLowerCase();for(let[s,r]of Zs)if(s.test(a))return r;return"production"}function tr(e){let t=Se().links[e.id]||je(e.id);if(!t)return"";if(b){let s=(H().rows||[]).find(r=>r.id===t);return s&&Object.keys(s.outputs||{})[0]||""}let a=S.factories.find(s=>s.id===t&&s.stages[R()]);return a?a.name:""}function Ca(e){let t=tr(e);if(t)return i`<span class="task-icon" data-kind="item" aria-hidden="true"
      >${T(t)}</span
    >`;let a=er(e);return i`<span class="task-icon" data-kind="${a}" aria-hidden="true"
    ><svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${$(Js[a])}
    </svg></span
  >`}function at(e){if(J&&ct===e.id)return Qs(e);let t=J&&i`<span class="task-tools"
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
    >`;return i`<article class="task ${J?"is-editing":""}">
    <input
      type="checkbox"
      data-check="${e.id}"
      aria-label="Complete: ${e.title}"
      ${$(Z(e.id))}
    />${Ca(e)}
    <details data-task="${e.id}">
      <summary>${e.title}</summary>
      <p>${e.body||"Your own task for this phase."}</p>
      ${Vs(e)}${e.id.startsWith("custom-")&&!J&&i`<button class="delete-task" data-remove="${e.id}">Delete personal task</button>`}
    </details>
    ${t}
  </article>`}function rt(){return i`<button class="btn ${J?"primary":""}" data-toggle-plan-edit>
    ${J?"Done editing":"Edit steps"}
  </button>`}function ar(e){let t=B.trim().toLowerCase();return e.filter(a=>(!lt||!D(a.id))&&(!t||(a.title+" "+(a.body||"")).toLowerCase().includes(t)))}function ot(e){let t=ar(e),a=e.length?B.trim()?"No steps match this search.":"Every step of this phase is completed. Untick “Hide completed” to review them.":"Every step of this phase is removed. Use Removed steps below to restore them.";return i`${e.length>0&&i`<div class="checklist-tools">
      <input
        id="plan-search"
        class="search"
        placeholder="Find a step…"
        aria-label="Find a step"
        value="${B}"
      /><label class="check-row small"
        ><input type="checkbox" id="hide-done" ${lt&&$("checked")} />Hide completed</label
      ><span class="small muted"
        >${t.length!==e.length&&t.length+" of "+e.length+" steps"}</span
      >
    </div>`}
    <div class="checklist">
      ${t.length?t.map(at):i`<div class="empty-state">${a}</div>`}
    </div>`}function it(){if(!J)return"";let e=new Set(Se().removed),t=nt().filter(a=>e.has(a.id));return t.length?i`<details class="panel removed-steps">
    <summary>Removed steps in this phase (${t.length})</summary>
    ${t.map(a=>i`<div class="removed-step">
          <span>${Ca(a)}${a.title}</span
          ><button class="btn quiet" data-restore-task="${a.id}">Restore</button>
        </div>`)}
  </details>`:""}function sr(){return[...S.phases[P()],...C.customTasks.filter(e=>e.phase===P())]}import{browserMode as jr}from"./browser-api.js";import{GUIDED_TOPUP_RATE as Qt,guidedQuestions as Jt,guidedStandingQuestion as zr,guidedTopupItems as as,storageOptions as Hr,tutorialKeys as Gr}from"./preferences.js";import{browserMode as Oa}from"./browser-api.js";function Ea(){return Oa?dt():b?rr():String(i`${zt()}
      ${W("YOUR PROGRESS","Backup & notes","Progress is stored on the server, so the same Docker instance works across your devices.")}
      <div class="backup-grid">
        <section class="panel">
          <h2>Download a backup</h2>
          <p>Save a copy of your checkmarks, delivery counts, personal tasks and notes.</p>
          <a
            class="btn primary"
            href="/api/export?save=${j.id}&profile=${E.id}"
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
${C.notes.global||""}</textarea
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
          ${S.sources.map(e=>i`<a href="${e.url}" target="_blank" rel="noreferrer">${e.title} ↗</a>`)}
        </div>
      </section>`)}function ge(){return i`<div class="notice blue">
    Your saves stay in this browser on this device. Clearing site data or using private browsing can
    remove them. Export a full backup before switching devices or website addresses.
    <a href="#backup">Backups & transfer</a>
  </div>`}function zt(){return i`<section class="panel">
    <h2>Full saves & transfer</h2>
    <p>
      Export all your saves, profile calculations, checkmarks and notes. Account passwords and
      sessions are excluded. Import adds copies without replacing existing saves.
    </p>
    <button class="btn primary" data-export-saves>Export all saves</button>
    <label class="btn"
      >Import saves<input id="import-saves" type="file" accept="application/json,.json" hidden
    /></label>
  </section>`}function dt(){return String(i`${W("SAVED ON THIS DEVICE","Backups & transfer","No account or server is needed. Saves do not sync automatically between browsers.")}
      ${ge()} ${zt()}
      <section class="panel">
        <h2>Keep a backup</h2>
        <p>
          ${v.lastBackup?"Last export: "+new Date(v.lastBackup).toLocaleString():"No full backup has been exported from this browser yet."}
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
      </section>`)}function rr(){return Oa?dt():String(i`${zt()}
      ${W("THIS PROFILE","Backup & notes","Checkmarks, deliveries and notes belong to "+j.name+" / "+E.name)}
      <div class="backup-grid">
        <section class="panel">
          <h2>Download progress</h2>
          <a
            class="btn primary"
            href="/api/export?save=${j.id}&profile=${E.id}"
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
${C.notes.global||""}</textarea
        >
        <button class="btn" data-save-note="global" data-input="global-note">Save notes</button>
      </section>
      <section class="panel">
        <h2>Calculation assumptions</h2>
        ${b.warnings.map(e=>i`<p>${e}</p>`)}
        <a href="https://github.com/greeny/SatisfactoryTools" target="_blank" rel="noreferrer"
          >Recipe data source</a
        >
      </section>`)}import{browserMode as Qa}from"./browser-api.js";import{distributions as kr,droneFuels as xr,GUIDED_TOPUP_RATE as Sr,powerOptions as Mr,purities as Rr,resourceDefaults as Ja,storageOptions as Pr,storageRateFor as Ar,wantsStorage as Cr}from"./preferences.js";import{carryOptions as Bt,pickedRecipeUnlocks as Or}from"./state.js";import{browserMode as or}from"./browser-api.js";import{blankCounts as Ia,blankExtraction as ir,clockChoices as nr,distributions as lr,extractionLimits as cr,knownWorld as dr,matchingPreset as ur,minedResources as Wa,minerMarks as pr,nodePresets as mr,nodeYield as La,presetPurities as hr,purities as Ta,purities3 as ut,resourcePool as Na,richShape as Fa,startingSurvey as fr,wellYield as qa}from"./preferences.js";var Ht=["How you mine","Ore nodes","Resource wells","Your budgets"],gr="https://satisfactory-calculator.com/en/interactive-map";function Me(e){return e.extraction||(e.extraction=e.settings.extraction?structuredClone(e.settings.extraction):fr(e.settings)),e.extraction}var br=(e,t,a)=>ut.map(([s,r])=>i`<label class="field count-cell"
        ><span>${r}</span
        ><input
          name="${e}:${t}:${s}"
          type="number"
          min="0"
          max="10000"
          step="1"
          value="${a[s]||0}"
          aria-label="${r} ${t} ${e==="well"?"well satellites":"nodes"}"
      /></label>`);function Gt(e,t,a){let s=e==="well"?a.wells:a.nodes;return i`<div class="count-table">
    ${t.map(r=>{let o={...Ia(),...s[r]||{}},n=e==="well"?ut.reduce((l,[u])=>l+(Number(o[u])||0)*qa(u,a),0):ut.reduce((l,[u])=>l+(Number(o[u])||0)*La(r,u,a),0);return i`<div class="count-row">
        <span class="count-name">${T(r)}<span>${r}</span></span>
        ${br(e,r,o)}
        <span class="count-total">${n?c(Math.round(n))+"/min":"—"}</span>
      </div>`})}
  </div>`}var Da=()=>{let e=m.settings,t=Me(m),a=dr(e.purity,e.distribution),s=e.distribution==="randomized"&&!a&&hr.includes(e.purity),r=ur(t),o=(mr.find(([u])=>u===r)||[,""])[1],n=e.distribution==="randomized"?" Random moves nodes around the map; as far as the community has established, it does not change how many of each resource there are. Nitrogen wells are left for you: a well is randomized whole and the map’s wells hold different numbers of satellites, so a shuffle can still leave you more or less nitrogen than the default map.":"",l;return a&&r===e.purity?l=i`<p class="small">
      The counts below are the map's node totals at <b>${o}</b>.${n} Change any that
      do not match your save.
    </p>`:a?l=i`<p class="small">
      Your world's node counts are known for these settings.
      <button type="button" class="btn quiet" data-node-preset="${e.purity}">
        Fill in the counts below
      </button>
    </p>`:s?l=i`<div class="notice">
      <b>Only the purity split is missing.</b> Random shuffles which resource sits at each location,
      so your world holds the same number of nodes for each resource as the default map — but it
      shuffles their purities too, and
      <b>${(Ta.find(([u])=>u===e.purity)||[,""])[1]}</b> keeps whatever split the
      shuffle produced. How many are impure, normal and pure is therefore yours to count. If you
      actually chose All Pure, Average or All Impure, pick that above and the counts fill
      in.${r&&i` The counts below are still the map's totals at <b>${o}</b> — the totals are right,
        the split is not.`}
    </div>`:l=i`<div class="notice">
      <b>No preset for these settings.</b>
      ${Fa[e.distribution]?i`A resource-rich distribution changes how many nodes each resource has, and the
          players who have counted these worlds get answers a third apart from one seed to the next
          — so filling anything in here would be a guess wearing a number.
          ${Fa[e.distribution]} Which way it goes is consistent; how far is not.`:"A random or hand-set purity has no fixed split to rearrange."}
      Count yours on the map linked on the first screen, or upload your save there and it will count
      them for
      you.${r&&i` The counts below are still the <b>map's totals at ${o}</b>, so check them against
        your save.`}
    </div>`,i`<div class="node-presets">
    <span class="eyebrow">Your world settings ${se("nodePresets")}</span>
    <div class="form-grid">
      ${U("Resource node randomization","distribution",lr,e.distribution)}
      ${U("Resource node purity","purity",Ta,e.purity)}
    </div>
    ${l}
    <p class="small">
      ${m.extractionUndo?i`<button type="button" class="btn quiet" data-node-undo>Undo reset</button>
            <span class="muted"
              >Every count was cleared. This puts back what was there before.</span
            >`:i`<button type="button" class="btn quiet" data-node-reset>
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
  </div>`};function ja(){let e=Me(m);m.extractionUndo=JSON.parse(JSON.stringify(e)),m.extraction={...ir(),mark:e.mark,clock:e.clock}}function za(){m.extractionUndo&&(m.extraction=m.extractionUndo,m.extractionUndo=null)}function Ha(){let e=m,t=Me(e),a=e.extractionStep,s=[yr,vr,$r,wr][a-1]?.(e,t),r=a>=Ht.length;return String(i`${or&&ge()}
      ${W("YOUR WORLD","Work out your resource budgets","Count what your world holds; the planner turns it into the rates it plans against.")}
      <div class="wizard-progress">
        ${Ht.map((o,n)=>i`<button
              type="button"
              class="${a===n+1?"current":""}"
              data-extraction-step="${n+1}"
              ${a===n+1&&$('aria-current="step"')}
            >
              ${n+1}. ${o}
            </button>`)}
      </div>
      <form id="wizard-form" class="panel wizard-panel extraction-panel">
        ${s}
        <div class="wizard-actions">
          <button type="button" class="btn" data-extraction-back>
            ${a<=1?"Cancel":"Back"}
          </button>
          <span class="guided-escape"
            >${a>1&&i`<button type="button" class="btn quiet" data-extraction-cancel>
              Leave these budgets alone
            </button>`}
            <button class="btn primary" type="submit">
              ${r?"Use these budgets":"Continue →"}
            </button></span
          >
        </div>
        <p id="wizard-error" class="form-error" role="alert"></p>
      </form>`)}function yr(e,t){let a=(s,r)=>c(Math.round(La(s,r,t)));return i`<h2>Where your numbers come from</h2>
    <div class="notice blue">
      <b>You do not have to count nodes by hand.</b> Open the
      <a href="${gr}" target="_blank" rel="noreferrer"
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
      ${U("Miner","mark",pr.map(([s,r])=>[String(s),r]),String(t.mark))}
      ${U("Clock speed","clock",nr.map(([s,r])=>[String(s),r]),String(t.clock))}
    </div>
    <div class="notice">
      <b>At these settings</b> one iron node gives ${a("Iron Ore","impure")}/min impure,
      ${a("Iron Ore","normal")}/min normal and ${a("Iron Ore","pure")}/min pure. A crude
      oil node gives ${a("Crude Oil","normal")}/min normal, and one resource-well satellite
      ${c(Math.round(qa("normal",t)))}/min.
    </div>`}function vr(e,t){return i`<h2>Your ore nodes</h2>
    ${Da()}
    <p>
      How many nodes of each purity your world holds for each ore. ${se("extractionNodes")} Zero
      means zero: a purity your world has none of, or an ore you have not found. Whatever you leave
      at zero, the plan cannot mine — so enter everything you intend to work.
    </p>
    ${Gt("node",Wa,t)}`}function $r(e,t){return i`<h2>Resource wells</h2>
    ${Da()}
    <p>
      Crude oil comes from ordinary nodes and from resource wells; nitrogen only from wells.
      ${se("extractionWells")}
    </p>
    <h3>Crude oil nodes</h3>
    ${Gt("node",["Crude Oil"],t)}
    <h3>Resource well satellites</h3>
    ${Gt("well",["Crude Oil","Nitrogen Gas"],t)}
    <div class="notice blue">
      ${T("Water")} <b>Water is not counted.</b> Extractors sit on any lake or ocean and
      there is far more coastline than a factory can draw on, so a node count would be a fiction.
      The planner keeps its standing water allowance of ${c(e.settings.limits.Water)}/min, which
      you can still change in All settings if you want to model a genuinely constrained site.
    </div>`}function wr(e,t){let a=[...Wa,"Crude Oil","Nitrogen Gas"],s=a.filter(r=>Na(t,r)<=0);return i`<h2>Your budgets</h2>
    <p>
      What those nodes yield, less anything already committed to factories this plan does not
      include. That deduction is what makes a budget mean <em>free for this plan to use</em>.
      ${se("extractionUsed")}
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
          ${a.map(r=>{let o=Math.round(Na(t,r)),n=Number(t.used?.[r])||0,l=Math.max(0,o-n);return i`<tr>
              <td class="resource-name">${T(r)}<span>${r}</span></td>
              <td class="number">${o?c(o):"—"}</td>
              <td>
                <input
                  class="used-input"
                  name="used:${r}"
                  type="number"
                  min="0"
                  max="10000000"
                  step="any"
                  value="${n||""}"
                  placeholder="0"
                  aria-label="${r} already committed per minute"
                />
              </td>
              <td class="number ${o&&n>o?"warn":""}">${o?c(l):"—"}</td>
            </tr>`})}
        </tbody>
      </table>
    </div>
    ${s.length>0&&i`<div class="notice">
      <b
        >${s.length===1?"One resource has":c(s.length)+" resources have"} no nodes
        entered:</b
      >
      ${s.join(", ")}. A zero budget means this plan may not use that resource at all — a fine
      answer for something you have genuinely not found, but if you simply have not counted them
      yet, go back and fill them in or the plan will not fit.
    </div>`}
    <p class="small muted">
      Production you already run is a different question, asked separately: that one credits
      finished parts, this one takes raw extraction off the top. Use this for ore feeding factories
      the plan will not rebuild, and the other for parts the plan would otherwise make again.
    </p>`}function ze(e){let t=m,a=Me(t),s=new FormData(e),r=new Set(v.catalog.raw||[]);for(let[o,n]of s)if(o==="purity"||o==="distribution")t.settings[o]=String(n);else if(o==="mark")a.mark=Number(n);else if(o==="clock")a.clock=Number(n);else if(o.startsWith("node:")||o.startsWith("well:")){let[l,u,d]=o.split(":");if(!r.has(u)||!ut.some(([y])=>y===d))continue;let h=l==="well"?a.wells??={}:a.nodes??={},k=h[u]||Ia();k[d]=Math.max(0,Math.floor(Number(n)||0)),k.impure||k.normal||k.pure?h[u]=k:delete h[u]}else if(o.startsWith("used:")){let l=o.slice(5);if(!r.has(l))continue;let u=Number(n);String(n).trim()!==""&&Number.isFinite(u)&&u>0?(a.used??={})[l]=u:delete a.used?.[l]}}async function He(e){let t=m,a=M("#wizard-form");if(!(Re||!t||e===t.extractionStep)&&!(a&&e>t.extractionStep&&!a.reportValidity())){if(a&&ze(a),e<1){pt();return}if(e<=Ht.length){t.extractionStep=e,f();return}t.settings.limits=cr(t.extraction,t.settings.limits),t.settings.extraction=structuredClone(t.extraction),t.settings.limitsConfirmed=!0,t.preview=null,pt(),A("Resource budgets set from your nodes. You can still edit any of them in All settings.")}}function pt(){let e=m;e.mode=e.extractionReturn?.mode||"advanced",e.step=e.extractionReturn?.step||4,e.extractionReturn?.guidedStep&&(e.guidedStep=e.extractionReturn.guidedStep),e.extractionReturn=null,e.extractionUndo=null,f()}function Ga(){let e=m,t=M("#wizard-form");t&&(e.mode==="guided"?de(t):ie(t)),e.extractionReturn={mode:e.mode,step:e.step,guidedStep:e.guidedStep},e.mode="extraction",e.extractionStep=1,f()}function Ba(e){let t=new Set(e.alternateRecipes||[]),a=new Set(e.preferredRecipes||[]),s=v.catalog.alternates||[],r=o=>{let n=Object.keys(o.outputs),l=o.mam&&!["auto","coal","fuel"].includes(e.mainPower||"auto")?"power preference":o.pure&&e.pureIngots===!0?"ingot preference":"";return i`<div
      class="alt-row"
      data-alt-text="${(o.name+" "+n.join(" ")).toLowerCase()}"
    >
      <label class="check-row"
        >${l?i`<input
              type="checkbox"
              checked
              disabled
              aria-label="${o.name} is required by your ${l}"
            />`:i`<input
              type="checkbox"
              name="alt"
              value="${o.id}"
              ${t.has(o.id)&&$("checked")}
            />`}<span
          >${o.name}<small class="muted">
            · ${n.join(", ")} ·
            ${o.mam?"MAM research":"Phase "+o.phase}${l&&" · required by your "+l}</small
          ></span
        ></label
      >${!l&&i`<label
        class="alt-pref"
        title="Force this recipe: the plan will not use any other recipe for ${n[0]} once this one is available"
        ><input
          type="checkbox"
          name="altpref"
          value="${o.id}"
          ${a.has(o.id)&&$("checked")}
          ${!t.has(o.id)&&$("disabled")}
          aria-label="Force ${o.name} as the only ${n[0]} recipe"
        /><span>★</span></label
      >`}<button
        type="button"
        class="btn quiet alt-info"
        data-alt-info="${o.id}"
        aria-label="Show the ${o.name} recipe"
      >
        recipe ↗
      </button>
    </div>`};return i`<div class="alt-picker">
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
    <div class="alt-list">${s.map(r)}</div>
  </div>`}var Ua=e=>{let t=new Set((v?.catalog?.alternates||[]).map(a=>a.id));return[...new Set(Object.values(e?.stages||{}).flatMap(a=>(a.rows||[]).filter(s=>s.alternate||t.has(s.id)).map(s=>s.id)))].sort()};function _a(e){let t=(v.catalog.alternates||[]).find(o=>o.id===e);if(!t)return;let a=Object.keys(t.outputs)[0],s=(v.catalog.standardRecipes||[]).filter(o=>o.outputs[a]),r=o=>At({machineCount:1,recipe:{name:o.name.replace("Alternate: ",""),machine:o.machine,ins:Object.entries(o.inputs||{}),outs:Object.entries(o.outputs||{})}});he(t.name,t.mam?`MAM research · unlocked in the MAM, not from hard drives · ${t.machine}`:`Alternate recipe · available from Phase ${t.phase} · ${t.machine}`,i`${r(t)}
      ${s.length?i`<h3>Standard ${s.length>1?"recipes":"recipe"} for ${a}</h3>
            ${s.map(r)}`:i`<p class="small muted">No standard recipe produces ${a}.</p>`}
      <p class="small muted">
        Rates are per machine at 100%, per minute. Alternates are unlocked with hard drives in game;
        ticking a recipe is a planning allowance, not an in-game unlock.
      </p>`,a)}function Ya(e){let t=v.catalog.sloopUses||[],a=e.sloopReserved||[],s=10*(e.augmenters||0)+a.length+(e.amplifySloops||0),r=e.somersloops||0,o=Math.round((.1*((e.augmenters||0)-(e.fueledAugmenters||0))+.3*(e.fueledAugmenters||0))*100),n=e.augmenters||0,l=e.fueledAugmenters||0;return i`<div class="notice blue">
      <b>Somersloop ledger.</b>
      ${n?i`${n} augmenter${n>1?"s":""} cost ${10*n} sloops
          and give Phase 5 ${c(500*n)} MW plus a ${o}% multiplier on the grid's
          base production.
          ${l?`Fueling ${l} of them adds ${c(5*l)} Alien Power Matrix/min to the plan — the rate is derived here, never entered.`:"Unfueled augmenters need no Alien Power Matrix."}`:"Enter augmenters to include their power in Phase 5."}
      Committed: <b>${s}</b> of ${r}
      available.${s>r&&i` <span class="warn">More than you have.</span>`}
    </div>
    ${e.amplifySloops?i`<p class="small muted">
          Production amplification will place up to ${c(e.amplifySloops)} somersloops in this
          plan's own machines. An amplified machine keeps its inputs, doubles its output and draws
          four times the power, so it trades power for ore and buildings. The budget applies to each
          phase's plan rather than adding up across phases, because every phase is a self-contained
          steady state.
        </p>`:i`<p class="small muted">
          Production amplification is off. Somersloops in your production lines cut ore and
          buildings, but finding and reaching them is a hunt — leave this at 0 to plan without it,
          exactly as before.
        </p>`}
    <p class="eyebrow">SOMERSLOOPS PARKED IN HAND-FED LINES</p>
    <div>
      ${t.map(([u,d])=>i`<label class="check-row"
            ><input
              type="checkbox"
              name="sloop"
              value="${u}"
              ${a.includes(u)&&$("checked")}
            />${d}</label
          >`)}
    </div>
    <p class="small muted">
      These double the output of a finite, hand-gathered input, so they are usually the best sloop
      you will ever spend: the world's power slugs are worth twice as many Power Shards through an
      amplified Constructor. Their inputs are carried in by hand, so they stay out of the production
      balance and only reserve a sloop and add a checklist step. The Crafting Bench cannot be
      amplified — the constructor recipe is the one that doubles.
    </p>`}function Ka(e){let t=e.settings?.existingSupply||{};if(!Object.keys(t).length)return"";let a=Number(e.settings.phase||1),s={};for(let[n,l]of Object.entries(e.stages))if(Number(n)>=a)for(let[u,d]of Object.entries(l.supplied||{}))s[u]=Math.max(s[u]||0,d);let r=Object.entries(e.stages).filter(([n,l])=>l.supplyDropped&&Number(n)>=a).map(([n])=>n),o=Object.entries(t).map(([n,l])=>{let u=s[n]||0;return i`<li>
      ${T(n)}<span
        ><b>${n}</b> ${c(l)}/min
        declared${u>.002?` · the plan draws up to ${c(u)}/min of it, and builds no line for it`:" · this plan has no use for it, so nothing changes"}</span
      >
    </li>`});return i`<div class="notice blue supply-notice">
    <b>Crediting production you already run.</b> These lines are not planned again, and neither is
    the chain behind them.
    <ul class="supply-summary">
      ${o}
    </ul>
    <p class="small">
      Their ore and their power are already spent in your world, so the resource budgets and the
      spare-power figure should be entered net of them — the same rule that makes "spare existing
      power" spare.
    </p>
    ${r.length>0&&i`<p class="small">
      <b>Phase ${r.join(" and ")}</b> could not be fitted to whole machines while crediting
      them, so ${r.length>1?"those phases are":"that phase is"} planned as if you built
      all of it yourself. Nothing is lost — the plan is simply the larger one. Exact ratios instead
      of whole machines usually keeps the credit.
    </p>`}
  </div>`}function Va(e){let t=e.stages?.[5]?.fuelVerdict;if(!t)return"";if(!t.unfueledFeasible)return i`<div class="notice blue">
      <b>Fueled augmenters are carrying this plan.</b> Phase 5 does not fit its budgets without
      them, so the ${c(t.matrixRate)} Alien Power Matrix/min is doing real work.
    </div>`;let a=t.worthIt,s=t.buildings-t.buildingsUnfueled;return i`<div class="notice ${a?"blue":""}">
    <b
      >${a?"Fueling these augmenters pays off.":"Fueling these augmenters costs more than it returns."}</b
    >
    Producing ${c(t.matrixRate)} Alien Power Matrix/min takes Phase 5 from
    ${c(t.buildingsUnfueled)} buildings to ${c(t.buildings)}
    (${s>0?"+":""}${c(s)}) and from ${q(t.requiredMWUnfueled)} to
    ${q(t.requiredMW)} of demand, while the boost raises available power from
    ${q(t.availableMWUnfueled)} to ${q(t.availableMW)}.
    ${a?"The extra 20% is worth more than the fuel line costs at this scale.":`At this scale the fuel line costs more than the extra 20% returns. Build the augmenter${e.settings.augmenters>1?"s":""} unfueled, or put 4 somersloops in the Alien Power Matrix encoder — that halves the whole chain behind it and moves the break-even down.`}
  </div>`}function Er(e){let t=v.saves.find(o=>o.id===e.saveId);if(!t?.profiles.length)return"";let a=t.profiles.find(o=>o.id===e.carryFrom)||t.profiles[0],s=e.carry||{},r=Or(e.preview).length;return i`<section class="panel carry-panel">
    <h3>Continue the progress in this save</h3>
    <p>
      A new profile is a new plan for the same world, so it can start from what you have already
      done. Nothing is moved — the profile you carry from keeps all of it.
    </p>
    <label class="field"
      >Carry progress from
      <select name="carryFrom">
        ${t.profiles.map(o=>St(o.id,o.name,a.id))}
      </select></label
    >
    <div class="carry-list">
      ${Bt.filter(([o])=>o!=="picked"||r>0).map(([o,n,l])=>i`<label class="check-row"
              ><input
                type="checkbox"
                name="carry"
                value="${o}"
                ${s[o]&&$("checked")}
              /><span
                ><b>${n}</b>${o==="picked"&&" ("+c(r)+")"}<br /><small
                  class="muted"
                  >${l}</small
                ></span
              ></label
            >`)}
    </div>
    <p class="small muted">
      Production lines this plan expands are carried unticked for review. Steps this plan does not
      contain stay with the profile you carried from.
    </p>
  </section>`}function Tr(e){let t=(v.catalog.storageItems||[]).filter(r=>Cr(r.name,e.storage));if(!t.length)return"";let a=e.storageOverrides||{},s=t.filter(r=>a[r.name]!==void 0).length;return i`<details class="panel rate-picker" ${s>0&&$("open")}>
    <summary>
      Per-item storage rates${s>0&&" · "+c(s)+" set"} ${se("storageOverrides")}
    </summary>
    <p class="small muted">
      Leave a box blank to use the rate for its group. Enter <b>0</b> to keep an item’s container
      and address without reserving any production for it. Space Elevator parts start at 0:
      deliveries and later project parts already consume them, so a standing buffer would be
      production nobody draws from. ${c(t.length)} items are in your selected storage supply.
    </p>
    <input
      id="rate-filter"
      type="search"
      placeholder="Filter by item…"
      aria-label="Filter storage items"
    />
    <div class="rate-list">
      ${t.map(r=>i`<label
            class="rate-row field"
            data-rate-text="${r.name.toLowerCase()}"
            data-rate-group="${r.build?"build":r.delivered?"delivered":"other"}"
            ><span
              >${r.name}${r.build?i` <small class="muted">· construction</small>`:r.delivered&&i` <small class="muted">· delivered</small>`}</span
            ><input
              name="rate:${r.name}"
              type="number"
              min="0"
              max="300"
              step="0.1"
              value="${a[r.name]??""}"
              placeholder="${c(Ar({...e,storageOverrides:{}},r.name))}"
              aria-label="Storage refill for ${r.name} per minute"
          /></label>`)}
    </div>
  </details>`}function Ut(e,t){let a=m;if(!e?.querySelector(".carry-list"))return;let s=t||new FormData(e),r=new Set(s.getAll("carry").map(String));a.carryFrom=s.get("carryFrom")||null,a.carry=Object.fromEntries(Bt.map(([o])=>[o,r.has(o)]))}function Ge(e=null){if(!ve())return;let t=v.saves.find(r=>r.id===e),a=t?.profiles.find(r=>r.id===t.activeProfile),s=a?.settings||(a?.kind==="original"?{phase:"3",purity:"pure",distribution:"randomized",multiplier:50,powerFactor:.5,availablePowerGW:0,recipes:"all",pureIngots:!0,sam:"needed",nuclear:"recycle",uraniumReactors:1,storage:"all",storageRate:1,cellsPerMinute:20,goal:"timed",hours:8,roundRates:!0,wholeMachines:!0,limitsConfirmed:!1,limits:{...v.catalog.pureLimits}}:null);Ee({step:1,saveId:e,saveName:t?.name||"",name:"",settings:s?structuredClone(s):{phase:"3",purity:"vanilla",distribution:"original",multiplier:1,powerFactor:1,availablePowerGW:0,recipes:"standard",pureIngots:!1,sam:"needed",nuclear:"none",uraniumReactors:1,storage:"construction",storageRate:1,cellsPerMinute:0,goal:"balanced",hours:8,roundRates:!0,wholeMachines:!0,limitsConfirmed:!1,limits:{...v.catalog.limits}},preview:null,carryFrom:t?.activeProfile||null,carry:Object.fromEntries(Bt.map(([r])=>[r,!0])),mode:"guided",guidedStep:1,guidedAsk:null,usedGuided:!1,tutorial:"doing"}),s||(m.settings.storageOverrides={Concrete:Sr}),Qa&&!s&&(m.settings.phase="1"),ne("wizard")}function Xa(){if(!m)return String(i`${W("NEW PROFILE","Choose a save first")}
        <button class="btn primary" data-new-save>Create a save</button
        ><a class="btn" href="#profiles">Existing saves</a>`);let e=m;if(e.mode==="extraction")return Ha();if(e.mode==="guided"&&e.guidedStep<=ee().length)return Za();let t=[Nr,Fr,Ir,Wr,Lr][e.step-1];return String(i`${Qa&&ge()}
      ${W("SAVE → SETTINGS → GOALS → PLAN",e.saveId?"Add a profile to "+e.saveName:"Create your factory plan")}
      <div class="wizard-progress">
        ${["Game settings","Preferences","Goals","Resources","Review"].map((a,s)=>i`<button
              type="button"
              class="${e.step===s+1?"current":""}"
              data-wizard-step="${s+1}"
              ${e.step===s+1&&$('aria-current="step"')}
            >
              ${s+1}. ${a}
            </button>`)}
      </div>
      <form id="wizard-form" class="panel wizard-panel">
        ${t?.(e,e.settings)}
        <div class="wizard-actions">
          <button
            type="button"
            class="btn"
            ${$(e.step===1?"data-cancel-wizard":"data-wizard-back")}
          >
            ${e.step===1?"Cancel":"Back"}</button
          ><span class="guided-escape"
            >${e.step<5&&i`<button type="button" class="btn quiet" data-guided-start>
              ← Guided start
            </button>`}<button class="btn primary" type="submit">
              ${e.step===5?"Create profile":e.step===4?"Calculate plan":"Continue →"}
            </button></span
          >
        </div>
        <p id="wizard-error" class="form-error" role="alert"></p>
      </form>`)}function Nr(e,t){return i`<h2>Your save and game settings</h2>
    <p>Use the settings shown in your game. Values are multipliers: half consumption is 0.5.</p>
    <div class="form-grid">
      ${_("Save name","saveName",e.saveName,"text",'required maxlength="80" '+(e.saveId?"readonly":""))}
      ${U("Currently working on","phase",["1","2","3","4","5"].map(a=>[a,"Phase "+a]),t.phase)}
      ${U("Resource purity","purity",Rr,t.purity)}
      ${U("Node distribution","distribution",kr,t.distribution)}
      ${_("World seed (optional)","worldSeed",t.worldSeed||"","number",'min="-2147483648" max="2147483647" step="1"')}
      ${_("Elevator requirement multiplier","multiplier",t.multiplier,"number",'min="0.1" max="1000" step="0.1" required')}
      ${_("Power consumption multiplier","powerFactor",t.powerFactor,"number",'min="0" max="10" step="0.1" required')}
      ${_("Spare existing power (MW)","availablePowerMW",t.availablePowerGW*1e3,"number",'min="0" max="10000000" step="1" required')}
      ${_("Total installed power (MW)","installedPowerMW",(t.installedPowerGW??t.availablePowerGW)*1e3,"number",'min="0" max="10000000" step="1" required')}
      ${_("Other settings / mod notes","modNotes",t.modNotes||"","text",'maxlength="500"')}
    </div>
    <h3>Production you already run ${se("existingSupply")}</h3>
    ${mt(t)}
    <p class="small muted">
      Other settings are notes only. Modified recipes, production boosts and modded items are not
      simulated. Phase plans assume the necessary milestones and MAM research are unlocked by
      commissioning.
    </p>`}function Fr(e,t){let a=(s,r,o,n)=>_(s,r,o,"number",n+" required");return i`<h2>How do you want to build?</h2>
    <div class="form-grid">
      ${U("Recipe access","recipes",[["standard","Standard recipes"],["all","Allow all alternate recipes as they become available"],["custom","Pick specific alternate recipes"]],t.recipes)}
      ${U("Ingot factories","pureIngots",[["false","Let the planner choose"],["true","Require pure ingot recipes when unlocked"]],String(t.pureIngots))}
      ${U("SAM resource conversion","sam",[["avoid","Avoid ore / gas conversion"],["needed","Only to meet resource limits or improve maximum output"],["allow","Allow whenever useful"]],t.sam)}
      ${a("Extra utilities power (%)","utilityPercent",t.utilityPercent??20,'min="0" max="200" step="1"')}
      ${U("Drone fuel","droneFuel",xr.map(s=>[s,s==="none"?"No dedicated drone fuel":s]),t.droneFuel||"none")}
      ${a("Drone fuel supply (items/min, entire fleet)","droneFuelRate",t.droneFuelRate??10,'min="0.01" max="10000" step="any"')}
      ${a("Phase 4 battery bridge /min (ionized fuel only)","droneBridgeRate",t.droneBridgeRate??10,'min="0.01" max="10000" step="any"')}
      ${U("Preferred main power","mainPower",Mr,t.mainPower||"auto")}
      ${U("Nuclear goal","nuclear",[["none","No nuclear power"],["sink","Uranium power; sink plutonium fuel rods"],["recycle","Full waste recycling in Phase 5"]],t.nuclear)}
      ${a("Minimum uranium reactors from Phase 4","uraniumReactors",t.uraniumReactors,'min="1" max="1000" step="1"')}
      ${U("Storage supply","storage",Pr,t.storage)}
      ${U("Collectables storage","collectables",[["false","No collectables bays"],["true","Include leaves, wood, slugs, food, protein and DNA"]],String(t.collectables??t.storage==="all"))}
      ${a("Construction materials refill /min","buildRate",t.buildRate??t.storageRate,'min="0" max="300" step="0.1"')}
      ${a("Other items refill /min","storageRate",t.storageRate,'min="0.1" max="300" step="0.1"')}
      ${a("Extra Singularity Cells /min in Phase 5","cellsPerMinute",t.cellsPerMinute,'min="0" max="1000" step="0.1"')}
      ${a("Somersloops available to spend","somersloops",t.somersloops??0,'min="0" max="106" step="1"')}
      ${a("Alien Power Augmenters in Phase 5","augmenters",t.augmenters??0,'min="0" max="10" step="1"')}
      ${a("Of those, fueled with Alien Power Matrix","fueledAugmenters",t.fueledAugmenters??0,'min="0" max="10" step="1"')}
      ${a("Somersloops for production amplification","amplifySloops",t.amplifySloops??0,'min="0" max="106" step="1"')}
    </div>
    ${Ya(t)}${Tr(t)}${t.recipes==="custom"&&Ba(t)}
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
    </p>`}function Ir(e,t){let a=t.multiplier>5?"timed":"balanced";return i`<h2>Choose your production goal</h2>
    <p>
      ${t.multiplier>5?"Your elevator multiplier makes completion time a useful starting point.":"Balanced progression is a practical starting point for these settings."}
      Storage and your selected preferences apply to every option.
    </p>
    <div class="goal-grid">
      ${v.catalog.goals.map(s=>i`<label class="goal-card"
            ><input
              type="radio"
              name="goal"
              value="${s.id}"
              ${t.goal===s.id&&$("checked")}
            /><strong>${s.name}</strong>${a===s.id&&i`<span class="badge orange">Suggested</span>`}
            <p>${s.description}</p></label
          >`)}
    </div>
    <div class="form-grid">
      ${_("Profile name","profileName",e.name||v.catalog.goals.find(s=>s.id===t.goal).name,"text",'required maxlength="80"')}
      ${_("Hours per phase (target-time option)","hours",t.hours,"number",'min="0.25" max="2000" step="0.25" required')}
      ${U("Target time applies to","phaseTime",[["every","Every phase"],["final","The final phase; earlier phases run as fast as their kept buildings allow"]],t.phaseTime||"every")}
    </div>
    <label class="check-row"
      ><input type="checkbox" name="roundRates" ${t.roundRates&&$("checked")} />Round delivery
      rates to convenient numbers (may change completion time)</label
    ><label class="check-row"
      ><input
        type="checkbox"
        name="wholeMachines"
        ${t.wholeMachines!==!1&&$("checked")}
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
    </p>`}function Wr(e,t){return i`<h2>Available resource budgets</h2>
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
      ${Ja(t.purity,t.distribution).description}
      ${t.worldSeed?"Recorded seed: "+t.worldSeed+". ":""}<a
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
      ${v.catalog.raw.map(a=>_(a,"limit:"+a,t.limits[a],"number",'min="0" max="10000000" step="any" required'))}
    </div>
    <label class="check-row"
      ><input name="limitsConfirmed" type="checkbox" ${t.limitsConfirmed&&$("checked")} />I have
      checked these budgets for my save (required for maximum output)</label
    >`}function Lr(e){let t=e.preview,a=Number(t.settings.phase||1),s=Object.entries(t.stages).filter(([r])=>Number(r)>=a);return i`<h2>Review ${e.name}</h2>
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
          ${s.map(([r,o])=>i`<tr>
                <td>${r}</td>
                <td>
                  ${o.hours?c(o.hours)+" h":"—"}${o.aheadOf!==void 0&&i` <span class="badge">was ${c(o.aheadOf)} h</span>`}
                </td>
                <td>${o.rows?c(o.rows.reduce((n,l)=>n+l.machines,0)):"—"}</td>
                <td>${o.generationMW!==void 0?q(o.generationMW):"—"}</td>
                <td>${o.feasible?"Within entered limits":"Needs adjustment"}</td>
              </tr>`)}
        </tbody>
      </table>
    </div>
    ${Ka(t)}${Va(t)}
    ${s.filter(([,r])=>!r.feasible).map(([r,o])=>i`<div class="notice">
            <b>Phase ${r}:</b> ${o.reason}${Dt(o,t.settings)}
          </div>`)}
    <details class="panel">
      <summary>Assumptions and calculation limits</summary>
      ${t.warnings.map(r=>i`<p class="small">${r}</p>`)}
    </details>
    <p class="small muted">
      You can save a plan that exceeds your budgets as a planning draft; its affected phases remain
      clearly flagged. Profiles are calculated snapshots. Create another profile to compare
      different settings.
    </p>
    ${Er(e)}`}function ie(e){let t=new FormData(e),a=m,s=a.settings,r=s.purity+"|"+s.distribution;for(let[o,n]of t)o==="availablePowerMW"&&(s.availablePowerGW=Number(n)/1e3),o==="installedPowerMW"&&(s.installedPowerGW=Number(n)/1e3),o==="saveName"&&(a.saveName=n),o==="profileName"?a.name=n:o.startsWith("limit:")?s.limits[o.slice(6)]=Number(n):["utilityPercent","droneFuelRate","droneBridgeRate","multiplier","powerFactor","availablePowerGW","uraniumReactors","storageRate","buildRate","cellsPerMinute","somersloops","augmenters","fueledAugmenters","amplifySloops","hours"].includes(o)?s[o]=Number(n):o==="collectables"?s.collectables=n==="true":o==="pureIngots"?s[o]=n==="true":["phase","purity","distribution","recipes","sam","nuclear","storage","goal","phaseTime","modNotes","mainPower","worldSeed","droneFuel"].includes(o)&&(s[o]=n);e.querySelector("[name=sloop]")&&(s.sloopReserved=t.getAll("sloop").map(String)),e.querySelector(".alt-list")&&(s.alternateRecipes=t.getAll("alt").map(String),s.preferredRecipes=t.getAll("altpref").map(String).filter(o=>s.alternateRecipes.includes(o)));{let o=ht(e,t);o&&(s.existingSupply=o)}if(e.querySelector(".rate-list")){let o={};for(let[n,l]of t)n.startsWith("rate:")&&String(l).trim()!==""&&Number.isFinite(Number(l))&&(o[n.slice(5)]=Number(l));s.storageOverrides=o}a.step===3&&(s.roundRates=t.has("roundRates"),s.wholeMachines=t.has("wholeMachines")),a.step===4&&(s.limitsConfirmed=t.has("limitsConfirmed")),Ut(e,t),a.step===1&&r!==s.purity+"|"+s.distribution&&(s.limits=Ja(s.purity,s.distribution).limits,s.limitsConfirmed=!1),a.preview=null}var Re=!1,Oe=(e,t)=>(e&&(e.textContent=t),{onProgress:a=>{e&&(e.textContent=`${t} Phase ${a} of 5…`)}});function Be(e,t){let a=e?.querySelector(".form-error");if(!a){A(t.message,!0);return}/timed out/i.test(t.message)?a.innerHTML=String(i`${t.message}<span class="error-options"
          ><b>Ways to get a plan:</b
          ><span>Try again — speed varies with your device and other open tabs.</span
          ><span
            >In the recipe picker, use <b>Planner’s choice</b> or untick alternates you don’t need;
            many recipes for the same product slow the search the most.</span
          ><span
            >In Goals, turn off whole-machine production — exact balancing calculates much
            faster.</span
          ><span>Lower the elevator multiplier or allow more hours per phase.</span></span
        >`):a.textContent=t.message}async function Ue(e){if(Re||!m||e===m.step||e<1||e>5)return;let t=M("#wizard-form");if(!(e>m.step&&!t.reportValidity())){if(ie(t),e!==5){m.step=e,f();return}await _t(t)}}async function _t(e){Re=!0;let t=document.querySelectorAll("[data-wizard-step],[data-guided-advanced],#wizard-form button");t.forEach(r=>r.disabled=!0);let a=e?.querySelector('button[type="submit"]'),s=a?.textContent;try{m.name=m.name.trim()||v.catalog.goals.find(r=>r.id===m.settings.goal).name,m.preview=await V("/api/preview",{settings:m.settings},!0,Oe(a,"Calculating…")),m.step=5,m.guidedStep=ee().length+1,f()}catch(r){Be(e,r),a&&(a.textContent=s)}finally{Re=!1,t.forEach(r=>r.disabled=!1)}}var qr=8;function Dr(e){let t=String(e||"").trim().toLowerCase();if(!t)return[];let a=[],s=[];for(let r of v.catalog.supplyItems||[]){let o=r.toLowerCase();o.startsWith(t)?a.push(r):o.includes(t)&&s.push(r)}return[...a,...s].slice(0,qr)}function Yt(e){return Array.isArray(e.supplyRows)||(e.supplyRows=Object.entries(e.settings.existingSupply||{}).map(([t,a])=>({name:t,rate:String(a)}))),e.supplyRows}function mt(e){let t=[...Yt(m),{name:"",rate:""}],a=new Set(v.catalog.supplyItems||[]),s=o=>o.name.trim()?a.has(o.name.trim())?String(o.rate).trim()?"":i`<span class="supply-hint"
              >Add a rate and this line is credited; leave it blank and it is not.</span
            >`:i`<span class="supply-hint warn">No item of that name — pick one from the list.</span>`:"",r=(o,n)=>{let l=o.name.trim(),u=a.has(l);return i`<div class="supply-row" data-supply-row="${n}">
      <div class="supply-field">
        <label class="field"
          >Item<span
            class="supply-input${u?" has-icon":""}"
            data-icon="${u?l:""}"
            >${u&&T(l)}<input
              name="supplyItem"
              value="${o.name}"
              maxlength="80"
              autocomplete="off"
              spellcheck="false"
              placeholder="Search item"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="list"
              aria-controls="supply-options-${n}"
              aria-label="Search for an item you already produce" /></span
        ></label>
        <div class="supply-options" id="supply-options-${n}" role="listbox" hidden></div>
      </div>
      <label class="field"
        >Per minute<input
          name="supplyRate"
          type="number"
          min="0"
          max="1000000"
          step="any"
          value="${o.rate}"
          aria-label="Rate you already produce, per minute"
      /></label>
      <button
        type="button"
        class="btn quiet supply-remove${l?"":" is-blank"}"
        data-supply-remove="${n}"
        ${l?i`aria-label="Remove ${o.name}"`:$('tabindex="-1" aria-hidden="true"')}
      >
        Remove
      </button>
      ${s(o)}
    </div>`};return i`<div class="supply-picker">
    <div class="supply-list">${t.map(r)}</div>
    <p class="small muted">
      The plan credits these and builds only the remainder — and it does not build the chain behind
      them either. What you make it with is your business: the recipe and machine count do not have
      to match anything this plan would choose. Their ore and their power are already spent in your
      world, so enter your resource budgets and spare power net of them, exactly as for any other
      existing factory.
    </p>
  </div>`}function ht(e,t){if(!e?.querySelector?.(".supply-list"))return null;let a=new Set(v.catalog.supplyItems||[]),s=t.getAll("supplyItem").map(l=>String(l)),r=t.getAll("supplyRate").map(l=>String(l)),o=s.map((l,u)=>({name:l,rate:r[u]??""})).filter(l=>l.name.trim()||String(l.rate).trim());m.supplyRows=o;let n={};for(let l of o){let u=l.name.trim(),d=Number(l.rate);a.has(u)&&String(l.rate).trim()!==""&&Number.isFinite(d)&&d>0&&(n[u]=d)}return n}function Kt(e){let t=e.closest(".supply-field");if(!t)return;let a=t.querySelector(".supply-options");if(!a)return;let s=Dr(e.value).filter(r=>r.toLowerCase()!==e.value.trim().toLowerCase());if(!s.length){Te(e);return}a.innerHTML=String(i`${s.map(r=>i`<button
          type="button"
          role="option"
          aria-selected="false"
          class="supply-option"
          data-supply-pick="${r}"
        >
          ${T(r)}<span>${r}</span>
        </button>`)}`),a.hidden=!1,e.setAttribute("aria-expanded","true")}function es(e){let t=e.closest(".supply-input");if(!t)return;let a=e.value.trim(),s=(v.catalog.supplyItems||[]).includes(a)?a:"";t.dataset.icon!==s&&(t.dataset.icon=s,t.querySelector(".item-icon")?.remove(),t.classList.toggle("has-icon",!!s),s&&t.insertAdjacentHTML("afterbegin",T(s)))}function Te(e){let t=e?.closest(".supply-field")?.querySelector(".supply-options");t&&(t.hidden=!0,t.innerHTML=""),e?.setAttribute("aria-expanded","false")}function Vt(e){let t=e.closest(".supply-field"),a=t?.querySelector("input[name=supplyItem]");if(!a)return;let s=Number(e.closest(".supply-row")?.dataset.supplyRow??-1);a.value=e.dataset.supplyPick,Te(a);let r=M("#wizard-form");r&&(m.mode==="guided"?de(r):ie(r)),f(),[...document.querySelectorAll(".supply-row")][s]?.querySelector("input[name=supplyRate]")?.focus()}var ts={minimal:'<path d="M4 20h4v-6H4zM10 20h4v-9h-4z"/><path d="M17 5v9M17 14l-2.5-3M17 14l2.5-3"/>',balanced:'<path d="M12 4v16M6 20h12"/><path d="M3 9h18"/><path d="M6 9l-3 5h6zM18 9l-3 5h6z"/>',timed:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 3h6"/>',maximum:'<path d="M4 18a8 8 0 0 1 16 0"/><path d="M12 18l5-6"/><path d="M12 18h.01"/>',standard:'<rect x="4" y="5" width="16" height="14" rx="1"/><path d="M8 10h8M8 14h5"/>',alternates:'<path d="M5 19V9a3 3 0 0 1 3-3h11"/><path d="M16 3l3 3-3 3"/><path d="M5 19h6a3 3 0 0 0 3-3v-1"/>',custom:'<path d="M4 7h9M4 12h9M4 17h6"/><path d="M15 15l2.5 2.5L22 13"/>',"stock-none":'<path d="M4 8h16v11H4z"/><path d="M4 8l2-3h12l2 3"/><path d="M9 12h6" opacity=".35"/>',"stock-build":'<path d="M4 8h16v11H4z"/><path d="M4 8l2-3h12l2 3"/><path d="M8 12h8M8 15h8"/>',"stock-all":'<path d="M3 13h8v7H3zM13 13h8v7h-8z"/><path d="M8 4h8v7H8z"/>',whole:'<rect x="3" y="7" width="5" height="11"/><rect x="9.5" y="7" width="5" height="11"/><rect x="16" y="7" width="5" height="11"/><path d="M3 4h18"/>',precise:'<circle cx="12" cy="12" r="8"/><path d="M12 12l4-3"/><path d="M12 4v2M20 12h-2M12 20v-2M4 12h2"/>',tutorial:'<path d="M6 4v16"/><path d="M6 5h11l-2.5 3.5L17 12H6z"/>',"tutorial-done":'<path d="M6 4v16"/><path d="M6 5h11l-2.5 3.5L17 12H6z"/><path d="M13 18l2 2 4-4"/>'},Br=e=>i`<span class="guided-art" aria-hidden="true"
    ><svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      ${$(ts[e]||ts.balanced)}
    </svg></span
  >`,Ur=e=>i`<span class="guided-art items" aria-hidden="true"
    >${e.slice(0,4).map(t=>T(t))}</span
  >`;function ee(){let e=m,t=[];for(let a of Jt)t.push(a),a.id==="phase"&&!e.saveId&&t.push(zr(String(e.settings.phase||"3")));return e.guidedAsk?t.filter(a=>e.guidedAsk.includes(a.id)):t}var ss=e=>{let t=m,a=t.settings;return e.id==="tutorial"?t.tutorial||"doing":e.id==="standing"?t.standing||"none":e.id==="exact"?a.wholeMachines===!1?"precise":"whole":e.id==="stock"?e.options.some(s=>s.value===a.storage)?a.storage:"construction":String(a[e.id]??"")};function _r(e){let t=ss(e);return i`<div class="guided-grid">
    ${e.options.map(a=>i`<label class="guided-card${a.value===t?" is-picked":""}">
          <input
            type="radio"
            name="guided:${e.id}"
            value="${a.value}"
            aria-label="${a.label+". "+a.detail}"
            ${a.value===t&&$("checked")}
          />
          ${a.items?Ur(a.items):Br(a.glyph)}
          <strong>${a.label}</strong>
          <p>${a.detail}</p>
          ${a.handoff&&i`<span class="badge">Opens All settings</span>`}
        </label>`)}
  </div>`}function Yr(e){if(e.storage==="none")return"";let t=e.storageOverrides||{};return i`<fieldset class="guided-topup">
    <legend>Which of these do you keep running out of? ${se("guidedTopup")}</legend>
    <p class="small muted">
      Containers fill from surplus on their own — a default Phase 3 plan already spills 29 Wire and
      19 Iron Plate a minute into storage. These get a guaranteed ${c(Qt)}/min on
      top, which costs about 1% more buildings each. Concrete is picked for you because it is the
      one the plan leaves least spare.
    </p>
    <div class="guided-chips">
      ${as.map(a=>i`<label class="guided-chip${t[a]!==void 0?" is-picked":""}"
            ><input
              type="checkbox"
              name="topup"
              value="${a}"
              aria-label="Guarantee ${c(Qt)} ${a} a minute"
              ${t[a]!==void 0&&$("checked")}
            />${T(a)}<span>${a}</span></label
          >`)}
    </div>
  </fieldset>`}function Kr(){let e=m,t=e.settings,a=v.saves.find(o=>o.id===e.saveId),s=a?.profiles.find(o=>o.id===(e.carryFrom||a.activeProfile))||a?.profiles[0],r=[["Phase","Phase "+(t.phase||"3")],["Goal",(v.catalog.goals.find(o=>o.id===t.goal)||{}).name||t.goal],["Recipes",t.recipes==="all"?"All alternates":t.recipes==="custom"?c((t.alternateRecipes||[]).length)+" picked":"Standard only"],["Stocked",(Hr.find(([o])=>o===t.storage)||[,t.storage])[1]],["Machines",t.wholeMachines===!1?"Exact ratios":"Whole machines"]];return i`<h2>What is different this time?</h2>
    <p>
      Starting from the settings of <b>${s?.name||"this save"}</b>. Tick only what changes; the
      rest is kept as it is.
    </p>
    <div class="guided-known">${r.map(([o,n])=>i`<span><b>${o}</b>${n}</span>`)}</div>
    <div class="guided-topics">
      ${Jt.map(o=>i`<label class="check-row"
            ><input
              type="checkbox"
              name="topic"
              value="${o.id}"
              ${o.id==="phase"&&$("checked")}
            />${o.title}</label
          >`)}
    </div>
    <p class="small muted">
      Progress from ${s?.name||"the other profile"} can be carried over on the Review step,
      including the production lines this plan does not expand.
    </p>`}function rs(e){return e.tutorial==="done"?[...Gr]:[]}function Vr(e){let t=m,a=t.settings,s=new FormData(e);if(e.querySelector?.(".guided-topics")){let r=s.getAll("topic").map(String);t.guidedAsk=Jt.filter(o=>r.includes(o.id)).map(o=>o.id)}for(let r of ee()){if(!r.options)continue;let o=s.get("guided:"+r.id);if(o===null)continue;let n=r.options.find(l=>l.value===String(o));n&&(r.id==="tutorial"&&(t.tutorial=n.value),Object.assign(a,n.set))}{let r=ht(e,s);r&&(a.existingSupply=r)}if(s.has("hours")&&(a.hours=Number(s.get("hours"))),e.querySelector?.(".guided-topup")){a.storageRate=1,a.buildRate=1;let r=s.getAll("topup").map(String).filter(n=>as.includes(n)),o={};for(let n of r)o[n]=Qt;a.storageOverrides=o}a.goal!=="timed"&&(a.phaseTime="every"),a.storage==="none"&&(a.storageOverrides={}),t.preview=null}function Qr(e,t){return i`<div class="guided-progress" role="list">
    ${e.map((a,s)=>i`<span
          role="listitem"
          class="${s===t?"current":s<t?"done":""}"
          ${s===t&&$('aria-current="step"')}
          ><i></i>${a.short||a.title.replace(/\?$/,"")}</span
        >`)}
  </div>`}function Za(){let e=m,t=e.settings,a=ee(),s=e.saveId&&e.guidedAsk===null,r=s?-1:Math.min(e.guidedStep-1,a.length-1),o=s?null:a[r],n;s?n=Kr():o?n=i`<h2>${o.title}</h2>
      <p>${o.lead}</p>
      ${o.kind==="supply"?mt(t):_r(o)}
      ${o.id==="goal"&&t.goal==="timed"&&i`<div class="form-grid guided-follow">
        ${_("Hours per phase","hours",t.hours??8,"number",'min="0.25" max="2000" step="0.25" required')}
      </div>`}
      ${o.id==="stock"&&Yr(t)}`:n=i`<h2>Ready to calculate</h2>`;let l=s?!1:r>=a.length-1,u=o?.step||1,d=s||e.guidedStep<=1;return String(i`${jr&&ge()}
      ${W("A FEW QUESTIONS",e.saveId?"Add a profile to "+e.saveName:"Create your factory plan","Answer what matters and the planner fills in the rest. Every setting is still there under All settings.")}
      ${!s&&Qr(a,r)}
      <form id="wizard-form" class="panel wizard-panel guided-panel">
        ${!s&&i`<label class="field guided-name"
          >${e.saveId?"Profile name":"Save name"}<input
            name="${e.saveId?"profileName":"saveName"}"
            type="text"
            value="${e.saveId?e.name:e.saveName}"
            ${!e.saveId&&$("required")}
            maxlength="80"
            placeholder="${e.saveId?"Named after your goal if left blank":"My Satisfactory save"}"
        /></label>`}
        ${n}
        <div class="wizard-actions">
          <button
            type="button"
            class="btn"
            ${$(d?"data-cancel-wizard":"data-guided-back")}
          >
            ${d?"Cancel":"Back"}
          </button>
          <span class="guided-escape"
            ><button type="button" class="btn quiet" data-guided-advanced="${u}">
              All settings →
            </button>
            <button class="btn primary" type="submit">
              ${l?"Calculate plan":"Continue →"}
            </button></span
          >
        </div>
        <p id="wizard-error" class="form-error" role="alert"></p>
      </form>`)}async function ft(e){let t=m,a=M("#wizard-form");if(Re||!t||e>t.guidedStep&&a&&!a.reportValidity())return;let s=!!t.saveId&&t.guidedAsk===null;a&&de(a);let r=ee();if(s&&r.length){t.guidedStep=1,f();return}if(e<1){t.guidedStep=1,f();return}let o=r[Math.min(t.guidedStep-1,r.length-1)],n=o?.options?.find(l=>l.value===ss(o))?.handoff;if(n&&e>t.guidedStep){Xt(n);return}if(e<=r.length){t.guidedStep=e,f();return}await _t(a)}function de(e){let t=m,a=new FormData(e);a.has("saveName")&&(t.saveName=String(a.get("saveName"))),a.has("profileName")&&(t.name=String(a.get("profileName"))),Vr(e)}function Xt(e){let t=m,a=M("#wizard-form");a&&t.mode==="guided"&&de(a),t.mode="advanced",t.usedGuided=!0,t.step=Math.min(Math.max(e||1,1),4),f()}function os(){let e=m,t=M("#wizard-form");t&&e.mode!=="guided"&&ie(t),e.mode="guided";let a=ee();e.guidedStep>=1||(e.guidedStep=1),e.guidedStep=Math.min(e.guidedStep,Math.max(a.length,1)),f()}var ls="planner-ada",Ne=0,is="",Ye=to();function cs(e){Ne=e}function ds(e){Ye=e}var Fe=null,Zt,_e=0,ns=0;function to(){try{return localStorage.getItem(ls)==="muted"}catch{return!1}}function us(){try{localStorage.setItem(ls,Ye?"muted":"on")}catch{}}function ao(){let e=j.id?ye():[],t=e.find(h=>!D(h.id)),a=b?H():null,s=b?a.rows||[]:S.factories.filter(h=>h.stages[R()]),r=b?h=>"calc-"+R()+"-"+h.id:h=>"factory-"+R()+"-"+h.id,o=me().flatMap(h=>h.items).filter(h=>h.name),n=b?Object.entries(a.delivery||{}).map(([h,k])=>({id:R()+"-"+le(h),target:k.target,initial:0})):S.deliveries.filter(h=>h.phase===P()),l=h=>C.deliveries[h.id]??(E.id==="original"?h.initial:0),u=b?(b.settings.availablePowerGW||0)*1e3:0,d=b&&a.additionalHeadroomMW||0;return{view:ue,phaseLabel:G(P()),browserMode:eo,planEditing:J,guided:m?.mode==="guided",guidedStep:m?.guidedStep||0,guidedTotal:m?ee().length:0,tutorialDone:m?.tutorial==="done",supplyDeclared:Object.keys(m?.settings?.existingSupply||{}).length,kind:j.id?E?.kind||"original":"none",save:j.name||"this save",profile:E?.name||"Pioneer",steps:{done:e.filter(h=>D(h.id)).length,total:e.length},next:t?.title||"",retireOpen:e.filter(h=>h.id.startsWith("retire-")&&!D(h.id)).length,factories:{done:s.filter(h=>D(r(h))).length,total:s.length},storage:{done:o.filter(h=>D("slot-"+h.id+"-verified")).length,total:o.length},deliveries:{open:n.filter(h=>l(h)<h.target).length,total:n.length},hasPhaseNote:!!C.notes["phase-"+P()],customTasks:C.customTasks.filter(h=>h.phase===P()).length,removedSteps:Se().removed.length,groups:xe().groups.length,feasible:b?a.feasible!==!1:!0,reason:b&&a.reason||"",short:b?(v.catalog?.raw||[]).filter(h=>(a.raw?.[h]||0)>(b.settings.limits?.[h]??1/0)):[],power:d>.01?{required:q(a.requiredMW||0),spare:q(u),headroom:q(d),tight:!0}:null,hours:b&&a.hours?c(a.hours)+" h":"",profiles:v.saves.find(h=>h.id===j.id)?.profiles.length||0,backupDays:v.lastBackup?Math.max(0,Math.floor((Date.now()-new Date(v.lastBackup).getTime())/864e5)):null,post:P()==="post",startPhase:Ie(),assumptions:b?(b.warnings||[]).length:0}}function ea(){if(Fe)return Fe;let e=ao(),t=Xr(e);if(!t.length)return null;let a=t.map(o=>o.id).join("|");a!==is&&(is=a,Ne=0);let s=Math.floor(Ne/t.length),r=Ne%t.length;return s>0&&!r?Jr(s,e):t[r]}function gt(){clearTimeout(Zt),Fe=null,_e=0}function ps(){clearTimeout(Zt),_e=Date.now()-ns>2500?1:_e+1,ns=Date.now(),!(_e<5)&&(Fe=Zr(_e-4),Zt=setTimeout(()=>{gt(),f()},12e3),f())}function ms(){try{if(Ye)return i`<div class="ada is-muted">
        <span class="ada-mark" aria-hidden="true">◈</span><span>ADA muted</span
        ><button class="btn quiet" type="button" data-ada-mute="off">Unmute</button>
      </div>`;let e=ea();return e?i`<section class="ada" data-tone="${e.tone}" aria-label="ADA">
      <div class="ada-head">
        <span class="ada-mark" aria-hidden="true">◈</span>
        <div>
          <b>${e.name||"ADA"}</b>
          <div class="eyebrow">
            ${e.name?"Transmission fault":"Artificial Directory and Assistant"}
          </div>
        </div>
      </div>
      <p class="ada-line" id="ada-line" role="status" aria-live="polite">${e.text}</p>
      <div class="ada-tools">
        <button class="btn quiet" type="button" id="ada-next" data-ada-next>Another remark</button
        ><button class="btn quiet" type="button" data-ada-mute="on">Mute</button>
      </div>
    </section>`:""}catch{return""}}import{browserMode as so}from"./browser-api.js";function hs(e){let t=e==="setup";return i`<form id="auth-form" class="panel auth-panel">
    <h2>
      ${t?"Secure your existing save":e==="register"?"Create your account":"Sign in"}
    </h2>
    ${t&&i`<p>
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
    ${_("Username","username","","text",'required minlength="3" maxlength="32" pattern="[a-zA-Z0-9_-]+" autocomplete="username"')}
    ${_("Password (12–128 characters)","password","","password",'required minlength="12" maxlength="128" autocomplete="'+(e==="login"?"current-password":"new-password")+'"')}
    ${t&&i`<label class="check-row"
      ><input type="checkbox" name="registration" />Allow other people to register their own
      accounts</label
    >`}
    <button class="btn primary">
      ${t?"Enable accounts":e==="register"?"Create account":"Sign in"}
    </button>
    <p id="auth-error" class="form-error" role="alert"></p>
  </form>`}function fs(){return so?dt():String(i`${W("YOUR ACCOUNT",v.accountsEnabled?v.user.username:"User accounts",v.accountsEnabled?"Your saves are visible only to your account.":"Local mode currently shares one workspace. Enable accounts before sharing this server.")}
    ${v.accountsEnabled?i`<section class="panel">
          <p>Each account has its own named saves, profiles and progress.</p>
          <button class="btn" data-logout>Sign out</button>
          <p class="small muted">
            Use HTTPS when serving this app beyond localhost. Your host manages account access and
            backups.
          </p>
        </section>`:hs("setup")}`)}function bt(){We(null),M("#app").innerHTML=String(i`<main class="signin">
      <div class="brand"><img src="./favicon.svg" alt="" />Project Assembly</div>
      <h1>Your factory notebook</h1>
      ${hs($e)}
      ${v.registration&&i`<button
        class="btn quiet"
        data-auth-mode="${$e==="login"?"register":"login"}"
      >
        ${$e==="login"?"Create an account":"Back to sign in"}
      </button>`}
    </main>`)}import{browserMode as gs}from"./browser-api.js";function bs(){return String(i`${gs&&ge()}
      ${W("YOUR FACTORY WORLDS","Saves & profiles","Each save keeps separate progress for every profile. Switching back restores its checklist, deliveries and notes.")}
      <div class="toolbar">
        <button class="btn primary" data-new-save>Create a save</button>
        ${gs?i`<a class="btn" href="#backup">Backups & transfer</a>`:i`<a class="btn" href="#account"
              >${v.accountsEnabled?"Your account":"Set up user accounts"}</a
            >`}
      </div>
      ${v.saves.map(e=>i`<section class="panel save-panel">
            <div class="section-head">
              <h2>${e.name}</h2>
              <button class="btn" data-new-profile="${e.id}">Try another profile</button>
            </div>
            <div class="profile-cards">${e.profiles.map(t=>ro(e,t))}</div>
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
      </section>`)}function ro(e,t){let a=e.id===j.id&&t.id===E.id;return i`<article class="profile-card ${a?"selected":""}">
    <div class="eyebrow">
      ${t.kind==="original"?"PRESERVED HANDBOOK":"CALCULATED PROFILE"}
    </div>
    <h3>${t.name}</h3>
    <p>
      ${t.settings?`${t.settings.purity} purity · ${c(t.settings.multiplier)}× elevator · ${c(t.settings.powerFactor)}× power`:"50× elevator · pure ingots · nuclear recycling"}
    </p>
    <p class="small">${t.completed} checks complete · ${G(t.phase)}</p>
    <button
      class="btn ${a?"":"primary"}"
      data-open-save="${e.id}"
      data-open-profile="${t.id}"
    >
      ${a?"Continue current profile":"Open profile"}
    </button>
    <button class="btn" data-duplicate-profile="${t.id}" data-duplicate-save="${e.id}">
      Duplicate
    </button>
    <button class="btn" data-share-profile="${t.id}" data-share-save="${e.id}">Share</button>
    <button class="btn" data-remove-profile="${t.id}" data-remove-save="${e.id}">
      Remove profile
    </button>
  </article>`}var oo=[["power-retained","Retained turbofuel: 44.425 GW"],["power-rocket-1","Rocket-fuel block 1: +72 GW"],["power-rocket-2","Rocket-fuel block 2: +72 GW"],["power-u4","Phase 4 uranium: +125 GW"],...Array.from({length:4},(e,t)=>["power-rocket-"+(t+3),"Rocket-fuel block "+(t+3)+": +72 GW"]),["power-nuclear-final","Complete nuclear fleet: 437.5 GW total"]];function ys(){let e=S.resources[R()],t=S.plans[R()];return String(i`${W("CAPACITY BEFORE CONSTRUCTION","Power & resources","These are planned full-stage requirements, not live readings from your save. Mining totals already include retained turbofuel, trucks and all new power.")}
      <div class="stats">
        ${L("Gross generation",c(S.power[R()])+" GW","At this stage’s completion")}
        ${L("Production peak",c(t.manufacturingPeakGW)+" GW","Before the utility allowance")}
        ${L("Production average",c(t.manufacturingAvgGW)+" GW","Half-consumption setting")}
        ${L("Coal remaining",c(74400-e.Coal)+"/min","Against all-pure mining limit")}
      </div>
      <div class="notice">
        Verify your randomized nitrogen wells can supply
        <b>${c(e["Nitrogen Gas"]||0)}/min</b> at this stage. The all-pure resource
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
            ${Object.entries(e).sort(([a],[s])=>a.localeCompare(s)).map(([a,s])=>io(a,s))}
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
            ${oo.map(([a,s])=>i`<label class="check-row"
                  ><input type="checkbox" data-check="${a}" ${$(Z(a))} />${s}</label
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
      </section>`)}function io(e,t){let a=S.capacities[e],s=a?t/a:0;return i`<tr>
    <td class="resource-name">${T(e)}<span>${e}</span></td>
    <td class="number">${c(t)}</td>
    <td class="number">
      ${a?c(a):e==="Water"?"Extraction limited":"Verify wells"}
    </td>
    <td class="number ${a&&s>.9?"warn":""}">${a?c(a-t):"—"}</td>
    <td>
      ${a?i`${c(s*100)}%
            <div class="resource-bar ${s>.9?"tight":""}">
              <span style="width:${Math.min(100,s*100)}%"></span>
            </div>`:"—"}
    </td>
  </tr>`}function W(e,t,a="",s=""){return i`<div class="heading-row">
    <div>
      <div class="eyebrow">${e}</div>
      <h1>${t}</h1>
      ${a&&i`<div class="subtitle">${a}</div>`}
    </div>
    ${s&&i`<span class="badge orange">${s}</span>`}
  </div>`}function co(){if(b){let e=b.settings,t=new Date(b.createdAt),a=lo.find(([s])=>s===e.purity)?.[1]||e.purity;return i`${E.name}<br />${a} purity · ${c(e.multiplier)}× elevator
      parts<br />${c(e.powerFactor)}× power consumption
      ${!Number.isNaN(t.getTime())&&i`<br />Plan created
        ${t.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})}`}`}return E?.kind==="original"?i`${E.name}<br />Pure nodes · 50× elevator parts<br />Half power
      consumption<br />Plan revised 13 September 2026`:"Create or select a profile"}var uo=[["plan","◫","Build plan"],["factories","▥","Factories"],["storage","▦","Storage room"],["resources","↗","Power & resources"],["backup","⇅","Backup & notes"]],po=()=>String(i`<div class="layout">
      <aside class="sidebar">
        <div class="brand">
          <img src="./favicon.svg" alt="" />
          <div>
            Project Assembly
            <div class="eyebrow">FICSIT compliance terminal</div>
          </div>
        </div>
        <nav class="nav" aria-label="Main navigation">
          ${uo.map(([e,t,a])=>i`<a
                href="#${e}"
                class="${ue===e?"active":""}"
                ${ue===e&&$('aria-current="page"')}
                ><span class="navicon" aria-hidden="true">${t}</span>${a}</a
              >`)}
        </nav>
        ${ms()}
        <div class="save-status">
          <span class="dot"></span
          ><span id="saved">${no?"Saved in this browser":"Saved on server"}</span>
        </div>
        <div class="sidebar-foot">${co()}</div>
      </aside>
      <div>
        <header class="topbar">
          <div class="breadcrumbs">
            <a href="#profiles">${j.name}</a> <span aria-hidden="true"> / </span>
            ${G(P())}
          </div>
          <label class="small"
            >Working on
            <select
              id="phase-picker"
              aria-label="Working phase"
              ${!j.id&&$("disabled")}
            >
              ${vs().map(e=>i`<option value="${e}" ${P()===e&&$("selected")}>
                    ${G(e)}
                  </option>`)}
            </select></label
          >
        </header>
        <main id="main" class="workspace" tabindex="-1"></main>
      </div>
    </div>`);function f(){let e=[...document.querySelectorAll("details[open][data-task]")].map(r=>r.dataset.task),t=document.activeElement?.id,a=document.activeElement?.selectionStart;M("#app").innerHTML=po();let s={profiles:bs,wizard:Xa,account:fs,plan:b?Sa:$a,factories:b?Ma:ba,storage:ha,resources:b?Pa:ys,backup:Ea};if(M("#main").innerHTML=s[ue](),e.forEach(r=>document.querySelector(`details[data-task="${r}"]`)?.setAttribute("open","")),t&&document.getElementById(t)){let r=document.getElementById(t);r.focus({preventScroll:!0}),typeof a=="number"&&r.setSelectionRange&&r.setSelectionRange(a,a)}yt()}var Ke=0,$s;function A(e,t=!1){let a=M("#toast");a.textContent=e,a.className="show"+(t?" error":""),clearTimeout($s),$s=setTimeout(()=>a.className="",t?9e3:3500)}async function te(e,t={}){if(ta&&e.startsWith("/api/"))return mo(e,t);let a=await fetch(ta?new URL("."+e,ra):e,{cache:"no-store",...t}),s;try{s=await a.json()}catch{throw new Error("The server returned an unreadable response.")}if(!a.ok)throw new Error(s.error||"Request failed.");return s}var Y=Promise.resolve();function I(e){let t={...vt()};Ke++,yt();let a=Y.then(async()=>{let s=await te("/api/update",{method:"POST",headers:{"Content-Type":"application/json","X-Planner-Request":"1",...t},body:JSON.stringify(e)});return t["X-Save-Id"]===j.id&&t["X-Profile-Id"]===E.id&&We(s),s});return Y=a.catch(()=>{}),a.catch(s=>{throw A(s.message,!0),s}).finally(()=>{Ke--,yt()})}function yt(){let e=M("#saved");e&&(e.textContent=Ke?"Saving…":ta?"Saved in this browser":"Saved on server")}function vt(){return{"X-Save-Id":j?.id||"","X-Profile-Id":E?.id||""}}async function V(e,t,a=!0,s={}){return te(e,{method:"POST",headers:{"Content-Type":"application/json","X-Planner-Request":"1",...a?vt():{}},body:JSON.stringify(t),...s})}function ne(e){wt(e),location.hash==="#"+e?f():location.hash=e}function ho(){return[...document.querySelectorAll("textarea.notes")].some(e=>{let t=document.querySelector(`[data-input="${e.id}"]`);return t&&e.value!==(C.notes[t.dataset.saveNote]||"")})}function ve(){return!ho()||confirm("You have notes that have not been saved. Leave without saving those edits?")}function $t(e,t){let a=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=a,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(a),1e3)}var qe,v,j,E,b=null,m=null,$e="login",ws,S,C,ue="plan",B="",X="ground",ke="all",lt=!1,ks=null,re=!1,J=!1,ct=null,K=!1;function we(e){v=e}function Ee(e){m=e}function aa(e){$e=e}function We(e){C=e}function wt(e){ue=e}function Ve(e){B=e}function De(e){X=e}function xs(e){ke=e}function Ss(e){lt=e}function fe(e){ks=e}function Ms(e){re=e}function Rs(e){J=e}function Qe(e){ct=e}function Ps(e){K=e}var Ie=()=>b?String(b.settings?.phase||"1"):"3",P=()=>{let e=C.settings.phase;return e!=="post"&&Number(e)<Number(Ie())?Ie():e},R=()=>P()==="post"?"5":P(),vs=()=>j.id?[...["1","2","3","4","5"].filter(e=>Number(e)>=Number(Ie())),"post"]:["1","2","3","4","5","post"],Aa=e=>Object.entries(e||{}).filter(([t])=>Number(t)>=Number(Ie())),D=e=>!!C.checks[e],Z=e=>D(e)?"checked":"",G=e=>e==="post"?"Post Phase 5":"Phase "+e;async function Pe(e,t){await Y;let a=await te("/api/context?save="+encodeURIComponent(e)+"&profile="+encodeURIComponent(t));j=a.save,E=a.profile,C=a.state,b=a.plan,S=a.handbook||ws||S,B="",ks=null,J=!1,ct=null,K=!1,re=!1,M("#detail").close()}var H=()=>b.stages[R()];async function pe(){try{if(v=await te("/api/workspace"),!v.user){$e="login",bt();return}[S,qe]=await Promise.all([te("/plan.json"),te("/progression.json")]),ws=S;let e=v.saves.find(t=>t.id===v.activeSave)||v.saves[0];e?(await Pe(e.id,e.activeProfile),ue=["plan","factories","storage","resources","backup","profiles","wizard","account"].includes(location.hash.slice(1))?location.hash.slice(1):"plan",ue==="wizard"&&!m&&(ue="profiles"),f()):(j={id:"",name:"New save"},E={id:"",name:"Choose a profile"},C={settings:{phase:fo?"1":"3"},checks:{},notes:{},deliveries:{},customTasks:[]},b=null,Ge())}catch(e){M("#app").innerHTML=String(i`<section class="loading">
        <h1>Could not open the planner</h1>
        <p>${e.message}</p>
        <button class="btn" id="retry">Try again</button>
      </section>`),M("#retry").onclick=pe}}import{knownWorld as go,nodePresets as bo,presetSurvey as As}from"./preferences.js";import{bayCapacity as yo}from"./state.js";document.addEventListener("click",e=>{e.target.closest(".ada-mark")&&!Ye&&ps()});document.addEventListener("click",async e=>{let t=e.target.closest("button,a");if(t){if(t.hasAttribute("data-close")&&(M("#detail").close(),fe(null)),t.dataset.factory&&ya(t.dataset.factory),t.dataset.slot&&fa(t.dataset.slot),t.dataset.completeBay){let a=me().find(s=>s.id===t.dataset.completeBay);if(a){t.disabled=!0;try{await I({type:"checks",keys:a.items.filter(s=>s.name).flatMap(s=>tt(s.id)),value:!0}),f(),A("Room "+a.id+" completed. You can uncheck individual containers if needed.")}catch{}finally{t.disabled=!1}}}if(t.dataset.floor&&(De(t.dataset.floor),Ve(""),f()),t.hasAttribute("data-ada-next"))if(Fe)gt(),f();else{cs(Ne+1);let a=ea(),s=M("#ada-line");if(a&&s){s.textContent=a.text;let r=s.closest(".ada");r&&(r.dataset.tone=a.tone)}}if(t.dataset.adaMute&&(ds(t.dataset.adaMute==="on"),us(),gt(),f()),t.hasAttribute("data-toggle-layout")&&(Ms(!re),f()),t.hasAttribute("data-toggle-plan-edit")&&(Rs(!J),Qe(null),f()),t.hasAttribute("data-toggle-factory-edit")&&(Ps(!K),f()),t.dataset.moveTask){let a=ye().map(o=>o.id),s=a.indexOf(t.dataset.moveTask),r=s+Number(t.dataset.dir);if(s>=0&&r>=0&&r<a.length){[a[s],a[r]]=[a[r],a[s]];try{await I({type:"taskOrder",phase:P(),ids:a}),f()}catch{}}}if(t.dataset.editTask&&(Qe(t.dataset.editTask),f()),t.hasAttribute("data-cancel-task-edit")&&(Qe(null),f()),t.dataset.removeStep){let a=t.dataset.removeStep;if(a.startsWith("custom-")){if(confirm("Delete this personal task?"))try{await I({type:"removeTask",id:a}),f()}catch{}}else if(confirm("Remove this step from your build plan? Its checkmark is kept and you can restore the step while editing."))try{await I({type:"taskRemove",id:a}),f()}catch{}}if(t.dataset.restoreTask)try{await I({type:"taskRestore",id:t.dataset.restoreTask}),f()}catch{}if(t.dataset.removeGroup&&confirm("Remove this group? The factories stay in the list and keep their progress."))try{await I({type:"factoryGroupRemove",id:t.dataset.removeGroup}),f()}catch{}if(t.dataset.unassign){let a=t.dataset.unassign,s=Q(a).filter(r=>r.group!==t.dataset.group).map(r=>({group:r.group,rate:r.rate}));try{await I({type:"factoryAssign",key:a,groups:s}),f()}catch{}}if(t.dataset.clearSlot){t.disabled=!0;try{await I({type:"storageSlotClear",key:t.dataset.clearSlot}),f(),A("Container cleared. Its saved checkmarks are kept with the address.")}catch{t.disabled=!1}}if(t.dataset.removeBay&&confirm("Remove this added bay? Saved checkmarks for its addresses are kept.")){t.disabled=!0;try{await I({type:"storageBayRemove",id:t.dataset.removeBay}),f()}catch{t.disabled=!1}}if(t.dataset.removeFloor&&confirm("Remove this added floor?")){t.disabled=!0;try{await I({type:"storageFloorRemove",id:t.dataset.removeFloor}),De("ground"),f()}catch{t.disabled=!1}}if(t.dataset.saveNote){let a=t.closest("dialog");t.disabled=!0;try{await I({type:"note",key:t.dataset.saveNote,value:document.getElementById(t.dataset.input).value}),a?.open&&a.contains(t)&&(a.close(),fe(null)),A("Notes saved.")}catch{}finally{t.disabled=!1}}if(t.dataset.remove&&confirm("Delete this personal task?"))try{await I({type:"removeTask",id:t.dataset.remove}),f()}catch{}}});document.addEventListener("change",async e=>{let t=e.target;if(t.dataset.completeSlot){let a=t.checked;t.disabled=!0;try{await I({type:"checks",keys:tt(t.dataset.completeSlot),value:a}),f()}catch{t.checked=!a}finally{t.disabled=!1}}if(t.dataset.check){let a=t.checked;t.disabled=!0;try{await I({type:"check",key:t.dataset.check,value:a}),f()}catch{t.checked=!a}finally{t.disabled=!1}}if(t.id==="phase-picker"){t.disabled=!0;try{await I({type:"phase",value:t.value}),Ve(""),f()}catch{t.value=P()}finally{t.disabled=!1}}if(t.id==="factory-filter"&&(xs(t.value),f()),t.id==="hide-done"&&(Ss(t.checked),f()),["recipes","mainPower","pureIngots"].includes(t.name)&&m&&M("#wizard-form")&&(ie(M("#wizard-form")),f()),m?.mode==="guided"&&M("#wizard-form")&&(String(t.name).startsWith("guided:")||t.name==="topup"||t.name==="topic")&&(de(M("#wizard-form")),f()),m?.mode==="extraction"&&M("#wizard-form")&&/^(mark|clock|purity|distribution|node:|well:|used:)/.test(String(t.name))){if(ze(M("#wizard-form")),["purity","distribution"].includes(t.name)){let a=m.settings;go(a.purity,a.distribution)&&(m.extraction=As(a.purity,Me(m),a.distribution))}f()}if(["supplyItem","supplyRate"].includes(t.name)&&m&&M("#wizard-form")&&(Te(t),m.mode==="guided"?de(M("#wizard-form")):ie(M("#wizard-form")),f()),t.name==="alt"){let a=t.closest(".alt-picker"),s=a?.querySelector(".alt-picker-head b");s&&(s.textContent=`Alternate recipes · ${a.querySelectorAll("input[name=alt]:checked").length} selected`);let r=t.closest(".alt-row")?.querySelector("input[name=altpref]");r&&(r.disabled=!t.checked,t.checked||(r.checked=!1))}if(t.dataset.bayRename){t.disabled=!0;try{await I({type:"storageBayRename",id:t.dataset.bayRename,name:t.value})}catch{}finally{t.disabled=!1,f()}}if(t.dataset.groupRename){t.disabled=!0;try{await I({type:"factoryGroupRename",id:t.dataset.groupRename,name:t.value})}catch{}finally{t.disabled=!1,f()}}if(t.dataset.assignAdd&&t.value){let a=t.dataset.assignAdd,s=[...Q(a).map(r=>({group:r.group,rate:r.rate})),{group:t.value,rate:null}];t.disabled=!0;try{await I({type:"factoryAssign",key:a,groups:s})}catch{}finally{t.disabled=!1,f()}}if(t.dataset.assignRate){let a=t.dataset.assignRate,s=t.value.trim(),r=null;if(s!==""&&(r=Number(s),!Number.isFinite(r)||r<=0)){A("Enter a rate above 0, or leave the field empty for the whole output or the remainder.",!0),f();return}let o=Q(a).map(n=>n.group===t.dataset.group?{group:n.group,rate:r}:{group:n.group,rate:n.rate});t.disabled=!0;try{await I({type:"factoryAssign",key:a,groups:o})}catch{}finally{t.disabled=!1,f()}}if(t.dataset.delivery){let a=b?ka(t.dataset.delivery):S.deliveries.find(r=>r.id===t.dataset.delivery),s=Number(t.value);if(!Number.isInteger(s)||s<0||s>a.target){A("Enter a whole number between 0 and "+c(a.target)+".",!0),t.value=C.deliveries[a.id]??(E.id==="original"?a.initial:0);return}try{await I({type:"delivery",key:a.id,value:s}),f()}catch{t.value=C.deliveries[a.id]??(E.id==="original"?a.initial:0)}}if(t.id==="import-file"&&t.files[0]){let a=t.files[0];try{if(a.size>2*1024*1024)throw new Error("Choose a backup smaller than 2 MB.");let s=JSON.parse(await a.text());if(!confirm("Replace current progress with this backup?")){t.value="";return}await Y,We(await te("/api/import",{method:"POST",headers:{"Content-Type":"application/json","X-Planner-Request":"1",...vt()},body:JSON.stringify(s)})),f(),A("Backup restored.")}catch(s){A(s.message||"Could not restore backup.",!0),t.value=""}}});document.addEventListener("input",e=>{if(["factory-search","storage-search","plan-search"].includes(e.target.id)&&(Ve(e.target.value),f()),e.target.id==="alt-filter"){let t=e.target.value.trim().toLowerCase();for(let a of document.querySelectorAll(".alt-row"))a.hidden=t!==""&&!a.dataset.altText.includes(t)}if(e.target.id==="rate-filter"){let t=e.target.value.trim().toLowerCase();for(let a of document.querySelectorAll(".rate-row"))a.hidden=t!==""&&!a.dataset.rateText.includes(t)}["buildRate","storageRate"].includes(e.target.name)&&vo()});function vo(){let e=document.querySelectorAll(".rate-row");if(!e.length)return;let t=r=>{let o=document.querySelector("[name="+r+"]")?.value;return o!==void 0&&o!==""&&Number.isFinite(Number(o))?Number(o):null},a=t("storageRate"),s=t("buildRate")??a;for(let r of e){let o=r.dataset.rateGroup==="delivered"?0:r.dataset.rateGroup==="build"?s:a,n=r.querySelector("input");n&&o!==null&&(n.placeholder=c(o))}}document.addEventListener("input",e=>{e.target?.name==="supplyItem"&&m&&(es(e.target),Kt(e.target))});document.addEventListener("keydown",e=>{let t=e.target;if(t?.name!=="supplyItem"||!m)return;let a=t.closest(".supply-field")?.querySelector(".supply-options"),s=a&&!a.hidden?[...a.querySelectorAll(".supply-option")]:[];if(e.key==="Escape"){s.length&&(e.preventDefault(),Te(t));return}if(e.key==="ArrowDown"&&!s.length){Kt(t),e.preventDefault();return}if(!s.length)return;let r=s.findIndex(o=>o.getAttribute("aria-selected")==="true");if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();let o=e.key==="ArrowDown"?(r+1)%s.length:r<=0?s.length-1:r-1;s.forEach((n,l)=>n.setAttribute("aria-selected",String(l===o))),s[o].scrollIntoView({block:"nearest"})}else e.key==="Enter"&&(e.preventDefault(),Vt(s[r>=0?r:0]))});document.addEventListener("focusout",e=>{let t=e.target;if(t?.name!=="supplyItem")return;let a=t.closest(".supply-field");a&&!a.contains(e.relatedTarget)&&Te(t)});document.addEventListener("submit",async e=>{if(e.target.id==="add-task"){e.preventDefault();let t=new FormData(e.target).get("title").trim();if(!t)return;let a=e.target.querySelector("button");a.disabled=!0;try{await I({type:"addTask",id:"custom-"+Array.from(crypto.getRandomValues(new Uint8Array(16)),s=>s.toString(16).padStart(2,"0")).join(""),phase:P(),title:t}),f()}catch{a.disabled=!1}}});document.addEventListener("submit",async e=>{let t=e.target,a=()=>String(new FormData(t).get("name")||"").trim();if(t.id==="add-floor"){e.preventDefault();let s=a();if(!s)return;try{await I({type:"storageFloorAdd",id:"cf-"+Array.from(crypto.getRandomValues(new Uint8Array(6)),r=>r.toString(16).padStart(2,"0")).join(""),label:s}),f()}catch{}}if(t.id==="rename-floor"){e.preventDefault();let s=a();if(!s)return;try{await I({type:"storageFloorRename",id:X,label:s}),f()}catch{}}if(t.id==="add-bay"){e.preventDefault();let s=a();if(!s)return;let r=ma();if(!r){A("No free bay letters left.",!0);return}try{await I({type:"storageBayAdd",id:r,name:s,floor:X}),f()}catch{}}if(t.classList.contains("add-container")){e.preventDefault();let s=a();if(!s)return;let r=me().find(n=>n.id===t.dataset.bay);if(!r)return;let o=r.items.find(n=>!n.name)?.id||(r.items.length<yo?r.id+String(r.items.length+1).padStart(2,"0"):null);if(!o){A("This bay holds the most addresses it can. Add another bay.",!0);return}try{await I({type:"storageSlotAssign",key:o,name:s}),f()}catch{}}if(t.id==="add-group"){e.preventDefault();let s=a();if(!s)return;try{await I({type:"factoryGroupAdd",id:"fg-"+Array.from(crypto.getRandomValues(new Uint8Array(6)),r=>r.toString(16).padStart(2,"0")).join(""),name:s}),f()}catch{}}if(t.dataset.taskEdit){e.preventDefault();let s=t.dataset.taskEdit,r=new FormData(t),o=nt().find(d=>d.id===s),n=String(r.get("title")||"").trim(),l=String(r.get("body")||"").trim(),u=String(r.get("link")||"");if(!n)return;try{await I({type:"taskEdit",id:s,title:o&&n===o.title?"":n,body:o&&l===String(o.body||"").trim()?"":l,link:u===je(s)?"":u}),Qe(null),f()}catch{}}});document.addEventListener("error",e=>{let t=e.target;t?.tagName==="IMG"&&t.classList?.contains("item-icon")&&(t.style.visibility="hidden")},!0);window.addEventListener("hashchange",()=>{wt(["plan","factories","storage","resources","backup","profiles","wizard","account"].includes(location.hash.slice(1))?location.hash.slice(1):"plan"),Ve(""),C&&f(),window.scrollTo(0,0)});M("#detail").addEventListener("click",e=>{e.target===M("#detail")&&(M("#detail").close(),fe(null))});window.addEventListener("beforeunload",e=>{Ke&&(e.preventDefault(),e.returnValue="")});document.addEventListener("click",async e=>{let t=e.target.closest("button");if(t){if(t.hasAttribute("data-new-save")&&Ge(),t.dataset.newProfile&&Ge(t.dataset.newProfile),t.dataset.calcFactory&&Ra(t.dataset.calcFactory),t.dataset.groupChain&&va(t.dataset.groupChain),t.dataset.altInfo&&_a(t.dataset.altInfo),t.hasAttribute("data-alt-all")||t.hasAttribute("data-alt-none")){let a=t.hasAttribute("data-alt-all"),s=t.closest(".alt-picker");for(let r of s.querySelectorAll(".alt-row:not([hidden]) input[name=alt]")){r.checked=a;let o=r.closest(".alt-row").querySelector("input[name=altpref]");o&&(o.disabled=!a,a||(o.checked=!1))}s.querySelector(".alt-picker-head b").textContent=`Alternate recipes · ${s.querySelectorAll("input[name=alt]:checked").length} selected`}if(t.hasAttribute("data-alt-best")&&m&&!t.disabled){t.disabled=!0;let a=t.textContent;try{ie(M("#wizard-form"));let s=await V("/api/preview",{settings:{...m.settings,recipes:"all"}},!0,Oe(t,"Calculating…"));m.settings.alternateRecipes=Ua(s),f(),A(`Selected ${m.settings.alternateRecipes.length} alternate recipes the planner uses with your current settings.`)}catch(s){Be(M("#wizard-form"),s),t.disabled=!1,t.textContent=a}}if(t.hasAttribute("data-round-up")){if(!ve())return;t.disabled=!0;try{await Y;let a=await V("/api/round-up",{},!0,Oe(t,"Recalculating…"));we(a.workspace),await Pe(a.saveId,a.profileId),f(),A("Created rounded profile. "+a.reviewCount+" completed factory checks need review; previous progress is preserved.")}catch(a){A(a.message,!0),t.disabled=!1,t.textContent="Round up production"}}if(t.dataset.duplicateProfile){if(!ve())return;t.disabled=!0,t.textContent="Copying…";try{await Y;let a=await V("/api/duplicate-profile",{saveId:t.dataset.duplicateSave,profileId:t.dataset.duplicateProfile});we(a.workspace),await Pe(a.saveId,a.profileId),ne("plan"),A("Copy created and opened. Changes here leave the original profile untouched.")}catch(a){A(a.message,!0),t.disabled=!1,t.textContent="Duplicate"}}if(t.dataset.shareProfile){t.disabled=!0;try{await Y;let a=v.saves.find(o=>o.id===t.dataset.shareSave),s=a?.profiles.find(o=>o.id===t.dataset.shareProfile),r=await te("/api/export-saves?save="+encodeURIComponent(t.dataset.shareSave)+"&profile="+encodeURIComponent(t.dataset.shareProfile)+"&share=1");$t(r,(le(s?.name||"profile")||"profile")+"-share.json"),A("Share file downloaded: the plan without your progress. Others import it under Backup → Import saves.")}catch(a){A(a.message,!0)}finally{t.disabled=!1}}if(t.dataset.removeProfile){if(!ve())return;let a=v.saves.find(r=>r.id===t.dataset.removeSave),s=a?.profiles.find(r=>r.id===t.dataset.removeProfile);if(!s||!confirm('Are you sure? Remove "'+s.name+'" and its progress and notes?'+(a.profiles.length===1?" This also removes the empty save.":" Other profiles keep their progress.")))return;t.disabled=!0;try{await Y,await V("/api/remove-profile",{saveId:a.id,profileId:s.id,confirmed:!0}),await pe(),v.saves.length&&ne("profiles"),A("Profile removed.")}catch(r){A(r.message,!0),t.disabled=!1}}if(t.dataset.openSave){if(!ve())return;t.disabled=!0;try{await Y,we(await V("/api/select",{saveId:t.dataset.openSave,profileId:t.dataset.openProfile})),await Pe(t.dataset.openSave,t.dataset.openProfile),ne("plan")}catch(a){A(a.message,!0),t.disabled=!1}}if(t.dataset.wizardStep&&await Ue(Number(t.dataset.wizardStep)),t.hasAttribute("data-wizard-back")&&await Ue(m.step-1),t.hasAttribute("data-guided-back")&&await ft(m.guidedStep-1),t.dataset.guidedAdvanced&&Xt(Number(t.dataset.guidedAdvanced)),t.hasAttribute("data-guided-start")&&os(),t.hasAttribute("data-open-extraction")&&Ga(),t.dataset.nodePreset&&m){let a=M("#wizard-form");a&&ze(a),m.extraction=As(t.dataset.nodePreset,Me(m),m.settings.distribution),m.extractionUndo=null,m.settings.purity=t.dataset.nodePreset,f(),A("Filled in the default world at "+(bo.find(([s])=>s===t.dataset.nodePreset)?.[1]||"that purity")+". Change any count that does not match your save.")}if(t.hasAttribute("data-node-reset")&&m){let a=M("#wizard-form");a&&ze(a),ja(),f(),A("Cleared. Every count is zero, your miner mark and clock are kept — and Undo reset puts it all back.")}if(t.hasAttribute("data-node-undo")&&m&&(za(),f(),A("Put back the counts you had before the reset.")),t.dataset.extractionStep&&await He(Number(t.dataset.extractionStep)),t.hasAttribute("data-extraction-back")&&await He(m.extractionStep-1),t.hasAttribute("data-extraction-cancel")&&pt(),t.dataset.supplyPick){Vt(t);return}if(t.dataset.supplyRemove&&m){let a=M("#wizard-form");a&&(m.mode==="guided"?de(a):ie(a));let s=Yt(m);s.splice(Number(t.dataset.supplyRemove),1),m.settings.existingSupply=Object.fromEntries(s.filter(r=>Number(r.rate)>0).map(r=>[r.name.trim(),Number(r.rate)]).filter(([r])=>(v.catalog.supplyItems||[]).includes(r))),m.preview=null,f()}if(t.hasAttribute("data-cancel-wizard")&&(Ee(null),ne("profiles")),t.dataset.authMode&&(aa(t.dataset.authMode),bt()),t.hasAttribute("data-logout")){if(!ve())return;await Y,await V("/api/logout",{}),aa("login"),await pe()}}});document.addEventListener("submit",async e=>{let t=e.target;if(!["wizard-form","auth-form","rename-form"].includes(t.id))return;e.preventDefault();let a=t.querySelector('button[type="submit"]')||t.querySelector("button");a.disabled=!0;try{if(t.id==="wizard-form"){let s=m;if(s.mode==="extraction"){a.disabled=!1,await He(s.extractionStep+1);return}if(s.mode==="guided"&&s.guidedStep<=ee().length){a.disabled=!1,await ft(s.guidedStep+1);return}if(s.step<5){a.disabled=!1,await Ue(s.step+1);return}if(s.step===5){Ut(t);let r=await V("/api/profiles",{saveId:s.saveId,saveName:s.saveName,name:s.name,settings:s.settings,carryFrom:s.saveId?s.carryFrom:null,carry:s.carry,built:rs(s,t)},!0,Oe(a,"Saving profile…"));we(r.workspace),await Pe(r.saveId,r.profileId),Ee(null),ne("plan");let o=[r.carriedChecks?kt(r.carriedChecks,"step")+" carried over":"",r.reviewCount?kt(r.reviewCount,"expanded production line")+" left for review":""].filter(Boolean).join("; ");A("Profile created"+(o?": "+o+". ":". ")+"Your other progress is unchanged.");return}}else if(t.id==="auth-form"){let s=Object.fromEntries(new FormData(t));s.registration=new FormData(t).has("registration");let r=v.accountsEnabled?$e:"setup";await V("/api/"+r,s,!1),await pe()}else{we(await V("/api/rename",Object.fromEntries(new FormData(t))));let s=v.saves.find(r=>r.id===j.id);j.name=s.name,E.name=s.profiles.find(r=>r.id===E.id).name,f()}}catch(s){if(t.id==="wizard-form")Be(t,s);else{let r=t.querySelector(".form-error");r?r.textContent=s.message:A(s.message,!0)}a.disabled=!1,t.id==="wizard-form"&&(a.textContent=m.mode==="guided"&&m.guidedStep<=ee().length?m.guidedStep>=ee().length?"Calculate plan":"Continue →":m.step===5?"Create profile":m.step===4?"Calculate plan":"Continue →")}});document.addEventListener("click",async e=>{let t=e.target.closest("button");if(t){if(t.hasAttribute("data-export-saves")){t.disabled=!0;try{await Y,$t(await te("/api/export-saves"),"satisfactory-full-saves.json"),we(await te("/api/workspace")),A("Full save backup downloaded.")}catch(a){A(a.message,!0)}finally{t.disabled=!1}}if(t.hasAttribute("data-persist-storage"))try{let a=await navigator.storage?.persist?.();A(a?"Persistent browser storage enabled.":"Browser did not grant persistence. Keep downloaded backups.")}catch(a){A(a.message,!0)}}});document.addEventListener("change",async e=>{if(e.target.id!=="import-saves"||!e.target.files[0])return;let t=e.target.files[0];try{if(t.size>50*1024*1024)throw Error("Choose a save export smaller than 50 MB.");let a=JSON.parse(await t.text());if(!confirm("Import these saves as new copies? Existing saves will be kept."))return;await Y,await V("/api/import-saves",a,!1),await pe(),ne("profiles"),A("Imported saves. Existing progress was kept.")}catch(a){A(a.message,!0)}finally{e.target.value=""}});pe();
