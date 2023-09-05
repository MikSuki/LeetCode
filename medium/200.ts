/**
    200. Number of Islands
 */
function numIslands(grid: string[][]): number {
    function find(idx: number): number {
        if (idx != parents[idx])
            idx = find(parents[idx])
        return parents[idx]
    }

    const m: number = grid.length
    const n: number = grid[0].length
    const parents: number[] = new Array(m * n).fill(-1)
    const s: number[] = []
    const dir: number[] = [-1, 0, 1, 0, 0, -1, 0, 1]
    const toIdx = (i: number, j: number) => n * i + j
    let res: number = 0

    for (let i = 0; i < m; ++i)
        for (let j = 0; j < n; ++j)
            if (grid[i][j] == '1') {
                const idx: number = toIdx(i, j)
                parents[idx] = idx
                s.push(i, j)
                ++res
            }
    for (let l = 0; l < s.length; l += 2) {
        const [i, j]: number[] = [s[l], s[l + 1]]
        const p1: number = find(toIdx(i, j))
        for (let k = 0; k < 8; k += 2) {
            const [x, y] = [i + dir[k], j + dir[k + 1]]
            if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] == '0')
                continue
            const p2: number = find(toIdx(x, y))
            if (p1 != p2) {
                parents[p2] = p1
                --res
            }
        }
    }

    return res
};