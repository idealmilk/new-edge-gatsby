import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import Overlay from './Overlay';
import Scene from './Scene';

const LiquidSphere = () => {
  const [{ background, fill }, set] = useSpring(
    { background: '#f0f0f0', fill: '#202020' },
    []
  );

  return (
    <Canvas
      className='canvas'
      dpr={[1, 2]}
      gl={{ antialias: false, alpha: false }}
      camera={{
        position: [0, 0, 1],
      }}
    >
      <Scene setBg={set} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {/* <Overlay fill={fill} /> */}
    </Canvas>
  );
};

export default LiquidSphere;
