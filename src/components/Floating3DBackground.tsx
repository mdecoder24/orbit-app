"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function GlassShape({ position, rotation, type, scale = 1 }: { position: [number, number, number], rotation: [number, number, number], type: "torus" | "icosahedron" | "sphere", scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh ref={meshRef} rotation={rotation} scale={scale}>
        {type === "torus" && <torusGeometry args={[1, 0.3, 16, 100]} />}
        {type === "icosahedron" && <icosahedronGeometry args={[1.2, 0]} />}
        {type === "sphere" && <sphereGeometry args={[1, 32, 32]} />}
        
        <meshPhysicalMaterial 
          color="#0a44ff"
          transmission={0.9}
          opacity={1}
          metalness={0.1}
          roughness={0.1}
          ior={1.5}
          thickness={0.5}
          specularIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function InteractiveScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Smoothly track mouse position to rotate the entire scene slightly
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <GlassShape type="icosahedron" position={[-6, 3, -4]} rotation={[0, 0, 0]} scale={1.5} />
      <GlassShape type="torus" position={[5, -2, -2]} rotation={[Math.PI / 4, 0, 0]} scale={1.2} />
      <GlassShape type="sphere" position={[4, 5, -6]} rotation={[0, 0, 0]} scale={1.8} />
      <GlassShape type="icosahedron" position={[-5, -4, -5]} rotation={[0.5, 0.5, 0]} scale={1} />
      <GlassShape type="torus" position={[0, -6, -8]} rotation={[0, Math.PI/3, 0]} scale={2} />
    </group>
  );
}

export default function Floating3DBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#0066ff" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" distance={10} />
        <InteractiveScene />
      </Canvas>
    </div>
  );
}
