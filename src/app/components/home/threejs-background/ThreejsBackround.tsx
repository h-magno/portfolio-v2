import React, {
  Suspense, useContext, useEffect, useState,
} from 'react'
import { Canvas } from '@react-three/fiber'
import { useWindowSize } from 'react-use'
import { ThemeContext } from '@/hooks/useTheme'
import { OrbitControls } from '@react-three/drei'
import CameraReferencial from './background-compoents/camera-reference/CameraReference'
import Sphere from './background-compoents/sphere/Sphere'
import Mirror from './background-compoents/mirror/Mirror'
import Draggable from './extra-components/draggable/Draggable'
import Box from './background-compoents/box/Box'

const ThreejsBackround = () => {
  const { width: windowWidth } = useWindowSize()
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const [previusWindoWidth, setPreviusWindoWidth] = useState(windowWidth - 1)

  // useEffect(() => {
  //   if (windowWidth === 1150 || windowWidth - previusWindoWidth >= 5 || windowWidth - previusWindoWidth < -1) {k]
  //     location.reload()
  //   }
  // }, [windowWidth])

  return (
    <Canvas
      camera={{
        fov: 20,
        position: windowWidth > 1150 ? [7.3641, 4.8115, 6.6079] : [6.9594, 4.5675, 6.3127],
      }}
    >
      <ambientLight
        color={`${ darkMode ? 'blue' : 'white' }`}
        intensity={`${ darkMode ? 0.5 : 2 }`}
      />
      <axesHelper args={[10]} />
      <CameraReferencial />

      <pointLight
        position={[6.3, 4.55, 6.2]}
        color={`${ darkMode ? 'blue' : 'white' }`}
        intensity={`${ darkMode ? 5 : 50 }`}
      />
      <pointLight
        position={[6.3, 4.55, 6.2]}
        color={`${ darkMode ? 'blue' : 'white' }`}
        intensity={`${ darkMode ? 0 : 20 }`}
      />

      <pointLight position={[6.3, 4, 6.6]} color={`${ darkMode ? 'blue' : 'blue' }`} intensity={`${ darkMode ? 3 : 50 }`} />

      {/* <Box position={[6.3, 4.55, 6.2]} /> */}
      {/* <Box position={[7, 4.55, 5.9]} /> */}
      <Box position={[6.3, 4, 6.6]} />

      {/* //////////// */}
      <Suspense fallback={null}>
        <Sphere position={windowWidth > 1150 ? [7, 4.4, 6] : [6.77, 4.36, 6.06]} rotation-x={1} darkMode={darkMode} windowWidth={windowWidth} />
      </Suspense>

      {/* //////// */}
      <Mirror position={[7, 4.4, 6]} rotation-x={15} rotation-y={3} darkMode={darkMode} />
      {/* <Mirror position={[0, 0, 1.2]} rotation-x={-1.57} rotation-y={0} rotation-z={0} /> */}
      <Draggable />
      <OrbitControls />
    </Canvas>
  )
}

export default ThreejsBackround
