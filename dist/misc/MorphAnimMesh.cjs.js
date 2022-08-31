"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("three"),i=function(i,e){t.Mesh.call(this,i,e),this.type="MorphAnimMesh",this.mixer=new t.AnimationMixer(this),this.activeAction=null};(i.prototype=Object.create(t.Mesh.prototype)).constructor=i,i.prototype.setDirectionForward=function(){this.mixer.timeScale=1},i.prototype.setDirectionBackward=function(){this.mixer.timeScale=-1},i.prototype.playAnimation=function(i,e){this.activeAction&&(this.activeAction.stop(),this.activeAction=null);var o=t.AnimationClip.findByName(this,i);if(!o)throw new Error("THREE.MorphAnimMesh: animations["+i+"] undefined in .playAnimation()");var n=this.mixer.clipAction(o);n.timeScale=o.tracks.length*e/o.duration,this.activeAction=n.play()},i.prototype.updateAnimation=function(t){this.mixer.update(t)},i.prototype.copy=function(i){return t.Mesh.prototype.copy.call(this,i),this.mixer=new t.AnimationMixer(this),this},exports.MorphAnimMesh=i;
