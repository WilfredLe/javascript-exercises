const removeFromArray = function(array,...remove) {
    for(items of remove) {
        if(array.indexOf(items) === -1) {continue};
        array.splice(array.indexOf(items),1)
    };
    return array
    // for(let i=0;i<arguments.length;i++) {
    //     if(array.indexOf(arguments[i]) === -1) {continue}
    //     array.splice(array.indexOf(arguments[i]),1)
    // };
    // return array
};

// Do not edit below this line
module.exports = removeFromArray;
