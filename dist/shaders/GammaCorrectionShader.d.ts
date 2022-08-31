import type { IUniform, Texture } from 'three';
import type { IShader } from './types';
export declare type GammaCorrectionShaderUniforms = {
    tDiffuse: IUniform<Texture | null>;
};
export interface IGammaCorrectionShader extends IShader<GammaCorrectionShaderUniforms> {
}
export declare const GammaCorrectionShader: IGammaCorrectionShader;
