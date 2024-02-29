const getTheTitles = function(arr) {
    let counter = arr.length - 1;
    const titles = [];
    for (let i = 0; i <= counter; i++) {
        let obj = arr[i];
        titles.push(obj.title);
    };
    return(titles);
};

// Do not edit below this line
module.exports = getTheTitles;
