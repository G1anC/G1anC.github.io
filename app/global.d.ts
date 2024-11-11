declare module "three/examples/jsm/postprocessing/EffectComposer" {
    import { WebGLRenderer, WebGLRenderTarget } from "three";
    import { Pass } from "three/examples/jsm/postprocessing/Pass";

    export class EffectComposer {
        constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
        render(delta?: number): void;
        addPass(pass: Pass): void;
    }
}

declare module "three/examples/jsm/postprocessing/RenderPass" {
    import { Scene, Camera } from "three";
    import { Pass } from "three/examples/jsm/postprocessing/Pass";

    export class RenderPass extends Pass {
        constructor(scene: Scene, camera: Camera);
    }
}

declare module "three/examples/jsm/postprocessing/ShaderPass" {
    import { Pass } from "three/examples/jsm/postprocessing/Pass";
    import { ShaderMaterial } from "three";

    export class ShaderPass extends Pass {
        constructor(material: ShaderMaterial, textureID?: string);
    }
}
