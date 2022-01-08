//@ts-check
import {and} from './and.js'
import {not} from './not.js'
import {or} from './or.js'
/**
 * XOR chip
 * 
 * @description return true if only a or b is true, else return false
 * @param {boolean} a
 * @param {boolean} b
 * @returns {boolean}
 */
export function xor(a, b) {
    return and(or(a, b), not(and(a,b)))
}