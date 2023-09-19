/**
    287. Find the Duplicate Number
 */
function findDuplicate(nums: number[]): number {
    let slow: number = nums[0]
    let fast: number = nums[0]

    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow == fast)
            break
    }

    slow = nums[0]
    while (slow != fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
};