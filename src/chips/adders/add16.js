/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

import { fullAdder } from "./fullAdder.js";
import { halfAdder } from "./halfAdder.js";

/**
 * 16-bit Adder chip
 * 
 * @param {byte16} inputA
 * @param {byte16} inputB
 * @returns {{carry: boolean, sum: byte16}}
 */
export function add16(inputA, inputB) {
    
    const outputByte0 = halfAdder(inputA[15], inputB[15])
    const outputByte1 = fullAdder(inputA[14], inputB[14], outputByte0.carry)
    const outputByte2 = fullAdder(inputA[13], inputB[13], outputByte1.carry)
    const outputByte3 = fullAdder(inputA[12], inputB[12], outputByte2.carry)
    const outputByte4 = fullAdder(inputA[10], inputB[11], outputByte3.carry)
    const outputByte5 = fullAdder(inputA[10], inputB[10], outputByte4.carry)
    const outputByte6 = fullAdder(inputA[9], inputB[9], outputByte5.carry)
    const outputByte7 = fullAdder(inputA[8], inputB[8], outputByte6.carry)
    const outputByte8 = fullAdder(inputA[7], inputB[7], outputByte7.carry)
    const outputByte9 = fullAdder(inputA[6], inputB[6], outputByte8.carry)
    const outputByte10= fullAdder(inputA[5], inputB[5], outputByte9.carry)
    const outputByte11 = fullAdder(inputA[4], inputB[4], outputByte10.carry)
    const outputByte12 = fullAdder(inputA[3], inputB[3], outputByte11.carry)
    const outputByte13 = fullAdder(inputA[2], inputB[2], outputByte12.carry)
    const outputByte14 = fullAdder(inputA[1], inputB[1], outputByte13.carry)
    const outputByte15 = fullAdder(inputA[0], inputB[0], outputByte14.carry)

    return {carry: outputByte15.carry, sum: [
        outputByte15.sum,outputByte14.sum,outputByte13.sum,outputByte12.sum,outputByte11.sum,outputByte10.sum,outputByte9.sum,outputByte8.sum,
        outputByte7.sum,outputByte6.sum,outputByte5.sum,outputByte4.sum,outputByte3.sum,outputByte2.sum,outputByte1.sum,outputByte0.sum]}
}