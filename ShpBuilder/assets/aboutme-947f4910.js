import{h as E,i as j,j as N,k as w,l as L,m as z,u as B,r as $,n as p,p as A,q as D,s as P,b as s,c as t,t as h,v as l,f as y,w as V,x as F,E as q,y as x,z as I,A as M,B as T,_ as G,C as U,e as H,d as u,F as b,D as g,G as S,g as k}from"./index-c3ac2a65.js";/* empty css                                                */const J=E({size:{type:[Number,String],values:j,default:"",validator:o=>N(o)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:w},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:L(String),default:"cover"}}),K={error:o=>o instanceof Event},O=["src","alt","srcset"],Q=z({name:"ElAvatar"}),R=z({...Q,props:J,emits:K,setup(o,{emit:v}){const n=o,a=B("avatar"),i=$(!1),_=p(()=>{const{size:e,icon:m,shape:f}=n,c=[a.b()];return A(e)&&c.push(a.m(e)),m&&c.push(a.m("icon")),f&&c.push(a.m(f)),c}),d=p(()=>{const{size:e}=n;return N(e)?a.cssVarBlock({size:D(e)||""}):void 0}),r=p(()=>({objectFit:n.fit}));P(()=>n.src,()=>i.value=!1);function C(e){i.value=!0,v("error",e)}return(e,m)=>(s(),t("span",{class:I(l(_)),style:h(l(d))},[(e.src||e.srcSet)&&!i.value?(s(),t("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:h(l(r)),onError:C},null,44,O)):e.icon?(s(),y(l(q),{key:1},{default:V(()=>[(s(),y(F(e.icon)))]),_:1})):x(e.$slots,"default",{key:2})],6))}});var W=M(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const X=T(W),Y={setup(){return{describeList:U([{objName:"作者",value:"米大饭",type:"div"},{objName:"CSDN",value:"https://blog.csdn.net/weixin_43980651?type=blog",type:"a"},{objName:"个性签名",value:"一个逗比",type:"div"},{objName:"作者简述",value:"目前网站比较简陋，还等后续更新。。。",type:"div"}])}}},Z={class:"aboutMeContainer"},ee=u("h1",null,"关于作者",-1),se={class:"descriptionContainer"},te={style:{width:"50%"}},ae={style:{"text-align":"right"}},re={style:{width:"50%"}},oe={style:{"text-align":"left"}},ne=["href"],ie={key:1};function ce(o,v,n,a,i,_){const d=X;return s(),t("div",Z,[ee,H(d,{size:150,src:"./image/aboutMe/head.jpg"},null,8,["src"]),u("div",se,[u("div",te,[(s(!0),t(b,null,g(a.describeList,r=>(s(),t("div",ae,S(r.objName)+": ",1))),256))]),u("div",re,[(s(!0),t(b,null,g(a.describeList,r=>(s(),t("div",oe,[r.type=="a"?(s(),t("a",{key:0,href:r.value},"传送门",8,ne)):k("",!0),r.type=="div"?(s(),t("div",ie,S(r.value),1)):k("",!0)]))),256))])])])}const de=G(Y,[["render",ce]]);export{de as default};