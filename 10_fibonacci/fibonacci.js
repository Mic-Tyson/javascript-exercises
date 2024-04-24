const fibonacci = function(n) {
    return  typeof n === 'string' ? fibonacci(parseInt(n)) :
            n < 0 ? "OOPS" :
            n ===  0 ? 0 : 
            n === 1 ? 1 : fibonacci(n-1) + fibonacci(n-2);
};

console.log(fibonacci(2));
console.log(fibonacci(8));
// Do not edit below this line
module.exports = fibonacci;
