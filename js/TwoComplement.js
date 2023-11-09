import { invertBits } from './Utils.js'

export function binaryToInteger(bits) {
    if (bits[0] === '1') {
        return parseInt(bits, 2);
    }
    return parseInt(bits, 2);
}

export function intergerToBinary(num) {
    return (num >>> 0).toString(2);
}

