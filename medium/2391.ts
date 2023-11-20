/**
    # 2391. Minimum Amount of Time to Collect Garbage
 */

function garbageCollection(garbage: string[], travel: number[]): number {
    const n: number = garbage.length;
    const pf: number[] = new Array(n).fill(0); // prefix sum of cost to reach each house
    const farthest = {
        'G': 0,
        'P': 0,
        'M': 0,
    };
    let res: number = 0;

    for(let i = 1; i < n; ++i)
        pf[i] = pf[i - 1] + travel[i - 1];

    for(let i = 0 ; i < n; ++i){
        res += garbage[i].length;
        for(const c of garbage[i])
            farthest[c] = i;
    }

    for(const [type, end] of Object.entries(farthest))
        res += pf[end];

    return res;
};
