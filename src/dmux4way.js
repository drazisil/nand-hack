//@ts-check
import { dmux} from './dmux.js'
import {and} from './and.js'
import { or } from './or.js'
import { not } from './not.js'
/**
 * @typedef {[boolean, boolean, boolean, boolean]} bit4
 */

/**
 * 4-way 1-bit Demuliplexer chip
 * 
 * @param {boolean} input
 * @param {boolean} sel1
 * @param {boolean} sel2
 * @returns {bit4}
 */
export function dmux4way(input, sel1, sel2) {
    const state1 = and(input, not(or(sel1, sel2)))
    const state2 = and(input, and(not(sel1), sel2))
    const state3 = and(input, and(sel1, not(sel2)))
    const state4 = and(input, and(sel1, sel2))

    return [state1, state2, state3, state4]
}