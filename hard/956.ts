/**
    問題: 
        給一個序列，找到兩個disjoint subset，他們的總和相同，且最大。
    
    方法:
        1. dp，分左右半邊
        ------------------------------------------------

        dp[diff] = left: left-right = diff，且left越大越好

        記著diff和left，其實就已經記right了

        假設現在diff = 2，那可能的left和right為:
            3, 1
            4, 2
            5, 3 
            ....
        所以left只要記最大的即可，因為<3, 1>, <4, 2>都不會比<5, 3>好。


        2. 題目說總和為5000
        ------------------------------------------------
        所以diff介於-5000~5000之間
        dp需要再加一個offset(5000)


    時間:
        O(10000 * n)
 */

function tallestBillboard(rods: number[]): number {
    // -5000 <= diff <= 5000
    const off: number = 5000
    const dp: number[] = new Array(off * 2 + 1).fill(-1)
    dp[0 + off] = 0

    for (let i = 0; i < rods.length; ++i) {
        const r: number = rods[i]
        const tmp: number[] = dp.slice()

        for (let j = -off; j <= off; ++j) {
            if (tmp[j + off] == -1) continue
            if (j + r <= off)
                dp[j + r + off] = Math.max(dp[j + r + off], tmp[j + off] + r)
            if (j - r >= -off)
                dp[j - r + off] = Math.max(dp[j - r + off], tmp[j + off])
        }
    }

    return dp[0 + off]
};