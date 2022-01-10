/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

import { fullAdder } from "./fullAdder.js";
import { halfAdder } from "./halfAdder.js";

/**
 * 16-bit Inc chip
 * 
 * @param {byte16} input
 * @returns {byte16}
 */
export function inc16(input) {

    /** @type {byte16} */
    const plusOne = [false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, true
    ]

    const outputByte0 = halfAdder(input[15], plusOne[15])
    const outputByte1 = fullAdder(input[14], plusOne[14], outputByte0.carry)
    const outputByte2 = fullAdder(input[13], plusOne[13], outputByte1.carry)
    const outputByte3 = fullAdder(input[12], plusOne[12], outputByte2.carry)
    const outputByte4 = fullAdder(input[10], plusOne[11], outputByte3.carry)
    const outputByte5 = fullAdder(input[10], plusOne[10], outputByte4.carry)
    const outputByte6 = fullAdder(input[9], plusOne[9], outputByte5.carry)
    const outputByte7 = fullAdder(input[8], plusOne[8], outputByte6.carry)
    const outputByte8 = fullAdder(input[7], plusOne[7], outputByte7.carry)
    const outputByte9 = fullAdder(input[6], plusOne[6], outputByte8.carry)
    const outputByte10 = fullAdder(input[5], plusOne[5], outputByte9.carry)
    const outputByte11 = fullAdder(input[4], plusOne[4], outputByte10.carry)
    const outputByte12 = fullAdder(input[3], plusOne[3], outputByte11.carry)
    const outputByte13 = fullAdder(input[2], plusOne[2], outputByte12.carry)
    const outputByte14 = fullAdder(input[1], plusOne[1], outputByte13.carry)
    const outputByte15 = fullAdder(input[0], plusOne[0], outputByte14.carry)

    return [
        outputByte15.sum, outputByte14.sum, outputByte13.sum, outputByte12.sum, outputByte11.sum, outputByte10.sum, outputByte9.sum, outputByte8.sum,
        outputByte7.sum, outputByte6.sum, outputByte5.sum, outputByte4.sum, outputByte3.sum, outputByte2.sum, outputByte1.sum, outputByte0.sum]

}