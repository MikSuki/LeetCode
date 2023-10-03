/**
    1512. Number of Good Pairs
 */
function numIdenticalPairs(nums: number[]): number {
    const cnt: number[] = new Array(101).fill(0)
    nums.forEach(e => cnt[e]++)
    let res: number = 0
    const f = (c: number) => c * (c - 1) / 2
    cnt.forEach(c => res += f(c))
    return res
};
