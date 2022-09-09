#include <iostream>
#include <vector>
using namespace std;

class Solution {
   public:
    int removeElement(vector<int> &nums, int val) {
        int c = 0, size = nums.size();
        for (int i = 0; i < size; ++i)
            if (nums[i] != val)
                nums[i - c] = nums[i];
            else
                ++c;
        return size - c;
    }
};

int main() {
    Solution s;
    vector<int> v = {3, 2, 2, 3};
    int len = s.removeElement(v, 3);
    for (int i = 0; i < len; ++i) cout << v[i] << ',';
    return 0;
}
