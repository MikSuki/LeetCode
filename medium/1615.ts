/**
    1615. Maximal Network Rank
 */

function maximalNetworkRank(n: number, roads: number[][]): number {
    const degree: number[] = new Array(n).fill(0)
    const G: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
    roads.forEach((edge: number[]) => {
        const [u, v] = edge
        ++degree[u]
        ++degree[v]
        G[u][v] = 1
        G[v][u] = 1
    })

    let res = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            let sum = degree[i] + degree[j]
            if (G[i][j]) sum -= 1
            res = Math.max(res, sum)
        }
    }

    return res
};