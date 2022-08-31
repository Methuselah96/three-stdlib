"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./NodeUniform.cjs.js"),t=require("./NodeAttribute.cjs.js"),r=require("./NodeVary.cjs.js"),s=require("./NodeVar.cjs.js"),o=require("./NodeCode.cjs.js"),n=require("./NodeKeywords.cjs.js"),i=require("./constants.cjs.js"),a=require("three");const h=["fragment","vertex"],d=e=>(e=Number(e))+(e%1?"":".0");exports.default=class{constructor(e,t,r){this.object=e,this.material=e.material,this.renderer=t,this.parser=r,this.nodes=[],this.updateNodes=[],this.hashNodes={},this.vertexShader=null,this.fragmentShader=null,this.flowNodes={vertex:[],fragment:[]},this.flowCode={vertex:"",fragment:""},this.uniforms={vertex:[],fragment:[],index:0},this.codes={vertex:[],fragment:[]},this.attributes=[],this.varys=[],this.vars={vertex:[],fragment:[]},this.flow={code:""},this.stack=[],this.context={keywords:new n,material:e.material},this.nodesData=new WeakMap,this.flowsData=new WeakMap,this.shaderStage=null,this.node=null}addStack(e){this.stack.push(e)}removeStack(e){if(this.stack.pop()!==e)throw new Error("NodeBuilder: Invalid node stack!")}setHashNode(e,t){this.hashNodes[t]=e}addNode(e){if(-1===this.nodes.indexOf(e)){e.getUpdateType(this)!==i.NodeUpdateType.None&&this.updateNodes.push(e),this.nodes.push(e),this.setHashNode(e,e.getHash(this))}}getMethod(e){return e}getNodeFromHash(e){return this.hashNodes[e]}addFlow(e,t){return this.flowNodes[e].push(t),t}setContext(e){this.context=e}getContext(){return this.context}getTexture(){console.warn("Abstract function.")}getTextureBias(){console.warn("Abstract function.")}getCubeTexture(){console.warn("Abstract function.")}getCubeTextureBias(){console.warn("Abstract function.")}getConst(e,t){if("float"===e)return d(t);if("int"===e)return`${Math.round(t)}`;if("uint"===e)return t>=0?`${Math.round(t)}u`:"0u";if("bool"===e)return t?"true":"false";if("color"===e)return`${this.getType("vec3")}( ${d(t.r)}, ${d(t.g)}, ${d(t.b)} )`;const r=this.getTypeLength(e),s=this.getComponentType(e),o=e=>this.getConst(s,e);if(2===r)return`${this.getType(e)}( ${o(t.x)}, ${o(t.y)} )`;if(3===r)return`${this.getType(e)}( ${o(t.x)}, ${o(t.y)}, ${o(t.z)} )`;if(4===r)return`${this.getType(e)}( ${o(t.x)}, ${o(t.y)}, ${o(t.z)}, ${o(t.w)} )`;throw new Error(`NodeBuilder: Type '${e}' not found in generate constant attempt.`)}getType(e){return e}generateMethod(e){return e}getAttribute(e,r){const s=this.attributes;for(const t of s)if(t.name===e)return t;const o=new t(e,r);return s.push(o),o}getPropertyName(e){return e.name}isVector(e){return/vec\d/.test(e)}isMatrix(e){return/mat\d/.test(e)}isReference(e){return"void"===e||"property"===e||"sampler"===e}isShaderStage(e){return this.shaderStage===e}getTextureEncodingFromMap(e){let t;return t=e&&e.isTexture?e.encoding:e&&e.isWebGLRenderTarget?e.texture.encoding:a.LinearEncoding,t}getComponentType(e){e=this.getVectorType(e);const t=/(b|i|u|)(vec|mat)([2-4])/.exec(e);return null===t?null:"b"===t[1]?"bool":"i"===t[1]?"int":"u"===t[1]?"uint":"float"}getVectorType(e){return"color"===e?"vec3":"texture"===e?"vec4":e}getTypeFromLength(e){return 1===e?"float":2===e?"vec2":3===e?"vec3":4===e?"vec4":0}getTypeLength(e){const t=this.getVectorType(e),r=/vec([2-4])/.exec(t);return null!==r?Number(r[1]):"float"===t||"bool"===t||"int"===t||"uint"===t?1:0}getVectorFromMatrix(e){return e.replace("mat","vec")}getDataFromNode(e,t=this.shaderStage){let r=this.nodesData.get(e);return void 0===r&&(r={vertex:{},fragment:{}},this.nodesData.set(e,r)),null!==t?r[t]:r}getUniformFromNode(t,r,s){const o=this.getDataFromNode(t,r);let n=o.uniform;if(void 0===n){const i=this.uniforms.index++;n=new e("nodeUniform"+i,s,t),this.uniforms[r].push(n),o.uniform=n}return n}getVarFromNode(e,t,r=this.shaderStage){const o=this.getDataFromNode(e,r);let n=o.variable;if(void 0===n){const e=this.vars[r],i=e.length;n=new s("nodeVar"+i,t),e.push(n),o.variable=n}return n}getVaryFromNode(e,t){const s=this.getDataFromNode(e,null);let o=s.vary;if(void 0===o){const e=this.varys,n=e.length;o=new r("nodeVary"+n,t),e.push(o),s.vary=o}return o}getCodeFromNode(e,t,r=this.shaderStage){const s=this.getDataFromNode(e);let n=s.code;if(void 0===n){const e=this.codes[r],i=e.length;n=new o("nodeCode"+i,t),e.push(n),s.code=n}return n}addFlowCode(e){this.flow.code+=e}getFlowData(e,t){return this.flowsData.get(t)}flowNode(e){this.node=e;const t=e.getNodeType(this),r=this.flowChildNode(e,t);return this.flowsData.set(e,r),this.node=null,r}flowChildNode(e,t=null){const r=this.flow,s={code:""};return this.flow=s,s.result=e.build(this,t),this.flow=r,s}flowNodeFromShaderStage(e,t,r=null,s=null){const o=this.shaderStage;this.setShaderStage(e);const n=this.flowChildNode(t,r);return null!==s&&(n.code+=`${s} = ${n.result};\n\t`),this.flowCode[e]=this.flowCode[e]+n.code,this.setShaderStage(o),n}getAttributes(){console.warn("Abstract function.")}getVarys(){console.warn("Abstract function.")}getVars(e){let t="";const r=this.vars[e];for(let e=0;e<r.length;e++){const s=r[e];t+=`${s.type} ${s.name}; `}return t}getUniforms(){console.warn("Abstract function.")}getCodes(e){const t=this.codes[e];let r="";for(const e of t)r+=e.code+"\n";return r}getHash(){return this.vertexShader+this.fragmentShader}getShaderStage(){return this.shaderStage}setShaderStage(e){this.shaderStage=e}buildCode(){console.warn("Abstract function.")}build(){for(const e of h){this.setShaderStage(e);const t=this.flowNodes[e];for(const e of t)e.analyze(this)}this.context.vertex&&this.context.vertex.isNode&&this.flowNodeFromShaderStage("vertex",this.context.vertex);for(const e of h){this.setShaderStage(e);const t=this.flowNodes[e];for(const r of t)this.flowNode(r,e)}return this.setShaderStage(null),this.buildCode(),this}format(e,t,r){if((t=this.getVectorType(t))===(r=this.getVectorType(r))||null===r||this.isReference(r))return e;const s=this.getTypeLength(t),o=this.getTypeLength(r);if(0===s){const s=this.getVectorFromMatrix(t);return this.format(`( ${e} * ${this.getType(s)}( 1.0 ) )`,s,r)}return 0===o?e:s===o?`${this.getType(r)}( ${e} )`:s>o?this.format(`${e}.${"xyz".slice(0,o)}`,this.getTypeFromLength(o),r):4===o?`${this.getType(r)}( ${this.format(e,t,"vec3")}, 1.0 )`:2===s?`${this.getType(r)}( ${this.format(e,t,"vec2")}, 0.0 )`:`${this.getType(r)}( ${e} )`}getSignature(){return`// Three.js r${a.REVISION} - NodeMaterial System\n`}},exports.shaderStages=h,exports.vector=["x","y","z","w"];
