import { Color, Vector3 } from 'three';
export declare const GodRaysDepthMaskShader: {
    uniforms: {
        tInput: {
            value: null;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
export declare const GodRaysGenerateShader: {
    uniforms: {
        tInput: {
            value: null;
        };
        fStepSize: {
            value: number;
        };
        vSunPositionScreenSpace: {
            value: Vector3;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
export declare const GodRaysCombineShader: {
    uniforms: {
        tColors: {
            value: null;
        };
        tGodRays: {
            value: null;
        };
        fGodRayIntensity: {
            value: number;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
export declare const GodRaysFakeSunShader: {
    uniforms: {
        vSunPositionScreenSpace: {
            value: Vector3;
        };
        fAspect: {
            value: number;
        };
        sunColor: {
            value: Color;
        };
        bgColor: {
            value: Color;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
