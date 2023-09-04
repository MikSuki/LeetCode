/**
    62. Unique Paths
 */
function uniquePaths(m: number, n: number): number {
    const fac = (x: number, acc: number) => {
        if (x == 0) return 1
        if (x == 1) return acc
        return fac(x - 1, acc * x)
    }
    m--
    n--
    return fac(m + n, 1) / fac(m, 1) / fac(n, 1)
};