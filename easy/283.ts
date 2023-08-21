/**
    283. Move Zeroes
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let zeros: number = 0
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] == 0)
            ++zeros
        else
            nums[i - zeros] = nums[i]
    }

    for (let i = nums.length - zeros; i < nums.length; ++i)
        nums[i] = 0

};