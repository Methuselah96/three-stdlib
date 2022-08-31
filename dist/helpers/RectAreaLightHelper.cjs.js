"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("three");class e extends t.Line{constructor(e,i){this.light=e,this.color=i;const r=new t.BufferGeometry;r.setAttribute("position",new t.Float32BufferAttribute([1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),r.computeBoundingSphere();super(r,new t.LineBasicMaterial({fog:!1})),this.type="RectAreaLightHelper";const s=new t.BufferGeometry;s.setAttribute("position",new t.Float32BufferAttribute([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),s.computeBoundingSphere(),this.add(new t.Mesh(s,new t.MeshBasicMaterial({side:t.BackSide,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),void 0!==this.color)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const t=this.material.color,e=Math.max(t.r,t.g,t.b);e>1&&t.multiplyScalar(1/e),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.copy(this.light.matrixWorld).scale(this.scale),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}exports.RectAreaLightHelper=e;
