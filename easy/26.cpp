class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int c = 0,
            size = nums.size();
        for(int i = 1; i < size; ++i)
            if(nums[i] == nums[i - 1]) ++c;
            else nums[i - c] = nums[i];
            
        return size - c;
    }
};

