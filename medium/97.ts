/**
    97. Interleaving String
 */
function isInterleave(s1: string, s2: string, s3: string): boolean {
    s1 = '-' + s1
    s2 = '-' + s2
    s3 = '-' + s3
    const m: number = s1.length, n: number = s2.length, p: number = s3.length
    if (m + n - 1 != p) return false
    const dp: boolean[][] = new Array(m).fill(false).map(() => new Array(n).fill(false))

    dp[0][0] = true

    for (let i = 1; i < m; ++i)
        dp[i][0] = dp[i - 1][0] && s1[i] == s3[i]
    for (let j = 1; j < n; ++j)
        dp[0][j] = dp[0][j - 1] && s2[j] == s3[j]
    for (let i = 1; i < m; ++i)
        for (let j = 1; j < n; ++j) {
            const k: number = i + j
            dp[i][j] = (s1[i] == s3[k] && dp[i - 1][j]) || (s2[j] == s3[k] && dp[i][j - 1])
        }

    return dp[m - 1][n - 1]
};