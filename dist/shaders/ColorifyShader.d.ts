import { Color } from 'three';
export declare const ColorifyShader: {
    uniforms: {
        tDiffuse: {
            value: null;
        };
        color: {
            value: Color;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
