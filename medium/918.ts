function maxSubarraySumCircular(nums: number[]): number {
    let curMax: number = 0,
        curMin: number = 0,
        max: number = Number.MIN_SAFE_INTEGER,
        min: number = Number.MAX_SAFE_INTEGER,
        sum: number = 0
    for(const v of nums){
        curMax = Math.max(curMax + v, v)
        curMin = Math.min(curMin + v, v)
        max = Math.max(max, curMax)
        min = Math.min(min, curMin)
        sum += v
    }
    return sum == min ? max : Math.max(max, sum - min)
};