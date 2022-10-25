class Solution {
public:
    int jump(vector<int>& nums) {
        int jumps = 0, cur_end = 0, cur_far = 0;
        for(int i = 0; i < nums.size() - 1; ++i){
            cur_far = max(cur_far, i + nums[i]);
            if(i == cur_end){
                cur_end = cur_far;
                ++jumps;
            }
        }
        return jumps;
    }
};