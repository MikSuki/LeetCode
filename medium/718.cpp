#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int findLength(vector<int>& nums1, vector<int>& nums2) {
        vector<vector<int>> dp(nums1.size() + 1, vector<int> (nums2.size() + 1, 0));
        int ans = 0;
        for(int i = 1; i < dp.size(); ++i){
            for(int j = 1; j < dp[0].size(); ++j){
                if(nums1[i-1] == nums2[j-1]){
                    dp[i][j] = dp[i-1][j-1] + 1;
                    ans = max(ans, dp[i][j]);
                }
            }
        }
        return ans;
    }
};

int main(){
    Solution s;
    // vector<int> num1{1, 2, 3, 2, 1};
    // vector<int> num2{3, 2, 1, 4, 7};
    vector<int> num1{0, 0, 0, 0, 0};
    vector<int> num2{0, 0, 0, 0, 0};
    cout << s.findLength(num1, num2) << endl;
    return 1;
}