/**
    238. Product of Array Except Self
 */
function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length
    const pf: number[] = new Array(n + 1).fill(0)
    const sf: number[] = new Array(n + 1).fill(0)
    pf[0] = 1
    sf[n] = 1
    for (let i = 1; i <= n; ++i)
        pf[i] = pf[i - 1] * nums[i - 1]
    for (let i = n - 1; i >= 0; --i)
        sf[i] = sf[i + 1] * nums[i]
    const res: number[] = []
    for (let i = 1; i <= n; ++i)
        res.push(pf[i - 1] * sf[i])

    return res
};