'use strict';

function includes(collection, ch) {
    if (collection.includes(ch))
        return true;
    else
        return false;
}

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(function (ch) {
        return includes(collectionB[0], ch)
    });
}
