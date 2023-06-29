function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    const m: number = nums1.length
    const n: number = nums2.length 
    const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

    for(let i = 1; i <= m; ++i){
        for(let j = 1; j <= n; ++j){
            if(nums1[i-1] == nums2[j-1])
                dp[i][j] = dp[i-1][j-1] + 1
            else
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
        }
    }
    
    return dp[m][n]
};