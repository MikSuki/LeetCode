/**
    # 120. Triangle
*/
class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        vector<int> dp(1);
        dp[0] = triangle[0][0];

        for(int i = 1; i < triangle.size(); ++i){
            vector<int> tmp(dp.size() + 1, INT_MAX);

            for(int j = 0; j < dp.size(); ++j){
                tmp[j] = min(tmp[j], dp[j] + triangle[i][j]);
                tmp[j + 1] = min(tmp[j + 1], dp[j] + triangle[i][j + 1]);
            }

            dp = tmp;
        }

        int res = dp[0];
        for(int i = 1; i < dp.size(); ++i)
            res = min(res, dp[i]);
        
        return res;
    }
};
