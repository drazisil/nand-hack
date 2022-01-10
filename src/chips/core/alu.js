/**
 * @typedef {[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]} byte
 * @typedef {[...byte, ...byte]} byte16
 */

    /** @type {byte16} */
    const byte16zero = [false, false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

import { add16 } from "../adders/add16.js"
import { and16 } from "../logic/and16.js"
import { mux16 } from "../logic/mux16.js"
import { not16 } from "../logic/not16.js"
import { or } from "../logic/or.js"

/**
 * 16-bit ALU chip
 * 
 * @param {byte16} x
 * @param {byte16} y
 * @param {boolean} zx
 * @param {boolean} nx
 * @param {boolean} zy
 * @param {boolean} ny
 * @param {boolean} f
 * @param {boolean} no
 * @returns {{out: byte16, zr: boolean, ng: boolean}}
 */
export function alu(x, y, zx, nx, zy, ny, f, no) {

    let rX = x
    let rY = y

    console.log(`debug: rX = [${rX}]`)

    const shouldZeroX = or(zx, false)

    console.log(`debug: shouldZeroX = [${shouldZeroX}]`)

    rX = mux16(rX, byte16zero, shouldZeroX)

    console.log(`debug: rX = [${rX}]`)

    const shouldNotX = or(nx, false)

    console.log(`debug: shouldNotX = [${shouldNotX}]`)

    rX = mux16(rX, not16(...rX), shouldZeroX)

    console.log(`debug: rX = [${rX}]`)

    console.log(`debug: rY = [${rY}]`)

    const shouldZeroY = or(zy, false)

    console.log(`debug: shouldZeroY = [${shouldZeroY}]`)

    rY = mux16(rY, byte16zero, shouldZeroY)

    console.log(`debug: rY = [${rY}]`)

    const shouldNotY = or(ny, false)

    console.log(`debug: shouldZeroY = [${shouldNotY}]`)

    rY = mux16(rY, not16(...rY), shouldNotY)

    console.log(`debug: rY = [${rY}]`)

    /**
     * true:  ADD rX and rY
     * false: AND rX and rY
     */
    const whichF = or(f, false)

    console.log(`debug: whichF = [${whichF}]`)

    let rOut = mux16(and16(rX, rY), add16(rX, rY).sum, whichF)

    console.log(`debug: rOut = [${rOut}]`)

    const shouldNotOut = or(no, false)

    console.log(`debug: shouldNotOut = [${shouldNotOut}]`)

    rOut = mux16(rOut, not16(...rOut), shouldNotOut)

    console.log(`debug: rOut = [${rOut}]\n\n`)

    return {out: rOut, zr: false, ng: false}
}