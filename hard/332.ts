/**
  332. Reconstruct Itinerary
 */
function findItinerary(tickets: string[][]): string[] {
    const G = {}
    for (const [u, v] of tickets) {
        if (!G[u]) G[u] = []
        G[u].push(v)
    }
    for (const key in G) {
        G[key].sort().reverse()
    }

    const res: string[] = []
    dfs('JFK')
    return res.reverse()

    function dfs(p: string) {
        while (G[p] && G[p].length)
            dfs(G[p].pop())
        res.push(p)
    }
};