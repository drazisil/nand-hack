//@ts-check */
import { and } from './and.js'
import { mux16 } from './mux16.js'
import { nand } from './nand.js'
import { not } from './not.js'


/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

/**
 * 4-way 16-bit Multiplexer chip
 * 
 * @param {byte16} inputA
 * @param {byte16} inputB
 * @param {byte16} inputC
 * @param {byte16} inputD
 * @param {boolean} sel1
 * @param {boolean} sel2
 * @returns {byte16}
 */
export function mux4way16(
    inputA, inputB, inputC, inputD, sel1, sel2
) {

    const state0 = nand(sel1, sel2) // inputA
    const state1 = and(not(sel1), sel2) // inputB
    const state2 = and(sel1, not(sel2)) // inputC
    const state3 = and(sel1, sel2) // inputD

    const out1 = mux16(inputA, inputB, sel2)
    const out2 = mux16(out1, inputC, sel1)
    const out3 = mux16(out2, inputD, and(sel1, sel2))

    return [...out3]

}