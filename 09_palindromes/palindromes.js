const palindromes = function (arg) {
    const PUNCTUATION = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
    let array = arg.toLowerCase().split(''); // turn string into array so we can use methods
    array = array.filter(elem => !PUNCTUATION.includes(elem)); // remove whitespace chars
    let length = array.length;
    // compare 2 sub strings from [0:MID] AND [MID:END] 
    return array.slice(0, Math.floor(length/2)).join('') == array.slice(Math.ceil(length/2), length).reverse().join(''); 
};

// Do not edit below this line
module.exports = palindromes;
