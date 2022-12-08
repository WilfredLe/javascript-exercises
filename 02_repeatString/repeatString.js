const repeatString = function(string,num) {
    if((typeof num) !== 'number' || num < 0) {return "ERROR"};
    let finalString ='';
    for(let i = num; i>0; i--) {
        finalString += string
    };
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
