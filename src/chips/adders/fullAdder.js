import { or } from "../logic/or.js"
import { halfAdder } from "./halfAdder.js"

/**
 * Full Adder chip
 * 
 * @description Adds three bits
 * @param {boolean} a
 * @param {boolean} b
 * @param {boolean} c
 * @returns {{carry: boolean, sum: boolean}}
 */
export function fullAdder(a, b, c) {

    const stage1 = halfAdder(a, b)

    const stage2 = halfAdder(stage1.sum, c)

    return {carry: or(stage1.carry, stage2.carry), sum: stage2.sum}

}