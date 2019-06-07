import React, { useState, useCallback } from 'react'
import ImageWebgl from './ImageWebgl'
import { Canvas } from 'react-three-fiber'

const Image = (props) => {
  const [hovered, setHover] = useState(false)
  const hover = useCallback(() => setHover(true), [])
  const unhover = useCallback(() => setHover(false), [])
    
  return (
    <div className="item"
      onPointerOver={hover}
      onPointerOut={unhover}>
      <Canvas invalidateFrameloop>
        <ImageWebgl {...props} 
          hovered={hovered} />
      </Canvas>
    </div>
  )
}

export default Image

// import { useSpring, a } from 'react-spring/three'
// const { fade } = useSpring({
//   opacity: .5,
//   from: { opacity: 0 },
// })
// style={fade}