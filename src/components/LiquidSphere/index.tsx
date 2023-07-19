import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/web';
import Experience from './Experience';

export default function LiquidSphere() {
  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring(
    { background: '#9FDAEA', fill: '#202020' },
    []
  );
  return (
    <a.main style={{ background }}>
      <Canvas className='canvas' dpr={[1, 2]}>
        <Experience setBg={set} />
      </Canvas>
    </a.main>
  );
}
