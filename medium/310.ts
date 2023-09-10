/**
    310. Minimum Height Trees
 */
function findMinHeightTrees(n: number, edges: number[][]): number[] {
    const G: number[][] = new Array(n).fill(0).map(() => [])
    const deg: number[] = new Array(n).fill(0)
    const q: number[] = []
    const height: number[] = new Array(n).fill(0)
    let cnt: number = 0

    edges.forEach(e => {
        ++deg[e[0]]
        ++deg[e[1]]
        G[e[0]].push(e[1])
        G[e[1]].push(e[0])
    })

    for (let i = 0; i < n; ++i)
        if (deg[i] == 1)
            q.push(i)

    while (q.length) {
        let len: number = q.length
        ++cnt
        while (--len >= 0) {
            const x: number = q.shift()
            --deg[x]
            height[x] = cnt
            G[x].forEach((v) => {
                --deg[v]
                if (deg[v] == 1)
                    q.push(v)
            })
        }
    }
    return height.reduce((arr, v, i) => {
        if (v == cnt) arr.push(i)
        return arr
    }, [])
};