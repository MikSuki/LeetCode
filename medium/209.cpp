/**
    # 209. Minimum Size Subarray Sum
*/
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int l = 0, r = 0;
        int window = 0;
        int res = 100001;

        while(r < nums.size()){
            window += nums[r];
            while(window >= target){
                res = min(res, r - l + 1);
                window -= nums[l];
                ++l;
            }
            ++r;
        }

        return res >= 100001 ? 0 : res;
    }
};
