var M=Object.defineProperty,j=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var m=(e,n,s)=>n in e?M(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,h=(e,n)=>{for(var s in n||(n={}))F.call(n,s)&&m(e,s,n[s]);if(d)for(var s of d(n))I.call(n,s)&&m(e,s,n[s]);return e},b=(e,n)=>j(e,k(n));import{c as f,h as a,g as Q}from"./index.cacd9877.js";import{c as _,b as q,h as u}from"./render.61fc5511.js";const C={xs:18,sm:24,md:32,lg:38,xl:46},O={size:String};function D(e,n=C){return f(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const x="0 0 24 24",p=e=>e,c=e=>`ionicons ${e}`,S={"mdi-":e=>`mdi ${e}`,"icon-":p,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":c,"ion-ios":c,"ion-logo":c,"iconfont ":p,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},$={o_:"-outlined",r_:"-round",s_:"-sharp"},P=new RegExp("^("+Object.keys(S).join("|")+")"),U=new RegExp("^("+Object.keys($).join("|")+")"),V=/^[Mm]\s?[-+]?\.?\d/,A=/^img:/,G=/^svguse:/,H=/^ion-/,J=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var T=_({name:"QIcon",props:b(h({},O),{tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean}),setup(e,{slots:n}){const{proxy:{$q:s}}=Q(),w=D(e),y=f(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),r=f(()=>{let i,t=e.name;if(t==="none"||!t)return{none:!0};if(s.iconMapFn!==null){const o=s.iconMapFn(t);if(o!==void 0)if(o.icon!==void 0){if(t=o.icon,t==="none"||!t)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(V.test(t)===!0){const[o,l=x]=t.split("|");return{svg:!0,viewBox:l,nodes:o.split("&&").map(z=>{const[B,E,R]=z.split("@@");return a("path",{style:E,d:B,transform:R})})}}if(A.test(t)===!0)return{img:!0,src:t.substring(4)};if(G.test(t)===!0){const[o,l=x]=t.split("|");return{svguse:!0,src:o.substring(7),viewBox:l}}let v=" ";const g=t.match(P);if(g!==null)i=S[g[1]](t);else if(J.test(t)===!0)i=t;else if(H.test(t)===!0)i=`ionicons ion-${s.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else{i="notranslate material-icons";const o=t.match(U);o!==null&&(t=t.substring(2),i+=$[o[1]]),v=t}return{cls:i,content:v}});return()=>{const i={class:y.value,style:w.value,"aria-hidden":"true",role:"presentation"};return r.value.none===!0?a(e.tag,i,q(n.default)):r.value.img===!0?a("span",i,u(n.default,[a("img",{src:r.value.src})])):r.value.svg===!0?a("span",i,u(n.default,[a("svg",{viewBox:r.value.viewBox},r.value.nodes)])):r.value.svguse===!0?a("span",i,u(n.default,[a("svg",{viewBox:r.value.viewBox},[a("use",{"xlink:href":r.value.src})])])):(r.value.cls!==void 0&&(i.class+=" "+r.value.cls),a(e.tag,i,u(n.default,[r.value.content])))}}});export{T as Q,D as a,O as b,C as u};
