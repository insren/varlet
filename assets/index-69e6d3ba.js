import{d as m,c as p,a as g,w as C}from"./components-ee7ab657.js";import{a1 as y,d as h,D as v,a2 as S,G as u,_ as k,e as _,m as $,v as b,x as w,y as P}from"./index-95102025.js";import{t as c,p as N}from"./elements-fed7d8fa.js";const R={gutter:{type:[String,Number,Array],default:0},justify:{type:String,default:"flex-start"},align:{type:String,default:"flex-start"},onClick:m()},B=Symbol("ROW_BIND_COL_KEY");function E(){const{bindChildren:e,childProviders:t,length:s}=y(B);return{length:s,cols:t,bindCols:e}}const{name:I,n:O,classes:j}=p("row"),x=h({name:I,props:R,setup(e){const t=v(()=>S(e.gutter)?e.gutter.map(n=>c(n)/2):[0,c(e.gutter)/2]),{cols:s,bindCols:o,length:r}=E(),l={computePadding:a};u(()=>r.value,a),u(()=>e.gutter,a),o(l);function a(){s.forEach(n=>{const[i,d]=t.value;n.setPadding({left:d,right:d,top:i,bottom:i})})}function f(n){g(e.onClick,n)}return{average:t,n:O,classes:j,handleClick:f,padStartFlex:N}}});function D(e,t,s,o,r,l){return _(),$("div",{class:w(e.classes(e.n(),e.n("$--box"))),style:P({justifyContent:e.padStartFlex(e.justify),alignItems:e.padStartFlex(e.align),margin:`${-e.average[0]}px ${-e.average[1]}px`}),onClick:t[0]||(t[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[b(e.$slots,"default")],6)}const F=k(x,[["render",D]]);C(F);export{F as R,B as a};
