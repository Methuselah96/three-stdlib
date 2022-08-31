"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("three");const e=new t.Vector3;function r(t,r,s,a,i,n){const o=2*Math.PI*i/4,c=Math.max(n-2*i,0),u=Math.PI/4;e.copy(r),e[a]=0,e.normalize();const h=.5*o/(o+c),y=1-e.angleTo(t)/u;if(1===Math.sign(e[s]))return y*h;return c/(o+c)+h+h*(1-y)}class s extends t.BoxGeometry{constructor(e=1,s=1,a=1,i=2,n=.1){if(i=2*i+1,n=Math.min(e/2,s/2,a/2,n),super(1,1,1,i,i,i),1===i)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new t.Vector3,u=new t.Vector3,h=new t.Vector3(e,s,a).divideScalar(2).subScalar(n),y=this.attributes.position.array,x=this.attributes.normal.array,l=this.attributes.uv.array,b=y.length/6,z=new t.Vector3,M=.5/i;for(let t=0,i=0;t<y.length;t+=3,i+=2){c.fromArray(y,t),u.copy(c),u.x-=Math.sign(u.x)*M,u.y-=Math.sign(u.y)*M,u.z-=Math.sign(u.z)*M,u.normalize(),y[t+0]=h.x*Math.sign(c.x)+u.x*n,y[t+1]=h.y*Math.sign(c.y)+u.y*n,y[t+2]=h.z*Math.sign(c.z)+u.z*n,x[t+0]=u.x,x[t+1]=u.y,x[t+2]=u.z;switch(Math.floor(t/b)){case 0:z.set(1,0,0),l[i+0]=r(z,u,"z","y",n,a),l[i+1]=1-r(z,u,"y","z",n,s);break;case 1:z.set(-1,0,0),l[i+0]=1-r(z,u,"z","y",n,a),l[i+1]=1-r(z,u,"y","z",n,s);break;case 2:z.set(0,1,0),l[i+0]=1-r(z,u,"x","z",n,e),l[i+1]=r(z,u,"z","x",n,a);break;case 3:z.set(0,-1,0),l[i+0]=1-r(z,u,"x","z",n,e),l[i+1]=1-r(z,u,"z","x",n,a);break;case 4:z.set(0,0,1),l[i+0]=1-r(z,u,"x","y",n,e),l[i+1]=1-r(z,u,"y","x",n,s);break;case 5:z.set(0,0,-1),l[i+0]=r(z,u,"x","y",n,e),l[i+1]=1-r(z,u,"y","x",n,s)}}}}exports.RoundedBoxGeometry=s;
