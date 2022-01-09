//@ts-check */
import { or } from './or.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

/**
 * 16-bit OR chip
 * 
 * @param {boolean} inputA00
 * @param {boolean} inputA01
 * @param {boolean} inputA02
 * @param {boolean} inputA03
 * @param {boolean} inputA04
 * @param {boolean} inputA05
 * @param {boolean} inputA06
 * @param {boolean} inputA07
 * @param {boolean} inputA08
 * @param {boolean} inputA09
 * @param {boolean} inputA10
 * @param {boolean} inputA11
 * @param {boolean} inputA12
 * @param {boolean} inputA13
 * @param {boolean} inputA14
 * @param {boolean} inputA15
 * @param {boolean} inputB00
 * @param {boolean} inputB01
 * @param {boolean} inputB02
 * @param {boolean} inputB03
 * @param {boolean} inputB04
 * @param {boolean} inputB05
 * @param {boolean} inputB06
 * @param {boolean} inputB07
 * @param {boolean} inputB08
 * @param {boolean} inputB09
 * @param {boolean} inputB10
 * @param {boolean} inputB11
 * @param {boolean} inputB12
 * @param {boolean} inputB13
 * @param {boolean} inputB14
 * @param {boolean} inputB15
 * @returns {byte16}
 */
export function or16(
    inputA00, inputA01, inputA02, inputA03, inputA04, inputA05, inputA06, inputA07,
    inputA08, inputA09, inputA10, inputA11, inputA12, inputA13, inputA14, inputA15,
    inputB00, inputB01, inputB02, inputB03, inputB04, inputB05, inputB06, inputB07,
    inputB08, inputB09, inputB10, inputB11, inputB12, inputB13, inputB14, inputB15
) {
    return [
        or(inputA00, inputB00), or(inputA01, inputB01), or(inputA02, inputB02), or(inputA03, inputB03),
        or(inputA04, inputB04), or(inputA05, inputB05), or(inputA06, inputB06), or(inputA07, inputB07),
        or(inputA08, inputB08), or(inputA09, inputB09), or(inputA10, inputB10), or(inputA11, inputB11),
        or(inputA12, inputB12), or(inputA13, inputB13), or(inputA14, inputB14), or(inputA15, inputB15)
    ]

}