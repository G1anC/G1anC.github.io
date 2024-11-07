"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

// Custom Invert Shader
const InvertShader = {
    uniforms: {
        tDiffuse: { value: null },
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      gl_FragColor = vec4(vec3(1.0 - color.rgb), color.a);
    }
  `,
};

const FluidBack: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Create the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current?.appendChild(renderer.domElement);

        // Shader Material
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_time: { value: 0.0 },
                scale: { value: 0.2 },
                ax: { value: 1.0 },
                ay: { value: 7.0 },
                az: { value: 7.0 },
                aw: { value: 6.0 },
                bx: { value: 4.0 },
                by: { value: 0.65 },
                color1: { value: new THREE.Color(0xaaaa00) },
                color2: { value: new THREE.Color(0xaaaa00) },
                color3: { value: new THREE.Color(0xaaaa00) },
                color4: { value: new THREE.Color(0xaaaa00) },
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            },
            vertexShader: `
                precision highp float;
                varying vec2 vUv;
                void main() {
                  vUv = uv;
                  gl_Position = vec4(position, 1.0);
                }
              `,
            fragmentShader: `
                precision highp float;
                varying vec2 vUv;
                uniform float u_time;
                uniform float scale;
                uniform vec2 resolution;
                uniform vec3 color1, color2, color3, color4;
                uniform float ax, ay, az, aw;
                uniform float bx, by;
        
                float cheapNoise(vec3 stp) {
                  vec3 p = vec3(stp.st, stp.p);
                  vec4 a = vec4(ax, ay, az, aw);
                  return mix(
                    sin(p.z + p.x * a.x + cos(p.x * a.x - p.z)) * cos(p.z + p.y * a.y + cos(p.y * a.x + p.z)),
                    sin(1. + p.x * a.z + p.z + cos(p.y * a.w - p.z)) * cos(1. + p.y * a.w + p.z + cos(p.x * a.x + p.z)),
                    0.436
                  );
                }
        
                void main() {
                  vec2 aR = vec2(resolution.x / resolution.y, 1.0);
                  vec2 st = vUv * aR * scale;
                  float S = sin(u_time * 0.005);
                  float C = cos(u_time * 0.005);
                  vec2 v1 = vec2(cheapNoise(vec3(st, 10.0)), cheapNoise(vec3(st, 1.0)));
                  vec2 v2 = vec2(
                    cheapNoise(vec3(st + bx * v1 + vec2(C * 1.7, S * 9.2), 0.15 * u_time)),
                    cheapNoise(vec3(st + by * v1 + vec2(S * 8.3, C * 2.8), 0.126 * u_time))
                  );
                  float n = 0.5 + 0.5 * cheapNoise(vec3(st + v2, 0.0));
        
                  vec3 color = mix(color1, color2, clamp((n * n) * 8.0, 0.0, 1.0));
                  color = mix(color, color3, clamp(length(v1), 0.0, 1.0));
                  color = mix(color, color4, clamp(length(v2.x), 0.0, 1.0));
        
                  color /= n * n + n * 7.0;
                  gl_FragColor = vec4(color, 2.0);
                }
              `,
        });

        // Create the plane and add it to the scene
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Post-processing setup
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        // Invert pass
        const invertPass = new ShaderPass(InvertShader);
        composer.addPass(invertPass);

        // Animation function
        const animate = () => {
            material.uniforms.u_time.value += 0.03;
            composer.render();
            requestAnimationFrame(animate);
        };
        animate();

        // Handle screen resizing
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            composer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <div ref={containerRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: "35%", zIndex: -1 }} />;
};

export default FluidBack;
