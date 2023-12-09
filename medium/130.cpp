/**
    # 130. Surrounded Regions
    BFS-approach
*/

class Solution {
public:
    void solve(vector<vector<char>>& board) {
        int m = board.size(), n = board[0].size();
        queue<vector<int>> q;
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        int dir[] = {-1, 0, 1, 0, 0, -1, 0, 1};

        // init queue
        for(int i = 0; i < m; ++i)
            for(int j = 0; j < n; ++j){
                if(board[i][j] == 'O' && (i == 0 || j == 0 || i == m - 1 || j == n - 1)){
                    q.push({i, j});
                    visited[i][j] = true;
                }
            }

        // bfs
        // visit all grid-'O' which doesn't be surrouded
        while(q.size()){
            vector<int> pos = q.front();
            int i = pos[0];
            int j = pos[1];
            q.pop(); 
            for(int k = 0; k < 8; k += 2){
                int x = i + dir[k];
                int y = j + dir[k + 1];
                if(x < 0 || y < 0 || x >= m || y >= n || visited[x][y] || board[x][y] == 'X') 
                    continue;
                visited[x][y] = true;
                q.push({x, y});
            }
        }

        // flip surrounded
        for(int i = 0; i < m; ++i)
            for(int j = 0; j < n; ++j)
                if(!visited[i][j]) 
                    board[i][j] = 'X';
    }
};
