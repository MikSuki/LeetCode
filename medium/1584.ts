/**
    1584. Min Cost to Connect All Points
 */
function minCostConnectPoints(points: number[][]): number {
    const n: number = points.length
    if (n == 1) return 0
    const roots: number[] = Array.from({ length: n }, (_, i) => i)
    const edges: number[][] = new Array(n * (n - 1) / 2).fill(null)
    let i: number = 0
    // get edges
    for (let u = 0; u < n; ++u)
        for (let v = u + 1; v < n; ++v) {
            const dist: number = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1])
            edges[i] = [u, v, dist]
            ++i
        }
    // sort by distance
    edges.sort((a: number[], b: number[]) => a[2] - b[2])

    // ---------------------------
    // Kruskal's algorithm
    const U: Set<number> = new Set()
    const V: Set<number> = new Set(Array.from({ length: n }, (_, i) => i))

    i = 0
    let turn: number = 0
    let res: number = 0

    while (turn < n - 1) {
        const [u, v, dist]: number[] = edges[i]
        ++i
        if (find(u) == find(v)) continue
        Union(u, v)
        res += dist
        ++turn
        U.add(u)
        U.add(v)
        V.delete(u)
        V.delete(v)
    }

    return res


    function find(x: number): number {
        if (x != roots[x])
            roots[x] = find(roots[x])
        return roots[x]
    }

    function Union(x: number, y: number) {
        x = find(x)
        y = find(y)
        if (x < y)
            roots[y] = x
        else
            roots[x] = y
    }
};