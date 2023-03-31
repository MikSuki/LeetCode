function singleNonDuplicate(nums: number[]): number {
    if(nums.length == 1) return nums[0]
    let l = 0, r = nums.length - 1
    while(l < r) {
        let m = ~~((l + r) / 2)
        if(m % 2 != 0) m += 1
        if(nums[m - 1] == nums[m]) r = m - 1
        else if(nums[m + 1] == nums[m]) l = m + 1
        else return nums[m]
    }
};