var j=Object.defineProperty,k=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var m=(e,n,o)=>n in e?j(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,d=(e,n)=>{for(var o in n||(n={}))z.call(n,o)&&m(e,o,n[o]);if(g)for(var o of g(n))I.call(n,o)&&m(e,o,n[o]);return e},h=(e,n)=>k(e,F(n));import{a as Q,u as _}from"./use-size.d8dd7bc9.js";import{a as q,b as C,h as u}from"./render.6399f459.js";import{c as p,h as a,g as O}from"./index.baa27281.js";const b="0 0 24 24",x=e=>e,l=e=>`ionicons ${e}`,$={"mdi-":e=>`mdi ${e}`,"icon-":x,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":l,"ion-ios":l,"ion-logo":l,"iconfont ":x,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},w={o_:"-outlined",r_:"-round",s_:"-sharp"},P=new RegExp("^("+Object.keys($).join("|")+")"),U=new RegExp("^("+Object.keys(w).join("|")+")"),V=/^[Mm]\s?[-+]?\.?\d/,A=/^img:/,D=/^svguse:/,G=/^ion-/,H=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var T=q({name:"QIcon",props:h(d({},Q),{tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean}),setup(e,{slots:n}){const{proxy:{$q:o}}=O(),y=_(e),B=p(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),r=p(()=>{let s,t=e.name;if(t==="none"||!t)return{none:!0};if(o.iconMapFn!==null){const i=o.iconMapFn(t);if(i!==void 0)if(i.icon!==void 0){if(t=i.icon,t==="none"||!t)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(V.test(t)===!0){const[i,c=b]=t.split("|");return{svg:!0,viewBox:c,nodes:i.split("&&").map(E=>{const[R,S,M]=E.split("@@");return a("path",{style:S,d:R,transform:M})})}}if(A.test(t)===!0)return{img:!0,src:t.substring(4)};if(D.test(t)===!0){const[i,c=b]=t.split("|");return{svguse:!0,src:i.substring(7),viewBox:c}}let f=" ";const v=t.match(P);if(v!==null)s=$[v[1]](t);else if(H.test(t)===!0)s=t;else if(G.test(t)===!0)s=`ionicons ion-${o.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else{s="notranslate material-icons";const i=t.match(U);i!==null&&(t=t.substring(2),s+=w[i[1]]),f=t}return{cls:s,content:f}});return()=>{const s={class:B.value,style:y.value,"aria-hidden":"true",role:"presentation"};return r.value.none===!0?a(e.tag,s,C(n.default)):r.value.img===!0?a("span",s,u(n.default,[a("img",{src:r.value.src})])):r.value.svg===!0?a("span",s,u(n.default,[a("svg",{viewBox:r.value.viewBox},r.value.nodes)])):r.value.svguse===!0?a("span",s,u(n.default,[a("svg",{viewBox:r.value.viewBox},[a("use",{"xlink:href":r.value.src})])])):(r.value.cls!==void 0&&(s.class+=" "+r.value.cls),a(e.tag,s,u(n.default,[r.value.content])))}}});export{T as Q};
