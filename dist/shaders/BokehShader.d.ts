import type { IUniform, Texture } from 'three';
import type { IShader } from './types';
export declare type BokehShaderDefines = {
    DEPTH_PACKING: number;
    PERSPECTIVE_CAMERA: number;
};
export declare type BokehShaderUniforms = {
    aperture: IUniform<number>;
    aspect: IUniform<number>;
    farClip: IUniform<number>;
    focus: IUniform<number>;
    maxblur: IUniform<number>;
    nearClip: IUniform<number>;
    tColor: IUniform<Texture | null>;
    tDepth: IUniform<Texture | null>;
};
export interface IBokehShader extends IShader<BokehShaderUniforms, BokehShaderDefines> {
}
export declare const BokehShader: IBokehShader;
