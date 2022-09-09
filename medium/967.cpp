#include <iostream>
#include <vector>

using namespace std;

class Solution {
   public:
    vector<int> numsSameConsecDiff(int n, int k) {
        vector<int> idx, output, temp;
        int start = 0;
        while (start + k < 10) {
            idx.push_back(start);
            idx.push_back(start + k);
            ++start;
        }
        for (auto it = begin(idx); it != end(idx); it += 2) {
            int t = n, v = 0, v2 = 0, sum = 1, f = 1;
            auto i = it;
            if (*it == 0) f = 0;

            while (t > 0) {
                v = v * 10 + *i;
                v2 = v2 * 10 + *(i + sum);
                i += sum;
                sum *= -1;
                --t;
            }

            if (f) output.push_back(v);
            temp.push_back(v2);
        }
        if (k != 0)
            for (auto it = begin(temp); it < end(temp); ++it)
                output.push_back(*it);
        return output;
    }
};

int main() {
    Solution s;
    // vector<int> output = s.numsSameConsecDiff(9, 7);
    vector<int> output = s.numsSameConsecDiff(2, 1);
    for (auto it = begin(output); it != end(output); ++it) cout << *it << endl;
}