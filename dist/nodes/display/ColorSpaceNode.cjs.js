"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/defineProperty"),r=require("../core/Node.cjs.js"),s=require("../ShaderNode.cjs.js"),o=require("three");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../core/constants.cjs.js"),require("../core/NodeUtils.cjs.js"),require("../core/PropertyNode.cjs.js"),require("../core/VarNode.cjs.js"),require("../core/AttributeNode.cjs.js"),require("../core/VaryNode.cjs.js"),require("../core/ConstNode.cjs.js"),require("../core/InputNode.cjs.js"),require("../core/UniformNode.cjs.js"),require("../accessors/BufferNode.cjs.js"),require("../accessors/PositionNode.cjs.js"),require("../accessors/ModelNode.cjs.js"),require("../accessors/Object3DNode.cjs.js"),require("../math/MathNode.cjs.js"),require("../core/TempNode.cjs.js"),require("../core/ExpressionNode.cjs.js"),require("../utils/JoinNode.cjs.js"),require("../utils/SplitNode.cjs.js"),require("../core/NodeBuilder.cjs.js"),require("../core/NodeUniform.cjs.js"),require("../core/NodeAttribute.cjs.js"),require("../core/NodeVary.cjs.js"),require("../core/NodeVar.cjs.js"),require("../core/NodeCode.cjs.js"),require("../core/NodeKeywords.cjs.js"),require("../math/OperatorNode.cjs.js"),require("../accessors/NormalNode.cjs.js"),require("../accessors/CameraNode.cjs.js"),require("../accessors/TextureNode.cjs.js"),require("../accessors/UVNode.cjs.js"),require("../math/CondNode.cjs.js"),require("../core/ContextNode.cjs.js"),require("../utils/ArrayElementNode.cjs.js"),require("../utils/ConvertNode.cjs.js");var i=c(e);const j=new s.ShaderNode((e=>e.value)),u=new s.ShaderNode((e=>{const{value:r}=e,o=r.rgb,c=s.sub(s.mul(s.pow(r.rgb,s.vec3(.41666)),1.055),s.vec3(.055)),i=s.mul(o,12.92),j=s.vec3(s.lessThanEqual(o,s.vec3(.0031308))),u=s.mix(c,i,j);return s.join(u.r,u.g,u.b,r.a)})),t={LinearToLinear:j,LinearTosRGB:u};class d extends r{constructor(e,r){super("vec4"),this.method=e,this.node=r}fromEncoding(e){let r=null;return e===o.LinearEncoding?r="Linear":e===o.sRGBEncoding&&(r="sRGB"),this.method="LinearTo"+r,this}generate(e){const r=this.getNodeType(e),s=this.method,o=this.node;if(s!==d.LINEAR_TO_LINEAR){return(0,t[s])({value:o}).build(e,r)}return o.build(e,r)}}i.default(d,"LINEAR_TO_LINEAR","LinearToLinear"),i.default(d,"LINEAR_TO_SRGB","LinearTosRGB"),exports.LinearToLinear=j,exports.LinearTosRGB=u,exports.default=d;
