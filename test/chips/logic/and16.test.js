import assert from 'assert'
import { and16 } from '../../../src/chips/logic/and16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('16-bit AND chip', function () {
    describe('should return output(0...15) == true', function () {
        it('when input1(0...16) is true and input2(0...15) is true', function () {

            /** @type {byte16} */
            const byte16true = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]

            assert.deepStrictEqual(and16(byte16true, byte16true), byte16true, `[${byte16true}],  [${byte16true}]`)
        })

    })

    describe('should return output(0...15) == false', function () {
            it('when input1(0...15) is false and input2(0...15) is true', function () {

                /** @type {byte16} */
                const byte16true = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
                /** @type {byte16} */
                const byte16false = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]



                assert.deepStrictEqual(and16(byte16false, byte16true), byte16false, `[${byte16false}],  [${byte16true}]`)


            })
        
    })

})