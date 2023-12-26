// # 1155. Number of Dice Rolls With Target Sum
class Solution {
public:
    int numRollsToTarget(int n, int k, int target) {
        const int MOD = 1e9 + 7;
        vector<int> dp(target + 1, 0);
        dp[0] = 1;

        for(int i = 0; i < n; ++i){
            vector<int> tmp(target + 1, 0);

            for(int j = 1; j <= k; ++j){
                for(int l = 0; l < target; ++l){
                    if(j + l <= target)
                        tmp[j + l] = (tmp[j + l] + dp[l]) % MOD;
                }
            }

            dp = tmp;
        }

        return dp[target];
    }
};
