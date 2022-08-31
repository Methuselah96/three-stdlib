import { Loader } from 'three';
import type { LoadingManager, Shape } from 'three';
declare type Options = {
    lineHeight: number;
    letterSpacing: number;
};
export declare class FontLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(url: string, onLoad?: (responseFont: Font) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    parse(json: FontData): Font;
}
declare type Glyph = {
    _cachedOutline: string[];
    ha: number;
    o: string;
};
declare type FontData = {
    boundingBox: {
        yMax: number;
        yMin: number;
    };
    familyName: string;
    glyphs: {
        [k: string]: Glyph;
    };
    resolution: number;
    underlineThickness: number;
};
export declare class Font {
    data: FontData;
    static isFont: true;
    static type: 'Font';
    constructor(data: FontData);
    generateShapes(text: string, size?: number, _options?: Partial<Options>): Shape[];
}
export {};
