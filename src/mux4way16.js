//@ts-check */
import { and } from './and.js'
import { mux16 } from './mux16.js'
import { nand } from './nand.js'
import { not } from './not.js'


/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

/**
 * 16-bit Multiplexer chip
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
 * @param {boolean} inputC00
 * @param {boolean} inputC01
 * @param {boolean} inputC02
 * @param {boolean} inputC03
 * @param {boolean} inputC04
 * @param {boolean} inputC05
 * @param {boolean} inputC06
 * @param {boolean} inputC07
 * @param {boolean} inputC08
 * @param {boolean} inputC09
 * @param {boolean} inputC10
 * @param {boolean} inputC11
 * @param {boolean} inputC12
 * @param {boolean} inputC13
 * @param {boolean} inputC14
 * @param {boolean} inputC15
 * @param {boolean} inputD00
 * @param {boolean} inputD01
 * @param {boolean} inputD02
 * @param {boolean} inputD03
 * @param {boolean} inputD04
 * @param {boolean} inputD05
 * @param {boolean} inputD06
 * @param {boolean} inputD07
 * @param {boolean} inputD08
 * @param {boolean} inputD09
 * @param {boolean} inputD10
 * @param {boolean} inputD11
 * @param {boolean} inputD12
 * @param {boolean} inputD13
 * @param {boolean} inputD14
 * @param {boolean} inputD15
 * @param {boolean} sel1
 * @param {boolean} sel2
 * @returns {byte16}
 */
export function mux4way16(
    inputA00, inputA01, inputA02, inputA03, inputA04, inputA05, inputA06, inputA07,
    inputA08, inputA09, inputA10, inputA11, inputA12, inputA13, inputA14, inputA15,
    inputB00, inputB01, inputB02, inputB03, inputB04, inputB05, inputB06, inputB07,
    inputB08, inputB09, inputB10, inputB11, inputB12, inputB13, inputB14, inputB15,
    inputC00, inputC01, inputC02, inputC03, inputC04, inputC05, inputC06, inputC07,
    inputC08, inputC09, inputC10, inputC11, inputC12, inputC13, inputC14, inputC15,
    inputD00, inputD01, inputD02, inputD03, inputD04, inputD05, inputD06, inputD07,
    inputD08, inputD09, inputD10, inputD11, inputD12, inputD13, inputD14, inputD15,
    sel1, sel2
) {

    /** @type {byte16} */
    const inputA = [inputA00, inputA01, inputA02, inputA03, inputA04, inputA05, inputA06, inputA07,
        inputA08, inputA09, inputA10, inputA11, inputA12, inputA13, inputA14, inputA15]

    /** @type {byte16} */
    const inputB = [inputB00, inputB01, inputB02, inputB03, inputB04, inputB05, inputB06, inputB07,
        inputB08, inputB09, inputB10, inputB11, inputB12, inputB13, inputB14, inputB15]

    /** @type {byte16} */
    const inputC = [inputC00, inputC01, inputC02, inputC03, inputC04, inputC05, inputC06, inputC07,
        inputC08, inputC09, inputC10, inputC11, inputC12, inputC13, inputC14, inputC15]

    /** @type {byte16} */
    const inputD = [inputD00, inputD01, inputD02, inputD03, inputD04, inputD05, inputD06, inputD07,
        inputD08, inputD09, inputD10, inputD11, inputD12, inputD13, inputD14, inputD15]

    const state0 = nand(sel1, sel2) // inputA
    const state1 = and(not(sel1), sel2) // inputB
    const state2 = and(sel1, not(sel2)) // inputC
    const state3 = and(sel1, sel2) // inputD

    const out1 = mux16(...inputA, ...inputB, sel2)
    const out2 = mux16(...out1, ...inputC, sel1)
    const out3 = mux16(...out2, ...inputD, and(sel1, sel2))

    return [...out3]

}