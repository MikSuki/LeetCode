/**
    268. Missing Number
 */
function missingNumber(nums: number[]): number {
    let n = 0
    nums.forEach(v => n ^= v)
    for (let i = 1; i <= nums.length; ++i)
        n ^= i
    return n
};