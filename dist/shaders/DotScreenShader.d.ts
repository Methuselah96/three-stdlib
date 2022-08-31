import { Vector2 } from 'three';
export declare const DotScreenShader: {
    uniforms: {
        tDiffuse: {
            value: null;
        };
        tSize: {
            value: Vector2;
        };
        center: {
            value: Vector2;
        };
        angle: {
            value: number;
        };
        scale: {
            value: number;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
