"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("three"),e=function(){var e,n,i,r,s=new t.Vector3;function o(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new l,this.unassigned=new l,this.vertices=[]}function a(){this.normal=new t.Vector3,this.midpoint=new t.Vector3,this.area=0,this.constant=0,this.outside=null,this.mark=0,this.edge=null}function h(t,e){this.vertex=t,this.prev=null,this.next=null,this.twin=null,this.face=e}function u(t){this.point=t,this.prev=null,this.next=null,this.face=null}function l(){this.head=null,this.tail=null}return Object.assign(o.prototype,{setFromPoints:function(t){!0!==Array.isArray(t)&&console.error("THREE.ConvexHull: Points parameter is not an array."),t.length<4&&console.error("THREE.ConvexHull: The algorithm needs at least four points."),this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.vertices.push(new u(t[e]));return this.compute(),this},setFromObject:function(e){var n=[];return e.updateMatrixWorld(!0),e.traverse((function(e){var i,r,s,o=e.geometry;if(void 0!==o){if(o.isGeometry)return void console.error("THREE.ConvexHull no longer supports Geometry. Use THREE.BufferGeometry instead.");if(o.isBufferGeometry){var a=o.attributes.position;if(void 0!==a)for(i=0,r=a.count;i<r;i++)(s=new t.Vector3).fromBufferAttribute(a,i).applyMatrix4(e.matrixWorld),n.push(s)}}})),this.setFromPoints(n)},containsPoint:function(t){var e=this.faces;for(let n=0,i=e.length;n<i;n++){if(e[n].distanceToPoint(t)>this.tolerance)return!1}return!0},intersectRay:function(t,e){var n=this.faces,i=-1/0,r=1/0;for(let e=0,u=n.length;e<u;e++){var s=n[e],o=s.distanceToPoint(t.origin),a=s.normal.dot(t.direction);if(o>0&&a>=0)return null;var h=0!==a?-o/a:0;if(!(h<=0)&&(a>0?r=Math.min(h,r):i=Math.max(h,i),i>r))return null}return i!==-1/0?t.at(i,e):t.at(r,e),e},intersectsRay:function(t){return null!==this.intersectRay(t,s)},makeEmpty:function(){return this.faces=[],this.vertices=[],this},addVertexToFace:function(t,e){return t.face=e,null===e.outside?this.assigned.append(t):this.assigned.insertBefore(e.outside,t),e.outside=t,this},removeVertexFromFace:function(t,e){return t===e.outside&&(null!==t.next&&t.next.face===e?e.outside=t.next:e.outside=null),this.assigned.remove(t),this},removeAllVerticesFromFace:function(t){if(null!==t.outside){for(var e=t.outside,n=t.outside;null!==n.next&&n.next.face===t;)n=n.next;return this.assigned.removeSubList(e,n),e.prev=n.next=null,t.outside=null,e}},deleteFaceVertices:function(t,e){var n=this.removeAllVerticesFromFace(t);if(void 0!==n)if(void 0===e)this.unassigned.appendChain(n);else{var i=n;do{var r=i.next;e.distanceToPoint(i.point)>this.tolerance?this.addVertexToFace(i,e):this.unassigned.append(i),i=r}while(null!==i)}return this},resolveUnassignedPoints:function(t){if(!1===this.unassigned.isEmpty()){var e=this.unassigned.first();do{var n=e.next,i=this.tolerance,r=null;for(let n=0;n<t.length;n++){var s=t[n];if(0===s.mark){var o=s.distanceToPoint(e.point);if(o>i&&(i=o,r=s),i>1e3*this.tolerance)break}}null!==r&&this.addVertexToFace(e,r),e=n}while(null!==e)}return this},computeExtremes:function(){var e,n,i,r=new t.Vector3,s=new t.Vector3,o=[],a=[];for(e=0;e<3;e++)o[e]=a[e]=this.vertices[0];for(r.copy(this.vertices[0].point),s.copy(this.vertices[0].point),e=0,n=this.vertices.length;e<n;e++){var h=this.vertices[e],u=h.point;for(i=0;i<3;i++)u.getComponent(i)<r.getComponent(i)&&(r.setComponent(i,u.getComponent(i)),o[i]=h);for(i=0;i<3;i++)u.getComponent(i)>s.getComponent(i)&&(s.setComponent(i,u.getComponent(i)),a[i]=h)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(r.x),Math.abs(s.x))+Math.max(Math.abs(r.y),Math.abs(s.y))+Math.max(Math.abs(r.z),Math.abs(s.z))),{min:o,max:a}},computeInitialHull:function(){void 0===e&&(e=new t.Line3,n=new t.Plane,i=new t.Vector3);var r,s,o,h,u,l,c,d,p,f=this.vertices,v=this.computeExtremes(),g=v.min,m=v.max,x=0,w=0;for(l=0;l<3;l++)(p=m[l].point.getComponent(l)-g[l].point.getComponent(l))>x&&(x=p,w=l);for(s=g[w],o=m[w],x=0,e.set(s.point,o.point),l=0,c=this.vertices.length;l<c;l++)(r=f[l])!==s&&r!==o&&(e.closestPointToPoint(r.point,!0,i),(p=i.distanceToSquared(r.point))>x&&(x=p,h=r));for(x=-1,n.setFromCoplanarPoints(s.point,o.point,h.point),l=0,c=this.vertices.length;l<c;l++)(r=f[l])!==s&&r!==o&&r!==h&&(p=Math.abs(n.distanceToPoint(r.point)))>x&&(x=p,u=r);var T=[];if(n.distanceToPoint(u.point)<0)for(T.push(a.create(s,o,h),a.create(u,o,s),a.create(u,h,o),a.create(u,s,h)),l=0;l<3;l++)d=(l+1)%3,T[l+1].getEdge(2).setTwin(T[0].getEdge(d)),T[l+1].getEdge(1).setTwin(T[d+1].getEdge(0));else for(T.push(a.create(s,h,o),a.create(u,s,o),a.create(u,o,h),a.create(u,h,s)),l=0;l<3;l++)d=(l+1)%3,T[l+1].getEdge(2).setTwin(T[0].getEdge((3-l)%3)),T[l+1].getEdge(0).setTwin(T[d+1].getEdge(1));for(l=0;l<4;l++)this.faces.push(T[l]);for(l=0,c=f.length;l<c;l++)if((r=f[l])!==s&&r!==o&&r!==h&&r!==u){x=this.tolerance;var F=null;for(d=0;d<4;d++)(p=this.faces[d].distanceToPoint(r.point))>x&&(x=p,F=this.faces[d]);null!==F&&this.addVertexToFace(r,F)}return this},reindexFaces:function(){var t=[];for(let n=0;n<this.faces.length;n++){var e=this.faces[n];0===e.mark&&t.push(e)}return this.faces=t,this},nextVertexToAdd:function(){if(!1===this.assigned.isEmpty()){var t,e=0,n=this.assigned.first().face,i=n.outside;do{var r=n.distanceToPoint(i.point);r>e&&(e=r,t=i),i=i.next}while(null!==i&&i.face===n);return t}},computeHorizon:function(t,e,n,i){var r;this.deleteFaceVertices(n),n.mark=1,r=null===e?e=n.getEdge(0):e.next;do{var s=r.twin,o=s.face;0===o.mark&&(o.distanceToPoint(t)>this.tolerance?this.computeHorizon(t,s,o,i):i.push(r)),r=r.next}while(r!==e);return this},addAdjoiningFace:function(t,e){var n=a.create(t,e.tail(),e.head());return this.faces.push(n),n.getEdge(-1).setTwin(e.twin),n.getEdge(0)},addNewFaces:function(t,e){this.newFaces=[];var n=null,i=null;for(let o=0;o<e.length;o++){var r=e[o],s=this.addAdjoiningFace(t,r);null===n?n=s:s.next.setTwin(i),this.newFaces.push(s.face),i=s}return n.next.setTwin(i),this},addVertexToHull:function(t){var e=[];return this.unassigned.clear(),this.removeVertexFromFace(t,t.face),this.computeHorizon(t.point,null,t.face,e),this.addNewFaces(t,e),this.resolveUnassignedPoints(this.newFaces),this},cleanup:function(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this},compute:function(){var t;for(this.computeInitialHull();void 0!==(t=this.nextVertexToAdd());)this.addVertexToHull(t);return this.reindexFaces(),this.cleanup(),this}}),Object.assign(a,{create:function(t,e,n){var i=new a,r=new h(t,i),s=new h(e,i),o=new h(n,i);return r.next=o.prev=s,s.next=r.prev=o,o.next=s.prev=r,i.edge=r,i.compute()}}),Object.assign(a.prototype,{getEdge:function(t){for(var e=this.edge;t>0;)e=e.next,t--;for(;t<0;)e=e.prev,t++;return e},compute:function(){void 0===r&&(r=new t.Triangle);var e=this.edge.tail(),n=this.edge.head(),i=this.edge.next.head();return r.set(e.point,n.point,i.point),r.getNormal(this.normal),r.getMidpoint(this.midpoint),this.area=r.getArea(),this.constant=this.normal.dot(this.midpoint),this},distanceToPoint:function(t){return this.normal.dot(t)-this.constant}}),Object.assign(h.prototype,{head:function(){return this.vertex},tail:function(){return this.prev?this.prev.vertex:null},length:function(){var t=this.head(),e=this.tail();return null!==e?e.point.distanceTo(t.point):-1},lengthSquared:function(){var t=this.head(),e=this.tail();return null!==e?e.point.distanceToSquared(t.point):-1},setTwin:function(t){return this.twin=t,t.twin=this,this}}),Object.assign(l.prototype,{first:function(){return this.head},last:function(){return this.tail},clear:function(){return this.head=this.tail=null,this},insertBefore:function(t,e){return e.prev=t.prev,e.next=t,null===e.prev?this.head=e:e.prev.next=e,t.prev=e,this},insertAfter:function(t,e){return e.prev=t,e.next=t.next,null===e.next?this.tail=e:e.next.prev=e,t.next=e,this},append:function(t){return null===this.head?this.head=t:this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t,this},appendChain:function(t){for(null===this.head?this.head=t:this.tail.next=t,t.prev=this.tail;null!==t.next;)t=t.next;return this.tail=t,this},remove:function(t){return null===t.prev?this.head=t.next:t.prev.next=t.next,null===t.next?this.tail=t.prev:t.next.prev=t.prev,this},removeSubList:function(t,e){return null===t.prev?this.head=e.next:t.prev.next=e.next,null===e.next?this.tail=t.prev:e.next.prev=t.prev,this},isEmpty:function(){return null===this.head}}),o}();exports.ConvexHull=e;
