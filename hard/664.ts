/**
  題目:
    664. Strange Printer

  描述:
    給一個字串，使用奇怪的印表機印出字串，求最少的次數
    而此印表機有兩個特點:
      1. 一次只能印一種字元
      2. 可選擇任意頭尾印

      e.g. s = "aba" => aaa, aba 共兩次

  方法:
    dp==

  時間:
    O(n^2)
 */


function strangePrinter(s: string): number {
    const n: number = s.length
    const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < n; ++i)
        dp[i][i] = 1

    for (let len = 2; len <= n; ++len) {
        for (let i = 0; i + len - 1 < n; ++i) {
            const j = i + len - 1
            dp[i][j] = 1 + dp[i + 1][j]
            for (let k = i + 1; k < j; ++k) {
                if (s[i] == s[k])
                    dp[i][j] = Math.min(dp[i][j], dp[i][k - 1] + dp[k + 1][j])
            }
            if (s[i] == s[j])
                dp[i][j] = Math.min(dp[i][j], dp[i][j - 1])
        }
    }

    return dp[0][n - 1]
};