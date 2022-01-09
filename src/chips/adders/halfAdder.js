import { and } from "../logic/and.js"
import { xor } from "../logic/xor.js"

/**
 * Half Adder chip
 * 
 * @description Adds two bits
 * @param {boolean} a
 * @param {boolean} b
 * @returns {{carry: boolean, sum: boolean}}
 */
export function halfAdder(a, b) {
    const carry = and(a, b)
    const sum = xor(a, b)

    return {carry, sum}
}