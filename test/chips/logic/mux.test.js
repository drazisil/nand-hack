import assert from "assert"
import { mux} from '../../../src/chips/logic/mux.js'

describe('Multiplexer chip', function () {
    it('should return a if sel == false', function () {
        assert(mux(true, false, false))
    })
    it('should return b if sel == true', function () {
        assert(mux(false, true, true))
    })
    describe('should return false', function () {
        it('when (a,b) == false and sel == false', function () {
            assert(!mux(false, false, false))
        })
        it('when (a,b) == false and sel == true', function () {
            assert(!mux(false, false, true))
        })
    })
})