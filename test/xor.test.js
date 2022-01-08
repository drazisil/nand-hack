import assert from "assert"
import { xor} from '../src/xor.js'

describe('XOR chip', function () {
    describe('should return true', function () {
        it('when a == true and b == false', function () {
            assert(xor(true, false))
        })
        it('when a == false and b == true', function () {
            assert(xor(false, true))
        })
    })
    describe('should return false', function () {
        it('when a == true and b == true', function () {
            assert(!xor(true, true))
        })
        it('when a == false and b == false', function () {
            assert(!xor(false, false))
        })
    })
})