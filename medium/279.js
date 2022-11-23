/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    const dp = new Array(n+1).fill(null).map(() => Number.MAX_SAFE_INTEGER);
    dp[0] = 0; dp[1] = 1;
    for(let i = 2; i <= n; ++i)
        for(let j = 1; j*j <= i; ++j)
            dp[i] = Math.min(dp[i], dp[i-j*j] + 1);
    return dp[n];
};