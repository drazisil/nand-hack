//@ts-check */
import {or} from './or.js'
import {not} from './not.js'
import {and} from './and.js'
/**
 * 16-bit NOT chip
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
export function not16(inputA0,inputA1,inputA2,inputA3,inputA4,inputA5,inputA6,inputA7,inputB0,inputB1,inputB2,inputB3,inputB4,inputB5,inputB6,inputB7) {
    const stateA01 = or(inputA0, inputA1)
    const stateA23 = or(inputA2, inputA3)
    const stateA45 = or(inputA4, inputA5)
    const stateA67 = or(inputA6, inputA7)

    const stateAstage1 = or(stateA01, stateA23)
    const stateAstage2 = or(stateA45, stateA67)

    const stateA = or(stateAstage1, stateAstage2) // if any of B are true

    const stateB01 = or(inputB0, inputB1)
    const stateB23 = or(inputB2, inputB3)
    const stateB45 = or(inputB4, inputB5)
    const stateB67 = or(inputB6, inputB7)

    const stateBstage1 = or(stateB01, stateB23)
    const stateBstage2 = or(stateB45, stateB67)

    const stateB = or(stateBstage1, stateBstage2) // if any of B are true

    return not(or(stateA, stateB))

}