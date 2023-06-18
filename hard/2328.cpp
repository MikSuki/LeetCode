/*
    問題: 給m*m矩陣，找出所以嚴格遞增的paths，兩paths只要有不相同的格子就算不相同

    方法: dfs + dp
        dp[i][j]記得是以grid[i][j]開頭的個數

        4 directions
            if(grid[i][j] < grid[x][y]) dp[i][j] += dp[x][y]
        dp[i][j] += 1 (他自己)

    時間: O(m  *n)

*/
const long MOD = 1e9+7;

class Solution {
public:
    vector<vector<long long>>paths;
    int n, m;

    int countPaths(vector<vector<int>>& grid) {
        n = grid.size();
        m = grid[0].size();
        paths = vector<vector<long long>>(n, vector<long long>(m, 0));
        long long res = 0;
        
        for(int i = 0; i < n; ++i)
            for(int j = 0; j < m; ++j)
                res = (res + dfs(grid, i, j)) % MOD;

        return res;
    }

    int dfs(vector<vector<int>>& grid, int i, int j){
        if(paths[i][j] != 0) return paths[i][j];
        paths[i][j] = 1;

        vector<pair<int, int>> dirs({{-1, 0}, {1, 0}, {0, -1}, {0, 1}});
        for(int k = 0; k < 4; ++k){
            int x = i + dirs[k].first;
            int y = j + dirs[k].second;
            if(x < 0 || y < 0 || x >= n || y >= m) continue;
            else if(grid[x][y] <= grid[i][j]) continue;
            paths[i][j] = (paths[i][j] + dfs(grid, x, y)) % MOD;
        }

        return paths[i][j];
    }
};