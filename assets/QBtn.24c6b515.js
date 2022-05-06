var le=Object.defineProperty,ie=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var I=(e,n,t)=>n in e?le(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,S=(e,n)=>{for(var t in n||(n={}))se.call(n,t)&&I(e,t,n[t]);if(N)for(var t of N(n))ce.call(n,t)&&I(e,t,n[t]);return e},O=(e,n)=>ie(e,oe(n));import{c as l,h,i as de,v as z,x as fe,y as ve,z as F,A as me,B as J,g as Z,r as Q,C as ge,D as he,E as be,G as R,H as ye}from"./index.cacd9877.js";import{u as V,a as ke,b as pe,Q as D}from"./QIcon.f5f17679.js";import{c as ee,a as xe,h as qe}from"./render.61fc5511.js";const Le={size:{type:[Number,String],default:"1em"},color:String};function Ee(e){return{cSize:l(()=>e.size in V?`${V[e.size]}px`:e.size),classes:l(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Se=ee({name:"QSpinner",props:O(S({},Le),{thickness:{type:Number,default:5}}),setup(e){const{cSize:n,classes:t}=Ee(e);return()=>h("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function $e(e,n){const t=e.style;for(const u in n)t[u]=n[u]}function Ue(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=de(e)===!0?e.value:e;if(n)return n.$el||n}function Ce(e,n=250){let t=!1,u;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),u=e.apply(this,arguments)),u}}function H(e,n,t,u){t.modifiers.stop===!0&&F(e);const f=t.modifiers.color;let s=t.modifiers.center;s=s===!0||u===!0;const v=document.createElement("span"),d=document.createElement("span"),g=me(e),{left:$,top:L,width:E,height:p}=n.getBoundingClientRect(),r=Math.sqrt(E*E+p*p),x=r/2,m=`${(E-r)/2}px`,i=s?m:`${g.left-$-x}px`,o=`${(p-r)/2}px`,b=s?o:`${g.top-L-x}px`;d.className="q-ripple__inner",$e(d,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${i},${b},0) scale3d(.2,.2,1)`,opacity:0}),v.className=`q-ripple${f?" text-"+f:""}`,v.setAttribute("dir","ltr"),v.appendChild(d),n.appendChild(v);const C=()=>{v.remove(),clearTimeout(k)};t.abort.push(C);let k=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${m},${o},0) scale3d(1,1,1)`,d.style.opacity=.2,k=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,k=setTimeout(()=>{v.remove(),t.abort.splice(t.abort.indexOf(C),1)},275)},250)},50)}function W(e,{modifiers:n,value:t,arg:u,instance:f}){const s=Object.assign({},f.$q.config.ripple,n,t);e.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||u,keyCodes:[].concat(s.keyCodes||13)}}var Re=xe({name:"ripple",beforeMount(e,n){const t={enabled:n.value!==!1,modifiers:{},abort:[],start(u){t.enabled===!0&&u.qSkipRipple!==!0&&(t.modifiers.early===!0?["mousedown","touchstart"].includes(u.type)===!0:u.type==="click")&&H(u,e,t,u.qKeyEvent===!0)},keystart:Ce(u=>{t.enabled===!0&&u.qSkipRipple!==!0&&z(u,t.modifiers.keyCodes)===!0&&u.type===`key${t.modifiers.early===!0?"down":"up"}`&&H(u,e,t,!0)},300)};W(t,n),e.__qripple=t,fe(t,"main",[[e,"mousedown","start","passive"],[e,"touchstart","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&W(t,n)}},beforeUnmount(e){const n=e.__qripple;n.abort.forEach(t=>{t()}),ve(n,"main"),delete e._qripple}});const te={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},we=Object.keys(te),Be={align:{type:String,validator:e=>we.includes(e)}};function _e(e){return l(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${te[n]}`})}function Pe(e){return e.appContext.config.globalProperties.$router!==void 0}function U(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function X(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Te(e,n){for(const t in n){const u=n[t],f=e[t];if(typeof u=="string"){if(u!==f)return!1}else if(Array.isArray(f)===!1||f.length!==u.length||u.some((s,v)=>s!==f[v]))return!1}return!0}function G(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,u)=>t===n[u]):e.length===1&&e[0]===n}function Ae(e,n){return Array.isArray(e)===!0?G(e,n):Array.isArray(n)===!0?G(n,e):e===n}function Oe(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ae(e[t],n[t])===!1)return!1;return!0}const Me={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function je(e){const n=Z(),{props:t,proxy:u}=n,f=Pe(n),s=l(()=>t.disable!==!0&&t.href!==void 0),v=l(()=>f===!0&&t.disable!==!0&&s.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),d=l(()=>{if(v.value===!0)try{return u.$router.resolve(t.to)}catch{}return null}),g=l(()=>d.value!==null),$=l(()=>s.value===!0||g.value===!0),L=l(()=>t.type==="a"||$.value===!0?"a":t.tag||e||"div"),E=l(()=>s.value===!0?{href:t.href,target:t.target}:g.value===!0?{href:d.value.href,target:t.target}:{}),p=l(()=>{if(g.value===!1)return null;const{matched:o}=d.value,{length:b}=o,C=o[b-1];if(C===void 0)return-1;const k=u.$route.matched;if(k.length===0)return-1;const P=k.findIndex(X.bind(null,C));if(P>-1)return P;const M=U(o[b-2]);return b>1&&U(C)===M&&k[k.length-1].path!==M?k.findIndex(X.bind(null,o[b-2])):P}),r=l(()=>g.value===!0&&p.value>-1&&Te(u.$route.params,d.value.params)),x=l(()=>r.value===!0&&p.value===u.$route.matched.length-1&&Oe(u.$route.params,d.value.params)),m=l(()=>g.value===!0?x.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function i(o){return t.disable===!0||o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.__qNavigate!==!0&&o.defaultPrevented===!0||o.button!==void 0&&o.button!==0||t.target==="_blank"?!1:(J(o),u.$router[t.replace===!0?"replace":"push"](t.to).catch(b=>b))}return{hasRouterLink:g,hasHrefLink:s,hasLink:$,linkTag:L,linkRoute:d,linkIsActive:r,linkIsExactActive:x,linkClass:m,linkProps:E,navigateToRouterLink:i}}const Y={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ze={xs:8,sm:10,md:14,lg:20,xl:24},Ke=["button","submit","reset"],Ne=/[^\s]\/[^\s]/,Ie=O(S(S({},pe),Me),{type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:O(S({},Be.align),{default:"center"}),stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean});function Qe(e){const n=ke(e,ze),t=_e(e),{hasRouterLink:u,hasLink:f,linkTag:s,linkProps:v,navigateToRouterLink:d}=je("button"),g=l(()=>{const i=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(o=>o in Y?Y[o]+"px":o).join(" "),minWidth:"0",minHeight:"0"}):i}),$=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),L=l(()=>e.disable!==!0&&e.loading!==!0),E=l(()=>L.value===!0?e.tabindex||0:-1),p=l(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=l(()=>{const i={tabindex:E.value};return f.value===!0?Object.assign(i,v.value):Ke.includes(e.type)===!0&&(i.type=e.type),s.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),u.value!==!0&&Ne.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),x=l(()=>{let i;return e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`),`q-btn--${p.value} q-btn--${e.round===!0?"round":`rectangle${$.value===!0?" q-btn--rounded":""}`}`+(i!==void 0?" "+i:"")+(L.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),m=l(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:x,style:g,innerClasses:m,attributes:r,hasRouterLink:u,hasLink:f,linkTag:s,navigateToRouterLink:d,isActionable:L}}const{passiveCapture:y}=ye;let w=null,B=null,_=null;var Xe=ee({name:"QBtn",props:O(S({},Ie),{percentage:Number,darkPercentage:Boolean}),emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:u}=Z(),{classes:f,style:s,innerClasses:v,attributes:d,hasRouterLink:g,hasLink:$,linkTag:L,navigateToRouterLink:E,isActionable:p}=Qe(e),r=Q(null),x=Q(null);let m=null,i,o;const b=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),C=l(()=>e.disable===!0||e.ripple===!1?!1:S({keyCodes:$.value===!0?[13,32]:[13]},e.ripple===!0?{}:e.ripple)),k=l(()=>({center:e.round})),P=l(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),M=l(()=>e.loading===!0?{onMousedown:A,onTouchstartPassive:A,onClick:A,onKeydown:A,onKeyup:A}:p.value===!0?{onClick:K,onKeydown:ae,onMousedown:ue,onTouchstart:re}:{onClick:R}),ne=l(()=>S(S({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+f.value,style:s.value},d.value),M.value));function K(a){if(r.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&r.value.contains(c)===!1&&c.contains(r.value)===!1){r.value.focus();const j=()=>{document.removeEventListener("keydown",R,!0),document.removeEventListener("keyup",j,y),r.value!==null&&r.value.removeEventListener("blur",j,y)};document.addEventListener("keydown",R,!0),document.addEventListener("keyup",j,y),r.value.addEventListener("blur",j,y)}}if(g.value===!0){const c=()=>{a.__qNavigate=!0,E(a)};t("click",a,c),a.defaultPrevented!==!0&&c()}else t("click",a)}}function ae(a){r.value!==null&&(t("keydown",a),z(a,[13,32])===!0&&B!==r.value&&(B!==null&&T(),a.defaultPrevented!==!0&&(r.value.focus(),B=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",q,!0),r.value.addEventListener("blur",q,y)),R(a)))}function re(a){r.value!==null&&(t("touchstart",a),a.defaultPrevented!==!0&&(w!==r.value&&(w!==null&&T(),w=r.value,m=a.target,m.addEventListener("touchcancel",q,y),m.addEventListener("touchend",q,y)),i=!0,clearTimeout(o),o=setTimeout(()=>{i=!1},200)))}function ue(a){r.value!==null&&(a.qSkipRipple=i===!0,t("mousedown",a),a.defaultPrevented!==!0&&_!==r.value&&(_!==null&&T(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",q,y)))}function q(a){if(r.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===r.value)){if(a!==void 0&&a.type==="keyup"){if(B===r.value&&z(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&J(c),a.cancelBubble===!0&&F(c),r.value.dispatchEvent(c),R(a),a.qKeyEvent=!0}t("keyup",a)}T()}}function T(a){const c=x.value;a!==!0&&(w===r.value||_===r.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),w===r.value&&(m!==null&&(m.removeEventListener("touchcancel",q,y),m.removeEventListener("touchend",q,y)),w=m=null),_===r.value&&(document.removeEventListener("mouseup",q,y),_=null),B===r.value&&(document.removeEventListener("keyup",q,!0),r.value!==null&&r.value.removeEventListener("blur",q,y),B=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function A(a){R(a),a.qSkipRipple=!0}return ge(()=>{T(!0)}),Object.assign(u,{click:K}),()=>{let a=[];e.icon!==void 0&&a.push(h(D,{name:e.icon,left:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&a.push(h("span",{class:"block"},[e.label])),a=qe(n.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(h(D,{name:e.iconRight,right:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"}));const c=[h("span",{class:"q-focus-helper",ref:x})];return e.loading===!0&&e.percentage!==void 0&&c.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"},[h("span",{class:"q-btn__progress-indicator fit block"+(e.darkPercentage===!0?" q-btn__progress--dark":""),style:P.value})])),c.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+v.value},a)),e.loading!==null&&c.push(h(he,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[h(Se)])]:null)),be(h(L.value,ne.value,c),[[Re,C.value,void 0,k.value]])}}});export{Xe as Q,je as a,$e as c,Ue as g,Me as u,Pe as v};