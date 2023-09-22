import{C as H}from"./index-0fec3d0b.js";import{v as P}from"./index-9bf7cd1d.js";import{v as E}from"./index-5b3cd96a.js";import{H as $,u as B}from"./index-b06a091b.js";import{a1 as D,a3 as w,d as I,r as T,D as c,G as L,_ as R,b as m,L as f,P as z,e as h,m as K,p as C,x as d,y as b,f as M,M as Y,t as q,v as G,Q,R as U,q as j}from"./index-95102025.js";import{e as A}from"./logger-525ef361.js";import{c as F,w as J}from"./components-ee7ab657.js";const k=Symbol("SELECT_BIND_OPTION_KEY");function de(){const{length:e,childProviders:o,bindChildren:n}=D(k);return{length:e,options:o,bindOptions:n}}function W(){const{index:e,parentProvider:o,bindParent:n}=w(k);return n||A("Option","<var-option/> must in <var-select/>"),{index:e,select:o,bindSelect:n}}const X={label:{},value:{}},{name:Z,n:_,classes:x}=F("option"),ee=I({name:Z,directives:{Ripple:P,Hover:E},components:{VarCheckbox:H,VarHoverOverlay:$},props:X,setup(e){const o=T(!1),n=c(()=>o.value),v=c(()=>e.label),p=c(()=>e.value),{select:u,bindSelect:a}=W(),{multiple:s,focusColor:t,onSelect:r,computeLabel:l}=u,{hovering:S,handleHovering:y}=B(),i={label:v,value:p,selected:n,sync:N};L([()=>e.label,()=>e.value],l),a(i);function g(){s.value&&(o.value=!o.value),r(i)}function O(){return r(i)}function N(V){o.value=V}return{n:_,classes:x,optionSelected:o,multiple:s,focusColor:t,hovering:S,handleHovering:y,handleClick:g,handleSelect:O}}});function oe(e,o,n,v,p,u){const a=m("var-checkbox"),s=m("var-hover-overlay"),t=f("ripple"),r=f("hover");return z((h(),K("div",{class:d(e.classes(e.n(),e.n("$--box"),[e.optionSelected,e.n("--selected-color")])),style:b({color:e.optionSelected?e.focusColor:void 0}),onClick:o[2]||(o[2]=(...l)=>e.handleClick&&e.handleClick(...l))},[C("div",{class:d(e.classes(e.n("cover"),[e.optionSelected,e.n("--selected-background")])),style:b({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(h(),M(a,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":o[0]||(o[0]=l=>e.optionSelected=l),onClick:o[1]||(o[1]=Y(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):q("",!0),C("div",{class:d(e.classes(e.n("text"),e.n("$--ellipsis")))},[G(e.$slots,"default",{},()=>[Q(U(e.label),1)])],2),j(s,{hovering:e.hovering},null,8,["hovering"])],6)),[[t],[r,e.handleHovering,"desktop"]])}const ne=R(ee,[["render",oe]]);J(ne);export{ne as O,de as u};
