"use strict";var e=require("./WebGPUBinding.cjs.js"),s=require("./constants.cjs.js");module.exports=class extends e{constructor(e,t){super(e),this.texture=t,this.type=s.GPUBindingType.Sampler,this.visibility=GPUShaderStage.FRAGMENT,this.samplerGPU=null,Object.defineProperty(this,"isSampler",{value:!0})}};
