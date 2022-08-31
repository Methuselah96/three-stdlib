"use strict";var e=require("./constants.cjs.js"),t=require("./NodeUtils.cjs.js"),s=require("three");let o=0;class n{constructor(t=null){this.nodeType=t,this.updateType=e.NodeUpdateType.None,this.uuid=s.MathUtils.generateUUID(),Object.defineProperty(this,"id",{value:o++})}get type(){return this.constructor.name}getHash(){return this.uuid}getUpdateType(){return this.updateType}getNodeType(){return this.nodeType}update(){console.warn("Abstract function.")}generate(){console.warn("Abstract function.")}analyze(e){const s=this.getHash(e),o=e.getNodeFromHash(s);if(void 0!==o&&this!==o)return o.analyze(e);const n=e.getDataFromNode(this);n.dependenciesCount=void 0===n.dependenciesCount?1:n.dependenciesCount+1;const i=t.getNodesKeys(this);for(const t of i)this[t].analyze(e)}build(e,t=null){const s=this.getHash(e),o=e.getNodeFromHash(s);if(void 0!==o&&this!==o)return o.build(e,t);e.addNode(this),e.addStack(this);const n=e.getDataFromNode(this);let i=null;if(1===this.generate.length){const s=this.getNodeType(e);i=n.snippet,void 0===i&&(i=this.generate(e)||"",n.snippet=i),i=e.format(i,s,t)}else i=this.generate(e,t)||"";return e.removeStack(this),i}serialize(e){const s=t.getNodesKeys(this);if(s.length>0){const t={};for(const o of s)t[o]=this[o].toJSON(e.meta).uuid;e.inputNodes=t}}deserialize(e){if(void 0!==e.inputNodes){const t=e.meta.nodes;for(const s in e.inputNodes){const o=e.inputNodes[s];this[s]=t[o]}}}toJSON(e){const{uuid:t,type:s}=this,o=void 0===e||"string"==typeof e;o&&(e={textures:{},images:{},nodes:{}});let n=e.nodes[t];function i(e){const t=[];for(const s in e){const o=e[s];delete o.metadata,t.push(o)}return t}if(void 0===n&&(n={uuid:t,type:s,meta:e,metadata:{version:4.5,type:"Node",generator:"Node.toJSON"}},e.nodes[n.uuid]=n,this.serialize(n),delete n.meta),o){const t=i(e.textures),s=i(e.images),o=i(e.nodes);t.length>0&&(n.textures=t),s.length>0&&(n.images=s),o.length>0&&(n.nodes=o)}return n}}n.prototype.isNode=!0,module.exports=n;
