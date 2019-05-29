import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import { useRoute } from 'wouter'
import { Titles, Story, Modal } from "./components/";
import { stories, miedo, editora } from './resources/images'
import './styles.css'

export default function App() {
  const titles = Object.keys(stories)
  const [match, params] = useRoute('/story/:title')
  const title = match ? params.title : titles[0]
  const story = stories[title]
  const [modalOpen, setModalOpen] = useState(false)
 
  return (
    <div className="container">
      <Story story={story} />
      <Titles names={titles} />
      <img alt="!Miedo, Terror, Espanto!" 
          className="miedo" 
          src={miedo} />
      <img alt="Editora Sol" 
          className="editora" 
          src={editora} 
          onClick={() => setModalOpen(true)} />
      {modalOpen && (
        <Modal
          title="Editora Sol"
          img={editora}
          content="EC Comics, Mexican Bootlegs"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
