/**
    題目:
        46. Permutations

    描述:
        給一個array，求他的permutation

    方法:   
        recursive
    
    時間:
        O(n!)

 */

function permute(nums: number[]): number[][] {
    const n: number = nums.length
    const M: number = 2 ** n - 1
    const res: number[][] = []

    recursive([], 0)

    return res

    function recursive(arr: number[], mask: number) {
        if (mask == M) {
            res.push(arr.slice())
            return
        }

        for (let i = 0; i < n; ++i) {
            if (mask >> i & 1) continue
            arr.push(nums[i])
            mask |= 1 << i
            recursive(arr, mask)
            arr.pop()
            mask &= M - (1 << i)
        }
    }
};