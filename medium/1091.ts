function shortestPathBinaryMatrix(grid: number[][]): number {
    const n = grid.length
    if(grid[0][0] == 1 || grid[n - 1][n - 1] == 1) return -1
    const dp: number[][] = new Array(n).fill(-1).map(() => new Array(n).fill(-1))
    dp[0][0] = 1
    let q: number[] = [0, 0, 1]
    const dir = [-1, -1, -1, 0, -1, 1, 0, -1, 0, 1, 1, -1, 1, 0, 1, 1]
    while(q.length){
        const x = q.shift(), y = q.shift(), l = q.shift()
        if(x == n && y == n) return l
        if(grid[x][y] == 1) continue
        for(let j = 0; j < dir.length; j += 2){
            const nx = x + dir[j], ny = y + dir[j + 1]
            if(!(nx < 0 || nx >= n || ny < 0 ||ny >= n || dp[nx][ny] != -1)){
                q.push(nx, ny, l + 1)
                dp[nx][ny] = l + 1
            }
        }
    }

    return dp[n - 1][n - 1]
};