import{S as K,K as Y,bs as R,bt as Z,H as M,bu as Le,az as j,p as U,j as H,aR as V,a1 as E,n as p,aD as T,s as ee,as as ne,ay as ae,r as O,a0 as B,a3 as $e,aH as _,m as S,a6 as le,u as z,b as x,f as te,w as oe,d as q,z as k,v as i,an as I,c as C,a$ as w,bv as F,y as N,F as Be,ae as se,G as ie,g as D,x as re,A as G,t as ue,h as de,l as ce,a8 as Ee,aJ as Ie,B as ve,ax as be}from"./index-fd210390.js";import{u as J,v as me,e as we,w as Fe,x as fe,a as De,r as P,q as he,p as ze}from"./event-d3aeaefc.js";import{u as Ne,b as A,a as W,c as pe}from"./el-button-708dc4b6.js";function Ge(e){return e}function Pe(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var Ve=800,Te=16,Oe=Date.now;function Re(e){var n=0,l=0;return function(){var a=Oe(),t=Te-(a-l);if(l=a,t>0){if(++n>=Ve)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Ae(e){return function(){return e}}var Ke=J?function(e,n){return J(e,"toString",{configurable:!0,enumerable:!1,value:Ae(n),writable:!0})}:Ge;const Me=Ke;var Ue=Re(Me);const He=Ue;var Q=Math.max;function _e(e,n,l){return n=Q(n===void 0?e.length-1:n,0),function(){for(var a=arguments,t=-1,r=Q(a.length-n,0),d=Array(r);++t<r;)d[t]=a[n+t];t=-1;for(var o=Array(n+1);++t<n;)o[t]=a[t];return o[n]=l(d),Pe(e,this,o)}}var X=K?K.isConcatSpreadable:void 0;function qe(e){return Y(e)||me(e)||!!(X&&e&&e[X])}function ge(e,n,l,a,t){var r=-1,d=e.length;for(l||(l=qe),t||(t=[]);++r<d;){var o=e[r];n>0&&l(o)?n>1?ge(o,n-1,l,a,t):we(t,o):a||(t[t.length]=o)}return t}function Je(e){var n=e==null?0:e.length;return n?ge(e,1):[]}function We(e){return He(_e(e,void 0,Je),e+"")}function Qe(e,n){return e!=null&&n in Object(e)}function Xe(e,n,l){n=R(n,e);for(var a=-1,t=n.length,r=!1;++a<t;){var d=Z(n[a]);if(!(r=e!=null&&l(e,d)))break;e=e[d]}return r||++a!=t?r:(t=e==null?0:e.length,!!t&&Fe(t)&&fe(d,t)&&(Y(e)||me(e)))}function Ye(e,n){return e!=null&&Xe(e,n,Qe)}function Ze(e,n,l,a){if(!M(e))return e;n=R(n,e);for(var t=-1,r=n.length,d=r-1,o=e;o!=null&&++t<r;){var v=Z(n[t]),s=l;if(v==="__proto__"||v==="constructor"||v==="prototype")return e;if(t!=d){var b=o[v];s=a?a(b,v,o):void 0,s===void 0&&(s=M(b)?b:fe(n[t+1])?[]:{})}De(o,v,s),o=o[v]}return e}function je(e,n,l){for(var a=-1,t=n.length,r={};++a<t;){var d=n[a],o=Le(e,d);l(o,d)&&Ze(r,R(d,e),o)}return r}function en(e,n){return je(e,n,function(l,a){return Ye(e,a)})}var nn=We(function(e,n){return e==null?{}:en(e,n)});const an=nn,ke={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:j,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},xe={[P]:e=>U(e)||H(e)||V(e),change:e=>U(e)||H(e)||V(e)},$=Symbol("checkboxGroupContextKey"),ln=({model:e,isChecked:n})=>{const l=E($,void 0),a=p(()=>{var r,d;const o=(r=l==null?void 0:l.max)==null?void 0:r.value,v=(d=l==null?void 0:l.min)==null?void 0:d.value;return!T(o)&&e.value.length>=o&&!n.value||!T(v)&&e.value.length<=v&&n.value});return{isDisabled:Ne(p(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},tn=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:t,isLabeledByFormItem:r})=>{const d=E($,void 0),{formItem:o}=A(),{emit:v}=ae();function s(c){var m,f;return c===e.trueLabel||c===!0?(m=e.trueLabel)!=null?m:!0:(f=e.falseLabel)!=null?f:!1}function b(c,m){v("change",s(c),m)}function g(c){if(l.value)return;const m=c.target;v("change",s(m.checked),c)}async function L(c){l.value||!a.value&&!t.value&&r.value&&(c.composedPath().some(h=>h.tagName==="LABEL")||(n.value=s([!1,e.falseLabel].includes(n.value)),await ne(),b(n.value,c)))}const u=p(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return ee(()=>e.modelValue,()=>{u.value&&(o==null||o.validate("change").catch(c=>he()))}),{handleChange:g,onClickRoot:L}},on=e=>{const n=O(!1),{emit:l}=ae(),a=E($,void 0),t=p(()=>T(a)===!1),r=O(!1);return{model:p({get(){var o,v;return t.value?(o=a==null?void 0:a.modelValue)==null?void 0:o.value:(v=e.modelValue)!=null?v:n.value},set(o){var v,s;t.value&&B(o)?(r.value=((v=a==null?void 0:a.max)==null?void 0:v.value)!==void 0&&o.length>(a==null?void 0:a.max.value),r.value===!1&&((s=a==null?void 0:a.changeEvent)==null||s.call(a,o))):(l(P,o),n.value=o)}}),isGroup:t,isLimitExceeded:r}},sn=(e,n,{model:l})=>{const a=E($,void 0),t=O(!1),r=p(()=>{const s=l.value;return V(s)?s:B(s)?$e(e.label)?s.map(_).some(b=>ze(b,e.label)):s.map(_).includes(e.label):s!=null?s===e.trueLabel:!!s}),d=W(p(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value}),{prop:!0}),o=W(p(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value})),v=p(()=>!!(n.default||e.label));return{checkboxButtonSize:d,isChecked:r,isFocused:t,checkboxSize:o,hasOwnLabel:v}},rn=(e,{model:n})=>{function l(){B(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},ye=(e,n)=>{const{formItem:l}=A(),{model:a,isGroup:t,isLimitExceeded:r}=on(e),{isFocused:d,isChecked:o,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:b}=sn(e,n,{model:a}),{isDisabled:g}=ln({model:a,isChecked:o}),{inputId:L,isLabeledByFormItem:u}=pe(e,{formItemContext:l,disableIdGeneration:b,disableIdManagement:t}),{handleChange:c,onClickRoot:m}=tn(e,{model:a,isLimitExceeded:r,hasOwnLabel:b,isDisabled:g,isLabeledByFormItem:u});return rn(e,{model:a}),{inputId:L,isLabeledByFormItem:u,isChecked:o,isDisabled:g,isFocused:d,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:b,model:a,handleChange:c,onClickRoot:m}},un=["tabindex","role","aria-checked"],dn=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],cn=["id","aria-hidden","disabled","value","name","tabindex"],vn=S({name:"ElCheckbox"}),bn=S({...vn,props:ke,emits:xe,setup(e){const n=e,l=le(),{inputId:a,isLabeledByFormItem:t,isChecked:r,isDisabled:d,isFocused:o,checkboxSize:v,hasOwnLabel:s,model:b,handleChange:g,onClickRoot:L}=ye(n,l),u=z("checkbox"),c=p(()=>[u.b(),u.m(v.value),u.is("disabled",d.value),u.is("bordered",n.border),u.is("checked",r.value)]),m=p(()=>[u.e("input"),u.is("disabled",d.value),u.is("checked",r.value),u.is("indeterminate",n.indeterminate),u.is("focus",o.value)]);return(f,h)=>(x(),te(re(!i(s)&&i(t)?"span":"label"),{class:k(i(c)),"aria-controls":f.indeterminate?f.controls:null,onClick:i(L)},{default:oe(()=>[q("span",{class:k(i(m)),tabindex:f.indeterminate?0:void 0,role:f.indeterminate?"checkbox":void 0,"aria-checked":f.indeterminate?"mixed":void 0},[f.trueLabel||f.falseLabel?I((x(),C("input",{key:0,id:i(a),"onUpdate:modelValue":h[0]||(h[0]=y=>w(b)?b.value=y:null),class:k(i(u).e("original")),type:"checkbox","aria-hidden":f.indeterminate?"true":"false",name:f.name,tabindex:f.tabindex,disabled:i(d),"true-value":f.trueLabel,"false-value":f.falseLabel,onChange:h[1]||(h[1]=(...y)=>i(g)&&i(g)(...y)),onFocus:h[2]||(h[2]=y=>o.value=!0),onBlur:h[3]||(h[3]=y=>o.value=!1)},null,42,dn)),[[F,i(b)]]):I((x(),C("input",{key:1,id:i(a),"onUpdate:modelValue":h[4]||(h[4]=y=>w(b)?b.value=y:null),class:k(i(u).e("original")),type:"checkbox","aria-hidden":f.indeterminate?"true":"false",disabled:i(d),value:f.label,name:f.name,tabindex:f.tabindex,onChange:h[5]||(h[5]=(...y)=>i(g)&&i(g)(...y)),onFocus:h[6]||(h[6]=y=>o.value=!0),onBlur:h[7]||(h[7]=y=>o.value=!1)},null,42,cn)),[[F,i(b)]]),q("span",{class:k(i(u).e("inner"))},null,2)],10,un),i(s)?(x(),C("span",{key:0,class:k(i(u).e("label"))},[N(f.$slots,"default"),f.$slots.default?D("v-if",!0):(x(),C(Be,{key:0},[se(ie(f.label),1)],64))],2)):D("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var mn=G(bn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const fn=["name","tabindex","disabled","true-value","false-value"],hn=["name","tabindex","disabled","value"],pn=S({name:"ElCheckboxButton"}),gn=S({...pn,props:ke,emits:xe,setup(e){const n=e,l=le(),{isFocused:a,isChecked:t,isDisabled:r,checkboxButtonSize:d,model:o,handleChange:v}=ye(n,l),s=E($,void 0),b=z("checkbox"),g=p(()=>{var u,c,m,f;const h=(c=(u=s==null?void 0:s.fill)==null?void 0:u.value)!=null?c:"";return{backgroundColor:h,borderColor:h,color:(f=(m=s==null?void 0:s.textColor)==null?void 0:m.value)!=null?f:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}}),L=p(()=>[b.b("button"),b.bm("button",d.value),b.is("disabled",r.value),b.is("checked",t.value),b.is("focus",a.value)]);return(u,c)=>(x(),C("label",{class:k(i(L))},[u.trueLabel||u.falseLabel?I((x(),C("input",{key:0,"onUpdate:modelValue":c[0]||(c[0]=m=>w(o)?o.value=m:null),class:k(i(b).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(r),"true-value":u.trueLabel,"false-value":u.falseLabel,onChange:c[1]||(c[1]=(...m)=>i(v)&&i(v)(...m)),onFocus:c[2]||(c[2]=m=>a.value=!0),onBlur:c[3]||(c[3]=m=>a.value=!1)},null,42,fn)),[[F,i(o)]]):I((x(),C("input",{key:1,"onUpdate:modelValue":c[4]||(c[4]=m=>w(o)?o.value=m:null),class:k(i(b).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(r),value:u.label,onChange:c[5]||(c[5]=(...m)=>i(v)&&i(v)(...m)),onFocus:c[6]||(c[6]=m=>a.value=!0),onBlur:c[7]||(c[7]=m=>a.value=!1)},null,42,hn)),[[F,i(o)]]),u.$slots.default||u.label?(x(),C("span",{key:2,class:k(i(b).be("button","inner")),style:ue(i(t)?i(g):void 0)},[N(u.$slots,"default",{},()=>[se(ie(u.label),1)])],6)):D("v-if",!0)],2))}});var Ce=G(gn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const kn=de({modelValue:{type:ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:j,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),xn={[P]:e=>B(e),change:e=>B(e)},yn=S({name:"ElCheckboxGroup"}),Cn=S({...yn,props:kn,emits:xn,setup(e,{emit:n}){const l=e,a=z("checkbox"),{formItem:t}=A(),{inputId:r,isLabeledByFormItem:d}=pe(l,{formItemContext:t}),o=async s=>{n(P,s),await ne(),n("change",s)},v=p({get(){return l.modelValue},set(s){o(s)}});return Ee($,{...an(Ie(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:o}),ee(()=>l.modelValue,()=>{l.validateEvent&&(t==null||t.validate("change").catch(s=>he()))}),(s,b)=>{var g;return x(),te(re(s.tag),{id:i(r),class:k(i(a).b("group")),role:"group","aria-label":i(d)?void 0:s.label||"checkbox-group","aria-labelledby":i(d)?(g=i(t))==null?void 0:g.labelId:void 0},{default:oe(()=>[N(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var Se=G(Cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Fn=ve(mn,{CheckboxButton:Ce,CheckboxGroup:Se});be(Ce);const Dn=be(Se),Sn=de({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:ce(String),default:"solid"}}),Ln=S({name:"ElDivider"}),$n=S({...Ln,props:Sn,setup(e){const n=e,l=z("divider"),a=p(()=>l.cssVar({"border-style":n.borderStyle}));return(t,r)=>(x(),C("div",{class:k([i(l).b(),i(l).m(t.direction)]),style:ue(i(a)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(x(),C("div",{key:0,class:k([i(l).e("text"),i(l).is(t.contentPosition)])},[N(t.$slots,"default")],2)):D("v-if",!0)],6))}});var Bn=G($n,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const zn=ve(Bn);export{zn as E,Fn as a,Dn as b};
