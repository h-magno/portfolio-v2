import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useWindowSize } from 'react-use'
import CameraReferencial from './background-compoents/camera-reference/CameraReference'
import Sphere from './background-compoents/sphere/Sphere'
import Mirror from './background-compoents/mirror/Mirror'

const ThreejsBackround = () => {
  const { width: windowWidth } = useWindowSize()

  return (
    <Canvas
      camera={{
        fov: 20,
        position: [8.4, 5.4, 7.8],
      }}
    >
      <ambientLight color='blue' intensity={0.5} />
      <pointLight color='blue' position={[5, 5.4, 6]} intensity={5} />
      <axesHelper args={[10]} />
      <CameraReferencial />
      <Suspense fallback={null}>
        <Sphere position={windowWidth <= 912 ? [6.77, 4.36, 6.05] : [7, 4.4, 6]} rotation-x={1} rotation-y={0} rotation-z={0} />
      </Suspense>
      <Mirror position={[7, 4.4, 6]} rotation-x={15} rotation-y={3} />
    </Canvas>
  )
}

export default ThreejsBackround
