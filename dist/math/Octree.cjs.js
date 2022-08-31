"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three"),t=require("./Capsule.cjs.js"),n=function(){var n=new e.Vector3,r=new e.Vector3,i=new e.Plane,s=new e.Line3,a=new e.Line3,o=new e.Sphere,l=new t.Capsule;function h(e){this.triangles=[],this.box=e,this.subTrees=[]}return Object.assign(h.prototype,{addTriangle:function(t){return this.bounds||(this.bounds=new e.Box3),this.bounds.min.x=Math.min(this.bounds.min.x,t.a.x,t.b.x,t.c.x),this.bounds.min.y=Math.min(this.bounds.min.y,t.a.y,t.b.y,t.c.y),this.bounds.min.z=Math.min(this.bounds.min.z,t.a.z,t.b.z,t.c.z),this.bounds.max.x=Math.max(this.bounds.max.x,t.a.x,t.b.x,t.c.x),this.bounds.max.y=Math.max(this.bounds.max.y,t.a.y,t.b.y,t.c.y),this.bounds.max.z=Math.max(this.bounds.max.z,t.a.z,t.b.z,t.c.z),this.triangles.push(t),this},calcBox:function(){return this.box=this.bounds.clone(),this.box.min.x-=.01,this.box.min.y-=.01,this.box.min.z-=.01,this},split:function(t){if(this.box){var i,s,a,o=[],l=r.copy(this.box.max).sub(this.box.min).multiplyScalar(.5);for(let t=0;t<2;t++)for(let r=0;r<2;r++)for(let a=0;a<2;a++)i=new e.Box3,s=n.set(t,r,a),i.min.copy(this.box.min).add(s.multiply(l)),i.max.copy(i.min).add(l),o.push(new h(i));for(;a=this.triangles.pop();)for(let e=0;e<o.length;e++)o[e].box.intersectsTriangle(a)&&o[e].triangles.push(a);for(let e=0;e<o.length;e++){var u=o[e].triangles.length;u>8&&t<16&&o[e].split(t+1),0!=u&&this.subTrees.push(o[e])}return this}},build:function(){return this.calcBox(),this.split(0),this},getRayTriangles:function(e,t){for(let r=0;r<this.subTrees.length;r++){var n=this.subTrees[r];if(e.intersectsBox(n.box))if(n.triangles.length>0)for(let e=0;e<n.triangles.length;e++)-1===t.indexOf(n.triangles[e])&&t.push(n.triangles[e]);else n.getRayTriangles(e,t)}return t},triangleCapsuleIntersect:function(e,t){var r,o,l,h;t.getPlane(i);var u=i.distanceToPoint(e.start)-e.radius,c=i.distanceToPoint(e.end)-e.radius;if(u>0&&c>0||u<-e.radius&&c<-e.radius)return!1;var g=Math.abs(u/(Math.abs(u)+Math.abs(c))),d=n.copy(e.start).lerp(e.end,g);if(t.containsPoint(d))return{normal:i.normal.clone(),point:d.clone(),depth:Math.abs(Math.min(u,c))};var p=e.radius*e.radius;l=s.set(e.start,e.end);var b=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let t=0;t<b.length;t++)if(h=a.set(b[t][0],b[t][1]),[r,o]=e.lineLineMinimumPoints(l,h),r.distanceToSquared(o)<p)return{normal:r.clone().sub(o).normalize(),point:o.clone(),depth:e.radius-r.distanceTo(o)};return!1},triangleSphereIntersect:function(e,t){if(t.getPlane(i),!e.intersectsPlane(i))return!1;var a=Math.abs(i.distanceToSphere(e)),o=e.radius*e.radius-a*a,l=i.projectPoint(e.center,n);if(t.containsPoint(e.center))return{normal:i.normal.clone(),point:l.clone(),depth:Math.abs(i.distanceToSphere(e))};var h=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let t=0;t<h.length;t++){s.set(h[t][0],h[t][1]),s.closestPointToPoint(l,!0,r);var u=r.distanceToSquared(e.center);if(u<o)return{normal:e.center.clone().sub(r).normalize(),point:r.clone(),depth:e.radius-Math.sqrt(u)}}return!1},getSphereTriangles:function(e,t){for(let r=0;r<this.subTrees.length;r++){var n=this.subTrees[r];if(e.intersectsBox(n.box))if(n.triangles.length>0)for(let e=0;e<n.triangles.length;e++)-1===t.indexOf(n.triangles[e])&&t.push(n.triangles[e]);else n.getSphereTriangles(e,t)}},getCapsuleTriangles:function(e,t){for(let r=0;r<this.subTrees.length;r++){var n=this.subTrees[r];if(e.intersectsBox(n.box))if(n.triangles.length>0)for(let e=0;e<n.triangles.length;e++)-1===t.indexOf(n.triangles[e])&&t.push(n.triangles[e]);else n.getCapsuleTriangles(e,t)}},sphereIntersect(e){o.copy(e);var t,n=[],r=!1;this.getSphereTriangles(e,n);for(let e=0;e<n.length;e++)(t=this.triangleSphereIntersect(o,n[e]))&&(r=!0,o.center.add(t.normal.multiplyScalar(t.depth)));if(r){var i=o.center.clone().sub(e.center),s=i.length();return{normal:i.normalize(),depth:s}}return!1},capsuleIntersect:function(t){l.copy(t);var r,i=[],s=!1;this.getCapsuleTriangles(l,i);for(let e=0;e<i.length;e++)(r=this.triangleCapsuleIntersect(l,i[e]))&&(s=!0,l.translate(r.normal.multiplyScalar(r.depth)));if(s){var a=l.getCenter(new e.Vector3).sub(t.getCenter(n)),o=a.length();return{normal:a.normalize(),depth:o}}return!1},rayIntersect:function(e){if(0!==e.direction.length()){var t,r,i,s=[],a=1e100;this.getRayTriangles(e,s);for(let l=0;l<s.length;l++)if(i=e.intersectTriangle(s[l].a,s[l].b,s[l].c,!0,n)){var o=i.sub(e.origin).length();a>o&&(r=i.clone().add(e.origin),a=o,t=s[l])}return a<1e100&&{distance:a,triangle:t,position:r}}},fromGraphNode:function(t){return t.traverse((t=>{if("Mesh"===t.type){t.updateMatrix(),t.updateWorldMatrix();var n,r=!1;t.geometry.index?(r=!0,n=t.geometry.clone().toNonIndexed()):n=t.geometry;var i=n.attributes.position.array,s=t.matrixWorld;for(let t=0;t<i.length;t+=9){var a=new e.Vector3(i[t],i[t+1],i[t+2]),o=new e.Vector3(i[t+3],i[t+4],i[t+5]),l=new e.Vector3(i[t+6],i[t+7],i[t+8]);a.applyMatrix4(s),o.applyMatrix4(s),l.applyMatrix4(s),this.addTriangle(new e.Triangle(a,o,l))}r&&n.dispose()}})),this.build(),this}}),h}();exports.Octree=n;
