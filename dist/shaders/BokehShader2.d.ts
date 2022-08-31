import { IUniform, Texture, Vector2 } from 'three';
export interface BokehShaderUniforms {
    textureWidth: IUniform<number>;
    textureHeight: IUniform<number>;
    focalDepth: IUniform<number>;
    focalLength: IUniform<number>;
    fstop: IUniform<number>;
    tColor: IUniform<Texture | null>;
    tDepth: IUniform<Texture | null>;
    maxblur: IUniform<number>;
    showFocus: IUniform<number>;
    manualdof: IUniform<number>;
    vignetting: IUniform<number>;
    depthblur: IUniform<number>;
    threshold: IUniform<number>;
    gain: IUniform<number>;
    bias: IUniform<number>;
    fringe: IUniform<number>;
    znear: IUniform<number>;
    zfar: IUniform<number>;
    noise: IUniform<number>;
    dithering: IUniform<number>;
    pentagon: IUniform<number>;
    shaderFocus: IUniform<number>;
    focusCoords: IUniform<Vector2>;
}
export declare const BokehShader2: {
    uniforms: BokehShaderUniforms;
    vertexShader: string;
    fragmentShader: string;
};
export declare const BokehDepthShader: {
    uniforms: {
        mNear: {
            value: number;
        };
        mFar: {
            value: number;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
