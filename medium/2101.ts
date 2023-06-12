function maximumDetonation(bombs: number[][]): number {
    const n = bombs.length
    const G = new Array(n).fill(0).map(() => new Array(n).fill(0))
    const visited = new Array(n).fill(0)
    let res = 0
    // build graph
    for(let i = 0; i < bombs.length; ++i){
        const [x1, y1, r1] = bombs[i]
        for(let j = 0; j < bombs.length; ++j){
            if(i != j){
                const [x2, y2] = bombs[j]
                const dist = (x2 - x1) ** 2 + (y2 - y1) ** 2
                if(dist <= r1 * r1)
                    G[i][j] = 1
            }
        }
    }
    // BFS
    for(let i = 0; i < n; ++i){
        let c = 1
        visited.fill(0)
        const q: number[] = [i]
        visited[i] = 1
        while(q.length){
            const k = q.shift()
            for(let j = 0; j < n; ++j){
                if(G[k][j] && !visited[j]){
                    q.push(j)
                    visited[j] = 1
                    ++c
                }
            }
        }
        res = Math.max(res, c)
    }

    return res
};