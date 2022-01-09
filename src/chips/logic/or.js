import { and} from './and.js'
import { not} from './not.js'
/**
 * OR gate
 * 
 * @description return false if (a, b) == false, else return true
 * @param {boolean} a
 * @param {boolean} b
 * @returns {boolean}
 */
export function or(a, b) {
    return not(and(not(and(a, a)),not(and(b,b))))
}