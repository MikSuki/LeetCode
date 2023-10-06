/**
    # 343. Integer Break
 */
class Solution {
    public int integerBreak(int n) {
        if(n == 2) return 1;
        if(n == 3) return 2;

        int[] dp = new int[n + 1];
        dp[2] = 2;
        dp[3] = 3;

        for(int k = 4; k <= n; ++k){
            int max = 0;
            for(int i = 1; i <= k / 2; ++i)
                max = Math.max(max, dp[i] * dp[k - i]);
            dp[k] = max;
        } 

        return dp[n];
    }
}
