import s from"./drawerBarTop-5fa069f6.js";import i from"./gisViewController-9abe6303.js";import S from"./shpSolver-5b4176c7.js";import f from"./gisAreaView-3e32637a.js";import w from"./popUp-2cb81c29.js";import{_ as h,o as g,r as v,a as n,b as r,c as C,d as a,e,w as V,f as B,g as x}from"./index-c3ac2a65.js";import"./el-button-e6c8e95f.js";import"./el-overlay-10b861a4.js";import"./event-dbd1a092.js";import"./focus-trap-c44c7d50.js";import"./el-tooltip-dbc4be4a.js";import"./el-divider-13627aec.js";/* empty css                                                */const y={components:{ShpSolve:S,GISAreaView:f,drawerBarTop:s,gisViewController:i,popup:w},setup(){return g(()=>{}),{popupState:v(!1)}}},k={class:"shpContainer"},A={class:"shpViewControlContainer"},G={class:"shpMainContainer"};function I(_,t,N,o,O,b){const l=i,m=n("GISAreaView"),c=n("ShpSolve"),d=s,u=n("popup");return r(),C("div",k,[a("div",A,[e(l,{dataOrigin:o.popupState,"onUpdate:dataOrigin":t[0]||(t[0]=p=>o.popupState=p)},null,8,["dataOrigin"])]),a("div",G,[e(m),e(d,{style:{width:"100%"}},{default:V(()=>[e(c)]),_:1}),o.popupState?(r(),B(u,{key:0,style:{position:"absolute"},state:o.popupState,"onUpdate:state":t[1]||(t[1]=p=>o.popupState=p)},null,8,["state"])):x("",!0)])])}const P=h(y,[["render",I]]);export{P as default};