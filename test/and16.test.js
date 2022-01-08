//@ts-check
import assert from 'assert'
import { and16 } from '../src/and16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('16-bit AND chip', function () {
    describe('should return true', function () {
        it('when input1(0...16) is true and input2(0...15) is true', function () {

            /** @type {byte} */
            const input1 = [true, true, true, true, true, true, true, true]
            /** @type {byte} */
            const input2 = [true, true, true, true, true, true, true, true]
            /** @type {byte16} */
            const input = [...input1, ...input2]

            assert(and16(...input), `[${input1}],  [${input2}]`)
        })

    })

    describe('should return false', function () {
        for (let i1 = 0; i1 <= 15; i1++) {
            it('when any of input1(0...15) is false or any of input2(0...15) is false', function () {

                /** @type {byte} */
                const input1 = [true, true, true, true, true, true, true, true]
                input1[i1] = false
                for (let i2 = 0; i2 <= 15; i2++) {

                    /** @type {byte} */
                    const input2 = [true, true, true, true, true, true, true, true]
                    input2[i2] = false
                    /** @type {byte16} */
                    const input = [...input1, ...input2]

                    assert(!and16(...input), `[${input1}],  [${input2}]`)

                }
            })
        }
    })

})