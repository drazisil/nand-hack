// @ts-check
import assert from "assert"
import { mux8way16} from '../src/mux8way16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('8-way 16-bit Multiplexer chip', function () {

            /** @type {byte16} */
            const byte16stream1 = [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
            /** @type {byte16} */
            const byte16stream2 = [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
            /** @type {byte16} */
            const byte16stream3 = [true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false]
            /** @type {byte16} */
            const byte16stream4 = [false, false, true, true, false, false, true, true, false, false, true, true, false, false, true, true]

            /** @type {byte16} */
            const byte16stream5 = [true, true, true, false, false, false, true, true, true, false, false, false, true, true, true, false]
            /** @type {byte16} */
            const byte16stream6 = [false, false, false, true, true, true, false, false, false, true, true, true, false, false, false, true]
            /** @type {byte16} */
            const byte16stream7 = [true, true, true, false, false, false, false, false, false, false, false, false, false, true, true, true]
            /** @type {byte16} */
            const byte16stream8 = [false, false, false, true, true, true, true, true, false, false, true, true, true, false, false, false]


            it('should return byte16stream1 if sel1 == false and sel2 == false and sel3 == false', function () {
        assert.deepStrictEqual(mux8way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, 
            byte16stream5, byte16stream6, byte16stream7, byte16stream8, false, false, false), byte16stream1)
    })
    it('should return byte16stream2 if sel1 == false and sel2 == false and sel3 == true', function () {
        assert.deepStrictEqual(mux8way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, 
            byte16stream5, byte16stream6, byte16stream7, byte16stream8, false, false, true), byte16stream2)
    })

    it('should return byte16stream3 if sel1 == false and sel2 == true and sel3 == false', function () {
        assert.deepStrictEqual(mux8way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, 
            byte16stream5, byte16stream6, byte16stream7, byte16stream8, false, true, false), byte16stream3)
    })
    it('should return byte16stream4 if sel1 == false and sel2 == true and sel3 == true', function () {
        assert.deepStrictEqual(mux8way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, 
            byte16stream5, byte16stream6, byte16stream7, byte16stream8, false, true, true), byte16stream4)
    })

    it('should return byte16stream5 if sel1 == true and sel2 == false and sel3 == false', function () {
        assert.deepStrictEqual(mux8way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, 
            byte16stream5, byte16stream6, byte16stream7, byte16stream8, true, false, false), byte16stream5)
    })
    it('should return byte16stream6 if sel1 == true and sel2 == false and sel3 == true', function () {
        assert.deepStrictEqual(mux8way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, 
            byte16stream5, byte16stream6, byte16stream7, byte16stream8, true, false, true), byte16stream6)
    })

    it('should return byte16stream7 if sel1 == true and sel2 == true and sel3 == false', function () {
        assert.deepStrictEqual(mux8way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, 
            byte16stream5, byte16stream6, byte16stream7, byte16stream8, true, true, false), byte16stream7)
    })
    it('should return byte16stream8 if sel1 == true and sel2 == true and sel3 == true', function () {
        assert.deepStrictEqual(mux8way16(byte16stream1, byte16stream2, byte16stream3, byte16stream4, 
            byte16stream5, byte16stream6, byte16stream7, byte16stream8, true, true, true), byte16stream8)
    })


})