import{v as a}from"./index-9bf7cd1d.js";import{d as s,f as l,c as t,a as p}from"./components-ee7ab657.js";import{a as d}from"./elements-fed7d8fa.js";import{d as m,_ as u,L as f,P as v,e as h,m as c,v as S,x as k,y as C}from"./index-95102025.js";const g={elevation:{type:[Boolean,Number,String],default:!1},ripple:Boolean,radius:[Number,String],width:[Number,String],height:[Number,String],round:Boolean,inline:Boolean,onClick:s()},{name:b,n:$,classes:y}=t("paper"),z=m({name:b,directives:{Ripple:a},props:g,setup(e){function i(n){p(e.onClick,n)}return{n:$,classes:y,formatElevation:l,toSizeUnit:d,handleClick:i}}});function B(e,i,n,N,w,P){const o=f("ripple");return v((h(),c("div",{class:k(e.classes(e.n(),e.n("$--box"),e.formatElevation(e.elevation,2),[e.onClick,e.n("--cursor")],[e.round,e.n("--round")],[e.inline,e.n("$--inline-flex")])),style:C({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)}),onClick:i[0]||(i[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[S(e.$slots,"default")],6)),[[o,{disabled:!e.ripple}]])}const R=u(z,[["render",B]]);export{R as V};
