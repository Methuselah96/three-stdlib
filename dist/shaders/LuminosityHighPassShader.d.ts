import { Color } from 'three';
export declare const LuminosityHighPassShader: {
    shaderID: string;
    uniforms: {
        tDiffuse: {
            value: null;
        };
        luminosityThreshold: {
            value: number;
        };
        smoothWidth: {
            value: number;
        };
        defaultColor: {
            value: Color;
        };
        defaultOpacity: {
            value: number;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
