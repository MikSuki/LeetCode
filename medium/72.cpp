/**
    # 72. Edit Distance
*/
class Solution {
public:
    int minDistance(string word1, string word2) {
        int m = word1.size();
        int n = word2.size();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1));
        for(int i = 1; i <= m; ++i)
            dp[i][0] = i;
        for(int i = 1; i <= n; ++i)
            dp[0][i] = i;
        
        word1.insert(0, "-");
        word2.insert(0, "-");

        for(int i = 1; i <= m; ++i){
            for(int j = 1; j <= n; ++j){
                if(word1[i] == word2[j])
                    dp[i][j] = dp[i - 1][j - 1];
                else
                    dp[i][j] = min(dp[i-1][j-1], min(dp[i-1][j], dp[i][j-1])) + 1;
            }
        }

        return dp[m][n];
    }
};
