/**
    2845. Count of Interesting Subarrays
 */
function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const n: number = nums.length
    const map: Map<number, number> = new Map() // <remainder, count>
    let cnt: number = 0
    let res: number = 0
    // prefix為null，有一個
    map.set(0, 1)

    for (let i = 0; i < n; ++i) {
        if (nums[i] % modulo == k) ++cnt
        // k1 = k2 + k
        // k2為prefix中，modulo=k的數量
        const k1: number = cnt % modulo
        const k2: number = (k1 - k + modulo) % modulo
        if (map.has(k2))
            res += map.get(k2)
        if (map.has(k1))
            map.set(k1, map.get(k1) + 1)
        else
            map.set(k1, 1)
    }

    return res
};