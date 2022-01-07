// @ts-check
import assert from "assert"
import { or} from '../src/or.js'

describe('OR chip', function () {
    describe('should return true', function () {
        it('when a == true and b == false', function () {
            assert(or(true, false))
        })
        it('when a == false and b == true', function () {
            assert(or(false, true))
        })
        it('when (a, b) == true', function () {
            assert(or(true, true))
        })
    })

    describe('should return false', function () {
        it('when (a, b) == false', function () {
            assert(!or(false, false))
        })
    })
})