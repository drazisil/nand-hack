import assert from "assert"
import { not} from '../../../src/chips/logic/not.js'

describe('NOT chip', function () {
    it('should return true when input == false', function () {
        assert(not(false) === true)
    })
    it('should return false when input == true', function () {
        assert(not(true) === false)
    })

})