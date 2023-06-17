/*
    問題: 
        給兩個array，arr1和arr2，
        能使用把arr1的元素替換成arr2的，也就是 arr1[i] = arr2[j]
        求最少的替換次數

    方法:
        dp==

        dp[i][j]: arr[1..i] 用了 j 次替換後，結尾的值
        所以dp過程要使結尾盡可能小，未來更具發展淺力

        Case.1: dp[i-1][j] < arr[i] => 直接append，dp[i][j] = arr[i]
        Case.2: dp[i-1][j-1] < dp[i][j] => binary search 找可能較小的結尾，dp[i][j] = upper_bound(dp[i-1][j-1])

    時間: O(|arr1| * |arr2| * log|arr2|)
*/

class Solution {
public:
    int makeArrayIncreasing(vector<int>& arr1, vector<int>& arr2) {
        int n = arr1.size();
        int m = arr2.size();
        arr1.insert(arr1.begin(), -1);
        auto dp = vector<vector<int>>(n + 1, vector<int> (m + 1, INT_MAX));
        sort(arr2.begin(), arr2.end());
        dp[0][0] = -1;

        for(int i = 1; i <= n; ++i){
            for(int j = 0; j <= m; ++j){
                if(dp[i-1][j] < arr1[i])
                    dp[i][j] = arr1[i];
                if(j >= 1 && dp[i-1][j-1] < dp[i][j]){
                    auto iter = upper_bound(arr2.begin(), arr2.end(), dp[i-1][j-1]);
                    if(iter != arr2.end())
                        dp[i][j] = min(dp[i][j], *iter);
                }
            }
        }

        int res = INT_MAX;
        for(int j = 0; j <= m; ++j)
            if(dp[n][j] != INT_MAX)
                res = min(res, j);
        
        return res == INT_MAX ? -1 : res;
    }
};
