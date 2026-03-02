"use client";

import { Edges, Float, OrbitControls, RoundedBox, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo } from "react";

const labels = ["React", "Next", "TS", "R3F", "QA", "CI/CD"];

const Cube = memo(function Cube() {
  return (
    <Float floatIntensity={1.2} rotationIntensity={1} speed={1.8}>
      <group>
        <RoundedBox args={[2.2, 2.2, 2.2]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color="#111111" metalness={0.25} roughness={0.35} />
          <Edges color="#00f0ff" linewidth={1.6} />
        </RoundedBox>

        <Text color="#00f0ff" fontSize={0.22} position={[0, 0, 1.16]}>
          {labels[0]}
        </Text>
        <Text
          color="#7b2ff7"
          fontSize={0.22}
          position={[0, 0, -1.16]}
          rotation={[0, Math.PI, 0]}
        >
          {labels[1]}
        </Text>
        <Text
          color="#00ff9d"
          fontSize={0.22}
          position={[1.16, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          {labels[2]}
        </Text>
        <Text
          color="#00f0ff"
          fontSize={0.22}
          position={[-1.16, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          {labels[3]}
        </Text>
        <Text
          color="#7b2ff7"
          fontSize={0.22}
          position={[0, 1.16, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          {labels[4]}
        </Text>
        <Text
          color="#00ff9d"
          fontSize={0.22}
          position={[0, -1.16, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          {labels[5]}
        </Text>
      </group>
    </Float>
  );
});

export function InteractiveCube() {
  return (
    <Canvas camera={{ fov: 45, position: [0, 0, 6] }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <directionalLight color="#00f0ff" intensity={2.2} position={[2, 2, 2]} />
      <directionalLight color="#7b2ff7" intensity={1.5} position={[-2, -1, -2]} />
      <Cube />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1.5}
        enablePan={false}
        enableZoom={false}
      />
    </Canvas>
  );
}
