var $=Object.defineProperty;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var y=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&y(e,n,t[n]);if(g)for(var n of g(t))_.call(t,n)&&y(e,n,t[n]);return e};import{c as x,h as B}from"./render.7e5f5adc.js";import{c as m,h as F,a as C,g as P,m as q,D as Q,I as h,Y as E,_ as v,r as f,J as c,S as d,R as r,O as s,F as I,U as S,K as j,L as D,Q as H,d as K}from"./index.733177c2.js";var b=x({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=P(),a=C(q);C(Q,()=>{console.error("QPage needs to be child of QPageContainer")});const i=m(()=>{const o=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const u=a.isContainer.value===!0?a.containerHeight.value:n.screen.height;return e.styleFn(o,u)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-o+"px":n.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":n.screen.height-o+"px"}}),l=m(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>F("main",{class:l.value,style:i.value},B(t.default))}});function w(){const e=f(0);function t(){return e.value+=1,e.value}return{clickCount:e,increment:t}}function z(e){return{todoCount:m(()=>e.value.length)}}const A=h({name:"ExampleComponent",props:{title:{type:String,required:!0},todos:{type:Array,default:()=>[]},meta:{type:Object,required:!0},active:{type:Boolean}},setup(e){return p(p({},w()),z(E(e,"todos")))}});function L(e,t,n,a,i,l){return c(),d("div",null,[r("p",null,s(e.title),1),r("ul",null,[(c(!0),d(I,null,S(e.todos,o=>(c(),d("li",{key:o.id,onClick:t[0]||(t[0]=(...u)=>e.increment&&e.increment(...u))},s(o.id)+" - "+s(o.content),1))),128))]),r("p",null,"Count: "+s(e.todoCount)+" / "+s(e.meta.totalCount),1),r("p",null,"Active: "+s(e.active?"yes":"no"),1),r("p",null,"Clicks on todos: "+s(e.clickCount),1)])}var N=v(A,[["render",L]]);const O=h({name:"IndexPage",components:{ExampleComponent:N},setup(){const e=f([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),t=f({totalCount:1200});return{todos:e,meta:t}}});function R(e,t,n,a,i,l){const o=H("example-component");return c(),j(b,{class:"row items-center justify-evenly"},{default:D(()=>[K(o,{title:"Example component",active:"",todos:e.todos,meta:e.meta},null,8,["todos","meta"])]),_:1})}var U=v(O,[["render",R]]);export{U as default};
