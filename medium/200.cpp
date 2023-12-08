/**
    # 200. Number of Islands
*/

class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int m = grid.size(), n = grid[0].size();
        vector<int> root(m * n, -1);

        // init root
        for(int i = 0; i < m; ++i)
            for(int j = 0; j < n; ++j)
                if(grid[i][j] == '1'){
                    int idx = getIdx(i, j, n);
                    root[idx] = idx;
                }

        // union
        for(int i = 0; i < m; ++i)
            for(int j = 0; j < n; ++j){
                int idx = getIdx(i, j, n);
                // union right
                if(j != n - 1)
                    Union(root, idx, idx + 1);
                // union below
                if(i != m - 1)
                    Union(root, idx, idx + n);
            }

        // count island
        unordered_set<int> set;
        for(int i = 0; i < m * n; ++i){
            find(root, i);
            set.insert(root[i]);
        }

        return set.find(-1) != set.end() ? set.size() - 1 : set.size(); // remove -1
    }

private: 
    int getIdx(int x, int y, int n){
        return x * n + y;
    }

    int find(vector<int> &root, int idx){
        if(root[idx] == -1) return -1;
        if(root[idx] != idx)
            root[idx] = find(root, root[idx]);
        return root[idx];
    }

    void Union(vector<int> &root, int x, int y){
        if(root[x] == -1 || root[y] == -1) return;
        int px = find(root, x), py = find(root, y);
        if(px < py) root[py] = root[px];
        else root[px] = root[py];
    }
};
