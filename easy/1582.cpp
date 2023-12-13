// 1582. Special Positions in a Binary Matrix

class Solution {
public:
    int numSpecial(vector<vector<int>>& mat) {
        int m = mat.size(), n = mat[0].size();
        vector<int> row(m, -1), col(n, -1);
        int res = 0;

        for(int i = 0; i < m; ++i){
            for(int j = 0; j < n; ++j){
                if(mat[i][j] == 0) continue;
                set(row, i, j);
                set(col, j, i);
            }
        }

        for(int i = 0; i < m; ++i)
            if(row[i] >= 0 && col[row[i]] >= 0)
                ++res;
        
        return res;
    }

private:
    void set(vector<int>& vec, int pos, int ele){
        // -1: null /  -2: more than one element
        vec[pos] = vec[pos] == -1 ? ele : -2;
    }
};
