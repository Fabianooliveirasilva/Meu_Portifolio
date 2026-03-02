"use client";

import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function FloatingOrb() {
  return (
    <Float floatIntensity={1.4} rotationIntensity={0.8} speed={2.1}>
      <Sphere args={[1.2, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#7b2ff7"
          distort={0.35}
          radius={1}
          roughness={0.15}
          speed={2.5}
        />
      </Sphere>
    </Float>
  );
}

export function HeroCanvas() {
  return (
    <Canvas camera={{ fov: 45, position: [0, 0, 4] }} dpr={[1, 1.5]}>
      <color args={["#0f0f0f"]} attach="background" />
      <ambientLight intensity={0.7} />
      <pointLight color="#00f0ff" intensity={12} position={[3, 3, 3]} />
      <pointLight color="#7b2ff7" intensity={10} position={[-3, -2, 2]} />
      <FloatingOrb />
      <Stars depth={40} factor={2.5} radius={50} saturation={0} speed={0.4} />
    </Canvas>
  );
}
