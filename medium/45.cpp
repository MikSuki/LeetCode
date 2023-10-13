/**
    # 45. Jump Game II
*/
class Solution {
public:
    int jump(vector<int>& nums) {
        int n = nums.size();
        if(n == 1) return 0;
        if(nums[0] >= n - 1) return 1;

        int step = 1;
        int next = nums[0];
        int lm = 0;

        for(int i = 1; i < n; ++i){
            if(i + nums[i] >= n - 1) return step + 1;
            lm = max(lm, i + nums[i]);
            if(i == next){
                step++;
                next = lm;
            }
        }
        
        return -1;
    }
};
