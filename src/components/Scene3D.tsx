import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

function FlowingLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const lineGroup: JSX.Element[] = [];
    const numLines = 8;
    
    for (let i = 0; i < numLines; i++) {
      const points: THREE.Vector3[] = [];
      const segments = 100;
      const radius = 5 + i * 0.8;
      const angleOffset = (i * Math.PI * 2) / numLines;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const angle = t * Math.PI * 4 + angleOffset;
        const y = (t - 0.5) * 20;
        const wave = Math.sin(t * Math.PI * 3) * 2;
        
        const x = Math.cos(angle) * (radius + wave);
        const z = Math.sin(angle) * (radius + wave);
        
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const color = new THREE.Color().setHSL(0.6 + i * 0.05, 0.8, 0.5);
      
      lineGroup.push(
        <Line 
          key={i}
          points={points}
          color={color}
          lineWidth={2}
          transparent
          opacity={0.6}
        />
      );
    }
    
    return lineGroup;
  }, []);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      linesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return <group ref={linesRef}>{lines}</group>;
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  
  const { positions, colors, velocities } = useMemo(() => {
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
      
      const color = new THREE.Color().setHSL(0.6 + Math.random() * 0.15, 0.9, 0.5 + Math.random() * 0.3);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors, velocities };
  }, []);
  
  useFrame((state) => {
    if (points.current && points.current.geometry.attributes.position) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.15;
      
      const posArray = points.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < posArray.length; i += 3) {
        posArray[i] += velocities[i] * Math.sin(state.clock.getElapsedTime() * 0.5);
        posArray[i + 1] += velocities[i + 1] * Math.cos(state.clock.getElapsedTime() * 0.3);
        posArray[i + 2] += velocities[i + 2] * Math.sin(state.clock.getElapsedTime() * 0.4);
        
        if (Math.abs(posArray[i]) > 40) velocities[i] *= -1;
        if (Math.abs(posArray[i + 1]) > 40) velocities[i + 1] *= -1;
        if (Math.abs(posArray[i + 2]) > 40) velocities[i + 2] *= -1;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        vertexColors 
        transparent 
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      torusRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
      torusRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[3, 0.6, 16, 100]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#6366f1"
        emissiveIntensity={0.6}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function FloatingRings() {
  const rings = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      position: [0, i * 2 - 2, 0] as [number, number, number],
      radius: 4 + i * 1.5,
      speed: 0.3 + i * 0.1,
      color: new THREE.Color().setHSL(0.6 + i * 0.05, 0.8, 0.5),
    }));
  }, []);

  return (
    <>
      {rings.map((ring, index) => (
        <FloatingRing key={index} {...ring} index={index} />
      ))}
    </>
  );
}

function FloatingRing({ position, radius, speed, color, index }: {
  position: [number, number, number];
  radius: number;
  speed: number;
  color: THREE.Color;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3 + index) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[radius, 0.1, 8, 64]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <color attach="background" args={['#0a0a0f']} />
        <fog attach="fog" args={['#0a0a0f', 15, 60]} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#6366f1" />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#a78bfa" />
        <spotLight position={[5, 5, 5]} intensity={0.5} color="#ec4899" angle={0.6} penumbra={1} />
        
        <FlowingLines />
        <AnimatedTorus />
        <FloatingRings />
        <ParticleField />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
