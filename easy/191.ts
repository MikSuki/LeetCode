function hammingWeight(n: number): number {
    const m: number = 32
    let res = 0
    for (let i = 0; i < m; ++i)
        res += n >> i & 1
    return res
};