/**
    # 1743. Restore the Array From Adjacent Pairs
 */
function restoreArray(adjacentPairs: number[][]): number[] {
    const map: Map<number, number[]> = new Map();
    const n: number = adjacentPairs.length + 1;

    // set edges
    adjacentPairs.forEach(a => {
        const [x, y] = a;
        if (!map.has(x)) map.set(x, []);
        if (!map.has(y)) map.set(y, []);
        map.get(x).push(y);
        map.get(y).push(x);
    })

    // find start
    let start: number = -1;
    for (const [k, v] of map) {
        if (v.length == 1) {
            start = k;
            break;
        }
    }

    // build result
    let last: number = -1;
    let cur: number = start;
    const res: number[] = [];
    while (res.length < n) {
        res.push(cur);
        const next: number[] = map.get(cur);
        for(let i = 0; i < next.length; ++i) {
            if(next[i] != last){
                last = cur;
                cur = next[i];
                break;
            } 
        }
    }

    return res;
};
