import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface DataBarProps {
  position: [number, number, number];
  height: number;
  color: string;
  label: string;
  value: number;
}

function DataBar({ position, height, color, label, value }: DataBarProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(0);

  useFrame(() => {
    if (meshRef.current) {
      const targetHeight = height;
      setCurrentHeight((prev) => {
        const diff = targetHeight - prev;
        return prev + diff * 0.05;
      });
      
      meshRef.current.scale.y = currentHeight;
      meshRef.current.position.y = currentHeight / 2;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.8, 1, 0.8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {hovered && (
        <Html position={[0, currentHeight + 0.5, 0]}>
          <div className="bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-2 shadow-xl">
            <p className="text-xs font-semibold text-primary">{label}</p>
            <p className="text-lg font-bold text-foreground">{value.toLocaleString()}</p>
          </div>
        </Html>
      )}
      
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function DataSphere({ position, color, size, label }: { position: [number, number, number]; color: string; size: number; label: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() + position[0]) * 0.001;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={hovered ? 0.8 : 0.3}
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.8}
      />
      {hovered && (
        <Html>
          <div className="bg-background/90 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
            <p className="text-xs font-semibold text-foreground">{label}</p>
          </div>
        </Html>
      )}
    </mesh>
  );
}

function Scene3DContent() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  const projectStats = [
    { label: 'Python', height: 4, color: '#3b82f6', value: 95 },
    { label: 'SQL', height: 3.8, color: '#8b5cf6', value: 90 },
    { label: 'Tableau', height: 3.5, color: '#ec4899', value: 85 },
    { label: 'Power BI', height: 3.6, color: '#f59e0b', value: 88 },
    { label: 'Excel', height: 4.2, color: '#10b981', value: 98 },
    { label: 'R', height: 3, color: '#06b6d4', value: 75 },
  ];

  return (
    <group ref={groupRef}>
      {/* Data Bars */}
      {projectStats.map((stat, index) => (
        <DataBar
          key={stat.label}
          position={[(index - 2.5) * 1.5, 0, 0]}
          height={stat.height}
          color={stat.color}
          label={stat.label}
          value={stat.value}
        />
      ))}

      {/* Floating Data Spheres */}
      <DataSphere position={[-4, 4, -2]} color="#3b82f6" size={0.3} label="64K+ Records" />
      <DataSphere position={[4, 3.5, -2]} color="#8b5cf6" size={0.25} label="12+ KPIs" />
      <DataSphere position={[-3, 2.5, 2]} color="#ec4899" size={0.28} label="30+ Columns" />
      <DataSphere position={[3, 3, 2]} color="#f59e0b" size={0.26} label="98% Accuracy" />

      {/* Grid Floor */}
      <gridHelper args={[20, 20, '#6366f1', '#374151']} position={[0, -0.5, 0]} />
    </group>
  );
}

export default function DataVisualization3D() {
  return (
    <section id="visualization" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Interactive 3D Analytics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my skills and project metrics in an immersive 3D environment. 
            Hover over elements to see detailed information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-b from-background to-primary/5"
        >
          <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
            <color attach="background" args={['#0a0a0f']} />
            <fog attach="fog" args={['#0a0a0f', 5, 20]} />
            
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
            <pointLight position={[0, 5, 0]} intensity={1} color="#3b82f6" />
            
            <Scene3DContent />
            
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              maxPolarAngle={Math.PI / 2}
              minDistance={5}
              maxDistance={20}
            />
          </Canvas>

          {/* UI Overlay */}
          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-3">
            <p className="text-xs text-muted-foreground mb-1">Controls</p>
            <p className="text-sm font-medium">🖱️ Drag to rotate</p>
            <p className="text-sm font-medium">🔍 Scroll to zoom</p>
            <p className="text-sm font-medium">👆 Hover for details</p>
          </div>

          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-3">
            <p className="text-xs text-muted-foreground mb-1">Live Stats</p>
            <p className="text-sm font-medium">📊 6 Core Skills</p>
            <p className="text-sm font-medium">🎯 90+ Avg Proficiency</p>
            <p className="text-sm font-medium">🚀 Interactive 3D View</p>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {[
            { color: '#3b82f6', label: 'Programming' },
            { color: '#8b5cf6', label: 'Databases' },
            { color: '#ec4899', label: 'Visualization' },
            { color: '#f59e0b', label: 'BI Tools' },
            { color: '#10b981', label: 'Analysis' },
            { color: '#06b6d4', label: 'Statistics' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
