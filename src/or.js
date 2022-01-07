/**
 * OR gate
 * 
 * @description return false if (a, b) == false, else return true
 * @param {boolean} a
 * @param {boolean} b
 * @returns {boolean}
 */
export function or(a, b) {
    if (a == false && b == false) {
        return false
    }
    return true
}