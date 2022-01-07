import assert from "assert"
import {and} from '../src/and.js'

describe('AND chip', function () {
    describe('should return true', function () {
        it('when (a, b) == true', function () {
            assert(and(true, true))
        })
    })

    describe('should return false', function () {
        it('when a == true and b == false', function () {
            assert(!and(true, false))
        })
        it('when a == false and b == true', function () {
            assert(!and(false, true))
        })
        it('when a == false and b == false', function () {
            assert(!and(false, false))
        })
    })
})