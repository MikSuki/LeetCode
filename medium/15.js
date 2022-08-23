/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length,
        output = [];
    // [-2, -1, 0, 1, 2, 3]
    for (let i = 0; i < len - 2; ++i) {
        let low = i + 1,
            high = len - 1;
        if (nums[i] === nums[i - 1]) continue;
        while (low < high) {
            const sum = nums[low] + nums[high] + nums[i];
            if (sum === 0) {
                output.push([nums[i], nums[low], nums[high]]);
                while (nums[low] === nums[low + 1]) ++low;
                while (nums[high] === nums[high - 1]) --high;
                ++low;
                --high;
            } else if (sum < 0)
                ++low;
            else
                --high;
        }
    }

    return output;
};

// console.log(threeSum(
//     [-1, 0, 1, 2, -1, -4]
// ))
// console.log(threeSum(
//     [0, 1, 1]
// ))
// console.log(threeSum(
//     [0, 0, 0]
// ))
// console.log(threeSum(
//     [0, 0, 0, 0]
// ))
// console.log(threeSum(
//     [-1, 0, 1, 0]
// ))
console.log(threeSum(
    [3, 0, -2, -1, 1, 2]
))