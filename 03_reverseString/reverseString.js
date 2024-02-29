const reverseString = function(phrase) {
    let answer = "";
    let numberOfSlices = phrase.length;
    for (let i = 0; i < numberOfSlices; i++) {
        answer += phrase.slice(phrase.length - 1);
        phrase = phrase.slice(0, phrase.length - 1);
    }
    return(answer);
};

// Do not edit below this line
module.exports = reverseString;
