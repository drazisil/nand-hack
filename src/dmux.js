// @ts-check
/**
 * De-multiplexer chip
 * 
 * @description return {a: input, b: false} if sel == false else return {a: false, b: input}
 * @param {boolean} input
 * @param {boolean} sel
 * @returns {{a: boolean, b: boolean}}
 */
export function dmux(input, sel) {
    if (sel) {
        return { a: false, b: input}
    }
    return { a: input, b: false}
}