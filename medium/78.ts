/**
    78. Subsets
 */
function subsets(nums: number[]): number[][] {
    const res: number[][] = []
    dfs([], 0, 0)
    return res

    function dfs(arr: number[], mask: number, cnt: number) {
        if (cnt > nums.length) return
        res.push(arr)
        for (let i = cnt; i < nums.length; ++i) {
            if ((mask >> i) & 1)
                continue
            arr.push(nums[i])
            mask |= 1 << i
            dfs(arr.slice(), mask, i + 1)
            arr.pop()
            mask = mask - (1 << i)
        }
    }
};