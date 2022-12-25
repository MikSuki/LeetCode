/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const dp = [0, 1, 2, 5]
    const M = 10 ** 9 + 7
    for(let i = 4; i <= n; ++i)
        dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % M
    return dp[n]
};