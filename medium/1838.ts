/**
    1838. Frequency of the Most Frequent Element

    sliding window approach
 */
function maxFrequency(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    const n: number = nums.length;
    let l: number = 0;
    let cost: number = 0;
    let res: number = 1;

    for(let r = 1; r < n; ++r){
        cost += (r - l) * (nums[r] - nums[r - 1]);
        while(cost > k && l < r){
            cost -= nums[r] - nums[l];
            ++l
        }
        res = Math.max(res, r - l + 1);
    }   

    return res;
};
