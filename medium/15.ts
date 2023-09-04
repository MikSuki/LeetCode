/**
    15. 3Sum
 */
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const res: number[][] = []
    const n: number = nums.length

    for (let i = 0; i < n - 2; ++i) {
        const v: number = nums[i]
        if (v == nums[i - 1]) continue
        let low: number = i + 1
        let high: number = n - 1
        while (low < high) {
            const sum: number = low < high && v + nums[low] + nums[high]
            if (sum == 0) {
                res.push([v, nums[low], nums[high]])
                while (nums[low] == nums[low + 1]) ++low
                while (nums[high] == nums[high - 1]) --high
                ++low
                --high
            }
            else if (sum < 0)
                ++low
            else
                --high
        }
    }

    return res
;