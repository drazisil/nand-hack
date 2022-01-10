import assert from "assert";
import { alu } from '../../../src/chips/core/alu.js'

/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

describe('ALU Chip', function () {

    /** @type {byte16} */
    const byte16zero = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

    /** @type {byte16} */
    const byte16one = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true]

    /** @type {byte16} */
    const byte16two = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false]

    it('should return {out == 0, zr == 0, ng == 0} when x == byte16zero, y == byte16zero, zx == true, nx == false, zy == 1, ny == 0, f == 1, no == 0', function () {
        assert.deepStrictEqual(alu(byte16one, byte16one, true, false, true, false, true, false), { out: byte16zero, zr: false, ng: false }, `[${alu(byte16one, byte16one, true, false, true, false, true, false).out}]`)
    })
})