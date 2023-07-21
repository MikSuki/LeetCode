/**
    題目:
        673. Number of Longest Increasing Subsequence
    
    問題:
        找出一序列的LIS數量

    方法:
        dp==

        兩層loop，記錄以每個結尾能得到的IS大小和數量
        當nums[i] > nums[j]，才能接在他後面，再區分
            1. 能更新長度 -> count[i] = count[j]
            2. 不能       ->  count[i] += count[j]

    時間:   
        O(n^2)

 */

function findNumberOfLIS(nums: number[]): number {
    const n: number = nums.length
    const dp: number[] = new Array(n).fill(1)
    const count: number[] = new Array(n).fill(1)

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] <= nums[j]) continue

            if (dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1
                count[i] = count[j]
            }
            else if (dp[j] + 1 == dp[i])
                count[i] += count[j]
        }
    }

    const max: number = dp.reduce((m, v) => Math.max(m, v), 0)

    return count.reduce((acc, v, i) => dp[i] == max ? acc + v : acc, 0)
};