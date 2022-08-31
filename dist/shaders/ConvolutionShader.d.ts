import { Vector2 } from 'three';
import type { IUniform, Texture } from 'three';
import type { IShader } from './types';
export declare type ConvolutionShaderDefines = {
    KERNEL_SIZE_FLOAT: string;
    KERNEL_SIZE_INT: string;
};
export declare type ConvolutionShaderUniforms = {
    cKernel: IUniform<number[]>;
    tDiffuse: IUniform<Texture | null>;
    uImageIncrement: IUniform<Vector2>;
};
export interface IConvolutionShader extends IShader<ConvolutionShaderUniforms, ConvolutionShaderDefines> {
    buildKernel: (sigma: number) => number[];
}
export declare const ConvolutionShader: IConvolutionShader;
