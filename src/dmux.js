// @ts-check
import {and} from './and.js'
import { not } from './not.js'
/**
 * De-multiplexer chip
 * 
 * @description return {a: input, b: false} if sel == false else return {a: false, b: input}
 * @param {boolean} input
 * @param {boolean} sel
 * @returns {{a: boolean, b: boolean}}
 */
export function dmux(input, sel) {
    return {a: and(input, not(sel)), b: and(input, sel)}

}