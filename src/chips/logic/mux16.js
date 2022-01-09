import { mux } from './mux.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

/**
 * 16-bit Multiplexer chip
 * 
 * @param {byte16} inputA
 * @param {byte16} inputB
 * @param {boolean} sel
 * @returns {byte16}
 */
export function mux16(
    inputA, inputB, sel
) {
    return [
        mux(inputA[0], inputB[0], sel),mux(inputA[1], inputB[1], sel),mux(inputA[2], inputB[2], sel),mux(inputA[3], inputB[3], sel),
        mux(inputA[4], inputB[4], sel),mux(inputA[5], inputB[5], sel),mux(inputA[6], inputB[6], sel),mux(inputA[7], inputB[7], sel),
        mux(inputA[8], inputB[8], sel),mux(inputA[9], inputB[9], sel),mux(inputA[10], inputB[10], sel),mux(inputA[11], inputB[11], sel),
        mux(inputA[12], inputB[12], sel),mux(inputA[13], inputB[13], sel),mux(inputA[14], inputB[14], sel),mux(inputA[15], inputB[15], sel)
    ]

}