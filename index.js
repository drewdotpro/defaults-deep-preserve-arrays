const _ = require('lodash');

const mergeDefaults = (objectValue, sourceValue) => {
    // Do not merge arrays.
    if (_.isArray(sourceValue)) {
        return sourceValue;
    }
};

module.exports = function () {
    var args = _.toArray(arguments).reverse();

    let output = {};
    args.forEach(item=> {
        _.mergeWith(output, item, mergeDefaults);
    });
    return output;
};