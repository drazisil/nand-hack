import { not } from './not.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

/**
 * 16-bit NOT chip
 * 
 * @param {boolean} input00
 * @param {boolean} input01
 * @param {boolean} input02
 * @param {boolean} input03
 * @param {boolean} input04
 * @param {boolean} input05
 * @param {boolean} input06
 * @param {boolean} input07
 * @param {boolean} input08
 * @param {boolean} input09
 * @param {boolean} input10
 * @param {boolean} input11
 * @param {boolean} input12
 * @param {boolean} input13
 * @param {boolean} input14
 * @param {boolean} input15
 * @returns {byte16}
 */
export function not16(input00, input01, input02, input03, input04, input05, input06, input07, input08, input09, input10, input11, input12, input13, input14, input15) {

    return [not(input00), not(input01), not(input02), not(input03), not(input04), not(input05), not(input06), not(input07), not(input08), not(input09), not(input10), not(input11), not(input12), not(input13), not(input14), not(input15)]

}