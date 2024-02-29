const sumAll = function(min, max) {
    let result = 0;
    let pom = 0;
   
    if (typeof min !== "number" 
        || typeof max !== "number" 
        || min < 0 
        || max < 0) {
        return('ERROR');
    }

    if (min > max) {
        pom = min;
        min = max;
        max = pom;
    }

    for (let i = min; i <= max; i++) {
        result += min;
        min++; 
    }
    return(result);
};

// Do not edit below this line
module.exports = sumAll;
