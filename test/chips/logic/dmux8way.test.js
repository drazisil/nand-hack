import assert from "assert"
import { dmux8way } from '../../../src/chips/logic/dmux8way.js'

describe('8-way De-Multiplexer chip', function () {
    describe('should return true', function () {
        const input = true
        it('on outA when sel1 == false and sel2 == false and sel3 == false', function () {
            assert.deepStrictEqual(dmux8way(input, false, false, false), [true, false, false, false, false, false, false, false], `[${dmux8way(true, false, false, false)}]`)
        })
        it('on outB when sel1 == false and sel2 == false and sel3 == true', function () {
            assert.deepStrictEqual(dmux8way(input, false, false, true), [false, true, false, false, false, false, false, false], `[${dmux8way(true, false, false, true)}]`)
        })
        it('on outC when sel1 == false and sel2 == true and sel3 == false', function () {
            assert.deepStrictEqual(dmux8way(input, false, true, false), [false, false, true, false, false, false, false, false], `[${dmux8way(true, false, true, false)}]`)
        })
        it('on outD when sel1 == false and sel2 == true and sel3 == true', function () {
            assert.deepStrictEqual(dmux8way(input, false, true, true), [false, false, false, true, false, false, false, false], `[${dmux8way(true, false, true, true)}]`)
        })

        it('on outE when sel1 == true and sel2 == false and sel3 == false', function () {
            assert.deepStrictEqual(dmux8way(input, true, false, false), [false, false, false, false, true, false, false, false], `[${dmux8way(true, true, false, false)}]`)
        })
        it('on outF when sel1 == true and sel2 == false and sel3 == true', function () {
            assert.deepStrictEqual(dmux8way(input, true, false, true), [false, false, false, false, false, true, false, false], `[${dmux8way(true, true, false, true)}]`)
        })
        it('on outG when sel1 == true and sel2 == true and sel3 == false', function () {
            assert.deepStrictEqual(dmux8way(input, true, true, false), [false, false, false, false, false, false, true, false], `[${dmux8way(true, true, true, false)}]`)
        })
        it('on outH when sel1 == true and sel2 == true and sel3 == true', function () {
            assert.deepStrictEqual(dmux8way(input, true, true, true), [false, false, false, false, false, false, false, true], `[${dmux8way(true, true, true, true)}]`)
        })

    })

    describe('should return false', function () {
        const input = false
        it('on outA when sel1 == false and sel2 == false and sel3 == false', function () {
            assert.deepStrictEqual(dmux8way(input, false, false, false), [false, false, false, false, false, false, false, false], `[${dmux8way(true, false, false, false)}]`)
        })
        it('on outB when sel1 == false and sel2 == false and sel3 == true', function () {
            assert.deepStrictEqual(dmux8way(input, false, false, true), [false, false, false, false, false, false, false, false], `[${dmux8way(true, false, false, true)}]`)
        })
        it('on outC when sel1 == false and sel2 == true and sel3 == false', function () {
            assert.deepStrictEqual(dmux8way(input, false, true, false), [false, false, false, false, false, false, false, false], `[${dmux8way(true, false, true, false)}]`)
        })
        it('on outD when sel1 == false and sel2 == true and sel3 == true', function () {
            assert.deepStrictEqual(dmux8way(input, false, true, true), [false, false, false, false, false, false, false, false], `[${dmux8way(true, false, true, true)}]`)
        })

        it('on outE when sel1 == true and sel2 == false and sel3 == false', function () {
            assert.deepStrictEqual(dmux8way(input, true, false, false), [false, false, false, false, false, false, false, false], `[${dmux8way(true, true, false, false)}]`)
        })
        it('on outF when sel1 == true and sel2 == false and sel3 == true', function () {
            assert.deepStrictEqual(dmux8way(input, true, false, true), [false, false, false, false, false, false, false, false], `[${dmux8way(true, true, false, true)}]`)
        })
        it('on outG when sel1 == true and sel2 == true and sel3 == false', function () {
            assert.deepStrictEqual(dmux8way(input, true, true, false), [false, false, false, false, false, false, false, false], `[${dmux8way(true, true, true, false)}]`)
        })
        it('on outH when sel1 == true and sel2 == true and sel3 == true', function () {
            assert.deepStrictEqual(dmux8way(input, true, true, true), [false, false, false, false, false, false, false, false], `[${dmux8way(true, true, true, true)}]`)
        })

    })

})