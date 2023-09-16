/**
    198. House Robber
 */
function rob(nums: number[]): number {
    const n: number = nums.length
    const dp: number[][] = new Array(n + 1).fill(0).map(() => [])
    nums.unshift(-1)
    dp[0] = [0, 0]
    dp[1] = [0, nums[1]]
    for (let i = 2; i <= n; ++i) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1])
        dp[i][1] = dp[i - 1][0] + nums[i]
    }
    return Math.max(dp[n][0], dp[n][1])
};