import type { IUniform, Texture } from 'three';
import type { IShader } from './types';
export declare type ACESFilmicToneMappingShaderUniforms = {
    exposure: IUniform<number>;
    tDiffuse: IUniform<Texture | null>;
};
export interface IACESFilmicToneMappingShader extends IShader<ACESFilmicToneMappingShaderUniforms> {
}
export declare const ACESFilmicToneMappingShader: IACESFilmicToneMappingShader;
