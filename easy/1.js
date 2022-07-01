/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    const len = nums.length;
    for (let i = 0; i < len; ++i)
        map.set(nums[i], i);
    for (let i = 0; i < len; ++i) {
        const key = map.get(target - nums[i]);
        if (key != undefined && i != key)
            return [i, key];
    }

};

console.log(twoSum([3, 2, 4], 6));