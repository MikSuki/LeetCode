/**
    994. Rotting Oranges
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const q = new Queue()
    const dir = [-1, 0, 1, 0, 0, -1, 0, 1]
    let nof = 0 // # of fresh
    let res = 0

    for (let i = 0; i < m; ++i)
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] == 1)
                ++nof
            else if (grid[i][j] == 2)
                q.enqueue(i).enqueue(j)
        }

    if (nof == 0) return 0

    while (q.size()) {
        let len = q.size() / 2
        ++res
        while (--len >= 0) {
            const [i, j] = [q.dequeue(), q.dequeue()]
            // console.log(i, j)
            for (let k = 0; k < 8; k += 2) {
                const [x, y] = [i + dir[k], j + dir[k + 1]]
                if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] != 1)
                    continue
                if (--nof == 0) return res
                grid[x][y] = 2
                q.enqueue(x).enqueue(y)
            }
        }
    }
    return -1
};