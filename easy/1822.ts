function arraySign(nums: number[]): number {
    const has_zero = nums.some(e => e == 0)
    if(has_zero) return 0
    const num_of_neg = nums.reduce((num: number, v: number) => v < 0 ? num + 1 : num, 0)
    return num_of_neg % 2 ? -1 : 1 
};