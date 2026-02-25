"use client";
import { shaderMaterial } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import vertexShader from "../shaders/vertex";
import fragmentShader from "../shaders/fragment";
import { Canvas, extend, useFrame } from "@react-three/fiber";

// GLSL Shader Code
const WaveShaderMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    mouse: new THREE.Vector2(0, 0),
    pixelRatio: 1.0, // Add this
  },
  vertexShader,
  fragmentShader,
);
extend({ WaveShaderMaterial });

function WavePlane({ mouse }: { mouse: THREE.Vector2 }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock, size, gl }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
      materialRef.current.uniforms.resolution.value.set(
        size.width,
        size.height,
      );
      materialRef.current.uniforms.mouse.value = mouse;
      materialRef.current.uniforms.pixelRatio.value = gl.getPixelRatio();
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* @ts-expect-error: TypeScript does not recognize waveShaderMaterial */}
      <waveShaderMaterial ref={materialRef} />
    </mesh>
  );
}

export default function Background() {
  const [mouse, setMouse] = useState(new THREE.Vector2(0, 0));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1 range
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse(new THREE.Vector2(x, y));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 h-screen w-full -z-10"
      style={{ height: "100vh", minHeight: "100vh" }}
    >
      <Canvas>
        <WavePlane mouse={mouse} />
      </Canvas>
    </div>
  );
}
