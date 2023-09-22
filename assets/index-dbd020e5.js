import{p as P,P as U}from"./index-d3f586a9.js";import{B as R}from"./index-281c4261.js";import{d as C,p as V,c as z,a as n,m as N,w as D}from"./components-ee7ab657.js";import{p as A}from"./index-3a6c1408.js";import{a as I}from"./elements-fed7d8fa.js";import{d as j,r as S,G as w,_ as q,b as T,e as B,f as O,w as h,p as d,aq as G,x as r,v as b,Q as m,R as v,y as L,t as $,af as Q,W,n as E,ac as F}from"./index-95102025.js";const H={show:Boolean,width:[Number,String],title:String,message:String,messageAlign:{type:String,default:"left"},confirmButton:{type:Boolean,default:!0},cancelButton:{type:Boolean,default:!0},confirmButtonText:String,cancelButtonText:String,confirmButtonTextColor:String,cancelButtonTextColor:String,confirmButtonColor:String,cancelButtonColor:String,dialogClass:String,dialogStyle:Object,onBeforeClose:C(),onConfirm:C(),onCancel:C(),"onUpdate:show":C(),...V(P,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"])},{name:J,n:K,classes:M}=z("dialog"),X=j({name:J,components:{VarPopup:U,VarButton:R},inheritAttrs:!1,props:H,setup(o){const a=S(!1),s=S(!1);w(()=>o.show,l=>{a.value=l},{immediate:!0}),w(()=>o.closeOnClickOverlay,l=>{if(o.onBeforeClose!=null){s.value=!1;return}s.value=l},{immediate:!0});function e(){return n(o["onUpdate:show"],!1)}function c(){const{closeOnClickOverlay:l,onClickOverlay:u,onBeforeClose:k}=o;if(n(u),!!l){if(k!=null){n(k,"close",e);return}n(o["onUpdate:show"],!1)}}function f(){const{onBeforeClose:l,onConfirm:u}=o;if(n(u),l!=null){n(l,"confirm",e);return}n(o["onUpdate:show"],!1)}function p(){const{onBeforeClose:l,onCancel:u}=o;if(n(u),l!=null){n(l,"cancel",e);return}n(o["onUpdate:show"],!1)}return{pack:A,popupShow:a,popupCloseOnClickOverlay:s,n:K,classes:M,handleClickOverlay:c,confirm:f,cancel:p,toSizeUnit:I}}});function Y(o,a,s,e,c,f){const p=T("var-button"),l=T("var-popup");return B(),O(l,{class:r(o.n("popup")),"var-dialog-cover":"",show:o.popupShow,overlay:o.overlay,"overlay-class":o.overlayClass,"overlay-style":o.overlayStyle,"lock-scroll":o.lockScroll,"close-on-click-overlay":o.popupCloseOnClickOverlay,teleport:o.teleport,onOpen:o.onOpen,onClose:o.onClose,onClosed:o.onClosed,onOpened:o.onOpened,onRouteChange:o.onRouteChange,onClickOverlay:o.handleClickOverlay},{default:h(()=>[d("div",G({class:o.classes(o.n("$--box"),o.n(),o.dialogClass),style:{width:o.toSizeUnit(o.width),...o.dialogStyle}},o.$attrs),[d("div",{class:r(o.n("title"))},[b(o.$slots,"title",{},()=>[m(v(o.title??o.pack.dialogTitle),1)])],2),d("div",{class:r(o.n("message")),style:L({textAlign:o.messageAlign})},[b(o.$slots,"default",{},()=>[m(v(o.message),1)])],6),d("div",{class:r(o.n("actions"))},[o.cancelButton?(B(),O(p,{key:0,class:r(o.classes(o.n("button"),o.n("cancel-button"))),"var-dialog-cover":"",text:"","text-color":o.cancelButtonTextColor,color:o.cancelButtonColor,onClick:o.cancel},{default:h(()=>[m(v(o.cancelButtonText??o.pack.dialogCancelButtonText),1)]),_:1},8,["class","text-color","color","onClick"])):$("",!0),o.confirmButton?(B(),O(p,{key:1,class:r(o.classes(o.n("button"),o.n("confirm-button"))),"var-dialog-cover":"",text:"","text-color":o.confirmButtonTextColor,color:o.confirmButtonColor,onClick:o.confirm},{default:h(()=>[m(v(o.confirmButtonText??o.pack.dialogConfirmButtonText),1)]),_:1},8,["class","text-color","color","onClick"])):$("",!0)],2)],16)]),_:3},8,["class","show","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange","onClickOverlay"])}const y=q(X,[["render",Y]]);let t,g={};function Z(o={}){return F(o)?{...g,message:o}:{...g,...o}}function i(o){return Q()?new Promise(a=>{i.close();const s=Z(o),e=W(s);e.teleport="body",t=e;const{unmountInstance:c}=N(y,e,{onConfirm:()=>{n(e.onConfirm),a("confirm")},onCancel:()=>{n(e.onCancel),a("cancel")},onClose:()=>{n(e.onClose),a("close")},onClosed:()=>{n(e.onClosed),c(),t===e&&(t=null)},onRouteChange:()=>{c(),t===e&&(t=null)},"onUpdate:show":f=>{e.show=f}});e.show=!0}):Promise.resolve()}i.setDefaultOptions=function(o){g=o};i.resetDefaultOptions=function(){g={}};i.close=function(){if(t!=null){const o=t;t=null,E().then(()=>{o.show=!1})}};i.Component=y;D(y);D(y,i);export{i as D};
