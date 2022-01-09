import assert from "assert"
import { halfAdder} from '../../../src/chips/adders/halfAdder.js'

describe('Half Adder chip', function () {
    it('should return {carry: false, sum: false} when a == false and b == false', function () {
        assert.deepStrictEqual(halfAdder(false, false), {carry: false, sum: false})
    })
    it('should return {carry: false, sum: true} when a == false and b == true', function () {
        assert.deepStrictEqual(halfAdder(false, true), {carry: false, sum: true})
    })
    it('should return {carry: false, sum: true} when a == true and b == false', function () {
        assert.deepStrictEqual(halfAdder(true, false), {carry: false, sum: true})
    })
    it('should return {carry: true, sum: false} when a == true and b == true', function () {
        assert.deepStrictEqual(halfAdder(true, true), {carry: true, sum: false})
    })
})