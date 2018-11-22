const _ = require('underscore');

function range(arr) {
    return Math.abs(_.max(arr) - _.min(arr));
}

module.exports.range = range;
