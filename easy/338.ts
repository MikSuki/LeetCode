/**
    338. Counting Bits
 */

function countBits(n: number): number[] {
    const dp: number[] = [0]
    let offset: number = 1

    for (let i = 1; i <= n; ++i) {
        if (offset * 2 == i)
            offset = i
        dp.push(dp[i - offset] + 1)
    }

    return dp
};