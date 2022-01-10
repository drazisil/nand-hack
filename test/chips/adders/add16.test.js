import assert from "assert"
import { add16 } from '../../../src/chips/adders/add16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('16-bit Adder chip', function () {

    /** @type {byte16} */
    const byte16a = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]


    /** @type {byte16} */
    const byte16bout = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false]

    /** @type {byte16} */
    const byte16b =     [true, true, true, false, true, true, true, false, true, true, true, true, false, true, true, true]

    /** @type {byte16} */
    const byte16bout1 = [true, true, true, false, true, true, true, false, true, true, true, true, false, true, true, false]

    it('should return {carry: true, sum: byte16out} when a == byte16a and b == byte16a', function () {
        assert.deepStrictEqual(add16(byte16a, byte16a), { carry: true, sum: byte16bout })
    })


    it('should return {carry: true, sum: byte16out1} when a == byte16b and b == byte16a', function () {
        assert.deepStrictEqual(add16(byte16b, byte16a), { carry: true, sum: byte16bout1 }, `[${add16(byte16b, byte16a).sum}]`)
    })

})