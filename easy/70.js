/**
 * fibbonacci 求解
 * Time Complexty: O(n)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = [1, 1];
    while (dp.length <= n)
        dp.push(dp[dp.length - 1] + dp[dp.length - 2])
    return dp.at(-1)
};