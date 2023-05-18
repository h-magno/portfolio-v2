/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const Sphere = (props: any) => {
  const boxRef = useRef<Mesh>(null!)

  useFrame(() => {
    boxRef.current.rotation.y -= 0.00315
  })

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <mesh {...props} recieveShadow castShadow ref={boxRef}>
      <sphereGeometry args={[0.1, 12, 12]} />
      <meshPhysicalMaterial
        wireframe
        color='darkblue'
      />
    </mesh>
  )
}
export default Sphere
