import{I as G}from"./index-809bff45.js";import{g as D,e as R,c as Q}from"./elements-fed7d8fa.js";import{d as V,c as H,a as $,w as J}from"./components-ee7ab657.js";import{d as K,r as n,D as h,ac as W,G as X,ar as Z,a7 as x,ah as ee,ae,a4 as g,n as te,_ as Y,b as oe,e as S,m as A,p as se,q as ne,x as w,y as le,v as re,aj as ue,f as E,w as B,U as L,O as ce,Q as ie,R as de,N as ve}from"./index-95102025.js";import{C as fe}from"./index-4a63e590.js";import{d as me}from"./index-ea9abee8.js";import"./logger-525ef361.js";import"./index-9bf7cd1d.js";import"./index-6f5cb71d.js";/* empty css               */const he={modelValue:Boolean,disabled:Boolean,animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:String,successBgColor:String,color:String,successColor:String,target:[String,Object],onRefresh:V(),"onUpdate:modelValue":V()},{name:ge,n:P,classes:Se}=H("pull-refresh"),O=150,pe=K({name:ge,components:{VarIcon:G},props:he,setup(e){const t=n(0),v=n(null),i=n(null),d=n(0),o=n("-125%"),l=n("arrow-down"),a=n("default"),r=n(!1),u=h(()=>Math.abs(2*t.value)),p=h(()=>a.value==="success"),y=h(()=>a.value!=="loading"&&a.value!=="success"&&!e.disabled),U=h(()=>({transform:`translate3d(0px, ${W(o.value)?o.value:`${o.value}px`}, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:void 0,background:p.value?e.successBgColor:e.bgColor,color:p.value?e.successColor:e.color}));let f,m,b=0,T=0;X(()=>e.modelValue,s=>{s===!1&&(r.value=!0,a.value="success",l.value="checkbox-marked-circle",setTimeout(()=>{o.value=t.value,F()},g(e.successDuration)))}),Z(q),x(v,"touchmove",C);async function I(s){if(l.value!==s)return l.value=s,new Promise(c=>{window.setTimeout(c,O)})}function N(s){("classList"in f?f:document.body).classList[s](`${P()}--lock`)}function j(s){if(t.value===0){const{width:c}=ee(i.value);t.value=-(c+c*.25)}b=s.touches[0].clientY,T=0,m=D(s.target)}function C(s){if(!y.value||!m||m!==f&&R(m)>0)return;const c=R(f);if(c>0)return;const _=c===0;T=s.touches[0].clientY-b,_&&T>=0&&s.preventDefault(),a.value!=="pulling"&&(a.value="pulling",d.value=s.touches[0].clientY),_&&ae(o.value)&&o.value>t.value&&N("add");const k=(s.touches[0].clientY-d.value)/2+t.value;o.value=k>=u.value?u.value:k,I(o.value>=u.value*.2?"refresh":"arrow-down")}async function z(){y.value&&(r.value=!0,g(o.value)>=u.value*.2?(await I("refresh"),a.value="loading",o.value=u.value*.3,$(e["onUpdate:modelValue"],!0),te(()=>{$(e.onRefresh)}),N("remove")):(a.value="loosing",l.value="arrow-down",o.value=t.value,setTimeout(()=>{r.value=!1,N("remove")},g(e.animationDuration))),m=null)}function q(){f=e.target?Q(e.target,"PullRefresh"):D(v.value)}function F(){setTimeout(()=>{a.value="default",l.value="arrow-down",r.value=!1},g(e.animationDuration))}return{ICON_TRANSITION:O,refreshStatus:a,freshNode:v,controlNode:i,iconName:l,controlStyle:U,isSuccess:p,n:P,classes:Se,touchStart:j,touchMove:C,touchEnd:z}}});function Te(e,t,v,i,d,o){const l=oe("var-icon");return S(),A("div",{ref:"freshNode",class:w(e.n()),onTouchstart:t[0]||(t[0]=(...a)=>e.touchStart&&e.touchStart(...a)),onTouchend:t[1]||(t[1]=(...a)=>e.touchEnd&&e.touchEnd(...a)),onTouchcancel:t[2]||(t[2]=(...a)=>e.touchEnd&&e.touchEnd(...a))},[se("div",{ref:"controlNode",class:w(e.classes(e.n("control"),e.n("$-elevation--2"),[e.isSuccess,e.n("control-success")])),style:le(e.controlStyle)},[ne(l,{name:e.iconName,transition:e.ICON_TRANSITION,class:w(e.classes(e.n("icon"),[e.refreshStatus==="loading",e.n("animation")])),"var-pull-refresh-cover":""},null,8,["name","transition","class"])],6),re(e.$slots,"default")],34)}const M=Y(pe,[["render",Te]]);J(M);const Ne={__name:"index",setup(e){const t=Array(30).fill("List Item"),v=Array(30).fill("This is new List Item"),i=n(!1),d=n(t);function o(){setTimeout(()=>{d.value=d.value[0]==="List Item"?v:t,i.value=!1},2e3)}return ue(me),(l,a)=>(S(),E(L(M),{onRefresh:o,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=r=>i.value=r),"success-duration":"2000"},{default:B(()=>[(S(!0),A(ve,null,ce(d.value,(r,u)=>(S(),E(L(fe),{key:u,border:""},{default:B(()=>[ie(de(r+" "+(u+1)),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},Ee=Y(Ne,[["__scopeId","data-v-6f15a34c"]]);export{Ee as default};
