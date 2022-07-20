/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const output = [];
    if (nums.length >= 4) {
        nums.sort((a, b) => a - b);
        kSum(nums, target, 4, 0, []);
    }
    return output;

    function kSum(nums, target, k, start, arr) {
        const len = nums.length;
        if (k > len - start) return;
        if (k === 2)
            twoSum(nums, target, start, arr);
        else
            for (let i = start; i < len; ++i) {
                if(i !== start && nums[i] === nums[i-1]) continue;
                kSum(nums, target - nums[i], k - 1, i + 1, arr.concat([nums[i]]));
            }
    }
    
    function twoSum(nums, target, start, arr) {
        let low = start,
            high = nums.length - 1;
        while (low < high) {
            const sum = nums[low] + nums[high];
            if (sum === target) {
                output.push(arr.concat([nums[low], nums[high]]));
                while (nums[low] === nums[low + 1]) ++low;
                while (nums[high] === nums[high - 1]) --high;
                ++low;
                --high;
            } else if (sum < target)
                ++low;
            else
                --high;
        }
    }
    
};



console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([2, 2, 2], 8));