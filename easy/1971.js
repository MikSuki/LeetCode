/**
 * dfs 找 兩點是否能到達
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if (n === 1) return true
    const paths = {}
    for (const [u, v] of edges) {
        if (paths[u] === undefined) paths[u] = new Set()
        if (paths[v] === undefined) paths[v] = new Set()
        paths[u].add(v)
        paths[v].add(u)
    }
    console.table(paths)
    const visited = new Set([])
    const dfs = (s, d) => {
        if (visited.has(s) || !paths[s]) return false
        visited.add(s)
        const nexts = paths[s]
        if (nexts.has(d)) return true
        return Array.from(nexts).some(x => dfs(x, d))
    }
    return dfs(source, destination)
};