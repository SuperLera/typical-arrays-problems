
exports.min = function min (array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        // let min = Math.min.apply(null, array);
        // return min;
        return array.sort((a,b) => a-b)[0]
    };
}

exports.max = function max (array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        // let max = Math.max.apply(null, array);
        // return max;
        return array.sort((a,b) => a-b)[array.length - 1]
    };
}

exports.avg = function avg (array) {
    if (!array || array.length === 0){
        return 0;
      } else {
        return array.reduce((acc, item) => (acc + item), 0) / array.length;
      };
}

