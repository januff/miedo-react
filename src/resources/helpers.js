import * as THREE from 'three'
import flatten from 'lodash-es/flatten'
import { SVGLoader as loader } from './SVGLoader'
import './styles.css'
import * as images from './images/svg/persons'

const doubleSide = THREE.DoubleSide
const deg = THREE.Math.degToRad
const colors = ['#21242d', '#ea5158', '#0d4663', '#ffbcb7', '#2d4a3e', '#8bd8d2']

console.log(images);

let imgs = Object.keys({...images}).map(function(k){return {...images}[k]});

console.log(imgs);

const svgs = imgs.map( url =>
  new Promise(resolve =>
    new loader().load(url, shapes =>
      resolve(flatten(shapes.map((group, index) => group.toShapes(true).map(shape => ({ shape, color: group.color, index })))))
    )
  )
)

export { svgs, colors, deg, doubleSide }
