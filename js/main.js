import * as MIPS from './MIPS.js'
import { signExtend, addSpace } from './Utils.js'

const $bitsInput = document.querySelector("input#bits");
const $submitButton = document.querySelector("button#submit");

const $Rformat = document.querySelector("#r_format");
const $Iformat = document.querySelector("#i_format");
const $Jformat = document.querySelector("#j_format");
const $signExtend = document.querySelector("#sign_extend");

function renderRFormat(bits) {
    $Rformat.innerHTML = '';
    const RformatResult = MIPS.extract_R_format(bits);
    if (!RformatResult) {
        $Rformat.innerHTML = "invalid bits"
    } else {
        for (const [key, value] of Object.entries(RformatResult)) {
            $Rformat.innerHTML += itemHtml(key, value);
        }
    }
}

function renderIFormat(bits) {
    $Iformat.innerHTML = '';
    const IformatResult = MIPS.extract_I_format(bits);
    if (!IformatResult) {
        $Iformat.innerHTML = "invalid bits"
    } else {
        for (const [key, value] of Object.entries(IformatResult)) {
            $Iformat.innerHTML += itemHtml(key, value);
        }
    }
}

function renderJFormat(bits) {
    $Jformat.innerHTML = '';
    const JformatResult = MIPS.extract_J_format(bits);
    if (!JformatResult) {
        $Jformat.innerHTML = "invalid bits"
    } else {
        for (const [key, value] of Object.entries(JformatResult)) {
            $Jformat.innerHTML += itemHtml(key, value);
        }
    }
}

function renderSignExtendFormat(bits) {
    $signExtend.innerHTML = '';
    console.log("???");
    const signExtendFormatResult = MIPS.extract_sign_xtend_format(bits);
    if (!signExtendFormatResult) {
        $signExtend.innerHTML = "invalid bits"
    } else {
        for (const [key, value] of Object.entries(signExtendFormatResult)) {
            $signExtend.innerHTML += value;
        }
    }
}

function itemHtml(key, value) {
    return `<p><b>${key}: </b> ${value}</p>`
}

$submitButton.addEventListener('click', () => {
    const bits = $bitsInput.value;
    renderRFormat(bits);
    renderIFormat(bits);
    renderJFormat(bits);
    renderSignExtendFormat(bits);
})
