const sumAll = function(num1,num2) {
    if(typeof num1 !== 'number' || num1 < 0) {return "ERROR"};
    if(typeof num2 !== 'number' || num2 < 0) {return "ERROR"};
    let sum = 0;
    let max = 0;
    let min = 0;
    if(num1 > num2) {max = num1;min = num2}
    else {max = num2;min = num1};
    for(let i = min;i<=max;i++) {
        sum += i
    };
    return sum
};

// Do not edit below this line
module.exports = sumAll;
