/**
    # 1143. Longest Common Subsequence
*/
class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int m = text1.size(), n = text2.size();
        vector<vector<int>> dp(m + 1, vector(n + 1, 0));
        text1.insert(0, "-");
        text2.insert(0, "-");

        for(int i = 1; i <= m; ++i){
            for(int j = 1; j <= n; ++j){
                if(text1[i] == text2[j])
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else 
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        return dp[m][n];
    }
};