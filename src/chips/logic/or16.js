import { or } from './or.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

/**
 * 16-bit OR chip
 * 
 * @param {byte16} inputA 16-bit input
 * @param {byte16} inputB 16-bit input
 * @returns {byte16}
 */
export function or16(
    inputA, inputB
) {
    return [
        or(inputA[0], inputB[0]), or(inputA[1], inputB[1]), or(inputA[2], inputB[2]), or(inputA[3], inputB[3]),
        or(inputA[4], inputB[4]), or(inputA[5], inputB[5]), or(inputA[6], inputB[6]), or(inputA[7], inputB[7]),
        or(inputA[8], inputB[8]), or(inputA[9], inputB[9]), or(inputA[10], inputB[10]), or(inputA[11], inputB[11]),
        or(inputA[12], inputB[12]), or(inputA[13], inputB[13]), or(inputA[14], inputB[14]), or(inputA[15], inputB[15])
    ]

}