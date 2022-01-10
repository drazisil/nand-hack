import assert from "assert"
import { inc16 } from '../../../src/chips/adders/inc16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('16-bit Inc chip', function () {

    /** @type {byte16} */
    const byte16b =     [true, true, true, false, true, true, true, false, true, true, true, true, false, true, true, true]

    /** @type {byte16} */
    const byte16bout1 = [true, true, true, false, true, true, true, false, true, true, true, true, true, false, false, false]

    it('should return byte16out when input == byte16a', function () {
        assert.deepStrictEqual(inc16(byte16b), byte16bout1)
    })


})