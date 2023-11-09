const onecomplement = {
    binaryToInteger: (bits) => {
        if (bits[0] === '1') {
            return parseInt(invertBits(bits), 2) * -1;
        }
        return parseInt(bits, 2);
    },

    intergerToBinary: (num) => {
        if (num < 0) {
            return invertBits(num.toString(2));
        }
        return num.toString(2);
    }
}
