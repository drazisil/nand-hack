import assert from "assert"
import { fullAdder} from '../../../src/chips/adders/fullAdder.js'

describe('Full Adder chip', function () {
    it('should return {carry: false, sum: false} when a == false and b == false and c == false', function () {
        assert.deepStrictEqual(fullAdder(false, false, false), {carry: false, sum: false})
    })
    it('should return {carry: false, sum: true} when a == false and b == false and c == true', function () {
        assert.deepStrictEqual(fullAdder(false, false, true), {carry: false, sum: true})
    })
    it('should return {carry: false, sum: true} when a == false and b == true and c == false', function () {
        assert.deepStrictEqual(fullAdder(false, true, false), {carry: false, sum: true})
    })
    it('should return {carry: true, sum: false} when a == false and a == true and b == true', function () {
        assert.deepStrictEqual(fullAdder(false, true, true), {carry: true, sum: false})
    })

    it('should return {carry: false, sum: false} when a == true and b == false and c == false', function () {
        assert.deepStrictEqual(fullAdder(true, false, false), {carry: false, sum: true})
    })
    it('should return {carry: false, sum: true} when a == true and b == false and c == true', function () {
        assert.deepStrictEqual(fullAdder(true, false, true), {carry: true, sum: false})
    })
    it('should return {carry: false, sum: true} when a == true and b == true and c == false', function () {
        assert.deepStrictEqual(fullAdder(true, true, false), {carry: true, sum: false})
    })
    it('should return {carry: true, sum: false} when a == true and a == true and b == true', function () {
        assert.deepStrictEqual(fullAdder(true, true, true), {carry: true, sum: true})
    })

})