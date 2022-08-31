"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three");exports.OutlineEffect=function(t,i){i=i||{},this.enabled=!0;const n=void 0!==i.defaultThickness?i.defaultThickness:.003,a=(new e.Color).fromArray(void 0!==i.defaultColor?i.defaultColor:[0,0,0]),r=void 0!==i.defaultAlpha?i.defaultAlpha:1,l=void 0!==i.defaultKeepAlive&&i.defaultKeepAlive,o={},s={},u={},d={outlineThickness:{value:n},outlineColor:{value:a},outlineAlpha:{value:r}},c=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","\tfloat thickness = outlineThickness;","\tconst float ratio = 1.0;","\tvec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","\tvec4 norm = normalize( pos - pos2 );","\treturn pos + norm * thickness * pos.w * ratio;","}","void main() {","\t#include <uv_vertex>","\t#include <beginnormal_vertex>","\t#include <morphnormal_vertex>","\t#include <skinbase_vertex>","\t#include <skinnormal_vertex>","\t#include <begin_vertex>","\t#include <morphtarget_vertex>","\t#include <skinning_vertex>","\t#include <displacementmap_vertex>","\t#include <project_vertex>","\tvec3 outlineNormal = - objectNormal;","\tgl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","\t#include <logdepthbuf_vertex>","\t#include <clipping_planes_vertex>","\t#include <fog_vertex>","}"].join("\n"),p=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","\t#include <clipping_planes_fragment>","\t#include <logdepthbuf_fragment>","\tgl_FragColor = vec4( outlineColor, outlineAlpha );","\t#include <tonemapping_fragment>","\t#include <encodings_fragment>","\t#include <fog_fragment>","\t#include <premultiplied_alpha_fragment>","}"].join("\n");function m(t){const i=function(t){let i=o[t.uuid];return void 0===i&&(i={material:new e.ShaderMaterial({type:"OutlineEffect",uniforms:e.UniformsUtils.merge([e.UniformsLib.fog,e.UniformsLib.displacementmap,d]),vertexShader:c,fragmentShader:p,side:e.BackSide}),used:!0,keepAlive:l,count:0},o[t.uuid]=i),i.used=!0,i.material}(t);return s[i.uuid]=t,function(e,t){if("invisible"===e.name)return;const i=t.userData.outlineParameters;e.skinning=t.skinning,e.morphTargets=t.morphTargets,e.morphNormals=t.morphNormals,e.fog=t.fog,e.toneMapped=t.toneMapped,e.premultipliedAlpha=t.premultipliedAlpha,e.displacementMap=t.displacementMap,void 0!==i?(!1===t.visible?e.visible=!1:e.visible=void 0===i.visible||i.visible,e.transparent=void 0!==i.alpha&&i.alpha<1||t.transparent,void 0!==i.keepAlive&&(o[t.uuid].keepAlive=i.keepAlive)):(e.transparent=t.transparent,e.visible=t.visible);!0!==t.wireframe&&!1!==t.depthTest||(e.visible=!1);t.clippingPlanes&&(e.clipping=!0,e.clippingPlanes=t.clippingPlanes,e.clipIntersection=t.clipIntersection,e.clipShadows=t.clipShadows);e.version=t.version}(i,t),i}function v(e){const t=e.geometry;let i=!1;return void 0!==e.geometry&&(i=!t.isBufferGeometry||void 0!==t.attributes.normal),!0===e.isMesh&&void 0!==e.material&&!0===i}function f(e){if(!1!==v(e)){if(Array.isArray(e.material))for(let t=0,i=e.material.length;t<i;t++)e.material[t]=m(e.material[t]);else e.material=m(e.material);u[e.uuid]=e.onBeforeRender,e.onBeforeRender=g}}function h(e){if(!1!==v(e)){if(Array.isArray(e.material))for(let t=0,i=e.material.length;t<i;t++)e.material[t]=s[e.material[t].uuid];else e.material=s[e.material.uuid];e.onBeforeRender=u[e.uuid]}}function g(e,t,i,n,a){const r=s[a.uuid];void 0!==r&&function(e,t){const i=t.userData.outlineParameters;e.uniforms.outlineAlpha.value=t.opacity,void 0!==i&&(void 0!==i.thickness&&(e.uniforms.outlineThickness.value=i.thickness),void 0!==i.color&&e.uniforms.outlineColor.value.fromArray(i.color),void 0!==i.alpha&&(e.uniforms.outlineAlpha.value=i.alpha));t.displacementMap&&(e.uniforms.displacementMap.value=t.displacementMap,e.uniforms.displacementScale.value=t.displacementScale,e.uniforms.displacementBias.value=t.displacementBias)}(a,r)}this.render=function(e,i){let n,a=!1;if(void 0!==arguments[2]&&(console.warn("THREE.OutlineEffect.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),n=arguments[2]),void 0!==arguments[3]&&(console.warn("THREE.OutlineEffect.render(): the forceClear argument has been removed. Use .clear() instead."),a=arguments[3]),void 0!==n&&t.setRenderTarget(n),a&&t.clear(),!1===this.enabled)return void t.render(e,i);const r=t.autoClear;t.autoClear=this.autoClear,t.render(e,i),t.autoClear=r,this.renderOutline(e,i)},this.renderOutline=(e,i)=>{const n=t.autoClear,a=e.autoUpdate,r=e.background,l=t.shadowMap.enabled;e.autoUpdate=!1,e.background=null,t.autoClear=!1,t.shadowMap.enabled=!1,e.traverse(f),t.render(e,i),e.traverse(h),function(){let e;e=Object.keys(s);for(let t=0,i=e.length;t<i;t++)s[e[t]]=void 0;e=Object.keys(u);for(let t=0,i=e.length;t<i;t++)u[e[t]]=void 0;e=Object.keys(o);for(let t=0,i=e.length;t<i;t++){const i=e[t];!1===o[i].used?(o[i].count++,!1===o[i].keepAlive&&o[i].count>60&&delete o[i]):(o[i].used=!1,o[i].count=0)}}(),e.autoUpdate=a,e.background=r,t.autoClear=n,t.shadowMap.enabled=l},this.autoClear=t.autoClear,this.domElement=t.domElement,this.shadowMap=t.shadowMap,this.clear=(e,i,n)=>{t.clear(e,i,n)},this.getPixelRatio=()=>t.getPixelRatio(),this.setPixelRatio=e=>{t.setPixelRatio(e)},this.getSize=e=>t.getSize(e),this.setSize=(e,i,n)=>{t.setSize(e,i,n)},this.setViewport=(e,i,n,a)=>{t.setViewport(e,i,n,a)},this.setScissor=(e,i,n,a)=>{t.setScissor(e,i,n,a)},this.setScissorTest=e=>{t.setScissorTest(e)},this.setRenderTarget=e=>{t.setRenderTarget(e)}};
