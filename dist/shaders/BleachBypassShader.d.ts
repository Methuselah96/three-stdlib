import type { IUniform, Texture } from 'three';
import type { IShader } from './types';
export declare type BleachBypassShaderUniforms = {
    opacity: IUniform<number>;
    tDiffuse: IUniform<Texture | null>;
};
export interface IBleachBypassShader extends IShader<BleachBypassShaderUniforms> {
}
export declare const BleachBypassShader: IBleachBypassShader;
