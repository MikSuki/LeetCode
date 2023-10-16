/**
    # 119. Pascal's Triangle II
*/
class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> res(min(rowIndex, 1) + 1, 1);

        for(int i = 2; i <= rowIndex; ++i){
            vector<int> tmp(1, 1);
            for(int j = 1; j < res.size(); ++j)
                tmp.push_back(res[j - 1] + res[j]);
            tmp.push_back(1);
            res = tmp;
        }

        return res;
    }
};
