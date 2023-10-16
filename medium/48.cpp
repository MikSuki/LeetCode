/**
    # 48. Rotate Image
*/
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int t = 0, b = matrix.size() - 1, l = 0, r = matrix.size() - 1;

        while(t < b){
            int k = r - l + 1;
            vector<int> tmp(k, 0);

            for(int i = k - 1; i >= 0; --i){
                tmp[i] = matrix[t][l + i];
                matrix[t][l + i] = matrix[b - i][l];
            }

            for(int i = 1; i < k - 1; ++i)
                matrix[b - i][l] = matrix[b][r - i];

            for(int i = 1; i < k; ++i)
                matrix[b][r - i] = matrix[t + i][r];

            for(int i = 1; i < k; ++i)
                matrix[t + i][r] = tmp[i];

            ++t;
            --b;
            ++l;
            --r; 
        }
    }
};
