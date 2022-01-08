//@ts-check
import assert from 'assert'
import { not16 } from '../src/not16.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('16-bit NOT chip', function () {
    it('should return out(0...15) == true', function () {
        /** @type {byte} */
        const input1 = [false, false, false, false, false, false, false, false]

        /** @type {byte} */
        const output1 = [true, true, true, true, true, true, true, true]

        /** @type {byte16} */
        const input = [...input1, ...input1]

        /** @type {byte16} */
        const output = [...output1, ...output1]

        assert.deepStrictEqual(not16(...input), [...output], `[${input}],  [${output}]`)
    })
})
