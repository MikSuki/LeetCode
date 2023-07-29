/**
    題目:   
        486. Predict the Winner

    描述:
        給一個array，兩玩家每次能選array的頭或尾的分數
        兩個玩家都會選擇最好的
        求第一個玩家會不會贏(分數相等算他贏)

    方法:
        dp==

        dp[i][j] -> nums[i..j]的相差分數
        所以從dp[0][nums.length-1]開始
        每次選頭或尾，然後在往下遞迴
        dp[i][j]選擇max(<i+1, j>, <i, j-1>)
        最後回傳dp[i][nums.length - 1]

    時間:
        O(n^2)
 */

function PredictTheWinner(nums: number[]): boolean {
    const n: number = nums.length
    const memo: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(-1))
    
    return maxDiff(0, n - 1) >= 0

    function maxDiff(l: number, r: number): number{
        if(memo[l][r] != -1) return memo[l][r]
        if(l == r) return nums[l]

        const sl: number = nums[l] - maxDiff(l + 1, r)
        const sr: number = nums[r] - maxDiff(l, r - 1)
        memo[l][r] = Math.max(sl, sr)

        return memo[l][r]
    }

};
