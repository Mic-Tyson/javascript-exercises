const repeatString = function(str, index) {
    let result = "";
    if(index<0) return "ERROR";
    
    for(; index>0; --index) 
        result += str;

    return result;
};

// Do not edit below this line
module.exports = repeatString;
