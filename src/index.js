import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import { useRoute } from 'wouter'
import { Titles, Story, Modal, GithubCorner } from "./components";
import { stories, miedo, editora } from './resources/images'
import './styles.css'

export default function App() {
  const titles = Object.keys(stories)
  const [match, params] = useRoute('/story/:title')
  const title = match ? params.title : titles[0]
  const story = stories[title]
  const [modalOpen, setModalOpen] = useState(true)
 
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
        <Modal img={editora}
          onClose={() => setModalOpen(false)}
        />
      )}
      <GithubCorner 
        color="#FCD02C" 
        backgroundColor="#222"
        target="blank"
        url="https://github.com/januff/miedo-react" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
