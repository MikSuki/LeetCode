#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
   public:
    int searchInsert(vector<int>& nums, int target) {
        return lower_bound(nums.begin(), nums.end(), target) - nums.begin();
    }
};

int main() {
    vector<int> v = {1, 3, 5, 6};
    Solution s;
    cout << s.searchInsert(v, 5) << endl;
}