"use strict";var e=require("./constants.cjs.js"),t=require("three"),r=require("./WebGPUTextureUtils.cjs.js");function i(e){const t=e.target,r=this.properties,i=r.get(t);t.removeEventListener("dispose",i.disposeCallback),i.colorTextureGPU.destroy(),r.remove(t.texture),this.info.memory.textures--,!0===t.depthBuffer&&(i.depthTextureGPU.destroy(),this.info.memory.textures--,null!==t.depthTexture&&r.remove(t.depthTexture)),r.remove(t)}function a(e){const t=e.target,r=this.properties.get(t);r.textureGPU.destroy(),t.removeEventListener("dispose",r.disposeCallback),this.properties.remove(t),this.info.memory.textures--}module.exports=class{constructor(e,t,r,i){this.device=e,this.properties=t,this.info=r,this.glslang=i,this.defaultTexture=null,this.defaultCubeTexture=null,this.defaultSampler=null,this.samplerCache=new Map,this.utils=null}getDefaultSampler(){return null===this.defaultSampler&&(this.defaultSampler=this.device.createSampler({})),this.defaultSampler}getDefaultTexture(){if(null===this.defaultTexture){const e=new t.Texture;e.minFilter=t.NearestFilter,e.magFilter=t.NearestFilter,this.defaultTexture=this._createTexture(e)}return this.defaultTexture}getDefaultCubeTexture(){if(null===this.defaultCubeTexture){const e=new t.CubeTexture;e.minFilter=t.NearestFilter,e.magFilter=t.NearestFilter,this.defaultCubeTexture=this._createTexture(e)}return this.defaultCubeTexture}getTextureGPU(e){return this.properties.get(e).textureGPU}getSampler(e){return this.properties.get(e).samplerGPU}updateTexture(e){let t=!1;const r=this.properties.get(e);if(e.version>0&&r.version!==e.version){const i=e.image;if(void 0===i)console.warn("THREE.WebGPURenderer: Texture marked for update but image is undefined.");else if(!1===i.complete)console.warn("THREE.WebGPURenderer: Texture marked for update but image is incomplete.");else{if(void 0===r.initialized){r.initialized=!0;const t=a.bind(this);r.disposeCallback=t,e.addEventListener("dispose",t),this.info.memory.textures++}void 0!==r.textureGPU&&r.textureGPU.destroy(),r.textureGPU=this._createTexture(e),r.version=e.version,t=!0}}return!1===r.initializedRTT&&(r.initializedRTT=!0,t=!0),t}updateSampler(e){const t=[];t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy);const r=t.join();let i=this.samplerCache.get(r);void 0===i&&(i=this.device.createSampler({addressModeU:this._convertAddressMode(e.wrapS),addressModeV:this._convertAddressMode(e.wrapT),addressModeW:this._convertAddressMode(e.wrapR),magFilter:this._convertFilterMode(e.magFilter),minFilter:this._convertFilterMode(e.minFilter),mipmapFilter:this._convertFilterMode(e.minFilter),maxAnisotropy:e.anisotropy}),this.samplerCache.set(r,i));this.properties.get(e).samplerGPU=i}initRenderTarget(t){const r=this.properties,a=r.get(t);if(void 0===a.initialized){const o=this.device,s=t.width,u=t.height,n=this._getFormat(t.texture),m=o.createTexture({size:{width:s,height:u,depthOrArrayLayers:1},format:n,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.SAMPLED});this.info.memory.textures++,a.colorTextureGPU=m,a.colorTextureFormat=n;const h=r.get(t.texture);if(h.textureGPU=m,h.initializedRTT=!1,!0===t.depthBuffer){const i=e.GPUTextureFormat.Depth24PlusStencil8,n=o.createTexture({size:{width:s,height:u,depthOrArrayLayers:1},format:i,usage:GPUTextureUsage.RENDER_ATTACHMENT});if(this.info.memory.textures++,a.depthTextureGPU=n,a.depthTextureFormat=i,null!==t.depthTexture){const e=r.get(t.depthTexture);e.textureGPU=n,e.initializedRTT=!1}}const l=i.bind(this);a.disposeCallback=l,t.addEventListener("dispose",l),a.initialized=!0}}dispose(){this.samplerCache.clear()}_convertAddressMode(r){let i=e.GPUAddressMode.ClampToEdge;return r===t.RepeatWrapping?i=e.GPUAddressMode.Repeat:r===t.MirroredRepeatWrapping&&(i=e.GPUAddressMode.MirrorRepeat),i}_convertFilterMode(r){let i=e.GPUFilterMode.Linear;return r!==t.NearestFilter&&r!==t.NearestMipmapNearestFilter&&r!==t.NearestMipmapLinearFilter||(i=e.GPUFilterMode.Nearest),i}_createTexture(e){const t=this.device,r=e.image,{width:i,height:a,depth:o}=this._getSize(e),s=this._needsMipmaps(e),u=this._getDimension(e),n=this._getMipLevelCount(e,i,a,s),m=this._getFormat(e);let h=GPUTextureUsage.SAMPLED|GPUTextureUsage.COPY_DST;!0===s&&(h|=GPUTextureUsage.RENDER_ATTACHMENT);const l={size:{width:i,height:a,depthOrArrayLayers:o},mipLevelCount:n,sampleCount:1,dimension:u,format:m,usage:h},d=t.createTexture(l);return e.isDataTexture||e.isDataTexture2DArray||e.isDataTexture3D?(this._copyBufferToTexture(r,m,d),!0===s&&this._generateMipmaps(d,l)):e.isCompressedTexture?this._copyCompressedBufferToTexture(e.mipmaps,m,d):e.isCubeTexture?this._copyCubeMapToTexture(r,e,d):void 0!==r&&this._getImageBitmap(r,e).then((e=>{this._copyImageBitmapToTexture(e,d),!0===s&&this._generateMipmaps(d,l)})),d}_copyBufferToTexture(e,t,r){const i=e.data,a=this._getBytesPerTexel(t),o=256*Math.ceil(e.width*a/256);this.device.queue.writeTexture({texture:r,mipLevel:0},i,{offset:0,bytesPerRow:o},{width:e.width,height:e.height,depthOrArrayLayers:void 0!==e.depth?e.depth:1})}_copyCubeMapToTexture(e,t,r){for(let i=0;i<e.length;i++){const a=e[i];this._getImageBitmap(a,t).then((e=>{this._copyImageBitmapToTexture(e,r,{x:0,y:0,z:i})}))}}_copyImageBitmapToTexture(e,t,r={x:0,y:0,z:0}){this.device.queue.copyImageBitmapToTexture({imageBitmap:e},{texture:t,mipLevel:0,origin:r},{width:e.width,height:e.height,depthOrArrayLayers:1})}_copyCompressedBufferToTexture(e,t,r){const i=this._getBlockData(t);for(let t=0;t<e.length;t++){const a=e[t],o=a.width,s=a.height,u=Math.ceil(o/i.width)*i.byteLength;this.device.queue.writeTexture({texture:r,mipLevel:t},a.data,{offset:0,bytesPerRow:u},{width:Math.ceil(o/i.width)*i.width,height:Math.ceil(s/i.width)*i.width,depthOrArrayLayers:1})}}_generateMipmaps(e,t){null===this.utils&&(this.utils=new r(this.device,this.glslang)),this.utils.generateMipmaps(e,t)}_getBlockData(t){return t===e.GPUTextureFormat.BC1RGBAUnorm||t===e.GPUTextureFormat.BC1RGBAUnormSRGB?{byteLength:8,width:4,height:4}:t===e.GPUTextureFormat.BC2RGBAUnorm||t===e.GPUTextureFormat.BC2RGBAUnormSRGB||t===e.GPUTextureFormat.BC3RGBAUnorm||t===e.GPUTextureFormat.BC3RGBAUnormSRGB?{byteLength:16,width:4,height:4}:t===e.GPUTextureFormat.BC4RUnorm||t===e.GPUTextureFormat.BC4RSNorm?{byteLength:8,width:4,height:4}:t===e.GPUTextureFormat.BC5RGUnorm||t===e.GPUTextureFormat.BC5RGSnorm||t===e.GPUTextureFormat.BC6HRGBUFloat||t===e.GPUTextureFormat.BC6HRGBFloat||t===e.GPUTextureFormat.BC7RGBAUnorm||t===e.GPUTextureFormat.BC7RGBAUnormSRGB?{byteLength:16,width:4,height:4}:void 0}_getBytesPerTexel(t){return t===e.GPUTextureFormat.R8Unorm?1:t===e.GPUTextureFormat.R16Float||t===e.GPUTextureFormat.RG8Unorm?2:t===e.GPUTextureFormat.RG16Float||t===e.GPUTextureFormat.R32Float||t===e.GPUTextureFormat.RGBA8Unorm||t===e.GPUTextureFormat.RGBA8UnormSRGB?4:t===e.GPUTextureFormat.RG32Float||t===e.GPUTextureFormat.RGBA16Float?8:t===e.GPUTextureFormat.RGBA32Float?16:void 0}_getDimension(t){let r;return r=t.isDataTexture3D?e.GPUTextureDimension.ThreeD:e.GPUTextureDimension.TwoD,r}_getFormat(r){const i=r.format,a=r.type,o=r.encoding;let s;switch(i){case t.RGBA_S3TC_DXT1_Format:s=o===t.sRGBEncoding?e.GPUTextureFormat.BC1RGBAUnormSRGB:e.GPUTextureFormat.BC1RGBAUnorm;break;case t.RGBA_S3TC_DXT3_Format:s=o===t.sRGBEncoding?e.GPUTextureFormat.BC2RGBAUnormSRGB:e.GPUTextureFormat.BC2RGBAUnorm;break;case t.RGBA_S3TC_DXT5_Format:s=o===t.sRGBEncoding?e.GPUTextureFormat.BC3RGBAUnormSRGB:e.GPUTextureFormat.BC3RGBAUnorm;break;case t.RGBAFormat:switch(a){case t.UnsignedByteType:s=o===t.sRGBEncoding?e.GPUTextureFormat.RGBA8UnormSRGB:e.GPUTextureFormat.RGBA8Unorm;break;case t.HalfFloatType:s=e.GPUTextureFormat.RGBA16Float;break;case t.FloatType:s=e.GPUTextureFormat.RGBA32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RGBAFormat.",a)}break;case t.RedFormat:switch(a){case t.UnsignedByteType:s=e.GPUTextureFormat.R8Unorm;break;case t.HalfFloatType:s=e.GPUTextureFormat.R16Float;break;case t.FloatType:s=e.GPUTextureFormat.R32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RedFormat.",a)}break;case t.RGFormat:switch(a){case t.UnsignedByteType:s=e.GPUTextureFormat.RG8Unorm;break;case t.HalfFloatType:s=e.GPUTextureFormat.RG16Float;break;case t.FloatType:s=e.GPUTextureFormat.RG32Float;break;default:console.error("WebGPURenderer: Unsupported texture type with RGFormat.",a)}break;default:console.error("WebGPURenderer: Unsupported texture format.",i)}return s}_getImageBitmap(e,t){const r=e.width,i=e.height;if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement){const a={};return a.imageOrientation=!0===t.flipY?"flipY":"none",a.premultiplyAlpha=!0===t.premultiplyAlpha?"premultiply":"default",createImageBitmap(e,0,0,r,i,a)}return Promise.resolve(e)}_getMipLevelCount(e,t,r,i){let a;return a=e.isCompressedTexture?e.mipmaps.length:!0===i?Math.floor(Math.log2(Math.max(t,r)))+1:1,a}_getSize(e){const t=e.image;let r,i,a;return e.isCubeTexture?(r=t.length>0?t[0].width:1,i=t.length>0?t[0].height:1,a=6):void 0!==t?(r=t.width,i=t.height,a=void 0!==t.depth?t.depth:1):r=i=a=1,{width:r,height:i,depth:a}}_needsMipmaps(e){return!0!==e.isCompressedTexture&&!0===e.generateMipmaps&&e.minFilter!==t.NearestFilter&&e.minFilter!==t.LinearFilter}};
