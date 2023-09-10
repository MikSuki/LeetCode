/**
    377. Combination Sum IV
 */
function combinationSum4(nums: number[], target: number): number {
    const dp: number[] = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= target; ++i) {
        nums.forEach(v => {
            if (i - v >= 0)
                dp[i] += dp[i - v]
        })
    }

    return dp[target]
}

// 1: 1 (1)
// 2: 2 (1, 1) (2)
// 3: 4 (1, 1, 1), (1, 2), (2, 1), (3)
// 4: 7 (1, 1, 1, 1), (1, 2, 1), (1, 1, 2), (2, 1, 1), (2, 2), (1, 3), (3, 1),