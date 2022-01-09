import { dmux} from './dmux.js'
import {and} from './and.js'
import { or } from './or.js'
import { not } from './not.js'
/**
 * @typedef {[boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]} bit8
 */

/**
 * 8-way 1-bit De-Muliplexer chip
 * 
 * @param {boolean} input
 * @param {boolean} sel1
 * @param {boolean} sel2
 * @param {boolean} sel3
 * @returns {bit8}
 */
export function dmux8way(input, sel1, sel2, sel3) {
    const state1 = and(input, and(not(sel1), not(or(sel2, sel3))))
    const state2 = and(input, and(not(sel1), and(not(sel2), sel3)))
    const state3 = and(input, and(not(sel1), and(sel2, not(sel3))))
    const state4 = and(input, and(not(sel1), and(sel2, sel3)))

    const state5 = and(input, and(sel1, not(or(sel2, sel3))))
    const state6 = and(input, and(sel1, and(not(sel2), sel3)))
    const state7 = and(input, and(sel1, and(sel2, not(sel3))))
    const state8 = and(input, and(sel1, and(sel2, sel3)))

    return [state1, state2, state3, state4, state5, state6, state7, state8]
}