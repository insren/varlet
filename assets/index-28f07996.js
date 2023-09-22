import{p as U,S as _}from"./index-d7a7b76f.js";import{a1 as x,d as K,r as l,D as s,G as H,a8 as ee,aA as ae,T as ie,j as te,ae as oe,aB as ne,_ as V,e as Z,f as se,w as le,p as T,aq as re,x as D,v as j,y as Y,al as ce,a3 as de,L as ue,P as fe,m as ve}from"./index-95102025.js";import{p as W,d as B,f as me,c as q,a as $,w as G}from"./components-ee7ab657.js";import{l as M}from"./shared-01522925.js";import{a as be,s as X}from"./elements-fed7d8fa.js";import{v as ye}from"./index-9bf7cd1d.js";import{e as Ce}from"./logger-525ef361.js";const he={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal"},itemDirection:{type:String,default:"horizontal"},fixedBottom:Boolean,activeColor:String,inactiveColor:String,disabledColor:String,color:String,indicatorColor:String,indicatorSize:[String,Number],elevation:{type:[Boolean,String,Number],default:!1},scrollable:{type:String,default:"auto"},indicatorPosition:{type:String,default:"normal"},safeArea:Boolean,sticky:Boolean,stickyCssMode:W(U,"cssMode"),stickyZIndex:W(U,"zIndex"),offsetTop:W(U,"offsetTop"),onClick:B(),onChange:B(),"onUpdate:active":B()},F=Symbol("TABS_BIND_TAB_KEY");function $e(){const{childProviders:e,bindChildren:t,length:n}=x(F);return{length:n,tabList:e,bindTabList:t}}const{name:pe,n:ke,classes:Se}=q("tabs"),ge=K({name:pe,components:{VarSticky:_},inheritAttrs:!1,props:he,setup(e){const t=l("0px"),n=l("0px"),r=l("0px"),c=l("0px"),o=l(!1),d=l(null),m=s(()=>e.active),P=s(()=>e.activeColor),b=s(()=>e.inactiveColor),p=s(()=>e.disabledColor),k=s(()=>e.itemDirection),y=l(null),w=s(()=>e.indicatorPosition==="reverse"?"-reverse":""),{tabList:C,bindTabList:S,length:u}=$e();S({active:m,activeColor:P,inactiveColor:b,disabledColor:p,itemDirection:k,resize:f,onTabClick:A}),H(()=>u.value,async()=>{await te(),f()}),H(()=>[e.active,e.scrollable],f),ee(f),ae(f);function A(i){const a=i.name.value??i.index.value,{active:v,onChange:h,onClick:Q}=e;$(e["onUpdate:active"],a),$(Q,a),a!==v&&$(h,a)}function N(){return C.find(({name:i})=>e.active===i.value)}function g(i){return C.find(({index:a})=>(i??e.active)===a.value)}function E(){if(u.value===0)return;const{active:i}=e;if(oe(i)){const a=ne(i,0,u.value-1);return $(e["onUpdate:active"],a),g(a)}}function I(){o.value=e.scrollable==="always"||C.length>=5}function L({element:i}){const a=i.value;a&&(e.layoutDirection==="horizontal"?(t.value=`${a.offsetWidth}px`,r.value=`${a.offsetLeft}px`):(n.value=`${a.offsetHeight}px`,c.value=`${a.offsetTop}px`))}function J({element:i}){if(!o.value)return;const a=d.value,v=i.value;if(e.layoutDirection==="horizontal"){const h=v.offsetLeft+v.offsetWidth/2-a.offsetWidth/2;X(a,{left:h,animation:M})}else{const h=v.offsetTop+v.offsetHeight/2-a.offsetHeight/2;X(a,{top:h,animation:M})}}function f(){const i=N()||g()||E();!i||i.disabled.value||(I(),L(i),J(i))}async function O(){e.sticky&&y.value&&await y.value.resize()}return{stickyComponent:y,indicatorWidth:t,indicatorHeight:n,indicatorX:r,indicatorY:c,indicatorPosition:w,localScrollable:o,scrollerEl:d,Transition:ie,toSizeUnit:be,n:ke,classes:Se,resize:f,resizeSticky:O,formatElevation:me}}});function Te(e,t,n,r,c,o){return Z(),se(ce(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:le(()=>[T("div",re({class:e.classes(e.n(),e.n("$--box"),e.n(`--item-${e.itemDirection}`),e.n(`--layout-${e.layoutDirection}-padding`),e.formatElevation(e.elevation,4),[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[T("div",{ref:"scrollerEl",class:D(e.classes(e.n("tab-wrap"),[e.localScrollable,e.n(`--layout-${e.layoutDirection}-scrollable`)],e.n(`--layout-${e.layoutDirection}`)))},[j(e.$slots,"default"),T("div",{class:D(e.classes(e.n("indicator"),e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),style:Y({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`})},[T("div",{class:D(e.classes(e.n("indicator-inner"),e.n(`--layout-${e.layoutDirection}-indicator-inner`))),style:Y({background:e.indicatorColor||e.activeColor})},null,6)],6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}const ze=V(ge,[["render",Te]]);G(ze);const De={name:[String,Number],disabled:Boolean,onClick:B()};function Be(){const{parentProvider:e,bindParent:t,index:n}=de(F);return t||Ce("Tab","<var-tab/> must in <var-tabs/>"),{index:n,tabs:e,bindTabs:t}}const{name:Pe,n:z,classes:we}=q("tab"),Ae=K({name:Pe,directives:{Ripple:ye},props:De,setup(e){const t=l(null),n=s(()=>t.value),r=s(()=>e.name),c=s(()=>e.disabled),{index:o,tabs:d,bindTabs:m}=Be(),{onTabClick:P,active:b,activeColor:p,inactiveColor:k,disabledColor:y,itemDirection:w,resize:C}=d,S={name:r,index:o,disabled:c,element:n};m(S),H(()=>[e.name,e.disabled],C);function u(){return e.name!=null?b.value===e.name:b.value===(o==null?void 0:o.value)}function R(){return e.disabled?y.value:u()?p.value:k.value}function A(){return e.disabled?z("$-tab--disabled"):u()?z("$-tab--active"):z("$-tab--inactive")}function N(g){const{disabled:E,name:I,onClick:L}=e;E||($(L,I??o.value,g),P(S))}return{tabEl:t,active:b,activeColor:p,inactiveColor:k,itemDirection:w,n:z,classes:we,computeColorStyle:R,computeColorClass:A,handleClick:N}}});function Ne(e,t,n,r,c,o){const d=ue("ripple");return fe((Z(),ve("div",{class:D(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n(`--${e.itemDirection}`))),ref:"tabEl",style:Y({color:e.computeColorStyle()}),onClick:t[0]||(t[0]=(...m)=>e.handleClick&&e.handleClick(...m))},[j(e.$slots,"default")],6)),[[d,{disabled:e.disabled}]])}const Ee=V(Ae,[["render",Ne]]);G(Ee);export{ze as T,Ee as a};
