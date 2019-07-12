/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import cellConfig from './cell.config'
import WrapCell from './WrapCell'

const Eles ={}

for(let k in cellConfig){
    Eles[k] = WrapCell(k,cellConfig[k]);
}


export default Eles