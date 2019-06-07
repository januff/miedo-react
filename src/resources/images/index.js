import { DOTS, PANEL } from './constants'

// "¡Miedo, Terror, Espanto!" logo
import miedo from './svg/miedo-logo.svg'

// Editora Sol publisher mark
import editora from './svg/es-logo.svg'

// "El Castigo"

import c1c from './jpeg/c1c.jpg'
import c1s from './jpeg/c1s.jpg'
import c1a from './jpeg/c1a.jpg'
import c2e from './jpeg/c2e.jpg'
import c2s from './jpeg/c2s.jpg'
import c2a from './jpeg/c2a.jpg'
import c3e from './jpeg/c3e.jpg'
import c4e from './jpeg/c4e.jpg'
import c4s from './jpeg/c4s.jpg'
import c4a from './jpeg/c4a.jpg'
import c5e from './jpeg/c5e.jpg'
import c5s from './jpeg/c5s.jpg'
import c5a from './jpeg/c5a.jpg'
import c6e from './jpeg/c6e.jpg'
import c6s from './jpeg/c6s.jpg'
import c6a from './jpeg/c6a.jpg'

// "Asesino"

import a1e from './jpeg/a1e.jpg'
import a1s from './jpeg/a1s.jpg'
import a1a from './jpeg/a1a.jpg'
import a2e from './jpeg/a2e.jpg'
import a2s from './jpeg/a2s.jpg'
import a2a from './jpeg/a2a.jpg'
import a3e from './jpeg/a3e.jpg'
import a3s from './jpeg/a3s.jpg'
import a3a from './jpeg/a3a.jpg'
import a4e from './jpeg/a4e.jpg'
import a4s from './jpeg/a4s.jpg'
import a4a from './jpeg/a4a.jpg'
import a5e from './jpeg/a5e.jpg'
import a5s from './jpeg/a5s.jpg'
import a5a from './jpeg/a5a.jpg'
import a6e from './jpeg/a6e.jpg'
import a6s from './jpeg/a6s.jpg'
import a6a from './jpeg/a6a.jpg'

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
