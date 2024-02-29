const repeatString = function(phrase,multiplier) {
    let answer = "";
    if (multiplier < 0) {
        return("ERROR");
    }
    for (let i = 0; i < multiplier; i++) {
        answer += phrase;
    }
    return(answer);
};

// Do not edit below this line
module.exports = repeatString;
