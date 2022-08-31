"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three");const i=new e.Matrix4,n=new e.Vector3;exports.XRHandPrimitiveModel=class{constructor(i,n,a,t,r){let s;this.controller=n,this.handModel=i,this.envMap=null,r&&r.primitive&&"sphere"!==r.primitive?"box"===r.primitive&&(s=new e.BoxGeometry(1,1,1)):s=new e.SphereGeometry(1,10,10);const h=new e.MeshStandardMaterial;this.handMesh=new e.InstancedMesh(s,h,30),this.handMesh.instanceMatrix.setUsage(e.DynamicDrawUsage),this.handMesh.castShadow=!0,this.handMesh.receiveShadow=!0,this.handModel.add(this.handMesh),this.joints=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]}updateMesh(){const e=this.controller.joints;let a=0;for(let t=0;t<this.joints.length;t++){const r=e[this.joints[t]];r.visible&&(n.setScalar(r.jointRadius||.008),i.compose(r.position,r.quaternion,n),this.handMesh.setMatrixAt(t,i),a++)}this.handMesh.count=a,this.handMesh.instanceMatrix.needsUpdate=!0}};
