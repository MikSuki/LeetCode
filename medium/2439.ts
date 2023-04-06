function minimizeArrayValue(nums: number[]): number {
    let res = 0
    let sum = 0
    for(let i = 0; i < nums.length; ++i){
        sum += nums[i]
        res = Math.max(res, Math.ceil(sum / (i + 1)))
    }
    return res
};  