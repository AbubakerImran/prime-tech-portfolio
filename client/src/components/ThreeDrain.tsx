import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function BrainMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.0005;
      groupRef.current.rotation.y += 0.001;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z += 0.0003;
    }
  });

  // Create particle geometry for neural network effect
  const particleCount = 1000;
  const particlesGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 8;
    particlePositions[i + 1] = (Math.random() - 0.5) * 8;
    particlePositions[i + 2] = (Math.random() - 0.5) * 8;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: '#00D9FF',
    size: 0.15,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
  });

  return (
    <group ref={groupRef}>
      {/* Central sphere */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial
          color="#B000FF"
          emissive="#B000FF"
          emissiveIntensity={0.3}
          wireframe={true}
        />
      </mesh>

      {/* Outer wireframe sphere */}
      <mesh scale={1.5}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshPhongMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.2}
          wireframe={true}
          transparent={true}
          opacity={0.4}
        />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef} geometry={particlesGeometry} material={particleMaterial} />

      {/* Torus rings */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[3, 0.2, 16, 100]} />
        <meshPhongMaterial
          color="#39FF14"
          emissive="#39FF14"
          emissiveIntensity={0.4}
        />
      </mesh>

      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[2.5, 0.15, 16, 100]} />
        <meshPhongMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

export default function ThreeDrain() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
        <pointLight position={[-10, -10, 10]} intensity={0.8} color="#B000FF" />
        <BrainMesh />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}
