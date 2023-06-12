function numEnclaves(grid: number[][]): number {
    const visited: number[][] = grid.slice() // 0: sea / 1: unvisited land / 2: visited land
    const m = grid.length, n = grid[0].length
    let is_enc: boolean
    let output = 0
    let cnt: number
    const dfs = (i: number, j: number) => {
        if( i < 0 || j < 0 || i >= m || j >= n || visited[i][j] != 1) return
        // visit this land
        visited[i][j] = 2
        ++cnt
        // is boundary ?
        if(i == 0 || j == 0 || i == m - 1 || j == n - 1)
           is_enc = false
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    
    for(let i = 0; i < m; ++i)
        for(let j = 0; j < n; ++j){
            if(visited[i][j] == 1){
                is_enc = true
                cnt = 0
                dfs(i, j)
                if(is_enc) output += cnt
            }
        }
    return output
};