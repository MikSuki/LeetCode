function findJudge(n: number, trust: number[][]): number {
    if(n === 1) return 1
    const trusts: number[] = new Array(n + 1).fill(0)
    for(const [u, v] of trust){
        trusts[u]--
        trusts[v]++
    }
    return trusts.indexOf(n - 1)
};