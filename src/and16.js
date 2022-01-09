//@ts-check */
import { and } from './and.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

/**
 * 16-bit AND chip
 * 
 * @param {byte16} inputA 16-bit array of boolean values
 * @param {byte16} inputB 16-bit array of boolean values
 * @returns {byte16}
 */
export function and16(
    inputA, inputB
) {
    return [
        and(inputA[0], inputB[0]),and(inputA[1], inputB[1]),and(inputA[2], inputB[2]),and(inputA[3], inputB[3]),
        and(inputA[4], inputB[4]),and(inputA[5], inputB[5]),and(inputA[6], inputB[6]),and(inputA[7], inputB[7]),
        and(inputA[8], inputB[8]),and(inputA[9], inputB[9]),and(inputA[10], inputB[10]),and(inputA[11], inputB[11]),
        and(inputA[12], inputB[12]),and(inputA[13], inputB[13]),and(inputA[14], inputB[14]),and(inputA[15], inputB[15])
    ]

}