export declare const ToneMapShader: {
    uniforms: {
        tDiffuse: {
            value: null;
        };
        averageLuminance: {
            value: number;
        };
        luminanceMap: {
            value: null;
        };
        maxLuminance: {
            value: number;
        };
        minLuminance: {
            value: number;
        };
        middleGrey: {
            value: number;
        };
    };
    vertexShader: string;
    fragmentShader: string;
};
