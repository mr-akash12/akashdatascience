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
  
  const { positions, colors } = useMemo(() => {
    const particlesCount = 3000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      
      const color = new THREE.Color().setHSL(0.6 + Math.random() * 0.1, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
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
        size={0.04} 
        vertexColors 
        transparent 
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[3, 0.6, 16, 100]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#6366f1"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <color attach="background" args={['#0a0a0f']} />
        <fog attach="fog" args={['#0a0a0f', 10, 50]} />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />
        <pointLight position={[0, 0, 0]} intensity={1} color="#a78bfa" />
        
        <FlowingLines />
        <AnimatedTorus />
        <ParticleField />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
