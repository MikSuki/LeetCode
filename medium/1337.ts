/**
    1337. The K Weakest Rows in a Matrix
 */
function kWeakestRows(mat: number[][], k: number): number[] {
    return mat.map((arr, i) => arr.reduce((sa, v) => {
        sa[0] += v
        return sa
    }, [0, i]))
        .sort((a, b) => a[0] - b[0])
        .reduce((arr, v, i) => {
            if (i < k) arr.push(v[1])
            return arr
        }, [])
};