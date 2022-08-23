/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const ouput = [-1, -1];
    let i = 0,
        j = nums.length - 1,
        mid;
    
    while(i < j){
        mid = ~~((i + j) / 2);
        if(nums[mid] < target) i = mid + 1;
        else j = mid;
    }
    if(nums[i] !== target) return ouput;
    ouput[0] = i;
    
    j = nums.length - 1;
    while(i < j){
        mid = ~~((i + j) / 2) + 1;
        if(nums[mid] > target) j = mid - 1;
        else i = mid;
    }
    ouput[1] = j;
    
    return ouput;
}


console.log(searchRange([1, 2, 3, 4, 5], 3.3))
console.log(searchRange([5, 7, 7, 8], 8))
console.log(searchRange([5, 7, 7, 8], 5))
console.log(searchRange([5, 7, 7, 8, 8, 10], 5))
console.log(searchRange([5, 7, 7, 8, 8, 10], 7))
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 10))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([], 0))