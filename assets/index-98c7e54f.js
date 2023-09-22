import{v as S}from"./index-9bf7cd1d.js";import{v as k}from"./index-047cb45a.js";import{d as s,c as v,a as n,w as L}from"./components-ee7ab657.js";import{a as C}from"./elements-fed7d8fa.js";import{d as b,r as w,G as E,_ as $,L as h,P as z,e as d,m,x as u,y as f,t as y,v as B}from"./index-95102025.js";const N={src:String,fit:{type:String,default:"fill"},alt:String,title:String,width:[String,Number],height:[String,Number],radius:{type:[String,Number],default:0},loading:String,error:String,lazy:Boolean,ripple:Boolean,block:{type:Boolean,default:!0},onClick:s(),onLoad:s(),onError:s()},{name:I,n:U,classes:c}=v("image"),R=b({name:I,directives:{Lazy:k,Ripple:S},props:N,setup(e,{slots:r}){const a=w(!1);E(()=>e.src,()=>{a.value=!1});function t(l){a.value=!!r.error,n(e.onError,l)}function g(l){const i=l.currentTarget;if(e.lazy){if(i._lazy.state==="success"){n(e.onLoad,l);return}i._lazy.state==="error"&&t(l)}else n(e.onLoad,l)}function p(l){n(e.onClick,l)}return{showErrorSlot:a,n:U,classes:c,toSizeUnit:C,handleLoad:g,handleError:t,handleClick:p}}});const j=["alt","title","lazy-loading","lazy-error"],D=["alt","title","src"];function F(e,r,a,t,g,p){const l=h("lazy"),i=h("ripple");return z((d(),m("div",{class:u(e.classes(e.n(),e.n("$--box"),[!e.block,e.n("$--inline-block")])),style:f({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),borderRadius:e.toSizeUnit(e.radius)})},[e.lazy&&!e.showErrorSlot?z((d(),m("img",{key:0,class:u(e.n("image")),alt:e.alt,title:e.title,"lazy-loading":e.loading,"lazy-error":e.error,style:f({objectFit:e.fit}),onLoad:r[0]||(r[0]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onClick:r[1]||(r[1]=(...o)=>e.handleClick&&e.handleClick(...o))},null,46,j)),[[l,e.src??""]]):y("",!0),!e.lazy&&!e.showErrorSlot?(d(),m("img",{key:1,class:u(e.n("image")),alt:e.alt,title:e.title,style:f({objectFit:e.fit}),src:e.src,onLoad:r[2]||(r[2]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:r[3]||(r[3]=(...o)=>e.handleError&&e.handleError(...o)),onClick:r[4]||(r[4]=(...o)=>e.handleClick&&e.handleClick(...o))},null,46,D)):y("",!0),e.showErrorSlot?B(e.$slots,"error",{key:2}):y("",!0)],6)),[[i,{disabled:!e.ripple}]])}const P=$(R,[["render",F]]);L(P);export{P as I};
