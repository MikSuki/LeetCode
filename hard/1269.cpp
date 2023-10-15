/**
    # 1269. Number of Ways to Stay in the Same Place After Some Steps
*/
class Solution {
public:
    int numWays(int steps, int arrLen) {
        int MOD = 1e9 + 7;
        int n = min(251, arrLen);
        vector<int> dp(n, 0);
        dp[0] = 1;

        for(int i = 1; i <= steps; ++i){
            vector<int> temp(n, 0);
            for(int j = 0; j < n; ++j){
                if(j != 0) temp[j] = dp[j - 1];
                temp[j] = (temp[j] + dp[j]) % MOD;
                if(j != n - 1) temp[j] = (temp[j] + dp[j + 1]) % MOD;
            }
            dp = temp;
        }

        return dp[0];
    }
};
