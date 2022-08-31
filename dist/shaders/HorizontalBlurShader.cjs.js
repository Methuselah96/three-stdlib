"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "};exports.HorizontalBlurShader=e;
