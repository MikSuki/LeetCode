/**
    1631. Path With Minimum Effort
 */
function minimumEffortPath(heights: number[][]): number {
    const pq = new MinPriorityQueue({ priority: e => e[2] })
    const m: number = heights.length, n: number = heights[0].length
    const MAX: number = 1000000
    const dir: number[] = [-1, 0, 1, 0, 0, -1, 0, 1]
    const mem: number[][] = new Array(m)
    for (let i = 0; i < m; ++i) {
        mem[i] = new Array(n)
        for (let j = 0; j < n; ++j)
            mem[i][j] = MAX
    }
    mem[0][0] = 0
    pq.enqueue([0, 0, 0])

    while (pq.size()) {
        const [i, j, cost]: number[] = pq.dequeue().element
        if (i == m - 1 && j == n - 1) return cost
        for (let k = 0; k < 8; k += 2) {
            const [x, y] = [i + dir[k], j + dir[k + 1]]
            if (x < 0 || y < 0 || x >= m || y >= n) continue
            const ncost: number = Math.max(cost, Math.abs(heights[x][y] - heights[i][j]))
            if (ncost >= mem[x][y]) continue
            mem[x][y] = ncost
            pq.enqueue([x, y, ncost])
        }
    }
};