import React, { Suspense, useEffect } from 'react'

import styled from "styled-components";

import Box from "./Box";
import BoxTwo from './BoxTwo'
import AnimatedSphere from "./AnimatedSphere";
import Plane from './Plane'
import Text from './Text'
import SkyBox from './SkyBox'

import { Canvas, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistance = 5;
      controls.maxDistance = 230;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

export default function ThreeDSection(props) {

    return (
    <>
        <Canvas>
            <CameraController />
            <SkyBox />
            {/* <OrbitControls enableZoom={false}/> */}
            <Stars />
            <ambientLight color={0xffffff} intensity={.3} />
            <spotLight color={0xff39fe} position={[10, 10, 10]} angle={0.5} />
            <Physics>
                <Box />
                <BoxTwo />
                {/* <Plane /> */}
            </Physics>
        </Canvas>
        {/* <Text /> */}
    </>
    )
}

/* <Canvas className="canvas">
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>
        <Canvas className="canvas">
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas> */