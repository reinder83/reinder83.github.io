const ready=import('./planner.mjs');
self.onmessage=async({data})=>{try{const {calculate}=await ready;self.postMessage({id:data.id,result:calculate(data.settings,phase=>self.postMessage({id:data.id,phase}))});}catch(e){self.postMessage({id:data.id,error:e.message});}};
