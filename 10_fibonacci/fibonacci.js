const fibonacci = function(member) {
    const arr = [];
    if (member < 0) {
        return("OOPS");
    }
    for (let i = 1; i <= member; i++) {
        if (i === 1) {
            arr.push(1);
        }
        else if (i === 2) {
            arr.push(1);
        }
        else {
            let a = arr[(i - 3)];
            let b = arr[(i - 2)];
            arr.push(a + b);
        }
    }
    return(arr[arr.length - 1]);
};

// Do not edit below this line
module.exports = fibonacci;
