/**
    2369. Check if There is a Valid Partition For The Array
 */

function validPartition(nums: number[]): boolean {
    const n: number = nums.length
    const dp: number[] = new Array(n).fill(-1)

    return dfs(0)

    function dfs(i: number): boolean {
        if (i >= n) return true
        if (dp[i] != -1) return dp[i] == 1
        if (nums[i] > nums[i + 1]) return false
        let f1, f2, f3
        if (nums[i] == nums[i + 1]) {
            f1 = dfs(i + 2)
            if (f1) return true
            if (i + 2 < n && nums[i] == nums[i + 2])
                f2 = dfs(i + 3)
        }
        else if (i + 2 < n && nums[i] + 1 == nums[i + 1] && nums[i] + 2 == nums[i + 2])
            f3 = dfs(i + 3)

        dp[i] = f1 || f2 || f3 ? 1 : 0
        return dp[i] == 1
    }
};