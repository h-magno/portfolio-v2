import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Camera } from 'three'

const CameraReferencial = () => {
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0, z: 0 })

  useFrame(({ camera }) => {
    const { position, rotation,  } = camera

    if (
      Math.abs(position.x - prevPosition.x) > 0.001
      || Math.abs(position.y - prevPosition.y) > 0.001
      || Math.abs(position.z - prevPosition.z) > 0.001
    ) {
      console.log(
        `
        Posição da câmera: 
        [
        ${ position.x.toFixed(4) },
        ${ position.y.toFixed(4) },
        ${ position.z.toFixed(4) },
        ],
        
        ${ rotation.x.toFixed(4) },
        ${ rotation.y.toFixed(4) },
        ${ rotation.z.toFixed(4) }
        
        
        `,
      )

      setPrevPosition({ x: position.x, y: position.y, z: position.z })
    }
  })

  return null
}

export default CameraReferencial
