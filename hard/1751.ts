/**
    題目:
        1751. Maximum Number of Events That Can Be Attended II

    問題:
        給一堆事件，包含開始時間、結束時間和收益
        和一k值

        求最多做k個事件最大的收益，且事件之間不能重疊
        
    方法:
        dp==

        dp[i][j] = p -> 在前i個事件中，已經做了j件事，能獲地的收益為p

        迴圈可分成:
            1. 不做第i件事
                dp[i][j] = dp[i-1][j]

            2. 做第i件事
                max(dp[ii][j-1])，0 <= ii < i 且 events[i][1] < events[i][0] (時間不重疊)
                而找ii可用 binary search

    時間:
        O(|events| * k * logn)

 */

function maxValue(events: number[][], k: number): number {
    const n: number = events.length
    const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0))

    events.sort((a, b) => a[1] - b[1])
    // let events to be 1-index array
    events.unshift([0, 0, 0])

    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= k; ++j) {
            // lower bound
            let l: number = 0, r: number = i - 1
            while (l < r) {
                const m = (l + r) >> 1
                if (events[m][1] < events[i][0])
                    l = m + 1
                else
                    r = m
            }
            l = events[l][1] >= events[i][0] ? l - 1 : l
            dp[i][j] = Math.max(dp[i - 1][j], dp[l][j - 1] + events[i][2])
        }
    }

    return dp[n].reduce((max, v) => Math.max(max, v), 0)
};