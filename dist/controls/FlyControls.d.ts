import { Camera, EventDispatcher } from 'three';
declare class FlyControls extends EventDispatcher {
    object: Camera;
    domElement: HTMLElement | Document;
    movementSpeed: number;
    rollSpeed: number;
    dragToLook: boolean;
    autoForward: boolean;
    private changeEvent;
    private EPS;
    private tmpQuaternion;
    private mouseStatus;
    private movementSpeedMultiplier;
    private moveState;
    private moveVector;
    private rotationVector;
    constructor(object: Camera, domElement: HTMLElement | Document);
    private keydown;
    private keyup;
    private mousedown;
    private mousemove;
    private mouseup;
    private lastQuaternion;
    private lastPosition;
    update: (delta: number) => void;
    private updateMovementVector;
    private updateRotationVector;
    private getContainerDimensions;
    dispose: () => void;
}
export { FlyControls };
