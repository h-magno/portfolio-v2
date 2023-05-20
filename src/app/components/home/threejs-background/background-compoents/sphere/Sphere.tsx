/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader } from 'three'

const Sphere = (props: any) => {
  const { darkMode } = props
  const boxRef = useRef<Mesh>(null!)

  useFrame(() => {
    boxRef.current.rotation.y -= 0.00315
  })

  const texture = useLoader(TextureLoader, '/texture.png')

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <mesh {...props} recieveShadow castShadow ref={boxRef}>
      <sphereGeometry args={[0.08, 12, 12]} />
      <meshBasicMaterial
        wireframe
        color={`${ darkMode ? 'darkblue' : 'white' }`}
      />
    </mesh>
  )
}
export default Sphere
