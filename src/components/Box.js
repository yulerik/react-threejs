import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "../images/map.jpg";

export default function Box() {
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh position={[1,5,1]} rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
