/**
    # 198. House Robber
*/
class Solution {
public:
    int rob(vector<int>& nums) {
        int res = 0;
        int lm = 0;
        int cm = 0;

        for(int i = 0; i < nums.size(); ++i){
            int tmp = cm;
            cm = lm + nums[i];
            lm = max(lm, tmp);
            res = max(res, cm);
        }

        return res;
    }
};
