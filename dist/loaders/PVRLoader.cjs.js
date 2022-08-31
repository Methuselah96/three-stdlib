"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three");class r extends e.CompressedTextureLoader{constructor(e){super(e)}parse(r,a){const o=new Uint32Array(r,0,13),s={buffer:r,header:o,loadMipmaps:a};return 55727696===o[0]?function(r){const a=r.header;let o,s;const n=a[12],m=a[2],p=a[6],i=a[7],u=a[10],P=a[11];switch(m){case 0:o=2,s=e.RGB_PVRTC_2BPPV1_Format;break;case 1:o=2,s=e.RGBA_PVRTC_2BPPV1_Format;break;case 2:o=4,s=e.RGB_PVRTC_4BPPV1_Format;break;case 3:o=4,s=e.RGBA_PVRTC_4BPPV1_Format;break;default:console.error("THREE.PVRLoader: Unsupported PVR format:",m)}return r.dataPtr=52+n,r.bpp=o,r.format=s,r.width=i,r.height=p,r.numSurfaces=u,r.numMipmaps=P,r.isCubemap=6===u,t(r)}(s):559044176===o[11]?function(r){const a=r.header,o=a[0],s=a[1],n=a[2],m=a[3],p=a[4],i=a[10],u=a[12],P=24,c=255&p;let d,R;const _=i>0;25===c?(R=_?e.RGBA_PVRTC_4BPPV1_Format:e.RGB_PVRTC_4BPPV1_Format,d=4):c===P?(R=_?e.RGBA_PVRTC_2BPPV1_Format:e.RGB_PVRTC_2BPPV1_Format,d=2):console.error("THREE.PVRLoader: Unknown PVR format:",c);return r.dataPtr=o,r.bpp=d,r.format=R,r.width=n,r.height=s,r.numSurfaces=u,r.numMipmaps=m+1,r.isCubemap=6===u,t(r)}(s):void console.error("THREE.PVRLoader: Unknown PVR format.")}}function t(e){const r={mipmaps:[],width:e.width,height:e.height,format:e.format,mipmapCount:e.numMipmaps,isCubemap:e.isCubemap},t=e.buffer;let a=e.dataPtr,o=0,s=0,n=0,m=0,p=0,i=0;const u=e.bpp,P=e.numSurfaces;2===u?(n=8,m=4):(n=4,m=4),s=n*m*u/8,r.mipmaps.length=e.numMipmaps*P;let c=0;for(;c<e.numMipmaps;){const u=e.width>>c,d=e.height>>c;p=u/n,i=d/m,p<2&&(p=2),i<2&&(i=2),o=p*i*s;for(let s=0;s<P;s++){const n={data:new Uint8Array(t,a,o),width:u,height:d};r.mipmaps[s*e.numMipmaps+c]=n,a+=o}c++}return r}exports.PVRLoader=r;
