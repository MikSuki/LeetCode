function closedIsland(grid: number[][]): number {
    const visited: number[][] = grid.slice() // 0: unvisited land / 1: water / 2: visited land
    const m = grid.length, n = grid[0].length
    let is_il: boolean
    let output = 0
    const dfs = (i: number, j: number) => {
        if( i < 0 || j < 0 || i >= m || j >= n || visited[i][j] != 0) return
        // visit this land
        visited[i][j] = 2
        // is boundary ?
        if(i == 0 || j == 0 || i == m - 1 || j == n - 1)
           is_il = false
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    
    for(let i = 0; i < m; ++i)
        for(let j = 0; j < n; ++j){
            if(visited[i][j] == 0){
                is_il = true
                dfs(i, j)
                if(is_il) ++output
            }
        }
    return output
};