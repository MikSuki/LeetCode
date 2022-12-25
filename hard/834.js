/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    if (n === 1) return [0]
    const paths = {}
    const count = new Array(n).fill(null).map(() => 0)
    const dist = new Array(n).fill(null).map((() => 0))
    for (const [u, v] of edges) {
        if (!paths[u]) paths[u] = new Set()
        if (!paths[v]) paths[v] = new Set()
        paths[u].add(v)
        paths[v].add(u)
    }
    // count num of nodes in each subtree
    const countNodes = (root, parent) => {
        for (const x of paths[root]) {
            if (x !== parent) {
                countNodes(x, root)
                count[root] += count[x] + 1
                dist[root] += count[x] + dist[x] + 1
            }
        }
    }
    const dfs = (root, parent) => {
        for (const x of paths[root]) {
            if (x !== parent) {
                dist[x] = dist[root] + n - 2 * (count[x] + 1)
                dfs(x, root)
            }
        }
    }

    countNodes(0, -1)
    dfs(0, -1)
    return dist
};