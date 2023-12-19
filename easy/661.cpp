// # 661. Image Smoother

class Solution {
public:
    vector<vector<int>> imageSmoother(vector<vector<int>>& img) {
        int m = img.size(), n = img[0].size();
        vector<vector<int>> res(m, vector<int>(n, 0));
        for(int i = 0; i < m; ++i)
            for(int j = 0; j < n; ++j)
                helper(img, res, i, j, m, n);
        return res;       
    }

private: 
    void helper(vector<vector<int>> &img, vector<vector<int>> &res, int i, int j, int m, int n){
        int xx = i == 0 ? i : i - 1, yy = j == 0 ? j : j - 1;
        int sum = 0;
        int cnt = 0;
        for(int x = xx; x <= i + 1 && x < m; ++x)
            for(int y = yy; y <= j + 1 && y < n; ++y){
                ++cnt;
                sum += img[x][y];
            }
        res[i][j] = sum / cnt;
    }
};
