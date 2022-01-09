//@ts-check
import assert from "assert"
import {dmux4way} from '../src/dmux4way.js'

describe('4-way De-Multiplexer chip', function () {

    describe('should return true', function () {
        const input = true
        it('on outA when sel1 == false and sel2 == false', function () {
            assert.deepStrictEqual(dmux4way(input, false, false), [true, false, false, false], `[${dmux4way(true, false, false)}]`)
        })
        it('on outB when sel1 == false and sel2 == true', function () {
            assert.deepStrictEqual(dmux4way(input, false, true), [false, true, false, false], `[${dmux4way(true, false, true)}]`)
        })
        it('on outC when sel1 == true and sel2 == false', function () {
            assert.deepStrictEqual(dmux4way(input, true, false), [false, false, true, false], `[${dmux4way(true, true, false)}]`)
        })
        it('on outD when sel1 == true and sel2 == true', function () {
            assert.deepStrictEqual(dmux4way(input, true, true), [false, false, false, true], `[${dmux4way(true, true, true)}]`)
        })
    
    })

    describe('should return false', function () {
        const input = false
        it('on outA when sel1 == false and sel2 == false', function () {
            assert.deepStrictEqual(dmux4way(input, false, false), [false, false, false, false], `[${dmux4way(true, false, false)}]`)
        })
        it('on outB when sel1 == false and sel2 == true', function () {
            assert.deepStrictEqual(dmux4way(input, false, true), [false, false, false, false], `[${dmux4way(true, false, true)}]`)
        })
        it('on outC when sel1 == true and sel2 == false', function () {
            assert.deepStrictEqual(dmux4way(input, true, false), [false, false, false, false], `[${dmux4way(true, true, false)}]`)
        })
        it('on outD when sel1 == true and sel2 == true', function () {
            assert.deepStrictEqual(dmux4way(input, true, true), [false, false, false, false], `[${dmux4way(true, true, true)}]`)
        })
    
    })

})