function generateMatrix(n: number): number[][] {
    const res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
    const count: number = n * n

    let c = 0
    let t: number = 0,
        b: number = n - 1,
        l: number = 0,
        r: number = n - 1

    while(c < count){
        for(let i = l; i <= r; ++i)
            res[t][i] = ++c
        ++t
        for(let i = t; i <= b; ++i)
            res[i][r] = ++c
        --r
        for(let i = r; i >= l; --i)
            res[b][i] = ++c
        --b
        for(let i = b; i >= t; --i)
            res[i][l] = ++c
        ++l
    }

    return res
};