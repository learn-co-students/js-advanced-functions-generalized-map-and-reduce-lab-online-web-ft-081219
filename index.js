function map(array, func) {
    let r = [];
    array.forEach(e => r.push(func(e)));
    return r;
}

function reduce(array, func, memo) {
    memo = memo || array.shift();
    array.forEach(e => memo = func(e, memo));
    return memo;
}