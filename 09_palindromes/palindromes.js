const palindromes = function (text) {
    text = text.toLowerCase().replace(/[\s,\.\?\!]/g,"");
    let arr = Array.from(text).reverse();
    let reversedText = arr.toString().replace(/[\,]/g,"");
    if (text === reversedText){
        return(true);
    }
    else return(false);
};
// Do not edit below this line
module.exports = palindromes;
