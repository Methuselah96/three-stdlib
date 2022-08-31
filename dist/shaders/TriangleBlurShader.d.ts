import { Vector2 } from 'three';
export declare const TriangleBlurShader: {
    uniforms: {
        texture: {
            value: null;
        };
        delta: {
            value: Vector2;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
