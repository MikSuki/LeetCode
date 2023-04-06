function search(nums: number[], target: number): number {
    let l = 0, r = nums.length -1;
    while(l <= r){
        const m = ~~((l + r) / 2)
        if(nums[m] == target) return m
        if(nums[m] > target) r = m - 1
        else l = m + 1
    }
    return -1  
};