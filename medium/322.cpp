/**
    # 322. Coin Change
*/
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        int n = coins.size();
        vector<long> dp(amount + 1, INT_MAX);
        dp[0] = 0;

        for(int i = 1; i <= amount; ++i){
            for(int j = 0; j < n; ++j){
                int last = i - coins[j];
                if(last >= 0)
                    dp[i] = min(dp[i], dp[last] + 1);
            }
        }

        return dp[amount] == INT_MAX ? -1 : dp[amount];
    }
};
