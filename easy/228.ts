function summaryRanges(nums: number[]): string[] {
    let l = 0
    const res: string[] = []

    while (l < nums.length) {
        let r = l + 1
        while (r < nums.length && nums[r] - 1 == nums[r - 1])
            ++r
        res.push(l == r - 1 ? `${nums[l]}` : `${nums[l]}->${nums[r - 1]}`)
        l = r
    }
    return res
};