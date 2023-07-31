/**
    題目:
        712. Minimum ASCII Delete Sum for Two Strings
    
    描述:
        給兩字串，刪除s1和s2字元，使兩者相同
        求"最小的"被刪除字元之ASCII總和

    方法:
        dp==
        dp[i][j] -> s1[1..i] 和 s2[1..j] 相同時，使用的最小ASCII sum

        s1[i] == s2[j]
            不需刪除
            dp[i][j] = dp[i-1][j-1]
        
        s1[i] != s2[j]
            要馬刪除s[i]，不然就是s2[j]
            dp[i][j] = min(dp[i-1][j] + s1[i], dp[i][j-1] + s2[j])

    時間:
        O(|s1||s2|) = O(mn)
 */

function minimumDeleteSum(s1: string, s2: string): number {
    const m: number = s1.length, n: number = s2.length
    const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n).fill(0))
    s1 = '_' + s1
    s2 = '_' + s2

    dp[0][0] = 0
    for (let i = 1; i <= m; ++i)
        dp[i][0] = dp[i - 1][0] + s1[i].charCodeAt(0)
    for (let j = 1; j <= n; ++j)
        dp[0][j] = dp[0][j - 1] + s2[j].charCodeAt(0)

    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (s1[i] == s2[j])
                dp[i][j] = dp[i - 1][j - 1]
            else
                dp[i][j] = Math.min(dp[i - 1][j] + s1[i].charCodeAt(0), dp[i][j - 1] + s2[j].charCodeAt(0))
        }
    }

    return dp[m][n]
};
