"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("three");const e=new t.Box3,r=new t.Vector3;class i extends t.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new t.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new t.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(t){const e=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==e&&(e.applyMatrix4(t),r.applyMatrix4(t),e.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));const i=new t.InstancedInterleavedBuffer(r,6,1);return this.setAttribute("instanceStart",new t.InterleavedBufferAttribute(i,3,0)),this.setAttribute("instanceEnd",new t.InterleavedBufferAttribute(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));const i=new t.InstancedInterleavedBuffer(r,6,1);return this.setAttribute("instanceColorStart",new t.InterleavedBufferAttribute(i,3,0)),this.setAttribute("instanceColorEnd",new t.InterleavedBufferAttribute(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new t.WireframeGeometry(e.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new t.Box3);const r=this.attributes.instanceStart,i=this.attributes.instanceEnd;void 0!==r&&void 0!==i&&(this.boundingBox.setFromBufferAttribute(r),e.setFromBufferAttribute(i),this.boundingBox.union(e))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new t.Sphere),null===this.boundingBox&&this.computeBoundingBox();const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(void 0!==e&&void 0!==i){const t=this.boundingSphere.center;this.boundingBox.getCenter(t);let n=0;for(let s=0,o=e.count;s<o;s++)r.fromBufferAttribute(e,s),n=Math.max(n,t.distanceToSquared(r)),r.fromBufferAttribute(i,s),n=Math.max(n,t.distanceToSquared(r));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}exports.LineSegmentsGeometry=i;
