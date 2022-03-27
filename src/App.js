import React from 'react'
import "./styles.css";

import { Stars, ScrollControls, Scroll, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon';

import CameraController from './components/CameraController';
import BoxTwo from './components/BoxTwo';
import Cloud from './components/WordCloud'
import Plane from './components/Plane'

export default function App() {
  return (
  <>
    <Canvas className='real-canvas'>
      <Stars />
      <CameraController />
      <spotLight position={[5,5,5]} />
      <ambientLight color={0xffffff} intensity={.2} />
      <Physics>
        <BoxTwo />
        <Cloud />
        <Plane />
      </Physics>
    </Canvas>
  </>
  );
}
