import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls, Sparkles, Text } from '@react-three/drei';

function FloatingShape({ position, color, speed }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * speed;
    meshRef.current.rotation.y = t * speed * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.8} wireframe />
      </mesh>
    </Float>
  );
}

function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00F0FF" />
        
        <FloatingShape position={[-3, 2, 0]} color="#00F0FF" speed={0.5} />
        <FloatingShape position={[3, -1, 0]} color="#FF4500" speed={0.7} />
        <FloatingShape position={[0, 3, -2]} color="#A020F0" speed={0.3} />

        <Sparkles count={50} scale={10} size={4} speed={0.4} opacity={0.5} color="#FFFFFF" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

export default Hero3D;
