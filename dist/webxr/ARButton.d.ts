import { WebGLRenderer, XRSessionInit } from 'three';
declare class ARButton {
    static createButton(renderer: WebGLRenderer, sessionInit?: XRSessionInit): HTMLButtonElement | HTMLAnchorElement;
}
export { ARButton };
