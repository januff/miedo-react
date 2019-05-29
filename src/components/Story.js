import React, { useState, useEffect } from 'react'
import Image from './Image'
import ImageLoader from './ImageLoader'

// story.map(([url1, url2, disp, intensity, x, y, factor, z, scale], index) => (

const Story = (story) => {
  const [panels, setPanels] = useState([])
  useEffect(() => void ImageLoader(story.story).then(setPanels), [story])

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
 
  return (
    <div className="grid">
      {panels.map(([url1, url2, disp, intensity], index) => (
        <Image key={url1} url1={url1} url2={url2} disp={disp} intensity={intensity} />
      ))}
    </div>
  )
}

export default Story