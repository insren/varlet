import{I as p}from"./index-809bff45.js";import{d as m,D as c,a4 as t,_ as v,b as f,e as s,m as r,v as l,q as g,w as $,P as y,p as b,aq as h,f as B,x as o,t as i,R as S,Y as N,T as k}from"./index-95102025.js";import{c as w,w as V}from"./components-ee7ab657.js";const C={type:{type:String,default:"default"},position:{type:String,default:"right-top"},hidden:Boolean,value:{type:[String,Number],default:0},maxValue:[String,Number],dot:Boolean,icon:String,color:String},{name:I,n:D,classes:q}=w("badge"),P=m({name:I,components:{VarIcon:p},inheritAttrs:!1,props:C,setup(e){return{value:c(()=>{const{value:a,maxValue:n}=e;return a!=null&&n!=null&&t(a)>t(n)?`${n}+`:a}),n:D,classes:q}}});function T(e,u,a,n,A,E){const d=f("var-icon");return s(),r("div",{class:o(e.classes(e.n(),e.n("$--box")))},[l(e.$slots,"default"),g(k,{name:e.n("$-badge-fade")},{default:$(()=>[y(b("span",h({class:e.classes(e.n("content"),e.n(`--${e.type}`),[e.$slots.default,e.n(`--${e.position}`)],[e.dot,e.n("--dot")],[e.icon,e.n("--icon")]),style:{background:e.color}},e.$attrs),[e.icon?(s(),B(d,{key:0,class:o(e.n("icon")),"var-badge-cover":"",name:e.icon},null,8,["class","name"])):i("",!0),l(e.$slots,"value",{},()=>[!e.icon&&!e.dot?(s(),r("span",{key:0,class:o(e.n("value"))},S(e.value),3)):i("",!0)])],16),[[N,!e.hidden]])]),_:3},8,["name"])],2)}const z=v(P,[["render",T]]);V(z);export{z as B};
