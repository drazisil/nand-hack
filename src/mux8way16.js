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
 * 8-way 16-bit Multiplexer chip
 * 
 * @param {byte16} inputA
 * @param {byte16} inputB
 * @param {byte16} inputC
 * @param {byte16} inputD
 * @param {byte16} inputE
 * @param {byte16} inputF
 * @param {byte16} inputG
 * @param {byte16} inputH
 * @param {boolean} sel1
 * @param {boolean} sel2
 * @param {boolean} sel3
 * @returns {byte16}
 */
export function mux8way16(
    inputA, inputB, inputC, inputD, inputE, inputF, inputG, inputH, sel1, sel2, sel3
) {

    const state0 = nand(sel1, nand(sel2, sel3)) // inputA
    const state1 = nand(sel1, and(not(sel2), sel3)) // inputB
    const state2 = nand(sel1, and(sel2, not(sel3)) )// inputC
    const state3 = nand(sel1, and(sel2, sel3)) // inputD

    const state4 = and(sel1, nand(sel2, sel3)) // inputE
    const state5 = and(sel1, and(not(sel2), sel3)) // inputF
    const state6 = and(sel1, and(sel2, not(sel3)) )// inputG
    const state7 = and(sel1, and(sel2, sel3)) // inputH

return mux16(
    mux16(
        mux16(inputA, inputB, sel3), // Input A/B
        mux16(inputC, inputD, sel3), // Input C/D
        sel2
    ),  // Input A/D
    mux16(
        mux16(inputE, inputF, sel3), // Input E/F
        mux16(inputG, inputH, sel3), // Input G/H
        sel2
    ),  // Input E/H
    sel1 
)
    

}