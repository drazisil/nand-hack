import assert from 'assert'
import { or16 } from '../../../src/chips/logic/or16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('16-bit OR chip', function () {
    describe('should return output(0...15) == true', function () {

        /** @type {byte16} */
        const byte16true = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
        /** @type {byte16} */
        const byte16false = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

        it('when input1(0...16) is true and input2(0...15) is true', function () {


            assert.deepStrictEqual(or16(byte16true, byte16true), byte16true, `[${byte16true}],  [${byte16true}]`)
        })

        it('when input1(0...15) is false and input2(0...15) is true', function () {




            assert.deepStrictEqual(or16(byte16false, byte16true), byte16true, `[${byte16false}],  [${byte16true}]`)


        })


        it('when input1(0...15) is true and input2(0...15) is false', function () {




            assert.deepStrictEqual(or16(byte16true, byte16false), byte16true, `[${byte16true}],  [${byte16false}]`)


        })


    })

    describe('should return output(0...15) == false', function () {
        /** @type {byte16} */
        const byte16true = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
        /** @type {byte16} */
        const byte16false = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

        it('when input1(0...15) is false and input2(0...15) is false', function () {




            assert.deepStrictEqual(or16(byte16false, byte16false), byte16false, `[${byte16false}]`)


        })

    })

})