"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./LineBasicNodeMaterial.cjs.js"),r=require("./MeshBasicNodeMaterial.cjs.js"),a=require("./MeshStandardNodeMaterial.cjs.js"),i=require("./PointsNodeMaterial.cjs.js"),s=require("three");require("./NodeMaterial.cjs.js"),require("../core/NodeUtils.cjs.js");const t={LineBasicNodeMaterial:e,MeshBasicNodeMaterial:r,MeshStandardNodeMaterial:a,PointsNodeMaterial:i},o=s.Material.fromType;s.Material.fromType=function(e){return void 0!==t[e]?new t[e]:o.call(this,e)},exports.LineBasicNodeMaterial=e,exports.MeshBasicNodeMaterial=r,exports.MeshStandardNodeMaterial=a,exports.PointsNodeMaterial=i;
