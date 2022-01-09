import assert from "assert"
import { mux4way16} from '../../../src/chips/logic/mux4way16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('4-way 16-bit Multiplexer chip', function () {

            /** @type {byte16} */
            const byte16stream1 = [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
            /** @type {byte16} */
            const byte16stream2 = [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            /** @type {byte16} */
            const byte16stream3 = [true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false]
            /** @type {byte16} */
            const byte16stream4 = [false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true]

    it('should return byte16stream1 if sel1 == false and sel2 == false', function () {
        assert.deepStrictEqual(mux4way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, false, false), byte16stream1)
    })
    it('should return byte16stream2 if sel1 == false and sel2 == true', function () {
        assert.deepStrictEqual(mux4way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, false, true), byte16stream2)
    })

    it('should return byte16stream3 if sel1 == true and sel2 == false', function () {
        assert.deepStrictEqual(mux4way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, true, false), byte16stream3)
    })
    it('should return byte16stream4 if sel1 == true and sel2 == true', function () {
        assert.deepStrictEqual(mux4way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, true, true), byte16stream4)
    })

})