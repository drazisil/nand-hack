// @ts-check
import {nand} from './nand.js'
import {not} from './not.js'
/**
 * AND chip
 * 
 * @description return true if a and b == true, else return false
 * @param {boolean} a
 * @param {boolean} b
 * @returns {boolean}
 */
export function and(a, b) {
    return not(nand(a, b))
}