"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three");class a extends e.Loader{load(a,t,r,i){const n=new e.FileLoader(this.manager);n.setPath(this.path),n.setResponseType("text"),n.load(a,(e=>{try{t(this.parse(e))}catch(e){i?i(e):console.error(e),this.manager.itemError(a)}}),r,i)}parse(a){a=a.replace(/^#.*?(\n|\r)/gm,"").replace(/^\s*?(\n|\r)/gm,"").trim();let t=null,r=null;const i=new e.Vector3(0,0,0),n=new e.Vector3(1,1,1),s=a.split(/[\n\r]+/g);let p=null,l=0;for(let e=0,a=s.length;e<a;e++){const a=s[e].trim(),o=a.split(/\s/g);switch(o[0]){case"TITLE":t=a.substring(7,a.length-1);break;case"LUT_3D_SIZE":const e=o[1];r=parseFloat(e),p=new Uint8Array(r*r*r*4);break;case"DOMAIN_MIN":i.x=parseFloat(o[1]),i.y=parseFloat(o[2]),i.z=parseFloat(o[3]);break;case"DOMAIN_MAX":n.x=parseFloat(o[1]),n.y=parseFloat(o[2]),n.z=parseFloat(o[3]);break;default:const s=parseFloat(o[0]),g=parseFloat(o[1]),m=parseFloat(o[2]);if(s>1||s<0||g>1||g<0||m>1||m<0)throw new Error("LUTCubeLoader : Non normalized values not supported.");p[l+0]=255*s,p[l+1]=255*g,p[l+2]=255*m,p[l+3]=255,l+=4}}const o=new e.DataTexture;o.image.data=p,o.image.width=r,o.image.height=r*r,o.type=e.UnsignedByteType,o.magFilter=e.LinearFilter,o.minFilter=e.LinearFilter,o.wrapS=e.ClampToEdgeWrapping,o.wrapT=e.ClampToEdgeWrapping,o.generateMipmaps=!1;const g=new e.DataTexture3D;return g.image.data=p,g.image.width=r,g.image.height=r,g.image.depth=r,g.type=e.UnsignedByteType,g.magFilter=e.LinearFilter,g.minFilter=e.LinearFilter,g.wrapS=e.ClampToEdgeWrapping,g.wrapT=e.ClampToEdgeWrapping,g.wrapR=e.ClampToEdgeWrapping,g.generateMipmaps=!1,{title:t,size:r,domainMin:i,domainMax:n,texture:o,texture3D:g}}}exports.LUTCubeLoader=a;
