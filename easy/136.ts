/**
    136. Single Number
 */

function singleNumber(nums: number[]): number {
    return nums.reduce((res, v) => res ^= v, 0)
};