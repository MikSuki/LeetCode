/**
    問題: 
        給一個01矩陣
        找到最長的subarray，而此subarray去掉一個字後，全都是1

    方法:
        1. dp==

        dp[i][j]: i個0，j結尾的長度
        最後再找最長的

        2. sliding window

        l 和 r 標記window的左右
        zero紀錄0的數量
        當0出現兩次時，移動l，直到只剩一個0
        每次存下winodw大小-1(去掉一個字)

    時間:
        O(n)
 */

function longestSubarray(nums: number[]): number {
    let l = 0;
    let zero = 0
    let res = 0

    for (let r = 0; r < nums.length; ++r) {
        if (nums[r] == 0)
            ++zero
        while (zero > 1) {
            if (nums[l] == 0)
                --zero
            ++l
        }
        res = Math.max(res, r - l) // (r - l + 1 - 1)
    }

    return res
};