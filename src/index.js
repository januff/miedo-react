import ReactDOM from 'react-dom'
// WebGL code from https://tympanus.net/Development/DistortionHoverEffect/

import React, { useState, useCallback, useMemo } from 'react'
import * as THREE from 'three'
import { vertexShader, fragmentShader } from './resources/shaders/XFadeShader'
import { Canvas, useThree } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'

import mie1 from './resources/images/miedo-1.jpg'
import miea from './resources/images/svg/miedo.svg'
import spi1 from './resources/images/spick-1.jpg'
import spi2 from './resources/images/spick-2.jpg'
import spia from './resources/images/spick-a.jpg'
// import spib from './resources/images/spick-b.jpg'
import nam1 from './resources/images/names-1.jpg'
import nam2 from './resources/images/names-2.jpg'
import nama from './resources/images/names-a.jpg'
// import namb from './resources/images/names-b.jpg'
import kil1 from './resources/images/killed-1.jpg'
import kil2 from './resources/images/killed-2.jpg'
// import kila from './resources/images/killed-a.jpg'
import kilb from './resources/images/killed-b.jpg'
import tea1 from './resources/images/teach-1.jpg'
import tea2 from './resources/images/teach-2.jpg'
// import teaa from './resources/images/teach-a.jpg'
import teab from './resources/images/teach-b.jpg'
import gre1 from './resources/images/greasy-1.jpg'
import gre2 from './resources/images/greasy-2.jpg'
// import grea from './resources/images/greasy-a.jpg'
// import greb from './resources/images/greasy-b.jpg'
import grec from './resources/images/greasy-c.jpg'

import './styles.css'

// data.map(([url1, url2, disp, intensity, x, y, factor, z, scale], index) => (

const data = [
  [mie1, tea2, teab, -1.],
  [gre2, gre1, grec, -0.4],
  [tea2, tea1, teab, 0.9],
  [spi2, spi1, spia, -0.5],
  [nam2, nam1, nama, 0.5],
  [kil2, kil1, kilb, -0.5]
]

function ImageWebgl({ url1, url2, disp, intensity, hovered }) {
  const { progress } = useSpring({ progress: hovered ? 1 : 0 })

  const { gl, invalidate } = useThree()

  const args = useMemo(() => {
    const loader = new THREE.TextureLoader()
    const texture1 = loader.load(url1, invalidate)
    const texture2 = loader.load(url2, invalidate)
    const dispTexture = loader.load(disp, invalidate)

    dispTexture.wrapS = dispTexture.wrapT = THREE.RepeatWrapping
    texture1.magFilter = texture2.magFilter = THREE.LinearFilter
    texture1.minFilter = texture2.minFilter = THREE.LinearFilter

    texture1.anisotropy = gl.capabilities.getMaxAnisotropy()
    texture2.anisotropy = gl.capabilities.getMaxAnisotropy()
    return {
      uniforms: {
        effectFactor: { type: 'f', value: intensity },
        dispFactor: { type: 'f', value: 0 },
        texture: { type: 't', value: texture1 },
        texture2: { type: 't', value: texture2 },
        disp: { type: 't', value: dispTexture },
      },
      vertexShader,
      fragmentShader,
    }
  }, [url1, url2, disp])

  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[8, 8]} />
      <a.shaderMaterial attach="material" args={[args]} uniforms-dispFactor-value={progress} />
    </mesh>
  )
}

function Image(props) {
  const [hovered, setHover] = useState(false)
  const hover = useCallback(() => setHover(true), [])
  const unhover = useCallback(() => setHover(false), [])
  return (
    <div className="item" onPointerOver={hover} onPointerOut={unhover}>
      <Canvas className="canvas" invalidateFrameloop>
        <ImageWebgl {...props} hovered={hovered} />
      </Canvas>
    </div>
  )
}

export default function App() {
  return (
    <div className="grid">
      {data.map(([url1, url2, disp, intensity], index) => (
        <Image key={index} url1={url1} url2={url2} disp={disp} intensity={intensity} />
      ))}
      <img alt="!Miedo, Terror, Espanto!" className="miedo" src={miea}></img>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
