"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three"),t=require("./TGALoader.cjs.js"),n=require("mmd-parser");class a extends e.Loader{constructor(t){super(t),this.loader=new e.FileLoader(this.manager),this.parser=null,this.meshBuilder=new o(this.manager),this.animationBuilder=new A}setAnimationPath(e){return this.animationPath=e,this}load(t,n,a,r){const o=this.meshBuilder.setCrossOrigin(this.crossOrigin);let s;s=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:e.LoaderUtils.extractUrlBase(t);const i=this._extractExtension(t).toLowerCase();"pmd"===i||"pmx"===i?this["pmd"===i?"loadPMD":"loadPMX"](t,(function(e){n(o.build(e,s,a,r))}),a,r):r&&r(new Error("THREE.MMDLoader: Unknown model file extension ."+i+"."))}loadAnimation(e,t,n,a,r){const o=this.animationBuilder;this.loadVMD(e,(function(e){n(t.isCamera?o.buildCameraAnimation(e):o.build(e,t))}),a,r)}loadWithAnimation(e,t,n,a,r){const o=this;this.load(e,(function(e){o.loadAnimation(t,e,(function(t){n({mesh:e,animation:t})}),a,r)}),a,r)}loadPMD(e,t,n,a){const r=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(e,(function(e){t(r.parsePmd(e,!0))}),n,a)}loadPMX(e,t,n,a){const r=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(e,(function(e){t(r.parsePmx(e,!0))}),n,a)}loadVMD(e,t,n,a){const r=Array.isArray(e)?e:[e],o=[],s=r.length,i=this._getParser();this.loader.setMimeType(void 0).setPath(this.animationPath).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials);for(let e=0,A=r.length;e<A;e++)this.loader.load(r[e],(function(e){o.push(i.parseVmd(e,!0)),o.length===s&&t(i.mergeVmds(o))}),n,a)}loadVPD(e,t,n,a,r){const o=this._getParser();this.loader.setMimeType(t?void 0:"text/plain; charset=shift_jis").setPath(this.animationPath).setResponseType("text").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(e,(function(e){n(o.parseVpd(e,!0))}),a,r)}_extractExtension(e){const t=e.lastIndexOf(".");return t<0?"":e.slice(t+1)}_getParser(){return null===this.parser&&(this.parser=new n.Parser),this.parser}}const r=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII="];class o{constructor(e){this.crossOrigin="anonymous",this.geometryBuilder=new s,this.materialBuilder=new i(e)}setCrossOrigin(e){return this.crossOrigin=e,this}build(t,n,a,r){const o=this.geometryBuilder.build(t),s=this.materialBuilder.setCrossOrigin(this.crossOrigin).setResourcePath(n).build(t,o,a,r),i=new e.SkinnedMesh(o,s),A=new e.Skeleton(function(t){const n=t.geometry,a=[];if(n&&void 0!==n.bones){for(let t=0,r=n.bones.length;t<r;t++){const r=n.bones[t],o=new e.Bone;a.push(o),o.name=r.name,o.position.fromArray(r.pos),o.quaternion.fromArray(r.rotq),void 0!==r.scl&&o.scale.fromArray(r.scl)}for(let e=0,r=n.bones.length;e<r;e++){const r=n.bones[e];-1!==r.parent&&null!==r.parent&&void 0!==a[r.parent]?a[r.parent].add(a[e]):t.add(a[e])}}return t.updateMatrixWorld(!0),a}(i));return i.bind(A),i}}class s{build(t){const n=[],a=[],r=[],o=[],s=[],i=[],A=[],l=[],h=[],u=[],d=[],c=[],p=[],m=[];let g=0;const f={};for(let e=0;e<t.metadata.vertexCount;e++){const o=t.vertices[e];for(let e=0,t=o.position.length;e<t;e++)n.push(o.position[e]);for(let e=0,t=o.normal.length;e<t;e++)r.push(o.normal[e]);for(let e=0,t=o.uv.length;e<t;e++)a.push(o.uv[e]);for(let e=0;e<4;e++)A.push(o.skinIndices.length-1>=e?o.skinIndices[e]:0);for(let e=0;e<4;e++)l.push(o.skinWeights.length-1>=e?o.skinWeights[e]:0)}for(let e=0;e<t.metadata.faceCount;e++){const n=t.faces[e];for(let e=0,t=n.indices.length;e<t;e++)o.push(n.indices[e])}for(let e=0;e<t.metadata.materialCount;e++){const n=t.materials[e];s.push({offset:3*g,count:3*n.faceCount}),g+=n.faceCount}for(let e=0;e<t.metadata.rigidBodyCount;e++){const n=t.rigidBodies[e];let a=f[n.boneIndex];a=void 0===a?n.type:Math.max(n.type,a),f[n.boneIndex]=a}for(let e=0;e<t.metadata.boneCount;e++){const n=t.bones[e],a={index:e,transformationClass:n.transformationClass,parent:n.parentIndex,name:n.name,pos:n.position.slice(0,3),rotq:[0,0,0,1],scl:[1,1,1],rigidBodyType:void 0!==f[e]?f[e]:-1};-1!==a.parent&&(a.pos[0]-=t.bones[a.parent].position[0],a.pos[1]-=t.bones[a.parent].position[1],a.pos[2]-=t.bones[a.parent].position[2]),i.push(a)}if("pmd"===t.metadata.format)for(let n=0;n<t.metadata.ikCount;n++){const a=t.iks[n],r={target:a.target,effector:a.effector,iteration:a.iteration,maxAngle:4*a.maxAngle,links:[]};for(let n=0,o=a.links.length;n<o;n++){const o={};o.index=a.links[n].index,o.enabled=!0,t.bones[o.index].name.indexOf("ひざ")>=0&&(o.limitation=new e.Vector3(1,0,0)),r.links.push(o)}d.push(r)}else for(let n=0;n<t.metadata.boneCount;n++){const a=t.bones[n].ik;if(void 0===a)continue;const r={target:n,effector:a.effector,iteration:a.iteration,maxAngle:a.maxAngle,links:[]};for(let t=0,n=a.links.length;t<n;t++){const n={};if(n.index=a.links[t].index,n.enabled=!0,1===a.links[t].angleLimitation){const r=a.links[t].lowerLimitationAngle,o=a.links[t].upperLimitationAngle,s=-o[0],i=-o[1];o[0]=-r[0],o[1]=-r[1],r[0]=s,r[1]=i,n.rotationMin=(new e.Vector3).fromArray(r),n.rotationMax=(new e.Vector3).fromArray(o)}r.links.push(n)}d.push(r),i[n].ik=r}if("pmx"===t.metadata.format){const e={};for(let n=0;n<t.metadata.boneCount;n++){const a=t.bones[n],r=a.grant;if(void 0===r)continue;const o={index:n,parentIndex:r.parentIndex,ratio:r.ratio,isLocal:r.isLocal,affectRotation:r.affectRotation,affectPosition:r.affectPosition,transformationClass:a.transformationClass};e[n]={parent:null,children:[],param:o,visited:!1}}const n={parent:null,children:[],param:null,visited:!1};for(const t in e){const a=e[t],r=e[a.parentIndex]||n;a.parent=r,r.children.push(a)}!function e(t){t.param&&(c.push(t.param),i[t.param.index].grant=t.param),t.visited=!0;for(let n=0,a=t.children.length;n<a;n++){const a=t.children[n];a.visited||e(a)}}(n)}function C(e,n,a){for(let r=0;r<n.elementCount;r++){const o=n.elements[r];let s;s="pmd"===t.metadata.format?t.morphs[0].elements[o.index].index:o.index,e.array[3*s+0]+=o.position[0]*a,e.array[3*s+1]+=o.position[1]*a,e.array[3*s+2]+=o.position[2]*a}}for(let a=0;a<t.metadata.morphCount;a++){const r=t.morphs[a],o={name:r.name},s=new e.Float32BufferAttribute(3*t.metadata.vertexCount,3);s.name=r.name;for(let e=0;e<3*t.metadata.vertexCount;e++)s.array[e]=n[e];if("pmd"===t.metadata.format)0!==a&&C(s,r,1);else if(0===r.type)for(let e=0;e<r.elementCount;e++){const n=t.morphs[r.elements[e].index],a=r.elements[e].ratio;1===n.type&&C(s,n,a)}else 1===r.type?C(s,r,1):2===r.type||3===r.type||4===r.type||5===r.type||6===r.type||7===r.type||r.type;h.push(o),u.push(s)}for(let e=0;e<t.metadata.rigidBodyCount;e++){const n=t.rigidBodies[e],a={};for(const e in n)a[e]=n[e];if("pmx"===t.metadata.format&&-1!==a.boneIndex){const e=t.bones[a.boneIndex];a.position[0]-=e.position[0],a.position[1]-=e.position[1],a.position[2]-=e.position[2]}p.push(a)}for(let e=0;e<t.metadata.constraintCount;e++){const n=t.constraints[e],a={};for(const e in n)a[e]=n[e];const r=p[a.rigidBodyIndex1],o=p[a.rigidBodyIndex2];0!==r.type&&2===o.type&&-1!==r.boneIndex&&-1!==o.boneIndex&&t.bones[o.boneIndex].parentIndex===r.boneIndex&&(o.type=1),m.push(a)}const x=new e.BufferGeometry;x.setAttribute("position",new e.Float32BufferAttribute(n,3)),x.setAttribute("normal",new e.Float32BufferAttribute(r,3)),x.setAttribute("uv",new e.Float32BufferAttribute(a,2)),x.setAttribute("skinIndex",new e.Uint16BufferAttribute(A,4)),x.setAttribute("skinWeight",new e.Float32BufferAttribute(l,4)),x.setIndex(o);for(let e=0,t=s.length;e<t;e++)x.addGroup(s[e].offset,s[e].count,e);return x.bones=i,x.morphTargets=h,x.morphAttributes.position=u,x.morphTargetsRelative=!1,x.userData.MMD={bones:i,iks:d,grants:c,rigidBodies:p,constraints:m,format:t.metadata.format},x.computeBoundingSphere(),x}}class i{constructor(t){this.manager=t,this.textureLoader=new e.TextureLoader(this.manager),this.tgaLoader=null,this.crossOrigin="anonymous",this.resourcePath=void 0}setCrossOrigin(e){return this.crossOrigin=e,this}setResourcePath(e){return this.resourcePath=e,this}build(t,n){const a=[],r={};this.textureLoader.setCrossOrigin(this.crossOrigin);for(let o=0;o<t.metadata.materialCount;o++){const s=t.materials[o],i={userData:{}};if(void 0!==s.name&&(i.name=s.name),i.color=(new e.Color).fromArray(s.diffuse),i.opacity=s.diffuse[3],i.emissive=(new e.Color).fromArray(s.ambient),i.transparent=1!==i.opacity,i.skinning=n.bones.length>0,i.morphTargets=n.morphTargets.length>0,i.fog=!0,i.blending=e.CustomBlending,i.blendSrc=e.SrcAlphaFactor,i.blendDst=e.OneMinusSrcAlphaFactor,i.blendSrcAlpha=e.SrcAlphaFactor,i.blendDstAlpha=e.DstAlphaFactor,"pmx"===t.metadata.format&&1==(1&s.flag)?i.side=e.DoubleSide:i.side=1===i.opacity?e.FrontSide:e.DoubleSide,"pmd"===t.metadata.format){if(s.fileName){const t=s.fileName.split("*");if(i.map=this._loadTexture(t[0],r),t.length>1){const n=t[1].slice(-4).toLowerCase();i.envMap=this._loadTexture(t[1],r),i.combine=".sph"===n?e.MultiplyOperation:e.AddOperation}}const n=-1===s.toonIndex?"toon00.bmp":t.toonTextures[s.toonIndex].fileName;i.gradientMap=this._loadTexture(n,r,{isToonTexture:!0,isDefaultToonTexture:this._isDefaultToonTexture(n)}),i.userData.outlineParameters={thickness:1===s.edgeFlag?.003:0,color:[0,0,0],alpha:1,visible:1===s.edgeFlag}}else{let n,a;-1!==s.textureIndex&&(i.map=this._loadTexture(t.textures[s.textureIndex],r)),-1===s.envTextureIndex||1!==s.envFlag&&2!=s.envFlag||(i.envMap=this._loadTexture(t.textures[s.envTextureIndex],r),i.combine=1===s.envFlag?e.MultiplyOperation:e.AddOperation),-1===s.toonIndex||0!==s.toonFlag?(n="toon"+("0"+(s.toonIndex+1)).slice(-2)+".bmp",a=!0):(n=t.textures[s.toonIndex],a=!1),i.gradientMap=this._loadTexture(n,r,{isToonTexture:!0,isDefaultToonTexture:a}),i.userData.outlineParameters={thickness:s.edgeSize/300,color:s.edgeColor.slice(0,3),alpha:s.edgeColor[3],visible:0!=(16&s.flag)&&s.edgeSize>0}}void 0!==i.map&&(i.transparent||this._checkImageTransparency(i.map,n,o),i.emissive.multiplyScalar(.2)),a.push(new e.MeshToonMaterial(i))}if("pmx"===t.metadata.format){function o(e,t){for(let n=0,a=e.length;n<a;n++){const a=e[n];if(-1===a.index)continue;const r=t[a.index];r.opacity!==a.diffuse[3]&&(r.transparent=!0)}}for(let e=0,n=t.morphs.length;e<n;e++){const n=t.morphs[e],r=n.elements;if(0===n.type)for(let e=0,n=r.length;e<n;e++){const n=t.morphs[r[e].index];8===n.type&&o(n.elements,a)}else 8===n.type&&o(r,a)}}return a}_getTGALoader(){if(null===this.tgaLoader){if(void 0===t.TGALoader)throw new Error("THREE.MMDLoader: Import TGALoader");this.tgaLoader=new t.TGALoader(this.manager)}return this.tgaLoader}_isDefaultToonTexture(e){return 10===e.length&&/toon(10|0[0-9])\.bmp/.test(e)}_loadTexture(t,n,a,o,s){const i=this;let A;if(!0===(a=a||{}).isDefaultToonTexture){let e;try{e=parseInt(t.match(/toon([0-9]{2})\.bmp$/)[1])}catch(n){console.warn("THREE.MMDLoader: "+t+" seems like a not right default texture path. Using toon00.bmp instead."),e=0}A=r[e]}else A=this.resourcePath+t;if(void 0!==n[A])return n[A];let l=this.manager.getHandler(A);null===l&&(l=".tga"===t.slice(-4).toLowerCase()?this._getTGALoader():this.textureLoader);const h=l.load(A,(function(t){!0===a.isToonTexture&&(t.image=i._getRotatedImage(t.image),t.magFilter=e.NearestFilter,t.minFilter=e.NearestFilter),t.flipY=!1,t.wrapS=e.RepeatWrapping,t.wrapT=e.RepeatWrapping;for(let e=0;e<h.readyCallbacks.length;e++)h.readyCallbacks[e](h);delete h.readyCallbacks}),o,s);return h.readyCallbacks=[],n[A]=h,h}_getRotatedImage(e){const t=document.createElement("canvas"),n=t.getContext("2d"),a=e.width,r=e.height;return t.width=a,t.height=r,n.clearRect(0,0,a,r),n.translate(a/2,r/2),n.rotate(.5*Math.PI),n.translate(-a/2,-r/2),n.drawImage(e,0,0),n.getImageData(0,0,a,r)}_checkImageTransparency(e,t,n){e.readyCallbacks.push((function(a){function r(e,t){const n=e.width,a=e.height;let r=Math.round(t.x*n)%n,o=Math.round(t.y*a)%a;r<0&&(r+=n),o<0&&(o+=a);const s=o*n+r;return e.data[4*s+3]}const o=void 0!==a.image.data?a.image:function(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height)}(a.image),s=t.groups[n];(function(e,t,n){const a=e.width,o=e.height;if(e.data.length/(a*o)!=4)return!1;for(let a=0;a<n.length;a+=3){const o={x:0,y:0};for(let s=0;s<3;s++){const i=n[3*a+s],A={x:t[2*i+0],y:t[2*i+1]};if(r(e,A)<253)return!0;o.x+=A.x,o.y+=A.y}if(o.x/=3,o.y/=3,r(e,o)<253)return!0}return!1})(o,t.attributes.uv.array,t.index.array.slice(s.start,s.start+s.count))&&(e.transparent=!0)}))}}class A{build(t,n){const a=this.buildSkeletalAnimation(t,n).tracks,r=this.buildMorphAnimation(t,n).tracks;for(let e=0,t=r.length;e<t;e++)a.push(r[e]);return new e.AnimationClip("",-1,a)}buildSkeletalAnimation(t,n){function a(e,t,n){e.push(t[n+0]/127),e.push(t[n+8]/127),e.push(t[n+4]/127),e.push(t[n+12]/127)}const r=[],o={},s=n.skeleton.bones,i={};for(let e=0,t=s.length;e<t;e++)i[s[e].name]=!0;for(let e=0;e<t.metadata.motionCount;e++){const n=t.motions[e],a=n.boneName;void 0!==i[a]&&(o[a]=o[a]||[],o[a].push(n))}for(const t in o){const s=o[t];s.sort((function(e,t){return e.frameNum-t.frameNum}));const i=[],A=[],l=[],h=[],u=[],d=n.skeleton.getBoneByName(t).position.toArray();for(let e=0,t=s.length;e<t;e++){const t=s[e].frameNum/30,n=s[e].position,r=s[e].rotation,o=s[e].interpolation;i.push(t);for(let e=0;e<3;e++)A.push(d[e]+n[e]);for(let e=0;e<4;e++)l.push(r[e]);for(let e=0;e<3;e++)a(h,o,e);a(u,o,3)}const c=".bones["+t+"]";r.push(this._createTrack(c+".position",e.VectorKeyframeTrack,i,A,h)),r.push(this._createTrack(c+".quaternion",e.QuaternionKeyframeTrack,i,l,u))}return new e.AnimationClip("",-1,r)}buildMorphAnimation(t,n){const a=[],r={},o=n.morphTargetDictionary;for(let e=0;e<t.metadata.morphCount;e++){const n=t.morphs[e],a=n.morphName;void 0!==o[a]&&(r[a]=r[a]||[],r[a].push(n))}for(const t in r){const n=r[t];n.sort((function(e,t){return e.frameNum-t.frameNum}));const s=[],i=[];for(let e=0,t=n.length;e<t;e++)s.push(n[e].frameNum/30),i.push(n[e].weight);a.push(new e.NumberKeyframeTrack(".morphTargetInfluences["+o[t]+"]",s,i))}return new e.AnimationClip("",-1,a)}buildCameraAnimation(t){function n(e,t){e.push(t.x),e.push(t.y),e.push(t.z)}function a(e,t,n){e.push(t[4*n+0]/127),e.push(t[4*n+1]/127),e.push(t[4*n+2]/127),e.push(t[4*n+3]/127)}const r=void 0===t.cameras?[]:t.cameras.slice();r.sort((function(e,t){return e.frameNum-t.frameNum}));const o=[],s=[],i=[],A=[],l=[],h=[],u=[],d=[],c=[],p=new e.Quaternion,m=new e.Euler,g=new e.Vector3,f=new e.Vector3;for(let e=0,t=r.length;e<t;e++){const t=r[e],B=t.frameNum/30,b=t.position,y=t.rotation,I=t.distance,w=t.fov,R=t.interpolation;o.push(B),g.set(0,0,-I),f.set(b[0],b[1],b[2]),m.set(-y[0],-y[1],-y[2]),p.setFromEuler(m),g.add(f),g.applyQuaternion(p),n(s,f),(C=i).push((x=p).x),C.push(x.y),C.push(x.z),C.push(x.w),n(A,g),l.push(w);for(let e=0;e<3;e++)a(h,R,e);a(u,R,3);for(let e=0;e<3;e++)a(d,R,4);a(c,R,5)}var C,x;const B=[];return B.push(this._createTrack("target.position",e.VectorKeyframeTrack,o,s,h)),B.push(this._createTrack(".quaternion",e.QuaternionKeyframeTrack,o,i,u)),B.push(this._createTrack(".position",e.VectorKeyframeTrack,o,A,d)),B.push(this._createTrack(".fov",e.NumberKeyframeTrack,o,l,c)),new e.AnimationClip("",-1,B)}_createTrack(e,t,n,a,r){if(n.length>2){n=n.slice(),a=a.slice(),r=r.slice();const e=a.length/n.length,t=r.length/n.length;let o=1;for(let s=2,i=n.length;s<i;s++){for(let t=0;t<e;t++)if(a[o*e+t]!==a[(o-1)*e+t]||a[o*e+t]!==a[s*e+t]){o++;break}if(s>o){n[o]=n[s];for(let t=0;t<e;t++)a[o*e+t]=a[s*e+t];for(let e=0;e<t;e++)r[o*t+e]=r[s*t+e]}}n.length=o+1,a.length=(o+1)*e,r.length=(o+1)*t}const o=new t(e,n,a);return o.createInterpolant=function(e){return new l(this.times,this.values,this.getValueSize(),e,new Float32Array(r))},o}}class l extends e.Interpolant{constructor(e,t,n,a,r){super(e,t,n,a),this.interpolationParams=r}interpolate_(t,n,a,r){const o=this.resultBuffer,s=this.sampleValues,i=this.valueSize,A=this.interpolationParams,l=t*i,h=l-i,u=r-n<.05?0:(a-n)/(r-n);if(4===i){const n=A[4*t+0],a=A[4*t+1],r=A[4*t+2],i=A[4*t+3],d=this._calculate(n,a,r,i,u);e.Quaternion.slerpFlat(o,0,s,h,s,l,d)}else if(3===i)for(let e=0;e!==i;++e){const n=A[12*t+4*e+0],a=A[12*t+4*e+1],r=A[12*t+4*e+2],i=A[12*t+4*e+3],d=this._calculate(n,a,r,i,u);o[e]=s[h+e]*(1-d)+s[l+e]*d}else{const e=A[4*t+0],n=A[4*t+1],a=A[4*t+2],r=A[4*t+3],i=this._calculate(e,n,a,r,u);o[0]=s[h]*(1-i)+s[l]*i}return o}_calculate(e,t,n,a,r){let o=.5,s=o,i=1-s;const A=Math;let l,h,u;for(let n=0;n<15;n++){l=3*i*i*s,h=3*i*s*s,u=s*s*s;const n=l*e+h*t+u-r;if(A.abs(n)<1e-5)break;o/=2,s+=n<0?o:-o,i=1-s}return l*n+h*a+u}}exports.MMDLoader=a;
