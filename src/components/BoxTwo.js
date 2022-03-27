import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'
import { useSpring, animated, config } from '@react-spring/three'


export default function BoxTwo(props) {    
    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    
    const { scale, styles } = useSpring({ 
        scale: active ? 2 : .5,
        config: config.wobbly,
        opacity: active ? 1 : 0
        })

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.005
        mesh.current.rotation.z += 0.01
        })
  
    return (
      <animated.mesh
        {...props}
        ref={mesh}
        scale={scale}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        styles={styles}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={hovered ? 'blue' : 'forestgreen'} />
      </animated.mesh>
    )
  }
