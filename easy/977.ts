/**
    977. Squares of a Sorted Array
 */

function sortedSquares(nums: number[]): number[] {
    const n: number = nums.length
    const res: number[] = new Array(n).fill(0)
    let l = 0, r = n - 1
    let idx = n - 1

    while (l <= r) {
        const vl = nums[l] ** 2
        const vr = nums[r] ** 2

        if (vl > vr) {
            res[idx] = vl
            ++l
        }
        else {
            res[idx] = vr
            --r
        }
        --idx
    }

    return res
};