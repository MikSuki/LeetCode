/**
    問題: 
        給一個array，求最小的 subarray，其總和 > target

    方法:
        sliding window
        分 l 和 r 邊界
        1. 
            r往右探索，並記錄總和 window
        2.
            每當 window >= target後，l往右移，直到 window < target    

    時間:   
        O(n)
 */

function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0, r = 0
    let window = 0
    let res = 100001

    while (r < nums.length) {
        window += nums[r]
        while (window >= target && l <= r) {
            res = Math.min(res, r - l + 1)
            window -= nums[l]
            ++l
        }
        ++r
    }

    return res == 100001 ? 0 : res
};