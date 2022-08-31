import { Pass } from './Pass';
import { ColorRepresentation, WebGLRenderer, WebGLRenderTarget } from 'three';
declare class ClearPass extends Pass {
    clearColor: ColorRepresentation;
    clearAlpha: number;
    private _oldClearColor;
    constructor(clearColor?: ColorRepresentation, clearAlpha?: number);
    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget): void;
}
export { ClearPass };
