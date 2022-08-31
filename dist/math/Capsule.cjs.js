"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("three"),s=function(){var s=new t.Vector3,i=new t.Vector3,n=new t.Vector3;function e(s,i,n){this.start=null==s?new t.Vector3(0,0,0):s,this.end=null==i?new t.Vector3(0,1,0):i,this.radius=null==n?1:n}return Object.assign(e.prototype,{clone:function(){return new e(this.start.clone(),this.end.clone(),this.radius)},set:function(t,s,i){this.start.copy(t),this.end.copy(s),this.radius=i},copy:function(t){this.start.copy(t.start),this.end.copy(t.end),this.radius=t.radius},getCenter:function(t){return t.copy(this.end).add(this.start).multiplyScalar(.5)},translate:function(t){this.start.add(t),this.end.add(t)},checkAABBAxis:function(t,s,i,n,e,a,r,h,c){return(e-t<c||e-i<c)&&(t-a<c||i-a<c)&&(r-s<c||r-n<c)&&(s-h<c||n-h<c)},intersectsBox:function(t){return this.checkAABBAxis(this.start.x,this.start.y,this.end.x,this.end.y,t.min.x,t.max.x,t.min.y,t.max.y,this.radius)&&this.checkAABBAxis(this.start.x,this.start.z,this.end.x,this.end.z,t.min.x,t.max.x,t.min.z,t.max.z,this.radius)&&this.checkAABBAxis(this.start.y,this.start.z,this.end.y,this.end.z,t.min.y,t.max.y,t.min.z,t.max.z,this.radius)},lineLineMinimumPoints:function(t,e){var a,r,h=s.copy(t.end).sub(t.start),c=i.copy(e.end).sub(e.start),d=n.copy(e.start).sub(t.start),o=h.dot(c),u=h.dot(h),l=c.dot(c),x=c.dot(d),y=h.dot(d),m=u*l-o*o;if(Math.abs(m)<1e-10){var p=-x/l,f=(o-x)/l;Math.abs(p-.5)<Math.abs(f-.5)?(a=0,r=p):(a=1,r=f)}else r=((a=(x*o+y*l)/m)*o-x)/l;return r=Math.max(0,Math.min(1,r)),a=Math.max(0,Math.min(1,a)),[h.multiplyScalar(a).add(t.start),c.multiplyScalar(r).add(e.start)]}}),e}();exports.Capsule=s;
