import { Vector2 } from 'three';
export declare const FXAAShader: {
    uniforms: {
        tDiffuse: {
            value: null;
        };
        resolution: {
            value: Vector2;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
