import {and} from './and.js'
import { not } from './not.js'
import {xor} from './xor.js'
/**
 * Multiplexer chip
 * 
 * @description if sel == false return a else return b
 * @param {boolean} a
 * @param {boolean} b
 * @param {boolean} sel
 * @returns {boolean}
 */
export function mux(a,b, sel) {

    const state1 = and(a, not(sel)) // return a
    const state2 = and(b, sel) // return b

    return and(xor(state1, state2),xor(state1,state2))
}