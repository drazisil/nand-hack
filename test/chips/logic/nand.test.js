import assert from 'assert'
import { describe, it } from 'mocha'
import {nand} from '../../../src/chips/logic/nand.js'
describe('NAND chip', function() {
    describe('should return false', function() {
        it('when (a, b) == true ', function() {
            assert(!nand(true, true))
        })
    })

    describe('should return true', function () {
        it('when a == false and b == false', function () {
            assert(nand(false, false))
        })
        it('when a == true and b == false', function () {
            assert(nand(true, false))
        })
        it('when a == false and b == true', function () {
            assert(nand(false, true))
        })
    })

})