"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;

      // Mouse follow effect
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;
      
      meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
      meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#0066ff" />
      <pointLight position={[-10, -10, -5]} intensity={2} color="#00f0ff" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <Icosahedron ref={meshRef} args={[2.5, 4]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#000000"
            emissive="#0066ff"
            emissiveIntensity={0.8}
            wireframe
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </Icosahedron>
      </Float>

      {/* Floating inner core */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[1.5, 1]} position={[0, 0, 0]}>
          <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.3} />
        </Icosahedron>
      </Float>

      {/* Blue starfield/particles background */}
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={1} fade speed={1} />
    </>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
