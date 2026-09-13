const ready=import('./planner.mjs');
self.onmessage=async({data})=>{try{const {calculate}=await ready;self.postMessage({id:data.id,result:calculate(data.settings)});}catch(e){self.postMessage({id:data.id,error:e.message});}};
