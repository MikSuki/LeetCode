function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const G = new Map<number, number[][]>()
    const costs: number[] = new Array(n).fill(Number.MAX_SAFE_INTEGER)
    // queue存兩個是為了要記著走到該點時的 cost
    // 不記的話可能會被蓋掉
    // 代表不只經過 round 個點
    const q: number[] = [src, 0]
    costs[src] = 0
    // init Graph
    for(const [u, v, price] of flights){
        let arr = G.get(u)
        if(!arr) {
            arr = []
            G.set(u, arr)
        }
        arr.push([v, price])
    }
    // BFS
    let size: number
    let round = 0
    while((size = q.length / 2) != 0 && round <= k){
        while(size){
            const u = q.shift()
            const d = q.shift()
            let arr = G.get(u)
            --size
            if(!arr) continue
            for(let i = 0; i < arr.length; ++i){
                const v: number = arr[i][0]
                const price: number = arr[i][1]
                if(d + price >= costs[v]) continue
                costs[v] = d + price
                q.push(v, costs[v])
            }
        }
        ++round
    }
    return costs[dst] == Number.MAX_SAFE_INTEGER ? -1 : costs[dst]
};