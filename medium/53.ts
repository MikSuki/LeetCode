function maxSubArray(nums: number[]): number {
    let max: number = Number.MIN_SAFE_INTEGER
    let cur_sum: number = 0
    for(const v of nums){
        cur_sum = Math.max(cur_sum + v, v)
        max = Math.max(max, cur_sum)
    }
    return max
};