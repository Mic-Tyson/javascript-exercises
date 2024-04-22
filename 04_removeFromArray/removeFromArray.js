const removeFromArray = function(targetArray) {
    const whitespace = Array.from(arguments).slice(1);

    return targetArray.filter(elem => !whitespace.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
