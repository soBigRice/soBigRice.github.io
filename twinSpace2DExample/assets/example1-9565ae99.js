import"./modulepreload-polyfill-3cfb730f.js";import{i as r,e as v,s as c,l as n,c as l,o as m}from"./TwinSpace2D-7f99feea.js";const d=`precision mediump float;
uniform sampler2D map;
varying vec2 uvs;
varying vec2 vPosition;
varying vec2 uMouse;
void main( ){
    vec4 outPutColor = texture2D( map , uvs );
    float dis = distance( uMouse , uvs );
    if ( dis < 0.1 ){
        float dis2 = smoothstep( 0.01 , 0.06 , dis );
        outPutColor = mix( vec4( 0.0 , 0.949 , 1.0 , 1.0 ) , outPutColor , dis2 );
    }
    gl_FragColor = vec4( outPutColor );
}`,p=`precision mediump float;
attribute vec2 position;
attribute vec2 uv;
uniform vec2 u_resolution;uniform vec2 mouseMove;uniform vec2 u_radio;
varying vec2 uvs;
varying vec2 vPosition;
varying vec2 uMouse;
void main( ){
    uMouse = mouseMove / u_resolution;
    uvs = uv;
    vec2 pointPos = position * u_radio / u_resolution;
    pointPos *= 2.;
    pointPos -= vec2( 1. );
    pointPos *= vec2( 1. , - 1. );
    gl_Position = vec4( pointPos , 0. , 1. );
}
`,w=""+new URL("demo1-b7ff66fb.png",import.meta.url).href,e=new r("view2d"),a=new v,o=e.canvas.clientWidth,i=e.canvas.clientHeight;a.setAttribute("position",new Float32Array([0,0,o,0,o,i,o,i,0,i,0,0]),2);a.setAttribute("uv",new Float32Array([0,0,1,0,1,1,1,1,0,1,0,0]),2);const t=new c({uniforms:{u_resolution:{value:new n(e.canvas.clientWidth,e.canvas.clientHeight)},map:{value:new l().load(w,s=>{})},mouseMove:{value:new n(0,0)},u_radio:{value:new n(e.canvas.clientWidth/o,e.canvas.clientHeight/i)}},fragmentShader:d,vertexShader:p}),f=new m(a,t);e.scene.add(f);window.addEventListener("resize",()=>{t.uniforms.u_resolution.value=new n(e.canvas.clientWidth,e.canvas.clientHeight),t.uniforms.u_radio.value=new n(e.canvas.clientWidth/o,e.canvas.clientHeight/i)});window.addEventListener("mousemove",s=>{t.uniforms.mouseMove.value=new n(s.clientX,s.clientY)});const u=()=>{requestAnimationFrame(u),e.render()};u();
