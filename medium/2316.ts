function countPairs(n: number, edges: number[][]): number {
    const forests: Map<number, Set<number>> = new Map()
    const visited: number[] = new Array(n).fill(0)
    function merge(A: Set<number>) {
        A.forEach(v => recur(v))

        function recur(idx: number){
            if(visited[idx]) return
            visited[idx] = 1
            forests.get(idx)?.forEach(e => recur(e))
            A.add(idx)
            forests.delete(idx)
        }
    }
    const comb2 = (n: number) => n * (n - 1) / 2
    let res = comb2(n)

    for(let i = 0; i < n; ++i)
        forests.set(i, new Set())

    edges.forEach(edge => {
        forests.get(edge[0]).add(edge[1])
        forests.get(edge[1]).add(edge[0])
    })

    for(let i = 0; i < n; ++i){
        if(visited[i]) 
            continue
        visited[i] = 1
        merge(forests.get(i))
    }

    forests.forEach(e => console.log(e))

    forests.forEach(f => res -= comb2(f.size + 1))

    return res
};