//@ts-check
import assert from "assert"
import {dmux4way} from '../src/dmux4way.js'

describe('4-way De-Multiplexer chip', function () {

    it('should return on outA when sel1 == false and sel2 == false', function () {
        assert.deepStrictEqual(dmux4way(true, false, false), [true, false, false, false], `[${dmux4way(true, false, false)}]`)
    })
    it('should return on outB when sel1 == false and sel2 == true', function () {
        assert.deepStrictEqual(dmux4way(true, false, true), [false, true, false, false], `[${dmux4way(true, false, true)}]`)
    })
    it('should return on outC when sel1 == true and sel2 == false', function () {
        assert.deepStrictEqual(dmux4way(true, true, false), [false, false, true, false], `[${dmux4way(true, true, false)}]`)
    })
    it('should return on outD when sel1 == true and sel2 == true', function () {
        assert.deepStrictEqual(dmux4way(true, true, true), [false, false, false, true], `[${dmux4way(true, true, true)}]`)
    })
})