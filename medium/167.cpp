/**
    # 167. Two Sum II - Input Array Is Sorted
*/
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int l = 0, r = numbers.size() - 1;
        while(true){
            int sum = numbers[l] + numbers[r];
            if(sum == target)
                return vector<int> {l + 1, r + 1};
            if(sum < target) ++l;
            else --r;
        }
    }
};
