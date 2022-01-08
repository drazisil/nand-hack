//@ts-check */
import {and} from './and.js'
/**
 * 16-bit AND chip
 * 
 * @param {boolean} inputA0
 * @param {boolean} inputA1
 * @param {boolean} inputA2
 * @param {boolean} inputA3
 * @param {boolean} inputA4
 * @param {boolean} inputA5
 * @param {boolean} inputA6
 * @param {boolean} inputA7
 * @param {boolean} inputB0
 * @param {boolean} inputB1
 * @param {boolean} inputB2
 * @param {boolean} inputB3
 * @param {boolean} inputB4
 * @param {boolean} inputB5
 * @param {boolean} inputB6
 * @param {boolean} inputB7
 * @returns {boolean}
 */
export function and16(inputA0,inputA1,inputA2,inputA3,inputA4,inputA5,inputA6,inputA7,inputB0,inputB1,inputB2,inputB3,inputB4,inputB5,inputB6,inputB7) {
    const stateA01 = and(inputA0, inputA1)
    const stateA23 = and(inputA2, inputA3)
    const stateA45 = and(inputA4, inputA5)
    const stateA67 = and(inputA6, inputA7)

    const stateAstage1 = and(stateA01, stateA23)
    const stateAstage2 = and(stateA45, stateA67)

    const stateA = and(stateAstage1, stateAstage2) // if all of A are true

    const stateB01 = and(inputB0, inputB1)
    const stateB23 = and(inputB2, inputB3)
    const stateB45 = and(inputB4, inputB5)
    const stateB67 = and(inputB6, inputB7)

    const stateBstage1 = and(stateB01, stateB23)
    const stateBstage2 = and(stateB45, stateB67)

    const stateB = and(stateBstage1, stateBstage2) // if all of B are true

    return and(stateA, stateB)

}