var bigInt = require("big-integer");

const memo = {
    0: bigInt.zero,
    1: bigInt.one
};
let maxCalculated = 1;

module.exports = async function (context, req) {
    context.log('Fibonacci Memoization triggered.');
    
    const nth = req.body.nth;
    
    if (nth === undefined || nth < 0) {
        context.res = { status: 400, body: "nth must be greater than 0" };
        return;
    }

    if (nth <= maxCalculated) {
        context.res = { body: memo[nth].toString() };
        return;
    }

    for (var i = maxCalculated + 1; i <= nth; i++) {
        memo[i] = memo[i-1].add(memo[i-2]);
    }
    maxCalculated = nth;

    context.res = { body: memo[nth].toString() };
};