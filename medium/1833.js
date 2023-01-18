/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a, b) => a - b)
    let cnt = 0
    while ((coins -= costs[cnt]) >= 0)
        ++cnt
    return cnt
};