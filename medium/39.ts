/**
    39. Combination Sum
 */
function combinationSum(candidates: number[], target: number): number[][] {
    const min: number = candidates.reduce((min, v) => Math.min(min, v), Number.MAX_SAFE_INTEGER)
    if (target < min) return []

    const comb: number[][][] = new Array(target + 1).fill(null).map(() => [])
    candidates.forEach(c => {
        if (c <= target) comb[c].push([c])
        for (let i = 1; i <= target - c; ++i) {
            if (comb[i].length == 0)
                continue
            comb[i].forEach(arr => {
                comb[i + c].push(arr.slice().concat([c]))
            })
        }
    })

    return comb[target]
};


// 2: 1
// 3: 1
// 4: 1
// 5: 2
// 6: 2
// 7: 3 (2, 5) (3, 4) (5, 2)