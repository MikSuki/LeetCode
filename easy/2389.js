/**
 * 
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b)
    const prefix_sum = [nums[0]]
    const output = []
    for(let i = 1; i < nums.length; ++i)
        prefix_sum.push(prefix_sum.at(-1) + nums[i])
    // binary search
    const predecessor = (arr, v) => {
        let idx = -1;
        let l = 0, r = arr.length - 1;
        while(l <= r){
            const m = ~~((l + r) / 2)
            if(arr[m] <= v){
                idx = m
                l = m + 1
            }
            else
                r = m - 1
        }
        return idx
    }
    queries.forEach(e => output.push(predecessor(prefix_sum, e) + 1))
    return output
};