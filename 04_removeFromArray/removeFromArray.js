const removeFromArray = function(listOfItems, ...itemsToRemove) {
    for (const item of itemsToRemove) {
        if (listOfItems.indexOf(item) !== -1) {
            listOfItems.splice(listOfItems.indexOf(item),1);
        }
    }
    return(listOfItems);
};

// Do not edit below this line
module.exports = removeFromArray;
