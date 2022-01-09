import {nand} from './nand.js'
/**
 * NOT chip
 * 
 * @description return true if input == false else return false
 * @param {boolean} input
 * @returns {boolean}
 */
export function not(input) {
    return nand(input, input)
}