import s from"./drawerBarTop-eb624ad8.js";import i from"./gisViewController-e001b52f.js";import S from"./shpSolver-ba4ac5d8.js";import f from"./gisAreaView-8d327b95.js";import w from"./popUp-8bc19cfc.js";import{_ as h,o as g,r as v,a as n,b as r,c as C,d as a,e,w as V,f as B,g as x}from"./index-fd210390.js";import"./el-button-708dc4b6.js";import"./el-overlay-8fc1d81f.js";import"./event-d3aeaefc.js";import"./focus-trap-ec276e38.js";import"./el-tooltip-f6341281.js";import"./el-divider-e7b347a1.js";/* empty css                                                */const y={components:{ShpSolve:S,GISAreaView:f,drawerBarTop:s,gisViewController:i,popup:w},setup(){return g(()=>{}),{popupState:v(!1)}}},k={class:"shpContainer"},A={class:"shpViewControlContainer"},G={class:"shpMainContainer"};function I(_,t,N,o,O,b){const l=i,m=n("GISAreaView"),c=n("ShpSolve"),d=s,u=n("popup");return r(),C("div",k,[a("div",A,[e(l,{dataOrigin:o.popupState,"onUpdate:dataOrigin":t[0]||(t[0]=p=>o.popupState=p)},null,8,["dataOrigin"])]),a("div",G,[e(m),e(d,{style:{width:"100%"}},{default:V(()=>[e(c)]),_:1}),o.popupState?(r(),B(u,{key:0,style:{position:"absolute"},state:o.popupState,"onUpdate:state":t[1]||(t[1]=p=>o.popupState=p)},null,8,["state"])):x("",!0)])])}const P=h(y,[["render",I]]);export{P as default};
