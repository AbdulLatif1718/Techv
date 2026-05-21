'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const PulsingCore = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.2;
      mesh.current.rotation.y = time * 0.3;
      const scale = 1 + Math.sin(time * 2) * 0.1;
      mesh.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1, 15]} />
      <meshStandardMaterial 
        color="#14b8c6" 
        wireframe 
        transparent 
        opacity={0.3} 
        emissive="#14b8c6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const DataRings = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z += 0.005;
      group.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={group}>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <torusGeometry args={[1.5 + i * 0.2, 0.01, 16, 100]} />
          <meshBasicMaterial color="#14b8c6" transparent opacity={0.1 - i * 0.02} />
        </mesh>
      ))}
    </group>
  );
};

const TechVisual = () => {
  return (
    <div className="w-full h-full min-h-[300px] relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#14b8c6" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <PulsingCore />
          <DataRings />
          <Sphere args={[1.2, 32, 32]}>
            <MeshDistortMaterial
              color="#0a0a0a"
              speed={2}
              distort={0.4}
              radius={1}
              transparent
              opacity={0.2}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
};

export default TechVisual;
