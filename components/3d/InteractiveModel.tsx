'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Add any animations or interactions here
  }, []);

  return (
    <Canvas style={{ height: '100vh', background: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <group ref={modelRef}>
        {/* Replace with your 3D model component */}
        {/* <Your3DModel /> */}
      </group>
    </Canvas>
  );
};

export default InteractiveModel;