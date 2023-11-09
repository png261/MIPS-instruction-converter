import { normalizeBits } from './Utils.js'
import { binaryToInteger } from './TwoComplement.js'

export function extract_R_format(bits) {
    const REGEX = /^([01]{6})([01]{5})([01]{5})([01]{5})([01]{5})([01]{6})$/;
    const match = REGEX.exec(normalizeBits(bits));
    if (match) {
        return {
            op: binaryToInteger(match[1]),
            rs: binaryToInteger(match[2]),
            rt: binaryToInteger(match[3]),
            rd: binaryToInteger(match[4]),
            shampt: binaryToInteger(match[5]),
            funct: binaryToInteger(match[6])
        }
    }
}

export function extract_I_format(bits) {
    const REGEX = /^([01]{6})([01]{5})([01]{5})([01]{16})$/;
    const match = REGEX.exec(normalizeBits(bits));
    if (match) {
        return {
            op: binaryToInteger(match[1]),
            rs: binaryToInteger(match[2]),
            rt: binaryToInteger(match[3]),
            address: binaryToInteger(match[4])
        }
    }
}

export function extract_J_format(bits) {
    const REGEX = /^([01]{6})([01]{26})$/;
    const match = REGEX.exec(normalizeBits(bits));
    if (match) {
        return {
            op: binaryToInteger(match[1]),
            address: binaryToInteger(match[2])
        }
    }
}
