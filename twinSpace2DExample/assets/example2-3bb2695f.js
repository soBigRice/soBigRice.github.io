import"./modulepreload-polyfill-3cfb730f.js";import{i as a,e as c,s,l as o,c as h,o as u}from"./TwinSpace2D-7f99feea.js";const l=`precision mediump float;
uniform float times;
varying vec2 vUV;
varying vec3 vPosition;
varying vec2 vResolution;
uniform sampler2D u_texture;
#define MOD3 vec3(.1031, .11369, .13787)
float hash31( vec3 p3 ){
    p3 = fract( p3 * MOD3 );
    p3 += dot( p3 , p3.yzx + 19.19 );
    return - 1.0 + 2.0 * fract( ( p3.x + p3.y ) * p3.z );
}
vec3 hash33( vec3 p3 ){
    p3 = fract( p3 * MOD3 );
    p3 += dot( p3 , p3.yxz + 19.19 );
    return - 1.0 + 2.0 * fract( vec3( ( p3.x + p3.y ) * p3.z , ( p3.x + p3.z ) * p3.y , ( p3.y + p3.z ) * p3.x ) );
}
float value_noise( vec3 p ){
    vec3 pi = floor( p );
    vec3 pf = p - pi;
    vec3 w = pf * pf * ( 3.0 - 2.0 * pf );
    return mix( mix( mix( hash31( pi + vec3( 0 , 0 , 0 ) ) , hash31( pi + vec3( 1 , 0 , 0 ) ) , w.x ) , mix( hash31( pi + vec3( 0 , 0 , 1 ) ) , hash31( pi + vec3( 1 , 0 , 1 ) ) , w.x ) , w.z ) , mix( mix( hash31( pi + vec3( 0 , 1 , 0 ) ) , hash31( pi + vec3( 1 , 1 , 0 ) ) , w.x ) , mix( hash31( pi + vec3( 0 , 1 , 1 ) ) , hash31( pi + vec3( 1 , 1 , 1 ) ) , w.x ) , w.z ) , w.y );
}
float perlin_noise( vec3 p ){
    vec3 pi = floor( p );
    vec3 pf = p - pi;
    vec3 w = pf * pf * ( 3.0 - 2.0 * pf );
    return mix( mix( mix( dot( pf - vec3( 0 , 0 , 0 ) , hash33( pi + vec3( 0 , 0 , 0 ) ) ) , dot( pf - vec3( 1 , 0 , 0 ) , hash33( pi + vec3( 1 , 0 , 0 ) ) ) , w.x ) , mix( dot( pf - vec3( 0 , 0 , 1 ) , hash33( pi + vec3( 0 , 0 , 1 ) ) ) , dot( pf - vec3( 1 , 0 , 1 ) , hash33( pi + vec3( 1 , 0 , 1 ) ) ) , w.x ) , w.z ) , mix( mix( dot( pf - vec3( 0 , 1 , 0 ) , hash33( pi + vec3( 0 , 1 , 0 ) ) ) , dot( pf - vec3( 1 , 1 , 0 ) , hash33( pi + vec3( 1 , 1 , 0 ) ) ) , w.x ) , mix( dot( pf - vec3( 0 , 1 , 1 ) , hash33( pi + vec3( 0 , 1 , 1 ) ) ) , dot( pf - vec3( 1 , 1 , 1 ) , hash33( pi + vec3( 1 , 1 , 1 ) ) ) , w.x ) , w.z ) , w.y );
}
vec3 depthToNormal( sampler2D depthTexture , vec2 texCoord , vec2 depthTextureSize ){
    float depthValue = texture2D( depthTexture , texCoord ).r;
    vec2 pixelSize = vec2( 1.0 / depthTextureSize.x , 1.0 / depthTextureSize.y );
    float depthLeft = texture2D( depthTexture , texCoord - vec2( pixelSize.x , 0.0 ) ).r;
    float depthRight = texture2D( depthTexture , texCoord + vec2( pixelSize.x , 0.0 ) ).r;
    float depthUp = texture2D( depthTexture , texCoord - vec2( 0.0 , pixelSize.y ) ).r;
    float depthDown = texture2D( depthTexture , texCoord + vec2( 0.0 , pixelSize.y ) ).r;
    vec3 normalView;
    normalView.x = ( depthLeft - depthRight ) * 0.5;
    normalView.y = ( depthDown - depthUp ) * 0.5;
    normalView.z = 1.0;
    mat4 viewInverseTransposeMatrix = mat4( 1.0 );    vec3 normalWorld = ( viewInverseTransposeMatrix * vec4( normalView , 0.0 ) ).xyz;
    return normalize( normalWorld ) * 0.5 + 0.5;
}
void main( ){
    vec3 outPutColor = vec3( perlin_noise( vPosition / 100. + vec3( times ) ) );
    outPutColor = depthToNormal( u_texture , vUV , vResolution );
    gl_FragColor = vec4( outPutColor , 1.0 );
}`,x=`precision mediump float;
attribute vec2 u_position;
attribute vec2 uv;
uniform vec2 u_resolution;
varying vec2 vUV;
varying vec3 vPosition;
varying vec2 vResolution;
void main( ){
    vUV = uv;
    vResolution = u_resolution;
    vPosition = vec3( u_position.x , 0. , u_position.y );
    vec2 position = u_position / u_resolution;
    position *= 2.;
    position -= vec2( 1. );
    position *= vec2( 1. , - 1. );
    gl_Position = vec4( position , 0. , 1. );
}`,d=""+new URL("demo2-6376bd89.jpg",import.meta.url).href,e=new a("normalConvert"),i=new c,t=e.canvas.clientWidth,n=e.canvas.clientHeight;i.setAttribute("u_position",new Float32Array([0,0,t,0,t,n,t,n,0,n,0,0]),2);i.setAttribute("uv",new Float32Array([0,0,1,0,1,1,1,1,0,1,0,0]),2);const r=new s({uniforms:{u_resolution:{value:new o(e.canvas.clientWidth,e.canvas.clientHeight)},u_texture:{value:new h().load(d,v=>{v.repeat="repeat"})}},fragmentShader:l,vertexShader:x}),m=new u(i,r);e.scene.add(m);window.addEventListener("resize",()=>{r.uniforms.u_resolution.value=new o(e.canvas.clientWidth,e.canvas.clientHeight)});const p=()=>{requestAnimationFrame(p),e.render()};p();
