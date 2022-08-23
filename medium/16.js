/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const len = nums.length;
    let min = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => a - b);
    // console.log(nums);

    for (let i = 0; i < len - 2; ++i) {
        let low = i + 1,
            high = len - 1;
        if (nums[i] === nums[i - 1]) continue;
        while (low < high) {
            const sum = nums[i] + nums[low] + nums[high],
                diff = sum - target;
            if (diff === 0)
                return diff + target;
            else if (Math.abs(diff) < Math.abs(min - target))
                min = sum;
            else if (diff < 0)
                ++low;
            else --high;
        }
    }
    return min;
};

// console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([-1, 2, 1, -4], 1));