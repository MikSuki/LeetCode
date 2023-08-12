/**
    題目:
        63. Unique Paths II

 */

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m: number = obstacleGrid.length, n = obstacleGrid[0].length
    const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    dp[0][1] = 1

    for (let i = 1; i <= m; ++i)
        for (let j = 1; j <= n; ++j) {
            if (obstacleGrid[i - 1][j - 1] != 1) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }

    return dp[m][n]
};