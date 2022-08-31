"use strict";var e=require("@babel/runtime/helpers/defineProperty"),r=require("../core/Node.cjs.js"),s=require("./TimerNode.cjs.js"),o=require("../ShaderNode.cjs.js");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../core/constants.cjs.js"),require("../core/NodeUtils.cjs.js"),require("three"),require("../core/UniformNode.cjs.js"),require("../core/InputNode.cjs.js"),require("../core/PropertyNode.cjs.js"),require("../core/VarNode.cjs.js"),require("../core/AttributeNode.cjs.js"),require("../core/VaryNode.cjs.js"),require("../core/ConstNode.cjs.js"),require("../accessors/BufferNode.cjs.js"),require("../accessors/PositionNode.cjs.js"),require("../accessors/ModelNode.cjs.js"),require("../accessors/Object3DNode.cjs.js"),require("../math/MathNode.cjs.js"),require("../core/TempNode.cjs.js"),require("../core/ExpressionNode.cjs.js"),require("./JoinNode.cjs.js"),require("./SplitNode.cjs.js"),require("../core/NodeBuilder.cjs.js"),require("../core/NodeUniform.cjs.js"),require("../core/NodeAttribute.cjs.js"),require("../core/NodeVary.cjs.js"),require("../core/NodeVar.cjs.js"),require("../core/NodeCode.cjs.js"),require("../core/NodeKeywords.cjs.js"),require("../math/OperatorNode.cjs.js"),require("../accessors/NormalNode.cjs.js"),require("../accessors/CameraNode.cjs.js"),require("../accessors/TextureNode.cjs.js"),require("../accessors/UVNode.cjs.js"),require("../math/CondNode.cjs.js"),require("../core/ContextNode.cjs.js"),require("./ArrayElementNode.cjs.js"),require("./ConvertNode.cjs.js");var i=c(e);class j extends r{constructor(e=j.SINE,r=new s){super(),this.method=e,this.timeNode=r}getNodeType(e){return this.timeNode.getNodeType(e)}generate(e){const r=this.method,s=this.timeNode;let c=null;return r===j.SINE?c=o.add(o.mul(o.sin(o.mul(o.add(s,.75),2*Math.PI)),.5),.5):r===j.SQUARE?c=o.round(o.fract(s)):r===j.TRIANGLE?c=o.abs(o.sub(1,o.mul(o.fract(o.add(s,.5)),2))):r===j.SAWTOOTH&&(c=o.fract(s)),c.build(e)}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}i.default(j,"SINE","sine"),i.default(j,"SQUARE","square"),i.default(j,"TRIANGLE","triangle"),i.default(j,"SAWTOOTH","sawtooth"),module.exports=j;
