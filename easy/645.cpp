class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        const int size = nums.size();
        int arr[size+1];
        for(int i = 1; i < size+1; ++i)
            arr[i] = 0;
        vector<int> output;
        for(int i = 0; i < size; ++i)
            if(++arr[nums[i]] > 1) 
                output.push_back(nums[i]);
        for(int i = 1; i < size+1; ++i)
            if(arr[i] == 0)
                output.push_back(i);
        return output;
    }
};