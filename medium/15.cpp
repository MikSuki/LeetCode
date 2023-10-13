/**
    # 15. 3Sum
*/
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> res;
        int n = nums.size();

        for(int i = 0; i < n - 2; ++i){
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            int j = i + 1;
            int k = n - 1;
            int target = nums[i] * -1;

            while(j < k){
                int sum = nums[j] + nums[k];
                if(sum == target){
                    res.push_back(vector<int>{nums[i], nums[j], nums[k]});
                    while(j < k && nums[j + 1] == nums[j])
                        ++j;
                    while(j < k && nums[k - 1] == nums[k])
                        --k;
                    ++j;
                    --k;
                }
                else if(sum < target) ++j;
                else --k;
            }
        }

        return res;
    }
};
