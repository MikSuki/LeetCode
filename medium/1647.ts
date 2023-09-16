/**
    1647. Minimum Deletions to Make Character Frequencies Unique
 */
function minDeletions(s: string): number {
    const cnt: number[] = new Array(26).fill(0)
    const sorted: number[] = []
    for (const c of s)
        cnt[c.charCodeAt(0) - 97]++
    for (const v of cnt)
        if (v != 0) sorted.push(v)
    sorted.sort((a, b) => b - a)
    let left: number = sorted[0]
    let res: number = 0
    for (let i = 1; i < sorted.length; ++i) {
        if (left < 1)
            res += sorted[i]
        else if (sorted[i] < left)
            left = sorted[i]
        // sorted >= left
        else {
            --left
            res += sorted[i] - left
        }
    }

    return res
};