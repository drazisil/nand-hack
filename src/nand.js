/**
 * NAND logic chip
 * 
 * logic: if ((a==true) and (b==true)) then return false else return true
 * 
 * @param {boolean} a
 * @param {boolean} b
 * @returns {boolean}
 * 
 */
export function nand(a, b) {
    if (a === true && b === true) {
        return false
    }
    return true    
}