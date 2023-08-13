function maximumSafenessFactor(grid: number[][]): number {
    const n: number = grid.length

    // set safe distance
    const q: number[][] = []
    for (let i = 0; i < n; ++i)
        for (let j = 0; j < n; ++j) {
            if (grid[i][j])
                q.push([i, j])
        }
    const dir: number[] = [-1, 0, 1, 0, 0, -1, 0, 1]
    while (q.length) {
        const [i, j] = q.shift()
        for (let k = 0; k < 8; k += 2) {
            const [x, y] = [i + dir[k], j + dir[k + 1]]
            if (x < 0 || y < 0 || x >= n || y >= n || grid[x][y] != 0)
                continue
            grid[x][y] = grid[i][j] + 1
            q.push([x, y])
        }
    }
    console.log(grid)
    // binary search 
    let l = 0, r = n
    while (l < r) {
        const m = r - ~~((r - l) / 2);
        if (check(m))
            l = m
        else
            r = m - 1
    }

    // theif 那格為 1，所以要減 1
    return l - 1 >= 0 ? l - 1 : 0

    function check(target: number): boolean {
        const visited: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
        const q: number[][] = []
        if (grid[0][0] < target || grid[n - 1][n - 1] < target)
            return false

        q.push([0, 0])
        while (q.length) {
            const [i, j] = q.shift()
            for (let k = 0; k < 8; k += 2) {
                const [x, y] = [i + dir[k], j + dir[k + 1]]
                if (x < 0 || y < 0 || x >= n || y >= n || visited[x][y] || grid[x][y] < target)
                    continue
                if (x == n - 1 && y == n - 1)
                    return true
                visited[x][y] = 1
                q.push([x, y])
            }
        }
        return false
    }
};