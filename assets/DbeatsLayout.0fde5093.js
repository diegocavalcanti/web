import{Q as p}from"./QBtn.24c6b515.js";import{E as d,Q as m,a as f,b,c as k,d as w,e as g,f as _,g as y}from"./EssentialLink.991704c9.js";import{_ as v,f as L,r as i,j as n,k as l,l as a,m as r,d as t,n as Q,t as D,p as h,q as C,F as B,s as P,u as V}from"./index.cacd9877.js";import"./QIcon.f5f17679.js";import"./render.61fc5511.js";const q=[{title:"Home",caption:"O que \xE9 Dbeats",icon:"home",link:"/dbeats/home"},{title:"FAQ",caption:"Perguntas Frequentes",icon:"help",link:"/dbeats/faq"},{title:"Ritmos",caption:"Ritmos para Baixar",icon:"policy",link:"/dbeats/songs"},{title:"Policy",caption:"Privacy Policy",icon:"policy",link:"/dbeats/privacy-policy"},{title:"Youtube",caption:"Canal",icon:"bi-youtube",link:"https://www.youtube.com/c/ddbits",externalLink:!0},{title:"Instagram",caption:"https://www.instagram.com/ddbits",icon:"bi-instagram",link:"https://www.instagram.com/ddbits",externalLink:!0}],F=L({name:"DbeatsLayout",components:{EssentialLink:d},setup(){const e=i(!1);return{versaoSistema:i("1.0.0"),essentialLinks:q,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),x=P(" Dbeats ");function E(e,o,O,S,T,$){const u=r("essential-link"),c=r("router-view");return n(),l(m,{view:"lHh Lpr lFf"},{default:a(()=>[t(k,{elevated:""},{default:a(()=>[t(f,{class:"bg-primary"},{default:a(()=>[t(p,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),t(b,null,{default:a(()=>[x]),_:1}),Q("div",null,D(e.versaoSistema),1)]),_:1})]),_:1}),t(_,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=s=>e.leftDrawerOpen=s),"show-if-above":"",bordered:""},{default:a(()=>[t(w,null,{default:a(()=>[t(g,{header:"",class:"bg-primary q-pa-lg"}),(n(!0),h(B,null,C(e.essentialLinks,s=>(n(),l(u,V({key:s.title},s),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),t(y,null,{default:a(()=>[t(c)]),_:1})]),_:1})}var A=v(F,[["render",E]]);export{A as default};