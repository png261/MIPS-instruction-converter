export function invertBits(bits) {
    return bits.split('').map(bit => bit === '0' ? '1' : '0').join('');
}

export function normalizeBits(bits) {
    return bits.replace(/[^01]/g, '');
}


export function getSignedInteger(bits) {
    if (bits[0] === '1') {
        return (parseInt(invertBits(bits), 2) + 1) * -1;
    }
    return parseInt(bits, 2);
}

export function getUnsignedInteger(bits) {
    return parseInt(bits, 2);
}

export function signExtend(bits) {
    bits = normalizeBits(bits);
    return bits[0] == '0' ? bits.padStart(32, '0') : bits.padStart(32, '1');
}

export function addSpace(bits) {
    return normalizeBits(bits).match(/.{4}/g).join(" ");
}


