/**
    56. Merge Intervals
 */
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[1] - b[1])

    const n: number = intervals.length
    const res: number[][] = []
    const overlap = (i1: number[], i2: number[]) => i2[0] <= i1[1] && i2[1] >= i1[0]
    for (let i = 0; i < n; ++i) {
        const ni: number[] = intervals[i] // new interval
        let j = i + 1
        while (j < n && overlap(ni, intervals[j])) {
            ni[0] = Math.min(ni[0], intervals[j][0])
            ni[1] = intervals[j][1]
            ++j
        }
        while (res.length && overlap(ni, res[res.length - 1])) {
            ni[0] = Math.min(ni[0], res[res.length - 1][0])
            res.pop()
        }
        res.push(ni)
        i = j - 1
    }

    return res
};