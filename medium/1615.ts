/**
    1615. Maximal Network Rank
 */

function maximalNetworkRank(n: number, roads: number[][]): number {
    const G: Map<number, Set<number>> = new Map()
    const add = (G: Map<number, Set<number>>, u: number, v: number) => {
        if (G.has(u))
            G.get(u).add(v)
        else
            G.set(u, new Set([v]))
    }
    roads.forEach((edge: number[]) => {
        const [u, v] = edge
        add(G, u, v)
        add(G, v, u)
    })

    let res = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            const [si, sj] = [G.get(i), G.get(j)]
            let sum = 0
            if (si) sum += si.size
            if (sj) sum += sj.size
            if (si && si.has(j)) sum -= 1
            res = Math.max(res, sum)
        }
    }

    return res
};