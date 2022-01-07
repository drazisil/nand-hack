// @ts-check
import assert from "assert"
import { multiplexer} from '../src/multiplexer.js'

describe('Multiplexer chip', function () {
    it('should return a if sel == false', function () {
        assert(multiplexer(true, false, false))
    })
    it('should return b if sel == true', function () {
        assert(multiplexer(false, true, true))
    })
})