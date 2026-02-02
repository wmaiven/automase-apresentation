import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  mousePosition: { x: number; y: number };
}

const ParticleField = ({ count = 2000, mousePosition }: ParticleFieldProps) => {
  const mesh = useRef<THREE.Points>(null!);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate the entire field slowly
    mesh.current.rotation.x = time * 0.05;
    mesh.current.rotation.y = time * 0.03;
    
    // React to mouse
    const targetX = mousePosition.x * 0.5;
    const targetY = mousePosition.y * 0.5;
    
    mesh.current.rotation.x += (targetY - mesh.current.rotation.x) * 0.1;
    mesh.current.rotation.y += (targetX - mesh.current.rotation.y) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00D4FF"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticleField;
