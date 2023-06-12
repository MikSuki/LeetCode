function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1: Set<number> = new Set()
    const set2: Set<number> = new Set()
    const dulp: number[] = []

    nums1.forEach(e => set1.add(e))
    nums2.forEach(e => {
        if(set1.has(e))
            dulp.push(e)
        else
            set2.add(e)
    })
    dulp.forEach(e => set1.delete(e))

    return [[...set1], [...set2]]
};