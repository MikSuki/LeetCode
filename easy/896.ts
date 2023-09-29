/**
    896. Monotonic Array
 */
function isMonotonic(nums: number[]): boolean {
    let dec: boolean = true
    let inc: boolean = true
    for(let i = 1; i <  nums.length; ++i){
        dec = dec && nums[i] <= nums[i - 1]
        inc = inc && nums[i] >= nums[i - 1]
    }
    return dec || inc
};
