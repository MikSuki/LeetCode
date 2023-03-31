function maxDistance(grid: number[][]): number {
    const n = grid.length
    const visited: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
    const q: number[] = []
    const append = (x: number, y: number) => {
        if(x < 0 || x >= n || y < 0 || y >= n || visited[x][y]) return
        q.push(x, y)
        visited[x][y] = 1
    }
    let output = -1
    // init
    for(let i = 0; i < n; ++i)
        for(let j = 0; j < n; ++j)
            if(grid[i][j]) {
                q.push(i, j)
                visited[i][j] = 1
            }
    // BFS
    while(q.length){
        let t = q.length / 2
        while(t--){
            const x = q.shift(), y = q.shift()
            append(x - 1, y)
            append(x, y - 1)
            append(x + 1, y)
            append(x, y + 1)
        }
        ++output
    }
    return output <= 0 ? -1 : output
};