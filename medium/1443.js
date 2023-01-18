/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    const map = {}
    for (const [u, v] of edges) {
        if (!map[u]) map[u] = []
        if (!map[v]) map[v] = []
        map[u].push(v)
        map[v].push(u)
    }
    const dfs = (root, u) => {
        let cost = 0
        for (const x of map[u])
            if (x !== root)
                cost += dfs(u, x)
        if (u !== 0 && (hasApple[u] || cost !== 0)) return cost + 2
        return cost
    }
    return dfs(-1, 0)
};