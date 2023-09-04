/**
  322. Coin Change
 */
function coinChange(coins: number[], amount: number): number {
    const MAX: number = 10001
    const dp: number[] = new Array(amount + 1).fill(MAX)
    dp[0] = 0
    for (let i = 1; i <= amount; ++i) {
        coins.forEach(c => {
            const last: number = i - c
            if (last >= 0)
                dp[i] = Math.min(dp[i], dp[last] + 1)
        })
    }
    return dp[amount] == MAX ? -1 : dp[amount]
};