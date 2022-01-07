// @ts-check
import assert from "assert"
import { toBit} from '../src/toBit.js'

describe('toBit()', function () {
    describe('should throw', function () {
        it('when byte < 0', function () {
            assert.throws(() => toBit(-64, 5))
        })
        it('when byte > 255', function () {
            assert.throws(() => toBit(1024, 3))
        })
        it('when sel < 0', function () {
            assert.throws(() => toBit(18, -5))
        })
        it('when sel > 7', function () {
            assert.throws(() => toBit(16, 12))
        })
    })

    it('should return the bit of byte determined by sel', function () {
        assert.strictEqual(toBit(72, 3), true)
        assert.strictEqual(toBit(72, 7), false)
    })
    
})