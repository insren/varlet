import{d as R}from"./index-ea9abee8.js";import{f as w,c as P,w as I}from"./components-ee7ab657.js";import{d as M,r as k,D as V,ar as D,az as E,_ as j,e as g,m as v,p as b,x as i,v as f,y as _,Q as n,R as l,t as A,F,aj as G,q as o,w as a,U as t,N as O}from"./index-95102025.js";import{I as p}from"./index-809bff45.js";import{M as q}from"./index-f2aa17bd.js";import{B as m}from"./index-281c4261.js";import{C}from"./index-4a63e590.js";import{T as Q,a as $}from"./index-28f07996.js";import{u as H,b as B,_ as J,c as K,a as W}from"./index-3a6c1408.js";import{A as c}from"./appType-d8c1e874.js";import"./elements-fed7d8fa.js";import"./logger-525ef361.js";import"./usePopover-4f68c4bc.js";import"./zIndex-786cbeb4.js";import"./index-6f5cb71d.js";import"./index-9bf7cd1d.js";/* empty css               */import"./index-7461e419.js";import"./index-b06a091b.js";import"./index-5b3cd96a.js";import"./index-d7a7b76f.js";import"./shared-01522925.js";const X={color:String,textColor:String,title:String,titlePosition:{type:String,default:"left"},elevation:{type:[Boolean,String,Number],default:!0},round:Boolean,image:String,imageLinearGradient:String,safeAreaTop:Boolean},{name:Y,n:Z,classes:x}=P("app-bar"),tt=M({name:Y,props:X,setup(e,{slots:d}){const h=k(),u=k(),S=V(()=>{const{image:z,color:U,textColor:L,imageLinearGradient:T}=e;return z!=null?{"background-image":`${T?`linear-gradient(${T}), `:""}url(${z})`,"background-position":"center center","background-size":"cover"}:{background:U,color:L}});D(y),E(y);function y(){h.value=d.left?0:void 0,u.value=d.right?0:void 0}return{rootStyles:S,paddingLeft:h,paddingRight:u,n:Z,classes:x,formatElevation:w}}});function et(e,d,h,u,S,y){return g(),v("div",{class:i(e.classes(e.n(),e.n("$--box"),[e.safeAreaTop,e.n("--safe-area-top")],[e.round,e.n("--round")],e.formatElevation(e.elevation,3))),style:_(e.rootStyles)},[b("div",{class:i(e.n("toolbar"))},[b("div",{class:i(e.n("left"))},[f(e.$slots,"left"),e.titlePosition==="left"?(g(),v("div",{key:0,class:i(e.n("title")),style:_({paddingLeft:e.paddingLeft})},[f(e.$slots,"default",{},()=>[n(l(e.title),1)])],6)):A("",!0)],2),e.titlePosition==="center"?(g(),v("div",{key:0,class:i(e.n("title"))},[f(e.$slots,"default",{},()=>[n(l(e.title),1)])],2)):A("",!0),b("div",{class:i(e.n("right"))},[e.titlePosition==="right"?(g(),v("div",{key:0,class:i(e.n("title")),style:_({paddingRight:e.paddingRight})},[f(e.$slots,"default",{},()=>[n(l(e.title),1)])],6)):A("",!0),f(e.$slots,"right")],2)],2),f(e.$slots,"content")],6)}const s=j(tt,[["render",et]]);I(s);const ot={basicUsage:"基本使用",customStyle:"自定义背景色",addSlotsAtTitle:"添加标题处插槽",title:"标题",addLeftAndRightSlot:"添加左右插槽",option:"选项卡",search:"搜索",round:"开启圆角",custom:"扩展内容"},at={basicUsage:"Basic Usage",customStyle:"Custom Background Color",addSlotsAtTitle:"Add Slots At Title",title:"Title",addLeftAndRightSlot:"Add Left And Right Slot",option:"OPTION",search:"search",round:"Use Border Radius",custom:"Custom Content"},{add:N,use:rt,pack:r,packs:Nt,merge:Ut}=H(),nt=e=>{W(e),rt(e)};B("zh-CN",J);B("en-US",K);N("zh-CN",ot);N("en-US",at);const Lt={__name:"index",setup(e){const d=k(0);return F(nt),G(R),(h,u)=>(g(),v(O,null,[o(t(c),null,{default:a(()=>[n(l(t(r).basicUsage),1)]),_:1}),o(t(s),{title:t(r).title},null,8,["title"]),o(t(c),null,{default:a(()=>[n(l(t(r).addSlotsAtTitle),1)]),_:1}),o(t(s),null,{default:a(()=>[n(l(t(r).addSlotsAtTitle),1)]),_:1}),o(t(c),null,{default:a(()=>[n(l(t(r).addLeftAndRightSlot),1)]),_:1}),o(t(s),{title:t(r).title},{left:a(()=>[o(t(m),{round:"",text:"",color:"transparent","text-color":"#ffffff"},{default:a(()=>[o(t(p),{name:"chevron-left",size:24})]),_:1})]),right:a(()=>[o(t(q),null,{menu:a(()=>[o(t(C),{ripple:""},{default:a(()=>[n(l(t(r).option),1)]),_:1}),o(t(C),{ripple:""},{default:a(()=>[n(l(t(r).option),1)]),_:1}),o(t(C),{ripple:""},{default:a(()=>[n(l(t(r).option),1)]),_:1})]),default:a(()=>[o(t(m),{round:"",text:"",color:"transparent","text-color":"#ffffff"},{default:a(()=>[o(t(p),{name:"menu",size:24})]),_:1})]),_:1})]),_:1},8,["title"]),o(t(c),null,{default:a(()=>[n(l(t(r).round),1)]),_:1}),o(t(s),{title:t(r).round,"title-position":"center",round:""},null,8,["title"]),o(t(c),null,{default:a(()=>[n(l(t(r).customStyle),1)]),_:1}),o(t(s),{title:t(r).title,"title-position":"center",color:"linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"},null,8,["title"]),o(t(c),null,{default:a(()=>[n(l(t(r).custom),1)]),_:1}),o(t(s),{round:"",image:"https://varlet.gitee.io/varlet-ui/tree.jpeg","image-linear-gradient":"to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"},{left:a(()=>[o(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:a(()=>[o(t(p),{name:"menu",size:24})]),_:1})]),right:a(()=>[o(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:a(()=>[o(t(p),{name:"map-marker-radius",size:24})]),_:1}),o(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:a(()=>[o(t(p),{name:"star",size:24})]),_:1}),o(t(m),{round:"",text:"",color:"transparent","text-color":"#fff"},{default:a(()=>[o(t(p),{name:"heart",size:24})]),_:1})]),content:a(()=>[o(t(Q),{style:{"margin-top":"20vmin"},color:"transparent","active-color":"#fff","inactive-color":"#ddd",active:d.value,"onUpdate:active":u[0]||(u[0]=S=>d.value=S)},{default:a(()=>[o(t($),null,{default:a(()=>[n(l(t(r).option),1)]),_:1}),o(t($),null,{default:a(()=>[n(l(t(r).option),1)]),_:1}),o(t($),null,{default:a(()=>[n(l(t(r).option),1)]),_:1})]),_:1},8,["active"])]),default:a(()=>[n(l(t(r).title)+" ",1)]),_:1})],64))}};export{Lt as default};
