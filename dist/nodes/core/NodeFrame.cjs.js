"use strict";var e=require("./constants.cjs.js");module.exports=class{constructor(){this.time=0,this.deltaTime=0,this.frameId=0,this.startTime=null,this.updateMap=new WeakMap,this.renderer=null,this.material=null,this.camera=null,this.object=null}updateNode(t){t.updateType===e.NodeUpdateType.Frame?this.updateMap.get(t)!==this.frameId&&(this.updateMap.set(t,this.frameId),t.update(this)):t.updateType===e.NodeUpdateType.Object&&t.update(this)}update(){this.frameId++,void 0===this.lastTime&&(this.lastTime=performance.now()),this.deltaTime=(performance.now()-this.lastTime)/1e3,this.lastTime=performance.now(),this.time+=this.deltaTime}};
