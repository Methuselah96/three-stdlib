"use strict";var e=require("@babel/runtime/helpers/defineProperty"),r=require("./Object3DNode.cjs.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("three"),require("../core/Node.cjs.js"),require("../core/constants.cjs.js"),require("../core/NodeUtils.cjs.js"),require("../core/UniformNode.cjs.js"),require("../core/InputNode.cjs.js");var s=t(e);class o extends r{constructor(e=o.POSITION){super(e)}getNodeType(e){return this.scope===o.PROJECTION_MATRIX?"mat4":super.getNodeType(e)}update(e){const r=e.camera,t=this._uniformNode,s=this.scope;s===o.PROJECTION_MATRIX?t.value=r.projectionMatrix:s===o.VIEW_MATRIX?t.value=r.matrixWorldInverse:(this.object3d=r,super.update(e))}generate(e){return this.scope===o.PROJECTION_MATRIX&&(this._uniformNode.nodeType="mat4"),super.generate(e)}}s.default(o,"PROJECTION_MATRIX","projectionMatrix"),module.exports=o;
