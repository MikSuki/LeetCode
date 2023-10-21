/**
    # 1425. Constrained Subsequence Sum
*/
class Solution {
public:
    int constrainedSubsetSum(vector<int>& nums, int k) {
        int n = nums.size();
        int res = -10000;
        deque<int> dq;
        vector<int> dp(n, 0);

        for(int i = n - 1; i >= 0; --i){
            // pop expired element
            while(dq.size() && dq.back() > i + k)
                dq.pop_back();
            
            // set value if we start at nums[i]
            dp[i] = dq.size() ? max(nums[i], nums[i] + dp[dq.back()]) : nums[i];

            // push i into the front of the dequeue
            while(dq.size() && dp[dq.front()] < dp[i])
                dq.pop_front();
            dq.push_front(i);

            // keep maximum
            res = max(res, dp[i]);
        }

        return res;
    }
};
