import React from 'react'

const Box = (props) => (
  <mesh {...props} recieveShadow castShadow>
    <boxBufferGeometry args={[0.1, 0.1, 0.1]} />
    <meshBasicMaterial color='red' />
  </mesh>
)
export default Box
