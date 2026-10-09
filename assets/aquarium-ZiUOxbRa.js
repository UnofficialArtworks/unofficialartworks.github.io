import{_ as e}from"./index-C1ASBeSz.js";import{t}from"./Diorama-Er3oUQqc.js";function n(e,t,n){e.onBeforeCompile=e=>{e.uniforms.uCausticTime=n,e.uniforms.uAssetDecode={value:t},e.vertexShader=`uniform mat4 uAssetDecode; varying vec3 vToyPosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
vToyPosition = (uAssetDecode * vec4(position, 1.0)).xyz;`),e.fragmentShader=`uniform float uCausticTime; varying vec3 vToyPosition;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`
      #include <color_fragment>
      float caustic = pow(abs(sin(vToyPosition.x * 7.0 + uCausticTime * .55)
        * cos(vToyPosition.z * 8.0 - uCausticTime * .4)), 8.0);
      diffuseColor.rgb += vec3(.16, .2, .14) * caustic * (1.0 - smoothstep(.85, 1.6, vToyPosition.y));`)},e.customProgramCacheKey=()=>`pocket-caustic-v2`}var r=e(),i={particles:{count:26,color:`#d9fbff`,size:.05,rise:.24,spread:.75,opacity:.55},surface:n};function a(e){return(0,r.jsx)(t,{...e,style:i})}export{a as default};