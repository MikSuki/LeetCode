function shuffle(nums: number[], n: number): number[] {
    const res: number[] = []
    for(let i = 0; i < n; ++i)
        res.push(nums[i], nums[i + n])
    return res
};