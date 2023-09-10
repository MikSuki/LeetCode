/**
  1359. Count All Valid Pickup and Delivery Options
 */
function countOrders(n: number): number {
    const dp: number[] = [0, 1]
    const M: number = 1e9 + 7
    for (let i = 2; i <= n; ++i)
        dp.push((dp[i - 1] * (2 * (i ** 2) - i)) % M)
    return dp[n]
};