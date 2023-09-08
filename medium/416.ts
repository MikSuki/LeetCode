/**
    416. Partition Equal Subset Sum
 */
function canPartition(nums: number[]): boolean {
    const sum: number = nums.reduce((acc, v) => acc + v, 0)
    if (sum % 2) return false

    const n: number = nums.length
    const target: number = sum / 2
    const dp: boolean[] = new Array(target + 1).fill(false)
    dp[0] = true

    for (let i = 0; i < nums.length; ++i) {
        const v: number = nums[i]
        for (let j = target; j >= 0; --j) {
            if (j - v >= 0 && dp[j - v])
                dp[j] = true
        }
    }

    return dp[target]
};