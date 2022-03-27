import React, { useEffect } from 'react'
import { useThree, useScroll, useFrame } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function CameraController() {
    const { camera, gl } = useThree();

  
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 5;
        controls.maxDistance = 230;
        controls.enableRotate = false

        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };