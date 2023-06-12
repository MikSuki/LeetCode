class Solution {
    class Pos{
        int x, y;
        Pos(int x, int y){
            this.x = x;
            this.y = y;
        }
    }

    public int[][] updateMatrix(int[][] mat) {
        final int m = mat.length;
        final int n = mat[0].length;
        Queue<Pos> q = new LinkedList<>();
        for(int i = 0; i < m; ++i)
            for(int j = 0; j < n; ++j)
                if(mat[i][j] == 1)
                    mat[i][j] = -1;
                else
                    q.offer(new Pos(i, j));
        // BFS
        final int[] dir = {-1, 0, 0, -1, 1, 0, 0, 1};
        while(!q.isEmpty()){
            Pos pos = q.poll();
            for(int i = 0; i < 8; i += 2){
                final int x = pos.x + dir[i], y = pos.y + dir[i + 1];
                if(x < 0 || y < 0 || x >= m || y >= n || mat[x][y] >= 0)
                    continue;
                mat[x][y] = mat[pos.x][pos.y] + 1;
                q.offer(new Pos(x, y));
            }
        }
        return mat;
    }
}