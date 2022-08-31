import type { IUniform, Texture } from 'three';
import type { IShader } from './types';
export declare type HorizontalBlurShaderUniforms = {
    tDiffuse: IUniform<Texture | null>;
    h: IUniform<number>;
};
export interface IHorizontalBlurShader extends IShader<HorizontalBlurShaderUniforms> {
}
export declare const HorizontalBlurShader: IHorizontalBlurShader;
