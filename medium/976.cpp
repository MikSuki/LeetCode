class Solution {
   public:
    int largestPerimeter(vector<int>& nums) {
        sort(begin(nums), end(nums));
        for(auto i = nums.size() - 1; i >= 2; --i)
            if(nums[i - 1] + nums[i - 2] > nums[i])
                return nums[i - 1] + nums[i - 2] + nums[i];
        return 0;
    }
};
