import * as THREE from 'three';
import React, { Suspense, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
  OrbitControls,
  Html,
} from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function Experience({ setBg }) {
  const sphere = useRef();
  const light = useRef();
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20;
    light.current.position.y = state.mouse.y * 20;
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2
      );
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y / 2 : 0),
        0.2
      );
    }
  });

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.32 : 1,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? '#9868FB' : mode ? '#93e16b' : '#FF4DA3',
      config: (n) =>
        n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [mode, hovered, down]
  );

  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <ambientLight intensity={0.5} />
        <pointLight
          ref={light}
          position-z={-15}
          intensity={0.4}
          color='#F8C069'
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            // Toggle mode between dark and bright
            setMode(!mode);
            setBg({
              background: !mode ? '#9a7ecd' : '#9FDAEA',
              fill: !mode ? '#9FDAEA' : '#9a7ecd',
            });
          }}
        >
          <sphereGeometry args={[1.9, 64, 64]} />

          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </a.mesh>

        <Environment preset='warehouse' />

        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  );
}
