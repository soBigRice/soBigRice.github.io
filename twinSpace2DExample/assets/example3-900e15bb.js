import"./modulepreload-polyfill-3cfb730f.js";import{i as r,e as a,s,l as i,o as p}from"./TwinSpace2D-7f99feea.js";const l=`precision mediump float;
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
    float vals = mix( mix( mix( dot( pf - vec3( 0 , 0 , 0 ) , hash33( pi + vec3( 0 , 0 , 0 ) ) ) , dot( pf - vec3( 1 , 0 , 0 ) , hash33( pi + vec3( 1 , 0 , 0 ) ) ) , w.x ) , mix( dot( pf - vec3( 0 , 0 , 1 ) , hash33( pi + vec3( 0 , 0 , 1 ) ) ) , dot( pf - vec3( 1 , 0 , 1 ) , hash33( pi + vec3( 1 , 0 , 1 ) ) ) , w.x ) , w.z ) , mix( mix( dot( pf - vec3( 0 , 1 , 0 ) , hash33( pi + vec3( 0 , 1 , 0 ) ) ) , dot( pf - vec3( 1 , 1 , 0 ) , hash33( pi + vec3( 1 , 1 , 0 ) ) ) , w.x ) , mix( dot( pf - vec3( 0 , 1 , 1 ) , hash33( pi + vec3( 0 , 1 , 1 ) ) ) , dot( pf - vec3( 1 , 1 , 1 ) , hash33( pi + vec3( 1 , 1 , 1 ) ) ) , w.x ) , w.z ) , w.y );
    return ( vals * 4. );
}
vec3 colorDepthNormal( vec3 cuv ){
    float depthValue = perlin_noise( cuv + vec3( times ) );
    float offset = 0.3;
    float depthLeft = perlin_noise( cuv + vec3( offset , 0. , 0. ) + vec3( times ) );
    float depthRight = perlin_noise( cuv + vec3( - offset , 0. , 0. ) + vec3( times ) );
    float depthUp = perlin_noise( cuv + vec3( 0. , 0. , offset ) + vec3( times ) );
    float depthDown = perlin_noise( cuv + vec3( 0. , 0. , - offset ) + vec3( times ) );
    vec3 normalView;
    normalView.x = ( depthLeft - depthRight ) * 0.5;
    normalView.y = ( depthDown - depthUp ) * 0.5;
    normalView.z = 1.0;
    mat4 viewInverseTransposeMatrix = mat4( 1.0 );    vec3 normalWorld = ( viewInverseTransposeMatrix * vec4( normalView , 0.0 ) ).xyz;
    return vec3( normalView );
}
void main( ){
    vec3 screenUV = vec3( vUV.x , 0. , vUV.y ) * 10.;
    vec3 depthPos = vec3( perlin_noise( screenUV + vec3( times ) ) );
    depthPos *= 0.7;
    depthPos += vec3( 0.3 );
    vec3 outPutColor = vec3( 0.2 , 0.2 , 0.29 );
    vec3 colorDir = vec3( 0.4 , -0.69 , 0.69 );
    vec3 lightColor = vec3( 0.4 , 0.69 , 0.69 );
    vec3 normalColor = colorDepthNormal( screenUV );
    float angleValue = dot( colorDir , normalColor );
    if ( angleValue > 0. ){
        outPutColor += ( angleValue * lightColor * depthPos.r );
    }
    gl_FragColor = vec4( vec3( outPutColor ) , 1.0 );
}`,u=`precision mediump float;
attribute vec2 u_position;
attribute vec2 uv;
uniform vec2 u_resolution;
varying vec2 vUV;
varying vec3 vPosition;
varying vec2 vResolution;
uniform vec2 u_ratio;
void main() {
    float ratio = u_resolution.x / u_resolution.y;
    vUV = vec2(uv.x * u_resolution.x, uv.y * u_resolution.y);
    vUV /= 800.;
    vResolution = u_resolution;
    vPosition = vec3(u_position.x, 0., u_position.y);
    vec2 position = u_position / u_resolution;
    position.x /= u_ratio.x;
    position.y /= u_ratio.y;
    position *= 2.;
    position -= vec2(1.);
    position *= vec2(1., -1.);
    gl_Position = vec4(position, 0., 1.);
}
`,e=new r("noise2d"),v=new a,n=e.canvas.clientWidth,o=e.canvas.clientHeight;v.setAttribute("u_position",new Float32Array([0,0,n,0,n,o,n,o,0,o,0,0]),2);v.setAttribute("uv",new Float32Array([0,0,1,0,1,1,1,1,0,1,0,0]),2);const t=new s({uniforms:{u_resolution:{value:new i(e.canvas.clientWidth,e.canvas.clientHeight)},u_texture:{},u_ratio:{value:new i(1,1)},times:{value:0}},fragmentShader:l,vertexShader:u}),h=new p(v,t);e.scene.add(h);window.addEventListener("resize",()=>{t.uniforms.u_resolution.value=new i(e.canvas.clientWidth,e.canvas.clientHeight),t.uniforms.u_ratio.value=new i(n/e.canvas.clientWidth,o/e.canvas.clientHeight)});const c=()=>{t.uniforms.times.value+=.01,requestAnimationFrame(c),e.render()};c();
