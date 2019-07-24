import { DOTS, PANEL } from './constants'

// "¡Miedo, Terror, Espanto!" logo
import miedo from './svg/miedo-logo.svg'

// Editora Sol publisher mark
import editora from './svg/es-logo.svg'

// "El Castigo"

import c1c from './jpg/c1c.jpg'
import c1s from './jpg/c1s.jpg'
import c1a from './jpg/c1a.jpg'
import c2e from './jpg/c2e.jpg'
import c2s from './jpg/c2s.jpg'
import c2a from './jpg/c2a.jpg'
import c3e from './jpg/c3e.jpg'
import c4e from './jpg/c4e.jpg'
import c4s from './jpg/c4s.jpg'
import c4a from './jpg/c4a.jpg'
import c5e from './jpg/c5e.jpg'
import c5s from './jpg/c5s.jpg'
import c5a from './jpg/c5a.jpg'
import c6e from './jpg/c6e.jpg'
import c6s from './jpg/c6s.jpg'
import c6a from './jpg/c6a.jpg'

// "Asesino"

import a1e from './jpg/a1e.jpg'
import a1s from './jpg/a1s.jpg'
import a1a from './jpg/a1a.jpg'
import a2e from './jpg/a2e.jpg'
import a2s from './jpg/a2s.jpg'
import a2a from './jpg/a2a.jpg'
import a3e from './jpg/a3e.jpg'
import a3s from './jpg/a3s.jpg'
import a3a from './jpg/a3a.jpg'
import a4e from './jpg/a4e.jpg'
import a4s from './jpg/a4s.jpg'
import a4a from './jpg/a4a.jpg'
import a5e from './jpg/a5e.jpg'
import a5s from './jpg/a5s.jpg'
import a5a from './jpg/a5a.jpg'
import a6e from './jpg/a6e.jpg'
import a6s from './jpg/a6s.jpg'
import a6a from './jpg/a6a.jpg'

const asesino = [
  [a1s, a1e, a1a, -.3],
  [a2s, a2e, a2a, -0.4],
  [a3s, a3e, a3a, 0.9],
  [a4s, a4e, a4a, -0.5],
  [a5s, a5e, a5a, 0.5],
  [a6s, a6e, a6a, -0.5]
]

const castigo = [
  [c1c, c1s, c1a, -1.],
  [c2s, c2e, c2a, -0.4],
  [c1s, c3e, c1a, 0.9],
  [c4s, c4e, c4a, -0.5],
  [c5s, c5e, c5a, 0.5],
  [c6s, c6e, c6a, -0.5]
]

const stories = { asesino, castigo }
  
export { stories, miedo, editora, DOTS, PANEL }
