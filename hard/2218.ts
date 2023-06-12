function maxValueOfCoins(piles: number[][], k: number): number {
    const n: number = piles.length
    // prefix sum
    const pf: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
    const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0))

    for(let i = 0; i < n; ++i)
        for(let j = 0; j < piles[i].length; ++j){
            if(j == 0) pf[i][0] = piles[i][0]
            else pf[i][j] = pf[i][j-1] + piles[i][j]
        }

    for(let i = 1; i <= n; ++i)
        for(let j = 1; j <= k; ++j){
            for(let p = 1; p <= Math.min(j, piles[i - 1].length); ++p) 
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - p] + pf[i - 1][p - 1])
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j])
        }

    return dp[n][k]
};