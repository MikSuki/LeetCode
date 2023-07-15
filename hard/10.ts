/**
    題目:
        10. Regular Expression Matching

    問題:
        給一string和pattern，判斷regular expresssion的pattern是否和string相等
        其中:
            .  -> 任意字元
            k* -> 任意數量的k
        
    方法:
        1. recursive
            分成目前pattern是否為k*
                是:
                    再分成使用一次k*和不使用
                否:
                    單純判斷開頭是否相等

        2. dp

            dp[i][j] -> s[1..i] 和 p[1..j] 能不能match

            s[i] = 
                . -> dp[i-1][j-1]，直接match

                * (k*) -> 字元 k 選或不選
                    選: match s[i-1] 且dp[i-1][j]
                    不選: dp[i][j - 2]

                alpha -> dp[i-1][j-1] && s[i] == p[i]
        
    
    時間:


 */

function isMatch(s: string, p: string): boolean {
    const m: number = s.length, n: number = p.length
    const dp: boolean[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false))
    // 0 -> 1-index
    s = '@' + s
    p = '@' + p
    dp[0][0] = true
    for (let j = 2; j <= n; ++j)
        dp[0][j] = p[j] == "*" && dp[0][j - 2]

    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (p[j] == '.')
                dp[i][j] = dp[i - 1][j - 1]
            else if (p[j] == '*')
                dp[i][j] = dp[i][j - 2] || ((s[i] == p[j - 1] || p[j - 1] == '.') && dp[i - 1][j])
            else
                dp[i][j] = s[i] == p[j] && dp[i - 1][j - 1]
        }
    }

    return dp[m][n]
};