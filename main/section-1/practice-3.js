'use strict';

function includes(collection, ch) {
    if (collection.includes(ch))
        return true;
    else
        return false;
}

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter(function (ch) {
        return includes(objectB.value, ch)
    });
}
