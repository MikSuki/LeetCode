/**
    題目:
        77. Combinations

    描述:
        得到C(n,k)的內容

    方法:   
        recursive

    時間:
        O(C(n, k))

 */

function combine(n: number, k: number): number[][] {
    const res: number[][] = []

    dfs([], 1)

    return res

    function dfs(arr: number[], idx: number) {
        if (arr.length == k) {
            res.push(arr.slice())
            return
        }

        for (let i = idx; i <= n; ++i) {
            arr.push(i)
            dfs(arr, i + 1)
            arr.pop()
        }

    }
};
