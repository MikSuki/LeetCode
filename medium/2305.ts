/**
    問題:
        將一堆餅乾"公平"的分給k個孩子
        何謂公平? 
            大家的差越少越好，也就是最大值盡可能小

    方法:
        binary search + dfs
        
        distr[i]: 第i個孩子目前拿到的餅乾量

    時間:   
        O(k ^ |cookies|)
 */

function distributeCookies(cookies: number[], k: number): number {
    const distr: number[] = new Array(k).fill(0)
    let left = 0, right = cookies.reduce((sum, v) => sum + v, 0)

    while (left < right) {
        const mid = (left + right) >> 1

        for (let i = 0; i < k; ++i)
            distr[i] = 0

        if (dfs(0, mid))
            right = mid
        else
            left = mid + 1
    }

    return left

    function dfs(cur: number, mid: number): boolean {
        if (cur == cookies.length)
            return true

        for (let i = 0; i < k; ++i) {
            distr[i] += cookies[cur]
            if (distr[i] <= mid && dfs(cur + 1, mid))
                return true
            distr[i] -= cookies[cur]
        }
        return false
    }
};