import ReactDOM from 'react-dom'
// WebGL code from https://tympanus.net/Development/DistortionHoverEffect/

import React, { useState, useCallback, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { vertexShader, fragmentShader } from './resources/shaders/XFadeShader'
import { Canvas, useThree } from 'react-three-fiber'
import { useSpring, useTransition, a } from 'react-spring/three'
import { useRoute, useLocation, Link, Route, Switch } from 'wouter'
import { stories, miedo, editora } from './resources/images'
import './styles.css'

const titles = Object.keys(stories)

console.log(stories)

function loadImages() {
  const loadTest = new Promise((resolve, reject) => {
    resolve('test');
  });
  return loadTest
}

// story.map(([url1, url2, disp, intensity, x, y, factor, z, scale], index) => (

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

function ActiveLink(props) {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""}>{props.children}</a>
    </Link>
  );
};

function Titles() {
  return (
    <span className="titles">
      <nav>
        {titles.map(title => (
          <>
            <ActiveLink href={`/story/${title}`}>{title}</ActiveLink>&nbsp;
          </>
        ))}
      </nav>
    </span>
  )
}

function Story() {
  const [match, params] = useRoute('/story/:title')
  const title = match ? params.title : titles[0]
  
  // const [panels, setPanels] = useState([])
  // const [loaded, setLoaded] = useState(stories)

  // console.log('loaded at first:', loaded)
  // useEffect(() => void loadImages(title).then(setPanels), [title])

  // useEffect(() => void loadImages().then(setLoaded), [title])
  // console.log('loaded after', loaded)

  // const transitions = useTransition(panels, item =>
  //   item.uuid, {
  //     from: { position: [-50, 0, 0], rotation: [0, -0.6, 0], opacity: 0 },
  //     enter: { position: [0, 0, 0], rotation: [0, 0.3, 0], opacity: 1 },
  //     leave: { position: [50, 0, 0], rotation: [0, 0.6, 0], opacity: 0 },
  //     order: ['leave', 'enter', 'update'],
  //     lazy: true,
  //     trail: 5,
  //     unique: true,
  //     reset: true,
  // })
 
  // const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div className="grid">
      {stories[title].map(([url1, url2, disp, intensity], index) => (
        <Image key={index} url1={url1} url2={url2} disp={disp} intensity={intensity} />
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="container">
      <Story />
      <Titles />
      <img alt="!Miedo, Terror, Espanto!" className="miedo" src={miedo}></img>
      <img alt="Editora Sol" className="editora" src={editora}></img>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
