/**
    75. Sort Colors
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const swap = (i, j) => {
        const tmp = nums[j]
        nums[j] = nums[i]
        nums[i] = tmp
    }
    let low = 0, mid = 0, high = nums.length - 1
    while (mid <= high) {
        if (nums[mid] == 0) {
            swap(low, mid)
            ++low
            ++mid
        }
        else if (nums[mid] == 1)
            ++mid
        else {
            swap(mid, high)
            --high
        }
    }
};