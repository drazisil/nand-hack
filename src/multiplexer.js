/**
 * Multiplexer chip
 * 
 * @description if sel == false return a else return b
 * @param {boolean} a
 * @param {boolean} b
 * @param {boolean} sel
 * @returns {boolean}
 */
export function multiplexer(a,b, sel) {
    if (sel) {
        return b
    }
    return a
}