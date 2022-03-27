import React from 'react'
import { usePlane } from '@react-three/cannon'

export default function Plane(props) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
      <mesh ref={ref}>
        <planeBufferGeometry attach='geometry' args={[200, 200]} />
        {/* <meshPhongMaterial attach="material" color={0x63996d} /> */}
      </mesh>
    )
  }