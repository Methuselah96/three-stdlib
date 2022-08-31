import type { IUniform, Texture } from 'three';
import type { IShader } from './types';
export declare type AfterimageShaderUniforms = {
    damp: IUniform<number>;
    tNew: IUniform<Texture | null>;
    tOld: IUniform<Texture | null>;
};
export interface IAfterimageShader extends IShader<AfterimageShaderUniforms> {
}
export declare const AfterimageShader: IAfterimageShader;
