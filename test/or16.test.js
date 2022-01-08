//@ts-check
import assert from 'assert'
import { or16 } from '../src/or16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('16-bit OR chip', function () {
    describe('should return true', function () {
        for (let i1 = 0; i1 <= 15; i1++) {
            /** @type {byte} */
            const input1 = [false, false, false, false, false, false, false, false]
            input1[i1] = true
            for (let i2 = 0; i2 <= 15; i2++) {
                it(`when input1(${i1}) is true or input2(${12}) is true`, function () {

                    /** @type {byte} */
                    const input2 = [false, false, false, false, false, false, false, false]
                    input2[i2] = true
                    /** @type {byte16} */
                    const input = [...input1, ...input2]

                    assert(or16(...input), `[${input1}],  [${input2}]`)
                })
            }

        }
    })
    describe('should return false', function () {
        it('when input1(0...15) is true and input2(0...15) is false', function () {
            /** @type {byte} */
            const input1 = [false, false, false, false, false, false, false, false]

            /** @type {byte} */
            const input2 = [false, false, false, false, false, false, false, false]
            /** @type {byte16} */
            const input = [...input1, ...input2]

            assert(!or16(...input), `[${input1}],  [${input2}]`)
        })
    })
})