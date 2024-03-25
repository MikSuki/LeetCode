function findDuplicates(nums: number[]): number[] {
    const set: Set<number> = new Set()
    const res: number[] = []

    nums.forEach(num => {
        if(set.has(num))
            res.push(num)
        set.add(num)
    })

    return res
};
