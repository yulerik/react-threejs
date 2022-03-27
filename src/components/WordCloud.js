import * as THREE from 'three'
import React, { useMemo } from 'react'
import randomWord from 'random-words'

import Words from './Words'

export default function Cloud({ count = 4, radius = 20 }) {
    
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
      const temp = []
      const spherical = new THREE.Spherical()
      const phiSpan = Math.PI / (count + 1)
      const thetaSpan = (Math.PI * 2) / count
      for (let i = 1; i < count + 1; i++)
        // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
        for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomWord()])
      return temp
    }, [count, radius])
    return words.map(([pos, word], index) => {
        return <Words key={index} position={pos} children={word} />
    })
  }