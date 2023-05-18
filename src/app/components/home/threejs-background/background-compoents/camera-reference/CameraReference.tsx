/* eslint-disable no-console */
import { useRef } from 'react'

import { useFrame } from '@react-three/fiber'
import { Camera } from 'three'

const CameraReferencial = () => {
  const cameraRef = useRef<Camera>()

  useFrame(() => {
    if (cameraRef.current) {
      const { position } = cameraRef.current
      console.log(
        `Posição da câmera: x=${ position.x }, y=${ position.y }, z=${ position.z }`,
      )
    }
  })

  return (
    <>
      {console.log(cameraRef)}
    </>
  )
}

export default CameraReferencial
