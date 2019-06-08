import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import { useRoute } from 'wouter'
import { Titles, Story, Modal, GithubCorner } from './components';
import { stories, miedo, editora, DOTS, PANEL } from './resources/images'
import { quotes } from "./resources/edit";
import './styles.css';


// Experimenting with style-components below. Appears conducive to abstracting all textures and masks out of CSS and into a master palette of data-URIs,from which more flexible shapes, sizes, and randomizations can be controlled. Need to dig deeper into documentation: https://www.styled-components.com/docs/basics

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .panel {
    -webkit-mask-image: url("${PANEL}");
  }
`

export default function App() {
  const titles = Object.keys(stories)
  const [match, params] = useRoute('/story/:title')
  const title = match ? params.title : titles[1]
  const story = stories[title]
  const quote = quotes[title]
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <div className="container">
      <GlobalStyle />
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
        <Modal alt="Info"
          title={story}
          content={quote}
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
