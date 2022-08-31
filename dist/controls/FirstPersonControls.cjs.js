"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@babel/runtime/helpers/defineProperty"),e=require("three");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var s=i(t);const o=new e.Vector3;class a extends e.EventDispatcher{constructor(t,i){super(),s.default(this,"object",void 0),s.default(this,"domElement",void 0),s.default(this,"enabled",!0),s.default(this,"movementSpeed",1),s.default(this,"lookSpeed",.005),s.default(this,"lookVertical",!0),s.default(this,"autoForward",!1),s.default(this,"activeLook",!0),s.default(this,"heightSpeed",!1),s.default(this,"heightCoef",1),s.default(this,"heightMin",0),s.default(this,"heightMax",1),s.default(this,"constrainVertical",!1),s.default(this,"verticalMin",0),s.default(this,"verticalMax",Math.PI),s.default(this,"mouseDragOn",!1),s.default(this,"autoSpeedFactor",0),s.default(this,"mouseX",0),s.default(this,"mouseY",0),s.default(this,"moveForward",!1),s.default(this,"moveBackward",!1),s.default(this,"moveLeft",!1),s.default(this,"moveRight",!1),s.default(this,"moveUp",!1),s.default(this,"moveDown",!1),s.default(this,"viewHalfX",0),s.default(this,"viewHalfY",0),s.default(this,"lat",0),s.default(this,"lon",0),s.default(this,"lookDirection",new e.Vector3),s.default(this,"spherical",new e.Spherical),s.default(this,"target",new e.Vector3),s.default(this,"connect",(t=>{t.setAttribute("tabindex","-1"),t.style.touchAction="none",t.addEventListener("contextmenu",this.contextmenu),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),this.domElement=t,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),this.handleResize()})),s.default(this,"dispose",(()=>{var t,e,i,s;null===(t=this.domElement)||void 0===t||t.removeEventListener("contextmenu",this.contextmenu),null===(e=this.domElement)||void 0===e||e.removeEventListener("mousedown",this.onMouseDown),null===(i=this.domElement)||void 0===i||i.removeEventListener("mousemove",this.onMouseMove),null===(s=this.domElement)||void 0===s||s.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)})),s.default(this,"handleResize",(()=>{this.domElement&&(this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2)})),s.default(this,"onMouseDown",(t=>{var e;if(null===(e=this.domElement)||void 0===e||e.focus(),this.activeLook)switch(t.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0}this.mouseDragOn=!0})),s.default(this,"onMouseUp",(t=>{if(this.activeLook)switch(t.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1}this.mouseDragOn=!1})),s.default(this,"onMouseMove",(t=>{this.domElement&&(this.mouseX=t.pageX-this.domElement.offsetLeft-this.viewHalfX,this.mouseY=t.pageY-this.domElement.offsetTop-this.viewHalfY)})),s.default(this,"onKeyDown",(t=>{switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0}})),s.default(this,"onKeyUp",(t=>{switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1}})),s.default(this,"lookAt",((t,i,s)=>(t instanceof e.Vector3?this.target.copy(t):i&&s&&this.target.set(t,i,s),this.object.lookAt(this.target),this.setOrientation(),this))),s.default(this,"update",(t=>{if(!this.enabled)return;if(this.heightSpeed){const i=e.MathUtils.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=t*(i*this.heightCoef)}else this.autoSpeedFactor=0;const i=t*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(i+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(i),this.moveLeft&&this.object.translateX(-i),this.moveRight&&this.object.translateX(i),this.moveUp&&this.object.translateY(i),this.moveDown&&this.object.translateY(-i);let s=t*this.lookSpeed;this.activeLook||(s=0);let a=1;this.constrainVertical&&(a=Math.PI/(this.verticalMax-this.verticalMin)),this.lon-=this.mouseX*s,this.lookVertical&&(this.lat-=this.mouseY*s*a),this.lat=Math.max(-85,Math.min(85,this.lat));let h=e.MathUtils.degToRad(90-this.lat);const n=e.MathUtils.degToRad(this.lon);this.constrainVertical&&(h=e.MathUtils.mapLinear(h,0,Math.PI,this.verticalMin,this.verticalMax));const r=this.object.position;o.setFromSphericalCoords(1,h,n).add(r),this.object.lookAt(o)})),s.default(this,"contextmenu",(t=>t.preventDefault())),s.default(this,"setOrientation",(()=>{this.lookDirection.set(0,0,-1).applyQuaternion(this.object.quaternion),this.spherical.setFromVector3(this.lookDirection),this.lat=90-e.MathUtils.radToDeg(this.spherical.phi),this.lon=e.MathUtils.radToDeg(this.spherical.theta)})),this.object=t,this.domElement=i,this.setOrientation(),i&&this.connect(i)}}exports.FirstPersonControls=a;
