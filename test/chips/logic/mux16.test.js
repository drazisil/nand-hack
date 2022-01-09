import assert from "assert"
import { mux16} from '../../../src/chips/logic/mux16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('16-bit Multiplexer chip', function () {

            /** @type {byte16} */
            const byte16stream1 = [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
            /** @type {byte16} */
            const byte16stream2 = [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]

    it('should return byte16strea1 if sel == false', function () {
        assert.deepStrictEqual(mux16(byte16stream1, byte16stream2, false), byte16stream1)
    })
    it('should return byte16stream2 if sel == true', function () {
        assert.deepStrictEqual(mux16(byte16stream1, byte16stream2, true), byte16stream2)
    })
})