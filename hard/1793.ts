/**
    # 1793. Maximum Score of a Good Subarray
 */
function maximumScore(nums: number[], k: number): number {
    const n = nums.length;
    let l = k, r = k;
    let min = nums[k];
    let res = nums[k];

    while(l > 0 || r < n - 1){
        while(l >= 0 && nums[l] >= min)
            --l;
        while( r < n && nums[r] >= min)
            ++r;
        res = Math.max(res, min * (r - l - 1));
        min = Math.max(l >= 0 ? nums[l] : -1, r < n ? nums[r] : -1);
    }

    return Math.max(res, min * (r - l + 1));
};
