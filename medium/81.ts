function search(nums: number[], target: number): boolean {
    const n: number = nums.length
    let l: number = 0, r: number = n - 1

    while(l <= r){
        const m: number = l + ~~((r - l) / 2)

        if(nums[m] == target)
            return true
        if(nums[l] == nums[m]){
            ++l
            continue
        }
        const f1 = nums[l] < nums[m]
        const f2 = nums[l] <= target
        if(f1 != f2){
            if(f1)
                l = m + 1
            else
                r = m - 1
        }
        else {
            if(nums[m] < target)
                l = m + 1
            else
                r = m - 1
        }
    }
    return false
};
