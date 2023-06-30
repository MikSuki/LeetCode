/**
    問題: 
        給2d-array，代表每天會有洪水的地方
        找出最多在第幾天，都可以從第一列走到最下面一列

    方法:
        Union-Find

        最後一天必定是整張圖都是洪水，因此從最後一天開始，讓圖產生一點一點的陸地
        每產生一格陸地，就和鄰居union
        當出現上面一列的parent和最下面那列的任兩格子之parent相等，就代表路出現了path

    時間:
        O(d * α(n))

 */

function latestDayToCross(row: number, col: number, cells: number[][]): number {
    const parents: number[] = Array.from({ length: row * col + 2 }, (_, i) => i)
    const grid: number[][] = new Array(row).fill(0).map(() => new Array(col).fill(0))
    for (const [i, j] of cells) grid[i - 1][j - 1] = 1
    const dir: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    for (let i = 0; i < col; ++i)
        union(row * col, i)
    for (let i = col * (row - 1); i < col * row; ++i)
        union(row * col + 1, i)

    for (let d = cells.length - 1; d >= 0; --d) {
        let [i, j] = [cells[d][0] - 1, cells[d][1] - 1]
        grid[i][j] = 0

        for (const [x, y] of dir) {
            const [ii, jj] = [i + x, j + y]
            if (ii < 0 || jj < 0 || ii >= row || jj >= col)
                continue
            if (grid[ii][jj] == 1)
                continue

            union(i * col + j, ii * col + jj)
        }

        if (find(row * col) == find(row * col + 1))
            return d

    }

    return 0

    function find(x: number): number {
        if (parents[x] != x)
            parents[x] = find(parents[x])
        return parents[x]
    }

    function union(x: number, y: number) {
        const px = find(x), py = find(y)
        if (px < py)
            parents[py] = px
        else
            parents[px] = py
    }
};