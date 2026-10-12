const n=t=>t?[t.intro,t.columns,...t.rows,t.total??[],t.after??""].flat().join(" "):"",r=t=>t?[t.intro,...t.items,t.after??""].join(" "):"";export{r as listText,n as tableText};
