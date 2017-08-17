'use strict';

function includes(collection, ch) {
    if (collection.includes(ch))
        return true;
    else
        return false;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.forEach(function (item) {
        let key = item.key;
        let count = item.count;
        if (includes(objectB.value, key)) {
            count--;
        }
        result.push({key, count});
    });
    return result;
}
