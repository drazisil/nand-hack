// @ts-check
/**
 * toBit()
 * 
 * @description returns the bit value of byte as detemined by sel. throws otherwise
 * @param {number} byte
 * @param {number} sel
 * @returns {boolean}
 */
export function toBit(byte, sel) {
    if (byte < 0 || byte > 255) {
        throw new RangeError('byte must be between 0 and 255')
    }
    if (sel < 0 || sel > 7) {
        throw new RangeError('sel must be between 0 and 7')
    }
    return byte & (1 << sel) ? true : false
}