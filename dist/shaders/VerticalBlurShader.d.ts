import type { IUniform, Texture } from 'three';
import type { IShader } from './types';
export declare type VerticalBlurShaderUniforms = {
    tDiffuse: IUniform<Texture | null>;
    v: IUniform<number>;
};
export interface IVerticalBlurShader extends IShader<VerticalBlurShaderUniforms> {
}
export declare const VerticalBlurShader: IVerticalBlurShader;
