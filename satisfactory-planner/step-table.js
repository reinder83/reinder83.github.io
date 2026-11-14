const n=t=>t?[t.intro,t.columns,...t.rows,t.total??[],t.after??""].flat().join(" "):"",e=t=>t?[t.intro,...t.items,t.after??""].join(" "):"";export{e as listText,n as tableText};
