function change(amount: number, coins: number[]): number {
    const dp: number[] = new Array(amount + 1).fill(0)
    dp[0] = 1

    for (const coin of coins) {
        for (let i = 1; i <= amount; ++i) {
            if (i >= coin)
                dp[i] += dp[i - coin]
        }
    }

    return dp[amount]
};
