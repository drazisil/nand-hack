import assert from "assert"
import {dmux} from '../src/dmux.js'

describe('De-Multiplexer chip', function () {
    it('should return {a:in, b:false} when sel == false', function () {
        assert.deepStrictEqual(dmux(true, false), {a: true, b: false})
    })
    it('should return {a:false, b:in} when sel == true', function () {
        assert.deepStrictEqual(dmux(true, true), {a: false, b: true})
    })
})