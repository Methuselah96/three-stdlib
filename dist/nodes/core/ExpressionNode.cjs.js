"use strict";var e=require("./TempNode.cjs.js");require("./Node.cjs.js"),require("./constants.cjs.js"),require("./NodeUtils.cjs.js"),require("three");module.exports=class extends e{constructor(e="",s="void"){super(s),this.snipped=e}generate(e){const s=this.getNodeType(e),r=this.snipped;if("void"!==s)return`( ${r} )`;e.addFlowCode(r)}};
